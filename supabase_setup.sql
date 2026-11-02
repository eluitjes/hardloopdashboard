create table if not exists public.running_backups (user_id uuid primary key references auth.users(id) on delete cascade,payload jsonb not null,updated_at timestamptz not null default now());
alter table public.running_backups enable row level security;
create policy "read own" on public.running_backups for select using (auth.uid()=user_id);
create policy "insert own" on public.running_backups for insert with check (auth.uid()=user_id);
create policy "update own" on public.running_backups for update using (auth.uid()=user_id) with check (auth.uid()=user_id);