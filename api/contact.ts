import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactInquirySchema } from '../shared/schema';
import { z } from 'zod';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = insertContactInquirySchema.parse(req.body);
    
    const inquiry: ContactInquiry = {
      ...validatedData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date()
    };
    
    inquiries.push(inquiry);
    
    console.log('New contact inquiry received:', inquiry);
    
    // TODO: Add SendGrid email notification here
    // For now, just log the inquiry
    
    res.json({ 
      success: true, 
      message: "Thank you for your inquiry! I will get back to you within 24 hours.",
      id: inquiry.id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data", 
        errors: error.errors 
      });
    } else {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Something went wrong. Please try again." 
      });
    }
  }
}