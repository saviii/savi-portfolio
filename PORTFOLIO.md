# Savi's Portfolio Documentation

## Project Overview

This document outlines the development of a personal portfolio website built with Next.js 14. The portfolio showcases professional experience, skills, projects, and contact information.

## Portfolio Features

The portfolio includes:
- Personal introduction with greeting text
- About section with professional summary
- Work Experience section with chronological job history
- Skills section showcasing technical and soft skills
- Projects section highlighting notable achievements
- Contact section with social links

## Customizations Made

Throughout development, we made several customizations:

1. **User Interface**
   - Implemented a clean, modern UI with responsive design
   - Added blur fade animations for text and section transitions
   - Temporarily removed the education section (commented out in code for future restoration)

2. **Social Media Integration**
   - Updated social media links:
     - GitHub: https://github.com/saviii
     - LinkedIn: https://www.linkedin.com/in/saviii/
     - Twitter: https://x.com/SaviPabla

3. **Text Content**
   - Updated the contact section text to: "Want to connect? Shoot me a message on Twitter or LinkedIn and I'll respond whenever I can."
   - Modified job title at Yahoo Finance from "Principal Product Manager" to "Senior Product Manager"
   - Added a personal tagline: "Embracing the unknown: A PM on a quest to build, learn, and discover the magic in tech and life (with a few dog walks along the way)."
   - Removed the professional description from the hero section to create a more personal introduction

4. **Technical Improvements**
   - Addressed component issues in the codebase
   - Fixed rendering issues with client components in Next.js 14

## Git Setup and Workflow

The portfolio was set up with Git version control and pushed to GitHub using the following steps:

```bash
# Initialize a new Git repository
git init

# Add GitHub repository as remote origin
git remote add origin git@github.com:saviii/savi-porfolio.git

# Add all files to Git tracking
git add .

# Create initial commit
git commit -m "Initial portfolio commit with updated social links and personal introduction"

# Push to GitHub and set up tracking
git push -u origin main
```

## Project Structure

The project follows a standard Next.js application structure:

- `src/app/`: Application pages and routes
- `src/components/`: Reusable UI components
- `src/data/`: Data files for resume and blog content
- `public/`: Static assets like images and icons

## Development Workflow

### Running the Development Server

To work on the portfolio locally, use:

```bash
# Start the development server
npm run dev
```

This will start the Next.js development server at http://localhost:3000.

### Making Changes

1. Modify the relevant files in the src directory
2. The development server will automatically recompile and refresh
3. Once changes are finalized, commit them to Git

### Git Workflow for Future Changes

```bash
# Check status of changed files
git status

# Add changed files to staging
git add .

# Create a commit with descriptive message
git commit -m "Description of changes made"

# Push changes to GitHub
git push
```

## Notes About pnpm

There appears to be a reference to pnpm in the project, but it's not installed in your environment. The development server shows warnings about pnpm not being found but still functions correctly using npm. You can either:

1. Continue using npm without any changes
2. Install pnpm globally if needed: `npm install -g pnpm`

## Next Steps and Future Improvements

Potential future enhancements:
- Deploy the portfolio to a hosting service (Vercel, Netlify, etc.)
- Implement blog functionality
- Restore and update the education section
- Add more interactive elements or animations
- Set up continuous deployment from GitHub

## Troubleshooting

If you encounter issues:
1. Check the console for error messages
2. Verify Node.js and npm versions are compatible with Next.js 14
3. Try clearing the Next.js cache: `rm -rf .next`
4. Reinstall dependencies: `npm install`

---

This documentation was created on June 2024 as a reference for future development. 