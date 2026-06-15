import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import { Language } from './i18n/translations';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import PersonalBanking from './pages/PersonalBanking';
import BusinessBanking from './pages/BusinessBanking';
import CreditCards from './pages/CreditCards';
import Investments from './pages/Investments';
import OnlineBanking from './pages/OnlineBanking';
import Support from './pages/Support';
import Rates from './pages/Rates';
import AboutUs from './pages/AboutUs';
import WhoWeServe from './pages/WhoWeServe';
import FinancialEducation from './pages/FinancialEducation';
import OurApproach from './pages/OurApproach';
import OurExpertise from './pages/OurExpertise';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RiskDisclosure from './pages/RiskDisclosure';
import RefundPolicy from './pages/RefundPolicy';
import LegalEntity from './pages/LegalEntity';
import { useEffect } from 'react';

function LanguageRouteWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (lang && ['en', 'fr', 'it', 'de', 'es', 'el'].includes(lang)) {
      setLanguage(lang as Language);
    }
  }, [lang, setLanguage]);

  return null;
}

function AppContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <Routes key={language}>
        <Route path="/" element={<Navigate to={`/${language}`} replace />} />

        <Route path="/:lang" element={<><LanguageRouteWrapper /><HomePage /></>} />
        <Route path="/:lang/personal-banking" element={<><LanguageRouteWrapper /><PersonalBanking /></>} />
        <Route path="/:lang/business-banking" element={<><LanguageRouteWrapper /><BusinessBanking /></>} />
        <Route path="/:lang/credit-cards" element={<><LanguageRouteWrapper /><CreditCards /></>} />
        <Route path="/:lang/investments" element={<><LanguageRouteWrapper /><Investments /></>} />
        <Route path="/:lang/online-banking" element={<><LanguageRouteWrapper /><OnlineBanking /></>} />
        <Route path="/:lang/support" element={<><LanguageRouteWrapper /><Support /></>} />
        <Route path="/:lang/rates" element={<><LanguageRouteWrapper /><Rates /></>} />
        <Route path="/:lang/about" element={<><LanguageRouteWrapper /><AboutUs /></>} />
        <Route path="/:lang/who-we-serve" element={<><LanguageRouteWrapper /><WhoWeServe /></>} />
        <Route path="/:lang/financial-education" element={<><LanguageRouteWrapper /><FinancialEducation /></>} />
        <Route path="/:lang/our-approach" element={<><LanguageRouteWrapper /><OurApproach /></>} />
        <Route path="/:lang/our-expertise" element={<><LanguageRouteWrapper /><OurExpertise /></>} />
        <Route path="/:lang/terms-of-service" element={<><LanguageRouteWrapper /><TermsOfService /></>} />
        <Route path="/:lang/privacy-policy" element={<><LanguageRouteWrapper /><PrivacyPolicy /></>} />
        <Route path="/:lang/risk-disclosure" element={<><LanguageRouteWrapper /><RiskDisclosure /></>} />
        <Route path="/:lang/refund-policy" element={<><LanguageRouteWrapper /><RefundPolicy /></>} />
        <Route path="/:lang/legal-entity" element={<><LanguageRouteWrapper /><LegalEntity /></>} />
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
