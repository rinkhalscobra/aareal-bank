import { Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function InvestmentHighlight() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Customer Reviews',
      subtitle: 'Rated Excellent by thousands of satisfied customers',
      basedOn: 'Based on',
      reviews: 'reviews',
      verified: 'Verified',
      helpful: 'people found this helpful',
      avgRating: 'Average rating across all platforms',
      totalReviews: 'total reviews',
      reviewTitle: 'Excellent Service',
      reviewTexts: [
        'Outstanding service! The online banking platform is incredibly user-friendly, and their customer support team resolved my queries within minutes. Highly recommend for anyone looking for a modern banking experience.',
        'Been with them for 3 years now. Their investment advisory service helped me grow my portfolio by 34%. Professional guidance at every step.',
        'Best banking decision I ever made. The loan approval process was transparent and fast. No hidden fees, competitive rates, and genuinely caring staff. Five stars all the way!',
        'Impressed with their digital transformation. Everything from opening an account to getting a credit card was done online in less than 10 minutes. Security features are top-notch too.',
        'Professional team, excellent communication, and transparent pricing. They took time to understand my financial goals and provided tailored solutions. Highly satisfied with their services.',
        'Switched from my previous bank and couldn\'t be happier. Lower fees, better interest rates, and actually helpful customer service that truly cares.'
      ],
      roles: {
        verifiedCustomer: 'Verified Customer',
        localGuide: 'Local Guide',
        verifiedBuyer: 'Verified Buyer'
      },
      dates: {
        twoWeeks: '2 weeks ago',
        oneMonth: '1 month ago',
        threeDays: '3 days ago',
        fiveDays: '5 days ago',
        oneWeek: '1 week ago'
      }
    },
    fr: {
      title: 'Avis Clients',
      subtitle: 'Noté Excellent par des milliers de clients satisfaits',
      basedOn: 'Basé sur',
      reviews: 'avis',
      verified: 'Vérifié',
      helpful: 'personnes ont trouvé cela utile',
      avgRating: 'Note moyenne sur toutes les plateformes',
      totalReviews: 'avis au total',
      reviewTitle: 'Service Excellent',
      reviewTexts: [
        'Service exceptionnel ! La plateforme bancaire en ligne est incroyablement conviviale, et leur équipe de support client a résolu mes questions en quelques minutes. Je recommande vivement pour tous ceux qui recherchent une expérience bancaire moderne.',
        'Avec eux depuis 3 ans maintenant. Leur service de conseil en investissement m\'a aidé à faire croître mon portefeuille de 34%. Conseils professionnels à chaque étape.',
        'Meilleure décision bancaire que j\'ai jamais prise. Le processus d\'approbation de prêt était transparent et rapide. Pas de frais cachés, taux compétitifs et personnel véritablement attentionné. Cinq étoiles !',
        'Impressionné par leur transformation numérique. Tout, de l\'ouverture d\'un compte à l\'obtention d\'une carte de crédit, a été fait en ligne en moins de 10 minutes. Les fonctionnalités de sécurité sont également excellentes.',
        'Équipe professionnelle, excellente communication et tarification transparente. Ils ont pris le temps de comprendre mes objectifs financiers et ont fourni des solutions sur mesure. Très satisfait de leurs services.',
        'Changé de ma banque précédente et je ne pourrais pas être plus heureux. Frais réduits, meilleurs taux d\'intérêt et service client vraiment utile qui se soucie vraiment.'
      ],
      roles: {
        verifiedCustomer: 'Client Vérifié',
        localGuide: 'Guide Local',
        verifiedBuyer: 'Acheteur Vérifié'
      },
      dates: {
        twoWeeks: 'Il y a 2 semaines',
        oneMonth: 'Il y a 1 mois',
        threeDays: 'Il y a 3 jours',
        fiveDays: 'Il y a 5 jours',
        oneWeek: 'Il y a 1 semaine'
      }
    },
    it: {
      title: 'Recensioni Clienti',
      subtitle: 'Valutato Eccellente da migliaia di clienti soddisfatti',
      basedOn: 'Basato su',
      reviews: 'recensioni',
      verified: 'Verificato',
      helpful: 'persone hanno trovato utile',
      avgRating: 'Valutazione media su tutte le piattaforme',
      totalReviews: 'recensioni totali',
      reviewTitle: 'Servizio Eccellente',
      reviewTexts: [
        'Servizio eccezionale! La piattaforma di online banking è incredibilmente user-friendly e il loro team di supporto clienti ha risolto le mie domande in pochi minuti. Consiglio vivamente a chiunque cerchi un\'esperienza bancaria moderna.',
        'Con loro da 3 anni ormai. Il loro servizio di consulenza sugli investimenti mi ha aiutato a far crescere il mio portafoglio del 34%. Guida professionale ad ogni passo.',
        'Migliore decisione bancaria che abbia mai preso. Il processo di approvazione del prestito è stato trasparente e veloce. Nessuna commissione nascosta, tassi competitivi e personale genuinamente premuroso. Cinque stelle!',
        'Impressionato dalla loro trasformazione digitale. Tutto, dall\'apertura di un conto all\'ottenimento di una carta di credito, è stato fatto online in meno di 10 minuti. Anche le funzionalità di sicurezza sono eccellenti.',
        'Team professionale, eccellente comunicazione e prezzi trasparenti. Si sono presi il tempo di comprendere i miei obiettivi finanziari e hanno fornito soluzioni su misura. Molto soddisfatto dei loro servizi.',
        'Cambiato dalla mia banca precedente e non potrei essere più felice. Commissioni più basse, tassi di interesse migliori e servizio clienti davvero utile che si preoccupa veramente.'
      ],
      roles: {
        verifiedCustomer: 'Cliente Verificato',
        localGuide: 'Guida Locale',
        verifiedBuyer: 'Acquirente Verificato'
      },
      dates: {
        twoWeeks: '2 settimane fa',
        oneMonth: '1 mese fa',
        threeDays: '3 giorni fa',
        fiveDays: '5 giorni fa',
        oneWeek: '1 settimana fa'
      }
    },
    de: {
      title: 'Kundenbewertungen',
      subtitle: 'Von Tausenden zufriedener Kunden als Ausgezeichnet bewertet',
      basedOn: 'Basierend auf',
      reviews: 'Bewertungen',
      verified: 'Verifiziert',
      helpful: 'Personen fanden dies hilfreich',
      avgRating: 'Durchschnittliche Bewertung auf allen Plattformen',
      totalReviews: 'Bewertungen insgesamt',
      reviewTitle: 'Exzellenter Service',
      reviewTexts: [
        'Hervorragender Service! Die Online-Banking-Plattform ist unglaublich benutzerfreundlich, und ihr Kundensupport-Team hat meine Fragen innerhalb von Minuten beantwortet. Sehr empfehlenswert für alle, die eine moderne Banking-Erfahrung suchen.',
        'Bin seit 3 Jahren bei ihnen. Ihr Anlageberatungsservice hat mir geholfen, mein Portfolio um 34% zu vergrößern. Professionelle Beratung bei jedem Schritt.',
        'Beste Bankentscheidung, die ich je getroffen habe. Der Kreditgenehmigungsprozess war transparent und schnell. Keine versteckten Gebühren, wettbewerbsfähige Zinsen und wirklich fürsorgliches Personal. Fünf Sterne!',
        'Beeindruckt von ihrer digitalen Transformation. Alles, von der Kontoeröffnung bis zur Kreditkarte, wurde online in weniger als 10 Minuten erledigt. Die Sicherheitsfunktionen sind ebenfalls erstklassig.',
        'Professionelles Team, ausgezeichnete Kommunikation und transparente Preisgestaltung. Sie nahmen sich Zeit, meine finanziellen Ziele zu verstehen und maßgeschneiderte Lösungen anzubieten. Sehr zufrieden mit ihren Dienstleistungen.',
        'Von meiner vorherigen Bank gewechselt und könnte nicht glücklicher sein. Niedrigere Gebühren, bessere Zinssätze und wirklich hilfreicher Kundenservice, der sich wirklich kümmert.'
      ],
      roles: {
        verifiedCustomer: 'Verifizierter Kunde',
        localGuide: 'Lokaler Guide',
        verifiedBuyer: 'Verifizierter Käufer'
      },
      dates: {
        twoWeeks: 'Vor 2 Wochen',
        oneMonth: 'Vor 1 Monat',
        threeDays: 'Vor 3 Tagen',
        fiveDays: 'Vor 5 Tagen',
        oneWeek: 'Vor 1 Woche'
      }
    },
    es: {
      title: 'Opiniones de Clientes',
      subtitle: 'Calificado como Excelente por miles de clientes satisfechos',
      basedOn: 'Basado en',
      reviews: 'opiniones',
      verified: 'Verificado',
      helpful: 'personas encontraron esto útil',
      avgRating: 'Calificación promedio en todas las plataformas',
      totalReviews: 'opiniones totales',
      reviewTitle: 'Servicio Excelente',
      reviewTexts: [
        '¡Servicio excepcional! La plataforma de banca en línea es increíblemente fácil de usar, y su equipo de soporte al cliente resolvió mis consultas en minutos. Muy recomendable para cualquiera que busque una experiencia bancaria moderna.',
        'Con ellos desde hace 3 años. Su servicio de asesoramiento de inversiones me ayudó a hacer crecer mi cartera en un 34%. Orientación profesional en cada paso.',
        'Mejor decisión bancaria que he tomado. El proceso de aprobación de préstamo fue transparente y rápido. Sin tarifas ocultas, tasas competitivas y personal genuinamente atento. ¡Cinco estrellas!',
        'Impresionado por su transformación digital. Todo, desde abrir una cuenta hasta obtener una tarjeta de crédito, se hizo en línea en menos de 10 minutos. Las características de seguridad también son de primera.',
        'Equipo profesional, excelente comunicación y precios transparentes. Se tomaron el tiempo para comprender mis objetivos financieros y proporcionaron soluciones a medida. Muy satisfecho con sus servicios.',
        'Cambié de mi banco anterior y no podría estar más feliz. Tarifas más bajas, mejores tasas de interés y un servicio al cliente realmente útil que realmente se preocupa.'
      ],
      roles: {
        verifiedCustomer: 'Cliente Verificado',
        localGuide: 'Guía Local',
        verifiedBuyer: 'Comprador Verificado'
      },
      dates: {
        twoWeeks: 'Hace 2 semanas',
        oneMonth: 'Hace 1 mes',
        threeDays: 'Hace 3 días',
        fiveDays: 'Hace 5 días',
        oneWeek: 'Hace 1 semana'
      }
    },
    el: {
      title: 'Κριτικές Πελατών',
      subtitle: 'Βαθμολογήθηκε ως Εξαιρετικό από χιλιάδες ικανοποιημένους πελάτες',
      basedOn: 'Βάσει',
      reviews: 'κριτικών',
      verified: 'Επαληθευμένο',
      helpful: 'άτομα βρήκαν αυτό χρήσιμο',
      avgRating: 'Μέση βαθμολογία σε όλες τις πλατφόρμες',
      totalReviews: 'συνολικές κριτικές',
      reviewTitle: 'Εξαιρετική Υπηρεσία',
      reviewTexts: [
        'Εξαιρετική υπηρεσία! Η πλατφόρμα διαδικτυακής τραπεζικής είναι απίστευτα φιλική προς το χρήστη και η ομάδα εξυπηρέτησης πελατών επέλυσε τις ερωτήσεις μου μέσα σε λίγα λεπτά. Συνιστάται ανεπιφύλακτα για όποιον αναζητά μια σύγχρονη τραπεζική εμπειρία.',
        'Μαζί τους εδώ και 3 χρόνια τώρα. Η υπηρεσία επενδυτικών συμβουλών τους με βοήθησε να αναπτύξω το χαρτοφυλάκιό μου κατά 34%. Επαγγελματική καθοδήγηση σε κάθε βήμα.',
        'Καλύτερη τραπεζική απόφαση που έκανα ποτέ. Η διαδικασία έγκρισης δανείου ήταν διαφανής και γρήγορη. Χωρίς κρυφές χρεώσεις, ανταγωνιστικά επιτόκια και πραγματικά φροντιστικό προσωπικό. Πέντε αστέρια!',
        'Εντυπωσιασμένος από τον ψηφιακό τους μετασχηματισμό. Όλα, από το άνοιγμα λογαριασμού μέχρι την απόκτηση πιστωτικής κάρτας, έγιναν διαδικτυακά σε λιγότερο από 10 λεπτά. Τα χαρακτηριστικά ασφαλείας είναι επίσης κορυφαία.',
        'Επαγγελματική ομάδα, εξαιρετική επικοινωνία και διαφανής τιμολόγηση. Αφιέρωσαν χρόνο για να κατανοήσουν τους οικονομικούς μου στόχους και παρείχαν προσαρμοσμένες λύσεις. Πολύ ικανοποιημένος από τις υπηρεσίες τους.',
        'Άλλαξα από την προηγούμενη τράπεζά μου και δεν θα μπορούσα να είμαι πιο ευχαριστημένος. Χαμηλότερες χρεώσεις, καλύτερα επιτόκια και πραγματικά χρήσιμη εξυπηρέτηση πελατών που πραγματικά ενδιαφέρεται.'
      ],
      roles: {
        verifiedCustomer: 'Επαληθευμένος Πελάτης',
        localGuide: 'Τοπικός Οδηγός',
        verifiedBuyer: 'Επαληθευμένος Αγοραστής'
      },
      dates: {
        twoWeeks: 'Πριν από 2 εβδομάδες',
        oneMonth: 'Πριν από 1 μήνα',
        threeDays: 'Πριν από 3 ημέρες',
        fiveDays: 'Πριν από 5 ημέρες',
        oneWeek: 'Πριν από 1 εβδομάδα'
      }
    }
  };

  const t = translations[language];

  const reviews = [
    {
      platform: 'Trustpilot',
      rating: 5,
      totalReviews: '12,459',
      author: 'James Thompson',
      nationality: 'GB',
      countryName: 'England',
      role: t.roles.verifiedCustomer,
      date: t.dates.twoWeeks,
      text: t.reviewTexts[0],
      verified: true,
      helpful: 247
    },
    {
      platform: 'Google',
      rating: 5,
      totalReviews: '8,742',
      author: 'Hans Müller',
      nationality: 'DE',
      countryName: 'Germany',
      role: t.roles.localGuide,
      date: t.dates.oneMonth,
      text: t.reviewTexts[1],
      verified: true,
      helpful: 189
    },
    {
      platform: 'Trustpilot',
      rating: 5,
      totalReviews: '12,459',
      author: 'Carmen García',
      nationality: 'ES',
      countryName: 'Spain',
      role: t.roles.verifiedCustomer,
      date: t.dates.threeDays,
      text: t.reviewTexts[2],
      verified: true,
      helpful: 312
    },
    {
      platform: 'Reviews.io',
      rating: 5,
      totalReviews: '6,331',
      author: 'Dimitris Papadopoulos',
      nationality: 'GR',
      countryName: 'Greece',
      role: t.roles.verifiedBuyer,
      date: t.dates.twoWeeks,
      text: t.reviewTexts[3],
      verified: true,
      helpful: 156
    },
    {
      platform: 'Google',
      rating: 5,
      totalReviews: '8,742',
      author: 'Sofia Rossi',
      nationality: 'IT',
      countryName: 'Italy',
      role: t.roles.verifiedCustomer,
      date: t.dates.fiveDays,
      text: t.reviewTexts[4],
      verified: true,
      helpful: 203
    },
    {
      platform: 'Trustpilot',
      rating: 5,
      totalReviews: '12,459',
      author: 'Pierre Dubois',
      nationality: 'FR',
      countryName: 'France',
      role: t.roles.verifiedCustomer,
      date: t.dates.oneWeek,
      text: t.reviewTexts[5],
      verified: true,
      helpful: 278
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? 'fill-[#D00000] text-[#D00000]'
                : 'fill-[#E5E5E5] text-[#E5E5E5]'
            }`}
          />
        ))}
      </div>
    );
  };

  const getPlatformLogo = (platform: string) => {
    switch (platform) {
      case 'Trustpilot':
        return '/trustpilot.png';
      case 'Reviews.io':
        return '/reviews.png';
      default:
        return '';
    }
  };

  const renderPlatformBrand = (platform: string, compact = false) => {
    if (platform === 'Google') {
      return (
        <span className={`font-bold tracking-tight text-[#000000] ${compact ? 'text-sm' : 'text-lg sm:text-xl'}`}>
          Google
        </span>
      );
    }

    return (
      <img
        src={getPlatformLogo(platform)}
        alt={platform}
        className={compact ? 'h-4 sm:h-5' : 'h-6 sm:h-8'}
        loading={compact ? 'lazy' : 'eager'}
        decoding="async"
      />
    );
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000]">
              {t.title}
            </h2>
          </div>
          <p className="text-center text-base sm:text-lg md:text-xl text-[#555555] max-w-2xl mx-auto mb-8 sm:mb-12">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 py-6 sm:py-8 border-y-2 border-[#E5E5E5]">
            <div className="flex items-center gap-3 sm:gap-4">
              {renderPlatformBrand('Trustpilot')}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {renderStars(5)}
                  <span className="font-bold text-[#000000] text-sm sm:text-base">4.8</span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555]">{t.basedOn} 12,459 {t.reviews}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {renderPlatformBrand('Google')}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {renderStars(5)}
                  <span className="font-bold text-[#000000] text-sm sm:text-base">4.9</span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555]">{t.basedOn} 8,742 {t.reviews}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {renderPlatformBrand('Reviews.io')}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {renderStars(5)}
                  <span className="font-bold text-[#000000] text-sm sm:text-base">4.7</span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555]">{t.basedOn} 6,331 {t.reviews}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E5E5E5] p-4 sm:p-6"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  {renderPlatformBrand(review.platform, true)}
                  {review.verified && (
                    <div className="flex items-center gap-1 bg-[#FFF1F1] px-2 py-1">
                      <CheckCircle className="w-3 h-3 text-[#D00000]" />
                      <span className="text-xs font-medium text-[#D00000]">{t.verified}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                {renderStars(review.rating)}
              </div>

              <h3 className="font-bold text-[#000000] mb-3 text-base">{t.reviewTitle}</h3>

              <p className="text-[#333333] text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              <div className="border-t-2 border-[#FFFFFF] pt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w20/${review.nationality.toLowerCase()}.png`}
                        alt={review.countryName}
                        width="20"
                        height="15"
                        className="w-5 h-4 object-cover rounded shadow-sm"
                        title={review.countryName}
                        loading="lazy"
                        decoding="async"
                      />
                      <p className="font-bold text-[#000000] text-sm">{review.author}</p>
                    </div>
                    <p className="text-xs text-[#777777] mt-1">{review.role}</p>
                  </div>
                  <p className="text-xs text-[#777777]">{review.date}</p>
                </div>
                <p className="text-xs text-[#777777] mt-3">{review.helpful} {t.helpful}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
