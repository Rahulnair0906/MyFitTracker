// ============================================================
// MyFitTracker Configuration
// © 2026 Rahul Nair. All Rights Reserved.
// ============================================================
// SETUP INSTRUCTIONS:
// 1. Create a free Supabase account at supabase.com
// 2. Create a free EmailJS account at emailjs.com
// 3. Follow SETUP.md for step-by-step instructions
// 4. Replace the placeholder values below with your real keys
// ============================================================

const MFT_CONFIG = {
  // --- SUPABASE (Authentication + User Approval) ---
  // Get these from: supabase.com > Your Project > Settings > API
  SUPABASE_URL: 'https://qzvzixmejwziazdxikjc.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dnppeG1land6aWF6ZHhpa2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNzA5NTgsImV4cCI6MjA4OTc0Njk1OH0.NeyEPzF_lauwSWp4E2GCXlfcshSgMRBILSBBCGGKTxA',

  // --- EMAILJS (Feedback + Notifications) ---
  // Get these from: emailjs.com > Account > API Keys
  EMAILJS_SERVICE_ID: 'service_8n3jx7e',
  EMAILJS_FEEDBACK_TEMPLATE_ID: 'template_816y7ft',
  EMAILJS_PUBLIC_KEY: 'kD38N2D5SRJZnEp-w',

  // --- APP SETTINGS ---
  APP_VERSION: '2.0.0',
  APP_NAME: 'MyFitTracker',
  ADMIN_NAME: 'Rahul'
};
