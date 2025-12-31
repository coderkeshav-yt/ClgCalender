# 🚀 Quick Start - Deployment Commands

This is a quick reference guide for deploying your College Organizer app.

## 📋 Pre-Deployment Checklist

- [ ] Supabase project created and database tables set up
- [ ] Environment variables ready (Supabase URL and keys)
- [ ] GitHub account created
- [ ] Vercel account created (sign up with GitHub)

---

## 🔐 Step 1: Set Up Environment Variables

### Backend (.env in backend folder)
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
PORT=5001
NODE_ENV=development
```

### Frontend (.env in frontend folder)
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_API_URL=http://localhost:5001/api
```

---

## 📦 Step 2: Push to GitHub

Run these commands in your project root directory:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: College Organizer"

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Step 3: Deploy to Vercel

### Deploy Backend First

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. **Root Directory:** `backend`
5. **Framework:** Other
6. **Environment Variables:**
   - `SUPABASE_URL` = your Supabase URL
   - `SUPABASE_ANON_KEY` = your Supabase key
   - `NODE_ENV` = `production`
7. Click **"Deploy"**
8. **Copy the deployment URL** (e.g., `https://your-backend.vercel.app`)

### Deploy Frontend Second

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import the **same** GitHub repository
4. **Root Directory:** `frontend`
5. **Framework:** Vite (auto-detected)
6. **Environment Variables:**
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase key
   - `VITE_API_URL` = `https://your-backend.vercel.app/api` ⚠️ Use backend URL + /api
7. Click **"Deploy"**

---

## ✅ Step 4: Verify Deployment

### Test Backend
Visit: `https://your-backend.vercel.app`

Should see:
```json
{
  "message": "College Organizer Backend (Supabase)",
  "status": "✅ Connected to Supabase"
}
```

### Test Frontend
Visit: `https://your-frontend.vercel.app`

- Try logging in
- Check if data loads
- Open DevTools (F12) → Network tab to verify API calls

---

## 🔄 Updating Your App

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will **automatically redeploy** both frontend and backend!

---

## 🐛 Common Issues

### CORS Error
- Make sure `VITE_API_URL` ends with `/api`
- Backend CORS is already configured for Vercel domains

### 404 on Page Refresh
- Already handled by `frontend/vercel.json`

### API Not Working
- Check environment variables in Vercel dashboard
- Verify backend URL in frontend's `VITE_API_URL`
- Check Vercel function logs

### Supabase Connection Error
- Verify Supabase credentials are correct
- Check Supabase project is active
- Ensure database tables exist

---

## 📊 Monitoring

### View Logs
1. Go to Vercel Dashboard
2. Select your project
3. Click **"Deployments"**
4. Click on latest deployment
5. View **"Function Logs"**

### Analytics
- Go to project → **"Analytics"** tab

---

## 🎯 Important URLs

| What | Where |
|------|-------|
| Vercel Dashboard | https://vercel.com/dashboard |
| Supabase Dashboard | https://app.supabase.com |
| GitHub Repo | https://github.com/YOUR_USERNAME/REPO_NAME |

---

**Need detailed instructions?** See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
