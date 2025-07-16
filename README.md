# MindBridge Therapy Website

A modern, professional therapy website built with React, featuring online booking, therapist profiles, and comprehensive mental health resources.

![MindBridge Therapy](https://img.shields.io/badge/Status-Development-yellow)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-blue)

## 🌟 Overview

MindBridge Therapy is a comprehensive mental health platform designed to connect individuals with professional therapy services. The website provides a seamless experience for discovering therapists, booking appointments, and accessing mental health resources.

## ✨ Features

### Core Features

- **Professional Homepage** - Welcoming landing page with service overview and client testimonials
- **Therapist Directory** - Searchable database of licensed mental health professionals
- **Online Booking System** - Streamlined appointment scheduling (coming soon)
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, calming design with accessibility in mind

### Planned Features

- **Secure Client Portal** - Account management and secure messaging
- **Payment Integration** - Stripe-powered billing and invoicing
- **Blog/Resources** - Mental health articles and educational content
- **Video Conferencing** - Integrated teletherapy sessions
- **HIPAA Compliance** - Enterprise-grade security and privacy

## 🛠 Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **React Router 6** - Client-side routing for single-page application
- **TailwindCSS 3** - Utility-first CSS framework with custom design tokens
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful, customizable icons

### Backend

- **Express.js** - Node.js web application framework
- **Vite** - Fast build tool and development server
- **Zod** - TypeScript-first schema validation

### Development Tools

- **Vitest** - Unit testing framework
- **ESLint & Prettier** - Code linting and formatting
- **Hot Module Replacement** - Instant development feedback

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/mindbridge-therapy.git
   cd mindbridge-therapy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server

# Testing & Quality
npm test             # Run test suite
npm run typecheck    # TypeScript type checking
npm run format.fix   # Format code with Prettier
```

## 📁 Project Structure

```
mindbridge-therapy/
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI component library
│   │   └── Navigation.tsx  # Site navigation component
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Homepage
│   │   ├── Therapists.tsx # Therapist directory
│   │   └── ...            # Other pages
│   ├── lib/               # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── App.tsx            # App entry point and routing
│   └── global.css         # Global styles and CSS variables
├── server/                # Backend Express application
│   ├── routes/            # API route handlers
│   └── index.ts           # Server configuration
├── shared/                # Shared types and utilities
└── public/                # Static assets
```

## 🎨 Design System

### Color Palette

The website uses a calming, professional color scheme:

- **Primary Teal**: `#45A19E` - Trust and professionalism
- **Sage Green**: `#A5B8A5` - Calm and healing
- **Warm Accent**: `#E8C5A0` - Comfort and warmth
- **Navy Blue**: `#2C3E4F` - Stability and expertise

### Typography

- **Font Family**: System fonts (ui-sans-serif, system-ui, sans-serif)
- **Scale**: Responsive typography with Tailwind's type scale
- **Hierarchy**: Clear heading structure for accessibility

## 🌐 Pages Overview

### Homepage (`/`)

- Hero section with clear value proposition
- Service overview cards
- Client testimonials
- Call-to-action sections

### Therapist Directory (`/therapists`)

- Searchable and filterable therapist profiles
- Professional credentials and specialties
- Availability indicators
- Direct booking integration

### Services (`/services`) - _Coming Soon_

- Detailed therapy service descriptions
- Treatment approaches and methodologies
- Pricing information

### Resources (`/resources`) - _Coming Soon_

- Mental health articles and guides
- Self-help tools and worksheets
- Educational content library

### About (`/about`) - _Coming Soon_

- Practice mission and values
- Team background and philosophy
- Facility information

### Contact (`/contact`) - _Coming Soon_

- Contact forms with spam protection
- Location and hours
- Emergency contact information

## 🔧 Development Workflow

### Adding New Pages

1. Create component in `client/pages/`
2. Add route to `client/App.tsx`
3. Update navigation in `client/components/Navigation.tsx`

### Styling Guidelines

- Use Tailwind utility classes for styling
- Follow the established design system colors
- Ensure responsive design across all breakpoints
- Maintain accessibility standards (WCAG 2.1)

### Component Development

- Use TypeScript for all components
- Follow React hooks best practices
- Leverage Radix UI for accessible base components
- Write unit tests for complex logic

## 🚦 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=your_database_url
STRIPE_SECRET_KEY=your_stripe_key
```

### Deployment Platforms

- **Recommended**: Vercel (optimized for React/Next.js)
- **Alternatives**: Netlify, Railway, Heroku
- **Self-hosted**: Docker containers included

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Write meaningful commit messages
- Include tests for new features
- Ensure accessibility compliance

## 📋 Roadmap

### Phase 1 (Current)

- [x] Modern homepage design
- [x] Therapist directory
- [x] Responsive navigation
- [x] Professional branding

### Phase 2 (Next)

- [ ] Complete all content pages
- [ ] Online booking system
- [ ] Client portal MVP
- [ ] Content management

### Phase 3 (Future)

- [ ] Payment processing
- [ ] Video conferencing
- [ ] Mobile app
- [ ] Advanced analytics

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For technical support or questions:

- **Email**: dev@mindbridge.com
- **Phone**: (555) 123-4567
- **Documentation**: [Internal Wiki]

---

**Built with ❤️ by the MindBridge Development Team**
