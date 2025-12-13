# 🚨 MongoDB Authentication Fix - Vercel Deployment

## Issue Description
The error `MongoServerError: bad auth : authentication failed` occurs because MongoDB credentials are either missing or incorrect in your Vercel deployment environment variables.

## 🔧 Immediate Fix Steps

### 1. Set up MongoDB Atlas (if you haven't already)
1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
2. Create a free account and cluster
3. Create a database user:
   - Go to **Database Access**
   - Click **Add New Database User**
   - Choose **Password** authentication
   - Set username and strong password
   - Grant **Read and write to any database** role
4. Allow network access:
   - Go to **Network Access**
   - Click **Add IP Address**
   - Choose **Allow Access from Anywhere** (0.0.0.0/0) for Vercel deployment
5. Get connection string:
   - Go to **Clusters**
   - Click **Connect** → **Connect your application**
   - Copy the connection string
   - Replace `<password>` with your actual password

### 2. Update Vercel Environment Variables
1. Go to your **Vercel Dashboard**
2. Select your **chat-ui project**
3. Navigate to **Settings** → **Environment Variables**
4. Add/Update these **REQUIRED** variables:

```bash
# REQUIRED - MongoDB Configuration
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/chat-ui
MONGODB_DB_NAME=chat-ui
MONGODB_DIRECT_CONNECTION=false

# REQUIRED - AI API (Choose one)
# Option A: Hugging Face (Free)
OPENAI_BASE_URL=https://router.huggingface.co/v1
OPENAI_API_KEY=hf_your_token_here

# Option B: OpenAI
# OPENAI_BASE_URL=https://api.openai.com/v1
# OPENAI_API_KEY=sk-your_key_here

# REQUIRED - App Configuration
PUBLIC_APP_NAME=ChatUI
PUBLIC_APP_ASSETS=chatui
PUBLIC_ORIGIN=https://your-app-name.vercel.app
```

### 3. Redeploy
After setting environment variables:
1. Go to **Deployments** tab in Vercel
2. Click **Redeploy** on the latest deployment
3. Or trigger new deployment by pushing to your repository

## 🔍 Troubleshooting

### Error: "bad auth : authentication failed"
**Cause**: Wrong MongoDB credentials
**Fix**: 
- Double-check username/password in connection string
- Ensure database user has correct permissions
- Verify network access allows Vercel's IP ranges

### Error: "No MongoDB URL found, using in-memory server"
**Cause**: Missing `MONGODB_URL` environment variable
**Fix**: Add `MONGODB_URL` in Vercel environment variables

### Error: "getaddrinfo ENOTFOUND"
**Cause**: Network connectivity or DNS issues
**Fix**: 
- Check MongoDB Atlas cluster is running
- Verify connection string format
- Ensure network access is configured for 0.0.0.0/0

### Error: Function timeout
**Cause**: MongoDB connection taking too long
**Fix**:
- Check MongoDB Atlas region (choose closest to your users)
- Verify cluster isn't paused (free tier auto-pauses)
- Consider upgrading to a paid cluster for better performance

## 🎯 Quick Validation

Test your MongoDB connection locally before deploying:

1. Copy `.env.local.example` to `.env.local`
2. Fill in your actual MongoDB credentials
3. Run locally:
```bash
npm install
npm run dev
```
4. If it works locally, the same credentials should work on Vercel

## 📋 Required Environment Variables Checklist

- [ ] `MONGODB_URL` - Your MongoDB Atlas connection string
- [ ] `MONGODB_DB_NAME` - Database name (default: chat-ui)
- [ ] `OPENAI_BASE_URL` - AI API endpoint
- [ ] `OPENAI_API_KEY` - AI API key
- [ ] `PUBLIC_APP_NAME` - Your app name
- [ ] `PUBLIC_APP_ASSETS` - Asset folder (default: chatui)
- [ ] `PUBLIC_ORIGIN` - Your Vercel app URL

## 🔗 Helpful Links
- [MongoDB Atlas Setup](https://mongodb.com/atlas)
- [Hugging Face Tokens](https://huggingface.co/settings/tokens)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---
**Note**: Never commit real credentials to your repository. Always use environment variables for sensitive data.