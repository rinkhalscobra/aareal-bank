import { FileText, Scale, Shield, AlertTriangle, Lock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LegalSection from '../components/legal/LegalSection';
import LegalNotice from '../components/legal/LegalNotice';
import LegalSubsection from '../components/legal/LegalSubsection';
import LegalList from '../components/legal/LegalList';
import TableOfContents from '../components/legal/TableOfContents';

export default function TermsOfService() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Terms of Service Agreement',
      lastUpdated: 'Last Updated: February 16, 2026 | Effective Date: February 16, 2026',
      intro: 'This Terms of Service Agreement ("Agreement") constitutes a legally binding contract between you ("User", "Client", "you", or "your") and Aareal Bank AG, a licensed financial institution registered and operating under the laws of Malta ("Aareal Bank AG", "we", "us", or "our"). Please read these terms carefully before using our services.',
      tableOfContentsTitle: 'Table of Contents',
      acknowledgment: 'By accessing, browsing, or utilizing any of our services, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions set forth in this Agreement, including our Privacy Policy, Risk Disclosure Statement, and all applicable laws and regulations. If you do not agree to these terms, you must immediately cease using our services and close any accounts you may have opened.'
    },
    fr: {
      title: 'Accord de Conditions de Service',
      lastUpdated: 'Dernière mise à jour : 16 février 2026 | Date d\'entrée en vigueur : 16 février 2026',
      intro: 'Cet Accord de Conditions de Service ("Accord") constitue un contrat juridiquement contraignant entre vous ("Utilisateur", "Client", "vous" ou "votre") et Aareal Bank AG, une institution financière agréée enregistrée et opérant selon les lois de Malte ("Aareal Bank AG", "nous" ou "notre"). Veuillez lire attentivement ces conditions avant d\'utiliser nos services.',
      tableOfContentsTitle: 'Table des Matières',
      acknowledgment: 'En accédant, en naviguant ou en utilisant l\'un de nos services, vous reconnaissez avoir lu, compris et accepté d\'être lié par tous les termes et conditions énoncés dans cet Accord, y compris notre Politique de Confidentialité, notre Déclaration de Divulgation des Risques et toutes les lois et réglementations applicables.'
    },
    it: {
      title: 'Accordo sui Termini di Servizio',
      lastUpdated: 'Ultimo aggiornamento: 16 febbraio 2026 | Data di entrata in vigore: 16 febbraio 2026',
      intro: 'Questo Accordo sui Termini di Servizio ("Accordo") costituisce un contratto legalmente vincolante tra te ("Utente", "Cliente", "tu" o "tuo") e Aareal Bank AG, un istituto finanziario autorizzato registrato e operante secondo le leggi di Malta ("Aareal Bank AG", "noi" o "nostro"). Si prega di leggere attentamente questi termini prima di utilizzare i nostri servizi.',
      tableOfContentsTitle: 'Indice',
      acknowledgment: 'Accedendo, navigando o utilizzando uno qualsiasi dei nostri servizi, riconosci di aver letto, compreso e accettato di essere vincolato da tutti i termini e le condizioni stabiliti in questo Accordo, inclusa la nostra Informativa sulla Privacy, la Dichiarazione di Divulgazione dei Rischi e tutte le leggi e i regolamenti applicabili.'
    },
    de: {
      title: 'Nutzungsbedingungs-Vereinbarung',
      lastUpdated: 'Zuletzt aktualisiert: 16. Februar 2026 | Gültig ab: 16. Februar 2026',
      intro: 'Diese Nutzungsbedingungs-Vereinbarung ("Vereinbarung") stellt einen rechtsverbindlichen Vertrag zwischen Ihnen ("Benutzer", "Kunde", "Sie" oder "Ihr") und Aareal Bank AG dar, einem lizenzierten Finanzinstitut, das nach maltesischem Recht registriert ist und tätig ist ("Aareal Bank AG", "wir", "uns" oder "unser"). Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Dienste nutzen.',
      tableOfContentsTitle: 'Inhaltsverzeichnis',
      acknowledgment: 'Durch den Zugriff auf, das Durchsuchen oder die Nutzung unserer Dienste bestätigen Sie, dass Sie alle in dieser Vereinbarung festgelegten Bedingungen gelesen, verstanden und akzeptiert haben, einschließlich unserer Datenschutzrichtlinie, Risikoerklärung und aller geltenden Gesetze und Vorschriften.'
    },
    es: {
      title: 'Acuerdo de Términos de Servicio',
      lastUpdated: 'Última actualización: 16 de febrero de 2026 | Fecha de vigencia: 16 de febrero de 2026',
      intro: 'Este Acuerdo de Términos de Servicio ("Acuerdo") constituye un contrato legalmente vinculante entre usted ("Usuario", "Cliente", "usted" o "su") y Aareal Bank AG, una institución financiera con licencia registrada y que opera bajo las leyes de Malta ("Aareal Bank AG", "nosotros" o "nuestro"). Por favor, lea estos términos cuidadosamente antes de usar nuestros servicios.',
      tableOfContentsTitle: 'Tabla de Contenidos',
      acknowledgment: 'Al acceder, navegar o utilizar cualquiera de nuestros servicios, usted reconoce que ha leído, comprendido y acepta estar sujeto a todos los términos y condiciones establecidos en este Acuerdo, incluida nuestra Política de Privacidad, Declaración de Divulgación de Riesgos y todas las leyes y regulaciones aplicables.'
    },
    el: {
      title: 'Συμφωνία Όρων Χρήσης',
      lastUpdated: 'Τελευταία ενημέρωση: 16 Φεβρουαρίου 2026 | Ημερομηνία έναρξης ισχύος: 16 Φεβρουαρίου 2026',
      intro: 'Αυτή η Συμφωνία Όρων Χρήσης ("Συμφωνία") αποτελεί νομικά δεσμευτικό συμβόλαιο μεταξύ σας ("Χρήστης", "Πελάτης", "εσείς" ή "σας") και της Aareal Bank AG, ενός αδειοδοτημένου χρηματοπιστωτικού ιδρύματος που είναι εγγεγραμμένο και λειτουργεί υπό τους νόμους της Μάλτας ("Aareal Bank AG", "εμείς" ή "μας"). Παρακαλούμε διαβάστε προσεκτικά αυτούς τους όρους πριν χρησιμοποιήσετε τις υπηρεσίες μας.',
      tableOfContentsTitle: 'Πίνακας Περιεχομένων',
      acknowledgment: 'Με την πρόσβαση, την περιήγηση ή τη χρήση οποιασδήποτε από τις υπηρεσίες μας, αναγνωρίζετε ότι έχετε διαβάσει, κατανοήσει και συμφωνείτε να δεσμεύεστε από όλους τους όρους και τις προϋποθέσεις που ορίζονται σε αυτή τη Συμφωνία, συμπεριλαμβανομένης της Πολιτικής Απορρήτου, της Δήλωσης Γνωστοποίησης Κινδύνων και όλων των εφαρμοστέων νόμων και κανονισμών.'
    }
  };

  const t = translations[language] || translations.en;

  const tocSections = [
    { title: language === 'fr' ? 'Définitions' : language === 'it' ? 'Definizioni' : language === 'de' ? 'Definitionen' : language === 'es' ? 'Definiciones' : language === 'el' ? 'Ορισμοί' : 'Definitions', id: 'definitions' },
    { title: language === 'fr' ? 'Acceptation des Conditions' : language === 'it' ? 'Accettazione dei Termini' : language === 'de' ? 'Annahme der Bedingungen' : language === 'es' ? 'Aceptación de Términos' : language === 'el' ? 'Αποδοχή Όρων' : 'Acceptance of Terms', id: 'acceptance-of-terms' },
    { title: language === 'fr' ? 'Éligibilité et Inscription au Compte' : language === 'it' ? 'Idoneità e Registrazione Account' : language === 'de' ? 'Berechtigung und Kontoregistrierung' : language === 'es' ? 'Elegibilidad y Registro de Cuenta' : language === 'el' ? 'Επιλεξιμότητα και Εγγραφή Λογαριασμού' : 'Eligibility and Account Registration', id: 'eligibility-and-account-registration' },
    { title: language === 'fr' ? 'KYC et Vérification d\'Identité' : language === 'it' ? 'KYC e Verifica Identità' : language === 'de' ? 'KYC und Identitätsprüfung' : language === 'es' ? 'KYC y Verificación de Identidad' : language === 'el' ? 'KYC και Επαλήθευση Ταυτότητας' : 'KYC and Identity Verification', id: 'kyc-and-identity-verification' },
    { title: language === 'fr' ? 'Services Fournis' : language === 'it' ? 'Servizi Forniti' : language === 'de' ? 'Erbrachte Dienstleistungen' : language === 'es' ? 'Servicios Prestados' : language === 'el' ? 'Παρεχόμενες Υπηρεσίες' : 'Services Provided', id: 'services-provided' },
    { title: language === 'fr' ? 'Services de Cryptomonnaie' : language === 'it' ? 'Servizi di Criptovaluta' : language === 'de' ? 'Kryptowährungsdienste' : language === 'es' ? 'Servicios de Criptomoneda' : language === 'el' ? 'Υπηρεσίες Κρυπτονομισμάτων' : 'Cryptocurrency Services', id: 'cryptocurrency-services' },
    { title: language === 'fr' ? 'Frais et Paiements' : language === 'it' ? 'Commissioni e Pagamenti' : language === 'de' ? 'Gebühren und Zahlungen' : language === 'es' ? 'Tarifas y Pagos' : language === 'el' ? 'Προμήθειες και Πληρωμές' : 'Fees and Payments', id: 'fees-and-payments' },
    { title: language === 'fr' ? 'Divulgation des Risques' : language === 'it' ? 'Divulgazione Rischi' : language === 'de' ? 'Risikooffenlegung' : language === 'es' ? 'Divulgación de Riesgos' : language === 'el' ? 'Γνωστοποίηση Κινδύνων' : 'Risk Disclosure', id: 'risk-disclosure' },
    { title: language === 'fr' ? 'Sécurité du Compte' : language === 'it' ? 'Sicurezza Account' : language === 'de' ? 'Kontosicherheit' : language === 'es' ? 'Seguridad de Cuenta' : language === 'el' ? 'Ασφάλεια Λογαριασμού' : 'Account Security', id: 'account-security' },
    { title: language === 'fr' ? 'Activités Interdites' : language === 'it' ? 'Attività Proibite' : language === 'de' ? 'Verbotene Aktivitäten' : language === 'es' ? 'Actividades Prohibidas' : language === 'el' ? 'Απαγορευμένες Δραστηριότητες' : 'Prohibited Activities', id: 'prohibited-activities' },
    { title: language === 'fr' ? 'Conformité et Réglementation' : language === 'it' ? 'Conformità e Regolamentazione' : language === 'de' ? 'Compliance und Regulierung' : language === 'es' ? 'Cumplimiento y Regulación' : language === 'el' ? 'Συμμόρφωση και Κανονισμοί' : 'Compliance and Regulation', id: 'compliance-and-regulation' },
    { title: language === 'fr' ? 'Propriété Intellectuelle' : language === 'it' ? 'Proprietà Intellettuale' : language === 'de' ? 'Geistiges Eigentum' : language === 'es' ? 'Propiedad Intelectual' : language === 'el' ? 'Πνευματική Ιδιοκτησία' : 'Intellectual Property', id: 'intellectual-property' },
    { title: language === 'fr' ? 'Limitation de Responsabilité' : language === 'it' ? 'Limitazione Responsabilità' : language === 'de' ? 'Haftungsbeschränkung' : language === 'es' ? 'Limitación de Responsabilidad' : language === 'el' ? 'Περιορισμός Ευθύνης' : 'Limitation of Liability', id: 'limitation-of-liability' },
    { title: language === 'fr' ? 'Indemnisation' : language === 'it' ? 'Indennizzo' : language === 'de' ? 'Schadloshaltung' : language === 'es' ? 'Indemnización' : language === 'el' ? 'Αποζημίωση' : 'Indemnification', id: 'indemnification' },
    { title: language === 'fr' ? 'Résolution de Litiges' : language === 'it' ? 'Risoluzione Controversie' : language === 'de' ? 'Streitbeilegung' : language === 'es' ? 'Resolución de Disputas' : language === 'el' ? 'Επίλυση Διαφορών' : 'Dispute Resolution', id: 'dispute-resolution' },
    { title: language === 'fr' ? 'Résiliation' : language === 'it' ? 'Risoluzione' : language === 'de' ? 'Kündigung' : language === 'es' ? 'Terminación' : language === 'el' ? 'Τερματισμός' : 'Termination', id: 'termination' },
    { title: language === 'fr' ? 'Modifications' : language === 'it' ? 'Modifiche' : language === 'de' ? 'Änderungen' : language === 'es' ? 'Modificaciones' : language === 'el' ? 'Τροποποιήσεις' : 'Amendments', id: 'amendments' },
    { title: language === 'fr' ? 'Dispositions Générales' : language === 'it' ? 'Disposizioni Generali' : language === 'de' ? 'Allgemeine Bestimmungen' : language === 'es' ? 'Disposiciones Generales' : language === 'el' ? 'Γενικές Διατάξεις' : 'General Provisions', id: 'general-provisions' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <Scale size={56} className="text-[#D00000] w-12 h-12 sm:w-14 sm:h-14" />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
              <p className="text-[#E5E5E5] text-sm sm:text-base">{t.lastUpdated}</p>
            </div>
          </div>
          <p className="text-[#F5F5F5] text-sm sm:text-base leading-relaxed max-w-4xl">
            {t.intro}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <LegalNotice type="important" title={language === 'fr' ? 'IMPORTANT: ACCORD JURIDIQUEMENT CONTRAIGNANT' : language === 'it' ? 'IMPORTANTE: ACCORDO LEGALMENTE VINCOLANTE' : language === 'de' ? 'WICHTIG: RECHTSVERBINDLICHE VEREINBARUNG' : language === 'es' ? 'IMPORTANTE: ACUERDO LEGALMENTE VINCULANTE' : language === 'el' ? 'ΣΗΜΑΝΤΙΚΟ: ΝΟΜΙΚΑ ΔΕΣΜΕΥΤΙΚΗ ΣΥΜΦΩΝΙΑ' : 'IMPORTANT: LEGALLY BINDING AGREEMENT'}>
          <p>{t.acknowledgment}</p>
        </LegalNotice>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12 mt-8">
          <TableOfContents sections={tocSections} title={t.tableOfContentsTitle} />

          <LegalSection title={tocSections[0].title} id={tocSections[0].id} icon={<FileText size={24} />}>
            <p className="text-sm sm:text-base">
              {language === 'fr' ? 'Aux fins du présent Accord, les termes suivants auront les significations qui leur sont attribuées :'
                : language === 'it' ? 'Ai fini del presente Accordo, i seguenti termini avranno i significati loro assegnati:'
                : language === 'de' ? 'Für die Zwecke dieser Vereinbarung haben die folgenden Begriffe die ihnen zugewiesenen Bedeutungen:'
                : language === 'es' ? 'Para los fines de este Acuerdo, los siguientes términos tendrán los significados que se les asignan:'
                : language === 'el' ? 'Για τους σκοπούς αυτής της Συμφωνίας, οι ακόλουθοι όροι θα έχουν τις ακόλουθες έννοιες:'
                : 'For purposes of this Agreement, the following terms shall have the meanings assigned to them:'}
            </p>
            <LegalList items={[
              language === 'fr' ? '"Services" désigne tous les services bancaires, financiers et de cri cryptomonnaie fournis par Aareal Bank AG.'
                : language === 'it' ? '"Servizi" significa tutti i servizi bancari, finanziari e di criptovaluta forniti da Aareal Bank AG.'
                : language === 'de' ? '"Dienste" bedeutet alle von Aareal Bank AG bereitgestellten Bank-, Finanz- und Kryptowährungsdienste.'
                : language === 'es' ? '"Servicios" significa todos los servicios bancarios, financieros y de criptomonedas proporcionados por Aareal Bank AG.'
                : language === 'el' ? '"Υπηρεσίες" σημαίνει όλες τις τραπεζικές, χρηματοοικονομικές και υπηρεσίες κρυπτονομισμάτων που παρέχονται από την Aareal Bank AG.'
                : '"Services" means all banking, financial, and cryptocurrency services provided by Aareal Bank AG.',
              language === 'fr' ? '"Compte" désigne tout compte ouvert par vous auprès de Aareal Bank AG.'
                : language === 'it' ? '"Conto" significa qualsiasi conto da te aperto presso Aareal Bank AG.'
                : language === 'de' ? '"Konto" bedeutet jedes von Ihnen bei Aareal Bank AG eröffnete Konto.'
                : language === 'es' ? '"Cuenta" significa cualquier cuenta abierta por usted con Aareal Bank AG.'
                : language === 'el' ? '"Λογαριασμός" σημαίνει οποιονδήποτε λογαριασμό που ανοίγετε με την Aareal Bank AG.'
                : '"Account" means any account opened by you with Aareal Bank AG.',
              language === 'fr' ? '"Actifs Numériques" inclut les cryptomonnaies, jetons et autres actifs basés sur la blockchain.'
                : language === 'it' ? '"Attività Digitali" include criptovalute, token e altre attività basate su blockchain.'
                : language === 'de' ? '"Digitale Vermögenswerte" umfasst Kryptowährungen, Token und andere Blockchain-basierte Vermögenswerte.'
                : language === 'es' ? '"Activos Digitales" incluye criptomonedas, tokens y otros activos basados en blockchain.'
                : language === 'el' ? '"Ψηφιακά Περιουσιακά Στοιχεία" περιλαμβάνει κρυπτονομίσματα, tokens και άλλα περιουσιακά στοιχεία που βασίζονται σε blockchain.'
                : '"Digital Assets" includes cryptocurrencies, tokens, and other blockchain-based assets.',
              language === 'fr' ? '"Lois Applicables" désigne toutes les lois, règlements et directives applicables de Malte et de l\'UE.'
                : language === 'it' ? '"Leggi Applicabili" significa tutte le leggi, regolamenti e direttive applicabili di Malta e dell\'UE.'
                : language === 'de' ? '"Anwendbare Gesetze" bedeutet alle anwendbaren Gesetze, Vorschriften und Richtlinien Maltas und der EU.'
                : language === 'es' ? '"Leyes Aplicables" significa todas las leyes, regulaciones y directivas aplicables de Malta y la UE.'
                : language === 'el' ? '"Εφαρμοστέοι Νόμοι" σημαίνει όλους τους εφαρμοστέους νόμους, κανονισμούς και οδηγίες της Μάλτας και της ΕΕ.'
                : '"Applicable Laws" means all applicable laws, regulations, and directives of Malta and the EU.'
            ]} />
          </LegalSection>

          <LegalSection title={tocSections[1].title} id={tocSections[1].id} icon={<FileText size={24} />}>
            <p className="text-sm sm:text-base">
              {language === 'fr' ? 'En créant un compte, en accédant à notre plateforme ou en utilisant nos services de quelque manière que ce soit, vous formez un contrat juridiquement exécutoire avec Aareal Bank AG. Cette acceptation est manifestée par : (a) la création d\'un compte, (b) la conclusion d\'une transaction, (c) l\'utilisation de nos services, ou (d) l\'accès à notre plateforme. Vous déclarez que vous avez l\'autorité légale pour conclure cet Accord et que vous n\'êtes soumis à aucune restriction légale qui vous empêcherait d\'entrer dans cet Accord.'
                : language === 'it' ? 'Creando un conto, accedendo alla nostra piattaforma o utilizzando i nostri servizi in qualsiasi modo, formi un contratto legalmente esecutivo con Aareal Bank AG. Questa accettazione è manifestata da: (a) creazione di un conto, (b) completamento di una transazione, (c) utilizzo dei nostri servizi, o (d) accesso alla nostra piattaforma. Dichiari di avere l\'autorità legale per stipulare questo Accordo e di non essere soggetto ad alcuna restrizione legale che ti impedirebbe di stipulare questo Accordo.'
                : language === 'de' ? 'Durch das Erstellen eines Kontos, den Zugriff auf unsere Plattform oder die Nutzung unserer Dienste in irgendeiner Weise schließen Sie einen rechtsverbindlichen Vertrag mit Aareal Bank AG ab. Diese Annahme wird durch: (a) Kontoerstellung, (b) Abschluss einer Transaktion, (c) Nutzung unserer Dienste oder (d) Zugriff auf unsere Plattform manifestiert. Sie erklären, dass Sie die gesetzliche Befugnis haben, diese Vereinbarung abzuschließen, und dass Sie keinen gesetzlichen Beschränkungen unterliegen, die Sie daran hindern würden, diese Vereinbarung abzuschließen.'
                : language === 'es' ? 'Al crear una cuenta, acceder a nuestra plataforma o utilizar nuestros servicios de cualquier manera, forma un contrato legalmente ejecutable con Aareal Bank AG. Esta aceptación se manifiesta mediante: (a) creación de cuenta, (b) completar una transacción, (c) uso de nuestros servicios, o (d) acceso a nuestra plataforma. Usted declara que tiene la autoridad legal para celebrar este Acuerdo y que no está sujeto a ninguna restricción legal que le impida celebrar este Acuerdo.'
                : language === 'el' ? 'Δημιουργώντας λογαριασμό, αποκτώντας πρόσβαση στην πλατφόρμα μας ή χρησιμοποιώντας τις υπηρεσίες μας με οποιονδήποτε τρόπο, σχηματίζετε ένα νομικά εκτελεστό συμβόλαιο με την Aareal Bank AG. Αυτή η αποδοχή εκδηλώνεται με: (α) δημιουργία λογαριασμού, (β) ολοκλήρωση συναλλαγής, (γ) χρήση των υπηρεσιών μας, ή (δ) πρόσβαση στην πλατφόρμα μας. Δηλώνετε ότι έχετε τη νομική εξουσία να συνάψετε αυτή τη Συμφωνία και ότι δεν υπόκεισθε σε κανέναν νομικό περιορισμό που θα σας εμπόδιζε να συνάψετε αυτή τη Συμφωνία.'
                : 'By creating an account, accessing our platform, or using our services in any way, you form a legally enforceable contract with Aareal Bank AG. This acceptance is manifested by: (a) account creation, (b) completing a transaction, (c) using our services, or (d) accessing our platform. You represent that you have the legal authority to enter into this Agreement and that you are not subject to any legal restrictions that would prevent you from entering into this Agreement.'}
            </p>
          </LegalSection>

          <LegalSection title={tocSections[2].title} id={tocSections[2].id} icon={<Users size={24} />}>
            <LegalSubsection title={language === 'fr' ? 'Critères d\'Éligibilité' : language === 'it' ? 'Criteri di Idoneità' : language === 'de' ? 'Zulassungskriterien' : language === 'es' ? 'Criterios de Elegibilidad' : language === 'el' ? 'Κριτήρια Επιλεξιμότητας' : 'Eligibility Criteria'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Pour être éligible à nos services, vous devez :'
                  : language === 'it' ? 'Per essere idoneo ai nostri servizi, devi:'
                  : language === 'de' ? 'Um für unsere Dienste berechtigt zu sein, müssen Sie:'
                  : language === 'es' ? 'Para ser elegible para nuestros servicios, debe:'
                  : language === 'el' ? 'Για να είστε επιλέξιμοι για τις υπηρεσίες μας, πρέπει:'
                  : 'To be eligible for our services, you must:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Avoir au moins 18 ans (ou l\'âge de la majorité dans votre juridiction)'
                  : language === 'it' ? 'Avere almeno 18 anni (o l\'età della maggiore età nella tua giurisdizione)'
                  : language === 'de' ? 'Mindestens 18 Jahre alt sein (oder das Volljährigkeitsalter in Ihrer Gerichtsbarkeit)'
                  : language === 'es' ? 'Tener al menos 18 años (o la edad de mayoría en su jurisdicción)'
                  : language === 'el' ? 'Να είστε τουλάχιστον 18 ετών (ή την ηλικία ενηλικίωσης στη δικαιοδοσία σας)'
                  : 'Be at least 18 years old (or the age of majority in your jurisdiction)',
                language === 'fr' ? 'Posséder la capacité juridique de conclure des contrats contraignants'
                  : language === 'it' ? 'Possedere la capacità giuridica di stipulare contratti vincolanti'
                  : language === 'de' ? 'Die Rechtsfähigkeit besitzen, verbindliche Verträge abzuschließen'
                  : language === 'es' ? 'Poseer la capacidad legal para celebrar contratos vinculantes'
                  : language === 'el' ? 'Να έχετε νομική ικανότητα να συνάπτετε δεσμευτικές συμβάσεις'
                  : 'Possess the legal capacity to enter into binding contracts',
                language === 'fr' ? 'Ne pas être résident d\'une juridiction où nos services sont interdits'
                  : language === 'it' ? 'Non essere residente in una giurisdizione dove i nostri servizi sono vietati'
                  : language === 'de' ? 'Kein Einwohner einer Gerichtsbarkeit sein, in der unsere Dienste verboten sind'
                  : language === 'es' ? 'No ser residente de una jurisdicción donde nuestros servicios están prohibidos'
                  : language === 'el' ? 'Να μην είστε κάτοικος δικαιοδοσίας όπου οι υπηρεσίες μας απαγορεύονται'
                  : 'Not be a resident of a jurisdiction where our services are prohibited',
                language === 'fr' ? 'Ne pas figurer sur une liste de sanctions ou de personnes interdites'
                  : language === 'it' ? 'Non essere presente in alcuna lista di sanzioni o persone vietate'
                  : language === 'de' ? 'Nicht auf einer Sanktions- oder verbotenen Personenliste stehen'
                  : language === 'es' ? 'No estar en ninguna lista de sanciones o personas prohibidas'
                  : language === 'el' ? 'Να μην βρίσκεστε σε καμία λίστα κυρώσεων ή απαγορευμένων ατόμων'
                  : 'Not be on any sanctions or prohibited persons list',
                language === 'fr' ? 'Fournir des informations véridiques, exactes et complètes'
                  : language === 'it' ? 'Fornire informazioni veritiere, accurate e complete'
                  : language === 'de' ? 'Wahrheitsgemäße, genaue und vollständige Informationen bereitstellen'
                  : language === 'es' ? 'Proporcionar información veraz, precisa y completa'
                  : language === 'el' ? 'Να παρέχετε αληθινές, ακριβείς και πλήρεις πληροφορίες'
                  : 'Provide truthful, accurate, and complete information'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Processus d\'Inscription' : language === 'it' ? 'Processo di Registrazione' : language === 'de' ? 'Registrierungsprozess' : language === 'es' ? 'Proceso de Registro' : language === 'el' ? 'Διαδικασία Εγγραφής' : 'Registration Process'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'L\'inscription au compte nécessite la fourniture d\'informations personnelles, y compris mais sans s\'y limiter : nom complet, date de naissance, adresse résidentielle, nationalité, numéro d\'identification fiscale, coordonnées et vérification biométrique si nécessaire. Vous reconnaissez que toutes les informations fournies sont soumises à vérification et que la fourniture d\'informations fausses ou trompeuses constitue une violation matérielle de cet Accord et peut entraîner une résiliation immédiate et des poursuites judiciaires.'
                  : language === 'it' ? 'La registrazione dell\'account richiede la fornitura di informazioni personali, inclusi ma non limitati a: nome completo, data di nascita, indirizzo residenziale, nazionalità, codice fiscale, dettagli di contatto e verifica biometrica se richiesto. Riconosci che tutte le informazioni fornite sono soggette a verifica e che la fornitura di informazioni false o fuorvianti costituisce una violazione materiale di questo Accordo e può comportare la risoluzione immediata e azioni legali.'
                  : language === 'de' ? 'Die Kontoregistrierung erfordert die Bereitstellung persönlicher Informationen, einschließlich, aber nicht beschränkt auf: vollständiger Name, Geburtsdatum, Wohnadresse, Staatsangehörigkeit, Steueridentifikationsnummer, Kontaktdaten und biometrische Überprüfung, falls erforderlich. Sie erkennen an, dass alle bereitgestellten Informationen einer Überprüfung unterliegen und dass die Bereitstellung falscher oder irreführender Informationen eine wesentliche Verletzung dieser Vereinbarung darstellt und zur sofortigen Kündigung und rechtlichen Schritten führen kann.'
                  : language === 'es' ? 'El registro de cuenta requiere proporcionar información personal, incluyendo pero no limitado a: nombre completo, fecha de nacimiento, dirección residencial, nacionalidad, número de identificación fiscal, detalles de contacto y verificación biométrica si es necesario. Reconoce que toda la información proporcionada está sujeta a verificación y que proporcionar información falsa o engañosa constituye una violación material de este Acuerdo y puede resultar en terminación inmediata y acciones legales.'
                  : language === 'el' ? 'Η εγγραφή λογαριασμού απαιτεί την παροχή προσωπικών πληροφοριών, συμπεριλαμβανομένων αλλά όχι περιοριζόμενων σε: πλήρες όνομα, ημερομηνία γέννησης, διεύθυνση κατοικίας, υπηκοότητα, αριθμός φορολογικού μητρώου, στοιχεία επικοινωνίας και βιομετρική επαλήθευση εάν απαιτείται. Αναγνωρίζετε ότι όλες οι παρεχόμενες πληροφορίες υπόκεινται σε επαλήθευση και ότι η παροχή ψευδών ή παραπλανητικών πληροφοριών αποτελεί ουσιώδη παραβίαση αυτής της Συμφωνίας και μπορεί να οδηγήσει σε άμεση λήξη και νομικές ενέργειες.'
                  : 'Account registration requires providing personal information, including but not limited to: full legal name, date of birth, residential address, nationality, tax identification number, contact details, and biometric verification if required. You acknowledge that all information provided is subject to verification and that providing false or misleading information constitutes a material breach of this Agreement and may result in immediate termination and legal action.'}
              </p>
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[3].title} id={tocSections[3].id} icon={<Shield size={24} />}>
            <LegalNotice type="warning" title={language === 'fr' ? 'VÉRIFICATION OBLIGATOIRE' : language === 'it' ? 'VERIFICA OBBLIGATORIA' : language === 'de' ? 'OBLIGATORISCHE ÜBERPRÜFUNG' : language === 'es' ? 'VERIFICACIÓN OBLIGATORIA' : language === 'el' ? 'ΥΠΟΧΡΕΩΤΙΚΗ ΕΠΑΛΗΘΕΥΣΗ' : 'MANDATORY VERIFICATION'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Conformément aux réglementations internationales contre le blanchiment d\'argent (AML), la connaissance du client (KYC) et le financement du terrorisme (CTF), Aareal Bank AG est légalement tenu de vérifier l\'identité de tous les clients. Le non-respect de ces exigences peut entraîner la suspension ou la fermeture du compte.'
                  : language === 'it' ? 'In conformità con i regolamenti internazionali antiriciclaggio (AML), Know Your Customer (KYC) e contrasto al finanziamento del terrorismo (CTF), Aareal Bank AG è legalmente obbligata a verificare l\'identità di tutti i clienti. Il mancato rispetto di questi requisiti può comportare la sospensione o la chiusura dell\'account.'
                  : language === 'de' ? 'In Übereinstimmung mit internationalen Vorschriften zur Geldwäschebekämpfung (AML), Kundenidentifizierung (KYC) und Terrorismusfinanzierung (CTF) ist Aareal Bank AG gesetzlich verpflichtet, die Identität aller Kunden zu überprüfen. Die Nichteinhaltung dieser Anforderungen kann zur Kontosperrung oder -schließung führen.'
                  : language === 'es' ? 'De acuerdo con las regulaciones internacionales contra el lavado de dinero (AML), Conozca a su Cliente (KYC) y financiamiento del terrorismo (CTF), Aareal Bank AG está legalmente obligada a verificar la identidad de todos los clientes. El incumplimiento de estos requisitos puede resultar en la suspensión o cierre de la cuenta.'
                  : language === 'el' ? 'Σύμφωνα με τους διεθνείς κανονισμούς κατά της νομιμοποίησης εσόδων από παράνομες δραστηριότητες (AML), Γνωρίστε τον Πελάτη σας (KYC) και της χρηματοδότησης της τρομοκρατίας (CTF), η Aareal Bank AG είναι νομικά υποχρεωμένη να επαληθεύει την ταυτότητα όλων των πελατών. Η μη συμμόρφωση με αυτές τις απαιτήσεις μπορεί να οδηγήσει σε αναστολή ή κλείσιμο λογαριασμού.'
                  : 'In compliance with international Anti-Money Laundering (AML), Know Your Customer (KYC), and Counter-Terrorism Financing (CTF) regulations, Aareal Bank AG is legally required to verify the identity of all clients. Failure to comply with these requirements may result in account suspension or closure.'}
              </p>
            </LegalNotice>

            <p className="text-sm sm:text-base mt-4">
              {language === 'fr' ? 'Vous devez fournir les documents suivants pour la vérification KYC :'
                : language === 'it' ? 'Devi fornire i seguenti documenti per la verifica KYC:'
                : language === 'de' ? 'Sie müssen die folgenden Dokumente für die KYC-Überprüfung bereitstellen:'
                : language === 'es' ? 'Debe proporcionar los siguientes documentos para la verificación KYC:'
                : language === 'el' ? 'Πρέπει να παράσχετε τα ακόλουθα έγγραφα για την επαλήθευση KYC:'
                : 'You must provide the following documents for KYC verification:'}
            </p>
            <LegalList items={[
              language === 'fr' ? 'Document d\'identité délivré par le gouvernement (passeport, permis de conduire, carte d\'identité nationale)'
                : language === 'it' ? 'Documento d\'identità rilasciato dal governo (passaporto, patente di guida, carta d\'identità nazionale)'
                : language === 'de' ? 'Von der Regierung ausgestelltes Ausweisdokument (Reisepass, Führerschein, Personalausweis)'
                : language === 'es' ? 'Documento de identidad emitido por el gobierno (pasaporte, licencia de conducir, tarjeta de identidad nacional)'
                : language === 'el' ? 'Έγγραφο ταυτότητας που εκδίδεται από την κυβέρνηση (διαβατήριο, άδεια οδήγησης, εθνική ταυτότητα)'
                : 'Government-issued identification document (passport, driver\'s license, national ID card)',
              language === 'fr' ? 'Preuve de résidence (facture de services publics, relevé bancaire, contrat de location)'
                : language === 'it' ? 'Prova di residenza (bolletta, estratto conto bancario, contratto di locazione)'
                : language === 'de' ? 'Nachweis der Residenz (Stromrechnung, Kontoauszug, Mietvertrag)'
                : language === 'es' ? 'Prueba de residencia (factura de servicios públicos, extracto bancario, contrato de alquiler)'
                : language === 'el' ? 'Απόδειξη διαμονής (λογαριασμός κοινής ωφέλειας, τραπεζικό αντίγραφο, μισθωτήριο συμβόλαιο)'
                : 'Proof of residence (utility bill, bank statement, lease agreement)',
              language === 'fr' ? 'Selfie ou vérification biométrique en direct'
                : language === 'it' ? 'Selfie o verifica biometrica dal vivo'
                : language === 'de' ? 'Selfie oder Live-biometrische Überprüfung'
                : language === 'es' ? 'Selfie o verificación biométrica en vivo'
                : language === 'el' ? 'Selfie ή ζωντανή βιομετρική επαλήθευση'
                : 'Selfie or live biometric verification',
              language === 'fr' ? 'Preuve de source de fonds (pour les transactions importantes)'
                : language === 'it' ? 'Prova della fonte dei fondi (per transazioni elevate)'
                : language === 'de' ? 'Nachweis der Geldquelle (für hohe Transaktionen)'
                : language === 'es' ? 'Prueba de origen de fondos (para transacciones altas)'
                : language === 'el' ? 'Απόδειξη πηγής κεφαλαίων (για υψηλές συναλλαγές)'
                : 'Proof of source of funds (for high-value transactions)'
            ]} />
          </LegalSection>

          <LegalSection title={tocSections[4].title} id={tocSections[4].id} icon={<FileText size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Aareal Bank AG fournit une gamme complète de services financiers, notamment :'
                : language === 'it' ? 'Aareal Bank AG fornisce una gamma completa di servizi finanziari, tra cui:'
                : language === 'de' ? 'Aareal Bank AG bietet eine umfassende Palette von Finanzdienstleistungen, einschließlich:'
                : language === 'es' ? 'Aareal Bank AG proporciona una gama completa de servicios financieros, que incluyen:'
                : language === 'el' ? 'Η Aareal Bank AG παρέχει ένα πλήρες φάσμα χρηματοοικονομικών υπηρεσιών, συμπεριλαμβανομένων:'
                : 'Aareal Bank AG provides a comprehensive range of financial services, including:'}
            </p>

            <LegalSubsection title={language === 'fr' ? 'Services Bancaires' : language === 'it' ? 'Servizi Bancari' : language === 'de' ? 'Bankdienstleistungen' : language === 'es' ? 'Servicios Bancarios' : language === 'el' ? 'Τραπεζικές Υπηρεσίες' : 'Banking Services'}>
              <LegalList items={[
                language === 'fr' ? 'Comptes de dépôt (épargne, courant, marché monétaire)'
                  : language === 'it' ? 'Conti di deposito (risparmio, corrente, mercato monetario)'
                  : language === 'de' ? 'Einlagenkonten (Spar-, Giro-, Geldmarktkonten)'
                  : language === 'es' ? 'Cuentas de depósito (ahorro, corriente, mercado monetario)'
                  : language === 'el' ? 'Λογαριασμοί καταθέσεων (αποταμίευσης, τρεχούμενοι, αγοράς χρήματος)'
                  : 'Deposit accounts (savings, checking, money market)',
                language === 'fr' ? 'Transferts électroniques (domestiques et internationaux)'
                  : language === 'it' ? 'Trasferimenti elettronici (nazionali e internazionali)'
                  : language === 'de' ? 'Elektronische Überweisungen (national und international)'
                  : language === 'es' ? 'Transferencias electrónicas (domésticas e internacionales)'
                  : language === 'el' ? 'Ηλεκτρονικές μεταφορές (εγχώριες και διεθνείς)'
                  : 'Electronic transfers (domestic and international)',
                language === 'fr' ? 'Émission de cartes de débit et de crédit'
                  : language === 'it' ? 'Emissione di carte di debito e credito'
                  : language === 'de' ? 'Debit- und Kreditkartenausstellung'
                  : language === 'es' ? 'Emisión de tarjetas de débito y crédito'
                  : language === 'el' ? 'Έκδοση χρεωστικών και πιστωτικών καρτών'
                  : 'Debit and credit card issuance',
                language === 'fr' ? 'Produits de prêt (personnel, commercial, hypothécaire)'
                  : language === 'it' ? 'Prodotti di prestito (personale, commerciale, ipotecario)'
                  : language === 'de' ? 'Kreditprodukte (persönlich, geschäftlich, hypothekarisch)'
                  : language === 'es' ? 'Productos de préstamo (personal, comercial, hipotecario)'
                  : language === 'el' ? 'Προϊόντα δανείων (προσωπικά, εμπορικά, στεγαστικά)'
                  : 'Loan products (personal, commercial, mortgage)'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Services d\'Investissement' : language === 'it' ? 'Servizi di Investimento' : language === 'de' ? 'Anlagedienstleistungen' : language === 'es' ? 'Servicios de Inversión' : language === 'el' ? 'Επενδυτικές Υπηρεσίες' : 'Investment Services'}>
              <LegalList items={[
                language === 'fr' ? 'Comptes de courtage et trading'
                  : language === 'it' ? 'Conti di intermediazione e trading'
                  : language === 'de' ? 'Makler- und Handelskonten'
                  : language === 'es' ? 'Cuentas de corretaje y negociación'
                  : language === 'el' ? 'Λογαριασμοί μεσιτείας και συναλλαγών'
                  : 'Brokerage and trading accounts',
                language === 'fr' ? 'Portefeuilles d\'investissement gérés'
                  : language === 'it' ? 'Portafogli di investimento gestiti'
                  : language === 'de' ? 'Verwaltete Anlageportfolios'
                  : language === 'es' ? 'Carteras de inversión administradas'
                  : language === 'el' ? 'Διαχειριζόμενα επενδυτικά χαρτοφυλάκια'
                  : 'Managed investment portfolios',
                language === 'fr' ? 'Planification de la retraite et produits de pension'
                  : language === 'it' ? 'Pianificazione pensionistica e prodotti pensionistici'
                  : language === 'de' ? 'Ruhestandsplanung und Pensionsprodukte'
                  : language === 'es' ? 'Planificación de jubilación y productos de pensiones'
                  : language === 'el' ? 'Σχεδιασμός συνταξιοδότησης και προϊόντα συντάξεων'
                  : 'Retirement planning and pension products',
                language === 'fr' ? 'Conseils et gestion de patrimoine'
                  : language === 'it' ? 'Consulenza e gestione patrimoniale'
                  : language === 'de' ? 'Vermögensberatung und -verwaltung'
                  : language === 'es' ? 'Asesoramiento y gestión patrimonial'
                  : language === 'el' ? 'Συμβουλευτική και διαχείριση περιουσίας'
                  : 'Wealth advisory and management'
              ]} />
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[5].title} id={tocSections[5].id} icon={<AlertTriangle size={24} />}>
            <LegalNotice type="important" title={language === 'fr' ? 'AVERTISSEMENT SUR LES RISQUES ÉLEVÉS' : language === 'it' ? 'AVVISO DI ALTO RISCHIO' : language === 'de' ? 'HOCHRISIKOWARNUNG' : language === 'es' ? 'ADVERTENCIA DE ALTO RIESGO' : language === 'el' ? 'ΠΡΟΕΙΔΟΠΟΙΗΣΗ ΥΨΗΛΟΥ ΚΙΝΔΥΝΟΥ' : 'HIGH RISK WARNING'}>
              <p className="text-sm sm:text-base font-bold mb-2">
                {language === 'fr' ? 'Le trading et l\'investissement en cryptomonnaie comportent des risques substantiels et ne conviennent pas à tous les investisseurs.'
                  : language === 'it' ? 'Il trading e l\'investimento in criptovalute comportano rischi sostanziali e non sono adatti a tutti gli investitori.'
                  : language === 'de' ? 'Kryptowährungs-Trading und -Investitionen bergen erhebliche Risiken und sind nicht für alle Anleger geeignet.'
                  : language === 'es' ? 'El comercio e inversión en criptomonedas conlleva riesgos sustanciales y no es adecuado para todos los inversores.'
                  : language === 'el' ? 'Η διαπραγμάτευση και επένδυση σε κρυπτονομίσματα ενέχει σημαντικούς κινδύνους και δεν είναι κατάλληλη για όλους τους επενδυτές.'
                  : 'Cryptocurrency trading and investment carry substantial risks and are not suitable for all investors.'}
              </p>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'La valeur des actifs numériques peut fluctuer considérablement et rapidement. Vous pourriez perdre tout votre capital investi. Ne tradez ou n\'investissez jamais plus que ce que vous pouvez vous permettre de perdre.'
                  : language === 'it' ? 'Il valore delle attività digitali può fluttuare in modo significativo e rapido. Potresti perdere tutto il tuo capitale investito. Non fare mai trading o investire più di quanto puoi permetterti di perdere.'
                  : language === 'de' ? 'Der Wert digitaler Vermögenswerte kann erheblich und schnell schwanken. Sie könnten Ihr gesamtes investiertes Kapital verlieren. Handeln oder investieren Sie niemals mehr, als Sie sich leisten können zu verlieren.'
                  : language === 'es' ? 'El valor de los activos digitales puede fluctuar significativamente y rápidamente. Podría perder todo su capital invertido. Nunca opere o invierta más de lo que pueda permitirse perder.'
                  : language === 'el' ? 'Η αξία των ψηφιακών περιουσιακών στοιχείων μπορεί να διακυμαίνεται σημαντικά και γρήγορα. Μπορεί να χάσετε όλο το επενδεδυμένο κεφάλαιό σας. Ποτέ μην κάνετε συναλλαγές ή επενδύσεις περισσότερα από όσα μπορείτε να αντέξετε να χάσετε.'
                  : 'The value of digital assets can fluctuate significantly and rapidly. You could lose your entire invested capital. Never trade or invest more than you can afford to lose.'}
              </p>
            </LegalNotice>

            <p className="text-sm sm:text-base mt-6 mb-4">
              {language === 'fr' ? 'Notre plateforme offre les services de cryptomonnaie suivants :'
                : language === 'it' ? 'La nostra piattaforma offre i seguenti servizi di criptovaluta:'
                : language === 'de' ? 'Unsere Plattform bietet die folgenden Kryptowährungsdienste:'
                : language === 'es' ? 'Nuestra plataforma ofrece los siguientes servicios de criptomonedas:'
                : language === 'el' ? 'Η πλατφόρμα μας προσφέρει τις ακόλουθες υπηρεσίες κρυπτονομισμάτων:'
                : 'Our platform offers the following cryptocurrency services:'}
            </p>
            <LegalList items={[
              language === 'fr' ? 'Achat, vente et échange de cryptomonnaies'
                : language === 'it' ? 'Acquisto, vendita e scambio di criptovalute'
                : language === 'de' ? 'Kauf, Verkauf und Tausch von Kryptowährungen'
                : language === 'es' ? 'Compra, venta e intercambio de criptomonedas'
                : language === 'el' ? 'Αγορά, πώληση και ανταλλαγή κρυπτονομισμάτων'
                : 'Buying, selling, and exchanging cryptocurrencies',
              language === 'fr' ? 'Services de garde de portefeuille sécurisés'
                : language === 'it' ? 'Servizi di custodia portafoglio sicuri'
                : language === 'de' ? 'Sichere Wallet-Verwahrdienste'
                : language === 'es' ? 'Servicios seguros de custodia de billeteras'
                : language === 'el' ? 'Ασφαλείς υπηρεσίες φύλαξης πορτοφολιού'
                : 'Secure wallet custody services',
              language === 'fr' ? 'Services de staking et de rendement'
                : language === 'it' ? 'Servizi di staking e rendimento'
                : language === 'de' ? 'Staking- und Ertragsdienstleistungen'
                : language === 'es' ? 'Servicios de staking y rendimiento'
                : language === 'el' ? 'Υπηρεσίες staking και απόδοσης'
                : 'Staking and yield services',
              language === 'fr' ? 'Trading de DeFi et intégration d\'échange'
                : language === 'it' ? 'Trading DeFi e integrazione exchange'
                : language === 'de' ? 'DeFi-Trading und Exchange-Integration'
                : language === 'es' ? 'Trading DeFi e integración de intercambios'
                : language === 'el' ? 'Συναλλαγές DeFi και ενσωμάτωση ανταλλαγής'
                : 'DeFi trading and exchange integration',
              language === 'fr' ? 'Transactions NFT et stockage d\'actifs numériques'
                : language === 'it' ? 'Transazioni NFT e archiviazione asset digitali'
                : language === 'de' ? 'NFT-Transaktionen und digitale Asset-Speicherung'
                : language === 'es' ? 'Transacciones NFT y almacenamiento de activos digitales'
                : language === 'el' ? 'Συναλλαγές NFT και αποθήκευση ψηφιακών περιουσιακών στοιχείων'
                : 'NFT transactions and digital asset storage'
            ]} />

            <p className="text-sm sm:text-base mt-6">
              {language === 'fr' ? 'Vous reconnaissez et acceptez que : Aareal Bank AG n\'offre aucune garantie concernant la performance des actifs numériques; les marchés de cryptomonnaie sont hautement volatils et non réglementés; les transactions blockchain sont irréversibles; et vous êtes seul responsable de toutes les décisions d\'investissement.'
                : language === 'it' ? 'Riconosci e accetti che: Aareal Bank AG non fornisce alcuna garanzia riguardo alla performance delle attività digitali; i mercati delle criptovalute sono altamente volatili e non regolamentati; le transazioni blockchain sono irreversibili; e sei l\'unico responsabile di tutte le decisioni di investimento.'
                : language === 'de' ? 'Sie erkennen an und akzeptieren, dass: Aareal Bank AG keine Garantien bezüglich der Wertentwicklung digitaler Vermögenswerte gibt; Kryptowährungsmärkte hochvolatil und unreguliert sind; Blockchain-Transaktionen irreversibel sind; und Sie allein für alle Anlageentscheidungen verantwortlich sind.'
                : language === 'es' ? 'Reconoce y acepta que: Aareal Bank AG no proporciona garantías sobre el rendimiento de activos digitales; los mercados de criptomonedas son altamente volátiles y no regulados; las transacciones blockchain son irreversibles; y usted es el único responsable de todas las decisiones de inversión.'
                : language === 'el' ? 'Αναγνωρίζετε και αποδέχεστε ότι: Η Aareal Bank AG δεν παρέχει εγγυήσεις σχετικά με την απόδοση ψηφιακών περιουσιακών στοιχείων· οι αγορές κρυπτονομισμάτων είναι ιδιαίτερα ασταθείς και μη ρυθμιζόμενες· οι συναλλαγές blockchain είναι μη αναστρέψιμες· και είστε αποκλειστικά υπεύθυνοι για όλες τις επενδυτικές αποφάσεις.'
                : 'You acknowledge and accept that: Aareal Bank AG provides no warranties regarding digital asset performance; cryptocurrency markets are highly volatile and unregulated; blockchain transactions are irreversible; and you are solely responsible for all investment decisions.'}
            </p>
          </LegalSection>

          <LegalSection title={tocSections[6].title} id={tocSections[6].id} icon={<FileText size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Aareal Bank AG facture des frais pour ses services conformément au barème de frais publié. Tous les frais sont énumérés dans votre tableau de bord de compte et notre site Web. En utilisant nos services, vous acceptez de payer tous les frais applicables.'
                : language === 'it' ? 'Aareal Bank AG addebita commissioni per i suoi servizi in conformità con il programma tariffario pubblicato. Tutte le commissioni sono elencate nel tuo pannello account e sul nostro sito web. Utilizzando i nostri servizi, accetti di pagare tutte le commissioni applicabili.'
                : language === 'de' ? 'Aareal Bank AG erhebt Gebühren für seine Dienstleistungen gemäß dem veröffentlichten Gebührenplan. Alle Gebühren sind in Ihrem Konto-Dashboard und auf unserer Website aufgeführt. Durch die Nutzung unserer Dienste stimmen Sie zu, alle anfallenden Gebühren zu zahlen.'
                : language === 'es' ? 'Aareal Bank AG cobra tarifas por sus servicios de acuerdo con el programa de tarifas publicado. Todas las tarifas se enumeran en su panel de cuenta y en nuestro sitio web. Al utilizar nuestros servicios, acepta pagar todas las tarifas aplicables.'
                : language === 'el' ? 'Η Aareal Bank AG χρεώνει προμήθειες για τις υπηρεσίες της σύμφωνα με το δημοσιευμένο χρονοδιάγραμμα προμηθειών. Όλες οι προμήθειες αναφέρονται στον πίνακα ελέγχου του λογαριασμού σας και στον ιστότοπό μας. Χρησιμοποιώντας τις υπηρεσίες μας, συμφωνείτε να πληρώσετε όλες τις εφαρμοστέες προμήθειες.'
                : 'Aareal Bank AG charges fees for its services in accordance with its published fee schedule. All fees are listed in your account dashboard and on our website. By using our services, you agree to pay all applicable fees.'}
            </p>

            <LegalSubsection title={language === 'fr' ? 'Types de Frais' : language === 'it' ? 'Tipi di Commissioni' : language === 'de' ? 'Gebührenarten' : language === 'es' ? 'Tipos de Tarifas' : language === 'el' ? 'Τύποι Προμηθειών' : 'Fee Types'}>
              <LegalList items={[
                language === 'fr' ? 'Frais de transaction (variables selon le type de transaction)'
                  : language === 'it' ? 'Commissioni di transazione (variabili in base al tipo di transazione)'
                  : language === 'de' ? 'Transaktionsgebühren (variabel je nach Transaktionstyp)'
                  : language === 'es' ? 'Tarifas de transacción (variables según el tipo de transacción)'
                  : language === 'el' ? 'Προμήθειες συναλλαγών (μεταβλητές ανάλογα με τον τύπο συναλλαγής)'
                  : 'Transaction fees (variable based on transaction type)',
                language === 'fr' ? 'Frais de maintenance de compte (mensuels ou annuels)'
                  : language === 'it' ? 'Commissioni di manutenzione conto (mensili o annuali)'
                  : language === 'de' ? 'Kontoführungsgebühren (monatlich oder jährlich)'
                  : language === 'es' ? 'Tarifas de mantenimiento de cuenta (mensuales o anuales)'
                  : language === 'el' ? 'Προμήθειες συντήρησης λογαριασμού (μηνιαίες ή ετήσιες)'
                  : 'Account maintenance fees (monthly or annual)',
                language === 'fr' ? 'Frais de trading et spread (cryptomonnaie et forex)'
                  : language === 'it' ? 'Commissioni di trading e spread (criptovaluta e forex)'
                  : language === 'de' ? 'Handelsgebühren und Spreads (Kryptowährung und Forex)'
                  : language === 'es' ? 'Tarifas de trading y spread (criptomonedas y forex)'
                  : language === 'el' ? 'Προμήθειες συναλλαγών και spread (κρυπτονομίσματα και forex)'
                  : 'Trading fees and spreads (cryptocurrency and forex)',
                language === 'fr' ? 'Frais de retrait (réseau et traitement)'
                  : language === 'it' ? 'Commissioni di prelievo (rete e elaborazione)'
                  : language === 'de' ? 'Abhebungsgebühren (Netzwerk und Verarbeitung)'
                  : language === 'es' ? 'Tarifas de retiro (red y procesamiento)'
                  : language === 'el' ? 'Προμήθειες ανάληψης (δίκτυο και επεξεργασία)'
                  : 'Withdrawal fees (network and processing)',
                language === 'fr' ? 'Frais de dépôt (pour certaines méthodes)'
                  : language === 'it' ? 'Commissioni di deposito (per alcuni metodi)'
                  : language === 'de' ? 'Einzahlungsgebühren (für bestimmte Methoden)'
                  : language === 'es' ? 'Tarifas de depósito (para ciertos métodos)'
                  : language === 'el' ? 'Προμήθειες κατάθεσης (για ορισμένες μεθόδους)'
                  : 'Deposit fees (for certain methods)',
                language === 'fr' ? 'Frais d\'inactivité (pour les comptes dormants)'
                  : language === 'it' ? 'Commissioni di inattività (per conti dormienti)'
                  : language === 'de' ? 'Inaktivitätsgebühren (für ruhende Konten)'
                  : language === 'es' ? 'Tarifas de inactividad (para cuentas inactivas)'
                  : language === 'el' ? 'Προμήθειες αδράνειας (για ανενεργούς λογαριασμούς)'
                  : 'Inactivity fees (for dormant accounts)'
              ]} />
            </LegalSubsection>

            <LegalNotice type="info" title={language === 'fr' ? 'MODIFICATION DES FRAIS' : language === 'it' ? 'MODIFICA COMMISSIONI' : language === 'de' ? 'GEBÜHRENÄNDERUNG' : language === 'es' ? 'MODIFICACIÓN DE TARIFAS' : language === 'el' ? 'ΤΡΟΠΟΠΟΙΗΣΗ ΠΡΟΜΗΘΕΙΩΝ' : 'FEE MODIFICATION'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Aareal Bank AG se réserve le droit de modifier ses frais moyennant un préavis de trente (30) jours. Vous serez informé de toute modification de frais par email et notification dans l\'application. L\'utilisation continue des services après les modifications constitue l\'acceptation des nouveaux frais.'
                  : language === 'it' ? 'Aareal Bank AG si riserva il diritto di modificare le sue commissioni con un preavviso di trenta (30) giorni. Sarai informato di eventuali modifiche alle commissioni tramite email e notifica nell\'app. L\'uso continuato dei servizi dopo le modifiche costituisce accettazione delle nuove commissioni.'
                  : language === 'de' ? 'Aareal Bank AG behält sich das Recht vor, seine Gebühren mit einer Frist von dreißig (30) Tagen zu ändern. Sie werden über alle Gebührenänderungen per E-Mail und App-Benachrichtigung informiert. Die fortgesetzte Nutzung der Dienste nach den Änderungen stellt die Annahme der neuen Gebühren dar.'
                  : language === 'es' ? 'Aareal Bank AG se reserva el derecho de modificar sus tarifas con un aviso de treinta (30) días. Se le notificará de cualquier cambio en las tarifas por correo electrónico y notificación de la aplicación. El uso continuado de los servicios después de los cambios constituye aceptación de las nuevas tarifas.'
                  : language === 'el' ? 'Η Aareal Bank AG διατηρεί το δικαίωμα να τροποποιήσει τις προμήθειές της με προειδοποίηση τριάντα (30) ημερών. Θα ενημερωθείτε για τυχόν αλλαγές στις προμήθειες μέσω email και ειδοποίησης εφαρμογής. Η συνεχιζόμενη χρήση των υπηρεσιών μετά τις αλλαγές συνιστά αποδοχή των νέων προμηθειών.'
                  : 'Aareal Bank AG reserves the right to modify its fees with thirty (30) days notice. You will be notified of any fee changes via email and in-app notification. Continued use of services after changes constitutes acceptance of the new fees.'}
              </p>
            </LegalNotice>
          </LegalSection>

          <LegalSection title={tocSections[7].title} id={tocSections[7].id} icon={<AlertTriangle size={24} />}>
            <LegalNotice type="important" title={language === 'fr' ? 'DIVULGATION COMPLÈTE DES RISQUES' : language === 'it' ? 'DIVULGAZIONE COMPLETA DEI RISCHI' : language === 'de' ? 'VOLLSTÄNDIGE RISIKOOFFENLEGUNG' : language === 'es' ? 'DIVULGACIÓN COMPLETA DE RIESGOS' : language === 'el' ? 'ΠΛΗΡΗΣ ΓΝΩΣΤΟΠΟΙΗΣΗ ΚΙΝΔΥΝΩΝ' : 'COMPREHENSIVE RISK DISCLOSURE'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Vous devez lire notre Déclaration de Divulgation des Risques complète avant d\'utiliser nos services. Les investissements financiers comportent des risques inhérents, y compris mais sans s\'y limiter la perte totale de capital.'
                  : language === 'it' ? 'Devi leggere la nostra Dichiarazione di Divulgazione dei Rischi completa prima di utilizzare i nostri servizi. Gli investimenti finanziari comportano rischi intrinseci, inclusa ma non limitata alla perdita totale del capitale.'
                  : language === 'de' ? 'Sie müssen unsere vollständige Risikooffenlegungserklärung lesen, bevor Sie unsere Dienste nutzen. Finanzinvestitionen bergen inhärente Risiken, einschließlich, aber nicht beschränkt auf den vollständigen Kapitalverlust.'
                  : language === 'es' ? 'Debe leer nuestra Declaración de Divulgación de Riesgos completa antes de usar nuestros servicios. Las inversiones financieras conllevan riesgos inherentes, incluida pero no limitada a la pérdida total de capital.'
                  : language === 'el' ? 'Πρέπει να διαβάσετε την πλήρη Δήλωση Γνωστοποίησης Κινδύνων πριν χρησιμοποιήσετε τις υπηρεσίες μας. Οι χρηματοοικονομικές επενδύσεις ενέχουν εγγενείς κινδύνους, συμπεριλαμβανομένης αλλά όχι περιοριζόμενης στην πλήρη απώλεια κεφαλαίου.'
                  : 'You must read our complete Risk Disclosure Statement before using our services. Financial investments carry inherent risks, including but not limited to total loss of capital.'}
              </p>
            </LegalNotice>

            <LegalSubsection title={language === 'fr' ? 'Risques de Marché' : language === 'it' ? 'Rischi di Mercato' : language === 'de' ? 'Marktrisiken' : language === 'es' ? 'Riesgos de Mercado' : language === 'el' ? 'Κίνδυνοι Αγοράς' : 'Market Risks'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Les marchés financiers sont soumis à la volatilité et aux fluctuations de prix. Les facteurs suivants peuvent affecter vos investissements :'
                  : language === 'it' ? 'I mercati finanziari sono soggetti a volatilità e fluttuazioni di prezzo. I seguenti fattori possono influenzare i tuoi investimenti:'
                  : language === 'de' ? 'Finanzmärkte unterliegen Volatilität und Preisschwankungen. Die folgenden Faktoren können Ihre Investitionen beeinflussen:'
                  : language === 'es' ? 'Los mercados financieros están sujetos a volatilidad y fluctuaciones de precios. Los siguientes factores pueden afectar sus inversiones:'
                  : language === 'el' ? 'Οι χρηματοπιστωτικές αγορές υπόκεινται σε αστάθεια και διακυμάνσεις τιμών. Οι ακόλουθοι παράγοντες μπορεί να επηρεάσουν τις επενδύσεις σας:'
                  : 'Financial markets are subject to volatility and price fluctuations. The following factors may affect your investments:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Conditions économiques mondiales et instabilité géopolitique'
                  : language === 'it' ? 'Condizioni economiche globali e instabilità geopolitica'
                  : language === 'de' ? 'Globale Wirtschaftsbedingungen und geopolitische Instabilität'
                  : language === 'es' ? 'Condiciones económicas globales e inestabilidad geopolítica'
                  : language === 'el' ? 'Παγκόσμιες οικονομικές συνθήκες και γεωπολιτική αστάθεια'
                  : 'Global economic conditions and geopolitical instability',
                language === 'fr' ? 'Modifications réglementaires et changements de politique gouvernementale'
                  : language === 'it' ? 'Cambiamenti normativi e modifiche delle politiche governative'
                  : language === 'de' ? 'Regulatorische Änderungen und Regierungspolitikänderungen'
                  : language === 'es' ? 'Cambios regulatorios y modificaciones de políticas gubernamentales'
                  : language === 'el' ? 'Ρυθμιστικές αλλαγές και αλλαγές κυβερνητικής πολιτικής'
                  : 'Regulatory changes and government policy shifts',
                language === 'fr' ? 'Fluctuations des taux d\'intérêt et politiques de la banque centrale'
                  : language === 'it' ? 'Fluttuazioni dei tassi di interesse e politiche della banca centrale'
                  : language === 'de' ? 'Zinsschwankungen und Zentralbankpolitik'
                  : language === 'es' ? 'Fluctuaciones de tasas de interés y políticas del banco central'
                  : language === 'el' ? 'Διακυμάνσεις επιτοκίων και πολιτικές κεντρικής τράπεζας'
                  : 'Interest rate fluctuations and central bank policies',
                language === 'fr' ? 'Risques de liquidité et volatilité du marché'
                  : language === 'it' ? 'Rischi di liquidità e volatilità del mercato'
                  : language === 'de' ? 'Liquiditätsrisiken und Marktvolatilität'
                  : language === 'es' ? 'Riesgos de liquidez y volatilidad del mercado'
                  : language === 'el' ? 'Κίνδυνοι ρευστότητας και αστάθεια αγοράς'
                  : 'Liquidity risks and market volatility',
                language === 'fr' ? 'Risques de change pour les transactions internationales'
                  : language === 'it' ? 'Rischi di cambio per transazioni internazionali'
                  : language === 'de' ? 'Währungsrisiken für internationale Transaktionen'
                  : language === 'es' ? 'Riesgos de tipo de cambio para transacciones internacionales'
                  : language === 'el' ? 'Συναλλαγματικοί κίνδυνοι για διεθνείς συναλλαγές'
                  : 'Currency exchange risks for international transactions'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Risques Technologiques' : language === 'it' ? 'Rischi Tecnologici' : language === 'de' ? 'Technologische Risiken' : language === 'es' ? 'Riesgos Tecnológicos' : language === 'el' ? 'Τεχνολογικοί Κίνδυνοι' : 'Technology Risks'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Notre plateforme repose sur la technologie, qui comporte des risques inhérents :'
                  : language === 'it' ? 'La nostra piattaforma si basa sulla tecnologia, che comporta rischi intrinseci:'
                  : language === 'de' ? 'Unsere Plattform basiert auf Technologie, die inhärente Risiken birgt:'
                  : language === 'es' ? 'Nuestra plataforma se basa en tecnología, que conlleva riesgos inherentes:'
                  : language === 'el' ? 'Η πλατφόρμα μας βασίζεται στην τεχνολογία, η οποία ενέχει εγγενείς κινδύνους:'
                  : 'Our platform relies on technology, which carries inherent risks:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Pannes système, temps d\'arrêt et problèmes de maintenance'
                  : language === 'it' ? 'Guasti di sistema, tempi di inattività e problemi di manutenzione'
                  : language === 'de' ? 'Systemausfälle, Ausfallzeiten und Wartungsprobleme'
                  : language === 'es' ? 'Fallas del sistema, tiempo de inactividad y problemas de mantenimiento'
                  : language === 'el' ? 'Βλάβες συστήματος, διακοπές λειτουργίας και προβλήματα συντήρησης'
                  : 'System failures, downtime, and maintenance issues',
                language === 'fr' ? 'Menaces de cybersécurité, piratage et violations de données'
                  : language === 'it' ? 'Minacce alla sicurezza informatica, hacking e violazioni dei dati'
                  : language === 'de' ? 'Cybersicherheitsbedrohungen, Hacking und Datenschutzverletzungen'
                  : language === 'es' ? 'Amenazas de ciberseguridad, piratería y violaciones de datos'
                  : language === 'el' ? 'Απειλές κυβερνοασφάλειας, hacking και παραβιάσεις δεδομένων'
                  : 'Cybersecurity threats, hacking, and data breaches',
                language === 'fr' ? 'Bogues logiciels, erreurs et problèmes techniques'
                  : language === 'it' ? 'Bug software, errori e problemi tecnici'
                  : language === 'de' ? 'Software-Fehler, Fehler und technische Probleme'
                  : language === 'es' ? 'Errores de software, errores y problemas técnicos'
                  : language === 'el' ? 'Σφάλματα λογισμικού, λάθη και τεχνικά προβλήματα'
                  : 'Software bugs, errors, and technical glitches',
                language === 'fr' ? 'Interruptions de connectivité Internet et problèmes de réseau'
                  : language === 'it' ? 'Interruzioni della connettività Internet e problemi di rete'
                  : language === 'de' ? 'Internet-Konnektivitätsunterbrechungen und Netzwerkprobleme'
                  : language === 'es' ? 'Interrupciones de conectividad a Internet y problemas de red'
                  : language === 'el' ? 'Διακοπές συνδεσιμότητας Internet και προβλήματα δικτύου'
                  : 'Internet connectivity disruptions and network issues'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Risques Spécifiques aux Cryptomonnaies' : language === 'it' ? 'Rischi Specifici delle Criptovalute' : language === 'de' ? 'Kryptowährungsspezifische Risiken' : language === 'es' ? 'Riesgos Específicos de Criptomonedas' : language === 'el' ? 'Ειδικοί Κίνδυνοι Κρυπτονομισμάτων' : 'Cryptocurrency-Specific Risks'}>
              <LegalList items={[
                language === 'fr' ? 'Extrême volatilité et changements de prix imprévisibles'
                  : language === 'it' ? 'Estrema volatilità e cambiamenti di prezzo imprevedibili'
                  : language === 'de' ? 'Extreme Volatilität und unvorhersehbare Preisänderungen'
                  : language === 'es' ? 'Volatilidad extrema y cambios de precio impredecibles'
                  : language === 'el' ? 'Ακραία αστάθεια και απρόβλεπτες αλλαγές τιμών'
                  : 'Extreme volatility and unpredictable price changes',
                language === 'fr' ? 'Incertitude réglementaire et changements juridiques potentiels'
                  : language === 'it' ? 'Incertezza normativa e potenziali cambiamenti legali'
                  : language === 'de' ? 'Regulatorische Unsicherheit und potenzielle rechtliche Änderungen'
                  : language === 'es' ? 'Incertidumbre regulatoria y cambios legales potenciales'
                  : language === 'el' ? 'Ρυθμιστική αβεβαιότητα και πιθανές νομικές αλλαγές'
                  : 'Regulatory uncertainty and potential legal changes',
                language === 'fr' ? 'Risques technologiques blockchain (fourches, bugs, failles)'
                  : language === 'it' ? 'Rischi tecnologici blockchain (fork, bug, vulnerabilità)'
                  : language === 'de' ? 'Blockchain-Technologierisiken (Forks, Bugs, Schwachstellen)'
                  : language === 'es' ? 'Riesgos tecnológicos blockchain (bifurcaciones, errores, vulnerabilidades)'
                  : language === 'el' ? 'Τεχνολογικοί κίνδυνοι blockchain (forks, bugs, ευπάθειες)'
                  : 'Blockchain technology risks (forks, bugs, vulnerabilities)',
                language === 'fr' ? 'Perte permanente due à des erreurs de transaction ou des clés perdues'
                  : language === 'it' ? 'Perdita permanente dovuta a errori di transazione o chiavi perse'
                  : language === 'de' ? 'Dauerhafter Verlust durch Transaktionsfehler oder verlorene Schlüssel'
                  : language === 'es' ? 'Pérdida permanente debido a errores de transacción o claves perdidas'
                  : language === 'el' ? 'Μόνιμη απώλεια λόγω σφαλμάτων συναλλαγής ή χαμένων κλειδιών'
                  : 'Permanent loss due to transaction errors or lost keys',
                language === 'fr' ? 'Risques de contrepartie et défaillances de la bourse'
                  : language === 'it' ? 'Rischi di controparte e fallimenti degli exchange'
                  : language === 'de' ? 'Kontrahentenrisiken und Börsenausfälle'
                  : language === 'es' ? 'Riesgos de contraparte y fallos de intercambio'
                  : language === 'el' ? 'Κίνδυνοι αντισυμβαλλόμενου και αποτυχίες ανταλλαγής'
                  : 'Counterparty risks and exchange failures',
                language === 'fr' ? 'Manipulation du marché et activités frauduleuses'
                  : language === 'it' ? 'Manipolazione del mercato e attività fraudolente'
                  : language === 'de' ? 'Marktmanipulation und betrügerische Aktivitäten'
                  : language === 'es' ? 'Manipulación del mercado y actividades fraudulentas'
                  : language === 'el' ? 'Χειραγώγηση αγοράς και δόλιες δραστηριότητες'
                  : 'Market manipulation and fraudulent activities'
              ]} />
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[8].title} id={tocSections[8].id} icon={<Lock size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Vous êtes seul responsable de la sécurité de votre compte. Le non-respect des mesures de sécurité peut entraîner un accès non autorisé et une perte de fonds.'
                : language === 'it' ? 'Sei l\'unico responsabile della sicurezza del tuo account. Il mancato rispetto delle misure di sicurezza può comportare accessi non autorizzati e perdita di fondi.'
                : language === 'de' ? 'Sie sind allein für die Sicherheit Ihres Kontos verantwortlich. Die Nichteinhaltung von Sicherheitsmaßnahmen kann zu unbefugtem Zugriff und Geldverlust führen.'
                : language === 'es' ? 'Usted es el único responsable de la seguridad de su cuenta. El incumplimiento de las medidas de seguridad puede resultar en acceso no autorizado y pérdida de fondos.'
                : language === 'el' ? 'Είστε αποκλειστικά υπεύθυνοι για την ασφάλεια του λογαριασμού σας. Η μη συμμόρφωση με τα μέτρα ασφαλείας μπορεί να οδηγήσει σε μη εξουσιοδοτημένη πρόσβαση και απώλεια κεφαλαίων.'
                : 'You are solely responsible for the security of your account. Failure to comply with security measures may result in unauthorized access and loss of funds.'}
            </p>

            <LegalSubsection title={language === 'fr' ? 'Exigences de Mot de Passe' : language === 'it' ? 'Requisiti Password' : language === 'de' ? 'Passwortanforderungen' : language === 'es' ? 'Requisitos de Contraseña' : language === 'el' ? 'Απαιτήσεις Κωδικού' : 'Password Requirements'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Votre mot de passe doit répondre aux critères suivants et ne doit jamais être partagé :'
                  : language === 'it' ? 'La tua password deve soddisfare i seguenti criteri e non deve mai essere condivisa:'
                  : language === 'de' ? 'Ihr Passwort muss die folgenden Kriterien erfüllen und darf niemals weitergegeben werden:'
                  : language === 'es' ? 'Su contraseña debe cumplir con los siguientes criterios y nunca debe compartirse:'
                  : language === 'el' ? 'Ο κωδικός σας πρέπει να πληροί τα ακόλουθα κριτήρια και δεν πρέπει ποτέ να κοινοποιείται:'
                  : 'Your password must meet the following criteria and must never be shared:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Minimum 12 caractères avec majuscules, minuscules, chiffres et symboles'
                  : language === 'it' ? 'Minimo 12 caratteri con maiuscole, minuscole, numeri e simboli'
                  : language === 'de' ? 'Mindestens 12 Zeichen mit Groß-, Kleinbuchstaben, Zahlen und Symbolen'
                  : language === 'es' ? 'Mínimo 12 caracteres con mayúsculas, minúsculas, números y símbolos'
                  : language === 'el' ? 'Ελάχιστο 12 χαρακτήρες με κεφαλαία, πεζά, αριθμούς και σύμβολα'
                  : 'Minimum 12 characters with uppercase, lowercase, numbers, and symbols',
                language === 'fr' ? 'Changement régulier du mot de passe (recommandé tous les 90 jours)'
                  : language === 'it' ? 'Cambio regolare della password (consigliato ogni 90 giorni)'
                  : language === 'de' ? 'Regelmäßiger Passwortwechsel (empfohlen alle 90 Tage)'
                  : language === 'es' ? 'Cambio regular de contraseña (recomendado cada 90 días)'
                  : language === 'el' ? 'Τακτική αλλαγή κωδικού (συνιστάται κάθε 90 ημέρες)'
                  : 'Regular password changes (recommended every 90 days)',
                language === 'fr' ? 'Ne jamais réutiliser les mots de passe d\'autres comptes'
                  : language === 'it' ? 'Non riutilizzare mai password di altri account'
                  : language === 'de' ? 'Niemals Passwörter von anderen Konten wiederverwenden'
                  : language === 'es' ? 'Nunca reutilizar contraseñas de otras cuentas'
                  : language === 'el' ? 'Ποτέ μην επαναχρησιμοποιείτε κωδικούς από άλλους λογαριασμούς'
                  : 'Never reuse passwords from other accounts',
                language === 'fr' ? 'Utiliser un gestionnaire de mots de passe sécurisé'
                  : language === 'it' ? 'Utilizzare un gestore di password sicuro'
                  : language === 'de' ? 'Verwenden Sie einen sicheren Passwort-Manager'
                  : language === 'es' ? 'Usar un administrador de contraseñas seguro'
                  : language === 'el' ? 'Χρησιμοποιήστε έναν ασφαλή διαχειριστή κωδικών'
                  : 'Use a secure password manager'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Authentification Multi-Facteurs (MFA)' : language === 'it' ? 'Autenticazione Multi-Fattore (MFA)' : language === 'de' ? 'Multi-Faktor-Authentifizierung (MFA)' : language === 'es' ? 'Autenticación Multi-Factor (MFA)' : language === 'el' ? 'Πολυπαραγοντική Επαλήθευση (MFA)' : 'Multi-Factor Authentication (MFA)'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'MFA est obligatoire pour tous les comptes. Vous devez maintenir l\'accès à vos méthodes d\'authentification :'
                  : language === 'it' ? 'L\'MFA è obbligatoria per tutti gli account. Devi mantenere l\'accesso ai tuoi metodi di autenticazione:'
                  : language === 'de' ? 'MFA ist für alle Konten obligatorisch. Sie müssen den Zugriff auf Ihre Authentifizierungsmethoden aufrechterhalten:'
                  : language === 'es' ? 'MFA es obligatorio para todas las cuentas. Debe mantener acceso a sus métodos de autenticación:'
                  : language === 'el' ? 'Το MFA είναι υποχρεωτικό για όλους τους λογαριασμούς. Πρέπει να διατηρείτε πρόσβαση στις μεθόδους επαλήθευσής σας:'
                  : 'MFA is mandatory for all accounts. You must maintain access to your authentication methods:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Applications d\'authentification (Google Authenticator, Authy)'
                  : language === 'it' ? 'App di autenticazione (Google Authenticator, Authy)'
                  : language === 'de' ? 'Authentifizierungs-Apps (Google Authenticator, Authy)'
                  : language === 'es' ? 'Aplicaciones de autenticación (Google Authenticator, Authy)'
                  : language === 'el' ? 'Εφαρμογές επαλήθευσης (Google Authenticator, Authy)'
                  : 'Authenticator apps (Google Authenticator, Authy)',
                language === 'fr' ? 'Clés de sécurité matérielles (YubiKey, USB)'
                  : language === 'it' ? 'Chiavi di sicurezza hardware (YubiKey, USB)'
                  : language === 'de' ? 'Hardware-Sicherheitsschlüssel (YubiKey, USB)'
                  : language === 'es' ? 'Llaves de seguridad de hardware (YubiKey, USB)'
                  : language === 'el' ? 'Κλειδιά ασφαλείας υλικού (YubiKey, USB)'
                  : 'Hardware security keys (YubiKey, USB)',
                language === 'fr' ? 'SMS ou vérification par email (moins sécurisé, non recommandé pour les comptes de grande valeur)'
                  : language === 'it' ? 'SMS o verifica email (meno sicuro, non raccomandato per account di alto valore)'
                  : language === 'de' ? 'SMS oder E-Mail-Verifizierung (weniger sicher, nicht empfohlen für hochwertige Konten)'
                  : language === 'es' ? 'SMS o verificación por correo electrónico (menos seguro, no recomendado para cuentas de alto valor)'
                  : language === 'el' ? 'SMS ή επαλήθευση email (λιγότερο ασφαλές, δεν συνιστάται για λογαριασμούς υψηλής αξίας)'
                  : 'SMS or email verification (less secure, not recommended for high-value accounts)'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Responsabilités de Sécurité' : language === 'it' ? 'Responsabilità di Sicurezza' : language === 'de' ? 'Sicherheitsverantwortlichkeiten' : language === 'es' ? 'Responsabilidades de Seguridad' : language === 'el' ? 'Ευθύνες Ασφάλειας' : 'Security Responsibilities'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Vous devez :'
                  : language === 'it' ? 'Devi:'
                  : language === 'de' ? 'Sie müssen:'
                  : language === 'es' ? 'Debe:'
                  : language === 'el' ? 'Πρέπει:'
                  : 'You must:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Signaler immédiatement toute activité suspecte ou accès non autorisé'
                  : language === 'it' ? 'Segnalare immediatamente qualsiasi attività sospetta o accesso non autorizzato'
                  : language === 'de' ? 'Sofort verdächtige Aktivitäten oder unbefugten Zugriff melden'
                  : language === 'es' ? 'Informar inmediatamente cualquier actividad sospechosa o acceso no autorizado'
                  : language === 'el' ? 'Αναφέρετε αμέσως οποιαδήποτε ύποπτη δραστηριότητα ή μη εξουσιοδοτημένη πρόσβαση'
                  : 'Immediately report any suspicious activity or unauthorized access',
                language === 'fr' ? 'Maintenir un logiciel antivirus à jour sur tous les appareils'
                  : language === 'it' ? 'Mantenere software antivirus aggiornato su tutti i dispositivi'
                  : language === 'de' ? 'Aktuelle Antiviren-Software auf allen Geräten aufrechterhalten'
                  : language === 'es' ? 'Mantener software antivirus actualizado en todos los dispositivos'
                  : language === 'el' ? 'Διατηρήστε ενημερωμένο λογισμικό antivirus σε όλες τις συσκευές'
                  : 'Maintain up-to-date antivirus software on all devices',
                language === 'fr' ? 'Utiliser uniquement des réseaux sécurisés (éviter le Wi-Fi public)'
                  : language === 'it' ? 'Utilizzare solo reti sicure (evitare Wi-Fi pubblico)'
                  : language === 'de' ? 'Nur sichere Netzwerke verwenden (öffentliches WLAN vermeiden)'
                  : language === 'es' ? 'Usar solo redes seguras (evitar Wi-Fi público)'
                  : language === 'el' ? 'Χρησιμοποιείτε μόνο ασφαλή δίκτυα (αποφύγετε δημόσιο Wi-Fi)'
                  : 'Use only secure networks (avoid public Wi-Fi)',
                language === 'fr' ? 'Ne jamais cliquer sur des liens suspects ou télécharger des pièces jointes inconnues'
                  : language === 'it' ? 'Non cliccare mai su link sospetti o scaricare allegati sconosciuti'
                  : language === 'de' ? 'Niemals auf verdächtige Links klicken oder unbekannte Anhänge herunterladen'
                  : language === 'es' ? 'Nunca hacer clic en enlaces sospechosos o descargar archivos adjuntos desconocidos'
                  : language === 'el' ? 'Ποτέ μην κάνετε κλικ σε ύποπτους συνδέσμους ή λήψη άγνωστων συνημμένων'
                  : 'Never click on suspicious links or download unknown attachments',
                language === 'fr' ? 'Vérifier l\'URL et le certificat SSL avant de saisir des informations de connexion'
                  : language === 'it' ? 'Verificare URL e certificato SSL prima di inserire informazioni di accesso'
                  : language === 'de' ? 'URL und SSL-Zertifikat überprüfen, bevor Sie Anmeldeinformationen eingeben'
                  : language === 'es' ? 'Verificar URL y certificado SSL antes de ingresar información de inicio de sesión'
                  : language === 'el' ? 'Επαληθεύστε URL και πιστοποιητικό SSL πριν εισάγετε στοιχεία σύνδεσης'
                  : 'Verify URL and SSL certificate before entering login credentials'
              ]} />
            </LegalSubsection>

            <LegalNotice type="warning" title={language === 'fr' ? 'NON-RESPONSABILITÉ POUR NÉGLIGENCE DE SÉCURITÉ' : language === 'it' ? 'NON RESPONSABILITÀ PER NEGLIGENZA SICUREZZA' : language === 'de' ? 'KEINE HAFTUNG FÜR SICHERHEITSNACHLÄSSIGKEIT' : language === 'es' ? 'NO RESPONSABILIDAD POR NEGLIGENCIA DE SEGURIDAD' : language === 'el' ? 'ΜΗ ΕΥΘΥΝΗ ΓΙΑ ΑΜΕΛΕΙΑ ΑΣΦΑΛΕΙΑΣ' : 'NO LIABILITY FOR SECURITY NEGLIGENCE'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Aareal Bank AG n\'est pas responsable des pertes résultant de votre non-respect des protocoles de sécurité, du partage d\'identifiants, de l\'utilisation d\'appareils non sécurisés ou de toute autre négligence de votre part. Vous assumez l\'entière responsabilité de toute activité de compte résultant de telles actions.'
                  : language === 'it' ? 'Aareal Bank AG non è responsabile per perdite derivanti dalla mancata osservanza dei protocolli di sicurezza, condivisione di credenziali, uso di dispositivi non sicuri o qualsiasi altra negligenza da parte tua. Ti assumi la piena responsabilità per qualsiasi attività dell\'account derivante da tali azioni.'
                  : language === 'de' ? 'Aareal Bank AG ist nicht verantwortlich für Verluste, die aus Ihrer Nichteinhaltung von Sicherheitsprotokollen, Weitergabe von Anmeldeinformationen, Verwendung unsicherer Geräte oder jeglicher anderer Fahrlässigkeit Ihrerseits resultieren. Sie übernehmen die volle Verantwortung für alle Kontoaktivitäten, die sich aus solchen Handlungen ergeben.'
                  : language === 'es' ? 'Aareal Bank AG no es responsable de pérdidas resultantes de su incumplimiento de protocolos de seguridad, compartir credenciales, usar dispositivos no seguros o cualquier otra negligencia de su parte. Usted asume total responsabilidad por cualquier actividad de cuenta resultante de tales acciones.'
                  : language === 'el' ? 'Η Aareal Bank AG δεν είναι υπεύθυνη για απώλειες που προκύπτουν από τη μη συμμόρφωσή σας με τα πρωτόκολλα ασφαλείας, την κοινή χρήση διαπιστευτηρίων, τη χρήση μη ασφαλών συσκευών ή οποιαδήποτε άλλη αμέλεια εκ μέρους σας. Αναλαμβάνετε την πλήρη ευθύνη για οποιαδήποτε δραστηριότητα λογαριασμού που προκύπτει από τέτοιες ενέργειες.'
                  : 'Aareal Bank AG is not liable for losses resulting from your failure to comply with security protocols, sharing credentials, using unsecured devices, or any other negligence on your part. You assume full responsibility for any account activity resulting from such actions.'}
              </p>
            </LegalNotice>
          </LegalSection>

          <LegalSection title={tocSections[9].title} id={tocSections[9].id} icon={<AlertTriangle size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Les activités suivantes sont strictement interdites et peuvent entraîner une résiliation immédiate du compte, des poursuites judiciaires et le signalement aux autorités :'
                : language === 'it' ? 'Le seguenti attività sono rigorosamente vietate e possono comportare la risoluzione immediata dell\'account, azioni legali e segnalazione alle autorità:'
                : language === 'de' ? 'Die folgenden Aktivitäten sind streng verboten und können zur sofortigen Kontoauflösung, rechtlichen Schritten und Meldung an Behörden führen:'
                : language === 'es' ? 'Las siguientes actividades están estrictamente prohibidas y pueden resultar en terminación inmediata de cuenta, acciones legales y reporte a autoridades:'
                : language === 'el' ? 'Οι ακόλουθες δραστηριότητες απαγορεύονται αυστηρά και μπορούν να οδηγήσουν σε άμεση λήξη λογαριασμού, νομικές ενέργειες και αναφορά στις αρχές:'
                : 'The following activities are strictly prohibited and may result in immediate account termination, legal action, and reporting to authorities:'}
            </p>

            <LegalSubsection title={language === 'fr' ? 'Activités Illégales' : language === 'it' ? 'Attività Illegali' : language === 'de' ? 'Illegale Aktivitäten' : language === 'es' ? 'Actividades Ilegales' : language === 'el' ? 'Παράνομες Δραστηριότητες' : 'Illegal Activities'}>
              <LegalList items={[
                language === 'fr' ? 'Blanchiment d\'argent et financement du terrorisme'
                  : language === 'it' ? 'Riciclaggio di denaro e finanziamento del terrorismo'
                  : language === 'de' ? 'Geldwäsche und Terrorismusfinanzierung'
                  : language === 'es' ? 'Lavado de dinero y financiamiento del terrorismo'
                  : language === 'el' ? 'Ξέπλυμα χρήματος και χρηματοδότηση της τρομοκρατίας'
                  : 'Money laundering and terrorism financing',
                language === 'fr' ? 'Fraude, escroquerie et activités trompeuses'
                  : language === 'it' ? 'Frode, truffa e attività ingannevoli'
                  : language === 'de' ? 'Betrug, Schwindel und betrügerische Aktivitäten'
                  : language === 'es' ? 'Fraude, estafa y actividades engañosas'
                  : language === 'el' ? 'Απάτη, κλοπή και παραπλανητικές δραστηριότητες'
                  : 'Fraud, scams, and deceptive activities',
                language === 'fr' ? 'Transactions illicites de drogues, d\'armes ou de matériel illégal'
                  : language === 'it' ? 'Transazioni illecite di droga, armi o materiale illegale'
                  : language === 'de' ? 'Illegale Transaktionen von Drogen, Waffen oder illegalem Material'
                  : language === 'es' ? 'Transacciones ilícitas de drogas, armas o material ilegal'
                  : language === 'el' ? 'Παράνομες συναλλαγές ναρκωτικών, όπλων ή παράνομου υλικού'
                  : 'Illicit drug, weapons, or illegal material transactions',
                language === 'fr' ? 'Violation de sanctions internationales ou embargos'
                  : language === 'it' ? 'Violazione di sanzioni internazionali o embarghi'
                  : language === 'de' ? 'Verstoß gegen internationale Sanktionen oder Embargos'
                  : language === 'es' ? 'Violación de sanciones internacionales o embargos'
                  : language === 'el' ? 'Παραβίαση διεθνών κυρώσεων ή εμπάργκο'
                  : 'Violation of international sanctions or embargoes',
                language === 'fr' ? 'Trafic d\'êtres humains ou exploitation'
                  : language === 'it' ? 'Traffico di esseri umani o sfruttamento'
                  : language === 'de' ? 'Menschenhandel oder Ausbeutung'
                  : language === 'es' ? 'Tráfico de personas o explotación'
                  : language === 'el' ? 'Εμπορία ανθρώπων ή εκμετάλλευση'
                  : 'Human trafficking or exploitation',
                language === 'fr' ? 'Évasion fiscale ou fraude fiscale'
                  : language === 'it' ? 'Evasione fiscale o frode fiscale'
                  : language === 'de' ? 'Steuerhinterziehung oder Steuerbetrug'
                  : language === 'es' ? 'Evasión fiscal o fraude fiscal'
                  : language === 'el' ? 'Φοροδιαφυγή ή φορολογική απάτη'
                  : 'Tax evasion or tax fraud'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Manipulation du Marché' : language === 'it' ? 'Manipolazione del Mercato' : language === 'de' ? 'Marktmanipulation' : language === 'es' ? 'Manipulación del Mercado' : language === 'el' ? 'Χειραγώγηση Αγοράς' : 'Market Manipulation'}>
              <LegalList items={[
                language === 'fr' ? 'Pump and dump, schémas de Ponzi ou systèmes pyramidaux'
                  : language === 'it' ? 'Pump and dump, schemi Ponzi o sistemi piramidali'
                  : language === 'de' ? 'Pump and Dump, Ponzi-Systeme oder Pyramidensysteme'
                  : language === 'es' ? 'Pump and dump, esquemas Ponzi o sistemas piramidales'
                  : language === 'el' ? 'Pump and dump, συστήματα Ponzi ή πυραμιδικά συστήματα'
                  : 'Pump and dump, Ponzi schemes, or pyramid systems',
                language === 'fr' ? 'Délit d\'initié ou utilisation d\'informations confidentielles'
                  : language === 'it' ? 'Insider trading o uso di informazioni riservate'
                  : language === 'de' ? 'Insiderhandel oder Nutzung vertraulicher Informationen'
                  : language === 'es' ? 'Uso de información privilegiada o uso de información confidencial'
                  : language === 'el' ? 'Insider trading ή χρήση εμπιστευτικών πληροφοριών'
                  : 'Insider trading or use of confidential information',
                language === 'fr' ? 'Wash trading, spoofing ou layering'
                  : language === 'it' ? 'Wash trading, spoofing o layering'
                  : language === 'de' ? 'Wash Trading, Spoofing oder Layering'
                  : language === 'es' ? 'Wash trading, spoofing o layering'
                  : language === 'el' ? 'Wash trading, spoofing ή layering'
                  : 'Wash trading, spoofing, or layering',
                language === 'fr' ? 'Collusion ou coordination de prix'
                  : language === 'it' ? 'Collusione o coordinamento dei prezzi'
                  : language === 'de' ? 'Absprachen oder Preiskoordinierung'
                  : language === 'es' ? 'Colusión o coordinación de precios'
                  : language === 'el' ? 'Συμπαιγνία ή συντονισμός τιμών'
                  : 'Collusion or price coordination'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Abus de Plateforme' : language === 'it' ? 'Abuso di Piattaforma' : language === 'de' ? 'Plattform-Missbrauch' : language === 'es' ? 'Abuso de Plataforma' : language === 'el' ? 'Κατάχρηση Πλατφόρμας' : 'Platform Abuse'}>
              <LegalList items={[
                language === 'fr' ? 'Création de plusieurs comptes pour contourner les limites'
                  : language === 'it' ? 'Creazione di account multipli per aggirare i limiti'
                  : language === 'de' ? 'Erstellen mehrerer Konten zur Umgehung von Limits'
                  : language === 'es' ? 'Creación de múltiples cuentas para eludir límites'
                  : language === 'el' ? 'Δημιουργία πολλαπλών λογαριασμών για παράκαμψη ορίων'
                  : 'Creating multiple accounts to circumvent limits',
                language === 'fr' ? 'Utilisation de bots, scripts ou automatisation sans autorisation'
                  : language === 'it' ? 'Utilizzo di bot, script o automazione senza autorizzazione'
                  : language === 'de' ? 'Verwendung von Bots, Skripten oder Automatisierung ohne Genehmigung'
                  : language === 'es' ? 'Uso de bots, scripts o automatización sin autorización'
                  : language === 'el' ? 'Χρήση bots, scripts ή αυτοματισμού χωρίς άδεια'
                  : 'Using bots, scripts, or automation without authorization',
                language === 'fr' ? 'Tentative de piratage, d\'hameçonnage ou d\'ingénierie sociale'
                  : language === 'it' ? 'Tentativo di hacking, phishing o ingegneria sociale'
                  : language === 'de' ? 'Hacking-Versuche, Phishing oder Social Engineering'
                  : language === 'es' ? 'Intento de piratería, phishing o ingeniería social'
                  : language === 'el' ? 'Απόπειρα hacking, phishing ή κοινωνικής μηχανικής'
                  : 'Attempting hacking, phishing, or social engineering',
                language === 'fr' ? 'Exploitation de bugs, glitches ou vulnérabilités système'
                  : language === 'it' ? 'Sfruttamento di bug, glitch o vulnerabilità di sistema'
                  : language === 'de' ? 'Ausnutzung von Bugs, Glitches oder Systemschwachstellen'
                  : language === 'es' ? 'Explotación de errores, fallas o vulnerabilidades del sistema'
                  : language === 'el' ? 'Εκμετάλλευση bugs, glitches ή ευπαθειών συστήματος'
                  : 'Exploiting bugs, glitches, or system vulnerabilities',
                language === 'fr' ? 'Ingénierie inverse, décompilation ou accès non autorisé'
                  : language === 'it' ? 'Reverse engineering, decompilazione o accesso non autorizzato'
                  : language === 'de' ? 'Reverse Engineering, Dekompilierung oder unbefugter Zugriff'
                  : language === 'es' ? 'Ingeniería inversa, descompilación o acceso no autorizado'
                  : language === 'el' ? 'Reverse engineering, αποσυμπίληση ή μη εξουσιοδοτημένη πρόσβαση'
                  : 'Reverse engineering, decompiling, or unauthorized access'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Violations de Conformité' : language === 'it' ? 'Violazioni di Conformità' : language === 'de' ? 'Compliance-Verstöße' : language === 'es' ? 'Violaciones de Cumplimiento' : language === 'el' ? 'Παραβιάσεις Συμμόρφωσης' : 'Compliance Violations'}>
              <LegalList items={[
                language === 'fr' ? 'Fournir de fausses informations KYC ou documents falsifiés'
                  : language === 'it' ? 'Fornire false informazioni KYC o documenti falsificati'
                  : language === 'de' ? 'Bereitstellung falscher KYC-Informationen oder gefälschter Dokumente'
                  : language === 'es' ? 'Proporcionar información KYC falsa o documentos falsificados'
                  : language === 'el' ? 'Παροχή ψευδών πληροφοριών KYC ή πλαστών εγγράφων'
                  : 'Providing false KYC information or forged documents',
                language === 'fr' ? 'Usurpation d\'identité ou fraude d\'identité'
                  : language === 'it' ? 'Impersonificazione o frode di identità'
                  : language === 'de' ? 'Identitätsdiebstahl oder Identitätsbetrug'
                  : language === 'es' ? 'Suplantación de identidad o fraude de identidad'
                  : language === 'el' ? 'Υποδυομή ή απάτη ταυτότητας'
                  : 'Impersonation or identity fraud',
                language === 'fr' ? 'Accès depuis des juridictions interdites ou utilisation de VPN pour contourner les restrictions'
                  : language === 'it' ? 'Accesso da giurisdizioni vietate o uso di VPN per aggirare restrizioni'
                  : language === 'de' ? 'Zugriff aus verbotenen Rechtsgebieten oder VPN-Nutzung zur Umgehung von Beschränkungen'
                  : language === 'es' ? 'Acceso desde jurisdicciones prohibidas o uso de VPN para eludir restricciones'
                  : language === 'el' ? 'Πρόσβαση από απαγορευμένες δικαιοδοσίες ή χρήση VPN για παράκαμψη περιορισμών'
                  : 'Accessing from prohibited jurisdictions or using VPN to circumvent restrictions',
                language === 'fr' ? 'Non-divulgation de la source de fonds ou du bénéficiaire effectif'
                  : language === 'it' ? 'Mancata divulgazione della fonte dei fondi o del beneficiario effettivo'
                  : language === 'de' ? 'Nichtoffenlegung der Geldquelle oder des wirtschaftlichen Eigentümers'
                  : language === 'es' ? 'No divulgación de la fuente de fondos o beneficiario final'
                  : language === 'el' ? 'Μη γνωστοποίηση πηγής κεφαλαίων ή πραγματικού δικαιούχου'
                  : 'Non-disclosure of source of funds or beneficial owner'
              ]} />
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[10].title} id={tocSections[10].id} icon={<Shield size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Aareal Bank AG est assujettie aux réglementations bancaires et financières de Malte, de l\'UE et internationales. Nous maintenons une conformité stricte avec toutes les exigences légales et réglementaires applicables.'
                : language === 'it' ? 'Aareal Bank AG è soggetta alle normative bancarie e finanziarie di Malta, dell\'UE e internazionali. Manteniamo una rigorosa conformità con tutti i requisiti legali e normativi applicabili.'
                : language === 'de' ? 'Aareal Bank AG unterliegt den Bank- und Finanzvorschriften Maltas, der EU und internationalen Vorschriften. Wir halten strikte Compliance mit allen geltenden rechtlichen und regulatorischen Anforderungen ein.'
                : language === 'es' ? 'Aareal Bank AG está sujeta a las regulaciones bancarias y financieras de Malta, la UE e internacionales. Mantenemos un cumplimiento estricto con todos los requisitos legales y regulatorios aplicables.'
                : language === 'el' ? 'Η Aareal Bank AG υπόκειται στους τραπεζικούς και χρηματοοικονομικούς κανονισμούς της Μάλτας, της ΕΕ και διεθνών κανονισμών. Διατηρούμε αυστηρή συμμόρφωση με όλες τις ισχύουσες νομικές και κανονιστικές απαιτήσεις.'
                : 'Aareal Bank AG is subject to Malta, EU, and international banking and financial regulations. We maintain strict compliance with all applicable legal and regulatory requirements.'}
            </p>

            <LegalSubsection title={language === 'fr' ? 'Cadres Réglementaires' : language === 'it' ? 'Quadri Normativi' : language === 'de' ? 'Regulatorische Rahmenbedingungen' : language === 'es' ? 'Marcos Regulatorios' : language === 'el' ? 'Ρυθμιστικά Πλαίσια' : 'Regulatory Frameworks'}>
              <LegalList items={[
                language === 'fr' ? 'Autorité des Services Financiers de Malte (MFSA) - Licence bancaire'
                  : language === 'it' ? 'Autorità dei Servizi Finanziari di Malta (MFSA) - Licenza bancaria'
                  : language === 'de' ? 'Malta Financial Services Authority (MFSA) - Banklizenz'
                  : language === 'es' ? 'Autoridad de Servicios Financieros de Malta (MFSA) - Licencia bancaria'
                  : language === 'el' ? 'Αρχή Χρηματοπιστωτικών Υπηρεσιών της Μάλτας (MFSA) - Τραπεζική άδεια'
                  : 'Malta Financial Services Authority (MFSA) - Banking License',
                language === 'fr' ? 'Banque Centrale Européenne (BCE) - Supervision bancaire'
                  : language === 'it' ? 'Banca Centrale Europea (BCE) - Supervisione bancaria'
                  : language === 'de' ? 'Europäische Zentralbank (EZB) - Bankenaufsicht'
                  : language === 'es' ? 'Banco Central Europeo (BCE) - Supervisión bancaria'
                  : language === 'el' ? 'Ευρωπαϊκή Κεντρική Τράπεζα (ΕΚΤ) - Τραπεζική εποπτεία'
                  : 'European Central Bank (ECB) - Banking Supervision',
                language === 'fr' ? 'Directives MiFID II - Marchés d\'instruments financiers'
                  : language === 'it' ? 'Direttive MiFID II - Mercati degli strumenti finanziari'
                  : language === 'de' ? 'MiFID II-Richtlinien - Märkte für Finanzinstrumente'
                  : language === 'es' ? 'Directivas MiFID II - Mercados de instrumentos financieros'
                  : language === 'el' ? 'Οδηγίες MiFID II - Αγορές χρηματοπιστωτικών μέσων'
                  : 'MiFID II Directives - Markets in Financial Instruments',
                language === 'fr' ? 'RGPD - Règlement Général sur la Protection des Données'
                  : language === 'it' ? 'GDPR - Regolamento Generale sulla Protezione dei Dati'
                  : language === 'de' ? 'DSGVO - Datenschutz-Grundverordnung'
                  : language === 'es' ? 'GDPR - Reglamento General de Protección de Datos'
                  : language === 'el' ? 'GDPR - Γενικός Κανονισμός Προστασίας Δεδομένων'
                  : 'GDPR - General Data Protection Regulation',
                language === 'fr' ? '4AMLD/5AMLD/6AMLD - Directives anti-blanchiment'
                  : language === 'it' ? '4AMLD/5AMLD/6AMLD - Direttive antiriciclaggio'
                  : language === 'de' ? '4AMLD/5AMLD/6AMLD - Geldwäscherichtlinien'
                  : language === 'es' ? '4AMLD/5AMLD/6AMLD - Directivas contra el lavado de dinero'
                  : language === 'el' ? '4AMLD/5AMLD/6AMLD - Οδηγίες κατά της νομιμοποίησης εσόδων'
                  : '4AMLD/5AMLD/6AMLD - Anti-Money Laundering Directives',
                language === 'fr' ? 'PSD2 - Directive sur les Services de Paiement 2'
                  : language === 'it' ? 'PSD2 - Direttiva sui Servizi di Pagamento 2'
                  : language === 'de' ? 'PSD2 - Zahlungsdiensterichtlinie 2'
                  : language === 'es' ? 'PSD2 - Directiva de Servicios de Pago 2'
                  : language === 'el' ? 'PSD2 - Οδηγία Υπηρεσιών Πληρωμών 2'
                  : 'PSD2 - Payment Services Directive 2'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Obligations de Déclaration' : language === 'it' ? 'Obblighi di Segnalazione' : language === 'de' ? 'Meldepflichten' : language === 'es' ? 'Obligaciones de Reporte' : language === 'el' ? 'Υποχρεώσεις Αναφοράς' : 'Reporting Obligations'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Aareal Bank AG est légalement tenue de déclarer certaines transactions et activités aux autorités réglementaires :'
                  : language === 'it' ? 'Aareal Bank AG è legalmente obbligata a segnalare determinate transazioni e attività alle autorità di regolamentazione:'
                  : language === 'de' ? 'Aareal Bank AG ist gesetzlich verpflichtet, bestimmte Transaktionen und Aktivitäten an die Regulierungsbehörden zu melden:'
                  : language === 'es' ? 'Aareal Bank AG está legalmente obligada a informar ciertas transacciones y actividades a las autoridades reguladoras:'
                  : language === 'el' ? 'Η Aareal Bank AG είναι νομικά υποχρεωμένη να αναφέρει ορισμένες συναλλαγές και δραστηριότητες στις ρυθμιστικές αρχές:'
                  : 'Aareal Bank AG is legally required to report certain transactions and activities to regulatory authorities:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Rapports d\'activités suspectes (RAS) pour transactions potentiellement illicites'
                  : language === 'it' ? 'Segnalazioni di attività sospette (SAR) per transazioni potenzialmente illecite'
                  : language === 'de' ? 'Verdachtsmeldungen (SAR) für potenziell illegale Transaktionen'
                  : language === 'es' ? 'Informes de actividad sospechosa (SAR) para transacciones potencialmente ilícitas'
                  : language === 'el' ? 'Αναφορές ύποπτων δραστηριοτήτων (SAR) για πιθανώς παράνομες συναλλαγές'
                  : 'Suspicious Activity Reports (SARs) for potentially illicit transactions',
                language === 'fr' ? 'Rapports de transactions en devises (RTC) pour transactions importantes'
                  : language === 'it' ? 'Rapporti sulle transazioni valutarie (CTR) per transazioni di grande valore'
                  : language === 'de' ? 'Währungstransaktionsberichte (CTR) für hochwertige Transaktionen'
                  : language === 'es' ? 'Informes de transacciones en divisas (CTR) para transacciones de alto valor'
                  : language === 'el' ? 'Αναφορές Συναλλαγών Νομισμάτων (CTR) για συναλλαγές υψηλής αξίας'
                  : 'Currency Transaction Reports (CTRs) for high-value transactions',
                language === 'fr' ? 'Conformité FATCA et CRS pour déclaration fiscale internationale'
                  : language === 'it' ? 'Conformità FATCA e CRS per dichiarazioni fiscali internazionali'
                  : language === 'de' ? 'FATCA- und CRS-Konformität für internationale Steuerberichterstattung'
                  : language === 'es' ? 'Cumplimiento FATCA y CRS para informes fiscales internacionales'
                  : language === 'el' ? 'Συμμόρφωση FATCA και CRS για διεθνείς φορολογικές αναφορές'
                  : 'FATCA and CRS compliance for international tax reporting',
                language === 'fr' ? 'Rapports d\'incident pour violations de sécurité ou violations de données'
                  : language === 'it' ? 'Rapporti sugli incidenti per violazioni della sicurezza o violazioni dei dati'
                  : language === 'de' ? 'Vorfallberichte für Sicherheitsverletzungen oder Datenschutzverletzungen'
                  : language === 'es' ? 'Informes de incidentes para violaciones de seguridad o violaciones de datos'
                  : language === 'el' ? 'Αναφορές περιστατικών για παραβιάσεις ασφαλείας ή παραβιάσεις δεδομένων'
                  : 'Incident reports for security breaches or data breaches'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Coopération avec les Autorités' : language === 'it' ? 'Cooperazione con le Autorità' : language === 'de' ? 'Zusammenarbeit mit Behörden' : language === 'es' ? 'Cooperación con Autoridades' : language === 'el' ? 'Συνεργασία με Αρχές' : 'Cooperation with Authorities'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Aareal Bank AG coopérera pleinement avec les forces de l\'ordre, les autorités réglementaires et les agences gouvernementales. Nous sommes tenus de divulguer les informations de compte et les détails de transaction en réponse aux demandes légales valides, y compris les assignations, les mandats de perquisition et les ordonnances judiciaires. En utilisant nos services, vous consentez à une telle divulgation lorsqu\'elle est légalement requise.'
                  : language === 'it' ? 'Aareal Bank AG collaborerà pienamente con le forze dell\'ordine, le autorità di regolamentazione e le agenzie governative. Siamo tenuti a divulgare informazioni sull\'account e dettagli delle transazioni in risposta a richieste legali valide, inclusi citazioni, mandati di perquisizione e ordini del tribunale. Utilizzando i nostri servizi, acconsenti a tale divulgazione quando legalmente richiesto.'
                  : language === 'de' ? 'Aareal Bank AG wird vollständig mit Strafverfolgungsbehörden, Aufsichtsbehörden und Regierungsbehörden kooperieren. Wir sind verpflichtet, Kontoinformationen und Transaktionsdetails als Antwort auf gültige rechtliche Anfragen offenzulegen, einschließlich Vorladungen, Durchsuchungsbefehlen und Gerichtsbeschlüssen. Durch die Nutzung unserer Dienste stimmen Sie einer solchen Offenlegung zu, wenn sie gesetzlich erforderlich ist.'
                  : language === 'es' ? 'Aareal Bank AG cooperará plenamente con las autoridades policiales, las autoridades reguladoras y las agencias gubernamentales. Estamos obligados a divulgar información de cuenta y detalles de transacciones en respuesta a solicitudes legales válidas, incluidas citaciones, órdenes de allanamiento y órdenes judiciales. Al utilizar nuestros servicios, usted acepta dicha divulgación cuando sea legalmente requerida.'
                  : language === 'el' ? 'Η Aareal Bank AG θα συνεργαστεί πλήρως με τις αρχές επιβολής του νόμου, τις ρυθμιστικές αρχές και τις κυβερνητικές υπηρεσίες. Είμαστε υποχρεωμένοι να αποκαλύπτουμε πληροφορίες λογαριασμού και λεπτομέρειες συναλλαγών σε απάντηση σε έγκυρα νομικά αιτήματα, συμπεριλαμβανομένων κλήσεων, ενταλμάτων έρευνας και δικαστικών διαταγών. Χρησιμοποιώντας τις υπηρεσίες μας, συναινείτε σε τέτοια αποκάλυψη όταν απαιτείται νομικά.'
                  : 'Aareal Bank AG will cooperate fully with law enforcement, regulatory authorities, and government agencies. We are required to disclose account information and transaction details in response to valid legal requests, including subpoenas, search warrants, and court orders. By using our services, you consent to such disclosure when legally required.'}
              </p>
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[11].title} id={tocSections[11].id} icon={<FileText size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Tous les droits de propriété intellectuelle relatifs à Aareal Bank AG, y compris notre site Web, notre plateforme, notre logiciel, notre contenu et nos marques, sont la propriété exclusive de Aareal Bank AG et de ses concédants de licence. Vous n\'acquérez aucun droit de propriété en utilisant nos services.'
                : language === 'it' ? 'Tutti i diritti di proprietà intellettuale relativi a Aareal Bank AG, inclusi il nostro sito web, piattaforma, software, contenuti e marchi, sono di proprietà esclusiva di Aareal Bank AG e dei suoi licenzianti. Non acquisisci alcun diritto di proprietà utilizzando i nostri servizi.'
                : language === 'de' ? 'Alle geistigen Eigentumsrechte im Zusammenhang mit Aareal Bank AG, einschließlich unserer Website, Plattform, Software, Inhalte und Marken, sind ausschließliches Eigentum von Aareal Bank AG und ihren Lizenzgebern. Sie erwerben keine Eigentumsrechte durch die Nutzung unserer Dienste.'
                : language === 'es' ? 'Todos los derechos de propiedad intelectual relacionados con Aareal Bank AG, incluido nuestro sitio web, plataforma, software, contenido y marcas, son propiedad exclusiva de Aareal Bank AG y sus licenciantes. No adquiere ningún derecho de propiedad al usar nuestros servicios.'
                : language === 'el' ? 'Όλα τα δικαιώματα πνευματικής ιδιοκτησίας που σχετίζονται με την Aareal Bank AG, συμπεριλαμβανομένου του ιστότοπου, της πλατφόρμας, του λογισμικού, του περιεχομένου και των εμπορικών σημάτων μας, είναι αποκλειστική ιδιοκτησία της Aareal Bank AG και των αδειοδοχών της. Δεν αποκτάτε κανένα δικαίωμα ιδιοκτησίας χρησιμοποιώντας τις υπηρεσίες μας.'
                : 'All intellectual property rights related to Aareal Bank AG, including our website, platform, software, content, and trademarks, are the exclusive property of Aareal Bank AG and its licensors. You acquire no ownership rights by using our services.'}
            </p>

            <LegalSubsection title={language === 'fr' ? 'Droits de Propriété' : language === 'it' ? 'Diritti di Proprietà' : language === 'de' ? 'Eigentumsrechte' : language === 'es' ? 'Derechos de Propiedad' : language === 'el' ? 'Δικαιώματα Ιδιοκτησίας' : 'Ownership Rights'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Aareal Bank AG possède et conserve tous les droits, titres et intérêts dans :'
                  : language === 'it' ? 'Aareal Bank AG possiede e conserva tutti i diritti, titoli e interessi in:'
                  : language === 'de' ? 'Aareal Bank AG besitzt und behält alle Rechte, Titel und Interessen an:'
                  : language === 'es' ? 'Aareal Bank AG posee y retiene todos los derechos, títulos e intereses en:'
                  : language === 'el' ? 'Η Aareal Bank AG κατέχει και διατηρεί όλα τα δικαιώματα, τίτλους και συμφέροντα σε:'
                  : 'Aareal Bank AG owns and retains all rights, title, and interest in:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Logos, marques déposées, marques de service et noms commerciaux'
                  : language === 'it' ? 'Loghi, marchi registrati, marchi di servizio e nomi commerciali'
                  : language === 'de' ? 'Logos, Warenzeichen, Dienstleistungsmarken und Handelsnamen'
                  : language === 'es' ? 'Logotipos, marcas registradas, marcas de servicio y nombres comerciales'
                  : language === 'el' ? 'Λογότυπα, καταχωρημένα εμπορικά σήματα, σήματα υπηρεσιών και εμπορικά ονόματα'
                  : 'Logos, trademarks, service marks, and trade names',
                language === 'fr' ? 'Code logiciel, algorithmes et architecture technique'
                  : language === 'it' ? 'Codice software, algoritmi e architettura tecnica'
                  : language === 'de' ? 'Softwarecode, Algorithmen und technische Architektur'
                  : language === 'es' ? 'Código de software, algoritmos y arquitectura técnica'
                  : language === 'el' ? 'Κώδικας λογισμικού, αλγόριθμοι και τεχνική αρχιτεκτονική'
                  : 'Software code, algorithms, and technical architecture',
                language === 'fr' ? 'Contenu du site Web, graphiques, texte et éléments de conception'
                  : language === 'it' ? 'Contenuto del sito web, grafica, testo ed elementi di design'
                  : language === 'de' ? 'Website-Inhalte, Grafiken, Text und Designelemente'
                  : language === 'es' ? 'Contenido del sitio web, gráficos, texto y elementos de diseño'
                  : language === 'el' ? 'Περιεχόμενο ιστότοπου, γραφικά, κείμενο και στοιχεία σχεδιασμού'
                  : 'Website content, graphics, text, and design elements',
                language === 'fr' ? 'Interface utilisateur, UX et éléments d\'interface'
                  : language === 'it' ? 'Interfaccia utente, UX ed elementi di interfaccia'
                  : language === 'de' ? 'Benutzeroberfläche, UX und Schnittstellenelemente'
                  : language === 'es' ? 'Interfaz de usuario, UX y elementos de interfaz'
                  : language === 'el' ? 'Διεπαφή χρήστη, UX και στοιχεία διεπαφής'
                  : 'User interface, UX, and interface elements',
                language === 'fr' ? 'Documentation, guides et matériel éducatif'
                  : language === 'it' ? 'Documentazione, guide e materiale educativo'
                  : language === 'de' ? 'Dokumentation, Leitfäden und Bildungsmaterial'
                  : language === 'es' ? 'Documentación, guías y material educativo'
                  : language === 'el' ? 'Τεκμηρίωση, οδηγοί και εκπαιδευτικό υλικό'
                  : 'Documentation, guides, and educational materials',
                language === 'fr' ? 'Processus commerciaux et secrets commerciaux'
                  : language === 'it' ? 'Processi aziendali e segreti commerciali'
                  : language === 'de' ? 'Geschäftsprozesse und Geschäftsgeheimnisse'
                  : language === 'es' ? 'Procesos comerciales y secretos comerciales'
                  : language === 'el' ? 'Επιχειρηματικές διαδικασίες και εμπορικά μυστικά'
                  : 'Business processes and trade secrets'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Restrictions d\'Utilisation' : language === 'it' ? 'Restrizioni d\'Uso' : language === 'de' ? 'Nutzungsbeschränkungen' : language === 'es' ? 'Restricciones de Uso' : language === 'el' ? 'Περιορισμοί Χρήσης' : 'Usage Restrictions'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Sans notre autorisation écrite expresse, vous ne pouvez pas :'
                  : language === 'it' ? 'Senza la nostra autorizzazione scritta espressa, non puoi:'
                  : language === 'de' ? 'Ohne unsere ausdrückliche schriftliche Genehmigung dürfen Sie nicht:'
                  : language === 'es' ? 'Sin nuestra autorización escrita expresa, no puede:'
                  : language === 'el' ? 'Χωρίς την ρητή γραπτή μας εξουσιοδότηση, δεν μπορείτε:'
                  : 'Without our express written permission, you may not:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Copier, reproduire ou distribuer notre propriété intellectuelle'
                  : language === 'it' ? 'Copiare, riprodurre o distribuire la nostra proprietà intellettuale'
                  : language === 'de' ? 'Unser geistiges Eigentum kopieren, reproduzieren oder verteilen'
                  : language === 'es' ? 'Copiar, reproducir o distribuir nuestra propiedad intelectual'
                  : language === 'el' ? 'Αντιγράφετε, αναπαράγετε ή διανέμετε την πνευματική μας ιδιοκτησία'
                  : 'Copy, reproduce, or distribute our intellectual property',
                language === 'fr' ? 'Modifier, adapter ou créer des œuvres dérivées'
                  : language === 'it' ? 'Modificare, adattare o creare opere derivate'
                  : language === 'de' ? 'Modifizieren, anpassen oder abgeleitete Werke erstellen'
                  : language === 'es' ? 'Modificar, adaptar o crear obras derivadas'
                  : language === 'el' ? 'Τροποποιείτε, προσαρμόζετε ή δημιουργείτε παράγωγα έργα'
                  : 'Modify, adapt, or create derivative works',
                language === 'fr' ? 'Utiliser nos marques ou logos dans un contexte commercial'
                  : language === 'it' ? 'Utilizzare i nostri marchi o loghi in contesto commerciale'
                  : language === 'de' ? 'Unsere Marken oder Logos in kommerziellem Kontext verwenden'
                  : language === 'es' ? 'Usar nuestras marcas o logotipos en contexto comercial'
                  : language === 'el' ? 'Χρησιμοποιείτε τα εμπορικά μας σήματα ή λογότυπα σε εμπορικό πλαίσιο'
                  : 'Use our trademarks or logos in commercial context',
                language === 'fr' ? 'Extraire des données ou du contenu via scraping ou automatisation'
                  : language === 'it' ? 'Estrarre dati o contenuti tramite scraping o automazione'
                  : language === 'de' ? 'Daten oder Inhalte durch Scraping oder Automatisierung extrahieren'
                  : language === 'es' ? 'Extraer datos o contenido mediante scraping o automatización'
                  : language === 'el' ? 'Εξάγετε δεδομένα ή περιεχόμενο μέσω scraping ή αυτοματισμού'
                  : 'Extract data or content via scraping or automation',
                language === 'fr' ? 'Supprimer les avis de propriété ou les mentions d\'attribution'
                  : language === 'it' ? 'Rimuovere avvisi di proprietà o menzioni di attribuzione'
                  : language === 'de' ? 'Eigentumshinweise oder Zuordnungsangaben entfernen'
                  : language === 'es' ? 'Eliminar avisos de propiedad o menciones de atribución'
                  : language === 'el' ? 'Αφαιρείτε ειδοποιήσεις ιδιοκτησίας ή αναφορές απόδοσης'
                  : 'Remove proprietary notices or attribution references'
              ]} />
            </LegalSubsection>

            <LegalNotice type="warning" title={language === 'fr' ? 'PROTECTION DES DROITS D\'AUTEUR' : language === 'it' ? 'PROTEZIONE DEL COPYRIGHT' : language === 'de' ? 'URHEBERRECHTSSCHUTZ' : language === 'es' ? 'PROTECCIÓN DE DERECHOS DE AUTOR' : language === 'el' ? 'ΠΡΟΣΤΑΣΙΑ ΠΝΕΥΜΑΤΙΚΩΝ ΔΙΚΑΙΩΜΑΤΩΝ' : 'COPYRIGHT PROTECTION'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Les violations de nos droits de propriété intellectuelle seront poursuivies dans toute la mesure prévue par la loi. Nous pouvons demander des injonctions, des dommages-intérêts statutaires et le recouvrement des honoraires d\'avocat. Les violations répétées entraîneront la résiliation du compte et l\'interdiction permanente.'
                  : language === 'it' ? 'Le violazioni dei nostri diritti di proprietà intellettuale saranno perseguite nella massima misura consentita dalla legge. Possiamo richiedere ingiunzioni, danni statutari e recupero delle spese legali. Le violazioni ripetute comporteranno la risoluzione dell\'account e il divieto permanente.'
                  : language === 'de' ? 'Verstöße gegen unsere geistigen Eigentumsrechte werden im vollen Umfang des Gesetzes verfolgt. Wir können einstweilige Verfügungen, gesetzlichen Schadensersatz und Erstattung der Anwaltskosten fordern. Wiederholte Verstöße führen zur Kontoauflösung und dauerhaftem Verbot.'
                  : language === 'es' ? 'Las violaciones de nuestros derechos de propiedad intelectual serán perseguidas en la máxima medida permitida por la ley. Podemos solicitar mandatos judiciales, daños estatutarios y recuperación de honorarios legales. Las violaciones repetidas resultarán en terminación de cuenta y prohibición permanente.'
                  : language === 'el' ? 'Οι παραβιάσεις των δικαιωμάτων πνευματικής ιδιοκτησίας μας θα διωχθούν στο μέγιστο βαθμό που επιτρέπεται από το νόμο. Μπορούμε να ζητήσουμε διαταγές, νομοθετικές αποζημιώσεις και ανάκτηση δικηγορικών αμοιβών. Οι επαναλαμβανόμενες παραβιάσεις θα οδηγήσουν σε λήξη λογαριασμού και μόνιμη απαγόρευση.'
                  : 'Violations of our intellectual property rights will be prosecuted to the fullest extent of the law. We may seek injunctions, statutory damages, and recovery of attorney fees. Repeated violations will result in account termination and permanent ban.'}
              </p>
            </LegalNotice>
          </LegalSection>

          <LegalSection title={tocSections[12].title} id={tocSections[12].id} icon={<AlertTriangle size={24} />}>
            <LegalNotice type="important" title={language === 'fr' ? 'EXCLUSION DE GARANTIES' : language === 'it' ? 'ESCLUSIONE DI GARANZIE' : language === 'de' ? 'GEWÄHRLEISTUNGSAUSSCHLUSS' : language === 'es' ? 'EXCLUSIÓN DE GARANTÍAS' : language === 'el' ? 'ΑΠΟΚΛΕΙΣΜΟΣ ΕΓΓΥΗΣΕΩΝ' : 'DISCLAIMER OF WARRANTIES'}>
              <p className="text-sm sm:text-base font-bold mb-2">
                {language === 'fr' ? 'NOS SERVICES SONT FOURNIS "TELS QUELS" ET "SELON DISPONIBILITÉ" SANS GARANTIES D\'AUCUNE SORTE, EXPRESSES OU IMPLICITES.'
                  : language === 'it' ? 'I NOSTRI SERVIZI SONO FORNITI "COSÌ COME SONO" E "COME DISPONIBILI" SENZA GARANZIE DI ALCUN TIPO, ESPRESSE O IMPLICITE.'
                  : language === 'de' ? 'UNSERE DIENSTE WERDEN "WIE BESEHEN" UND "WIE VERFÜGBAR" OHNE GARANTIEN JEGLICHER ART, AUSDRÜCKLICH ODER STILLSCHWEIGEND, BEREITGESTELLT.'
                  : language === 'es' ? 'NUESTROS SERVICIOS SE PROPORCIONAN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS.'
                  : language === 'el' ? 'ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ ΠΑΡΕΧΟΝΤΑΙ "ΩΣ ΕΧΟΥΝ" ΚΑΙ "ΟΠΩΣ ΕΙΝΑΙ ΔΙΑΘΕΣΙΜΕΣ" ΧΩΡΙΣ ΕΓΓΥΗΣΕΙΣ ΟΠΟΙΟΥΔΗΠΟΤΕ ΤΥΠΟΥ, ΡΗΤΕΣ Ή ΣΙΩΠΗΡΕΣ.'
                  : 'OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.'}
              </p>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Nous déclinons expressément toute garantie de qualité marchande, d\'adéquation à un usage particulier, de non-contrefaçon, de disponibilité, de fiabilité, de précision ou d\'exhaustivité.'
                  : language === 'it' ? 'Escludiamo espressamente ogni garanzia di commerciabilità, idoneità per uno scopo particolare, non violazione, disponibilità, affidabilità, accuratezza o completezza.'
                  : language === 'de' ? 'Wir schließen ausdrücklich jegliche Garantie der Marktgängigkeit, Eignung für einen bestimmten Zweck, Nichtverletzung, Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder Vollständigkeit aus.'
                  : language === 'es' ? 'Excluimos expresamente cualquier garantía de comerciabilidad, idoneidad para un propósito particular, no infracción, disponibilidad, confiabilidad, precisión o integridad.'
                  : language === 'el' ? 'Αποκλείουμε ρητά κάθε εγγύηση εμπορευσιμότητας, καταλληλότητας για συγκεκριμένο σκοπό, μη παραβίασης, διαθεσιμότητας, αξιοπιστίας, ακρίβειας ή πληρότητας.'
                  : 'We expressly disclaim all warranties of merchantability, fitness for a particular purpose, non-infringement, availability, reliability, accuracy, or completeness.'}
              </p>
            </LegalNotice>

            <LegalSubsection title={language === 'fr' ? 'Exclusions de Responsabilité' : language === 'it' ? 'Esclusioni di Responsabilità' : language === 'de' ? 'Haftungsausschlüsse' : language === 'es' ? 'Exclusiones de Responsabilidad' : language === 'el' ? 'Αποκλεισμοί Ευθύνης' : 'Liability Exclusions'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Dans toute la mesure permise par la loi, Aareal Bank AG ne sera pas responsable de :'
                  : language === 'it' ? 'Nella massima misura consentita dalla legge, Aareal Bank AG non sarà responsabile per:'
                  : language === 'de' ? 'Im größtmöglichen gesetzlich zulässigen Umfang haftet Aareal Bank AG nicht für:'
                  : language === 'es' ? 'En la máxima medida permitida por la ley, Aareal Bank AG no será responsable de:'
                  : language === 'el' ? 'Στο μέγιστο βαθμό που επιτρέπεται από το νόμο, η Aareal Bank AG δεν θα είναι υπεύθυνη για:'
                  : 'To the maximum extent permitted by law, Aareal Bank AG shall not be liable for:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Dommages indirects, accessoires, spéciaux, consécutifs ou punitifs'
                  : language === 'it' ? 'Danni indiretti, incidentali, speciali, consequenziali o punitivi'
                  : language === 'de' ? 'Indirekte, zufällige, besondere, Folge- oder Strafschäden'
                  : language === 'es' ? 'Daños indirectos, incidentales, especiales, consecuentes o punitivos'
                  : language === 'el' ? 'Έμμεσες, παρεμπίπτουσες, ειδικές, επακόλουθες ή τιμωρητικές ζημίες'
                  : 'Indirect, incidental, special, consequential, or punitive damages',
                language === 'fr' ? 'Perte de profits, revenus, données ou opportunités commerciales'
                  : language === 'it' ? 'Perdita di profitti, ricavi, dati o opportunità commerciali'
                  : language === 'de' ? 'Verlust von Gewinnen, Einnahmen, Daten oder Geschäftsmöglichkeiten'
                  : language === 'es' ? 'Pérdida de beneficios, ingresos, datos u oportunidades comerciales'
                  : language === 'el' ? 'Απώλεια κερδών, εσόδων, δεδομένων ή επιχειρηματικών ευκαιριών'
                  : 'Loss of profits, revenue, data, or business opportunities',
                language === 'fr' ? 'Erreurs ou imprécisions dans les données de marché ou les prix'
                  : language === 'it' ? 'Errori o inesattezze nei dati di mercato o nei prezzi'
                  : language === 'de' ? 'Fehler oder Ungenauigkeiten in Marktdaten oder Preisen'
                  : language === 'es' ? 'Errores o inexactitudes en datos de mercado o precios'
                  : language === 'el' ? 'Λάθη ή ανακρίβειες σε δεδομένα αγοράς ή τιμές'
                  : 'Errors or inaccuracies in market data or pricing',
                language === 'fr' ? 'Interruptions de service, temps d\'arrêt ou indisponibilité'
                  : language === 'it' ? 'Interruzioni del servizio, tempi di inattività o indisponibilità'
                  : language === 'de' ? 'Dienstunterbrechungen, Ausfallzeiten oder Nichtverfügbarkeit'
                  : language === 'es' ? 'Interrupciones de servicio, tiempo de inactividad o no disponibilidad'
                  : language === 'el' ? 'Διακοπές υπηρεσιών, χρόνος διακοπής λειτουργίας ή μη διαθεσιμότητα'
                  : 'Service interruptions, downtime, or unavailability',
                language === 'fr' ? 'Actes de tiers, y compris piratage, fraude ou violations'
                  : language === 'it' ? 'Atti di terzi, inclusi hacking, frode o violazioni'
                  : language === 'de' ? 'Handlungen Dritter, einschließlich Hacking, Betrug oder Verstöße'
                  : language === 'es' ? 'Actos de terceros, incluidos piratería, fraude o violaciones'
                  : language === 'el' ? 'Πράξεις τρίτων, συμπεριλαμβανομένου hacking, απάτης ή παραβιάσεων'
                  : 'Acts of third parties, including hacking, fraud, or breaches',
                language === 'fr' ? 'Cas de force majeure, catastrophes naturelles ou événements hors de notre contrôle'
                  : language === 'it' ? 'Forza maggiore, catastrofi naturali o eventi al di fuori del nostro controllo'
                  : language === 'de' ? 'Höhere Gewalt, Naturkatastrophen oder Ereignisse außerhalb unserer Kontrolle'
                  : language === 'es' ? 'Fuerza mayor, desastres naturales o eventos fuera de nuestro control'
                  : language === 'el' ? 'Ανωτέρα βία, φυσικές καταστροφές ή γεγονότα εκτός του ελέγχου μας'
                  : 'Force majeure, natural disasters, or events beyond our control',
                language === 'fr' ? 'Modifications réglementaires ou gouvernementales affectant les services'
                  : language === 'it' ? 'Cambiamenti normativi o governativi che influenzano i servizi'
                  : language === 'de' ? 'Regulatorische oder staatliche Änderungen, die Dienste beeinträchtigen'
                  : language === 'es' ? 'Cambios regulatorios o gubernamentales que afectan los servicios'
                  : language === 'el' ? 'Ρυθμιστικές ή κυβερνητικές αλλαγές που επηρεάζουν τις υπηρεσίες'
                  : 'Regulatory or governmental changes affecting services'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Plafond de Responsabilité' : language === 'it' ? 'Limite di Responsabilità' : language === 'de' ? 'Haftungsobergrenze' : language === 'es' ? 'Límite de Responsabilidad' : language === 'el' ? 'Ανώτατο Όριο Ευθύνης' : 'Liability Cap'}>
              <p className="text-sm sm:text-base font-bold">
                {language === 'fr' ? 'DANS TOUTE LA MESURE PERMISE PAR LA LOI, LA RESPONSABILITÉ TOTALE DE Aareal Bank AG ENVERS VOUS POUR TOUTE RÉCLAMATION DÉCOULANT DE OU LIÉE À VOTRE UTILISATION DE NOS SERVICES NE DÉPASSERA PAS LE MONTANT DES FRAIS QUE VOUS NOUS AVEZ PAYÉS AU COURS DES DOUZE (12) MOIS PRÉCÉDANT LA RÉCLAMATION, OU CENT EUROS (100€), SELON LE MONTANT LE PLUS ÉLEVÉ.'
                  : language === 'it' ? 'NELLA MASSIMA MISURA CONSENTITA DALLA LEGGE, LA RESPONSABILITÀ TOTALE DI Aareal Bank AG NEI TUOI CONFRONTI PER QUALSIASI RECLAMO DERIVANTE DA O RELATIVO AL TUO UTILIZZO DEI NOSTRI SERVIZI NON SUPERERÀ L\'IMPORTO DELLE COMMISSIONI CHE CI HAI PAGATO NEI DODICI (12) MESI PRECEDENTI IL RECLAMO, O CENTO EURO (100€), A SECONDA DI QUALE SIA MAGGIORE.'
                  : language === 'de' ? 'IM GRÖSSTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG ÜBERSTEIGT DIE GESAMTHAFTUNG VON Aareal Bank AG IHNEN GEGENÜBER FÜR ANSPRÜCHE, DIE SICH AUS IHRER NUTZUNG UNSERER DIENSTE ERGEBEN ODER DAMIT ZUSAMMENHÄNGEN, NICHT DEN BETRAG DER GEBÜHREN, DIE SIE UNS IN DEN ZWÖLF (12) MONATEN VOR DEM ANSPRUCH GEZAHLT HABEN, ODER EINHUNDERT EURO (100€), JE NACHDEM, WELCHER BETRAG HÖHER IST.'
                  : language === 'es' ? 'EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, LA RESPONSABILIDAD TOTAL DE Aareal Bank AG HACIA USTED POR CUALQUIER RECLAMO QUE SURJA DE O ESTÉ RELACIONADO CON SU USO DE NUESTROS SERVICIOS NO EXCEDERÁ LA CANTIDAD DE TARIFAS QUE NOS HAYA PAGADO EN LOS DOCE (12) MESES ANTERIORES AL RECLAMO, O CIEN EUROS (100€), LO QUE SEA MAYOR.'
                  : language === 'el' ? 'ΣΤΟ ΜΕΓΙΣΤΟ ΒΑΘΜΟ ΠΟΥ ΕΠΙΤΡΕΠΕΤΑΙ ΑΠΟ ΤΟ ΝΟΜΟ, Η ΣΥΝΟΛΙΚΗ ΕΥΘΥΝΗ ΤΗΣ Aareal Bank AG ΠΡΟΣ ΕΣΑΣ ΓΙΑ ΟΠΟΙΑΔΗΠΟΤΕ ΑΞΙΩΣΗ ΠΟΥ ΠΡΟΚΥΠΤΕΙ ΑΠΟ Ή ΣΧΕΤΙΖΕΤΑΙ ΜΕ ΤΗ ΧΡΗΣΗ ΤΩΝ ΥΠΗΡΕΣΙΩΝ ΜΑΣ ΔΕΝ ΘΑ ΥΠΕΡΒΑΙΝΕΙ ΤΟ ΠΟΣΟ ΤΩΝ ΠΡΟΜΗΘΕΙΩΝ ΠΟΥ ΜΑΣ ΕΧΕΤΕ ΠΛΗΡΩΣΕΙ ΚΑΤΑ ΤΟΥΣ ΔΩΔΕΚΑ (12) ΜΗΝΕΣ ΠΡΙΝ ΑΠΟ ΤΗΝ ΑΞΙΩΣΗ, Ή ΕΚΑΤΟ ΕΥΡΩ (100€), ΟΠΟΙΟ ΕΙΝΑΙ ΜΕΓΑΛΥΤΕΡΟ.'
                  : 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, Aareal Bank AG\'S TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM OR RELATED TO YOUR USE OF OUR SERVICES SHALL NOT EXCEED THE AMOUNT OF FEES YOU HAVE PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED EUROS (€100), WHICHEVER IS GREATER.'}
              </p>
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[13].title} id={tocSections[13].id} icon={<Shield size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Vous acceptez de défendre, d\'indemniser et de dégager Aareal Bank AG, ses dirigeants, administrateurs, employés, agents, partenaires et concédants de licence de toute réclamation, responsabilité, dommage, perte et dépense découlant de ou liée à :'
                : language === 'it' ? 'Accetti di difendere, indennizzare e tenere indenne Aareal Bank AG, i suoi funzionari, direttori, dipendenti, agenti, partner e licenzianti da qualsiasi reclamo, responsabilità, danno, perdita e spesa derivante da o relativa a:'
                : language === 'de' ? 'Sie verpflichten sich, Aareal Bank AG, seine leitenden Angestellten, Direktoren, Mitarbeiter, Vertreter, Partner und Lizenzgeber gegen Ansprüche, Verbindlichkeiten, Schäden, Verluste und Ausgaben zu verteidigen, schadlos zu halten und freizustellen, die sich aus oder im Zusammenhang mit:'
                : language === 'es' ? 'Acepta defender, indemnizar y mantener indemne a Aareal Bank AG, sus funcionarios, directores, empleados, agentes, socios y licenciantes de cualquier reclamo, responsabilidad, daño, pérdida y gasto que surja de o esté relacionado con:'
                : language === 'el' ? 'Συμφωνείτε να υπερασπιστείτε, να αποζημιώσετε και να απαλλάξετε την Aareal Bank AG, τους υπαλλήλους, διευθυντές, εργαζόμενους, πράκτορες, εταίρους και αδειοδόχους της από οποιαδήποτε αξίωση, ευθύνη, ζημία, απώλεια και δαπάνη που προκύπτει από ή σχετίζεται με:'
                : 'You agree to defend, indemnify, and hold harmless Aareal Bank AG, its officers, directors, employees, agents, partners, and licensors from any claim, liability, damage, loss, and expense arising from or related to:'}
            </p>

            <LegalList items={[
              language === 'fr' ? 'Votre violation de cet Accord ou de toute loi ou réglementation'
                : language === 'it' ? 'La tua violazione di questo Accordo o di qualsiasi legge o regolamento'
                : language === 'de' ? 'Ihre Verletzung dieser Vereinbarung oder eines Gesetzes oder einer Verordnung'
                : language === 'es' ? 'Su violación de este Acuerdo o de cualquier ley o regulación'
                : language === 'el' ? 'Η παραβίασή σας αυτής της Συμφωνίας ή οποιουδήποτε νόμου ή κανονισμού'
                : 'Your violation of this Agreement or any law or regulation',
              language === 'fr' ? 'Votre utilisation ou mauvaise utilisation de nos services'
                : language === 'it' ? 'Il tuo utilizzo o uso improprio dei nostri servizi'
                : language === 'de' ? 'Ihre Nutzung oder Missbrauch unserer Dienste'
                : language === 'es' ? 'Su uso o mal uso de nuestros servicios'
                : language === 'el' ? 'Η χρήση ή κατάχρηση των υπηρεσιών μας'
                : 'Your use or misuse of our services',
              language === 'fr' ? 'Votre violation des droits d\'un tiers, y compris les droits de propriété intellectuelle'
                : language === 'it' ? 'La tua violazione dei diritti di terzi, inclusi i diritti di proprietà intellettuale'
                : language === 'de' ? 'Ihre Verletzung von Rechten Dritter, einschließlich geistiger Eigentumsrechte'
                : language === 'es' ? 'Su violación de los derechos de terceros, incluidos los derechos de propiedad intelectual'
                : language === 'el' ? 'Η παραβίασή σας των δικαιωμάτων τρίτων, συμπεριλαμβανομένων των δικαιωμάτων πνευματικής ιδιοκτησίας'
                : 'Your violation of any third party rights, including intellectual property rights',
              language === 'fr' ? 'Toute activité frauduleuse, illégale ou non autorisée menée via votre compte'
                : language === 'it' ? 'Qualsiasi attività fraudolenta, illegale o non autorizzata condotta tramite il tuo account'
                : language === 'de' ? 'Jegliche betrügerische, illegale oder unbefugte Aktivität über Ihr Konto'
                : language === 'es' ? 'Cualquier actividad fraudulenta, ilegal o no autorizada realizada a través de su cuenta'
                : language === 'el' ? 'Οποιαδήποτε δόλια, παράνομη ή μη εξουσιοδοτημένη δραστηριότητα που διεξάγεται μέσω του λογαριασμού σας'
                : 'Any fraudulent, illegal, or unauthorized activity conducted through your account',
              language === 'fr' ? 'Vos déclarations, garanties ou engagements dans cet Accord'
                : language === 'it' ? 'Le tue dichiarazioni, garanzie o impegni in questo Accordo'
                : language === 'de' ? 'Ihre Darstellungen, Garantien oder Zusagen in dieser Vereinbarung'
                : language === 'es' ? 'Sus declaraciones, garantías o compromisos en este Acuerdo'
                : language === 'el' ? 'Οι δηλώσεις, εγγυήσεις ή δεσμεύσεις σας σε αυτή τη Συμφωνία'
                : 'Your representations, warranties, or commitments in this Agreement',
              language === 'fr' ? 'Tout contenu que vous publiez, téléchargez ou transmettez via nos services'
                : language === 'it' ? 'Qualsiasi contenuto che pubblichi, carichi o trasmetti tramite i nostri servizi'
                : language === 'de' ? 'Jeglicher Inhalt, den Sie über unsere Dienste veröffentlichen, hochladen oder übertragen'
                : language === 'es' ? 'Cualquier contenido que publique, cargue o transmita a través de nuestros servicios'
                : language === 'el' ? 'Οποιοδήποτε περιεχόμενο δημοσιεύετε, μεταφορτώνετε ή μεταδίδετε μέσω των υπηρεσιών μας'
                : 'Any content you post, upload, or transmit through our services'
            ]} />

            <p className="text-sm sm:text-base mt-4 font-bold">
              {language === 'fr' ? 'Cette indemnisation comprend tous les dommages-intérêts, jugements, règlements, pertes, coûts, dépenses et honoraires (y compris les honoraires d\'avocat raisonnables) encourus dans le cadre de toute réclamation, action ou procédure.'
                : language === 'it' ? 'Questa indennizzazione include tutti i danni, sentenze, accordi, perdite, costi, spese e commissioni (incluse le ragionevoli spese legali) sostenute in relazione a qualsiasi reclamo, azione o procedimento.'
                : language === 'de' ? 'Diese Freistellung umfasst alle Schäden, Urteile, Vergleiche, Verluste, Kosten, Ausgaben und Gebühren (einschließlich angemessener Anwaltskosten), die im Zusammenhang mit Ansprüchen, Klagen oder Verfahren entstehen.'
                : language === 'es' ? 'Esta indemnización incluye todos los daños, sentencias, acuerdos, pérdidas, costos, gastos y honorarios (incluidos los honorarios legales razonables) incurridos en relación con cualquier reclamo, acción o procedimiento.'
                : language === 'el' ? 'Αυτή η αποζημίωση περιλαμβάνει όλες τις ζημίες, αποφάσεις, διακανονισμούς, απώλειες, κόστη, δαπάνες και αμοιβές (συμπεριλαμβανομένων εύλογων δικηγορικών αμοιβών) που προκύπτουν σε σχέση με οποιαδήποτε αξίωση, ενέργεια ή διαδικασία.'
                : 'This indemnification includes all damages, judgments, settlements, losses, costs, expenses, and fees (including reasonable attorney fees) incurred in connection with any claim, action, or proceeding.'}
            </p>
          </LegalSection>

          <LegalSection title={tocSections[14].title} id={tocSections[14].id} icon={<Scale size={24} />}>
            <LegalSubsection title={language === 'fr' ? 'Droit Applicable' : language === 'it' ? 'Legge Applicabile' : language === 'de' ? 'Anwendbares Recht' : language === 'es' ? 'Ley Aplicable' : language === 'el' ? 'Εφαρμοστέο Δίκαιο' : 'Governing Law'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Cet Accord sera régi et interprété conformément aux lois de Malte, sans égard à ses dispositions sur les conflits de lois. Toute procédure judiciaire découlant de ou liée à cet Accord sera soumise à la juridiction exclusive des tribunaux de Malte.'
                  : language === 'it' ? 'Questo Accordo sarà regolato e interpretato in conformità con le leggi di Malta, senza riguardo alle sue disposizioni sui conflitti di leggi. Qualsiasi procedimento legale derivante da o relativo a questo Accordo sarà soggetto alla giurisdizione esclusiva dei tribunali di Malta.'
                  : language === 'de' ? 'Diese Vereinbarung wird nach den Gesetzen Maltas geregelt und ausgelegt, ohne Rücksicht auf deren Kollisionsnormen. Alle Gerichtsverfahren, die sich aus oder im Zusammenhang mit dieser Vereinbarung ergeben, unterliegen der ausschließlichen Zuständigkeit der Gerichte Maltas.'
                  : language === 'es' ? 'Este Acuerdo se regirá e interpretará de acuerdo con las leyes de Malta, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier procedimiento legal que surja de o esté relacionado con este Acuerdo estará sujeto a la jurisdicción exclusiva de los tribunales de Malta.'
                  : language === 'el' ? 'Αυτή η Συμφωνία θα διέπεται και θα ερμηνεύεται σύμφωνα με τους νόμους της Μάλτας, χωρίς να λαμβάνονται υπόψη οι διατάξεις της για συγκρούσεις νόμων. Οποιαδήποτε νομική διαδικασία που προκύπτει από ή σχετίζεται με αυτή τη Συμφωνία θα υπόκειται στην αποκλειστική δικαιοδοσία των δικαστηρίων της Μάλτας.'
                  : 'This Agreement shall be governed by and construed in accordance with the laws of Malta, without regard to its conflict of law provisions. Any legal proceeding arising from or related to this Agreement shall be subject to the exclusive jurisdiction of the courts of Malta.'}
              </p>
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Arbitrage Obligatoire' : language === 'it' ? 'Arbitrato Obbligatorio' : language === 'de' ? 'Verbindliche Schiedsgerichtsbarkeit' : language === 'es' ? 'Arbitraje Obligatorio' : language === 'el' ? 'Υποχρεωτική Διαιτησία' : 'Mandatory Arbitration'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Tout litige découlant de ou lié à cet Accord sera résolu par arbitrage contraignant conformément aux règles du Centre de Médiation et d\'Arbitrage de Malte (MCAM). L\'arbitrage aura lieu à Malte et sera mené en anglais, sauf accord contraire des parties.'
                  : language === 'it' ? 'Qualsiasi controversia derivante da o relativa a questo Accordo sarà risolta mediante arbitrato vincolante in conformità con le regole del Centro di Mediazione e Arbitrato di Malta (MCAM). L\'arbitrato si terrà a Malta e sarà condotto in inglese, salvo diverso accordo delle parti.'
                  : language === 'de' ? 'Alle Streitigkeiten, die sich aus oder im Zusammenhang mit dieser Vereinbarung ergeben, werden durch verbindliche Schiedsgerichtsbarkeit gemäß den Regeln des Malta Mediation and Arbitration Centre (MCAM) beigelegt. Das Schiedsverfahren findet in Malta statt und wird auf Englisch durchgeführt, sofern die Parteien nichts anderes vereinbaren.'
                  : language === 'es' ? 'Cualquier disputa que surja de o esté relacionada con este Acuerdo se resolverá mediante arbitraje vinculante de acuerdo con las reglas del Centro de Mediación y Arbitraje de Malta (MCAM). El arbitraje tendrá lugar en Malta y se llevará a cabo en inglés, a menos que las partes acuerden lo contrario.'
                  : language === 'el' ? 'Οποιαδήποτε διαφορά που προκύπτει από ή σχετίζεται με αυτή τη Συμφωνία θα επιλυθεί μέσω δεσμευτικής διαιτησίας σύμφωνα με τους κανόνες του Κέντρου Διαμεσολάβησης και Διαιτησίας της Μάλτας (MCAM). Η διαιτησία θα διεξαχθεί στη Μάλτα και θα πραγματοποιηθεί στα αγγλικά, εκτός εάν οι μέρη συμφωνήσουν διαφορετικά.'
                  : 'Any dispute arising from or related to this Agreement shall be resolved through binding arbitration in accordance with the rules of the Malta Mediation and Arbitration Centre (MCAM). The arbitration shall take place in Malta and be conducted in English, unless otherwise agreed by the parties.'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'La sentence arbitrale sera définitive et contraignante pour les deux parties'
                  : language === 'it' ? 'Il lodo arbitrale sarà finale e vincolante per entrambe le parti'
                  : language === 'de' ? 'Der Schiedsspruch ist endgültig und für beide Parteien bindend'
                  : language === 'es' ? 'El laudo arbitral será final y vinculante para ambas partes'
                  : language === 'el' ? 'Η απόφαση της διαιτησίας θα είναι τελική και δεσμευτική για αμφότερα τα μέρη'
                  : 'The arbitral award shall be final and binding on both parties',
                language === 'fr' ? 'Chaque partie supportera ses propres frais d\'arbitrage, sauf disposition contraire de l\'arbitre'
                  : language === 'it' ? 'Ciascuna parte sosterrà i propri costi di arbitrato, salvo diversa disposizione dell\'arbitro'
                  : language === 'de' ? 'Jede Partei trägt ihre eigenen Schiedskosten, sofern der Schiedsrichter nichts anderes bestimmt'
                  : language === 'es' ? 'Cada parte asumirá sus propios costos de arbitraje, a menos que el árbitro disponga lo contrario'
                  : language === 'el' ? 'Κάθε μέρος θα επωμίζεται τα δικά του έξοδα διαιτησίας, εκτός εάν ο διαιτητής ορίσει διαφορετικά'
                  : 'Each party shall bear its own arbitration costs, unless otherwise determined by the arbitrator',
                language === 'fr' ? 'Vous renoncez au droit de participer à un recours collectif ou à un arbitrage collectif'
                  : language === 'it' ? 'Rinunci al diritto di partecipare a un\'azione legale collettiva o a un arbitrato collettivo'
                  : language === 'de' ? 'Sie verzichten auf das Recht, an einer Sammelklage oder kollektiven Schiedsgerichtsbarkeit teilzunehmen'
                  : language === 'es' ? 'Renuncia al derecho de participar en una demanda colectiva o arbitraje colectivo'
                  : language === 'el' ? 'Παραιτείστε από το δικαίωμα να συμμετάσχετε σε ομαδική αγωγή ή ομαδική διαιτησία'
                  : 'You waive the right to participate in a class action or class-wide arbitration'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Exceptions à l\'Arbitrage' : language === 'it' ? 'Eccezioni all\'Arbitrato' : language === 'de' ? 'Ausnahmen von der Schiedsgerichtsbarkeit' : language === 'es' ? 'Excepciones al Arbitraje' : language === 'el' ? 'Εξαιρέσεις από τη Διαιτησία' : 'Exceptions to Arbitration'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Nonobstant la clause d\'arbitrage ci-dessus, l\'une ou l\'autre des parties peut demander une réparation équitable devant un tribunal compétent pour :'
                  : language === 'it' ? 'Nonostante la clausola arbitrale di cui sopra, ciascuna delle parti può richiedere un rimedio equo presso un tribunale competente per:'
                  : language === 'de' ? 'Ungeachtet der obigen Schiedsklausel kann jede Partei vor einem zuständigen Gericht Billigkeitsrechtsbehelfe für:'
                  : language === 'es' ? 'A pesar de la cláusula de arbitraje anterior, cualquiera de las partes puede solicitar recursos equitativos ante un tribunal competente para:'
                  : language === 'el' ? 'Παρά την παραπάνω ρήτρα διαιτησίας, οποιοδήποτε μέρος μπορεί να ζητήσει δίκαιη αποκατάσταση από αρμόδιο δικαστήριο για:'
                  : 'Notwithstanding the arbitration clause above, either party may seek equitable relief in a court of competent jurisdiction for:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Violations de droits de propriété intellectuelle'
                  : language === 'it' ? 'Violazioni dei diritti di proprietà intellettuale'
                  : language === 'de' ? 'Verletzungen geistiger Eigentumsrechte'
                  : language === 'es' ? 'Violaciones de derechos de propiedad intelectual'
                  : language === 'el' ? 'Παραβιάσεις δικαιωμάτων πνευματικής ιδιοκτησίας'
                  : 'Intellectual property rights violations',
                language === 'fr' ? 'Injonctions pour prévenir une utilisation non autorisée'
                  : language === 'it' ? 'Ingiunzioni per prevenire l\'uso non autorizzato'
                  : language === 'de' ? 'Einstweilige Verfügungen zur Verhinderung unbefugter Nutzung'
                  : language === 'es' ? 'Mandatos judiciales para prevenir uso no autorizado'
                  : language === 'el' ? 'Διαταγές για πρόληψη μη εξουσιοδοτημένης χρήσης'
                  : 'Injunctions to prevent unauthorized use',
                language === 'fr' ? 'Réclamations en petites créances dans les limites de compétence'
                  : language === 'it' ? 'Reclami per piccoli crediti entro i limiti di competenza'
                  : language === 'de' ? 'Ansprüche bei Gerichten für geringfügige Forderungen innerhalb der Zuständigkeitsgrenzen'
                  : language === 'es' ? 'Reclamos de pequeñas causas dentro de los límites de jurisdicción'
                  : language === 'el' ? 'Αξιώσεις μικρών αξιών εντός ορίων δικαιοδοσίας'
                  : 'Small claims court claims within jurisdictional limits'
              ]} />
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[15].title} id={tocSections[15].id} icon={<AlertTriangle size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'L\'une ou l\'autre des parties peut résilier cet Accord à tout moment sous réserve de certaines conditions et conséquences.'
                : language === 'it' ? 'Ciascuna delle parti può risolvere questo Accordo in qualsiasi momento soggetto a determinate condizioni e conseguenze.'
                : language === 'de' ? 'Jede Partei kann diese Vereinbarung jederzeit unter bestimmten Bedingungen und Konsequenzen kündigen.'
                : language === 'es' ? 'Cualquiera de las partes puede terminar este Acuerdo en cualquier momento sujeto a ciertas condiciones y consecuencias.'
                : language === 'el' ? 'Οποιοδήποτε μέρος μπορεί να τερματίσει αυτή τη Συμφωνία ανά πάσα στιγμή υπόκειται σε ορισμένες προϋποθέσεις και συνέπειες.'
                : 'Either party may terminate this Agreement at any time subject to certain conditions and consequences.'}
            </p>

            <LegalSubsection title={language === 'fr' ? 'Résiliation par Vous' : language === 'it' ? 'Risoluzione da Parte Tua' : language === 'de' ? 'Kündigung durch Sie' : language === 'es' ? 'Terminación por Usted' : language === 'el' ? 'Τερματισμός από Εσάς' : 'Termination by You'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Vous pouvez fermer votre compte et résilier cet Accord à tout moment en :'
                  : language === 'it' ? 'Puoi chiudere il tuo account e risolvere questo Accordo in qualsiasi momento:'
                  : language === 'de' ? 'Sie können Ihr Konto schließen und diese Vereinbarung jederzeit kündigen, indem Sie:'
                  : language === 'es' ? 'Puede cerrar su cuenta y terminar este Acuerdo en cualquier momento:'
                  : language === 'el' ? 'Μπορείτε να κλείσετε τον λογαριασμό σας και να τερματίσετε αυτή τη Συμφωνία ανά πάσα στιγμή:'
                  : 'You may close your account and terminate this Agreement at any time by:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Retrait de tous les fonds et actifs de votre compte'
                  : language === 'it' ? 'Prelevare tutti i fondi e le attività dal tuo account'
                  : language === 'de' ? 'Abhebung aller Gelder und Vermögenswerte von Ihrem Konto'
                  : language === 'es' ? 'Retirar todos los fondos y activos de su cuenta'
                  : language === 'el' ? 'Ανάληψη όλων των κεφαλαίων και περιουσιακών στοιχείων από τον λογαριασμό σας'
                  : 'Withdrawing all funds and assets from your account',
                language === 'fr' ? 'Soumission d\'une demande de fermeture de compte via nos paramètres de compte'
                  : language === 'it' ? 'Invio di una richiesta di chiusura account tramite le impostazioni del tuo account'
                  : language === 'de' ? 'Einreichen einer Kontoschließungsanfrage über Ihre Kontoeinstellungen'
                  : language === 'es' ? 'Enviar una solicitud de cierre de cuenta a través de la configuración de su cuenta'
                  : language === 'el' ? 'Υποβολή αιτήματος κλεισίματος λογαριασμού μέσω των ρυθμίσεων λογαριασμού σας'
                  : 'Submitting an account closure request through our account settings',
                language === 'fr' ? 'Contacter notre équipe de support pour assistance'
                  : language === 'it' ? 'Contattare il nostro team di supporto per assistenza'
                  : language === 'de' ? 'Kontaktieren Sie unser Support-Team für Unterstützung'
                  : language === 'es' ? 'Contactar a nuestro equipo de soporte para asistencia'
                  : language === 'el' ? 'Επικοινωνήστε με την ομάδα υποστήριξής μας για βοήθεια'
                  : 'Contacting our support team for assistance'
              ]} />
              <p className="text-sm sm:text-base mt-3">
                {language === 'fr' ? 'Notez que vous restez responsable de toutes les transactions en attente, frais dus et obligations contractées avant la résiliation.'
                  : language === 'it' ? 'Nota che rimani responsabile di tutte le transazioni in sospeso, commissioni dovute e obblighi sostenuti prima della risoluzione.'
                  : language === 'de' ? 'Bitte beachten Sie, dass Sie für alle ausstehenden Transaktionen, fälligen Gebühren und vor der Kündigung eingegangenen Verpflichtungen verantwortlich bleiben.'
                  : language === 'es' ? 'Tenga en cuenta que sigue siendo responsable de todas las transacciones pendientes, tarifas adeudadas y obligaciones incurridas antes de la terminación.'
                  : language === 'el' ? 'Σημειώστε ότι παραμένετε υπεύθυνοι για όλες τις εκκρεμείς συναλλαγές, οφειλόμενες προμήθειες και υποχρεώσεις που έχουν αναληφθεί πριν από τον τερματισμό.'
                  : 'Note that you remain responsible for all pending transactions, fees owed, and obligations incurred prior to termination.'}
              </p>
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Résiliation par Aareal Bank AG' : language === 'it' ? 'Risoluzione da Parte di Aareal Bank AG' : language === 'de' ? 'Kündigung durch Aareal Bank AG' : language === 'es' ? 'Terminación por Aareal Bank AG' : language === 'el' ? 'Τερματισμός από την Aareal Bank AG' : 'Termination by Aareal Bank AG'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'Aareal Bank AG peut suspendre ou résilier votre compte immédiatement et sans préavis si :'
                  : language === 'it' ? 'Aareal Bank AG può sospendere o risolvere il tuo account immediatamente e senza preavviso se:'
                  : language === 'de' ? 'Aareal Bank AG kann Ihr Konto sofort und ohne Vorankündigung aussetzen oder kündigen, wenn:'
                  : language === 'es' ? 'Aareal Bank AG puede suspender o terminar su cuenta inmediatamente y sin previo aviso si:'
                  : language === 'el' ? 'Η Aareal Bank AG μπορεί να αναστείλει ή να τερματίσει τον λογαριασμό σας αμέσως και χωρίς προειδοποίηση εάν:'
                  : 'Aareal Bank AG may suspend or terminate your account immediately and without notice if:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Vous violez une disposition de cet Accord'
                  : language === 'it' ? 'Violi qualsiasi disposizione di questo Accordo'
                  : language === 'de' ? 'Sie gegen eine Bestimmung dieser Vereinbarung verstoßen'
                  : language === 'es' ? 'Viola cualquier disposición de este Acuerdo'
                  : language === 'el' ? 'Παραβιάζετε οποιαδήποτε διάταξη αυτής της Συμφωνίας'
                  : 'You violate any provision of this Agreement',
                language === 'fr' ? 'Nous soupçonnons une activité frauduleuse ou illégale'
                  : language === 'it' ? 'Sospettiamo attività fraudolente o illegali'
                  : language === 'de' ? 'Wir betrügerische oder illegale Aktivitäten vermuten'
                  : language === 'es' ? 'Sospechamos actividad fraudulenta o ilegal'
                  : language === 'el' ? 'Υποψιαζόμαστε δόλια ή παράνομη δραστηριότητα'
                  : 'We suspect fraudulent or illegal activity',
                language === 'fr' ? 'Vous ne parvenez pas à compléter la vérification KYC'
                  : language === 'it' ? 'Non riesci a completare la verifica KYC'
                  : language === 'de' ? 'Sie die KYC-Verifizierung nicht abschließen'
                  : language === 'es' ? 'No completa la verificación KYC'
                  : language === 'el' ? 'Αποτυγχάνετε να ολοκληρώσετε την επαλήθευση KYC'
                  : 'You fail to complete KYC verification',
                language === 'fr' ? 'Vous accédez depuis une juridiction interdite'
                  : language === 'it' ? 'Accedi da una giurisdizione vietata'
                  : language === 'de' ? 'Sie von einer verbotenen Gerichtsbarkeit aus zugreifen'
                  : language === 'es' ? 'Accede desde una jurisdicción prohibida'
                  : language === 'el' ? 'Αποκτάτε πρόσβαση από απαγορευμένη δικαιοδοσία'
                  : 'You access from a prohibited jurisdiction',
                language === 'fr' ? 'Nous sommes tenus de le faire par la loi ou une décision réglementaire'
                  : language === 'it' ? 'Siamo tenuti a farlo per legge o decisione normativa'
                  : language === 'de' ? 'Wir gesetzlich oder durch eine behördliche Entscheidung dazu verpflichtet sind'
                  : language === 'es' ? 'Estamos obligados a hacerlo por ley o decisión regulatoria'
                  : language === 'el' ? 'Είμαστε υποχρεωμένοι να το κάνουμε από νόμο ή ρυθμιστική απόφαση'
                  : 'We are required to do so by law or regulatory decision',
                language === 'fr' ? 'Votre compte reste inactif pendant plus de 24 mois'
                  : language === 'it' ? 'Il tuo account rimane inattivo per più di 24 mesi'
                  : language === 'de' ? 'Ihr Konto für mehr als 24 Monate inaktiv bleibt'
                  : language === 'es' ? 'Su cuenta permanece inactiva durante más de 24 meses'
                  : language === 'el' ? 'Ο λογαριασμός σας παραμένει ανενεργός για περισσότερους από 24 μήνες'
                  : 'Your account remains inactive for more than 24 months'
              ]} />
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Effets de la Résiliation' : language === 'it' ? 'Effetti della Risoluzione' : language === 'de' ? 'Auswirkungen der Kündigung' : language === 'es' ? 'Efectos de la Terminación' : language === 'el' ? 'Συνέπειες Τερματισμού' : 'Effects of Termination'}>
              <p className="text-sm sm:text-base mb-3">
                {language === 'fr' ? 'À la résiliation de votre compte :'
                  : language === 'it' ? 'Alla risoluzione del tuo account:'
                  : language === 'de' ? 'Bei Kündigung Ihres Kontos:'
                  : language === 'es' ? 'Al terminar su cuenta:'
                  : language === 'el' ? 'Κατά τον τερματισμό του λογαριασμού σας:'
                  : 'Upon termination of your account:'}
              </p>
              <LegalList items={[
                language === 'fr' ? 'Votre accès à nos services sera immédiatement révoqué'
                  : language === 'it' ? 'Il tuo accesso ai nostri servizi sarà immediatamente revocato'
                  : language === 'de' ? 'Ihr Zugriff auf unsere Dienste wird sofort widerrufen'
                  : language === 'es' ? 'Su acceso a nuestros servicios será inmediatamente revocado'
                  : language === 'el' ? 'Η πρόσβασή σας στις υπηρεσίες μας θα ανακληθεί αμέσως'
                  : 'Your access to our services will be immediately revoked',
                language === 'fr' ? 'Vous devez retirer tous les fonds restants dans les 30 jours'
                  : language === 'it' ? 'Devi prelevare tutti i fondi rimanenti entro 30 giorni'
                  : language === 'de' ? 'Sie müssen alle verbleibenden Gelder innerhalb von 30 Tagen abheben'
                  : language === 'es' ? 'Debe retirar todos los fondos restantes dentro de 30 días'
                  : language === 'el' ? 'Πρέπει να αποσύρετε όλα τα υπόλοιπα κεφάλαια εντός 30 ημερών'
                  : 'You must withdraw all remaining funds within 30 days',
                language === 'fr' ? 'Toutes les transactions en attente seront annulées ou complétées'
                  : language === 'it' ? 'Tutte le transazioni in sospeso saranno annullate o completate'
                  : language === 'de' ? 'Alle ausstehenden Transaktionen werden storniert oder abgeschlossen'
                  : language === 'es' ? 'Todas las transacciones pendientes serán canceladas o completadas'
                  : language === 'el' ? 'Όλες οι εκκρεμείς συναλλαγές θα ακυρωθούν ή ολοκληρωθούν'
                  : 'All pending transactions will be canceled or completed',
                language === 'fr' ? 'Vos données seront conservées conformément à notre politique de confidentialité et aux exigences légales'
                  : language === 'it' ? 'I tuoi dati saranno conservati in conformità con la nostra politica sulla privacy e i requisiti legali'
                  : language === 'de' ? 'Ihre Daten werden gemäß unserer Datenschutzrichtlinie und gesetzlichen Anforderungen aufbewahrt'
                  : language === 'es' ? 'Sus datos se conservarán de acuerdo con nuestra política de privacidad y requisitos legales'
                  : language === 'el' ? 'Τα δεδομένα σας θα διατηρηθούν σύμφωνα με την πολιτική απορρήτου μας και τις νομικές απαιτήσεις'
                  : 'Your data will be retained in accordance with our privacy policy and legal requirements',
                language === 'fr' ? 'Les dispositions de cet Accord qui, par leur nature, survivent à la résiliation, resteront en vigueur'
                  : language === 'it' ? 'Le disposizioni di questo Accordo che per loro natura sopravvivono alla risoluzione, rimarranno in vigore'
                  : language === 'de' ? 'Bestimmungen dieser Vereinbarung, die ihrer Natur nach die Kündigung überdauern, bleiben in Kraft'
                  : language === 'es' ? 'Las disposiciones de este Acuerdo que por su naturaleza sobreviven a la terminación, permanecerán en vigencia'
                  : language === 'el' ? 'Οι διατάξεις αυτής της Συμφωνίας που από τη φύση τους επιζούν του τερματισμού, θα παραμείνουν σε ισχύ'
                  : 'Provisions of this Agreement that by their nature survive termination shall remain in effect'
              ]} />
            </LegalSubsection>
          </LegalSection>

          <LegalSection title={tocSections[16].title} id={tocSections[16].id} icon={<FileText size={24} />}>
            <p className="text-sm sm:text-base mb-4">
              {language === 'fr' ? 'Aareal Bank AG se réserve le droit de modifier, mettre à jour ou réviser cet Accord à tout moment. Les modifications substantielles vous seront notifiées comme suit :'
                : language === 'it' ? 'Aareal Bank AG si riserva il diritto di modificare, aggiornare o rivedere questo Accordo in qualsiasi momento. Le modifiche sostanziali ti saranno notificate come segue:'
                : language === 'de' ? 'Aareal Bank AG behält sich das Recht vor, diese Vereinbarung jederzeit zu ändern, zu aktualisieren oder zu überarbeiten. Wesentliche Änderungen werden Ihnen wie folgt mitgeteilt:'
                : language === 'es' ? 'Aareal Bank AG se reserva el derecho de modificar, actualizar o revisar este Acuerdo en cualquier momento. Las modificaciones sustanciales le serán notificadas de la siguiente manera:'
                : language === 'el' ? 'Η Aareal Bank AG διατηρεί το δικαίωμα να τροποποιήσει, να ενημερώσει ή να αναθεωρήσει αυτή τη Συμφωνία ανά πάσα στιγμή. Οι ουσιαστικές αλλαγές θα σας γνωστοποιηθούν ως εξής:'
                : 'Aareal Bank AG reserves the right to modify, update, or revise this Agreement at any time. Material changes will be notified to you as follows:'}
            </p>

            <LegalList items={[
              language === 'fr' ? 'Notification par email à votre adresse enregistrée'
                : language === 'it' ? 'Notifica via email al tuo indirizzo registrato'
                : language === 'de' ? 'Benachrichtigung per E-Mail an Ihre registrierte Adresse'
                : language === 'es' ? 'Notificación por correo electrónico a su dirección registrada'
                : language === 'el' ? 'Ειδοποίηση μέσω email στη δηλωμένη σας διεύθυνση'
                : 'Notification via email to your registered address',
              language === 'fr' ? 'Notification dans l\'application lors de votre prochaine connexion'
                : language === 'it' ? 'Notifica in-app al tuo prossimo accesso'
                : language === 'de' ? 'In-App-Benachrichtigung bei Ihrer nächsten Anmeldung'
                : language === 'es' ? 'Notificación en la aplicación en su próximo inicio de sesión'
                : language === 'el' ? 'Ειδοποίηση εντός εφαρμογής κατά την επόμενη σύνδεσή σας'
                : 'In-app notification upon your next login',
              language === 'fr' ? 'Avis sur notre site Web et bannières de plateforme'
                : language === 'it' ? 'Avviso sul nostro sito web e banner della piattaforma'
                : language === 'de' ? 'Hinweis auf unserer Website und Plattform-Banner'
                : language === 'es' ? 'Aviso en nuestro sitio web y banners de plataforma'
                : language === 'el' ? 'Ανακοίνωση στον ιστότοπό μας και banners πλατφόρμας'
                : 'Notice on our website and platform banners',
              language === 'fr' ? 'Préavis d\'au moins trente (30) jours calendaires avant l\'entrée en vigueur'
                : language === 'it' ? 'Preavviso di almeno trenta (30) giorni di calendario prima dell\'entrata in vigore'
                : language === 'de' ? 'Vorankündigung von mindestens dreißig (30) Kalendertagen vor Inkrafttreten'
                : language === 'es' ? 'Aviso previo de al menos treinta (30) días calendario antes de la entrada en vigencia'
                : language === 'el' ? 'Προειδοποίηση τουλάχιστον τριάντα (30) ημερολογιακών ημερών πριν την έναρξη ισχύος'
                : 'Advance notice of at least thirty (30) calendar days before effectiveness'
            ]} />

            <p className="text-sm sm:text-base mt-4 mb-3 font-bold">
              {language === 'fr' ? 'Votre Réponse aux Modifications'
                : language === 'it' ? 'La Tua Risposta alle Modifiche'
                : language === 'de' ? 'Ihre Antwort auf Änderungen'
                : language === 'es' ? 'Su Respuesta a las Modificaciones'
                : language === 'el' ? 'Η Απάντησή σας στις Αλλαγές'
                : 'Your Response to Changes'}
            </p>
            <p className="text-sm sm:text-base">
              {language === 'fr' ? 'Si vous n\'êtes pas d\'accord avec les modifications proposées, vous devez cesser d\'utiliser nos services et fermer votre compte avant la date d\'entrée en vigueur des modifications. Votre utilisation continue des services après la date d\'entrée en vigueur constitue votre acceptation des conditions modifiées.'
                : language === 'it' ? 'Se non sei d\'accordo con le modifiche proposte, devi cessare di utilizzare i nostri servizi e chiudere il tuo account prima della data di entrata in vigore delle modifiche. Il tuo uso continuato dei servizi dopo la data di entrata in vigore costituisce la tua accettazione dei termini modificati.'
                : language === 'de' ? 'Wenn Sie mit den vorgeschlagenen Änderungen nicht einverstanden sind, müssen Sie die Nutzung unserer Dienste einstellen und Ihr Konto vor dem Datum des Inkrafttretens der Änderungen schließen. Ihre fortgesetzte Nutzung der Dienste nach dem Datum des Inkrafttretens stellt Ihre Annahme der geänderten Bedingungen dar.'
                : language === 'es' ? 'Si no está de acuerdo con las modificaciones propuestas, debe dejar de usar nuestros servicios y cerrar su cuenta antes de la fecha de entrada en vigencia de las modificaciones. Su uso continuado de los servicios después de la fecha de entrada en vigencia constituye su aceptación de los términos modificados.'
                : language === 'el' ? 'Εάν διαφωνείτε με τις προτεινόμενες αλλαγές, πρέπει να σταματήσετε να χρησιμοποιείτε τις υπηρεσίες μας και να κλείσετε τον λογαριασμό σας πριν από την ημερομηνία έναρξης ισχύος των αλλαγών. Η συνεχιζόμενη χρήση των υπηρεσιών μετά την ημερομηνία έναρξης ισχύος συνιστά την αποδοχή των τροποποιημένων όρων.'
                : 'If you disagree with the proposed changes, you must cease using our services and close your account before the effective date of the changes. Your continued use of services after the effective date constitutes your acceptance of the modified terms.'}
            </p>
          </LegalSection>

          <LegalSection title={tocSections[17].title} id={tocSections[17].id} icon={<FileText size={24} />}>
            <LegalSubsection title={language === 'fr' ? 'Divisibilité' : language === 'it' ? 'Separabilità' : language === 'de' ? 'Salvatorische Klausel' : language === 'es' ? 'Divisibilidad' : language === 'el' ? 'Διαχωρισιμότητα' : 'Severability'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Si une disposition de cet Accord est jugée invalide, illégale ou inapplicable par un tribunal compétent, cette disposition sera modifiée et interprétée pour atteindre les objectifs de la disposition originale dans toute la mesure possible en vertu de la loi applicable, et les dispositions restantes resteront en pleine vigueur et effet.'
                  : language === 'it' ? 'Se una disposizione di questo Accordo è ritenuta invalida, illegale o inapplicabile da un tribunale competente, tale disposizione sarà modificata e interpretata per raggiungere gli obiettivi della disposizione originale nella massima misura possibile secondo la legge applicabile, e le disposizioni rimanenti rimarranno in pieno vigore ed effetto.'
                  : language === 'de' ? 'Sollte eine Bestimmung dieser Vereinbarung von einem zuständigen Gericht für ungültig, rechtswidrig oder nicht durchsetzbar befunden werden, wird diese Bestimmung geändert und ausgelegt, um die Ziele der ursprünglichen Bestimmung im größtmöglichen Umfang nach geltendem Recht zu erreichen, und die verbleibenden Bestimmungen bleiben in vollem Umfang gültig und wirksam.'
                  : language === 'es' ? 'Si un tribunal competente considera que una disposición de este Acuerdo es inválida, ilegal o inaplicable, dicha disposición se modificará e interpretará para lograr los objetivos de la disposición original en la mayor medida posible según la ley aplicable, y las disposiciones restantes permanecerán en pleno vigor y efecto.'
                  : language === 'el' ? 'Εάν μια διάταξη αυτής της Συμφωνίας κριθεί άκυρη, παράνομη ή μη εκτελεστή από αρμόδιο δικαστήριο, αυτή η διάταξη θα τροποποιηθεί και θα ερμηνευθεί για να επιτευχθούν οι στόχοι της αρχικής διάταξης στο μέγιστο δυνατό βαθμό σύμφωνα με την εφαρμοστέα νομοθεσία, και οι υπόλοιπες διατάξεις θα παραμείνουν σε πλήρη ισχύ και αποτέλεσμα.'
                  : 'If any provision of this Agreement is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be amended and interpreted to accomplish the objectives of the original provision to the fullest extent possible under applicable law, and the remaining provisions shall continue in full force and effect.'}
              </p>
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Intégralité de l\'Accord' : language === 'it' ? 'Accordo Completo' : language === 'de' ? 'Gesamte Vereinbarung' : language === 'es' ? 'Acuerdo Completo' : language === 'el' ? 'Πλήρης Συμφωνία' : 'Entire Agreement'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Cet Accord, ainsi que notre Politique de Confidentialité, notre Déclaration de Divulgation des Risques et tout autre document référencé, constitue l\'intégralité de l\'accord entre vous et Aareal Bank AG concernant l\'objet de cet Accord et remplace tous les accords, déclarations et ententes antérieurs ou contemporains, qu\'ils soient écrits ou oraux.'
                  : language === 'it' ? 'Questo Accordo, insieme alla nostra Informativa sulla Privacy, Dichiarazione di Divulgazione dei Rischi e qualsiasi altro documento di riferimento, costituisce l\'intero accordo tra te e Aareal Bank AG riguardo all\'oggetto di questo Accordo e sostituisce tutti gli accordi, le dichiarazioni e le intese precedenti o contemporanee, scritte o orali.'
                  : language === 'de' ? 'Diese Vereinbarung zusammen mit unserer Datenschutzrichtlinie, Risikooffenlegungserklärung und allen anderen referenzierten Dokumenten stellt die gesamte Vereinbarung zwischen Ihnen und Aareal Bank AG bezüglich des Gegenstands dieser Vereinbarung dar und ersetzt alle früheren oder gleichzeitigen Vereinbarungen, Darstellungen und Verständnisse, ob schriftlich oder mündlich.'
                  : language === 'es' ? 'Este Acuerdo, junto con nuestra Política de Privacidad, Declaración de Divulgación de Riesgos y cualquier otro documento referenciado, constituye el acuerdo completo entre usted y Aareal Bank AG con respecto al objeto de este Acuerdo y reemplaza todos los acuerdos, declaraciones y entendimientos anteriores o contemporáneos, ya sean escritos u orales.'
                  : language === 'el' ? 'Αυτή η Συμφωνία, μαζί με την Πολιτική Απορρήτου, τη Δήλωση Γνωστοποίησης Κινδύνων και οποιοδήποτε άλλο έγγραφο αναφοράς, αποτελεί την πλήρη συμφωνία μεταξύ σας και της Aareal Bank AG σχετικά με το αντικείμενο αυτής της Συμφωνίας και αντικαθιστά όλες τις προηγούμενες ή σύγχρονες συμφωνίες, δηλώσεις και κατανοήσεις, είτε γραπτές είτε προφορικές.'
                  : 'This Agreement, together with our Privacy Policy, Risk Disclosure Statement, and any other referenced documents, constitutes the entire agreement between you and Aareal Bank AG regarding the subject matter of this Agreement and supersedes all prior or contemporaneous agreements, representations, and understandings, whether written or oral.'}
              </p>
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Non-Renonciation' : language === 'it' ? 'Non Rinuncia' : language === 'de' ? 'Kein Verzicht' : language === 'es' ? 'No Renuncia' : language === 'el' ? 'Μη Παραίτηση' : 'No Waiver'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'L\'échec ou le retard de Aareal Bank AG à exercer ou à faire valoir un droit ou une disposition de cet Accord ne constituera pas une renonciation à ce droit ou à cette disposition. Aucune renonciation par Aareal Bank AG à une condition ou disposition de cet Accord ne sera considérée comme une renonciation supplémentaire ou continue à cette condition ou disposition ou comme une renonciation à toute autre condition ou disposition.'
                  : language === 'it' ? 'Il mancato o ritardato esercizio o applicazione da parte di Aareal Bank AG di un diritto o disposizione di questo Accordo non costituirà una rinuncia a tale diritto o disposizione. Nessuna rinuncia da parte di Aareal Bank AG a una condizione o disposizione di questo Accordo sarà considerata come una rinuncia ulteriore o continua a tale condizione o disposizione o una rinuncia a qualsiasi altra condizione o disposizione.'
                  : language === 'de' ? 'Das Versäumnis oder die Verzögerung von Aareal Bank AG, ein Recht oder eine Bestimmung dieser Vereinbarung auszuüben oder durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar. Kein Verzicht von Aareal Bank AG auf eine Bedingung oder Bestimmung dieser Vereinbarung wird als weiterer oder fortdauernder Verzicht auf diese Bedingung oder Bestimmung oder als Verzicht auf eine andere Bedingung oder Bestimmung betrachtet.'
                  : language === 'es' ? 'El fracaso o retraso de Aareal Bank AG en ejercer o hacer cumplir un derecho o disposición de este Acuerdo no constituirá una renuncia a ese derecho o disposición. Ninguna renuncia de Aareal Bank AG a una condición o disposición de este Acuerdo se considerará como una renuncia adicional o continua a esa condición o disposición o una renuncia a cualquier otra condición o disposición.'
                  : language === 'el' ? 'Η αποτυχία ή η καθυστέρηση της Aareal Bank AG να ασκήσει ή να επιβάλει δικαίωμα ή διάταξη αυτής της Συμφωνίας δεν θα συνιστά παραίτηση από αυτό το δικαίωμα ή διάταξη. Καμία παραίτηση από την Aareal Bank AG από προϋπόθεση ή διάταξη αυτής της Συμφωνίας δεν θα θεωρηθεί ως πρόσθετη ή συνεχής παραίτηση από αυτή την προϋπόθεση ή διάταξη ή παραίτηση από οποιαδήποτε άλλη προϋπόθεση ή διάταξη.'
                  : 'The failure or delay of Aareal Bank AG to exercise or enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision. No waiver by Aareal Bank AG of any term or provision of this Agreement shall be deemed a further or continuing waiver of such term or provision or a waiver of any other term or provision.'}
              </p>
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Cession' : language === 'it' ? 'Cessione' : language === 'de' ? 'Abtretung' : language === 'es' ? 'Cesión' : language === 'el' ? 'Εκχώρηση' : 'Assignment'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Vous ne pouvez pas céder, transférer ou déléguer vos droits ou obligations en vertu de cet Accord sans le consentement écrit préalable de Aareal Bank AG. Aareal Bank AG peut céder, transférer ou déléguer ses droits et obligations en vertu de cet Accord sans votre consentement à toute entité affiliée ou dans le cadre d\'une fusion, acquisition, restructuration d\'entreprise ou vente d\'actifs.'
                  : language === 'it' ? 'Non puoi cedere, trasferire o delegare i tuoi diritti o obblighi ai sensi di questo Accordo senza il previo consenso scritto di Aareal Bank AG. Aareal Bank AG può cedere, trasferire o delegare i suoi diritti e obblighi ai sensi di questo Accordo senza il tuo consenso a qualsiasi entità affiliata o in connessione con una fusione, acquisizione, ristrutturazione aziendale o vendita di asset.'
                  : language === 'de' ? 'Sie dürfen Ihre Rechte oder Pflichten aus dieser Vereinbarung ohne vorherige schriftliche Zustimmung von Aareal Bank AG nicht abtreten, übertragen oder delegieren. Aareal Bank AG kann seine Rechte und Pflichten aus dieser Vereinbarung ohne Ihre Zustimmung an verbundene Unternehmen oder im Zusammenhang mit einer Fusion, Übernahme, Unternehmensumstrukturierung oder dem Verkauf von Vermögenswerten abtreten, übertragen oder delegieren.'
                  : language === 'es' ? 'No puede ceder, transferir o delegar sus derechos u obligaciones bajo este Acuerdo sin el consentimiento previo por escrito de Aareal Bank AG. Aareal Bank AG puede ceder, transferir o delegar sus derechos y obligaciones bajo este Acuerdo sin su consentimiento a cualquier entidad afiliada o en conexión con una fusión, adquisición, reestructuración empresarial o venta de activos.'
                  : language === 'el' ? 'Δεν μπορείτε να εκχωρήσετε, να μεταβιβάσετε ή να αναθέσετε τα δικαιώματα ή τις υποχρεώσεις σας βάσει αυτής της Συμφωνίας χωρίς την προηγούμενη γραπτή συγκατάθεση της Aareal Bank AG. Η Aareal Bank AG μπορεί να εκχωρήσει, να μεταβιβάσει ή να αναθέσει τα δικαιώματα και τις υποχρεώσεις της βάσει αυτής της Συμφωνίας χωρίς τη συγκατάθεσή σας σε οποιαδήποτε συνδεδεμένη οντότητα ή σε σχέση με συγχώνευση, εξαγορά, εταιρική αναδιάρθρωση ή πώληση περιουσιακών στοιχείων.'
                  : 'You may not assign, transfer, or delegate your rights or obligations under this Agreement without the prior written consent of Aareal Bank AG. Aareal Bank AG may assign, transfer, or delegate its rights and obligations under this Agreement without your consent to any affiliated entity or in connection with a merger, acquisition, corporate restructuring, or sale of assets.'}
              </p>
            </LegalSubsection>

            <LegalSubsection title={language === 'fr' ? 'Informations de Contact' : language === 'it' ? 'Informazioni di Contatto' : language === 'de' ? 'Kontaktinformationen' : language === 'es' ? 'Información de Contacto' : language === 'el' ? 'Στοιχεία Επικοινωνίας' : 'Contact Information'}>
              <p className="text-sm sm:text-base">
                {language === 'fr' ? 'Pour toute question, préoccupation ou avis concernant cet Accord, veuillez nous contacter à :'
                  : language === 'it' ? 'Per qualsiasi domanda, preoccupazione o avviso riguardante questo Accordo, contattaci a:'
                  : language === 'de' ? 'Bei Fragen, Bedenken oder Mitteilungen zu dieser Vereinbarung kontaktieren Sie uns bitte unter:'
                  : language === 'es' ? 'Para cualquier pregunta, inquietud o aviso relacionado con este Acuerdo, contáctenos en:'
                  : language === 'el' ? 'Για οποιαδήποτε ερώτηση, ανησυχία ή ειδοποίηση σχετικά με αυτή τη Συμφωνία, επικοινωνήστε μαζί μας στο:'
                  : 'For any questions, concerns, or notices regarding this Agreement, please contact us at:'}
              </p>
              <div className="mt-4 p-4 bg-[#F5F5F5] rounded-lg">
                <p className="text-sm sm:text-base font-semibold mb-2">Aareal Bank AG</p>
                <p className="text-sm sm:text-base">
                  {language === 'fr' ? 'Email Juridique'
                    : language === 'it' ? 'Email Legale'
                    : language === 'de' ? 'Rechtliche E-Mail'
                    : language === 'es' ? 'Correo Legal'
                    : language === 'el' ? 'Νομικό Email'
                    : 'Legal Email'}: support@aareal-bank-ag.com
                </p>
                <p className="text-sm sm:text-base">
                  {language === 'fr' ? 'Email Support'
                    : language === 'it' ? 'Email Supporto'
                    : language === 'de' ? 'Support-E-Mail'
                    : language === 'es' ? 'Correo de Soporte'
                    : language === 'el' ? 'Email Υποστήριξης'
                    : 'Support Email'}: support@aareal-bank-ag.com
                </p>
              </div>
            </LegalSubsection>
          </LegalSection>

          <div className="mt-12 pt-8 border-t-2 border-[#E5E5E5]">
            <p className="text-[#555555] text-sm text-center">
              {language === 'fr' ? 'En utilisant nos services, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces Conditions de Service complètes.'
                : language === 'it' ? 'Utilizzando i nostri servizi, riconosci di aver letto, compreso e accettato di essere vincolato da questi Termini di Servizio completi.'
                : language === 'de' ? 'Durch die Nutzung unserer Dienste bestätigen Sie, dass Sie diese umfassenden Nutzungsbedingungen gelesen, verstanden und akzeptiert haben und an sie gebunden sind.'
                : language === 'es' ? 'Al usar nuestros servicios, reconoce que ha leído, comprendido y acepta estar sujeto a estos Términos de Servicio completos.'
                : language === 'el' ? 'Χρησιμοποιώντας τις υπηρεσίες μας, αναγνωρίζετε ότι έχετε διαβάσει, κατανοήσει και συμφωνείτε να δεσμεύεστε από αυτούς τους πλήρεις Όρους Χρήσης.'
                : 'By using our services, you acknowledge that you have read, understood, and agree to be bound by these comprehensive Terms of Service.'}
            </p>
            <p className="text-[#777777] text-xs text-center mt-4">
              {language === 'fr' ? 'Pour toute question juridique, veuillez contacter support@aareal-bank-ag.com'
                : language === 'it' ? 'Per domande legali, contattare support@aareal-bank-ag.com'
                : language === 'de' ? 'Für rechtliche Fragen kontaktieren Sie bitte support@aareal-bank-ag.com'
                : language === 'es' ? 'Para consultas legales, contacte support@aareal-bank-ag.com'
                : language === 'el' ? 'Για νομικές ερωτήσεις, επικοινωνήστε στο support@aareal-bank-ag.com'
                : 'For legal inquiries, please contact support@aareal-bank-ag.com'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
