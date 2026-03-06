# My Cloudflare Pages Project

This is a simple static website ready for deployment on Cloudflare Pages.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Preview locally:
   ```bash
   npm run preview
   ```
   
   or
   
   ```bash
   npm run dev
   ```

## Deployment to Cloudflare Pages

1. Push this repository to GitHub/GitLab/Bitbucket
2. Connect your repository to Cloudflare Pages
3. Set build configuration:
   - Build command: `npm run build`
   - Build output directory: `public`
   - Environment: `npm` (or your Node.js environment)

4. Click "Save and Deploy"

Your site will be automatically built and deployed to Cloudflare's global network!
