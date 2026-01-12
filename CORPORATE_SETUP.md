# Quick Start Guide - Corporate Profile

## 🚀 Getting Started

You're currently on the `corporate-profile` branch. This branch contains a complete corporate company profile website.

## ✅ What's Been Created

### Components
- ✅ Hero Section with CTAs and metrics
- ✅ Company Overview (Mission, Vision, Values)
- ✅ Leadership Team section
- ✅ Solution/Product showcase
- ✅ Market Opportunity with animated counters
- ✅ Traction & Milestones timeline
- ✅ Why Invest section with use of funds visualization
- ✅ Credentials & Experience
- ✅ Contact Form with validation
- ✅ Footer with social links
- ✅ Sticky Navigation
- ✅ Back to Top button
- ✅ Loading animation

### Features
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Framer Motion animations
- ✅ Form validation
- ✅ SEO meta tags
- ✅ Accessibility features
- ✅ Professional design

## 📝 Next Steps

1. **Customize Content**: Search for `[BRACKETED_PLACEHOLDERS]` and replace with your content
2. **Add Images**: Replace placeholder images with your own
3. **Update Colors**: Customize colors in `tailwind.config.js`
4. **Configure Form**: Set up backend integration for contact form
5. **Deploy**: Follow deployment instructions in `README_CORPORATE.md`

## 🔄 Switching Between Versions

### To use Corporate Profile (current):
- Already set up! Just run `npm run dev`

### To switch back to Personal Profile:
1. Update `src/main.tsx`:
   ```typescript
   import App from './App.tsx';
   // Change from AppCorporate to App
   ```

## 📁 Key Files

- `src/AppCorporate.tsx` - Main app component
- `src/components/corporate/` - All section components
- `tailwind.config.js` - Tailwind configuration
- `index.html` - HTML with meta tags
- `README_CORPORATE.md` - Full documentation

## 🎨 Customization Checklist

- [ ] Replace `[COMPANY_NAME]` throughout
- [ ] Update tagline and descriptions
- [ ] Add founder/team information
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Customize color scheme
- [ ] Add real market data
- [ ] Update milestones and metrics
- [ ] Configure contact form backend
- [ ] Update meta tags and SEO
- [ ] Add favicon
- [ ] Test on multiple devices
- [ ] Deploy to production

## 🐛 Troubleshooting

**Port already in use?**
- Change port in `vite.config.ts` or kill the process using port 3000

**Styles not loading?**
- Ensure Tailwind is properly configured
- Check that `index.css` is imported in `main.tsx`

**Animations not working?**
- Verify `framer-motion` is installed: `npm install framer-motion`

**Form not submitting?**
- Currently logs to console - integrate with your backend API

## 📞 Need Help?

Check `README_CORPORATE.md` for detailed documentation and customization guide.

