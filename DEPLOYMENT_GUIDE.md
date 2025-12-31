# 🚀 Deployment Guide - College Organizer

This guide covers the complete deployment process for the College Organizer application, including both frontend and backend deployment to GitHub and Vercel.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Environment Variables](#environment-variables)
4. [GitHub Setup](#github-setup)
5. [Vercel Deployment](#vercel-deployment)
6. [Post-Deployment](#post-deployment)
7. [Troubleshooting](#troubleshooting)

---

## 🔧 Prerequisites

Before deploying, ensure you have:

- ✅ **Git** installed on your system
- ✅ **GitHub account** created
- ✅ **Vercel account** (sign up at [vercel.com](https://vercel.com))
- ✅ **Supabase project** set up with your database
- ✅ All environment variables ready (see below)

---

## 📁 Project Structure

Your project has two main directories:

```
Clgcalender/
├── frontend/          # React + Vite application
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
└── backend/           # Node.js + Express API
    ├── src/
    ├── package.json
    └── vercel.json
```

> [!IMPORTANT]
> Frontend and backend will be deployed as **separate projects** on Vercel.

---

## 🔐 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `backend/` directory with:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Server Configuration
PORT=5001
NODE_ENV=production
```

**Where to find Supabase credentials:**
1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy the **Project URL** and **anon/public key**

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory with:

```env
# Supabase Configuration (for frontend)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Backend API URL (will be updated after backend deployment)
VITE_API_URL=http://localhost:5001/api
```

> [!WARNING]
> **Never commit `.env` files to Git!** They contain sensitive credentials.

---

## 📦 GitHub Setup

### Step 1: Create `.gitignore` File

Create a `.gitignore` file in the **root directory** (`Clgcalender/`):

```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment Variables
.env
.env.local
.env.production
.env.development

# Build outputs
dist/
build/
.vercel/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
```

### Step 2: Initialize Git Repository

Open your terminal in the project root directory:

```bash
# Navigate to project root
cd "e:\Launchory Website\Clgcalender"

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: College Organizer app with frontend and backend"
```

### Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon → **"New repository"**
3. Fill in the details:
   - **Repository name:** `college-organizer` (or your preferred name)
   - **Description:** "Full-stack college organizer with attendance, habits, and schedule tracking"
   - **Visibility:** Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 4: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/college-organizer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

> [!TIP]
> If you encounter authentication issues, you may need to use a [Personal Access Token](https://github.com/settings/tokens) instead of your password.

---

## 🌐 Vercel Deployment

### Part 1: Deploy Backend

#### Step 1: Import Backend Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository (`college-organizer`)
5. Click **"Import"**

#### Step 2: Configure Backend Project

In the project configuration screen:

**Framework Preset:**
- Select **"Other"** (since it's a custom Express app)

**Root Directory:**
- Click **"Edit"** next to Root Directory
- Enter: `backend`
- Click **"Continue"**

**Build & Development Settings:**
- **Build Command:** Leave empty or use `npm install`
- **Output Directory:** Leave empty
- **Install Command:** `npm install`

**Environment Variables:**
Click **"Add"** and add these variables:

| Name | Value |
|------|-------|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Your Supabase anon key |
| `NODE_ENV` | `production` |

#### Step 3: Deploy Backend

1. Click **"Deploy"**
2. Wait for deployment to complete (usually 1-2 minutes)
3. Once deployed, you'll see a success screen
4. **Copy the deployment URL** (e.g., `https://your-backend.vercel.app`)

> [!IMPORTANT]
> Save this backend URL! You'll need it for the frontend deployment.

#### Step 4: Configure Custom Domain (Optional)

1. Go to your backend project settings
2. Click **"Domains"**
3. Add a custom domain like `api.yourdomain.com`

---

### Part 2: Deploy Frontend

#### Step 1: Import Frontend Project

1. Go back to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import the **same GitHub repository** again
4. Click **"Import"**

#### Step 2: Configure Frontend Project

In the project configuration screen:

**Framework Preset:**
- Vercel should auto-detect **"Vite"**

**Root Directory:**
- Click **"Edit"** next to Root Directory
- Enter: `frontend`
- Click **"Continue"**

**Build & Development Settings:**
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

**Environment Variables:**
Click **"Add"** and add these variables:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `VITE_API_URL` | `https://your-backend.vercel.app/api` |

> [!WARNING]
> Make sure to use the **backend URL** you copied earlier for `VITE_API_URL`, and add `/api` at the end!

#### Step 3: Deploy Frontend

1. Click **"Deploy"**
2. Wait for deployment to complete
3. Once deployed, you'll get a URL like `https://your-app.vercel.app`

#### Step 4: Update Backend CORS (Important!)

After frontend deployment, you need to update the backend to allow requests from your frontend URL:

1. Go to your **backend project** on Vercel
2. Go to **Settings** → **Environment Variables**
3. The CORS is already configured in your `backend/src/index.js` to accept Vercel domains
4. If you used a custom domain, you may need to update the CORS configuration

**To update CORS for custom domain:**

Edit `backend/src/index.js` and update the CORS origin array:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://clgcalender.vercel.app',
    'https://your-custom-domain.com',  // Add your custom domain
    /\.vercel\.app$/ // Allow all Vercel preview deployments
  ],
  credentials: true
}));
```

Then commit and push the changes:

```bash
git add .
git commit -m "Update CORS for custom domain"
git push
```

Vercel will automatically redeploy your backend.

---

## ✅ Post-Deployment

### Verify Backend Deployment

1. Visit your backend URL: `https://your-backend.vercel.app`
2. You should see a JSON response:
   ```json
   {
     "message": "College Organizer Backend (Supabase)",
     "status": "✅ Connected to Supabase"
   }
   ```

### Verify Frontend Deployment

1. Visit your frontend URL: `https://your-app.vercel.app`
2. Test the following:
   - ✅ Registration page loads
   - ✅ Login functionality works
   - ✅ Dashboard displays correctly
   - ✅ Attendance tracking works
   - ✅ Habits page functions
   - ✅ Schedule displays

### Test API Connection

1. Open browser DevTools (F12)
2. Go to the **Network** tab
3. Navigate through your app
4. Check that API calls to your backend are successful (status 200)

---

## 🔄 Updating Your Deployment

### For Code Changes

Whenever you make changes to your code:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Description of changes"

# Push to GitHub
git push
```

**Vercel will automatically deploy** your changes when you push to the `main` branch!

### For Environment Variable Changes

1. Go to Vercel Dashboard
2. Select your project (frontend or backend)
3. Go to **Settings** → **Environment Variables**
4. Update the variable
5. Click **"Save"**
6. Go to **Deployments** tab
7. Click **"..."** on the latest deployment → **"Redeploy"**

---

## 🐛 Troubleshooting

### Issue: "CORS Error" in Browser Console

**Solution:**
1. Check that `VITE_API_URL` in frontend includes `/api` at the end
2. Verify backend CORS configuration includes your frontend domain
3. Redeploy backend after CORS changes

### Issue: "Supabase Keys Missing" Alert

**Solution:**
1. Verify environment variables are set in Vercel
2. Make sure variable names match exactly:
   - Backend: `SUPABASE_URL`, `SUPABASE_ANON_KEY`
   - Frontend: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
3. Redeploy after adding variables

### Issue: "404 Not Found" on Page Refresh

**Solution:**
- This is already handled by `frontend/vercel.json`
- If issue persists, verify the file contains:
  ```json
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }
  ```

### Issue: API Calls Failing with 500 Error

**Solution:**
1. Check Vercel backend logs:
   - Go to backend project → **Deployments**
   - Click on latest deployment → **View Function Logs**
2. Verify Supabase credentials are correct
3. Check that database tables exist in Supabase

### Issue: Build Fails on Vercel

**Solution:**
1. Check the build logs in Vercel
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility
4. Try building locally first: `npm run build`

---

## 📊 Monitoring Your Deployment

### Vercel Analytics

1. Go to your project on Vercel
2. Click **"Analytics"** tab
3. View traffic, performance, and errors

### Vercel Logs

1. Go to your project on Vercel
2. Click **"Deployments"**
3. Click on any deployment
4. View **"Build Logs"** and **"Function Logs"**

### Supabase Monitoring

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Check **"Database"** → **"Tables"** for data
4. Check **"Logs"** for API requests

---

## 🎯 Quick Reference

### Important URLs

| Service | URL |
|---------|-----|
| GitHub Repo | `https://github.com/YOUR_USERNAME/college-organizer` |
| Backend (Vercel) | `https://your-backend.vercel.app` |
| Frontend (Vercel) | `https://your-app.vercel.app` |
| Supabase Dashboard | `https://app.supabase.com` |

### Common Commands

```bash
# Check Git status
git status

# View commit history
git log --oneline

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# View remote URL
git remote -v
```

---

## 🎉 Success Checklist

- [ ] `.gitignore` file created
- [ ] Git repository initialized
- [ ] Code pushed to GitHub
- [ ] Backend deployed to Vercel
- [ ] Backend environment variables configured
- [ ] Backend URL copied
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variables configured (including backend URL)
- [ ] CORS updated in backend
- [ ] Backend API responding correctly
- [ ] Frontend loads and displays data
- [ ] All features tested and working
- [ ] Custom domains configured (optional)

---

## 📞 Support

If you encounter issues:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Check the [Supabase Documentation](https://supabase.com/docs)
3. Review Vercel deployment logs
4. Check browser console for errors

---

**🎊 Congratulations!** Your College Organizer app is now live on the internet!

Share your frontend URL with others to let them use your app.
