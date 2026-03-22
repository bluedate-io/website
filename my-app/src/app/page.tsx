import Hero from "@/app/UI/hero/hero";
import Navbar from "./components/navbar/navbar";
import HowItWorks from "./UI/how-it-works/HowItWorks";
import Trust from "./UI/trust/Trust";
import FAQ from "./UI/faq/FAQ";
import Footer from "./components/footer/Footer";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bluedate",
  url: "https://bluedate.io",
  description:
    "AI-powered campus dating app that matches college students for real-life coffee dates — no swiping required.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bluedate.io/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bluedate",
  url: "https://bluedate.io",
  logo: "https://bluedate.io/logo.png",
  sameAs: ["https://www.instagram.com/bluedate.io"],
  description:
    "Bluedate is an AI-powered dating platform for college students in India, focused on facilitating real-life coffee dates on campus.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Bluedate match me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use your preferences, vibe, and feedback from past dates to curate one highly compatible match every week — no random profiles.",
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
      name: "Is it safe to go on these dates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All dates are designed around verified campus canteens or trusted public cafés, ensuring a safe and comfortable environment.",
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
