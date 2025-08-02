import { MailService } from '@sendgrid/mail';
import type { ContactInquiry } from '@shared/schema';

// WhatsApp Business API integration (using WhatsApp API service)
interface WhatsAppMessage {
  to: string;
  text: string;
}

// Email notification service using SendGrid
class EmailNotificationService {
  private mailService: MailService | null = null;

  constructor() {
    if (process.env.SENDGRID_API_KEY) {
      this.mailService = new MailService();
      this.mailService.setApiKey(process.env.SENDGRID_API_KEY);
    }
  }

  async sendInquiryEmail(inquiry: ContactInquiry): Promise<boolean> {
    if (!this.mailService) {
      console.log('SendGrid not configured - Email notification skipped');
      return false;
    }

    try {
      const emailContent = this.formatEmailContent(inquiry);
      
      await this.mailService.send({
        to: 'mahajananuj07@gmail.com', // Your email
        from: 'mahajananuj07@gmail.com', // Must be verified sender
        subject: `🚀 New Project Inquiry: ${inquiry.projectType || 'General'} - ${inquiry.budget || 'Budget TBD'}`,
        html: emailContent,
        text: this.formatTextContent(inquiry)
      });

      console.log('✅ Email notification sent successfully');
      return true;
    } catch (error) {
      console.error('❌ Email notification failed:', error);
      return false;
    }
  }

  private formatEmailContent(inquiry: ContactInquiry): string {
    const formattedDate = inquiry.createdAt?.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) || 'Unknown date';

    return `
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
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
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
            <div class="footer">
                <p>💡 <strong>Quick Actions:</strong></p>
                <p>• Reply to <a href="mailto:${inquiry.email}">send proposal</a></p>
                <p>• Contact via WhatsApp: <a href="https://wa.me/${inquiry.email.includes('@') ? '' : inquiry.email}">Open WhatsApp</a></p>
                <p>• View all inquiries: <a href="https://your-domain.com/api/contact-inquiries">Admin Panel</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
  }

  private formatTextContent(inquiry: ContactInquiry): string {
    const formattedDate = inquiry.createdAt?.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    }) || 'Unknown date';

    return `
🚀 NEW PROJECT INQUIRY

👤 Client: ${inquiry.name}
📧 Email: ${inquiry.email}
💼 Project: ${inquiry.projectType || 'Not specified'}
💰 Budget: ${inquiry.budget || 'Not specified'}
⏰ Received: ${formattedDate}

💬 Message:
${inquiry.message}

Quick Actions:
• Reply to send proposal: ${inquiry.email}
• WhatsApp contact: https://wa.me/919560519689
• View all inquiries: https://your-domain.com/api/contact-inquiries
    `;
  }
}

// WhatsApp notification service
class WhatsAppNotificationService {
  // Using WhatsApp Business API or services like Twilio/MessageBird
  async sendInquiryWhatsApp(inquiry: ContactInquiry): Promise<boolean> {
    try {
      const message = this.formatWhatsAppMessage(inquiry);
      
      // Option 1: Direct WhatsApp link (opens WhatsApp with pre-filled message)
      const whatsappUrl = `https://wa.me/919560519689?text=${encodeURIComponent(message)}`;
      
      console.log('📱 WhatsApp notification ready:', whatsappUrl);
      console.log('💬 Message preview:', message);
      
      // In a real implementation, you would use WhatsApp Business API
      // For now, we'll log the formatted message
      return true;
    } catch (error) {
      console.error('❌ WhatsApp notification failed:', error);
      return false;
    }
  }

  private formatWhatsAppMessage(inquiry: ContactInquiry): string {
    const formattedDate = inquiry.createdAt?.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) || 'Unknown date';

    return `🚀 *NEW PROJECT INQUIRY*

👤 *Client:* ${inquiry.name}
📧 *Email:* ${inquiry.email}
💼 *Project:* ${inquiry.projectType || 'Not specified'}
💰 *Budget:* ${inquiry.budget || 'Not specified'}
⏰ *Time:* ${formattedDate}

💬 *Message:*
${inquiry.message}

_From your portfolio website_`;
  }
}

// Unified notification service
export class NotificationService {
  private emailService: EmailNotificationService;
  private whatsappService: WhatsAppNotificationService;

  constructor() {
    this.emailService = new EmailNotificationService();
    this.whatsappService = new WhatsAppNotificationService();
  }

  async sendInquiryNotifications(inquiry: ContactInquiry): Promise<{
    email: boolean;
    whatsapp: boolean;
  }> {
    console.log('🔔 Sending notifications for new inquiry from:', inquiry.name);

    const [emailSuccess, whatsappSuccess] = await Promise.all([
      this.emailService.sendInquiryEmail(inquiry),
      this.whatsappService.sendInquiryWhatsApp(inquiry)
    ]);

    return {
      email: emailSuccess,
      whatsapp: whatsappSuccess
    };
  }
}

export const notificationService = new NotificationService();