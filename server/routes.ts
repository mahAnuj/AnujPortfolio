import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Simple validation schema for development (matches serverless function)
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission (development only - production uses serverless function)
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("🧪 DEV: New contact inquiry received:", {
        ...validatedData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date()
      });
      
      console.log("📧 DEV: Email sending skipped in development");
      console.log("💡 DEV: Use production environment or SendGrid test script for email testing");
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry! I will get back to you within 24 hours.",
        id: Math.random().toString(36).substr(2, 9)
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
