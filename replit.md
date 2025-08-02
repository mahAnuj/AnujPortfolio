# Replit.md

## Overview

This is a modern full-stack portfolio website built for Anuj Mahajan, a Senior Full-Stack Developer. The application showcases professional experience, skills, projects, and provides a contact form for potential clients. It's built with a React frontend using Vite, an Express.js backend, and uses Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Request Handling**: Express middleware for JSON parsing and logging
- **Error Handling**: Centralized error handling middleware

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Storage Strategy**: Dual implementation with in-memory storage for development and PostgreSQL for production
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Frontend Components
1. **Portfolio Sections**: Hero, Services, Skills, Projects, Testimonials, Contact
2. **Navigation**: Fixed navigation with smooth scrolling to all sections
3. **UI Library**: Complete shadcn/ui component set (buttons, forms, cards, etc.)
4. **Forms**: Contact form with validation and submission handling
5. **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Services
1. **Contact API**: Handles form submissions and stores inquiries
2. **Storage Service**: Abstracted storage interface supporting multiple implementations
3. **Route Handlers**: Organized API endpoints in `/api/*` pattern
4. **Middleware**: Request logging, error handling, and JSON parsing

### Data Models
1. **Users**: Basic user management schema
2. **Contact Inquiries**: Form submissions with name, email, project details, and timestamps

## Data Flow

1. **Form Submission**: Contact form submits to `/api/contact` endpoint
2. **Validation**: Server validates data using Zod schemas
3. **Storage**: Inquiry data is stored via the storage service abstraction
4. **Response**: Success/error response sent back to client
5. **Feedback**: Client displays toast notifications based on response

The application also supports an admin endpoint (`/api/contact-inquiries`) for retrieving all contact inquiries.

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **State Management**: TanStack React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server Framework**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build Tools**: Vite with React plugin
- **TypeScript**: Full TypeScript support across the stack
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Specialized plugins for Replit development environment

## Deployment Strategy

The application is configured for flexible deployment with environment-based configuration:

### Development
- **Server**: tsx for hot-reloading TypeScript execution
- **Client**: Vite dev server with HMR
- **Database**: Can use in-memory storage or PostgreSQL via DATABASE_URL

### Production
- **Build Process**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles server to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Database**: PostgreSQL via Neon serverless connection
- **Environment**: Configured via DATABASE_URL environment variable

### Key Features
- **Hot Reloading**: Full development experience with fast refresh
- **Type Safety**: End-to-end TypeScript for better developer experience
- **Responsive Design**: Mobile-first approach with professional styling
- **Form Handling**: Robust contact form with validation and error handling
- **Database Ready**: Production-ready database schema with migrations
- **Replit Optimized**: Special configuration for Replit development environment
- **Config-Based Content**: Centralized configuration system for easy content management

## Content Management System

The portfolio now uses a config-based system for easy content updates:

### Configuration Files
- **`client/src/config/portfolio.ts`**: Central configuration for all portfolio content
- **`CONFIG_GUIDE.md`**: Detailed guide for adding new content

### Key Benefits
- **Single Source of Truth**: All skills and projects defined in one file
- **Automatic Updates**: Counts and statistics calculated dynamically
- **Easy Maintenance**: Add new content without editing component files
- **Type Safety**: TypeScript ensures consistent data structure

### Content Structure
- **Skills Configuration**: 14 specialized domains with 140+ technologies
- **Projects Configuration**: 6 featured projects with metrics and live demo flags
- **Portfolio Metadata**: Auto-calculated counts and statistics

### Recent Updates (January 2025)
- Implemented config-based rendering system for skills and projects
- Created comprehensive documentation in CONFIG_GUIDE.md
- Automated portfolio statistics and counts
- Streamlined content management workflow