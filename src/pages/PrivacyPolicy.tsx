import { Shield, Lock, Eye, Database, Users, Globe, FileText, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LegalSection from '../components/legal/LegalSection';
import LegalSubsection from '../components/legal/LegalSubsection';
import LegalList from '../components/legal/LegalList';
import LegalNotice from '../components/legal/LegalNotice';
import TableOfContents from '../components/legal/TableOfContents';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const tocSections = [
    {
      title: language === 'fr' ? 'Introduction et Portée'
        : language === 'it' ? 'Introduzione e Ambito'
        : language === 'de' ? 'Einführung und Geltungsbereich'
        : language === 'es' ? 'Introducción y Alcance'
        : language === 'el' ? 'Εισαγωγή και Εμβέλεια'
        : 'Introduction and Scope',
      id: 'introduction'
    },
    {
      title: language === 'fr' ? 'Définitions des Données'
        : language === 'it' ? 'Definizioni dei Dati'
        : language === 'de' ? 'Datendefinitionen'
        : language === 'es' ? 'Definiciones de Datos'
        : language === 'el' ? 'Ορισμοί Δεδομένων'
        : 'Data Definitions',
      id: 'data-definitions'
    },
    {
      title: language === 'fr' ? 'Informations que Nous Collectons'
        : language === 'it' ? 'Informazioni che Raccogliamo'
        : language === 'de' ? 'Informationen, die Wir Sammeln'
        : language === 'es' ? 'Información que Recopilamos'
        : language === 'el' ? 'Πληροφορίες που Συλλέγουμε'
        : 'Information We Collect',
      id: 'information-collect'
    },
    {
      title: language === 'fr' ? 'Comment Nous Collectons les Données'
        : language === 'it' ? 'Come Raccogliamo i Dati'
        : language === 'de' ? 'Wie Wir Daten Sammeln'
        : language === 'es' ? 'Cómo Recopilamos Datos'
        : language === 'el' ? 'Πώς Συλλέγουμε Δεδομένα'
        : 'How We Collect Data',
      id: 'data-collection-methods'
    },
    {
      title: language === 'fr' ? 'Base Légale du Traitement (RGPD)'
        : language === 'it' ? 'Base Giuridica del Trattamento (GDPR)'
        : language === 'de' ? 'Rechtsgrundlage der Verarbeitung (DSGVO)'
        : language === 'es' ? 'Base Legal del Procesamiento (GDPR)'
        : language === 'el' ? 'Νομική Βάση Επεξεργασίας (GDPR)'
        : 'Legal Basis for Processing (GDPR)',
      id: 'legal-basis'
    },
    {
      title: language === 'fr' ? 'Finalités du Traitement'
        : language === 'it' ? 'Finalità del Trattamento'
        : language === 'de' ? 'Zwecke der Verarbeitung'
        : language === 'es' ? 'Propósitos del Procesamiento'
        : language === 'el' ? 'Σκοποί Επεξεργασίας'
        : 'Purposes of Processing',
      id: 'processing-purposes'
    },
    {
      title: language === 'fr' ? 'Partage et Divulgation des Données'
        : language === 'it' ? 'Condivisione e Divulgazione dei Dati'
        : language === 'de' ? 'Datenweitergabe und Offenlegung'
        : language === 'es' ? 'Compartir y Divulgación de Datos'
        : language === 'el' ? 'Κοινοποίηση και Γνωστοποίηση Δεδομένων'
        : 'Data Sharing and Disclosure',
      id: 'data-sharing'
    },
    {
      title: language === 'fr' ? 'Sécurité et Protection des Données'
        : language === 'it' ? 'Sicurezza e Protezione dei Dati'
        : language === 'de' ? 'Datensicherheit und Schutz'
        : language === 'es' ? 'Seguridad y Protección de Datos'
        : language === 'el' ? 'Ασφάλεια και Προστασία Δεδομένων'
        : 'Data Security and Protection',
      id: 'data-security'
    },
    {
      title: language === 'fr' ? 'Conservation des Données'
        : language === 'it' ? 'Conservazione dei Dati'
        : language === 'de' ? 'Datenspeicherung'
        : language === 'es' ? 'Retención de Datos'
        : language === 'el' ? 'Διατήρηση Δεδομένων'
        : 'Data Retention',
      id: 'data-retention'
    },
    {
      title: language === 'fr' ? 'Vos Droits en Matière de Protection des Données'
        : language === 'it' ? 'I Tuoi Diritti sulla Protezione dei Dati'
        : language === 'de' ? 'Ihre Datenschutzrechte'
        : language === 'es' ? 'Sus Derechos de Protección de Datos'
        : language === 'el' ? 'Τα Δικαιώματα Προστασίας Δεδομένων σας'
        : 'Your Data Protection Rights',
      id: 'data-rights'
    },
    {
      title: language === 'fr' ? 'Cookies et Technologies de Suivi'
        : language === 'it' ? 'Cookie e Tecnologie di Tracciamento'
        : language === 'de' ? 'Cookies und Tracking-Technologien'
        : language === 'es' ? 'Cookies y Tecnologías de Seguimiento'
        : language === 'el' ? 'Cookies και Τεχνολογίες Παρακολούθησης'
        : 'Cookies and Tracking Technologies',
      id: 'cookies'
    },
    {
      title: language === 'fr' ? 'Transferts Internationaux de Données'
        : language === 'it' ? 'Trasferimenti Internazionali di Dati'
        : language === 'de' ? 'Internationale Datenübermittlungen'
        : language === 'es' ? 'Transferencias Internacionales de Datos'
        : language === 'el' ? 'Διεθνείς Μεταφορές Δεδομένων'
        : 'International Data Transfers',
      id: 'international-transfers'
    },
    {
      title: language === 'fr' ? 'Notification de Violation de Données'
        : language === 'it' ? 'Notifica di Violazione dei Dati'
        : language === 'de' ? 'Datenschutzverletzungsmeldung'
        : language === 'es' ? 'Notificación de Violación de Datos'
        : language === 'el' ? 'Ειδοποίηση Παραβίασης Δεδομένων'
        : 'Data Breach Notification',
      id: 'data-breach'
    },
    {
      title: language === 'fr' ? 'Confidentialité des Enfants'
        : language === 'it' ? 'Privacy dei Minori'
        : language === 'de' ? 'Datenschutz für Kinder'
        : language === 'es' ? 'Privacidad de los Niños'
        : language === 'el' ? 'Απόρρητο Παιδιών'
        : 'Children\'s Privacy',
      id: 'children-privacy'
    },
    {
      title: language === 'fr' ? 'Prise de Décision Automatisée et Profilage'
        : language === 'it' ? 'Processo Decisionale Automatizzato e Profilazione'
        : language === 'de' ? 'Automatisierte Entscheidungsfindung und Profiling'
        : language === 'es' ? 'Toma de Decisiones Automatizada y Perfilado'
        : language === 'el' ? 'Αυτοματοποιημένη Λήψη Αποφάσεων και Προφίλ'
        : 'Automated Decision-Making and Profiling',
      id: 'automated-decisions'
    },
    {
      title: language === 'fr' ? 'Services et Liens Tiers'
        : language === 'it' ? 'Servizi e Link di Terze Parti'
        : language === 'de' ? 'Dienste und Links von Drittanbietern'
        : language === 'es' ? 'Servicios y Enlaces de Terceros'
        : language === 'el' ? 'Υπηρεσίες και Σύνδεσμοι Τρίτων'
        : 'Third-Party Services and Links',
      id: 'third-party'
    },
    {
      title: language === 'fr' ? 'Modifications de Cette Politique'
        : language === 'it' ? 'Modifiche a Questa Politica'
        : language === 'de' ? 'Änderungen an Dieser Richtlinie'
        : language === 'es' ? 'Cambios a Esta Política'
        : language === 'el' ? 'Αλλαγές σε Αυτήν την Πολιτική'
        : 'Changes to This Policy',
      id: 'policy-changes'
    },
    {
      title: language === 'fr' ? 'Autorités de Supervision'
        : language === 'it' ? 'Autorità di Supervisione'
        : language === 'de' ? 'Aufsichtsbehörden'
        : language === 'es' ? 'Autoridades de Supervisión'
        : language === 'el' ? 'Εποπτικές Αρχές'
        : 'Supervisory Authorities',
      id: 'supervisory-authorities'
    },
    {
      title: language === 'fr' ? 'Nous Contacter'
        : language === 'it' ? 'Contattaci'
        : language === 'de' ? 'Kontaktieren Sie Uns'
        : language === 'es' ? 'Contáctenos'
        : language === 'el' ? 'Επικοινωνήστε Μαζί Μας'
        : 'Contact Us',
      id: 'contact'
    }
  ];

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: February 16, 2026',
      effectiveDate: 'Effective Date: January 1, 2026',
      intro: 'Aareal Bank AG ("Aareal Bank AG", "we", "us", or "our") is committed to protecting your privacy and personal data in accordance with the highest international standards, including the General Data Protection Regulation (GDPR), the Malta Data Protection Act, and other applicable privacy laws. This comprehensive Privacy Policy explains in detail how we collect, use, process, disclose, retain, and safeguard your personal information when you access or use our banking, financial, and cryptocurrency services.',
      tocTitle: 'Table of Contents'
    },
    fr: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour: 16 février 2026',
      effectiveDate: 'Date d\'entrée en vigueur: 1er janvier 2026',
      intro: 'Aareal Bank AG ("Aareal Bank AG", "nous") s\'engage à protéger votre vie privée et vos données personnelles conformément aux normes internationales les plus élevées, y compris le Règlement Général sur la Protection des Données (RGPD), la Loi maltaise sur la protection des données et autres lois applicables en matière de confidentialité. Cette Politique de Confidentialité complète explique en détail comment nous collectons, utilisons, traitons, divulguons, conservons et protégeons vos informations personnelles lorsque vous accédez ou utilisez nos services bancaires, financiers et de cryptomonnaie.',
      tocTitle: 'Table des Matières'
    },
    it: {
      title: 'Informativa sulla Privacy',
      lastUpdated: 'Ultimo aggiornamento: 16 febbraio 2026',
      effectiveDate: 'Data di entrata in vigore: 1 gennaio 2026',
      intro: 'Aareal Bank AG ("Aareal Bank AG", "noi") si impegna a proteggere la tua privacy e i tuoi dati personali in conformità con i più elevati standard internazionali, incluso il Regolamento Generale sulla Protezione dei Dati (GDPR), la Legge maltese sulla protezione dei dati e altre leggi applicabili in materia di privacy. Questa Informativa sulla Privacy completa spiega in dettaglio come raccogliamo, utilizziamo, trattiamo, divulghiamo, conserviamo e proteggiamo le tue informazioni personali quando accedi o utilizzi i nostri servizi bancari, finanziari e di criptovaluta.',
      tocTitle: 'Indice'
    },
    de: {
      title: 'Datenschutzrichtlinie',
      lastUpdated: 'Zuletzt aktualisiert: 16. Februar 2026',
      effectiveDate: 'Gültig ab: 1. Januar 2026',
      intro: 'Aareal Bank AG ("Aareal Bank AG", "wir") verpflichtet sich, Ihre Privatsphäre und persönlichen Daten gemäß den höchsten internationalen Standards zu schützen, einschließlich der Datenschutz-Grundverordnung (DSGVO), des maltesischen Datenschutzgesetzes und anderer anwendbarer Datenschutzgesetze. Diese umfassende Datenschutzrichtlinie erklärt detailliert, wie wir Ihre persönlichen Informationen sammeln, verwenden, verarbeiten, offenlegen, aufbewahren und schützen, wenn Sie unsere Bank-, Finanz- und Kryptowährungsdienste nutzen oder darauf zugreifen.',
      tocTitle: 'Inhaltsverzeichnis'
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 16 de febrero de 2026',
      effectiveDate: 'Fecha de entrada en vigencia: 1 de enero de 2026',
      intro: 'Aareal Bank AG ("Aareal Bank AG", "nosotros") se compromete a proteger su privacidad y datos personales de acuerdo con los más altos estándares internacionales, incluido el Reglamento General de Protección de Datos (GDPR), la Ley de Protección de Datos de Malta y otras leyes de privacidad aplicables. Esta Política de Privacidad integral explica en detalle cómo recopilamos, usamos, procesamos, divulgamos, retenemos y protegemos su información personal cuando accede o usa nuestros servicios bancarios, financieros y de criptomonedas.',
      tocTitle: 'Tabla de Contenidos'
    },
    el: {
      title: 'Πολιτική Απορρήτου',
      lastUpdated: 'Τελευταία ενημέρωση: 16 Φεβρουαρίου 2026',
      effectiveDate: 'Ημερομηνία έναρξης ισχύος: 1 Ιανουαρίου 2026',
      intro: 'Η Aareal Bank AG ("Aareal Bank AG", "εμείς") δεσμεύεται να προστατεύει το απόρρητο και τα προσωπικά σας δεδομένα σύμφωνα με τα υψηλότερα διεθνή πρότυπα, συμπεριλαμβανομένου του Γενικού Κανονισμού Προστασίας Δεδομένων (GDPR), του νόμου της Μάλτας για την προστασία δεδομένων και άλλων ισχυόντων νόμων απορρήτου. Αυτή η ολοκληρωμένη Πολιτική Απορρήτου εξηγεί λεπτομερώς πώς συλλέγουμε, χρησιμοποιούμε, επεξεργαζόμαστε, αποκαλύπτουμε, διατηρούμε και προστατεύουμε τις προσωπικές σας πληροφορίες όταν έχετε πρόσβαση ή χρησιμοποιείτε τις τραπεζικές, χρηματοοικονομικές και υπηρεσίες κρυπτονομισμάτων μας.',
      tocTitle: 'Πίνακας Περιεχομένων'
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-r from-[#000000] to-[#000000] text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Shield size={56} className="text-[#D00000]" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{currentContent.title}</h1>
          </div>
          <div className="space-y-2 text-[#E5E5E5]">
            <p className="text-lg">{currentContent.lastUpdated}</p>
            <p className="text-lg">{currentContent.effectiveDate}</p>
          </div>
          <p className="text-[#F5F5F5] text-lg leading-relaxed mt-6">{currentContent.intro}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TableOfContents sections={tocSections} title={currentContent.tocTitle} />

        <LegalNotice type="important" className="mb-8">
          <p className="font-semibold mb-2">
            {language === 'fr' ? 'Avis Important de Protection des Données'
              : language === 'it' ? 'Avviso Importante sulla Protezione dei Dati'
              : language === 'de' ? 'Wichtiger Datenschutzhinweis'
              : language === 'es' ? 'Aviso Importante de Protección de Datos'
              : language === 'el' ? 'Σημαντική Ειδοποίηση Προστασίας Δεδομένων'
              : 'Important Data Protection Notice'}
          </p>
          <p>
            {language === 'fr' ? 'Cette politique est juridiquement contraignante. En utilisant nos services, vous reconnaissez avoir lu, compris et accepté toutes les conditions décrites dans cette Politique de Confidentialité. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.'
              : language === 'it' ? 'Questa politica è legalmente vincolante. Utilizzando i nostri servizi, riconosci di aver letto, compreso e accettato tutti i termini descritti in questa Informativa sulla Privacy. Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi.'
              : language === 'de' ? 'Diese Richtlinie ist rechtlich bindend. Durch die Nutzung unserer Dienste bestätigen Sie, dass Sie alle in dieser Datenschutzrichtlinie beschriebenen Bedingungen gelesen, verstanden und akzeptiert haben. Wenn Sie diese Bedingungen nicht akzeptieren, nutzen Sie bitte unsere Dienste nicht.'
              : language === 'es' ? 'Esta política es legalmente vinculante. Al usar nuestros servicios, usted reconoce que ha leído, comprendido y aceptado todos los términos descritos en esta Política de Privacidad. Si no acepta estos términos, por favor no use nuestros servicios.'
              : language === 'el' ? 'Αυτή η πολιτική είναι νομικά δεσμευτική. Χρησιμοποιώντας τις υπηρεσίες μας, αναγνωρίζετε ότι έχετε διαβάσει, κατανοήσει και αποδεχτεί όλους τους όρους που περιγράφονται σε αυτήν την Πολιτική Απορρήτου. Εάν δεν αποδέχεστε αυτούς τους όρους, παρακαλούμε μην χρησιμοποιείτε τις υπηρεσίες μας.'
              : 'This policy is legally binding. By using our services, you acknowledge that you have read, understood, and agreed to all terms outlined in this Privacy Policy. If you do not agree to these terms, please do not use our services.'}
          </p>
        </LegalNotice>

        <LegalSection title={tocSections[0].title} id={tocSections[0].id} icon={<Info size={24} />}>
          <p className="text-[#333333] leading-relaxed mb-4">
            {language === 'fr' ? 'Cette Politique de Confidentialité s\'applique à tous les services fournis par Aareal Bank AG, y compris mais sans s\'y limiter:'
              : language === 'it' ? 'Questa Informativa sulla Privacy si applica a tutti i servizi forniti da Aareal Bank AG, tra cui ma non limitati a:'
              : language === 'de' ? 'Diese Datenschutzrichtlinie gilt für alle von Aareal Bank AG bereitgestellten Dienste, einschließlich, aber nicht beschränkt auf:'
              : language === 'es' ? 'Esta Política de Privacidad se aplica a todos los servicios proporcionados por Aareal Bank AG, incluyendo pero no limitado a:'
              : language === 'el' ? 'Αυτή η Πολιτική Απορρήτου ισχύει για όλες τις υπηρεσίες που παρέχονται από την Aareal Bank AG, συμπεριλαμβανομένων αλλά όχι περιοριζόμενων σε:'
              : 'This Privacy Policy applies to all services provided by Aareal Bank AG, including but not limited to:'}
          </p>

          <LegalList
            items={[
              language === 'fr' ? 'Services bancaires personnels et d\'entreprise'
                : language === 'it' ? 'Servizi bancari personali e aziendali'
                : language === 'de' ? 'Persönliche und geschäftliche Bankdienstleistungen'
                : language === 'es' ? 'Servicios bancarios personales y empresariales'
                : language === 'el' ? 'Προσωπικές και επιχειρηματικές τραπεζικές υπηρεσίες'
                : 'Personal and business banking services',
              language === 'fr' ? 'Services de trading et de gestion de cryptomonnaies'
                : language === 'it' ? 'Servizi di trading e gestione di criptovalute'
                : language === 'de' ? 'Kryptowährungs-Trading- und Verwaltungsdienste'
                : language === 'es' ? 'Servicios de trading y gestión de criptomonedas'
                : language === 'el' ? 'Υπηρεσίες συναλλαγών και διαχείρισης κρυπτονομισμάτων'
                : 'Cryptocurrency trading and custody services',
              language === 'fr' ? 'Services de prêt et de crédit'
                : language === 'it' ? 'Servizi di prestito e credito'
                : language === 'de' ? 'Kredit- und Darlehensdienstleistungen'
                : language === 'es' ? 'Servicios de préstamos y crédito'
                : language === 'el' ? 'Υπηρεσίες δανεισμού και πίστωσης'
                : 'Lending and credit services',
              language === 'fr' ? 'Services de gestion de patrimoine et d\'investissement'
                : language === 'it' ? 'Servizi di gestione patrimoniale e investimenti'
                : language === 'de' ? 'Vermögensverwaltungs- und Investmentdienstleistungen'
                : language === 'es' ? 'Servicios de gestión de patrimonio e inversión'
                : language === 'el' ? 'Υπηρεσίες διαχείρισης περιουσίας και επενδύσεων'
                : 'Wealth management and investment services',
              language === 'fr' ? 'Plateforme et applications bancaires en ligne'
                : language === 'it' ? 'Piattaforma e applicazioni bancarie online'
                : language === 'de' ? 'Online-Banking-Plattform und Anwendungen'
                : language === 'es' ? 'Plataforma y aplicaciones de banca en línea'
                : language === 'el' ? 'Διαδικτυακή τραπεζική πλατφόρμα και εφαρμογές'
                : 'Online banking platform and applications',
              language === 'fr' ? 'Sites web, applications mobiles et API'
                : language === 'it' ? 'Siti web, applicazioni mobili e API'
                : language === 'de' ? 'Websites, mobile Anwendungen und APIs'
                : language === 'es' ? 'Sitios web, aplicaciones móviles y API'
                : language === 'el' ? 'Ιστότοποι, εφαρμογές για κινητά και API'
                : 'Websites, mobile applications, and APIs'
            ]}
          />

          <p className="text-[#333333] leading-relaxed mt-4">
            {language === 'fr' ? 'Nous traitons des données personnelles en tant que responsable du traitement des données au sens du RGPD et d\'autres lois applicables sur la protection des données. Cette politique s\'applique à tous les utilisateurs, prospects, clients et visiteurs de nos plateformes, quelle que soit leur localisation géographique.'
              : language === 'it' ? 'Trattiamo i dati personali in qualità di titolare del trattamento ai sensi del GDPR e di altre leggi applicabili sulla protezione dei dati. Questa politica si applica a tutti gli utenti, potenziali clienti, clienti e visitatori delle nostre piattaforme, indipendentemente dalla loro posizione geografica.'
              : language === 'de' ? 'Wir verarbeiten personenbezogene Daten als Verantwortlicher im Sinne der DSGVO und anderer anwendbarer Datenschutzgesetze. Diese Richtlinie gilt für alle Nutzer, Interessenten, Kunden und Besucher unserer Plattformen, unabhängig von ihrem geografischen Standort.'
              : language === 'es' ? 'Procesamos datos personales como responsable del tratamiento según el GDPR y otras leyes de protección de datos aplicables. Esta política se aplica a todos los usuarios, prospectos, clientes y visitantes de nuestras plataformas, independientemente de su ubicación geográfica.'
              : language === 'el' ? 'Επεξεργαζόμαστε προσωπικά δεδομένα ως υπεύθυνος επεξεργασίας σύμφωνα με τον GDPR και άλλους ισχύοντες νόμους προστασίας δεδομένων. Αυτή η πολιτική ισχύει για όλους τους χρήστες, υποψήφιους πελάτες, πελάτες και επισκέπτες των πλατφορμών μας, ανεξάρτητα από τη γεωγραφική τους τοποθεσία.'
              : 'We process personal data as a data controller under the GDPR and other applicable data protection laws. This policy applies to all users, prospects, clients, and visitors of our platforms, regardless of their geographic location.'}
          </p>
        </LegalSection>

        <LegalSection title={tocSections[1].title} id={tocSections[1].id} icon={<Database size={24} />}>
          <p className="text-[#333333] leading-relaxed mb-4">
            {language === 'fr' ? 'Aux fins de cette Politique de Confidentialité, les termes suivants ont les significations suivantes:'
              : language === 'it' ? 'Ai fini di questa Informativa sulla Privacy, i seguenti termini hanno i seguenti significati:'
              : language === 'de' ? 'Für die Zwecke dieser Datenschutzrichtlinie haben die folgenden Begriffe die folgenden Bedeutungen:'
              : language === 'es' ? 'Para los fines de esta Política de Privacidad, los siguientes términos tienen los siguientes significados:'
              : language === 'el' ? 'Για τους σκοπούς αυτής της Πολιτικής Απορρήτου, οι ακόλουθοι όροι έχουν τις ακόλουθες έννοιες:'
              : 'For the purposes of this Privacy Policy, the following terms have the following meanings:'}
          </p>

          <LegalSubsection title={language === 'fr' ? 'Données Personnelles'
            : language === 'it' ? 'Dati Personali'
            : language === 'de' ? 'Personenbezogene Daten'
            : language === 'es' ? 'Datos Personales'
            : language === 'el' ? 'Προσωπικά Δεδομένα'
            : 'Personal Data'}>
            <p className="text-[#333333] leading-relaxed">
              {language === 'fr' ? 'Toute information se rapportant à une personne physique identifiée ou identifiable ("personne concernée"). Une personne physique identifiable est une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un identifiant tel qu\'un nom, un numéro d\'identification, des données de localisation, un identifiant en ligne ou à un ou plusieurs éléments spécifiques propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.'
                : language === 'it' ? 'Qualsiasi informazione relativa a una persona fisica identificata o identificabile ("interessato"). Una persona fisica identificabile è una persona che può essere identificata, direttamente o indirettamente, in particolare mediante riferimento a un identificativo come un nome, un numero di identificazione, dati di localizzazione, un identificativo online o a uno o più elementi specifici della sua identità fisica, fisiologica, genetica, psichica, economica, culturale o sociale.'
                : language === 'de' ? 'Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person ("betroffene Person") beziehen. Eine identifizierbare natürliche Person ist eine Person, die direkt oder indirekt identifiziert werden kann, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.'
                : language === 'es' ? 'Cualquier información relacionada con una persona física identificada o identificable ("interesado"). Una persona física identificable es una persona que puede ser identificada, directa o indirectamente, en particular mediante referencia a un identificador como un nombre, un número de identificación, datos de ubicación, un identificador en línea o a uno o varios elementos específicos de su identidad física, fisiológica, genética, psíquica, económica, cultural o social.'
                : language === 'el' ? 'Κάθε πληροφορία που σχετίζεται με ταυτοποιημένο ή ταυτοποιήσιμο φυσικό πρόσωπο ("υποκείμενο των δεδομένων"). Ταυτοποιήσιμο φυσικό πρόσωπο είναι εκείνο του οποίου η ταυτότητα μπορεί να εξακριβωθεί, άμεσα ή έμμεσα, ιδίως μέσω αναφοράς σε αναγνωριστικό στοιχείο ταυτότητας, όπως όνομα, σε αριθμό ταυτότητας, σε δεδομένα θέσης, σε επιγραμμικό αναγνωριστικό ταυτότητας ή σε έναν ή περισσότερους παράγοντες που προσιδιάζουν στη σωματική, φυσιολογική, γενετική, ψυχολογική, οικονομική, πολιτιστική ή κοινωνική ταυτότητα του εν λόγω φυσικού προσώπου.'
                : 'Any information relating to an identified or identifiable natural person ("data subject"). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.'}
            </p>
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Traitement'
            : language === 'it' ? 'Trattamento'
            : language === 'de' ? 'Verarbeitung'
            : language === 'es' ? 'Procesamiento'
            : language === 'el' ? 'Επεξεργασία'
            : 'Processing'}>
            <p className="text-[#333333] leading-relaxed">
              {language === 'fr' ? 'Toute opération ou tout ensemble d\'opérations effectuées ou non à l\'aide de procédés automatisés et appliquées à des données ou des ensembles de données à caractère personnel, telles que la collecte, l\'enregistrement, l\'organisation, la structuration, la conservation, l\'adaptation ou la modification, l\'extraction, la consultation, l\'utilisation, la communication par transmission, la diffusion ou toute autre forme de mise à disposition, le rapprochement ou l\'interconnexion, la limitation, l\'effacement ou la destruction.'
                : language === 'it' ? 'Qualsiasi operazione o insieme di operazioni, compiute con o senza l\'ausilio di processi automatizzati e applicate a dati personali o insiemi di dati personali, come la raccolta, la registrazione, l\'organizzazione, la strutturazione, la conservazione, l\'adattamento o la modifica, l\'estrazione, la consultazione, l\'uso, la comunicazione mediante trasmissione, diffusione o qualsiasi altra forma di messa a disposizione, il raffronto o l\'interconnessione, la limitazione, la cancellazione o la distruzione.'
                : language === 'de' ? 'Jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.'
                : language === 'es' ? 'Cualquier operación o conjunto de operaciones realizadas sobre datos personales o conjuntos de datos personales, ya sea por procedimientos automatizados o no, como la recogida, registro, organización, estructuración, conservación, adaptación o modificación, extracción, consulta, utilización, comunicación por transmisión, difusión o cualquier otra forma de habilitación de acceso, cotejo o interconexión, limitación, supresión o destrucción.'
                : language === 'el' ? 'Κάθε πράξη ή σειρά πράξεων που πραγματοποιείται με ή χωρίς τη χρήση αυτοματοποιημένων μέσων, σε δεδομένα προσωπικού χαρακτήρα ή σε σύνολα δεδομένων προσωπικού χαρακτήρα, όπως η συλλογή, η καταχώριση, η οργάνωση, η διάρθρωση, η αποθήκευση, η προσαρμογή ή η μεταβολή, η ανάκτηση, η αναζήτηση πληροφοριών, η χρήση, η κοινολόγηση με διαβίβαση, η διάδοση ή κάθε άλλη μορφή διάθεσης, η συσχέτιση ή ο συνδυασμός, ο περιορισμός, η διαγραφή ή η καταστροφή.'
                : 'Any operation or set of operations performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.'}
            </p>
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Responsable du Traitement'
            : language === 'it' ? 'Titolare del Trattamento'
            : language === 'de' ? 'Verantwortlicher'
            : language === 'es' ? 'Responsable del Tratamiento'
            : language === 'el' ? 'Υπεύθυνος Επεξεργασίας'
            : 'Data Controller'}>
            <p className="text-[#333333] leading-relaxed">
              {language === 'fr' ? 'Aareal Bank AG détermine les finalités et les moyens du traitement des données à caractère personnel. Nous agissons en tant que responsable du traitement des données pour toutes les données personnelles que nous collectons et traitons dans le cadre de la fourniture de nos services.'
                : language === 'it' ? 'Aareal Bank AG determina le finalità e i mezzi del trattamento dei dati personali. Agiamo come titolare del trattamento per tutti i dati personali che raccogliamo e trattiamo nell\'ambito della fornitura dei nostri servizi.'
                : language === 'de' ? 'Aareal Bank AG legt die Zwecke und Mittel der Verarbeitung personenbezogener Daten fest. Wir handeln als Verantwortlicher für alle personenbezogenen Daten, die wir im Rahmen der Bereitstellung unserer Dienstleistungen erheben und verarbeiten.'
                : language === 'es' ? 'Aareal Bank AG determina los fines y medios del tratamiento de datos personales. Actuamos como responsable del tratamiento de todos los datos personales que recopilamos y procesamos en el marco de la prestación de nuestros servicios.'
                : language === 'el' ? 'Η Aareal Bank AG καθορίζει τους σκοπούς και τα μέσα επεξεργασίας των δεδομένων προσωπικού χαρακτήρα. Ενεργούμε ως υπεύθυνος επεξεργασίας για όλα τα προσωπικά δεδομένα που συλλέγουμε και επεξεργαζόμαστε στο πλαίσιο της παροχής των υπηρεσιών μας.'
                : 'Aareal Bank AG determines the purposes and means of processing personal data. We act as the data controller for all personal data we collect and process in connection with providing our services.'}
            </p>
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Sous-traitant'
            : language === 'it' ? 'Responsabile del Trattamento'
            : language === 'de' ? 'Auftragsverarbeiter'
            : language === 'es' ? 'Encargado del Tratamiento'
            : language === 'el' ? 'Εκτελών την Επεξεργασία'
            : 'Data Processor'}>
            <p className="text-[#333333] leading-relaxed">
              {language === 'fr' ? 'Une personne physique ou morale, une autorité publique, un service ou un autre organisme qui traite des données à caractère personnel pour le compte du responsable du traitement. Nous pouvons engager des sous-traitants tiers pour traiter vos données personnelles en notre nom, conformément à nos instructions et aux normes de protection des données.'
                : language === 'it' ? 'Una persona fisica o giuridica, un\'autorità pubblica, un servizio o un altro organismo che tratta dati personali per conto del titolare del trattamento. Possiamo coinvolgere responsabili del trattamento di terze parti per trattare i tuoi dati personali per nostro conto, in conformità con le nostre istruzioni e gli standard di protezione dei dati.'
                : language === 'de' ? 'Eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet. Wir können Drittanbieter-Auftragsverarbeiter beauftragen, Ihre personenbezogenen Daten in unserem Auftrag gemäß unseren Anweisungen und Datenschutzstandards zu verarbeiten.'
                : language === 'es' ? 'Una persona física o jurídica, autoridad pública, servicio u otro organismo que trate datos personales por cuenta del responsable del tratamiento. Podemos contratar encargados del tratamiento de terceros para procesar sus datos personales en nuestro nombre, de conformidad con nuestras instrucciones y estándares de protección de datos.'
                : language === 'el' ? 'Φυσικό ή νομικό πρόσωπο, δημόσια αρχή, υπηρεσία ή άλλος φορέας που επεξεργάζεται δεδομένα προσωπικού χαρακτήρα για λογαριασμό του υπευθύνου επεξεργασίας. Ενδέχεται να προσλάβουμε εκτελούντες την επεξεργασία τρίτων για να επεξεργαστούν τα προσωπικά σας δεδομένα για λογαριασμό μας, σύμφωνα με τις οδηγίες και τα πρότυπα προστασίας δεδομένων μας.'
                : 'A natural or legal person, public authority, agency or other body which processes personal data on behalf of the data controller. We may engage third-party data processors to process your personal data on our behalf, in accordance with our instructions and data protection standards.'}
            </p>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title={tocSections[2].title} id={tocSections[2].id} icon={<Eye size={24} />}>
          <p className="text-[#333333] leading-relaxed mb-4">
            {language === 'fr' ? 'Nous collectons et traitons diverses catégories de données personnelles en fonction de votre relation avec nous et des services que vous utilisez. Les catégories suivantes de données personnelles peuvent être collectées:'
              : language === 'it' ? 'Raccogliamo e trattiamo varie categorie di dati personali a seconda della vostra relazione con noi e dei servizi che utilizzate. Possono essere raccolte le seguenti categorie di dati personali:'
              : language === 'de' ? 'Wir erheben und verarbeiten verschiedene Kategorien personenbezogener Daten abhängig von Ihrer Beziehung zu uns und den von Ihnen genutzten Dienstleistungen. Folgende Kategorien personenbezogener Daten können erhoben werden:'
              : language === 'es' ? 'Recopilamos y procesamos varias categorías de datos personales dependiendo de su relación con nosotros y los servicios que utiliza. Se pueden recopilar las siguientes categorías de datos personales:'
              : language === 'el' ? 'Συλλέγουμε και επεξεργαζόμαστε διάφορες κατηγορίες προσωπικών δεδομένων ανάλογα με τη σχέση σας μαζί μας και τις υπηρεσίες που χρησιμοποιείτε. Μπορούν να συλλεχθούν οι ακόλουθες κατηγορίες προσωπικών δεδομένων:'
              : 'We collect and process various categories of personal data depending on your relationship with us and the services you use. The following categories of personal data may be collected:'}
          </p>

          <LegalSubsection title={language === 'fr' ? 'Informations d\'Identification Personnelle'
            : language === 'it' ? 'Informazioni di Identificazione Personale'
            : language === 'de' ? 'Persönliche Identifikationsinformationen'
            : language === 'es' ? 'Información de Identificación Personal'
            : language === 'el' ? 'Πληροφορίες Προσωπικής Ταυτοποίησης'
            : 'Personal Identification Information'}>
            <LegalList
              items={[
                language === 'fr' ? 'Nom complet (prénom, nom de famille, deuxième prénom)'
                  : language === 'it' ? 'Nome completo (nome, cognome, secondo nome)'
                  : language === 'de' ? 'Vollständiger Name (Vorname, Nachname, Zweitname)'
                  : language === 'es' ? 'Nombre completo (nombre, apellido, segundo nombre)'
                  : language === 'el' ? 'Πλήρες όνομα (όνομα, επώνυμο, δεύτερο όνομα)'
                  : 'Full name (first name, last name, middle name)',
                language === 'fr' ? 'Date et lieu de naissance'
                  : language === 'it' ? 'Data e luogo di nascita'
                  : language === 'de' ? 'Geburtsdatum und -ort'
                  : language === 'es' ? 'Fecha y lugar de nacimiento'
                  : language === 'el' ? 'Ημερομηνία και τόπος γέννησης'
                  : 'Date and place of birth',
                language === 'fr' ? 'Nationalité et citoyenneté'
                  : language === 'it' ? 'Nazionalità e cittadinanza'
                  : language === 'de' ? 'Nationalität und Staatsbürgerschaft'
                  : language === 'es' ? 'Nacionalidad y ciudadanía'
                  : language === 'el' ? 'Εθνικότητα και ιθαγένεια'
                  : 'Nationality and citizenship',
                language === 'fr' ? 'Numéro d\'identification national / passeport / permis de conduire'
                  : language === 'it' ? 'Numero di identificazione nazionale / passaporto / patente di guida'
                  : language === 'de' ? 'Nationale Identifikationsnummer / Reisepass / Führerschein'
                  : language === 'es' ? 'Número de identificación nacional / pasaporte / licencia de conducir'
                  : language === 'el' ? 'Εθνικός αριθμός ταυτότητας / διαβατήριο / άδεια οδήγησης'
                  : 'National identification number / passport / driver\'s license',
                language === 'fr' ? 'Numéro de sécurité sociale ou équivalent'
                  : language === 'it' ? 'Numero di previdenza sociale o equivalente'
                  : language === 'de' ? 'Sozialversicherungsnummer oder gleichwertig'
                  : language === 'es' ? 'Número de seguridad social o equivalente'
                  : language === 'el' ? 'Αριθμός κοινωνικής ασφάλισης ή ισοδύναμος'
                  : 'Social security number or equivalent',
                language === 'fr' ? 'Statut de résidence fiscale'
                  : language === 'it' ? 'Stato di residenza fiscale'
                  : language === 'de' ? 'Steuerlicher Wohnsitzstatus'
                  : language === 'es' ? 'Estado de residencia fiscal'
                  : language === 'el' ? 'Κατάσταση φορολογικής κατοικίας'
                  : 'Tax residency status',
                language === 'fr' ? 'Photographie et données biométriques (si nécessaire pour la vérification)'
                  : language === 'it' ? 'Fotografia e dati biometrici (se necessari per la verifica)'
                  : language === 'de' ? 'Fotografie und biometrische Daten (falls zur Überprüfung erforderlich)'
                  : language === 'es' ? 'Fotografía y datos biométricos (si es necesario para verificación)'
                  : language === 'el' ? 'Φωτογραφία και βιομετρικά δεδομένα (αν απαιτείται για επαλήθευση)'
                  : 'Photograph and biometric data (if required for verification)'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Informations de Contact'
            : language === 'it' ? 'Informazioni di Contatto'
            : language === 'de' ? 'Kontaktinformationen'
            : language === 'es' ? 'Información de Contacto'
            : language === 'el' ? 'Στοιχεία Επικοινωνίας'
            : 'Contact Information'}>
            <LegalList
              items={[
                language === 'fr' ? 'Adresse résidentielle physique (actuelle et précédente)'
                  : language === 'it' ? 'Indirizzo residenziale fisico (attuale e precedente)'
                  : language === 'de' ? 'Physische Wohnanschrift (aktuell und vorherig)'
                  : language === 'es' ? 'Dirección residencial física (actual y anterior)'
                  : language === 'el' ? 'Φυσική διεύθυνση κατοικίας (τρέχουσα και προηγούμενη)'
                  : 'Physical residential address (current and previous)',
                language === 'fr' ? 'Adresse postale'
                  : language === 'it' ? 'Indirizzo postale'
                  : language === 'de' ? 'Postanschrift'
                  : language === 'es' ? 'Dirección postal'
                  : language === 'el' ? 'Ταχυδρομική διεύθυνση'
                  : 'Mailing address',
                language === 'fr' ? 'Adresse e-mail (personnelle et professionnelle)'
                  : language === 'it' ? 'Indirizzo email (personale e aziendale)'
                  : language === 'de' ? 'E-Mail-Adresse (privat und geschäftlich)'
                  : language === 'es' ? 'Dirección de correo electrónico (personal y empresarial)'
                  : language === 'el' ? 'Διεύθυνση email (προσωπική και επαγγελματική)'
                  : 'Email address (personal and business)',
                language === 'fr' ? 'Numéros de téléphone (mobile, fixe, professionnel)'
                  : language === 'it' ? 'Numeri di telefono (cellulare, fisso, aziendale)'
                  : language === 'de' ? 'Telefonnummern (Mobil, Festnetz, geschäftlich)'
                  : language === 'es' ? 'Números de teléfono (móvil, fijo, comercial)'
                  : language === 'el' ? 'Αριθμοί τηλεφώνου (κινητό, σταθερό, επαγγελματικό)'
                  : 'Phone numbers (mobile, landline, business)',
                language === 'fr' ? 'Méthodes et préférences de communication'
                  : language === 'it' ? 'Metodi e preferenze di comunicazione'
                  : language === 'de' ? 'Kommunikationsmethoden und -präferenzen'
                  : language === 'es' ? 'Métodos y preferencias de comunicación'
                  : language === 'el' ? 'Μέθοδοι και προτιμήσεις επικοινωνίας'
                  : 'Communication methods and preferences'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Informations Financières et Transactionnelles'
            : language === 'it' ? 'Informazioni Finanziarie e Transazionali'
            : language === 'de' ? 'Finanz- und Transaktionsinformationen'
            : language === 'es' ? 'Información Financiera y Transaccional'
            : language === 'el' ? 'Χρηματοοικονομικές και Συναλλακτικές Πληροφορίες'
            : 'Financial and Transactional Information'}>
            <LegalList
              items={[
                language === 'fr' ? 'Coordonnées bancaires (numéros de compte, codes SWIFT/BIC, IBAN)'
                  : language === 'it' ? 'Dettagli del conto bancario (numeri di conto, codici SWIFT/BIC, IBAN)'
                  : language === 'de' ? 'Bankkontodetails (Kontonummern, SWIFT/BIC-Codes, IBAN)'
                  : language === 'es' ? 'Detalles de cuenta bancaria (números de cuenta, códigos SWIFT/BIC, IBAN)'
                  : language === 'el' ? 'Στοιχεία τραπεζικού λογαριασμού (αριθμοί λογαριασμού, κωδικοί SWIFT/BIC, IBAN)'
                  : 'Bank account details (account numbers, SWIFT/BIC codes, IBAN)',
                language === 'fr' ? 'Informations de carte de crédit/débit (numéros chiffrés, dates d\'expiration)'
                  : language === 'it' ? 'Informazioni carta di credito/debito (numeri cifrati, date di scadenza)'
                  : language === 'de' ? 'Kredit-/Debitkarteninformationen (verschlüsselte Nummern, Ablaufdaten)'
                  : language === 'es' ? 'Información de tarjeta de crédito/débito (números cifrados, fechas de vencimiento)'
                  : language === 'el' ? 'Πληροφορίες πιστωτικής/χρεωστικής κάρτας (κρυπτογραφημένοι αριθμοί, ημερομηνίες λήξης)'
                  : 'Credit/debit card information (encrypted numbers, expiration dates)',
                language === 'fr' ? 'Historique des transactions (dépôts, retraits, transferts, paiements)'
                  : language === 'it' ? 'Storico delle transazioni (depositi, prelievi, trasferimenti, pagamenti)'
                  : language === 'de' ? 'Transaktionshistorie (Einzahlungen, Abhebungen, Überweisungen, Zahlungen)'
                  : language === 'es' ? 'Historial de transacciones (depósitos, retiros, transferencias, pagos)'
                  : language === 'el' ? 'Ιστορικό συναλλαγών (καταθέσεις, αναλήψεις, μεταφορές, πληρωμές)'
                  : 'Transaction history (deposits, withdrawals, transfers, payments)',
                language === 'fr' ? 'Adresses de portefeuille de cryptomonnaie'
                  : language === 'it' ? 'Indirizzi di portafoglio di criptovaluta'
                  : language === 'de' ? 'Kryptowährungs-Wallet-Adressen'
                  : language === 'es' ? 'Direcciones de billetera de criptomonedas'
                  : language === 'el' ? 'Διευθύνσεις πορτοφολιού κρυπτονομισμάτων'
                  : 'Cryptocurrency wallet addresses',
                language === 'fr' ? 'Historique des transactions en cryptomonnaie'
                  : language === 'it' ? 'Storico delle transazioni in criptovaluta'
                  : language === 'de' ? 'Kryptowährungs-Transaktionshistorie'
                  : language === 'es' ? 'Historial de transacciones de criptomonedas'
                  : language === 'el' ? 'Ιστορικό συναλλαγών κρυπτονομισμάτων'
                  : 'Cryptocurrency transaction history',
                language === 'fr' ? 'Revenus et sources de richesse'
                  : language === 'it' ? 'Reddito e fonti di ricchezza'
                  : language === 'de' ? 'Einkommen und Vermögensquellen'
                  : language === 'es' ? 'Ingresos y fuentes de riqueza'
                  : language === 'el' ? 'Εισόδημα και πηγές πλούτου'
                  : 'Income and sources of wealth',
                language === 'fr' ? 'Informations sur l\'emploi et la profession'
                  : language === 'it' ? 'Informazioni sull\'occupazione e la professione'
                  : language === 'de' ? 'Beschäftigungs- und Berufsinformationen'
                  : language === 'es' ? 'Información de empleo y ocupación'
                  : language === 'el' ? 'Πληροφορίες απασχόλησης και επαγγέλματος'
                  : 'Employment and occupation information',
                language === 'fr' ? 'Informations sur les prêts et le crédit'
                  : language === 'it' ? 'Informazioni su prestiti e credito'
                  : language === 'de' ? 'Kredit- und Darlehensinformationen'
                  : language === 'es' ? 'Información de préstamos y crédito'
                  : language === 'el' ? 'Πληροφορίες δανείων και πίστωσης'
                  : 'Loan and credit information',
                language === 'fr' ? 'Portefeuille d\'investissements et actifs'
                  : language === 'it' ? 'Portafoglio di investimenti e attività'
                  : language === 'de' ? 'Investitionsportfolio und Vermögenswerte'
                  : language === 'es' ? 'Cartera de inversiones y activos'
                  : language === 'el' ? 'Χαρτοφυλάκιο επενδύσεων και περιουσιακά στοιχεία'
                  : 'Investment portfolio and holdings'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Documents KYC/AML'
            : language === 'it' ? 'Documenti KYC/AML'
            : language === 'de' ? 'KYC/AML-Dokumente'
            : language === 'es' ? 'Documentos KYC/AML'
            : language === 'el' ? 'Έγγραφα KYC/AML'
            : 'KYC/AML Documentation'}>
            <LegalList
              items={[
                language === 'fr' ? 'Documents d\'identité émis par le gouvernement (passeport, carte d\'identité nationale)'
                  : language === 'it' ? 'Documenti d\'identità rilasciati dal governo (passaporto, carta d\'identità nazionale)'
                  : language === 'de' ? 'Von der Regierung ausgestellte Ausweisdokumente (Reisepass, nationaler Personalausweis)'
                  : language === 'es' ? 'Documentos de identidad emitidos por el gobierno (pasaporte, tarjeta de identidad nacional)'
                  : language === 'el' ? 'Έγγραφα ταυτότητας εκδιδόμενα από την κυβέρνηση (διαβατήριο, εθνική ταυτότητα)'
                  : 'Government-issued identification documents (passport, national ID card)',
                language === 'fr' ? 'Justificatif de domicile (factures de services publics, relevés bancaires)'
                  : language === 'it' ? 'Prova di residenza (bollette, estratti conto bancari)'
                  : language === 'de' ? 'Wohnsitznachweis (Stromrechnungen, Kontoauszüge)'
                  : language === 'es' ? 'Comprobante de domicilio (facturas de servicios públicos, extractos bancarios)'
                  : language === 'el' ? 'Απόδειξη διεύθυνσης (λογαριασμοί κοινής ωφέλειας, τραπεζικά αντίγραφα)'
                  : 'Proof of address (utility bills, bank statements)',
                language === 'fr' ? 'Justificatif de revenus et source de fonds'
                  : language === 'it' ? 'Prova di reddito e fonte di fondi'
                  : language === 'de' ? 'Einkommensnachweis und Mittelherkunft'
                  : language === 'es' ? 'Comprobante de ingresos y fuente de fondos'
                  : language === 'el' ? 'Απόδειξη εισοδήματος και πηγής κεφαλαίων'
                  : 'Proof of income and source of funds',
                language === 'fr' ? 'Certificats d\'enregistrement d\'entreprise (pour les comptes d\'entreprise)'
                  : language === 'it' ? 'Certificati di registrazione aziendale (per conti aziendali)'
                  : language === 'de' ? 'Gewerbeanmeldungsbescheinigungen (für Geschäftskonten)'
                  : language === 'es' ? 'Certificados de registro comercial (para cuentas comerciales)'
                  : language === 'el' ? 'Πιστοποιητικά εταιρικής εγγραφής (για εταιρικούς λογαριασμούς)'
                  : 'Business registration certificates (for business accounts)',
                language === 'fr' ? 'Informations sur les bénéficiaires effectifs'
                  : language === 'it' ? 'Informazioni sui beneficiari effettivi'
                  : language === 'de' ? 'Informationen zu wirtschaftlichen Eigentümern'
                  : language === 'es' ? 'Información de beneficiarios finales'
                  : language === 'el' ? 'Πληροφορίες πραγματικών δικαιούχων'
                  : 'Ultimate beneficial owner information',
                language === 'fr' ? 'Formulaires de déclaration fiscale (W-9, W-8BEN, etc.)'
                  : language === 'it' ? 'Moduli fiscali (W-9, W-8BEN, ecc.)'
                  : language === 'de' ? 'Steuerformulare (W-9, W-8BEN, usw.)'
                  : language === 'es' ? 'Formularios fiscales (W-9, W-8BEN, etc.)'
                  : language === 'el' ? 'Φορολογικά έντυπα (W-9, W-8BEN, κλπ.)'
                  : 'Tax forms (W-9, W-8BEN, etc.)',
                language === 'fr' ? 'Documents de diligence raisonnable améliorée (pour les comptes à haut risque)'
                  : language === 'it' ? 'Documenti di diligenza rafforzata (per conti ad alto rischio)'
                  : language === 'de' ? 'Erweiterte Due-Diligence-Dokumente (für Hochrisikokonten)'
                  : language === 'es' ? 'Documentos de debida diligencia reforzada (para cuentas de alto riesgo)'
                  : language === 'el' ? 'Έγγραφα ενισχυμένης δέουσας επιμέλειας (για λογαριασμούς υψηλού κινδύνου)'
                  : 'Enhanced due diligence documents (for high-risk accounts)'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Données Techniques et d\'Utilisation'
            : language === 'it' ? 'Dati Tecnici e di Utilizzo'
            : language === 'de' ? 'Technische und Nutzungsdaten'
            : language === 'es' ? 'Datos Técnicos y de Uso'
            : language === 'el' ? 'Τεχνικά και Δεδομένα Χρήσης'
            : 'Technical and Usage Data'}>
            <LegalList
              items={[
                language === 'fr' ? 'Adresses IP et données de géolocalisation'
                  : language === 'it' ? 'Indirizzi IP e dati di geolocalizzazione'
                  : language === 'de' ? 'IP-Adressen und Geolokalisierungsdaten'
                  : language === 'es' ? 'Direcciones IP y datos de geolocalización'
                  : language === 'el' ? 'Διευθύνσεις IP και δεδομένα γεωεντοπισμού'
                  : 'IP addresses and geolocation data',
                language === 'fr' ? 'Type de navigateur et version'
                  : language === 'it' ? 'Tipo e versione del browser'
                  : language === 'de' ? 'Browsertyp und -version'
                  : language === 'es' ? 'Tipo y versión del navegador'
                  : language === 'el' ? 'Τύπος και έκδοση προγράμματος περιήγησης'
                  : 'Browser type and version',
                language === 'fr' ? 'Système d\'exploitation et informations sur l\'appareil'
                  : language === 'it' ? 'Sistema operativo e informazioni sul dispositivo'
                  : language === 'de' ? 'Betriebssystem und Geräteinformationen'
                  : language === 'es' ? 'Sistema operativo e información del dispositivo'
                  : language === 'el' ? 'Λειτουργικό σύστημα και πληροφορίες συσκευής'
                  : 'Operating system and device information',
                language === 'fr' ? 'Horodatages et heures d\'accès'
                  : language === 'it' ? 'Timestamp e orari di accesso'
                  : language === 'de' ? 'Zeitstempel und Zugriffszeiten'
                  : language === 'es' ? 'Marcas de tiempo y horarios de acceso'
                  : language === 'el' ? 'Χρονικές σημάνσεις και ώρες πρόσβασης'
                  : 'Timestamps and access times',
                language === 'fr' ? 'Pages visitées et chemins de navigation'
                  : language === 'it' ? 'Pagine visitate e percorsi di navigazione'
                  : language === 'de' ? 'Besuchte Seiten und Navigationspfade'
                  : language === 'es' ? 'Páginas visitadas y rutas de navegación'
                  : language === 'el' ? 'Σελίδες που επισκεφτήκατε και διαδρομές πλοήγησης'
                  : 'Pages visited and navigation paths',
                language === 'fr' ? 'Cookies et identificateurs similaires'
                  : language === 'it' ? 'Cookie e identificatori simili'
                  : language === 'de' ? 'Cookies und ähnliche Kennungen'
                  : language === 'es' ? 'Cookies e identificadores similares'
                  : language === 'el' ? 'Cookies και παρόμοια αναγνωριστικά'
                  : 'Cookies and similar identifiers',
                language === 'fr' ? 'Journaux de session et activité du compte'
                  : language === 'it' ? 'Registri di sessione e attività dell\'account'
                  : language === 'de' ? 'Sitzungsprotokolle und Kontoaktivität'
                  : language === 'es' ? 'Registros de sesión y actividad de la cuenta'
                  : language === 'el' ? 'Αρχεία καταγραφής συνεδρίας και δραστηριότητα λογαριασμού'
                  : 'Session logs and account activity',
                language === 'fr' ? 'Interactions avec le service client'
                  : language === 'it' ? 'Interazioni con il servizio clienti'
                  : language === 'de' ? 'Interaktionen mit dem Kundenservice'
                  : language === 'es' ? 'Interacciones con el servicio al cliente'
                  : language === 'el' ? 'Αλληλεπιδράσεις με την εξυπηρέτηση πελατών'
                  : 'Customer service interactions',
                language === 'fr' ? 'Enregistrements d\'appels et transcriptions de chat'
                  : language === 'it' ? 'Registrazioni di chiamate e trascrizioni di chat'
                  : language === 'de' ? 'Anrufaufzeichnungen und Chat-Transkripte'
                  : language === 'es' ? 'Grabaciones de llamadas y transcripciones de chat'
                  : language === 'el' ? 'Εγγραφές κλήσεων και μεταγραφές συνομιλίας'
                  : 'Call recordings and chat transcripts'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Catégories Spéciales de Données (Données Sensibles)'
            : language === 'it' ? 'Categorie Speciali di Dati (Dati Sensibili)'
            : language === 'de' ? 'Besondere Kategorien von Daten (Sensible Daten)'
            : language === 'es' ? 'Categorías Especiales de Datos (Datos Sensibles)'
            : language === 'el' ? 'Ειδικές Κατηγορίες Δεδομένων (Ευαίσθητα Δεδομένα)'
            : 'Special Categories of Data (Sensitive Data)'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Dans certaines circonstances limitées et avec votre consentement explicite ou lorsque cela est requis par la loi, nous pouvons traiter des catégories spéciales de données personnelles, y compris:'
                : language === 'it' ? 'In determinate circostanze limitate e con il vostro consenso esplicito o quando richiesto dalla legge, potremmo trattare categorie speciali di dati personali, tra cui:'
                : language === 'de' ? 'Unter bestimmten begrenzten Umständen und mit Ihrer ausdrücklichen Zustimmung oder wenn gesetzlich vorgeschrieben, können wir besondere Kategorien personenbezogener Daten verarbeiten, einschließlich:'
                : language === 'es' ? 'En determinadas circunstancias limitadas y con su consentimiento explícito o cuando lo requiera la ley, podemos procesar categorías especiales de datos personales, incluyendo:'
                : language === 'el' ? 'Υπό ορισμένες περιορισμένες περιστάσεις και με τη ρητή σας συγκατάθεση ή όταν απαιτείται από το νόμο, ενδέχεται να επεξεργαστούμε ειδικές κατηγορίες προσωπικών δεδομένων, συμπεριλαμβανομένων:'
                : 'Under certain limited circumstances and with your explicit consent or where required by law, we may process special categories of personal data, including:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Données biométriques (pour l\'authentification et la vérification d\'identité)'
                  : language === 'it' ? 'Dati biometrici (per autenticazione e verifica dell\'identità)'
                  : language === 'de' ? 'Biometrische Daten (zur Authentifizierung und Identitätsüberprüfung)'
                  : language === 'es' ? 'Datos biométricos (para autenticación y verificación de identidad)'
                  : language === 'el' ? 'Βιομετρικά δεδομένα (για έλεγχο ταυτότητας και επαλήθευση)'
                  : 'Biometric data (for authentication and identity verification)',
                language === 'fr' ? 'Informations relatives à la santé (si requis pour l\'assurance ou certains produits financiers)'
                  : language === 'it' ? 'Informazioni relative alla salute (se richieste per assicurazioni o determinati prodotti finanziari)'
                  : language === 'de' ? 'Gesundheitsbezogene Informationen (falls für Versicherungen oder bestimmte Finanzprodukte erforderlich)'
                  : language === 'es' ? 'Información relacionada con la salud (si es requerida para seguros o ciertos productos financieros)'
                  : language === 'el' ? 'Πληροφορίες σχετικές με την υγεία (αν απαιτείται για ασφάλιση ή ορισμένα χρηματοοικονομικά προϊόντα)'
                  : 'Health-related information (if required for insurance or certain financial products)',
                language === 'fr' ? 'Convictions pénales et infractions (comme requis par la conformité AML/CTF)'
                  : language === 'it' ? 'Condanne penali e reati (come richiesto dalla conformità AML/CTF)'
                  : language === 'de' ? 'Strafrechtliche Verurteilungen und Straftaten (wie durch AML/CTF-Compliance erforderlich)'
                  : language === 'es' ? 'Condenas penales y delitos (según lo requiera el cumplimiento AML/CTF)'
                  : language === 'el' ? 'Ποινικές καταδίκες και παραβάσεις (όπως απαιτείται από τη συμμόρφωση AML/CTF)'
                  : 'Criminal convictions and offenses (as required by AML/CTF compliance)',
                language === 'fr' ? 'Affiliation politique (uniquement pour le dépistage PEP)'
                  : language === 'it' ? 'Affiliazione politica (solo per lo screening PEP)'
                  : language === 'de' ? 'Politische Zugehörigkeit (nur für PEP-Screening)'
                  : language === 'es' ? 'Afiliación política (solo para la detección de PEP)'
                  : language === 'el' ? 'Πολιτική σχέση (μόνο για έλεγχο PEP)'
                  : 'Political affiliation (for PEP screening only)'
              ]}
            />
            <LegalNotice type="warning" className="mt-4">
              <p>
                {language === 'fr' ? 'Le traitement de catégories spéciales de données personnelles est strictement limité à ce qui est nécessaire et légalement requis. Nous appliquons des mesures de sécurité et des contrôles d\'accès supplémentaires pour ces données sensibles.'
                  : language === 'it' ? 'Il trattamento di categorie speciali di dati personali è strettamente limitato a quanto necessario e legalmente richiesto. Applichiamo misure di sicurezza e controlli di accesso aggiuntivi per questi dati sensibili.'
                  : language === 'de' ? 'Die Verarbeitung besonderer Kategorien personenbezogener Daten ist streng auf das Notwendige und gesetzlich Erforderliche beschränkt. Wir wenden zusätzliche Sicherheitsmaßnahmen und Zugriffskontrollen für diese sensiblen Daten an.'
                  : language === 'es' ? 'El procesamiento de categorías especiales de datos personales está estrictamente limitado a lo necesario y legalmente requerido. Aplicamos medidas de seguridad y controles de acceso adicionales para estos datos sensibles.'
                  : language === 'el' ? 'Η επεξεργασία ειδικών κατηγοριών προσωπικών δεδομένων περιορίζεται αυστηρά στο αναγκαίο και νομικά απαιτούμενο. Εφαρμόζουμε πρόσθετα μέτρα ασφαλείας και ελέγχους πρόσβασης για αυτά τα ευαίσθητα δεδομένα.'
                  : 'Processing of special categories of personal data is strictly limited to what is necessary and legally required. We apply additional security measures and access controls for this sensitive data.'}
              </p>
            </LegalNotice>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title={tocSections[3].title} id={tocSections[3].id} icon={<Database size={24} />}>
          <p className="text-[#333333] leading-relaxed mb-4">
            {language === 'fr' ? 'Nous collectons des données personnelles par diverses méthodes et sources, selon votre interaction avec nos services:'
              : language === 'it' ? 'Raccogliamo dati personali attraverso vari metodi e fonti, a seconda della vostra interazione con i nostri servizi:'
              : language === 'de' ? 'Wir erheben personenbezogene Daten auf verschiedene Weise und aus verschiedenen Quellen, je nachdem, wie Sie mit unseren Diensten interagieren:'
              : language === 'es' ? 'Recopilamos datos personales a través de varios métodos y fuentes, dependiendo de su interacción con nuestros servicios:'
              : language === 'el' ? 'Συλλέγουμε προσωπικά δεδομένα μέσω διαφόρων μεθόδων και πηγών, ανάλογα με την αλληλεπίδρασή σας με τις υπηρεσίες μας:'
              : 'We collect personal data through various methods and sources, depending on your interaction with our services:'}
          </p>

          <LegalSubsection title={language === 'fr' ? 'Collecte Directe'
            : language === 'it' ? 'Raccolta Diretta'
            : language === 'de' ? 'Direkte Erhebung'
            : language === 'es' ? 'Recopilación Directa'
            : language === 'el' ? 'Άμεση Συλλογή'
            : 'Direct Collection'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Informations que vous nous fournissez directement lorsque vous:'
                : language === 'it' ? 'Informazioni che ci fornite direttamente quando:'
                : language === 'de' ? 'Informationen, die Sie uns direkt zur Verfügung stellen, wenn Sie:'
                : language === 'es' ? 'Información que nos proporciona directamente cuando:'
                : language === 'el' ? 'Πληροφορίες που μας παρέχετε απευθείας όταν:'
                : 'Information you provide directly to us when you:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Créez un compte ou vous inscrivez à nos services'
                  : language === 'it' ? 'Create un account o vi registrate ai nostri servizi'
                  : language === 'de' ? 'Ein Konto erstellen oder sich für unsere Dienste registrieren'
                  : language === 'es' ? 'Crea una cuenta o se registra en nuestros servicios'
                  : language === 'el' ? 'Δημιουργείτε λογαριασμό ή εγγράφεστε στις υπηρεσίες μας'
                  : 'Create an account or register for our services',
                language === 'fr' ? 'Complétez des formulaires de demande (KYC, crédit, prêt)'
                  : language === 'it' ? 'Compilate moduli di domanda (KYC, credito, prestito)'
                  : language === 'de' ? 'Antragsformulare ausfüllen (KYC, Kredit, Darlehen)'
                  : language === 'es' ? 'Completa formularios de solicitud (KYC, crédito, préstamo)'
                  : language === 'el' ? 'Συμπληρώνετε φόρμες αίτησης (KYC, πίστωση, δάνειο)'
                  : 'Complete application forms (KYC, credit, loan)',
                language === 'fr' ? 'Effectuez des transactions ou utilisez nos services'
                  : language === 'it' ? 'Effettuate transazioni o utilizzate i nostri servizi'
                  : language === 'de' ? 'Transaktionen durchführen oder unsere Dienste nutzen'
                  : language === 'es' ? 'Realiza transacciones o utiliza nuestros servicios'
                  : language === 'el' ? 'Πραγματοποιείτε συναλλαγές ή χρησιμοποιείτε τις υπηρεσίες μας'
                  : 'Make transactions or use our services',
                language === 'fr' ? 'Communiquez avec notre service client'
                  : language === 'it' ? 'Comunicate con il nostro servizio clienti'
                  : language === 'de' ? 'Mit unserem Kundenservice kommunizieren'
                  : language === 'es' ? 'Se comunica con nuestro servicio al cliente'
                  : language === 'el' ? 'Επικοινωνείτε με την εξυπηρέτηση πελατών μας'
                  : 'Communicate with our customer service',
                language === 'fr' ? 'Participez à des enquêtes ou des programmes de feedback'
                  : language === 'it' ? 'Partecipate a sondaggi o programmi di feedback'
                  : language === 'de' ? 'An Umfragen oder Feedback-Programmen teilnehmen'
                  : language === 'es' ? 'Participa en encuestas o programas de retroalimentación'
                  : language === 'el' ? 'Συμμετέχετε σε έρευνες ή προγράμματα ανατροφοδότησης'
                  : 'Participate in surveys or feedback programs',
                language === 'fr' ? 'Téléchargez des documents de vérification'
                  : language === 'it' ? 'Caricate documenti di verifica'
                  : language === 'de' ? 'Verifizierungsdokumente hochladen'
                  : language === 'es' ? 'Carga documentos de verificación'
                  : language === 'el' ? 'Ανεβάζετε έγγραφα επαλήθευσης'
                  : 'Upload verification documents',
                language === 'fr' ? 'Vous abonnez à nos newsletters ou communications marketing'
                  : language === 'it' ? 'Vi iscrivete alle nostre newsletter o comunicazioni di marketing'
                  : language === 'de' ? 'Sich für unsere Newsletter oder Marketingkommunikation anmelden'
                  : language === 'es' ? 'Se suscribe a nuestros boletines o comunicaciones de marketing'
                  : language === 'el' ? 'Εγγράφεστε στα ενημερωτικά δελτία ή τις επικοινωνίες μάρκετινγκ μας'
                  : 'Subscribe to our newsletters or marketing communications'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Collecte Automatique'
            : language === 'it' ? 'Raccolta Automatica'
            : language === 'de' ? 'Automatische Erhebung'
            : language === 'es' ? 'Recopilación Automática'
            : language === 'el' ? 'Αυτόματη Συλλογή'
            : 'Automatic Collection'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Données collectées automatiquement lorsque vous utilisez nos plateformes:'
                : language === 'it' ? 'Dati raccolti automaticamente quando utilizzate le nostre piattaforme:'
                : language === 'de' ? 'Daten, die automatisch erhoben werden, wenn Sie unsere Plattformen nutzen:'
                : language === 'es' ? 'Datos recopilados automáticamente cuando utiliza nuestras plataformas:'
                : language === 'el' ? 'Δεδομένα που συλλέγονται αυτόματα όταν χρησιμοποιείτε τις πλατφόρμες μας:'
                : 'Data collected automatically when you use our platforms:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Cookies et technologies de suivi sur nos sites web et applications'
                  : language === 'it' ? 'Cookie e tecnologie di tracciamento sui nostri siti web e applicazioni'
                  : language === 'de' ? 'Cookies und Tracking-Technologien auf unseren Websites und Anwendungen'
                  : language === 'es' ? 'Cookies y tecnologías de seguimiento en nuestros sitios web y aplicaciones'
                  : language === 'el' ? 'Cookies και τεχνολογίες παρακολούθησης στους ιστότοπους και τις εφαρμογές μας'
                  : 'Cookies and tracking technologies on our websites and applications',
                language === 'fr' ? 'Fichiers journaux du serveur et données d\'analyse web'
                  : language === 'it' ? 'File di log del server e dati di analisi web'
                  : language === 'de' ? 'Server-Protokolldateien und Webanalysedaten'
                  : language === 'es' ? 'Archivos de registro del servidor y datos de análisis web'
                  : language === 'el' ? 'Αρχεία καταγραφής διακομιστή και δεδομένα ανάλυσης ιστού'
                  : 'Server log files and web analytics data',
                language === 'fr' ? 'Informations sur l\'appareil et le système d\'exploitation'
                  : language === 'it' ? 'Informazioni sul dispositivo e sul sistema operativo'
                  : language === 'de' ? 'Geräte- und Betriebssysteminformationen'
                  : language === 'es' ? 'Información del dispositivo y del sistema operativo'
                  : language === 'el' ? 'Πληροφορίες συσκευής και λειτουργικού συστήματος'
                  : 'Device and operating system information',
                language === 'fr' ? 'Données de géolocalisation (avec votre autorisation)'
                  : language === 'it' ? 'Dati di geolocalizzazione (con il vostro permesso)'
                  : language === 'de' ? 'Geolokalisierungsdaten (mit Ihrer Erlaubnis)'
                  : language === 'es' ? 'Datos de geolocalización (con su permiso)'
                  : language === 'el' ? 'Δεδομένα γεωεντοπισμού (με την άδειά σας)'
                  : 'Geolocation data (with your permission)',
                language === 'fr' ? 'Modèles de comportement et d\'interaction avec nos services'
                  : language === 'it' ? 'Modelli di comportamento e interazione con i nostri servizi'
                  : language === 'de' ? 'Verhaltens- und Interaktionsmuster mit unseren Diensten'
                  : language === 'es' ? 'Patrones de comportamiento e interacción con nuestros servicios'
                  : language === 'el' ? 'Μοτίβα συμπεριφοράς και αλληλεπίδρασης με τις υπηρεσίες μας'
                  : 'Behavior and interaction patterns with our services'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Sources Tierces'
            : language === 'it' ? 'Fonti di Terze Parti'
            : language === 'de' ? 'Drittquellen'
            : language === 'es' ? 'Fuentes de Terceros'
            : language === 'el' ? 'Πηγές Τρίτων'
            : 'Third-Party Sources'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Nous pouvons également recevoir des données personnelles de sources tierces:'
                : language === 'it' ? 'Possiamo anche ricevere dati personali da fonti di terze parti:'
                : language === 'de' ? 'Wir können personenbezogene Daten auch von Drittquellen erhalten:'
                : language === 'es' ? 'También podemos recibir datos personales de fuentes de terceros:'
                : language === 'el' ? 'Μπορούμε επίσης να λάβουμε προσωπικά δεδομένα από πηγές τρίτων:'
                : 'We may also receive personal data from third-party sources:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Agences de crédit et bureaux de crédit'
                  : language === 'it' ? 'Agenzie di credito e uffici di credito'
                  : language === 'de' ? 'Kreditagenturen und Kreditbüros'
                  : language === 'es' ? 'Agencias de crédito y burós de crédito'
                  : language === 'el' ? 'Πιστωτικοί οργανισμοί και γραφεία πιστοληπτικής αξιολόγησης'
                  : 'Credit agencies and credit bureaus',
                language === 'fr' ? 'Services de vérification d\'identité et de prévention de la fraude'
                  : language === 'it' ? 'Servizi di verifica dell\'identità e prevenzione delle frodi'
                  : language === 'de' ? 'Identitätsverifizierungs- und Betrugspräventionsdienste'
                  : language === 'es' ? 'Servicios de verificación de identidad y prevención de fraude'
                  : language === 'el' ? 'Υπηρεσίες επαλήθευσης ταυτότητας και πρόληψης απάτης'
                  : 'Identity verification and fraud prevention services',
                language === 'fr' ? 'Bases de données publiques et registres gouvernementaux'
                  : language === 'it' ? 'Database pubblici e registri governativi'
                  : language === 'de' ? 'Öffentliche Datenbanken und Regierungsregister'
                  : language === 'es' ? 'Bases de datos públicas y registros gubernamentales'
                  : language === 'el' ? 'Δημόσιες βάσεις δεδομένων και κυβερνητικά μητρώα'
                  : 'Public databases and government registers',
                language === 'fr' ? 'Services de dépistage des sanctions et PEP'
                  : language === 'it' ? 'Servizi di screening delle sanzioni e PEP'
                  : language === 'de' ? 'Sanktions- und PEP-Screening-Dienste'
                  : language === 'es' ? 'Servicios de detección de sanciones y PEP'
                  : language === 'el' ? 'Υπηρεσίες ελέγχου κυρώσεων και PEP'
                  : 'Sanctions and PEP screening services',
                language === 'fr' ? 'Partenaires commerciaux et institutions financières affiliées'
                  : language === 'it' ? 'Partner commerciali e istituzioni finanziarie affiliate'
                  : language === 'de' ? 'Geschäftspartner und verbundene Finanzinstitute'
                  : language === 'es' ? 'Socios comerciales e instituciones financieras afiliadas'
                  : language === 'el' ? 'Επιχειρηματικοί συνεργάτες και συνδεδεμένα χρηματοπιστωτικά ιδρύματα'
                  : 'Business partners and affiliated financial institutions',
                language === 'fr' ? 'Réseaux blockchain publics (pour les transactions en cryptomonnaie)'
                  : language === 'it' ? 'Reti blockchain pubbliche (per transazioni in criptovaluta)'
                  : language === 'de' ? 'Öffentliche Blockchain-Netzwerke (für Kryptowährungstransaktionen)'
                  : language === 'es' ? 'Redes blockchain públicas (para transacciones de criptomonedas)'
                  : language === 'el' ? 'Δημόσια δίκτυα blockchain (για συναλλαγές κρυπτονομισμάτων)'
                  : 'Public blockchain networks (for cryptocurrency transactions)',
                language === 'fr' ? 'Fournisseurs de données marketing (avec votre consentement)'
                  : language === 'it' ? 'Fornitori di dati di marketing (con il vostro consenso)'
                  : language === 'de' ? 'Marketing-Datenanbieter (mit Ihrer Zustimmung)'
                  : language === 'es' ? 'Proveedores de datos de marketing (con su consentimiento)'
                  : language === 'el' ? 'Πάροχοι δεδομένων μάρκετινγκ (με τη συγκατάθεσή σας)'
                  : 'Marketing data providers (with your consent)'
              ]}
            />
          </LegalSubsection>
        </LegalSection>

        <LegalSection title={tocSections[4].title} id={tocSections[4].id} icon={<FileText size={24} />}>
          <p className="text-[#333333] leading-relaxed mb-4">
            {language === 'fr' ? 'Conformément au RGPD et aux lois applicables sur la protection des données, nous traitons vos données personnelles uniquement lorsque nous avons une base légale valide. Les bases légales suivantes s\'appliquent à nos activités de traitement:'
              : language === 'it' ? 'In conformità con il GDPR e le leggi applicabili sulla protezione dei dati, trattiamo i vostri dati personali solo quando abbiamo una base giuridica valida. Le seguenti basi giuridiche si applicano alle nostre attività di trattamento:'
              : language === 'de' ? 'Gemäß der DSGVO und den geltenden Datenschutzgesetzen verarbeiten wir Ihre personenbezogenen Daten nur, wenn wir eine gültige Rechtsgrundlage haben. Die folgenden Rechtsgrundlagen gelten für unsere Verarbeitungsaktivitäten:'
              : language === 'es' ? 'De conformidad con el GDPR y las leyes de protección de datos aplicables, procesamos sus datos personales solo cuando tenemos una base legal válida. Las siguientes bases legales se aplican a nuestras actividades de procesamiento:'
              : language === 'el' ? 'Σύμφωνα με τον GDPR και τους ισχύοντες νόμους προστασίας δεδομένων, επεξεργαζόμαστε τα προσωπικά σας δεδομένα μόνο όταν έχουμε έγκυρη νομική βάση. Οι ακόλουθες νομικές βάσεις ισχύουν για τις δραστηριότητες επεξεργασίας μας:'
              : 'Under the GDPR and applicable data protection laws, we process your personal data only when we have a valid legal basis. The following legal bases apply to our processing activities:'}
          </p>

          <LegalSubsection title={language === 'fr' ? 'Article 6(1)(b) RGPD - Nécessité Contractuelle'
            : language === 'it' ? 'Articolo 6(1)(b) GDPR - Necessità Contrattuale'
            : language === 'de' ? 'Artikel 6(1)(b) DSGVO - Vertragliche Notwendigkeit'
            : language === 'es' ? 'Artículo 6(1)(b) GDPR - Necesidad Contractual'
            : language === 'el' ? 'Άρθρο 6(1)(b) GDPR - Συμβατική Αναγκαιότητα'
            : 'Article 6(1)(b) GDPR - Contractual Necessity'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Le traitement est nécessaire pour l\'exécution d\'un contrat auquel vous êtes partie ou pour prendre des mesures à votre demande avant de conclure un contrat. Cela comprend:'
                : language === 'it' ? 'Il trattamento è necessario per l\'esecuzione di un contratto di cui siete parte o per adottare misure su vostra richiesta prima della conclusione di un contratto. Ciò include:'
                : language === 'de' ? 'Die Verarbeitung ist erforderlich für die Erfüllung eines Vertrags, dessen Vertragspartei Sie sind, oder zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage. Dies umfasst:'
                : language === 'es' ? 'El procesamiento es necesario para la ejecución de un contrato del que usted es parte o para tomar medidas a su solicitud antes de celebrar un contrato. Esto incluye:'
                : language === 'el' ? 'Η επεξεργασία είναι απαραίτητη για την εκτέλεση σύμβασης της οποίας είστε συμβαλλόμενο μέρος ή για τη λήψη μέτρων κατόπιν αιτήματός σας πριν από τη σύναψη σύμβασης. Αυτό περιλαμβάνει:'
                : 'Processing is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into a contract. This includes:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Création et gestion de votre compte'
                  : language === 'it' ? 'Creazione e gestione del vostro account'
                  : language === 'de' ? 'Erstellung und Verwaltung Ihres Kontos'
                  : language === 'es' ? 'Creación y gestión de su cuenta'
                  : language === 'el' ? 'Δημιουργία και διαχείριση του λογαριασμού σας'
                  : 'Creating and managing your account',
                language === 'fr' ? 'Traitement des transactions et paiements'
                  : language === 'it' ? 'Elaborazione di transazioni e pagamenti'
                  : language === 'de' ? 'Verarbeitung von Transaktionen und Zahlungen'
                  : language === 'es' ? 'Procesamiento de transacciones y pagos'
                  : language === 'el' ? 'Επεξεργασία συναλλαγών και πληρωμών'
                  : 'Processing transactions and payments',
                language === 'fr' ? 'Fourniture de services bancaires et financiers'
                  : language === 'it' ? 'Fornitura di servizi bancari e finanziari'
                  : language === 'de' ? 'Bereitstellung von Bank- und Finanzdienstleistungen'
                  : language === 'es' ? 'Prestación de servicios bancarios y financieros'
                  : language === 'el' ? 'Παροχή τραπεζικών και χρηματοοικονομικών υπηρεσιών'
                  : 'Providing banking and financial services',
                language === 'fr' ? 'Communication avec vous concernant vos services'
                  : language === 'it' ? 'Comunicazione con voi riguardo ai vostri servizi'
                  : language === 'de' ? 'Kommunikation mit Ihnen über Ihre Dienste'
                  : language === 'es' ? 'Comunicación con usted sobre sus servicios'
                  : language === 'el' ? 'Επικοινωνία μαζί σας σχετικά με τις υπηρεσίες σας'
                  : 'Communicating with you about your services'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Article 6(1)(c) RGPD - Obligation Légale'
            : language === 'it' ? 'Articolo 6(1)(c) GDPR - Obbligo Legale'
            : language === 'de' ? 'Artikel 6(1)(c) DSGVO - Rechtliche Verpflichtung'
            : language === 'es' ? 'Artículo 6(1)(c) GDPR - Obligación Legal'
            : language === 'el' ? 'Άρθρο 6(1)(c) GDPR - Νομική Υποχρέωση'
            : 'Article 6(1)(c) GDPR - Legal Obligation'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Le traitement est nécessaire pour respecter une obligation légale à laquelle nous sommes soumis. Cela comprend:'
                : language === 'it' ? 'Il trattamento è necessario per adempiere a un obbligo legale al quale siamo soggetti. Ciò include:'
                : language === 'de' ? 'Die Verarbeitung ist erforderlich, um einer rechtlichen Verpflichtung nachzukommen, der wir unterliegen. Dies umfasst:'
                : language === 'es' ? 'El procesamiento es necesario para cumplir con una obligación legal a la que estamos sujetos. Esto incluye:'
                : language === 'el' ? 'Η επεξεργασία είναι απαραίτητη για τη συμμόρφωση με νομική υποχρέωση στην οποία υπόκεισμαι. Αυτό περιλαμβάνει:'
                : 'Processing is necessary to comply with a legal obligation to which we are subject. This includes:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Vérification KYC et diligence raisonnable du client (règlements AML/CTF)'
                  : language === 'it' ? 'Verifica KYC e due diligence del cliente (normative AML/CTF)'
                  : language === 'de' ? 'KYC-Überprüfung und Kundenüberprüfung (AML/CTF-Vorschriften)'
                  : language === 'es' ? 'Verificación KYC y debida diligencia del cliente (regulaciones AML/CTF)'
                  : language === 'el' ? 'Επαλήθευση KYC και δέουσα επιμέλεια πελάτη (κανονισμοί AML/CTF)'
                  : 'KYC verification and customer due diligence (AML/CTF regulations)',
                language === 'fr' ? 'Déclarations de transactions suspectes aux autorités'
                  : language === 'it' ? 'Segnalazioni di transazioni sospette alle autorità'
                  : language === 'de' ? 'Meldung verdächtiger Transaktionen an Behörden'
                  : language === 'es' ? 'Informes de transacciones sospechosas a las autoridades'
                  : language === 'el' ? 'Αναφορές ύποπτων συναλλαγών στις αρχές'
                  : 'Suspicious transaction reports to authorities',
                language === 'fr' ? 'Conservation des registres de transactions (lois fiscales et financières)'
                  : language === 'it' ? 'Conservazione dei registri delle transazioni (leggi fiscali e finanziarie)'
                  : language === 'de' ? 'Aufbewahrung von Transaktionsaufzeichnungen (Steuer- und Finanzgesetze)'
                  : language === 'es' ? 'Conservación de registros de transacciones (leyes fiscales y financieras)'
                  : language === 'el' ? 'Διατήρηση αρχείων συναλλαγών (φορολογικοί και χρηματοοικονομικοί νόμοι)'
                  : 'Retention of transaction records (tax and financial laws)',
                language === 'fr' ? 'Déclarations fiscales et rapports réglementaires'
                  : language === 'it' ? 'Dichiarazioni fiscali e rapporti regolamentari'
                  : language === 'de' ? 'Steuererklärungen und behördliche Berichte'
                  : language === 'es' ? 'Declaraciones fiscales e informes regulatorios'
                  : language === 'el' ? 'Φορολογικές δηλώσεις και κανονιστικές αναφορές'
                  : 'Tax filings and regulatory reports',
                language === 'fr' ? 'Respect des sanctions internationales et embargos'
                  : language === 'it' ? 'Rispetto delle sanzioni internazionali e degli embarghi'
                  : language === 'de' ? 'Einhaltung internationaler Sanktionen und Embargos'
                  : language === 'es' ? 'Cumplimiento de sanciones internacionales y embargos'
                  : language === 'el' ? 'Συμμόρφωση με διεθνείς κυρώσεις και εμπάργκο'
                  : 'Compliance with international sanctions and embargoes',
                language === 'fr' ? 'Réponse aux demandes légales des organismes de réglementation'
                  : language === 'it' ? 'Risposta alle richieste legali degli organismi di regolamentazione'
                  : language === 'de' ? 'Beantwortung rechtlicher Anfragen von Regulierungsbehörden'
                  : language === 'es' ? 'Respuesta a solicitudes legales de organismos reguladores'
                  : language === 'el' ? 'Απάντηση σε νομικές αιτήσεις από ρυθμιστικούς οργανισμούς'
                  : 'Responding to legal requests from regulatory bodies'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Article 6(1)(f) RGPD - Intérêts Légitimes'
            : language === 'it' ? 'Articolo 6(1)(f) GDPR - Interessi Legittimi'
            : language === 'de' ? 'Artikel 6(1)(f) DSGVO - Berechtigte Interessen'
            : language === 'es' ? 'Artículo 6(1)(f) GDPR - Intereses Legítimos'
            : language === 'el' ? 'Άρθρο 6(1)(f) GDPR - Έννομα Συμφέροντα'
            : 'Article 6(1)(f) GDPR - Legitimate Interests'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par nous ou par un tiers, sauf si vos intérêts ou droits fondamentaux prévalent. Nos intérêts légitimes comprennent:'
                : language === 'it' ? 'Il trattamento è necessario per il perseguimento degli interessi legittimi da noi perseguiti o da terzi, a meno che i vostri interessi o diritti fondamentali prevalgano. I nostri interessi legittimi includono:'
                : language === 'de' ? 'Die Verarbeitung ist erforderlich für die Zwecke der von uns oder einem Dritten verfolgten berechtigten Interessen, es sei denn, Ihre Interessen oder Grundrechte überwiegen. Unsere berechtigten Interessen umfassen:'
                : language === 'es' ? 'El procesamiento es necesario para los fines de los intereses legítimos perseguidos por nosotros o por un tercero, a menos que prevalezcan sus intereses o derechos fundamentales. Nuestros intereses legítimos incluyen:'
                : language === 'el' ? 'Η επεξεργασία είναι απαραίτητη για τους σκοπούς των έννομων συμφερόντων που επιδιώκουμε εμείς ή τρίτος, εκτός εάν υπερισχύουν τα συμφέροντα ή τα θεμελιώδη δικαιώματά σας. Τα έννομα συμφέροντά μας περιλαμβάνουν:'
                : 'Processing is necessary for the purposes of legitimate interests pursued by us or a third party, except where your interests or fundamental rights override. Our legitimate interests include:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Prévention, détection et investigation de la fraude et des activités criminelles'
                  : language === 'it' ? 'Prevenzione, rilevamento e indagine di frodi e attività criminali'
                  : language === 'de' ? 'Prävention, Erkennung und Untersuchung von Betrug und kriminellen Aktivitäten'
                  : language === 'es' ? 'Prevención, detección e investigación de fraude y actividades criminales'
                  : language === 'el' ? 'Πρόληψη, ανίχνευση και διερεύνηση απάτης και εγκληματικών δραστηριοτήτων'
                  : 'Fraud prevention, detection, and investigation',
                language === 'fr' ? 'Sécurité du réseau et des systèmes d\'information'
                  : language === 'it' ? 'Sicurezza della rete e dei sistemi informativi'
                  : language === 'de' ? 'Netzwerk- und Informationssystemsicherheit'
                  : language === 'es' ? 'Seguridad de la red y los sistemas de información'
                  : language === 'el' ? 'Ασφάλεια δικτύου και συστημάτων πληροφοριών'
                  : 'Network and information security',
                language === 'fr' ? 'Amélioration et optimisation de nos services'
                  : language === 'it' ? 'Miglioramento e ottimizzazione dei nostri servizi'
                  : language === 'de' ? 'Verbesserung und Optimierung unserer Dienste'
                  : language === 'es' ? 'Mejora y optimización de nuestros servicios'
                  : language === 'el' ? 'Βελτίωση και βελτιστοποίηση των υπηρεσιών μας'
                  : 'Improvement and optimization of our services',
                language === 'fr' ? 'Analyse commerciale et études de marché'
                  : language === 'it' ? 'Analisi aziendale e ricerche di mercato'
                  : language === 'de' ? 'Geschäftsanalyse und Marktforschung'
                  : language === 'es' ? 'Análisis comercial e investigación de mercado'
                  : language === 'el' ? 'Επιχειρηματική ανάλυση και έρευνα αγοράς'
                  : 'Business analytics and market research',
                language === 'fr' ? 'Gestion des risques et conformité interne'
                  : language === 'it' ? 'Gestione del rischio e conformità interna'
                  : language === 'de' ? 'Risikomanagement und interne Compliance'
                  : language === 'es' ? 'Gestión de riesgos y cumplimiento interno'
                  : language === 'el' ? 'Διαχείριση κινδύνου και εσωτερική συμμόρφωση'
                  : 'Risk management and internal compliance',
                language === 'fr' ? 'Communication d\'informations importantes sur les services'
                  : language === 'it' ? 'Comunicazione di informazioni importanti sui servizi'
                  : language === 'de' ? 'Kommunikation wichtiger Serviceinformationen'
                  : language === 'es' ? 'Comunicación de información importante sobre servicios'
                  : language === 'el' ? 'Επικοινωνία σημαντικών πληροφοριών υπηρεσιών'
                  : 'Communicating important service information'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Article 6(1)(a) et 9(2)(a) RGPD - Consentement'
            : language === 'it' ? 'Articolo 6(1)(a) e 9(2)(a) GDPR - Consenso'
            : language === 'de' ? 'Artikel 6(1)(a) und 9(2)(a) DSGVO - Einwilligung'
            : language === 'es' ? 'Artículo 6(1)(a) y 9(2)(a) GDPR - Consentimiento'
            : language === 'el' ? 'Άρθρο 6(1)(a) και 9(2)(a) GDPR - Συγκατάθεση'
            : 'Article 6(1)(a) and 9(2)(a) GDPR - Consent'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Vous avez donné votre consentement au traitement de vos données personnelles pour une ou plusieurs finalités spécifiques. Cela s\'applique à:'
                : language === 'it' ? 'Avete dato il vostro consenso al trattamento dei vostri dati personali per una o più finalità specifiche. Ciò si applica a:'
                : language === 'de' ? 'Sie haben Ihre Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben. Dies gilt für:'
                : language === 'es' ? 'Ha dado su consentimiento para el procesamiento de sus datos personales para uno o más fines específicos. Esto se aplica a:'
                : language === 'el' ? 'Έχετε δώσει τη συγκατάθεσή σας για την επεξεργασία των προσωπικών σας δεδομένων για έναν ή περισσότερους συγκεκριμένους σκοπούς. Αυτό ισχύει για:'
                : 'You have given consent to the processing of your personal data for one or more specific purposes. This applies to:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Communications marketing et newsletters (vous pouvez vous désinscrire à tout moment)'
                  : language === 'it' ? 'Comunicazioni di marketing e newsletter (potete annullare l\'iscrizione in qualsiasi momento)'
                  : language === 'de' ? 'Marketingkommunikation und Newsletter (Sie können sich jederzeit abmelden)'
                  : language === 'es' ? 'Comunicaciones de marketing y boletines (puede darse de baja en cualquier momento)'
                  : language === 'el' ? 'Επικοινωνίες μάρκετινγκ και ενημερωτικά δελτία (μπορείτε να διαγραφείτε ανά πάσα στιγμή)'
                  : 'Marketing communications and newsletters (you can opt-out anytime)',
                language === 'fr' ? 'Traitement de catégories spéciales de données personnelles (données sensibles)'
                  : language === 'it' ? 'Trattamento di categorie speciali di dati personali (dati sensibili)'
                  : language === 'de' ? 'Verarbeitung besonderer Kategorien personenbezogener Daten (sensible Daten)'
                  : language === 'es' ? 'Procesamiento de categorías especiales de datos personales (datos sensibles)'
                  : language === 'el' ? 'Επεξεργασία ειδικών κατηγοριών προσωπικών δεδομένων (ευαίσθητα δεδομένα)'
                  : 'Processing of special categories of personal data (sensitive data)',
                language === 'fr' ? 'Cookies non essentiels et technologies de suivi'
                  : language === 'it' ? 'Cookie non essenziali e tecnologie di tracciamento'
                  : language === 'de' ? 'Nicht wesentliche Cookies und Tracking-Technologien'
                  : language === 'es' ? 'Cookies no esenciales y tecnologías de seguimiento'
                  : language === 'el' ? 'Μη απαραίτητα cookies και τεχνολογίες παρακολούθησης'
                  : 'Non-essential cookies and tracking technologies',
                language === 'fr' ? 'Utilisation de données de géolocalisation précises'
                  : language === 'it' ? 'Utilizzo di dati di geolocalizzazione precisi'
                  : language === 'de' ? 'Verwendung präziser Geolokalisierungsdaten'
                  : language === 'es' ? 'Uso de datos de geolocalización precisos'
                  : language === 'el' ? 'Χρήση ακριβών δεδομένων γεωεντοπισμού'
                  : 'Use of precise geolocation data'
              ]}
            />
            <LegalNotice type="info" className="mt-4">
              <p>
                {language === 'fr' ? 'Vous avez le droit de retirer votre consentement à tout moment. Le retrait du consentement n\'affecte pas la légalité du traitement effectué avant le retrait. Pour retirer votre consentement, contactez support@aareal-bank-ag.com.'
                  : language === 'it' ? 'Avete il diritto di ritirare il vostro consenso in qualsiasi momento. Il ritiro del consenso non pregiudica la liceità del trattamento basato sul consenso prima del ritiro. Per ritirare il consenso, contattate support@aareal-bank-ag.com.'
                  : language === 'de' ? 'Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen. Der Widerruf der Einwilligung berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung. Um Ihre Einwilligung zu widerrufen, kontaktieren Sie support@aareal-bank-ag.com.'
                  : language === 'es' ? 'Tiene derecho a retirar su consentimiento en cualquier momento. La retirada del consentimiento no afecta a la licitud del procesamiento basado en el consentimiento antes de su retirada. Para retirar su consentimiento, contacte a support@aareal-bank-ag.com.'
                  : language === 'el' ? 'Έχετε το δικαίωμα να αποσύρετε τη συγκατάθεσή σας ανά πάσα στιγμή. Η απόσυρση της συγκατάθεσης δεν θίγει τη νομιμότητα της επεξεργασίας που βασίστηκε στη συγκατάθεση πριν από την απόσυρσή της. Για να αποσύρετε τη συγκατάθεσή σας, επικοινωνήστε στο support@aareal-bank-ag.com.'
                  : 'You have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal. To withdraw your consent, contact support@aareal-bank-ag.com.'}
              </p>
            </LegalNotice>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title={tocSections[5].title} id={tocSections[5].id} icon={<FileText size={24} />}>
          <p className="text-[#333333] leading-relaxed mb-4">
            {language === 'fr' ? 'Nous traitons vos données personnelles uniquement pour des finalités spécifiques, explicites et légitimes. Nous ne traitons pas vos données de manière incompatible avec ces finalités sans votre consentement supplémentaire.'
              : language === 'it' ? 'Trattiamo i vostri dati personali solo per scopi specifici, espliciti e legittimi. Non trattiamo i vostri dati in modo incompatibile con questi scopi senza il vostro ulteriore consenso.'
              : language === 'de' ? 'Wir verarbeiten Ihre personenbezogenen Daten nur für bestimmte, ausdrückliche und legitime Zwecke. Wir verarbeiten Ihre Daten nicht auf eine mit diesen Zwecken unvereinbare Weise ohne Ihre zusätzliche Einwilligung.'
              : language === 'es' ? 'Procesamos sus datos personales solo para fines específicos, explícitos y legítimos. No procesamos sus datos de manera incompatible con estos fines sin su consentimiento adicional.'
              : language === 'el' ? 'Επεξεργαζόμαστε τα προσωπικά σας δεδομένα μόνο για συγκεκριμένους, ρητούς και νόμιμους σκοπούς. Δεν επεξεργαζόμαστε τα δεδομένα σας με τρόπο ασυμβίβαστο με αυτούς τους σκοπούς χωρίς την πρόσθετη συγκατάθεσή σας.'
              : 'We process your personal data only for specific, explicit, and legitimate purposes. We do not process your data in a manner incompatible with these purposes without your additional consent.'}
          </p>

          <LegalSubsection title={language === 'fr' ? 'Fourniture et Gestion des Services'
            : language === 'it' ? 'Fornitura e Gestione dei Servizi'
            : language === 'de' ? 'Bereitstellung und Verwaltung von Diensten'
            : language === 'es' ? 'Prestación y Gestión de Servicios'
            : language === 'el' ? 'Παροχή και Διαχείριση Υπηρεσιών'
            : 'Service Provision and Management'}>
            <LegalList
              items={[
                language === 'fr' ? 'Création, maintenance et sécurisation de vos comptes'
                  : language === 'it' ? 'Creazione, manutenzione e protezione dei vostri account'
                  : language === 'de' ? 'Erstellung, Wartung und Sicherung Ihrer Konten'
                  : language === 'es' ? 'Creación, mantenimiento y seguridad de sus cuentas'
                  : language === 'el' ? 'Δημιουργία, συντήρηση και ασφάλιση των λογαριασμών σας'
                  : 'Creating, maintaining, and securing your accounts',
                language === 'fr' ? 'Traitement des transactions, paiements et transferts'
                  : language === 'it' ? 'Elaborazione di transazioni, pagamenti e trasferimenti'
                  : language === 'de' ? 'Verarbeitung von Transaktionen, Zahlungen und Überweisungen'
                  : language === 'es' ? 'Procesamiento de transacciones, pagos y transferencias'
                  : language === 'el' ? 'Επεξεργασία συναλλαγών, πληρωμών και μεταφορών'
                  : 'Processing transactions, payments, and transfers',
                language === 'fr' ? 'Fourniture de services bancaires, d\'investissement et financiers'
                  : language === 'it' ? 'Fornitura di servizi bancari, di investimento e finanziari'
                  : language === 'de' ? 'Bereitstellung von Bank-, Anlage- und Finanzdienstleistungen'
                  : language === 'es' ? 'Prestación de servicios bancarios, de inversión y financieros'
                  : language === 'el' ? 'Παροχή τραπεζικών, επενδυτικών και χρηματοοικονομικών υπηρεσιών'
                  : 'Providing banking, investment, and financial services',
                language === 'fr' ? 'Authentification et vérification de votre identité'
                  : language === 'it' ? 'Autenticazione e verifica della vostra identità'
                  : language === 'de' ? 'Authentifizierung und Überprüfung Ihrer Identität'
                  : language === 'es' ? 'Autenticación y verificación de su identidad'
                  : language === 'el' ? 'Ταυτοποίηση και επαλήθευση της ταυτότητάς σας'
                  : 'Authenticating and verifying your identity',
                language === 'fr' ? 'Communication concernant vos comptes et services'
                  : language === 'it' ? 'Comunicazione riguardante i vostri account e servizi'
                  : language === 'de' ? 'Kommunikation über Ihre Konten und Dienste'
                  : language === 'es' ? 'Comunicación sobre sus cuentas y servicios'
                  : language === 'el' ? 'Επικοινωνία σχετικά με τους λογαριασμούς και τις υπηρεσίες σας'
                  : 'Communicating about your accounts and services',
                language === 'fr' ? 'Fourniture d\'un service client et d\'un support technique'
                  : language === 'it' ? 'Fornitura di servizio clienti e supporto tecnico'
                  : language === 'de' ? 'Bereitstellung von Kundenservice und technischem Support'
                  : language === 'es' ? 'Prestación de servicio al cliente y soporte técnico'
                  : language === 'el' ? 'Παροχή εξυπηρέτησης πελατών και τεχνικής υποστήριξης'
                  : 'Providing customer service and technical support'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Conformité et Légal'
            : language === 'it' ? 'Conformità e Legale'
            : language === 'de' ? 'Compliance und Rechtliches'
            : language === 'es' ? 'Cumplimiento y Legal'
            : language === 'el' ? 'Συμμόρφωση και Νομικά'
            : 'Compliance and Legal'}>
            <LegalList
              items={[
                language === 'fr' ? 'Vérification KYC et diligence raisonnable du client'
                  : language === 'it' ? 'Verifica KYC e due diligence del cliente'
                  : language === 'de' ? 'KYC-Überprüfung und Kundenüberprüfung'
                  : language === 'es' ? 'Verificación KYC y debida diligencia del cliente'
                  : language === 'el' ? 'Επαλήθευση KYC και δέουσα επιμέλεια πελάτη'
                  : 'KYC verification and customer due diligence',
                language === 'fr' ? 'Prévention du blanchiment d\'argent et du financement du terrorisme'
                  : language === 'it' ? 'Prevenzione del riciclaggio di denaro e del finanziamento del terrorismo'
                  : language === 'de' ? 'Verhinderung von Geldwäsche und Terrorismusfinanzierung'
                  : language === 'es' ? 'Prevención del lavado de dinero y financiamiento del terrorismo'
                  : language === 'el' ? 'Πρόληψη ξεπλύματος χρήματος και χρηματοδότησης της τρομοκρατίας'
                  : 'Anti-money laundering and counter-terrorism financing',
                language === 'fr' ? 'Respect des sanctions internationales et embargos'
                  : language === 'it' ? 'Rispetto delle sanzioni internazionali e degli embarghi'
                  : language === 'de' ? 'Einhaltung internationaler Sanktionen und Embargos'
                  : language === 'es' ? 'Cumplimiento de sanciones internacionales y embargos'
                  : language === 'el' ? 'Συμμόρφωση με διεθνείς κυρώσεις και εμπάργκο'
                  : 'Compliance with international sanctions and embargoes',
                language === 'fr' ? 'Déclarations fiscales et conformité réglementaire'
                  : language === 'it' ? 'Dichiarazioni fiscali e conformità normativa'
                  : language === 'de' ? 'Steuererklärungen und behördliche Compliance'
                  : language === 'es' ? 'Declaraciones fiscales y cumplimiento normativo'
                  : language === 'el' ? 'Φορολογικές δηλώσεις και κανονιστική συμμόρφωση'
                  : 'Tax reporting and regulatory compliance',
                language === 'fr' ? 'Réponse aux demandes légales et réglementaires'
                  : language === 'it' ? 'Risposta a richieste legali e normative'
                  : language === 'de' ? 'Beantwortung rechtlicher und behördlicher Anfragen'
                  : language === 'es' ? 'Respuesta a solicitudes legales y regulatorias'
                  : language === 'el' ? 'Απάντηση σε νομικές και κανονιστικές αιτήσεις'
                  : 'Responding to legal and regulatory requests'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Sécurité et Prévention de la Fraude'
            : language === 'it' ? 'Sicurezza e Prevenzione delle Frodi'
            : language === 'de' ? 'Sicherheit und Betrugsprävention'
            : language === 'es' ? 'Seguridad y Prevención de Fraude'
            : language === 'el' ? 'Ασφάλεια και Πρόληψη Απάτης'
            : 'Security and Fraud Prevention'}>
            <LegalList
              items={[
                language === 'fr' ? 'Détection et prévention de la fraude, de la criminalité financière et du blanchiment d\'argent'
                  : language === 'it' ? 'Rilevamento e prevenzione di frodi, criminalità finanziaria e riciclaggio di denaro'
                  : language === 'de' ? 'Erkennung und Verhinderung von Betrug, Finanzkriminalität und Geldwäsche'
                  : language === 'es' ? 'Detección y prevención de fraude, delitos financieros y lavado de dinero'
                  : language === 'el' ? 'Ανίχνευση και πρόληψη απάτης, οικονομικού εγκλήματος και ξεπλύματος χρήματος'
                  : 'Detecting and preventing fraud, financial crime, and money laundering',
                language === 'fr' ? 'Surveillance et analyse des transactions pour détecter les activités suspectes'
                  : language === 'it' ? 'Monitoraggio e analisi delle transazioni per rilevare attività sospette'
                  : language === 'de' ? 'Überwachung und Analyse von Transaktionen zur Erkennung verdächtiger Aktivitäten'
                  : language === 'es' ? 'Monitoreo y análisis de transacciones para detectar actividades sospechosas'
                  : language === 'el' ? 'Παρακολούθηση και ανάλυση συναλλαγών για τον εντοπισμό ύποπτων δραστηριοτήτων'
                  : 'Monitoring and analyzing transactions for suspicious activity',
                language === 'fr' ? 'Protection des systèmes et des réseaux contre les cybermenaces'
                  : language === 'it' ? 'Protezione di sistemi e reti dalle minacce informatiche'
                  : language === 'de' ? 'Schutz von Systemen und Netzwerken vor Cyberbedrohungen'
                  : language === 'es' ? 'Protección de sistemas y redes contra amenazas cibernéticas'
                  : language === 'el' ? 'Προστασία συστημάτων και δικτύων από κυβερνοαπειλές'
                  : 'Protecting systems and networks from cyber threats',
                language === 'fr' ? 'Investigation et résolution des incidents de sécurité'
                  : language === 'it' ? 'Indagine e risoluzione di incidenti di sicurezza'
                  : language === 'de' ? 'Untersuchung und Behebung von Sicherheitsvorfällen'
                  : language === 'es' ? 'Investigación y resolución de incidentes de seguridad'
                  : language === 'el' ? 'Διερεύνηση και επίλυση περιστατικών ασφαλείας'
                  : 'Investigating and resolving security incidents'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Amélioration des Services'
            : language === 'it' ? 'Miglioramento dei Servizi'
            : language === 'de' ? 'Dienstverbesserung'
            : language === 'es' ? 'Mejora de Servicios'
            : language === 'el' ? 'Βελτίωση Υπηρεσιών'
            : 'Service Improvement'}>
            <LegalList
              items={[
                language === 'fr' ? 'Analyse de l\'utilisation des services et identification des tendances'
                  : language === 'it' ? 'Analisi dell\'utilizzo dei servizi e identificazione delle tendenze'
                  : language === 'de' ? 'Analyse der Dienstnutzung und Identifizierung von Trends'
                  : language === 'es' ? 'Análisis del uso de servicios e identificación de tendencias'
                  : language === 'el' ? 'Ανάλυση της χρήσης υπηρεσιών και εντοπισμός τάσεων'
                  : 'Analyzing service usage and identifying trends',
                language === 'fr' ? 'Développement de nouveaux produits et services'
                  : language === 'it' ? 'Sviluppo di nuovi prodotti e servizi'
                  : language === 'de' ? 'Entwicklung neuer Produkte und Dienstleistungen'
                  : language === 'es' ? 'Desarrollo de nuevos productos y servicios'
                  : language === 'el' ? 'Ανάπτυξη νέων προϊόντων και υπηρεσιών'
                  : 'Developing new products and services',
                language === 'fr' ? 'Personnalisation de votre expérience'
                  : language === 'it' ? 'Personalizzazione della vostra esperienza'
                  : language === 'de' ? 'Personalisierung Ihrer Erfahrung'
                  : language === 'es' ? 'Personalización de su experiencia'
                  : language === 'el' ? 'Εξατομίκευση της εμπειρίας σας'
                  : 'Personalizing your experience',
                language === 'fr' ? 'Réalisation d\'études de marché et d\'analyses commerciales'
                  : language === 'it' ? 'Conduzione di ricerche di mercato e analisi aziendali'
                  : language === 'de' ? 'Durchführung von Marktforschung und Geschäftsanalysen'
                  : language === 'es' ? 'Realización de investigaciones de mercado y análisis comerciales'
                  : language === 'el' ? 'Διεξαγωγή έρευνας αγοράς και επιχειρηματικής ανάλυσης'
                  : 'Conducting market research and business analytics'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Marketing et Communication (avec consentement)'
            : language === 'it' ? 'Marketing e Comunicazione (con consenso)'
            : language === 'de' ? 'Marketing und Kommunikation (mit Einwilligung)'
            : language === 'es' ? 'Marketing y Comunicación (con consentimiento)'
            : language === 'el' ? 'Μάρκετινγκ και Επικοινωνία (με συγκατάθεση)'
            : 'Marketing and Communication (with consent)'}>
            <LegalList
              items={[
                language === 'fr' ? 'Envoi de newsletters et mises à jour des produits'
                  : language === 'it' ? 'Invio di newsletter e aggiornamenti sui prodotti'
                  : language === 'de' ? 'Versand von Newslettern und Produktaktualisierungen'
                  : language === 'es' ? 'Envío de boletines y actualizaciones de productos'
                  : language === 'el' ? 'Αποστολή ενημερωτικών δελτίων και ενημερώσεων προϊόντων'
                  : 'Sending newsletters and product updates',
                language === 'fr' ? 'Promotion de nouveaux services et offres spéciales'
                  : language === 'it' ? 'Promozione di nuovi servizi e offerte speciali'
                  : language === 'de' ? 'Bewerbung neuer Dienste und Sonderangebote'
                  : language === 'es' ? 'Promoción de nuevos servicios y ofertas especiales'
                  : language === 'el' ? 'Προώθηση νέων υπηρεσιών και ειδικών προσφορών'
                  : 'Promoting new services and special offers',
                language === 'fr' ? 'Invitations à des événements et webinaires'
                  : language === 'it' ? 'Inviti a eventi e webinar'
                  : language === 'de' ? 'Einladungen zu Veranstaltungen und Webinaren'
                  : language === 'es' ? 'Invitaciones a eventos y seminarios web'
                  : language === 'el' ? 'Προσκλήσεις σε εκδηλώσεις και webinars'
                  : 'Invitations to events and webinars',
                language === 'fr' ? 'Envoi de contenu éducatif et d\'informations sur le marché'
                  : language === 'it' ? 'Invio di contenuti educativi e informazioni di mercato'
                  : language === 'de' ? 'Versand von Bildungsinhalten und Marktinformationen'
                  : language === 'es' ? 'Envío de contenido educativo e información del mercado'
                  : language === 'el' ? 'Αποστολή εκπαιδευτικού περιεχομένου και πληροφοριών αγοράς'
                  : 'Sending educational content and market information'
              ]}
            />
            <LegalNotice type="info" className="mt-4">
              <p>
                {language === 'fr' ? 'Vous pouvez vous désabonner des communications marketing à tout moment en cliquant sur le lien de désabonnement dans nos emails ou en nous contactant directement.'
                  : language === 'it' ? 'Potete annullare l\'iscrizione alle comunicazioni di marketing in qualsiasi momento cliccando sul link di annullamento nelle nostre email o contattandoci direttamente.'
                  : language === 'de' ? 'Sie können sich jederzeit von Marketingkommunikation abmelden, indem Sie auf den Abmeldelink in unseren E-Mails klicken oder uns direkt kontaktieren.'
                  : language === 'es' ? 'Puede darse de baja de las comunicaciones de marketing en cualquier momento haciendo clic en el enlace de cancelación en nuestros correos electrónicos o contactándonos directamente.'
                  : language === 'el' ? 'Μπορείτε να διαγραφείτε από τις επικοινωνίες μάρκετινγκ ανά πάσα στιγμή κάνοντας κλικ στον σύνδεσμο κατάργησης εγγραφής στα email μας ή επικοινωνώντας μαζί μας απευθείας.'
                  : 'You can opt-out of marketing communications at any time by clicking the unsubscribe link in our emails or by contacting us directly.'}
              </p>
            </LegalNotice>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title={tocSections[6].title} id={tocSections[6].id} icon={<Users size={24} />}>
          <p className="text-[#333333] leading-relaxed mb-4">
            {language === 'fr' ? 'Nous pouvons partager vos données personnelles avec des tiers dans des circonstances spécifiques et uniquement dans la mesure nécessaire. Nous exigeons que tous les tiers respectent la sécurité de vos données et les traitent conformément aux lois applicables.'
              : language === 'it' ? 'Possiamo condividere i vostri dati personali con terze parti in circostanze specifiche e solo nella misura necessaria. Richiediamo che tutte le terze parti rispettino la sicurezza dei vostri dati e li trattino in conformità con le leggi applicabili.'
              : language === 'de' ? 'Wir können Ihre personenbezogenen Daten unter bestimmten Umständen und nur im erforderlichen Umfang an Dritte weitergeben. Wir verlangen von allen Dritten, dass sie die Sicherheit Ihrer Daten respektieren und sie gemäß den geltenden Gesetzen behandeln.'
              : language === 'es' ? 'Podemos compartir sus datos personales con terceros en circunstancias específicas y solo en la medida necesaria. Exigimos que todos los terceros respeten la seguridad de sus datos y los traten de acuerdo con las leyes aplicables.'
              : language === 'el' ? 'Μπορούμε να κοινοποιήσουμε τα προσωπικά σας δεδομένα σε τρίτους σε συγκεκριμένες περιστάσεις και μόνο στον απαραίτητο βαθμό. Απαιτούμε από όλους τους τρίτους να σέβονται την ασφάλεια των δεδομένων σας και να τα χειρίζονται σύμφωνα με τους ισχύοντες νόμους.'
              : 'We may share your personal data with third parties in specific circumstances and only to the extent necessary. We require all third parties to respect the security of your data and treat it in accordance with applicable laws.'}
          </p>

          <LegalSubsection title={language === 'fr' ? 'Fournisseurs de Services'
            : language === 'it' ? 'Fornitori di Servizi'
            : language === 'de' ? 'Dienstleister'
            : language === 'es' ? 'Proveedores de Servicios'
            : language === 'el' ? 'Πάροχοι Υπηρεσιών'
            : 'Service Providers'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Nous travaillons avec des fournisseurs de services tiers qui traitent des données en notre nom:'
                : language === 'it' ? 'Lavoriamo con fornitori di servizi terzi che trattano dati per nostro conto:'
                : language === 'de' ? 'Wir arbeiten mit Drittdienstleistern zusammen, die Daten in unserem Auftrag verarbeiten:'
                : language === 'es' ? 'Trabajamos con proveedores de servicios de terceros que procesan datos en nuestro nombre:'
                : language === 'el' ? 'Συνεργαζόμαστε με παρόχους υπηρεσιών τρίτων που επεξεργάζονται δεδομένα για λογαριασμό μας:'
                : 'We work with third-party service providers who process data on our behalf:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Processeurs de paiement et passerelles'
                  : language === 'it' ? 'Processori di pagamento e gateway'
                  : language === 'de' ? 'Zahlungsabwickler und Gateways'
                  : language === 'es' ? 'Procesadores de pago y pasarelas'
                  : language === 'el' ? 'Επεξεργαστές πληρωμών και πύλες'
                  : 'Payment processors and gateways',
                language === 'fr' ? 'Fournisseurs de technologie cloud et d\'hébergement'
                  : language === 'it' ? 'Fornitori di tecnologia cloud e hosting'
                  : language === 'de' ? 'Cloud-Technologie- und Hosting-Anbieter'
                  : language === 'es' ? 'Proveedores de tecnología en la nube y alojamiento'
                  : language === 'el' ? 'Πάροχοι τεχνολογίας cloud και φιλοξενίας'
                  : 'Cloud technology and hosting providers',
                language === 'fr' ? 'Services de vérification d\'identité (KYC)'
                  : language === 'it' ? 'Servizi di verifica dell\'identità (KYC)'
                  : language === 'de' ? 'Identitätsverifizierungsdienste (KYC)'
                  : language === 'es' ? 'Servicios de verificación de identidad (KYC)'
                  : language === 'el' ? 'Υπηρεσίες επαλήθευσης ταυτότητας (KYC)'
                  : 'Identity verification services (KYC)',
                language === 'fr' ? 'Outils de prévention de la fraude et de sécurité'
                  : language === 'it' ? 'Strumenti di prevenzione delle frodi e sicurezza'
                  : language === 'de' ? 'Betrugspr äventions- und Sicherheitstools'
                  : language === 'es' ? 'Herramientas de prevención de fraude y seguridad'
                  : language === 'el' ? 'Εργαλεία πρόληψης απάτης και ασφάλειας'
                  : 'Fraud prevention and security tools',
                language === 'fr' ? 'Plateformes d\'analyse et de surveillance'
                  : language === 'it' ? 'Piattaforme di analisi e monitoraggio'
                  : language === 'de' ? 'Analyse- und Überwachungsplattformen'
                  : language === 'es' ? 'Plataformas de análisis y monitoreo'
                  : language === 'el' ? 'Πλατφόρμες ανάλυσης και παρακολούθησης'
                  : 'Analytics and monitoring platforms',
                language === 'fr' ? 'Services de support client et de communication'
                  : language === 'it' ? 'Servizi di supporto clienti e comunicazione'
                  : language === 'de' ? 'Kundensupport- und Kommunikationsdienste'
                  : language === 'es' ? 'Servicios de soporte al cliente y comunicación'
                  : language === 'el' ? 'Υπηρεσίες υποστήριξης πελατών και επικοινωνίας'
                  : 'Customer support and communication services'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Institutions Financières et Partenaires'
            : language === 'it' ? 'Istituzioni Finanziarie e Partner'
            : language === 'de' ? 'Finanzinstitute und Partner'
            : language === 'es' ? 'Instituciones Financieras y Socios'
            : language === 'el' ? 'Χρηματοπιστωτικά Ιδρύματα και Συνεργάτες'
            : 'Financial Institutions and Partners'}>
            <LegalList
              items={[
                language === 'fr' ? 'Banques correspondantes et institutions financières partenaires'
                  : language === 'it' ? 'Banche corrispondenti e istituzioni finanziarie partner'
                  : language === 'de' ? 'Korrespondenzbanken und Partner-Finanzinstitute'
                  : language === 'es' ? 'Bancos corresponsales e instituciones financieras asociadas'
                  : language === 'el' ? 'Ανταποκρίτριες τράπεζες και συνεργαζόμενα χρηματοπιστωτικά ιδρύματα'
                  : 'Correspondent banks and partner financial institutions',
                language === 'fr' ? 'Réseaux de cartes de crédit et de débit'
                  : language === 'it' ? 'Circuiti di carte di credito e debito'
                  : language === 'de' ? 'Kredit- und Debitkartennetzwerke'
                  : language === 'es' ? 'Redes de tarjetas de crédito y débito'
                  : language === 'el' ? 'Δίκτυα πιστωτικών και χρεωστικών καρτών'
                  : 'Credit and debit card networks',
                language === 'fr' ? 'Bourses de cryptomonnaies et fournisseurs de liquidité'
                  : language === 'it' ? 'Borse di criptovalute e fornitori di liquidità'
                  : language === 'de' ? 'Kryptowährungsbörsen und Liquiditätsanbieter'
                  : language === 'es' ? 'Bolsas de criptomonedas y proveedores de liquidez'
                  : language === 'el' ? 'Χρηματιστήρια κρυπτονομισμάτων και πάροχοι ρευστότητας'
                  : 'Cryptocurrency exchanges and liquidity providers',
                language === 'fr' ? 'Agences de crédit et bureaux de crédit'
                  : language === 'it' ? 'Agenzie di credito e uffici di credito'
                  : language === 'de' ? 'Kreditagenturen und Kreditbüros'
                  : language === 'es' ? 'Agencias de crédito y burós de crédito'
                  : language === 'el' ? 'Πιστωτικοί οργανισμοί και γραφεία πιστοληπτικής αξιολόγησης'
                  : 'Credit agencies and credit bureaus'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Autorités Légales et Réglementaires'
            : language === 'it' ? 'Autorità Legali e Normative'
            : language === 'de' ? 'Rechtliche und Aufsichtsbehörden'
            : language === 'es' ? 'Autoridades Legales y Regulatorias'
            : language === 'el' ? 'Νομικές και Ρυθμιστικές Αρχές'
            : 'Legal and Regulatory Authorities'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'Nous pouvons divulguer vos données personnelles aux autorités lorsque cela est légalement requis:'
                : language === 'it' ? 'Possiamo divulgare i vostri dati personali alle autorità quando legalmente richiesto:'
                : language === 'de' ? 'Wir können Ihre personenbezogenen Daten an Behörden offenlegen, wenn dies gesetzlich vorgeschrieben ist:'
                : language === 'es' ? 'Podemos divulgar sus datos personales a las autoridades cuando sea legalmente requerido:'
                : language === 'el' ? 'Μπορούμε να γνωστοποιήσουμε τα προσωπικά σας δεδομένα στις αρχές όταν απαιτείται νομικά:'
                : 'We may disclose your personal data to authorities when legally required:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Autorités financières et organismes de réglementation'
                  : language === 'it' ? 'Autorità finanziarie e organismi di regolamentazione'
                  : language === 'de' ? 'Finanzbehörden und Aufsichtsbehörden'
                  : language === 'es' ? 'Autoridades financieras y organismos reguladores'
                  : language === 'el' ? 'Χρηματοοικονομικές αρχές και ρυθμιστικοί οργανισμοί'
                  : 'Financial authorities and regulatory bodies',
                language === 'fr' ? 'Organismes chargés de l\'application de la loi'
                  : language === 'it' ? 'Organi di applicazione della legge'
                  : language === 'de' ? 'Strafverfolgungsbehörden'
                  : language === 'es' ? 'Organismos encargados de hacer cumplir la ley'
                  : language === 'el' ? 'Αρχές επιβολής του νόμου'
                  : 'Law enforcement agencies',
                language === 'fr' ? 'Autorités fiscales'
                  : language === 'it' ? 'Autorità fiscali'
                  : language === 'de' ? 'Steuerbehörden'
                  : language === 'es' ? 'Autoridades fiscales'
                  : language === 'el' ? 'Φορολογικές αρχές'
                  : 'Tax authorities',
                language === 'fr' ? 'Tribunaux et autorités judiciaires'
                  : language === 'it' ? 'Tribunali e autorità giudiziarie'
                  : language === 'de' ? 'Gerichte und Justizbehörden'
                  : language === 'es' ? 'Tribunales y autoridades judiciales'
                  : language === 'el' ? 'Δικαστήρια και δικαστικές αρχές'
                  : 'Courts and judicial authorities',
                language === 'fr' ? 'Unités de renseignement financier (CRF)'
                  : language === 'it' ? 'Unità di intelligence finanziaria (UIF)'
                  : language === 'de' ? 'Finanzinformationsstellen (FIU)'
                  : language === 'es' ? 'Unidades de inteligencia financiera (UIF)'
                  : language === 'el' ? 'Μονάδες χρηματοοικονομικών πληροφοριών (FIU)'
                  : 'Financial intelligence units (FIU)'
              ]}
            />
          </LegalSubsection>

          <LegalSubsection title={language === 'fr' ? 'Transactions Commerciales'
            : language === 'it' ? 'Transazioni Commerciali'
            : language === 'de' ? 'Geschäftstransaktionen'
            : language === 'es' ? 'Transacciones Comerciales'
            : language === 'el' ? 'Επιχειρηματικές Συναλλαγές'
            : 'Business Transactions'}>
            <p className="text-[#333333] leading-relaxed mb-3">
              {language === 'fr' ? 'En cas de restructuration, fusion, acquisition ou vente d\'actifs, vos données personnelles peuvent être transférées:'
                : language === 'it' ? 'In caso di ristrutturazione, fusione, acquisizione o vendita di asset, i vostri dati personali possono essere trasferiti:'
                : language === 'de' ? 'Im Falle einer Umstrukturierung, Fusion, Übernahme oder Vermögensveräußerung können Ihre personenbezogenen Daten übertragen werden:'
                : language === 'es' ? 'En caso de reestructuración, fusión, adquisición o venta de activos, sus datos personales pueden ser transferidos:'
                : language === 'el' ? 'Σε περίπτωση αναδιάρθρωσης, συγχώνευσης, απόκτησης ή πώλησης περιουσιακών στοιχείων, τα προσωπικά σας δεδομένα μπορεί να μεταφερθούν:'
                : 'In the event of restructuring, merger, acquisition, or asset sale, your personal data may be transferred:'}
            </p>
            <LegalList
              items={[
                language === 'fr' ? 'Aux acheteurs potentiels ou réels et à leurs conseillers'
                  : language === 'it' ? 'Agli acquirenti potenziali o effettivi e ai loro consulenti'
                  : language === 'de' ? 'An potenzielle oder tatsächliche Käufer und ihre Berater'
                  : language === 'es' ? 'A compradores potenciales o reales y sus asesores'
                  : language === 'el' ? 'Σε πιθανούς ή πραγματικούς αγοραστές και τους συμβούλους τους'
                  : 'To potential or actual buyers and their advisors',
                language === 'fr' ? 'Aux entités successeurs en cas de fusion ou d\'acquisition'
                  : language === 'it' ? 'Alle entità successore in caso di fusione o acquisizione'
                  : language === 'de' ? 'An Nachfolgeunternehmen im Falle einer Fusion oder Übernahme'
                  : language === 'es' ? 'A entidades sucesoras en caso de fusión o adquisición'
                  : language === 'el' ? 'Σε διάδοχες οντότητες σε περίπτωση συγχώνευσης ή απόκτησης'
                  : 'To successor entities in case of merger or acquisition',
                language === 'fr' ? 'Aux syndics en cas de faillite ou d\'insolvabilité'
                  : language === 'it' ? 'Ai curatori fallimentari in caso di fallimento o insolvenza'
                  : language === 'de' ? 'An Insolvenzverwalter im Falle einer Insolvenz'
                  : language === 'es' ? 'A síndicos en caso de quiebra o insolvencia'
                  : language === 'el' ? 'Σε σύνδικους σε περίπτωση πτώχευσης ή αφερεγγυότητας'
                  : 'To trustees in case of bankruptcy or insolvency'
              ]}
            />
            <LegalNotice type="info" className="mt-4">
              <p>
                {language === 'fr' ? 'Dans tous les cas, nous exigerons que le tiers destinataire respecte cette politique de confidentialité et traite vos données personnelles de manière sécurisée et confidentielle.'
                  : language === 'it' ? 'In tutti i casi, richiederemo che il terzo destinatario rispetti questa informativa sulla privacy e tratti i vostri dati personali in modo sicuro e riservato.'
                  : language === 'de' ? 'In allen Fällen werden wir verlangen, dass der Drittempfänger diese Datenschutzrichtlinie einhält und Ihre personenbezogenen Daten sicher und vertraulich behandelt.'
                  : language === 'es' ? 'En todos los casos, exigiremos que el tercero destinatario respete esta política de privacidad y trate sus datos personales de manera segura y confidencial.'
                  : language === 'el' ? 'Σε όλες τις περιπτώσεις, θα απαιτήσουμε ο τρίτος παραλήπτης να σέβεται αυτήν την πολιτική απορρήτου και να χειρίζεται τα προσωπικά σας δεδομένα με ασφάλεια και εμπιστευτικότητα.'
                  : 'In all cases, we will require the third-party recipient to respect this privacy policy and handle your personal data securely and confidentially.'}
              </p>
            </LegalNotice>
          </LegalSubsection>
        </LegalSection>

      </div>
    </div>
  );
}
