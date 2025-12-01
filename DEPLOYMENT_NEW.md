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

3. **Set Environment Variables**:
   In Vercel dashboard → Settings → Environment Variables, add:

   **Required:**
   ```
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/chat-ui
   OPENAI_BASE_URL=https://router.huggingface.co/v1
   OPENAI_API_KEY=hf_your_token_here
   PUBLIC_ORIGIN=https://your-app-name.vercel.app
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
| `PUBLIC_ORIGIN` | Your app's URL | `https://my-chat.vercel.app` |

---

**Ready to deploy!** 🚀