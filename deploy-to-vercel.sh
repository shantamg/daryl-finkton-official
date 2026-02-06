#!/bin/bash

# Deployment script for Daryl Finkton Jr. website
# This script helps deploy the site to Vercel

echo "🚀 Daryl Finkton Jr. Website - Vercel Deployment"
echo "================================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI found"
echo ""

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log in to Vercel..."
    echo ""
    vercel login
fi

echo ""
echo "🎯 Deploying to production..."
echo ""

# Deploy to production
vercel --prod --yes

echo ""
echo "================================================"
echo "🎉 Deployment complete!"
echo ""
echo "Your site is now live on Vercel!"
echo ""
echo "📊 To view deployment info:"
echo "   vercel ls"
echo ""
echo "🌐 To open in browser:"
echo "   vercel open"
echo ""
