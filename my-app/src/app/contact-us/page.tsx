import type { Metadata } from "next";
import LegalPage from "@/app/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact and grievance details for Tryren.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      summary="Contact Tryren for account, safety, privacy, payment, cancellation or refund support."
    >
      <section>
        <h2>Merchant details</h2>
        <p>
          Tryren is operated by Alla Naveen.<br />
          D. No. 32-9-2/1, Dasari Lingiah Street,<br />
          Madhu Gardens, Vijayawada,<br />
          Andhra Pradesh 520010, India
        </p>
      </section>

      <section>
        <h2>Customer support</h2>
        <p>
          Email: <a href="mailto:admin@tryren.in">admin@tryren.in</a><br />
          Phone: <a href="tel:+918309671828">+91 83096 71828</a><br />
          Support hours: Monday to Friday, 10:00 AM to 6:00 PM IST, excluding public holidays.
        </p>
        <p>
          For payment or refund support, include your registered email address, payment date, amount
          and Razorpay payment ID. Never send complete card, UPI PIN, CVV or banking credentials.
        </p>
      </section>

      <section>
        <h2>Grievance Officer</h2>
        <p>
          Alla Naveen is the designated Grievance Officer. We acknowledge customer complaints and
          provide an initial response within five business days. Some matters may take longer to resolve
          where investigation, user safety review, or information from Razorpay or a bank is required.
        </p>
      </section>
    </LegalPage>
  );
}
