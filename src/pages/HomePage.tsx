import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import DifferenceSection from '../components/DifferenceSection';
import InvestmentHighlight from '../components/InvestmentHighlight';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import NewsSection from '../components/NewsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <DifferenceSection />
      {/* TrustSection is intentionally hidden from the website. */}
      <InvestmentHighlight />
      <NewsSection />
      <Newsletter />
      <Contact />
    </>
  );
}
