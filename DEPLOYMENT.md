# Chat UI Deployment Guide

This guide will help you deploy the Chat UI to Vercel successfully.

## ✅ Issues Fixed

The original deployment issue with the missing `@sinclair/typebox` dependency has been resolved by:
1. Installing `@sinclair/typebox` as an explicit dependency
2. Successfully building the project locally

## 🚀 Deploy to Vercel

### Prerequisites

1. **Vercel Account**: Make sure you have a Vercel account
2. **GitHub Repository**: Push this project to your GitHub repository

### Deployment Steps

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy the project**:
   ```bash
   vercel --prod
   ```

### Required Environment Variables

Before deploying, you need to configure these essential environment variables in Vercel:

#### MongoDB (Required)
```
MONGODB_URL=your_mongodb_connection_string
MONGODB_DB_NAME=chat-ui
```

#### OpenAI API Configuration (Required)
```
OPENAI_BASE_URL=https://router.huggingface.co/v1
OPENAI_API_KEY=your_api_key
```

#### Public App Configuration
```
PUBLIC_APP_NAME=ChatUI
PUBLIC_APP_ASSETS=chatui
PUBLIC_APP_DESCRIPTION=Making the community's best AI chat models available to everyone.
PUBLIC_ORIGIN=your_vercel_domain
```

### Setting Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Navigate to Settings > Environment Variables
4. Add each required variable

### MongoDB Setup Options

#### Option 1: MongoDB Atlas (Recommended)
1. Create a free MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Use it as your `MONGODB_URL`

#### Option 2: MongoDB Memory Server (Development Only)
For development/testing, the project includes `mongodb-memory-server` which will create an in-memory database.

### API Key Setup

#### Option 1: Hugging Face (Free Tier Available)
1. Sign up at [huggingface.co](https://huggingface.co)
2. Generate an API token
3. Use `https://router.huggingface.co/v1` as `OPENAI_BASE_URL`

#### Option 2: OpenAI
1. Get your OpenAI API key
2. Use `https://api.openai.com/v1` as `OPENAI_BASE_URL`

## 📝 Build Status

- ✅ Dependencies installed successfully
- ✅ Build completed without errors
- ✅ All TypeScript compilation issues resolved
- ✅ Assets generated properly
- ✅ Ready for deployment

## 🔧 Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Structure

This is a SvelteKit application with:
- **Frontend**: Svelte 5 with TypeScript
- **Backend**: SvelteKit server-side functions
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Icons**: Unplugin Icons with Carbon Design System
- **Math**: KaTeX for mathematical expressions

## 🚨 Common Issues & Solutions

### 1. Build Failures
- Ensure all environment variables are set
- Check MongoDB connection
- Verify API keys are valid

### 2. Runtime Errors
- Check server logs in Vercel dashboard
- Ensure database is accessible
- Verify all required environment variables are set

### 3. Authentication Issues
- Configure OAuth settings if using authentication
- Set up proper redirect URLs

## 📞 Support

If you encounter issues:
1. Check the build logs in Vercel dashboard
2. Review the original repository documentation
3. Ensure all environment variables are properly configured