# SoftSell - Software License Resale Platform

A responsive, single-page marketing website for a fictional software license resale startup called SoftSell.

## Features Implemented

- **Responsive Design**: Fully responsive layout that works well on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with consistent branding and visual elements
- **Interactive Elements**: 
  - Contact form with client-side validation
  - Interactive hover states and animations
  - AI-powered chat widget with pre-programmed responses
- **Dark/Light Mode**: Theme toggle with system preference detection and local storage persistence
- **Content Sections**:
  - Hero section with compelling value proposition
  - "How It Works" process explanation
  - "Why Choose Us" features and benefits
  - Customer testimonials
  - Contact form

## Design Choices

### Color Palette
- Primary: Blue (#3b82f6) - Conveys trust and professionalism
- Secondary: Teal (#0d9488) - Adds a modern touch and contrasts well with blue
- Accent colors for feature highlights
- Neutral grays for text and backgrounds
- Dark mode variants with appropriate contrast

### Typography
- System font stack for optimal performance
- Consistent hierarchy with 3 font weights (regular, medium, bold)
- Proper line heights (150% for body text, 120% for headings)

### Layout & Spacing
- 8px spacing system throughout
- Card-based design for features and testimonials
- Whitespace used intentionally to enhance readability
- Grid system for responsive layouts

### Animations & Interactions
- Subtle fade-in and fade-up animations for content sections
- Smooth scrolling between sections
- Interactive hover states for buttons and links
- Loading animation for form submission

## Time Spent

- Planning & Research: 30 minutes
- UI/UX Design: 1 hour
- Core Implementation: 2 hours
- Responsive Testing & Refinement: 30 minutes
- Documentation: 15 minutes

Total: ~4 hours 15 minutes

## Tech Stack

- React.js + TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Lucide React for icons
- Context API for state management (theme)
- Local storage for theme persistence

## Future Enhancements

- Backend integration for the contact form
- More sophisticated AI chat integration with a real LLM (e.g., OpenAI)
- Additional landing pages for specific license types
- Integration with payment processors
- User accounts and dashboard for tracking license sales