# Anuj Mahajan - Portfolio Website

A modern, professional portfolio website showcasing 14+ years of software development experience with expertise in AI/ML, full-stack development, and emerging technologies.

## 🚀 Live Demo

**Coming Soon**: Will be deployed at `anujmahajan.dev`

## 📋 Overview

This portfolio website demonstrates comprehensive technical skills across multiple domains including:
- AI/ML Development & Integration
- Website Development (Full-Stack)
- Mobile Application Development
- API Development & Integration
- DevOps & Cloud Solutions
- And 9 more specialized technical domains

## ✨ Key Features

- **Modern Design**: Clean, professional UI with dark/light mode support
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Contact Integration**: Direct WhatsApp and email integration
- **Skills Showcase**: 140+ technologies across 14 specialized domains
- **Project Portfolio**: Featured projects with live demos and GitHub links
- **Contact Form**: Integrated inquiry system with email notifications
- **Config-Based Content**: Easy content management through centralized configuration

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Database**: Dual support for in-memory storage and PostgreSQL
- **ORM**: Drizzle ORM for type-safe database operations

### Additional Tools
- **Email Service**: SendGrid integration for contact notifications
- **Deployment**: Optimized for Vercel/Netlify deployment
- **Development**: Hot reloading with Vite HMR

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahAnuj/AnujPortfolio.git
   cd AnujPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional)
   ```bash
   # Create .env file for email notifications
   SENDGRID_API_KEY=your_sendgrid_api_key
   DATABASE_URL=your_postgresql_url  # Optional: for persistent storage
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5000
   ```

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── config/        # Portfolio configuration
│   │   ├── pages/         # Application pages
│   │   └── lib/           # Utilities and helpers
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── notifications.ts  # Email/notification services
├── shared/               # Shared TypeScript schemas
└── docs/                # Documentation
```

## 🔧 Configuration

### Content Management
All portfolio content is managed through `client/src/config/portfolio.ts`:
- Skills and technologies
- Project information and links
- Contact details
- Professional experience

See `CONFIG_GUIDE.md` for detailed instructions on updating content.

### Contact Form
The contact form supports:
- Project type selection (Full-stack, Frontend, Backend, Mobile, AI/ML)
- Budget range selection
- Direct email notifications via SendGrid
- WhatsApp integration for instant communication

## 📊 Performance Features

- **Fast Loading**: Optimized builds with Vite
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Mobile First**: Responsive design for all devices
- **Type Safety**: Full TypeScript coverage
- **Error Handling**: Comprehensive error boundaries and validation

## 🔗 Connect

- **Email**: mahajananuj07@gmail.com
- **WhatsApp**: +91 9560519689
- **LinkedIn**: [Anuj Mahajan](https://www.linkedin.com/in/anuj-mahajan-a2063790/)
- **GitHub**: [mahAnuj](https://github.com/mahAnuj)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:
1. Open an issue for suggestions
2. Fork the repo for your own portfolio
3. Submit a pull request for improvements

---

**Built with ❤️ by Anuj Mahajan**

*Looking for a skilled developer for your next project? [Get in touch!](https://wa.me/919560519689)*