#!/usr/bin/env node

/**
 * SendGrid Debug Test Script
 * Usage: node debug/test-sendgrid.js
 * 
 * This script helps debug SendGrid email sending in development
 */

import dotenv from 'dotenv';
import { MailService } from '@sendgrid/mail';

// Load environment variables
dotenv.config();

console.log('🔍 SendGrid Debug Test Started');
console.log('================================');

// Check environment
console.log('📊 Environment Check:');
console.log('- NODE_ENV:', process.env.NODE_ENV || 'not set');
console.log('- SENDGRID_API_KEY present:', !!process.env.SENDGRID_API_KEY);
console.log('- SENDGRID_API_KEY length:', process.env.SENDGRID_API_KEY?.length || 0);
console.log('- SENDGRID_API_KEY starts with SG.:', process.env.SENDGRID_API_KEY?.startsWith('SG.') || false);

if (!process.env.SENDGRID_API_KEY) {
  console.log('❌ SENDGRID_API_KEY not found');
  console.log('💡 Create .env file with: SENDGRID_API_KEY=your_api_key_here');
  process.exit(1);
}

async function testSendGrid() {
  try {
    console.log('\n📧 Testing SendGrid...');
    
    const mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);
    
    const testEmail = {
      to: 'anujmahajan.dev@gmail.com',
      from: 'mahajananuj07@gmail.com', // Must be verified
      subject: '🧪 SendGrid Test Email - ' + new Date().toISOString(),
      html: `
        <h2>🧪 SendGrid Test Email</h2>
        <p>This is a test email sent from your portfolio development environment.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
        <p>If you receive this email, SendGrid is working correctly! ✅</p>
      `,
      text: `SendGrid Test Email - ${new Date().toISOString()}\n\nThis is a test email. If you receive this, SendGrid is working correctly!`
    };
    
    console.log('📬 Sending test email to:', testEmail.to);
    console.log('📝 Subject:', testEmail.subject);
    
    const response = await mailService.send(testEmail);
    
    console.log('✅ Email sent successfully!');
    console.log('📊 Response details:');
    console.log('- Status Code:', response[0]?.statusCode);
    console.log('- Message ID:', response[0]?.headers?.['x-message-id']);
    console.log('- Full response:', response[0]);
    
    console.log('\n🎉 SendGrid test completed successfully!');
    console.log('📬 Check your email inbox for the test message.');
    
  } catch (error) {
    console.log('❌ SendGrid test failed:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    
    if (error.response) {
      console.error('HTTP Status:', error.response.status);
      console.error('Response body:', error.response.body);
    }
    
    // Common error troubleshooting
    if (error.code === 401 || error.message.includes('Unauthorized')) {
      console.log('\n💡 Troubleshooting: Invalid API Key');
      console.log('- Check if your SENDGRID_API_KEY is correct');
      console.log('- Verify the API key has Mail Send permissions');
    }
    
    if (error.code === 403 || error.message.includes('Forbidden')) {
      console.log('\n💡 Troubleshooting: Sender Not Verified');
      console.log('- Verify mahajananuj07@gmail.com in SendGrid dashboard');
      console.log('- Or use a verified sender domain');
    }
    
    console.log('\n📚 SendGrid Documentation: https://docs.sendgrid.com/');
    process.exit(1);
  }
}

testSendGrid();