import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function generateReferralCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { whatsapp_number, email, city, referred_by } = await req.json();

    if (!email || !city) {
      return NextResponse.json(
        { error: "Email and city are required." },
        { status: 400 }
      );
    }

    // Check if email already registered
    const { data: existing } = await supabase
      .from("waitlist")
      .select("referral_code")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ referral_code: existing.referral_code });
    }

    // Generate a unique referral code (retry on collision)
    let referral_code = "";
    for (let i = 0; i < 5; i++) {
      const candidate = generateReferralCode();
      const { data: clash } = await supabase
        .from("waitlist")
        .select("id")
        .eq("referral_code", candidate)
        .maybeSingle();
      if (!clash) {
        referral_code = candidate;
        break;
      }
    }

    if (!referral_code) {
      return NextResponse.json(
        { error: "Could not generate a unique code. Try again." },
        { status: 500 }
      );
    }

    const { error } = await supabase.from("waitlist").insert({
      email,
      whatsapp_number: whatsapp_number || null,
      city,
      referral_code,
      referred_by: referred_by || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ referral_code });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
