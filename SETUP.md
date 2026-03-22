# MyFitTracker v2.0.0 — Setup Guide
© 2026 Rahul Nair. All Rights Reserved.

## Overview
This guide sets up three free services in ~10 minutes:
1. Supabase — Gmail login + user approval
2. EmailJS — feedback emails to your inbox
3. GitHub Pages — live hosting

---

## STEP 1 — Upload to GitHub

1. Go to github.com/Rahulnair0906/MyFitTracker
2. Delete all existing files (select all → delete)
3. Upload ALL files from this zip:
   - index.html
   - config.js
   - sw.js
   - manifest.json
   - icons/icon-192.png
   - icons/icon-512.png
4. Commit changes

---

## STEP 2 — Supabase Setup (Gmail login + approval)

### 2a. Create account
1. Go to supabase.com → Sign up (free)
2. Create new project → name it "myfittracker"
3. Choose a strong password → Select a region close to Bahrain (e.g. Singapore or Frankfurt)
4. Wait ~2 minutes for project to spin up

### 2b. Create users table
1. Go to your project → SQL Editor
2. Paste and run this SQL:
```sql
CREATE TABLE users (
  id uuid PRIMARY KEY,
  email text NOT NULL,
  name text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own data" ON users FOR INSERT WITH CHECK (auth.uid() = id);
```

### 2c. Enable Google OAuth
1. Go to Authentication → Providers → Google → Enable
2. You need a Google OAuth Client ID and Secret:
   - Go to console.cloud.google.com
   - Create new project → Enable "Google+ API"
   - Credentials → Create OAuth 2.0 Client ID
   - Application type: Web application
   - Authorized redirect URI: https://[your-supabase-project-id].supabase.co/auth/v1/callback
   - Copy Client ID and Client Secret
3. Paste both into Supabase Google provider settings → Save

### 2d. Get your API keys
1. Supabase project → Settings → API
2. Copy:
   - Project URL (looks like: https://abcdefgh.supabase.co)
   - anon public key (long string starting with "eyJ...")

### 2e. Update config.js
Open config.js and replace:
- YOUR_SUPABASE_URL → your Project URL
- YOUR_SUPABASE_ANON_KEY → your anon public key

---

## STEP 3 — EmailJS Setup (feedback emails)

### 3a. Create account
1. Go to emailjs.com → Sign up free (200 emails/month free)
2. Email Services → Add New Service → Gmail
3. Connect your Gmail account (yorahulnair@gmail.com)
4. Note the Service ID (e.g. service_abc123)

### 3b. Create email template
1. Email Templates → Create New Template
2. Template content:
```
To: {{to_email}}
Subject: {{subject}}
Body:
{{message}}

---
Sent from MyFitTracker v2.0.0
Reply to: {{reply_to}}
```
3. Save → Note the Template ID (e.g. template_xyz789)

### 3c. Get Public Key
1. Account → API Keys
2. Copy your Public Key

### 3d. Update config.js
Replace:
- YOUR_EMAILJS_SERVICE_ID → your Service ID
- YOUR_EMAILJS_FEEDBACK_TEMPLATE_ID → your Template ID
- YOUR_EMAILJS_PUBLIC_KEY → your Public Key

---

## STEP 4 — Approve users in Supabase

When someone requests access, you'll receive an email at yorahulnair@gmail.com.
To approve them:
1. Go to supabase.com → your project → Table Editor → users table
2. Find the user → click their row → change status from 'pending' to 'approved'
3. They'll be able to access the app on their next login attempt

---

## STEP 5 — Final upload and test

1. Upload the updated config.js to GitHub (replace the existing one)
2. Wait 2 minutes for GitHub Pages to rebuild
3. Open https://rahulnair0906.github.io/MyFitTracker on your phone
4. Test the full flow:
   - Sign in with Google
   - Complete onboarding
   - Log a meal
   - Check progress tab
   - Send feedback

---

## SHARING THE APP

Share this link via WhatsApp, email, or QR code:
https://rahulnair0906.github.io/MyFitTracker

Users tap "Continue with Google" → you approve in Supabase → they get full access.

---

## UPDATING THE APP

When you want changes:
1. Describe what you want updated to Claude
2. Claude gives you a new index.html
3. Go to your GitHub repo → click index.html → pencil icon → paste new code → commit
4. App updates on all users' phones within seconds

---

## COST SUMMARY

| Service | Free tier | Your cost |
|---------|-----------|-----------|
| GitHub Pages | Public repo | $0 |
| Supabase | 50,000 users | $0 |
| EmailJS | 200 emails/month | $0 |
| **Total** | | **$0/month** |

---

## SUPPORT

For technical issues, open a GitHub Issue or contact via the feedback form in the app.
© 2026 Rahul Nair. All Rights Reserved.
