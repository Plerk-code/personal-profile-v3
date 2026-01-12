import React from 'react';
import HeroSection from '../components/HeroSection';
import CompanyOverview from '../components/CompanyOverview';
import LeadershipTeam from '../components/LeadershipTeam';
import Solution from '../components/Solution';
import MarketOpportunity from '../components/MarketOpportunity';
import Traction from '../components/Traction';
import WhyInvest from '../components/WhyInvest';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <CompanyOverview />
      <LeadershipTeam />
      <Solution />
      <MarketOpportunity />
      <Traction />
      <WhyInvest />
      <ContactForm />
    </div>
  );
};

export default HomePage;
