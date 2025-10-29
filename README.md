# ePortfolio

A modern portfolio website built with React, TypeScript, and Vite.

## 🚀 GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Setup Instructions

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch:**
   - Once you merge changes to the `main` branch, the GitHub Actions workflow will automatically:
     - Build the application
     - Deploy it to GitHub Pages

3. **Access your site:**
   - Your portfolio will be available at: `https://ilias8649.github.io/eportfolio/`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run typecheck
```

## 📁 Project Structure

- `src/` - Source code
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions workflows
- `dist/` - Production build output (generated)

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)
- EmailJS
- Supabase

## 📝 Notes

- The site is configured with base path `/eportfolio/` for GitHub Pages
- The workflow automatically builds and deploys on push to main
- Make sure GitHub Pages is enabled in repository settings with source set to "GitHub Actions"
