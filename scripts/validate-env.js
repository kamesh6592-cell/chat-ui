#!/usr/bin/env node

/**
 * Environment Validation Script for Chat UI
 * Run this script to validate your environment configuration before deployment
 * 
 * Usage: node validate-env.js
 */

import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

// Load environment variables
dotenv.config({ path: '.env.local' });

const requiredVars = [
	'MONGODB_URL',
	'OPENAI_BASE_URL', 
	'OPENAI_API_KEY',
	'PUBLIC_APP_NAME',
	'PUBLIC_APP_ASSETS'
];

const optionalVars = [
	'MONGODB_DB_NAME',
	'PUBLIC_ORIGIN',
	'PUBLIC_APP_DESCRIPTION'
];

console.log('🔍 Chat UI Environment Validation\n');

// Check required variables
let hasErrors = false;
console.log('📋 Checking required environment variables:');

for (const varName of requiredVars) {
	const value = process.env[varName];
	if (!value || value.startsWith('#') || value.includes('your_')) {
		console.log(`❌ ${varName}: Missing or using placeholder value`);
		hasErrors = true;
	} else {
		console.log(`✅ ${varName}: Set`);
	}
}

console.log('\n📋 Checking optional environment variables:');
for (const varName of optionalVars) {
	const value = process.env[varName];
	if (!value || value.startsWith('#')) {
		console.log(`⚠️  ${varName}: Not set (optional)`);
	} else {
		console.log(`✅ ${varName}: Set`);
	}
}

// Validate MongoDB URL format
const mongoUrl = process.env.MONGODB_URL;
if (mongoUrl && !mongoUrl.startsWith('#')) {
	console.log('\n🔍 Validating MongoDB URL format:');
	if (mongoUrl.startsWith('mongodb://') || mongoUrl.startsWith('mongodb+srv://')) {
		console.log('✅ MongoDB URL format is valid');
		
		// Test connection
		console.log('\n🔗 Testing MongoDB connection...');
		try {
			const client = new MongoClient(mongoUrl, {
				serverSelectionTimeoutMS: 5000,
			});
			
			await client.connect();
			await client.db().admin().ping();
			console.log('✅ MongoDB connection successful!');
			await client.close();
		} catch (error) {
			console.log('❌ MongoDB connection failed:');
			if (error.code === 8000) {
				console.log('   - Authentication failed: Check username/password');
				console.log('   - Ensure database user has correct permissions');
			} else if (error.name === 'MongoServerSelectionError') {
				console.log('   - Cannot reach server: Check connection string');
				console.log('   - Verify network access allows your IP');
			} else {
				console.log('   - Error:', error.message);
			}
			hasErrors = true;
		}
	} else {
		console.log('❌ Invalid MongoDB URL format. Must start with mongodb:// or mongodb+srv://');
		hasErrors = true;
	}
}

// Validate AI API configuration
console.log('\n🤖 Validating AI API configuration:');
const baseUrl = process.env.OPENAI_BASE_URL;
const apiKey = process.env.OPENAI_API_KEY;

if (baseUrl?.includes('huggingface.co') && apiKey?.startsWith('hf_')) {
	console.log('✅ Hugging Face configuration detected');
} else if (baseUrl?.includes('openai.com') && apiKey?.startsWith('sk-')) {
	console.log('✅ OpenAI configuration detected');
} else if (baseUrl && apiKey) {
	console.log('✅ Custom AI API configuration detected');
} else {
	console.log('❌ Invalid AI API configuration');
	hasErrors = true;
}

// Summary
console.log('\n📊 Validation Summary:');
if (hasErrors) {
	console.log('❌ Configuration has errors. Please fix the issues above before deploying.');
	console.log('\n💡 Need help?');
	console.log('   - MongoDB issues: See MONGODB_FIX.md');
	console.log('   - Full deployment guide: See VERCEL_DEPLOYMENT_GUIDE.md');
	process.exit(1);
} else {
	console.log('✅ All validations passed! Your configuration looks good for deployment.');
	console.log('\n🚀 Ready to deploy to Vercel!');
	console.log('   Run: vercel --prod');
}