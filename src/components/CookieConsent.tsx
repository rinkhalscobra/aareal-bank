import { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const generateSessionId = () => {
  const stored = localStorage.getItem('cookie_session_id');
  if (stored) return stored;

  const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  localStorage.setItem('cookie_session_id', newId);
  return newId;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { language } = useLanguage();

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const checkConsent = async () => {
      const hasConsent = localStorage.getItem('cookie_consent_given');

      if (hasConsent) {
        setShowBanner(false);
        return;
      }

      const sessionId = localStorage.getItem('cookie_session_id');
      if (sessionId) {
        try {
          const { data, error } = await supabase
            .from('cookie_consent')
            .select('*')
            .eq('session_id', sessionId)
            .maybeSingle();

          if (!error && data) {
            localStorage.setItem('cookie_consent_given', 'true');
            setShowBanner(false);
            return;
          }
        } catch (error) {
          console.error('Error checking cookie consent:', error);
        }
      }

      setShowBanner(true);
    };

    checkConsent();
  }, []);

  useEffect(() => {
    if (showBanner) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'relative';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
    };
  }, [showBanner]);

  const saveConsent = async (prefs: CookiePreferences) => {
    const sessionId = generateSessionId();

    try {
      const { error } = await supabase
        .from('cookie_consent')
        .upsert({
          session_id: sessionId,
          necessary: prefs.necessary,
          analytics: prefs.analytics,
          marketing: prefs.marketing,
          preferences: prefs.preferences,
          consent_date: new Date().toISOString(),
          user_agent: navigator.userAgent,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'session_id'
        });

      if (error) {
        console.error('Error saving cookie consent:', error);
      } else {
        localStorage.setItem('cookie_consent_given', 'true');
      }
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }

    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  const getText = (en: string, fr: string, it: string, de: string, es: string, el: string) => {
    switch (language) {
      case 'fr': return fr;
      case 'it': return it;
      case 'de': return de;
      case 'es': return es;
      case 'el': return el;
      default: return en;
    }
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#172033] bg-opacity-50 z-50" />

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#0F766E] shadow-2xl z-50 animate-slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {!showSettings ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <Cookie className="text-[#0F766E] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-lg font-bold text-[#172033] mb-2">
                    {getText(
                      'We Value Your Privacy',
                      'Nous Respectons Votre Vie Privée',
                      'Rispettiamo La Tua Privacy',
                      'Wir Schätzen Ihre Privatsphäre',
                      'Valoramos Su Privacidad',
                      'Σεβόμαστε Την Ιδιωτικότητά Σας'
                    )}
                  </h3>
                  <p className="text-[#5D6B7B] text-sm">
                    {getText(
                      'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
                      'Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser du contenu personnalisé et analyser notre trafic. En cliquant sur "Tout Accepter", vous consentez à notre utilisation de cookies.',
                      'Utilizziamo i cookie per migliorare la tua esperienza di navigazione, fornire contenuti personalizzati e analizzare il nostro traffico. Cliccando su "Accetta Tutto", acconsenti al nostro uso dei cookie.',
                      'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Traffic zu analysieren. Durch Klicken auf "Alle Akzeptieren" stimmen Sie unserer Verwendung von Cookies zu.',
                      'Utilizamos cookies para mejorar su experiencia de navegación, ofrecer contenido personalizado y analizar nuestro tráfico. Al hacer clic en "Aceptar Todo", acepta nuestro uso de cookies.',
                      'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας, να παρέχουμε εξατομικευμένο περιεχόμενο και να αναλύσουμε την επισκεψιμότητά μας. Κάνοντας κλικ στο "Αποδοχή Όλων", συναινείτε στη χρήση των cookies.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 border-2 border-[#C7D3D0] text-[#3F4D5F] font-semibold hover:bg-[#F6F8F7] transition-colors flex items-center justify-center space-x-2"
                >
                  <Settings size={18} />
                  <span>
                    {getText('Customize', 'Personnaliser', 'Personalizza', 'Anpassen', 'Personalizar', 'Προσαρμογή')}
                  </span>
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border-2 border-[#0F766E] text-[#0F766E] font-semibold hover:bg-[#ECFDF8] transition-colors"
                >
                  {getText('Necessary Only', 'Nécessaire Seulement', 'Solo Necessari', 'Nur Notwendige', 'Solo Necesarias', 'Μόνο Απαραίτητα')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-[#0F766E] text-white font-semibold hover:bg-[#0B5F59] transition-colors"
                >
                  {getText('Accept All', 'Tout Accepter', 'Accetta Tutto', 'Alle Akzeptieren', 'Aceptar Todo', 'Αποδοχή Όλων')}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#172033] flex items-center space-x-3">
                  <Settings className="text-[#0F766E]" size={24} />
                  <span>
                    {getText('Cookie Preferences', 'Préférences des Cookies', 'Preferenze Cookie', 'Cookie-Einstellungen', 'Preferencias de Cookies', 'Προτιμήσεις Cookie')}
                  </span>
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-[#788696] hover:text-[#3F4D5F]"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 bg-[#F6F8F7] rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#172033] mb-1">
                      {getText('Necessary Cookies', 'Cookies Nécessaires', 'Cookie Necessari', 'Notwendige Cookies', 'Cookies Necesarias', 'Απαραίτητα Cookie')}
                    </h4>
                    <p className="text-sm text-[#5D6B7B]">
                      {getText(
                        'These cookies are essential for the website to function and cannot be disabled.',
                        'Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.',
                        'Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati.',
                        'Diese Cookies sind für die Funktion der Website unerlässlich und können nicht deaktiviert werden.',
                        'Estas cookies son esenciales para el funcionamiento del sitio y no se pueden desactivar.',
                        'Αυτά τα cookie είναι απαραίτητα για τη λειτουργία του ιστότοπου και δεν μπορούν να απενεργοποιηθούν.'
                      )}
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-5 h-5 text-[#0F766E] border-[#C7D3D0] rounded focus:ring-[#0F766E]"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-white border-2 border-[#DDE7E3] rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#172033] mb-1">
                      {getText('Analytics Cookies', 'Cookies Analytiques', 'Cookie Analitici', 'Analyse-Cookies', 'Cookies Analíticas', 'Cookie Ανάλυσης')}
                    </h4>
                    <p className="text-sm text-[#5D6B7B]">
                      {getText(
                        'Help us understand how visitors interact with our website.',
                        'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
                        'Ci aiutano a capire come i visitatori interagiscono con il nostro sito.',
                        'Helfen Sie uns zu verstehen, wie Besucher mit unserer Website interagieren.',
                        'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.',
                        'Μας βοηθούν να κατανοήσουμε πώς αλληλεπιδρούν οι επισκέπτες με τον ιστότοπό μας.'
                      )}
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="w-5 h-5 text-[#0F766E] border-[#C7D3D0] rounded focus:ring-[#0F766E]"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-white border-2 border-[#DDE7E3] rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#172033] mb-1">
                      {getText('Marketing Cookies', 'Cookies Marketing', 'Cookie di Marketing', 'Marketing-Cookies', 'Cookies de Marketing', 'Cookie Μάρκετινγκ')}
                    </h4>
                    <p className="text-sm text-[#5D6B7B]">
                      {getText(
                        'Used to deliver relevant advertisements and track campaign performance.',
                        'Utilisés pour diffuser des publicités pertinentes et suivre les performances des campagnes.',
                        'Utilizzati per fornire annunci pertinenti e monitorare le prestazioni delle campagne.',
                        'Werden verwendet, um relevante Werbung zu liefern und die Kampagnenleistung zu verfolgen.',
                        'Se utilizan para entregar anuncios relevantes y rastrear el rendimiento de las campañas.',
                        'Χρησιμοποιούνται για την παροχή σχετικών διαφημίσεων και την παρακολούθηση της απόδοσης των καμπανιών.'
                      )}
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="w-5 h-5 text-[#0F766E] border-[#C7D3D0] rounded focus:ring-[#0F766E]"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-white border-2 border-[#DDE7E3] rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#172033] mb-1">
                      {getText('Preference Cookies', 'Cookies de Préférence', 'Cookie di Preferenza', 'Präferenz-Cookies', 'Cookies de Preferencia', 'Cookie Προτίμησης')}
                    </h4>
                    <p className="text-sm text-[#5D6B7B]">
                      {getText(
                        'Remember your preferences like language and region.',
                        'Se souviennent de vos préférences comme la langue et la région.',
                        'Ricordano le tue preferenze come lingua e regione.',
                        'Merken Sie sich Ihre Präferenzen wie Sprache und Region.',
                        'Recuerdan sus preferencias como idioma y región.',
                        'Θυμούνται τις προτιμήσεις σας όπως γλώσσα και περιοχή.'
                      )}
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                      className="w-5 h-5 text-[#0F766E] border-[#C7D3D0] rounded focus:ring-[#0F766E]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border-2 border-[#0F766E] text-[#0F766E] font-semibold hover:bg-[#ECFDF8] transition-colors"
                >
                  {getText('Necessary Only', 'Nécessaire Seulement', 'Solo Necessari', 'Nur Notwendige', 'Solo Necesarias', 'Μόνο Απαραίτητα')}
                </button>
                <button
                  onClick={saveCustom}
                  className="px-6 py-3 bg-[#0F766E] text-white font-semibold hover:bg-[#0B5F59] transition-colors"
                >
                  {getText('Save Preferences', 'Enregistrer les Préférences', 'Salva Preferenze', 'Einstellungen Speichern', 'Guardar Preferencias', 'Αποθήκευση Προτιμήσεων')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
