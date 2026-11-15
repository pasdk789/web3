# Xenorra account setup (deployment required)

This package includes registration and login screens using Supabase Auth, but **no live backend is provisioned**.

1. Create a Supabase project and set its Site URL to your production HTTPS domain.
2. Enable Email provider and **Confirm email** in Authentication settings.
3. Configure SMTP for production deliverability and customize confirmation email template.
4. Put the public Supabase URL and anon/publishable key in `assets/auth-config.js`. Never put service-role secrets in browser code.
5. Add production URLs (including `login.html`) to the allowed redirect URLs.
6. Configure CAPTCHA, email-rate limits, abuse monitoring, and password reset before launch.
7. IMPORTANT: Existing forum data is browser-local demo data, not a multi-user forum. Migrate to database tables with RLS policies requiring `auth.uid()` and `email_confirmed_at` before enabling public posting. Do not consider this a production forum or claim verification alone prevents spam.
8. Do not collect passwords yourself; Supabase Auth handles password storage. Test confirmation, expiration, recovery, and account deletion end to end.
