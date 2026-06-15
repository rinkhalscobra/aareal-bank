import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

export default function Newsletter() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'exists'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage(t.newsletter.error);
      return;
    }

    setStatus('loading');

    try {
      const { data: existingSubscription } = await supabase
        .from('newsletter_subscriptions')
        .select('id, is_active')
        .eq('email', email)
        .maybeSingle();

      if (existingSubscription?.is_active) {
        setStatus('exists');
        setMessage(t.newsletter.alreadySubscribed);
        return;
      }

      if (existingSubscription && !existingSubscription.is_active) {
        const { error: updateError } = await supabase
          .from('newsletter_subscriptions')
          .update({ is_active: true, language })
          .eq('email', email);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('newsletter_subscriptions')
          .insert([{ email, language }]);

        if (insertError) throw insertError;
      }

      setStatus('success');
      setMessage(t.newsletter.success);
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage(t.newsletter.error);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#12355B] to-[#172033] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3 sm:mb-4">
              <Mail size={28} className="text-[#D8A84A] sm:w-8 sm:h-8" />
              <h2 className="text-2xl sm:text-3xl font-bold">{t.newsletter.title}</h2>
            </div>
            <p className="text-[#CBD5DE] text-base sm:text-lg px-4 md:px-0">{t.newsletter.subtitle}</p>
          </div>

          <div className="flex-1 w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.emailPlaceholder}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-[#A7B1BC] focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-sm sm:text-base"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold px-6 py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
                >
                  {status === 'loading' ? '...' : t.newsletter.subscribe}
                </button>
              </div>

              {message && (
                <div className={`flex items-center gap-2 p-3 ${
                  status === 'success'
                    ? 'bg-green-900/30 border border-green-500/50'
                    : 'bg-[#12355B]/30 border border-[#C8942D]/50'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="text-[#D8A84A] flex-shrink-0" />
                  )}
                  <p className="text-sm">{message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
