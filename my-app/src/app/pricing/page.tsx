import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/Footer";
import Pricing from "@/app/UI/pricing/Pricing";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Tryren pricing — start for free with Basic, or upgrade to VIP for priority matching. Simple, transparent plans for college students.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="PricingPage">
      <Navbar />
      <main className="PricingPage__main">
        <div className="PricingPage__in">

          <header className="PricingPage__header">
            <p className="PricingPage__label">Plans</p>
            <h1 className="PricingPage__title">
              Pick the plan that{" "}
              <span className="PricingPage__orange">fits you</span>
            </h1>
            <p className="PricingPage__desc">
              Start matching for free. Upgrade to VIP when you want priority
              access and first pick of your weekly match.
            </p>
          </header>

          <Pricing />

        </div>
      </main>
      <Footer />
    </div>
  );
}
