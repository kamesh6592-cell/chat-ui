# Chat-UI Deployment Guide - UPDATED

## ✅ Project Successfully Imported and Configured

The Chat-UI repository has been successfully imported and is ready for deployment on Vercel.

## 🚀 Quick Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**: 
   - Create a new GitHub repository
   - Push this code to your repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect it as a SvelteKit project

3. **Set Environment Variables** (CRITICAL!):
   In Vercel dashboard → Settings → Environment Variables, add:

   **⚠️ REQUIRED - App will crash without these:**
   ```
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/chat-ui?retryWrites=true&w=majority
   OPENAI_BASE_URL=https://router.huggingface.co/v1
   OPENAI_API_KEY=hf_your_token_here
   PUBLIC_APP_ASSETS=chatui
   ```

   **Recommended for proper functionality:**
   ```
   PUBLIC_ORIGIN=https://your-app-name.vercel.app
   PUBLIC_APP_NAME=My Chat UI
   PUBLIC_APP_DESCRIPTION=AI Chat Interface
   MONGODB_DB_NAME=chat-ui
   ```

4. **Deploy**: Click "Deploy" - Vercel will handle the rest!

## 🔑 Required API Keys & Services

### 1. MongoDB Database (Required)

**Option A: MongoDB Atlas (Recommended)**
- Free tier available: [mongodb.com/atlas](https://mongodb.com/atlas)
- Create cluster → Get connection string
- Format: `mongodb+srv://username:password@cluster.mongodb.net/chat-ui`

### 2. AI Model API (Required)

**Option A: Hugging Face (Recommended - Free Tier)**
- Sign up: [huggingface.co](https://huggingface.co)
- Create token: Settings → Access Tokens
- Set: `OPENAI_BASE_URL=https://router.huggingface.co/v1`
- Set: `OPENAI_API_KEY=hf_your_token_here`

**Option B: OpenAI**
- Get API key: [platform.openai.com](https://platform.openai.com)
- Set: `OPENAI_BASE_URL=https://api.openai.com/v1`
- Set: `OPENAI_API_KEY=sk-your_key_here`

## 📋 Environment Variables Reference

Copy `.env.example` to `.env.local` and configure:

### Essential Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URL` | MongoDB connection string | `mongodb+srv://...` |
| `OPENAI_BASE_URL` | AI API endpoint | `https://router.huggingface.co/v1` |
| `OPENAI_API_KEY` | AI API key | `hf_...` or `sk-...` |
| `PUBLIC_APP_ASSETS` | Asset folder name | `chatui` |
| `PUBLIC_ORIGIN` | Your app's URL | `https://my-chat.vercel.app` |
| `PUBLIC_APP_NAME` | Your app name | `My Chat UI` |

## 🔧 Troubleshooting

### "ENOENT: no such file or directory, mkdir" Error

**Problem**: App crashes with directory creation error

**Solution**: 
1. **Set MONGODB_URL** - The app requires a real MongoDB database on Vercel
2. **Cannot use in-memory database** on serverless platforms
3. **Get MongoDB Atlas free tier**: [mongodb.com/atlas](https://mongodb.com/atlas)

### "No MongoDB URL found, using in-memory server" Warning

**Problem**: Missing MONGODB_URL environment variable

**Solution**: Add `MONGODB_URL` in Vercel → Settings → Environment Variables

### Function timeout or crashes

**Problem**: Missing required API keys

**Solution**: Ensure both `MONGODB_URL` and `OPENAI_API_KEY` are set

### Assets not loading (404 errors for logo.svg, favicon, etc.)

**Problem**: Missing `PUBLIC_APP_ASSETS` environment variable

**Solution**: Add `PUBLIC_APP_ASSETS=chatui` in Vercel environment variables

### "An error occurred" when sending messages

**Problem**: Missing AI API configuration or invalid API keys

**Solution**: 
1. Verify `OPENAI_BASE_URL` and `OPENAI_API_KEY` are set correctly
2. For Hugging Face: Get token from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
3. Check Vercel function logs for specific error messages

---

**Ready to deploy!** 🚀