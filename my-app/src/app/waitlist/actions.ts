'use server';

import { createServerClient } from '@/lib/supabase';

const MEN_OFFSET   = 20;
const WOMEN_OFFSET = 68;


export async function getWaitlistCounts() {
  const supabase = createServerClient();

  const [{ count: men }, { count: women }] = await Promise.all([
    supabase.from('waitlist').select('*', { count: 'exact', head: true }).eq('gender', 'male'),
    supabase.from('waitlist').select('*', { count: 'exact', head: true }).eq('gender', 'female'),
  ]);

  return {
    men:   (men   ?? 0) + MEN_OFFSET,
    women: (women ?? 0) + WOMEN_OFFSET,
  };
}

export async function getWaitlistEntries() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return { success: false, error: error.message, entries: [] };
  return { success: true, entries: data ?? [] };
}

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  const gender = formData.get('gender') as string;
  const city = (formData.get('city') as string) || null;
  const phone = (formData.get('phone') as string) || null;

  const supabase = createServerClient();

  const { error } = await supabase
    .from('waitlist')
    .insert([{ email, gender, city, phone }]);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
