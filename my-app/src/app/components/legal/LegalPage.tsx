import Link from "next/link";
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/navbar";
import "../../legal.css";

export default function LegalPage({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <div className="LegalPage">
      <Navbar />
      <main className="LegalPage__main">
        <div className="LegalPage__in">
          <header className="LegalPage__header">
            <p className="LegalPage__label">Legal</p>
            <h1 className="LegalPage__title">{title}</h1>
            <p className="LegalPage__intro">{summary}</p>
            <p className="LegalPage__meta">
              Effective 1 August 2026 &middot; Last updated 1 August 2026
            </p>
          </header>

          <article className="LegalPage__body">{children}</article>

          <nav className="LegalPage__policies" aria-label="Legal policies">
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cancellation-and-refund-policy">Cancellation &amp; Refunds</Link>
            <Link href="/shipping-and-delivery-policy">Shipping &amp; Delivery</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
