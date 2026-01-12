import { useState, useEffect } from 'react';
import Navigation from './components/corporate/Navigation';
import Hero from './components/corporate/Hero';
import CompanyOverview from './components/corporate/CompanyOverview';
import Leadership from './components/corporate/Leadership';
import Solution from './components/corporate/Solution';
import MarketOpportunity from './components/corporate/MarketOpportunity';
import Traction from './components/corporate/Traction';
import WhyInvest from './components/corporate/WhyInvest';
import Credentials from './components/corporate/Credentials';
import ContactForm from './components/corporate/ContactForm';
import Footer from './components/corporate/Footer';
import BackToTop from './components/corporate/BackToTop';
import Loading from './components/corporate/Loading';

function AppCorporate() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRequestDeck = () => {
    // Scroll to contact form or open modal
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleCall = () => {
    // Open Calendly or scroll to contact form
    window.open('https://calendly.com/', '_blank');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero onRequestDeck={handleRequestDeck} onScheduleCall={handleScheduleCall} />
        <CompanyOverview />
        <Leadership />
        <Solution />
        <MarketOpportunity />
        <Traction />
        <WhyInvest />
        <Credentials />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default AppCorporate;

