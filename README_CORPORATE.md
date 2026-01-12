# Corporate Company Profile Website

A modern, professional single-page company profile website designed to attract investment. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern Design**: Clean, contemporary corporate aesthetic with professional color scheme
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Fast Loading**: Optimized for performance with lazy loading and code splitting
- **Contact Form**: Fully validated contact form with error handling
- **Smooth Navigation**: Sticky header with smooth scroll-to-section functionality

## 📋 Sections Included

1. **Hero Section** - Compelling headline, CTAs, and key metrics
2. **Company Overview** - Mission, vision, values, and company story
3. **Leadership Team** - Founder/CEO profile and team members
4. **Solution/Product** - Problem statement, solution, and key features
5. **Market Opportunity** - Market size, growth projections, customer segments
6. **Traction & Milestones** - Timeline of achievements and key metrics
7. **Why Invest** - Investment thesis, use of funds, ROI projections
8. **Credentials & Experience** - Certifications, clients, industry expertise
9. **Contact Form** - Investment inquiry form with validation
10. **Footer** - Company details, social links, legal pages

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## 📦 Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone [your-repo-url]
   cd "Personal Profile V3"
   ```

2. **Switch to the corporate-profile branch**:
   ```bash
   git checkout corporate-profile
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   The app will be available at `http://localhost:3000`

## 🎨 Customization Guide

### 1. Replace Placeholder Content

Search for `[BRACKETED_PLACEHOLDERS]` throughout the codebase and replace with your actual content:

- `[COMPANY_NAME]` - Your company name
- `[COMPELLING_TAGLINE]` - Your value proposition tagline
- `[MISSION_STATEMENT]` - Your mission statement
- `[VISION_STATEMENT]` - Your vision statement
- `[FOUNDING_YEAR]` - Year your company was founded
- `[HEADQUARTERS_LOCATION]` - Your company location
- `[FOUNDER_NAME]` - Founder/CEO name
- `[BRIEF_BIO]` - Founder bio (100-150 words)
- `[LINKEDIN_URL]` - LinkedIn profile URL
- `[CONTACT_EMAIL]` - Contact email address
- `[CONTACT_PHONE]` - Contact phone number
- `[CALENDLY_LINK]` - Calendly booking link
- `[YOUR_DOMAIN_URL]` - Your website URL

### 2. Update Images

Replace placeholder images with your own:

- **Hero Background**: Update the Unsplash URL in `Hero.tsx` or use your own image
- **Team Photos**: Replace placeholder URLs in `Leadership.tsx` with actual team photos
- **Product Mockups**: Add your product images/infographics in `Solution.tsx`

### 3. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your primary brand colors
  },
  accent: {
    // Your accent colors
  },
}
```

### 4. Update Meta Tags

Edit `index.html` to update:
- Page title
- Meta descriptions
- Open Graph tags
- Structured data (JSON-LD)

### 5. Configure Contact Form

The contact form currently logs to console. To integrate with a backend:

1. Update `ContactForm.tsx`
2. Replace the form submission logic with your API endpoint
3. Add environment variables for API URLs if needed

Example integration:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### 6. Add Real Data

Update the following components with your actual data:

- **MarketOpportunity.tsx**: Update market statistics and segments
- **Traction.tsx**: Add your actual milestones and metrics
- **WhyInvest.tsx**: Update use of funds breakdown
- **Credentials.tsx**: Add your certifications and clients

## 🚢 Deployment

### Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Drag and drop the `dist` folder to Netlify, or
   - Connect your Git repository and set build command: `npm run build` and publish directory: `dist`

### Environment Variables

If you need environment variables (e.g., for API keys), create a `.env` file:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_API=your_contact_endpoint
```

Access them in code with `import.meta.env.VITE_API_URL`

## 📝 File Structure

```
src/
├── components/
│   └── corporate/
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       ├── CompanyOverview.tsx
│       ├── Leadership.tsx
│       ├── Solution.tsx
│       ├── MarketOpportunity.tsx
│       ├── Traction.tsx
│       ├── WhyInvest.tsx
│       ├── Credentials.tsx
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── BackToTop.tsx
│       └── Loading.tsx
├── AppCorporate.tsx
├── main.tsx
└── index.css
```

## 🎯 Key Features Explained

### Smooth Scroll Navigation
The navigation menu uses smooth scrolling to jump to sections. Implemented with `scrollIntoView({ behavior: 'smooth' })`.

### Animated Counters
Market statistics use animated counters that count up when scrolled into view using Intersection Observer.

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Real-time error display
- Success/error state management

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Mobile menu for navigation on small screens

### Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images (add where needed)

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Make your changes on a feature branch
2. Test thoroughly
3. Submit a pull request

## 📄 License

[Your License Here]

## 📞 Support

For questions or support, contact [CONTACT_EMAIL]

## 🎨 Design Notes

- **Color Scheme**: Professional blue and purple gradients
- **Typography**: Inter (body) and Poppins (headings)
- **Spacing**: Generous white space for readability
- **Shadows**: Subtle shadows for depth
- **Animations**: Smooth, professional animations that enhance UX without being distracting

## 🔄 Switching Back to Personal Profile

To switch back to the personal profile version:

1. Update `src/main.tsx`:
   ```typescript
   import App from './App.tsx';
   // Change AppCorporate to App
   ```

2. Or create a separate entry point for each version

## 📈 Performance Optimization

- Images are lazy-loaded
- Code splitting for vendor chunks
- Optimized bundle size
- Fast initial page load

## 🔒 Security Notes

- Form submissions should be validated server-side
- Use HTTPS in production
- Sanitize user inputs
- Implement rate limiting for contact forms

---

**Built with ❤️ for attracting investment**

