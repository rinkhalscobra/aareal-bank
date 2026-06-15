import { useLanguage } from '../context/LanguageContext';
import { Lock, FileText, CreditCard, Mail } from 'lucide-react';
import { useState } from 'react';

export default function OnlineBanking() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#12355B] via-[#172033] to-[#172033] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <Lock className="w-16 h-16 text-[#0F766E] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#172033]">{t.onlineBanking.title}</h2>
            <p className="text-[#5D6B7B] mt-2">{t.onlineBanking.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#3F4D5F] mb-2">
                {t.onlineBanking.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-[#A7B1BC]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none text-[#172033]"
                  placeholder={t.onlineBanking.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-[#3F4D5F] mb-2">
                {t.onlineBanking.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-[#A7B1BC]" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none text-[#172033]"
                  placeholder={t.onlineBanking.passwordPlaceholder}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-[#0F766E] border-[#C7D3D0] focus:ring-[#0F766E]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-[#3F4D5F]">
                  {t.onlineBanking.remember}
                </label>
              </div>
              <a href="#" className="text-sm font-semibold text-[#0F766E] hover:text-[#0B5F59]">
                {t.onlineBanking.forgot}
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-4 px-6 transition-all"
            >
              {t.onlineBanking.signIn}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#5D6B7B]">
              {t.onlineBanking.noAccount}{' '}
              <a href="#" className="font-semibold text-[#0F766E] hover:text-[#0B5F59]">
                {t.onlineBanking.enroll}
              </a>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-[#DDE7E3]">
            <div className="flex items-center justify-center space-x-4 text-sm text-[#5D6B7B]">
              <Lock className="w-4 h-4" />
              <span>{t.onlineBanking.secure}</span>
            </div>
          </div>
        </div>

        <div className="text-white space-y-8 flex flex-col justify-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">{t.onlineBanking.anytime}</h3>
            <p className="text-[#CBD5DE] text-lg">{t.onlineBanking.description}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CreditCard className="w-10 h-10 text-[#0F766E] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">{t.onlineBanking.transfers.title}</h4>
                <p className="text-[#CBD5DE]">{t.onlineBanking.transfers.description}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FileText className="w-10 h-10 text-[#0F766E] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">{t.onlineBanking.statements.title}</h4>
                <p className="text-[#CBD5DE]">{t.onlineBanking.statements.description}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Lock className="w-10 h-10 text-[#0F766E] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">{t.onlineBanking.security.title}</h4>
                <p className="text-[#CBD5DE]">{t.onlineBanking.security.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
