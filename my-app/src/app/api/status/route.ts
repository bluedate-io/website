import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code." }, { status: 400 });
  }

  // Get user's record
  const { data: user, error: userError } = await supabase
    .from("waitlist")
    .select("referral_code, city, created_at")
    .eq("referral_code", code)
    .maybeSingle();

  if (userError || !user) {
    return NextResponse.json({ error: "Code not found." }, { status: 404 });
  }

  // Count total signups
  const { count, error: countError } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (countError) {
    return NextResponse.json({ error: "Could not fetch count." }, { status: 500 });
  }

  const queue_position = (count ?? 0) + 500;

  return NextResponse.json({ queue_position, referral_code: user.referral_code, city: user.city });
}
