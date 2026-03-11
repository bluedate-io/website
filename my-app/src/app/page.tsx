import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Hero from "./ui/hero/hero";
import Problem from "./ui/problem/problem";
import Match from "./ui/match/match";
import Faq from "./ui/faq/faq";
import NotificationBanner from "./components/notificationbanner/notificationbanner";

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent__in">
        <Navbar />
        <Hero />
        <Problem />
        <Match />
        <Faq />
        <Footer />
        <NotificationBanner />
      </div>
    </div>
  );
}
