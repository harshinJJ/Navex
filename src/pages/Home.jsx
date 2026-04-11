import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Navex Global | Cargo Shipping, Air Freight, Sea Freight & Logistics
        </title>
        <meta
          name="description"
          content="Navex Global offers reliable cargo shipping, air freight, ocean freight, road freight, and end-to-end logistics solutions across Saudi Arabia, UAE, India, and worldwide."
        />
        <meta
          name="keywords"
          content="cargo shipping, air freight, sea freight, logistics, Navex Global, Saudi Arabia logistics, freight forwarding, international shipping"
        />
        <link rel="canonical" href="https://www.navexglobalksa.com/" />
        <meta
          property="og:title"
          content="Navex Global | Cargo Shipping, Air Freight, Sea Freight & Logistics"
        />
        <meta
          property="og:description"
          content="Navex Global offers reliable cargo shipping, air freight, ocean freight, road freight, and end-to-end logistics solutions across Saudi Arabia, UAE, India, and worldwide."
        />
        <meta property="og:url" content="https://www.navexglobalksa.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.navexglobalksa.com/Navex-global.png"
        />
      </Helmet>
      <Hero />
      <Intro />
      <About />
      <Services />
      <WhyChoose />
    </>
  );
}
