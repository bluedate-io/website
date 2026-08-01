import Hero from "@/app/UI/hero/hero";
import Navbar from "./components/navbar/navbar";
import HowItWorks from "./UI/how-it-works/HowItWorks";
import Trust from "./UI/trust/Trust";
import FAQ from "./UI/faq/FAQ";
import Footer from "./components/footer/Footer";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tryren",
  url: "https://tryren.in",
  description:
    "AI-powered campus dating app that matches college students for real-life coffee meets — no swiping required.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://tryren.in/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tryren",
  url: "https://tryren.in",
  logo: "https://tryren.in/logo.png",
  founder: {
    "@type": "Person",
    name: "Alla Naveen",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "D. No. 32-9-2/1, Dasari Lingiah Street, Madhu Gardens",
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    postalCode: "520010",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-83096-71828",
    email: "admin@tryren.in",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
  sameAs: ["https://www.instagram.com/tryren.io"],
  description:
    "Tryren is an AI-powered dating platform for college students in India, focused on facilitating real-life coffee meets on campus.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Tryren match me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use your preferences, vibe, and feedback from past meets to curate one highly compatible match every week — no random profiles.",
      },
    },
    {
      "@type": "Question",
      name: "Why only one match per week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because quality > quantity. Instead of overwhelming you with options, we focus on one meaningful connection at a time.",
      },
    },
    {
      "@type": "Question",
      name: "How will I receive my match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your curated match is sent directly to you via WhatsApp, making it simple and personal.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to go on these meets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All meets are designed around verified campus canteens or trusted public cafés, ensuring a safe and comfortable environment.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="HomeComponent">
        <div className="HomeComponent__in">
          <Navbar />
          <Hero />
          <HowItWorks />
          <Trust />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}
