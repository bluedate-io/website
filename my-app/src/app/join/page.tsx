"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./page.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

type FieldErrors = { email?: string; city?: string; form?: string };

function JoinForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref") ?? "";

  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!email.trim()) {
      e.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      e.email = "Enter a valid email address.";
    }
    if (!city.trim()) {
      e.city = "City is required.";
    } else if (city.trim().length <= 4) {
      e.city = "City name must be more than 4 characters.";
    }
    return e;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const fieldErrors = validate();
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          whatsapp_number: whatsapp.trim() || null,
          email: email.trim(),
          city: city.trim(),
          referred_by: refCode || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({ form: data.error ?? "Something went wrong." });
        return;
      }

      router.push(`/status?code=${data.referral_code}`);
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="join__card">
      <div className="join__badge">Early Access</div>
      <h1 className="join__heading">
        Skip the swipes.<br />Get a real date.
      </h1>
      <p className="join__sub">
        Join the bluedate.io waitlist — we'll match you with
        someone real and set up a coffee date at your campus / City.
      </p>

      <form className="join__form" onSubmit={handleSubmit} noValidate>
        <div className="join__field">
          <label className="join__label" htmlFor="email">
            Email <span className="join__required">*</span>
          </label>
          <input
            id="email"
            className={`join__input ${errors.email ? "join__input--error" : ""}`}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
          />
          {errors.email && <p className="join__field-error">{errors.email}</p>}
        </div>

        <div className="join__field">
          <label className="join__label" htmlFor="whatsapp">
            WhatsApp Number <span className="join__optional">(optional)</span>
          </label>
          <input
            id="whatsapp"
            className="join__input"
            type="tel"
            placeholder="+91 98765 43210"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>

        <div className="join__field">
          <label className="join__label" htmlFor="city">
            City <span className="join__required">*</span>
          </label>
          <input
            id="city"
            className={`join__input ${errors.city ? "join__input--error" : ""}`}
            type="text"
            placeholder="Hyderabad, Mumbai, Delhi..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
            }}
          />
          {errors.city && <p className="join__field-error">{errors.city}</p>}
        </div>

        {errors.form && <p className="join__error">{errors.form}</p>}

        <button className="join__btn" type="submit" disabled={loading}>
          {loading ? "Joining..." : "Join the Waitlist →"}
        </button>
      </form>

      {refCode && (
        <p className="join__ref">Referred by <strong>{refCode}</strong></p>
      )}
    </div>
  );
}

export default function JoinPage() {
  return (
    <main className="JoinPage">
      <div className="join__bg" />
      <div className="join__overlay" />
      <div className="join__center">
        <div className="join__logo">bluedate.io</div>
        <Suspense>
          <JoinForm />
        </Suspense>
      </div>
    </main>
  );
}
