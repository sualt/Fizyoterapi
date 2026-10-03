# Owner-only review management

Review moderation uses Supabase Auth and database row-level security. Visitor-submitted reviews are inserted as `pending`; only a registered owner can approve or delete them.

1. Create a Supabase project and copy `.env.example` to `.env.local`.
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the project URL and anon/public key. Never expose a service-role key through a `VITE_` variable.
3. Run [`reviews.sql`](reviews.sql) in the Supabase SQL Editor.
4. In Supabase Authentication, create the site owner's email/password account and disable public sign-ups.
5. Copy the owner's Auth user UUID and run the final `insert` statement in `reviews.sql` with that UUID.
6. Restart Vite. The `/yorum-yonetimi` page then requires sign-in, and RLS restricts moderation to the registered owner.
