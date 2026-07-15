import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t, language } = useLanguage();

  const getLangPath = (path: string) => {
    return `/${language}${path}`;
  };

  return (
    <footer className="bg-[#000000] text-white border-t-4 border-[#D00000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo3.svg"
                alt="Malta Global Crypto Bank"
                className="w-44 h-36 object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D00000]">
              {language === 'fr' ? 'Banque' : language === 'it' ? 'Servizi Bancari' : language === 'de' ? 'Banking' : language === 'es' ? 'Banca' : language === 'el' ? 'Τραπεζική' : 'Banking'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to={getLangPath('/personal-banking')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Banque Personnelle' : language === 'it' ? 'Banca Personale' : language === 'de' ? 'Privatbanking' : language === 'es' ? 'Banca Personal' : language === 'el' ? 'Προσωπική Τραπεζική' : 'Personal Banking'}
                </Link>
              </li>
              <li>
                <Link to={getLangPath('/business-banking')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Banque d\'Affaires' : language === 'it' ? 'Banca Aziendale' : language === 'de' ? 'Firmenkundengeschäft' : language === 'es' ? 'Banca Empresarial' : language === 'el' ? 'Επιχειρηματική Τραπεζική' : 'Business Banking'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D00000]">
              {language === 'fr' ? 'Produits' : language === 'it' ? 'Prodotti' : language === 'de' ? 'Produkte' : language === 'es' ? 'Productos' : language === 'el' ? 'Προϊόντα' : 'Products'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to={getLangPath('/credit-cards')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Cartes de Crédit' : language === 'it' ? 'Carte di Credito' : language === 'de' ? 'Kreditkarten' : language === 'es' ? 'Tarjetas de Crédito' : language === 'el' ? 'Πιστωτικές Κάρτες' : 'Credit Cards'}
                </Link>
              </li>
              <li>
                <Link to={getLangPath('/investments')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Investissements' : language === 'it' ? 'Investimenti' : language === 'de' ? 'Anlagen' : language === 'es' ? 'Inversiones' : language === 'el' ? 'Επενδύσεις' : 'Investments'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D00000]">
              {language === 'fr' ? 'Ressources' : language === 'it' ? 'Risorse' : language === 'de' ? 'Ressourcen' : language === 'es' ? 'Recursos' : language === 'el' ? 'Πόροι' : 'Resources'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to={getLangPath('/financial-education')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Éducation Financière' : language === 'it' ? 'Educazione Finanziaria' : language === 'de' ? 'Finanzbildung' : language === 'es' ? 'Educación Financiera' : language === 'el' ? 'Οικονομική Εκπαίδευση' : 'Financial Education'}
                </Link>
              </li>
              <li>
                <Link to={getLangPath('/rates')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Taux d\'Intérêt' : language === 'it' ? 'Tassi di Interesse' : language === 'de' ? 'Zinssätze' : language === 'es' ? 'Tasas de Interés' : language === 'el' ? 'Επιτόκια' : 'Interest Rates'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D00000]">
              {language === 'fr' ? 'À Propos' : language === 'it' ? 'Informazioni' : language === 'de' ? 'Über' : language === 'es' ? 'Acerca de' : language === 'el' ? 'Σχετικά' : 'About'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to={getLangPath('/about')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'À Propos de Nous' : language === 'it' ? 'Chi Siamo' : language === 'de' ? 'Über Uns' : language === 'es' ? 'Acerca de Nosotros' : language === 'el' ? 'Σχετικά με Εμάς' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link to={getLangPath('/who-we-serve')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Qui Nous Servons' : language === 'it' ? 'Chi Serviamo' : language === 'de' ? 'Wen Wir Dienen' : language === 'es' ? 'A Quién Servimos' : language === 'el' ? 'Ποιους Εξυπηρετούμε' : 'Who We Serve'}
                </Link>
              </li>
              <li>
                <Link to={getLangPath('/support')} className="text-[#CCCCCC] hover:text-white transition-colors">
                  {language === 'fr' ? 'Service Client' : language === 'it' ? 'Assistenza Clienti' : language === 'de' ? 'Kundensupport' : language === 'es' ? 'Soporte al Cliente' : language === 'el' ? 'Υποστήριξη Πελατών' : 'Customer Support'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#CCCCCC] text-sm">
              © 2026 Malta Global Crypto Bank. {t.footer.rights}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link to={getLangPath('/terms-of-service')} className="text-[#CCCCCC] hover:text-white transition-colors">
                {language === 'fr' ? 'Termes & Conditions' : language === 'it' ? 'Termini & Condizioni' : language === 'de' ? 'AGB' : language === 'es' ? 'Términos & Condiciones' : language === 'el' ? 'Όροι & Προϋποθέσεις' : 'Terms & Conditions'}
              </Link>
              <span className="text-[#555555]">|</span>
              <Link to={getLangPath('/privacy-policy')} className="text-[#CCCCCC] hover:text-white transition-colors">
                {language === 'fr' ? 'Confidentialité' : language === 'it' ? 'Privacy' : language === 'de' ? 'Datenschutz' : language === 'es' ? 'Privacidad' : language === 'el' ? 'Απόρρητο' : 'Privacy'}
              </Link>
              <span className="text-[#555555]">|</span>
              <Link to={getLangPath('/risk-disclosure')} className="text-[#CCCCCC] hover:text-white transition-colors">
                {language === 'fr' ? 'Divulgation des Risques' : language === 'it' ? 'Informativa sui Rischi' : language === 'de' ? 'Risikohinweis' : language === 'es' ? 'Divulgación de Riesgos' : language === 'el' ? 'Γνωστοποίηση Κινδύνων' : 'Risk Disclosure'}
              </Link>
              <span className="text-[#555555]">|</span>
              <Link to={getLangPath('/refund-policy')} className="text-[#CCCCCC] hover:text-white transition-colors">
                {language === 'fr' ? 'Politique de Remboursement' : language === 'it' ? 'Politica di Rimborso' : language === 'de' ? 'Rückerstattungsrichtlinie' : language === 'es' ? 'Política de Reembolso' : language === 'el' ? 'Πολιτική Επιστροφών' : 'Refund Policy'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
