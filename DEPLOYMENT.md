# Deployment Guide

## Production Setup

### 1. Environment Variables
Create a `.env.production` file with the following variables:

```env
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_URL=https://plerk.co.za
VITE_SITE_NAME=Benjamin Hinson

# Contact Information
VITE_CONTACT_EMAIL=bhinson@plerk.co.za
VITE_CONTACT_PHONE=+27825654665
```

### 2. Build for Production
```bash
npm run build:prod
```

### 3. Deployment Options

#### Option A: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:prod`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

#### Option B: Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Add environment variables in Vercel dashboard
4. Deploy!

#### Option C: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build:prod",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### 4. Custom Domain Setup (plerk.co.za)
1. Domain: plerk.co.za (from Afrihost)
2. Configure DNS settings in Afrihost control panel:
   
   **For Netlify:**
   - A record: @ -> 75.2.60.5
   - CNAME: www -> plerk.co.za
   
   **For Vercel:**
   - A record: @ -> 76.76.19.61
   - CNAME: www -> cname.vercel-dns.com
3. Enable SSL certificate (automatic with Netlify/Vercel)

### 5. SEO Optimization
- Update meta tags in `index.html`
- Create Open Graph image (1200x630px)
- Submit sitemap to Google Search Console
- Set up Google Analytics

### 6. Performance Monitoring
- Set up Google Analytics
- Configure Core Web Vitals monitoring
- Test with PageSpeed Insights

## Pre-deployment Checklist
- [ ] Environment variables configured
- [ ] Build runs without errors
- [ ] All images optimized
- [ ] Meta tags updated
- [ ] Analytics configured
- [ ] SSL certificate enabled
- [ ] Custom domain configured
- [ ] Sitemap submitted to search engines
