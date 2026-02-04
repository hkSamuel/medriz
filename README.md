<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally and deploy it to GitHub Pages.

View your app in AI Studio: https://ai.studio/apps/drive/1tYJCaAwuG-f7E15UgQRt6NQ6F3Q73XET

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

Your website can be automatically deployed to GitHub Pages with every push to the main branch.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Add your Gemini API Key as a repository secret:**
   - Go to **Settings** > **Secrets and variables** > **Actions**
   - Click **New repository secret**
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key
   - Click **Add secret**

3. **Deploy:**
   - Push your code to the `main` branch
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://hksamuel.github.io/medriz/`

### Manual Deployment

You can also trigger a manual deployment:
- Go to **Actions** tab in your repository
- Select **Deploy to GitHub Pages** workflow
- Click **Run workflow**

### Build Locally

To test the production build locally:
```bash
npm run build
npm run preview
```

The built files will be in the `dist` directory.

