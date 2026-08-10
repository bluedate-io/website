import type { Metadata } from "next";
import LegalPage from "@/app/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Digital delivery timelines for Tryren VIP access.",
  alternates: { canonical: "/shipping-and-delivery-policy" },
};

export default function DeliveryPolicyPage() {
  return (
    <LegalPage
      title="Shipping & Delivery Policy"
      summary="Tryren provides digital services only. This policy explains when paid access is activated and how the weekly service is delivered."
    >
      <section>
        <h2>1. No physical shipping</h2>
        <p>
          Tryren does not sell or ship physical goods. No courier, postal delivery or shipping charge
          applies to a purchase of VIP access.
        </p>
      </section>

      <section>
        <h2>2. VIP access delivery</h2>
        <p>
          After the payment gateway confirms a successful payment, VIP access is normally activated
          in your
          registered Tryren account immediately and no later than 24 hours. A payment receipt or status
          may also be sent to your registered email address or phone number.
        </p>
      </section>

      <section>
        <h2>3. Service schedule</h2>
        <p>
          Weekly delivery depends on your timely opt-in, eligibility, preferences and the
          availability of compatible participating users. A successful payment provides access to the
          displayed VIP features but does not guarantee a particular outcome. Service notices
          are delivered through the Tryren app, email or WhatsApp, as disclosed during onboarding.
        </p>
      </section>

      <section>
        <h2>4. Delivery issues</h2>
        <p>
          If paid access is not activated within 24 hours, contact us at{" "}
          <a href="mailto:admin@tryren.in">admin@tryren.in</a> with your registered email address and
          the payment gateway transaction ID. We acknowledge complete complaints within five business
          days. Refund
          eligibility and timelines are described in our{" "}
          <a href="/cancellation-and-refund-policy">Cancellation &amp; Refund Policy</a>.
        </p>
      </section>
    </LegalPage>
  );
}
