create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 60),
  text text not null check (char_length(text) between 1 and 500),
  rating integer not null check (rating between 1 and 5),
  status text not null default 'pending' check (status in ('pending', 'approved')),
  created_at timestamptz not null default now()
);

create table if not exists public.review_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.reviews enable row level security;
alter table public.review_admins enable row level security;

create or replace function public.is_review_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.review_admins
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_review_admin() from public;
grant execute on function public.is_review_admin() to authenticated;

drop policy if exists "Public can read approved reviews" on public.reviews;
create policy "Public can read approved reviews"
  on public.reviews for select
  to anon, authenticated
  using (status = 'approved');

drop policy if exists "Admins can read all reviews" on public.reviews;
create policy "Admins can read all reviews"
  on public.reviews for select
  to authenticated
  using (public.is_review_admin());

drop policy if exists "Visitors can submit pending reviews" on public.reviews;
create policy "Visitors can submit pending reviews"
  on public.reviews for insert
  to anon, authenticated
  with check (status = 'pending');

drop policy if exists "Admins can add reviews" on public.reviews;
create policy "Admins can add reviews"
  on public.reviews for insert
  to authenticated
  with check (public.is_review_admin());

drop policy if exists "Admins can update reviews" on public.reviews;
create policy "Admins can update reviews"
  on public.reviews for update
  to authenticated
  using (public.is_review_admin())
  with check (public.is_review_admin());

drop policy if exists "Admins can delete reviews" on public.reviews;
create policy "Admins can delete reviews"
  on public.reviews for delete
  to authenticated
  using (public.is_review_admin());

drop policy if exists "Admins can read their own admin record" on public.review_admins;
create policy "Admins can read their own admin record"
  on public.review_admins for select
  to authenticated
  using (user_id = auth.uid());

grant select, insert on public.reviews to anon, authenticated;
grant update, delete on public.reviews to authenticated;
grant select on public.review_admins to authenticated;

-- After creating the owner account under Supabase Authentication, register its UID:
-- insert into public.review_admins (user_id) values ('OWNER_AUTH_USER_UUID');
