import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Browser-safe typing (works in Vite/CRA/React Router TS)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fr|it|de|es|el)/, '');
    const newPath = `/${newLang}${pathWithoutLang || ''}`;
    setLanguage(newLang);
    navigate(newPath);
    setOpenDropdown(null);
  };

  const getLangPath = (path: string) => {
    return `/${language}${path}`;
  };

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 600);
  };

  const getLabel = (en: string, fr: string, it: string, de: string, es: string, el: string) => {
    switch (language) {
      case 'fr': return fr;
      case 'it': return it;
      case 'de': return de;
      case 'es': return es;
      case 'el': return el;
      default: return en;
    }
  };

  const bankingLinks = [
    {
      label: getLabel('Personal Banking', 'Banque Personnelle', 'Banca Personale', 'Privatbanking', 'Banca Personal', 'Προσωπική Τραπεζική'),
      path: getLangPath('/personal-banking')
    },
    {
      label: getLabel('Business Banking', 'Banque d\'Affaires', 'Banca Aziendale', 'Firmenkundengeschäft', 'Banca Empresarial', 'Επιχειρηματική Τραπεζική'),
      path: getLangPath('/business-banking')
    }
  ];

  const productsLinks = [
    {
      label: getLabel('Credit Cards', 'Cartes de Crédit', 'Carte di Credito', 'Kreditkarten', 'Tarjetas de Crédito', 'Πιστωτικές Κάρτες'),
      path: getLangPath('/credit-cards')
    },
    {
      label: getLabel('Investments', 'Investissements', 'Investimenti', 'Anlagen', 'Inversiones', 'Επενδύσεις'),
      path: getLangPath('/investments')
    }
  ];

  const resourcesLinks = [
    {
      label: getLabel('Financial Education', 'Éducation Financière', 'Educazione Finanziaria', 'Finanzbildung', 'Educación Financiera', 'Οικονομική Εκπαίδευση'),
      path: getLangPath('/financial-education')
    },
    {
      label: getLabel('Interest Rates', 'Taux d\'Intérêt', 'Tassi di Interesse', 'Zinssätze', 'Tasas de Interés', 'Επιτόκια'),
      path: getLangPath('/rates')
    }
  ];

  const aboutLinks = [
    {
      label: getLabel('About Us', 'À Propos de Nous', 'Chi Siamo', 'Über Uns', 'Acerca de Nosotros', 'Σχετικά με Εμάς'),
      path: getLangPath('/about')
    },
    {
      label: getLabel('Who We Serve', 'Qui Nous Servons', 'Chi Serviamo', 'Wen Wir Dienen', 'A Quién Servimos', 'Ποιους Εξυπηρετούμε'),
      path: getLangPath('/who-we-serve')
    },
    {
      label: getLabel('Customer Support', 'Service Client', 'Assistenza Clienti', 'Kundensupport', 'Soporte al Cliente', 'Υποστήριξη Πελατών'),
      path: getLangPath('/support')
    }
  ];

  // ✅ External URL for Online Banking
  const ONLINE_BANKING_URL = 'https://account.aareal-bank-ag.com';

  return (
    <header className="bg-[#172033] text-white border-b-4 border-[#0F766E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to={getLangPath('')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo3.svg"
              alt="Aareal Bank AG"
              className="w-40 sm:w-44 h-20 sm:h-24 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link to={getLangPath('')} className="hover:text-[#C8942D] transition-colors font-medium text-lg">
              {t.nav.home}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('banking')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 hover:text-[#C8942D] transition-colors font-medium text-lg">
                <span>{getLabel('Banking', 'Banque', 'Servizi Bancari', 'Banking', 'Banca', 'Τραπεζική')}</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === 'banking' && (
                <div
                  className="absolute top-full left-0 mt-4 w-56 bg-white text-[#172033] shadow-lg border-t-2 border-[#0F766E] z-50"
                  onMouseEnter={() => handleMouseEnter('banking')}
                  onMouseLeave={handleMouseLeave}
                >
                  {bankingLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 hover:text-[#C8942D] transition-colors font-medium text-lg">
                <span>{getLabel('Products', 'Produits', 'Prodotti', 'Produkte', 'Productos', 'Προϊόντα')}</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === 'products' && (
                <div
                  className="absolute top-full left-0 mt-4 w-56 bg-white text-[#172033] shadow-lg border-t-2 border-[#0F766E] z-50"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  {productsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 hover:text-[#C8942D] transition-colors font-medium text-lg">
                <span>{getLabel('Resources', 'Ressources', 'Risorse', 'Ressourcen', 'Recursos', 'Πόροι')}</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === 'resources' && (
                <div
                  className="absolute top-full left-0 mt-4 w-56 bg-white text-[#172033] shadow-lg border-t-2 border-[#0F766E] z-50"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 hover:text-[#C8942D] transition-colors font-medium text-lg">
                <span>{getLabel('About', 'À Propos', 'Informazioni', 'Über', 'Acerca de', 'Σχετικά')}</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === 'about' && (
                <div
                  className="absolute top-full left-0 mt-4 w-56 bg-white text-[#172033] shadow-lg border-t-2 border-[#0F766E] z-50"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ✅ FIXED: external link should use <a>, not React Router <Link> */}
            <a
              href={ONLINE_BANKING_URL}
              className="bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-2 px-6 transition-all text-lg"
            >
              {getLabel('Online Banking', 'Banque en Ligne', 'Banca Online', 'Online-Banking', 'Banca en Línea', 'Διαδικτυακή Τραπεζική')}
            </a>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('language')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 hover:text-[#C8942D] transition-colors font-medium text-lg">
                <Globe size={18} />
                <span>{getLabel('EN', 'FR', 'IT', 'DE', 'ES', 'EL')}</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === 'language' && (
                <div
                  className="absolute top-full right-0 mt-4 w-40 bg-white text-[#172033] shadow-lg border-t-2 border-[#0F766E] z-50"
                  onMouseEnter={() => handleMouseEnter('language')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`block w-full text-left px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base ${
                      language === 'en' ? 'bg-[#ECFDF8] font-bold' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('fr')}
                    className={`block w-full text-left px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base ${
                      language === 'fr' ? 'bg-[#ECFDF8] font-bold' : ''
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => changeLanguage('it')}
                    className={`block w-full text-left px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base ${
                      language === 'it' ? 'bg-[#ECFDF8] font-bold' : ''
                    }`}
                  >
                    Italiano
                  </button>
                  <button
                    onClick={() => changeLanguage('de')}
                    className={`block w-full text-left px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base ${
                      language === 'de' ? 'bg-[#ECFDF8] font-bold' : ''
                    }`}
                  >
                    Deutsch
                  </button>
                  <button
                    onClick={() => changeLanguage('es')}
                    className={`block w-full text-left px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base ${
                      language === 'es' ? 'bg-[#ECFDF8] font-bold' : ''
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => changeLanguage('el')}
                    className={`block w-full text-left px-6 py-3 hover:bg-[#0F766E] hover:text-white transition-colors text-base ${
                      language === 'el' ? 'bg-[#ECFDF8] font-bold' : ''
                    }`}
                  >
                    Ελληνικά
                  </button>
                </div>
              )}
            </div>
          </nav>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-3">
            <Link
              to={getLangPath('')}
              className="block hover:text-[#C8942D] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>

            <div className="space-y-2">
              <p className="text-[#A7B1BC] text-sm font-bold">
                {getLabel('BANKING', 'BANQUE', 'SERVIZI BANCARI', 'BANKING', 'BANCA', 'ΤΡΑΠΕΖΙΚΗ')}
              </p>
              {bankingLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block pl-4 hover:text-[#C8942D] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-[#A7B1BC] text-sm font-bold">
                {getLabel('PRODUCTS', 'PRODUITS', 'PRODOTTI', 'PRODUKTE', 'PRODUCTOS', 'ΠΡΟΪΟΝΤΑ')}
              </p>
              {productsLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block pl-4 hover:text-[#C8942D] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-[#A7B1BC] text-sm font-bold">
                {getLabel('RESOURCES', 'RESSOURCES', 'RISORSE', 'RESSOURCEN', 'RECURSOS', 'ΠΟΡΟΙ')}
              </p>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block pl-4 hover:text-[#C8942D] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-[#A7B1BC] text-sm font-bold">
                {getLabel('ABOUT', 'À PROPOS', 'INFORMAZIONI', 'ÜBER', 'ACERCA DE', 'ΣΧΕΤΙΚΑ')}
              </p>
              {aboutLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block pl-4 hover:text-[#C8942D] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ✅ FIXED: mobile external link */}
            <a
              href={ONLINE_BANKING_URL}
              className="block bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-3 px-6 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {getLabel('Online Banking', 'Banque en Ligne', 'Banca Online', 'Online-Banking', 'Banca en Línea', 'Διαδικτυακή Τραπεζική')}
            </a>

            <div className="space-y-2">
              <p className="text-[#A7B1BC] text-sm font-bold flex items-center space-x-2">
                <Globe size={18} />
                <span>{getLabel('LANGUAGE', 'LANGUE', 'LINGUA', 'SPRACHE', 'IDIOMA', 'ΓΛΩΣΣΑ')}</span>
              </p>
              <button
                onClick={() => {
                  changeLanguage('en');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left pl-4 hover:text-[#C8942D] transition-colors font-medium ${
                  language === 'en' ? 'text-[#C8942D]' : ''
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  changeLanguage('fr');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left pl-4 hover:text-[#C8942D] transition-colors font-medium ${
                  language === 'fr' ? 'text-[#C8942D]' : ''
                }`}
              >
                Français
              </button>
              <button
                onClick={() => {
                  changeLanguage('it');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left pl-4 hover:text-[#C8942D] transition-colors font-medium ${
                  language === 'it' ? 'text-[#C8942D]' : ''
                }`}
              >
                Italiano
              </button>
              <button
                onClick={() => {
                  changeLanguage('de');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left pl-4 hover:text-[#C8942D] transition-colors font-medium ${
                  language === 'de' ? 'text-[#C8942D]' : ''
                }`}
              >
                Deutsch
              </button>
              <button
                onClick={() => {
                  changeLanguage('es');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left pl-4 hover:text-[#C8942D] transition-colors font-medium ${
                  language === 'es' ? 'text-[#C8942D]' : ''
                }`}
              >
                Español
              </button>
              <button
                onClick={() => {
                  changeLanguage('el');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left pl-4 hover:text-[#C8942D] transition-colors font-medium ${
                  language === 'el' ? 'text-[#C8942D]' : ''
                }`}
              >
                Ελληνικά
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
