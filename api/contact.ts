import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { MailService } from '@sendgrid/mail';

// Contact form validation schema (self-contained for serverless)
const insertContactInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

// Simple in-memory storage for demo (in production, use a database)
interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  projectType?: string;
  budget?: string;
  message: string;
  createdAt: Date;
}

const inquiries: ContactInquiry[] = [];

// SendGrid email notification function
async function sendEmailNotification(inquiry: ContactInquiry): Promise<void> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid not configured - Email notification skipped');
    return;
  }

  try {
    const mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);

    const formattedDate = inquiry.createdAt.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>🚀 New Project Inquiry!</h2>
                <p>You have received a new project inquiry from your portfolio website.</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">👤 Client Name:</div>
                    <div class="value">${inquiry.name}</div>
                </div>
                <div class="field">
                    <div class="label">📧 Email:</div>
                    <div class="value"><a href="mailto:${inquiry.email}">${inquiry.email}</a></div>
                </div>
                <div class="field">
                    <div class="label">💼 Project Type:</div>
                    <div class="value">${inquiry.projectType || 'Not specified'}</div>
                </div>
                <div class="field">
                    <div class="label">💰 Budget Range:</div>
                    <div class="value">${inquiry.budget || 'Not specified'}</div>
                </div>
                <div class="field">
                    <div class="label">💬 Message:</div>
                    <div class="value">${inquiry.message}</div>
                </div>
                <div class="field">
                    <div class="label">⏰ Received:</div>
                    <div class="value">${formattedDate}</div>
                </div>
            </div>
        </div>
    </body>
    </html>`;

    await mailService.send({
      to: 'anujmahajan.dev@gmail.com',
      from: 'mahajananuj07@gmail.com', // Must be verified sender
      subject: `🚀 New Project Inquiry: ${inquiry.projectType || 'General'} - ${inquiry.budget || 'Budget TBD'}`,
      html: emailContent,
      text: `New Project Inquiry from ${inquiry.name} (${inquiry.email}): ${inquiry.message}`
    });

    console.log('✅ Email notification sent successfully');
  } catch (error) {
    console.error('❌ Email notification failed:', error);
    // Don't fail the request if email fails
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log('🚀 Contact API called:', req.method, req.url);
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
      console.log('✅ CORS preflight handled');
      res.status(200).end();
      return;
    }

    if (req.method !== 'POST') {
      console.log('❌ Method not allowed:', req.method);
      return res.status(405).json({ message: 'Method not allowed' });
    }

    console.log('📝 Validating request body...');
    const validatedData = insertContactInquirySchema.parse(req.body);
    
    const inquiry: ContactInquiry = {
      ...validatedData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date()
    };
    
    inquiries.push(inquiry);
    console.log('✅ New contact inquiry received:', inquiry);
    
    // Send email notification via SendGrid
    console.log('📧 Attempting to send email notification...');
    await sendEmailNotification(inquiry);
    
    console.log('🎉 Contact form processed successfully');
    res.json({ 
      success: true, 
      message: "Thank you for your inquiry! I will get back to you within 24 hours.",
      id: inquiry.id 
    });
  } catch (error) {
    console.error('❌ Contact form error details:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      body: req.body,
      method: req.method,
      url: req.url
    });
    
    if (error instanceof z.ZodError) {
      console.log('📋 Validation error:', error.errors);
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data", 
        errors: error.errors 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: "Something went wrong. Please try again." 
      });
    }
  }
}