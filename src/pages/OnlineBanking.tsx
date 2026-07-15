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
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <Lock className="w-16 h-16 text-[#D00000] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#000000]">{t.onlineBanking.title}</h2>
            <p className="text-[#555555] mt-2">{t.onlineBanking.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#333333] mb-2">
                {t.onlineBanking.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-[#CCCCCC]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#CCCCCC] focus:border-[#D00000] focus:outline-none text-[#000000]"
                  placeholder={t.onlineBanking.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-[#333333] mb-2">
                {t.onlineBanking.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-[#CCCCCC]" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#CCCCCC] focus:border-[#D00000] focus:outline-none text-[#000000]"
                  placeholder={t.onlineBanking.passwordPlaceholder}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-[#D00000] border-[#CCCCCC] focus:ring-[#D00000]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-[#333333]">
                  {t.onlineBanking.remember}
                </label>
              </div>
              <a href="#" className="text-sm font-semibold text-[#D00000] hover:text-[#A00000]">
                {t.onlineBanking.forgot}
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D00000] hover:bg-[#A00000] text-white font-bold py-4 px-6 transition-all"
            >
              {t.onlineBanking.signIn}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#555555]">
              {t.onlineBanking.noAccount}{' '}
              <a href="#" className="font-semibold text-[#D00000] hover:text-[#A00000]">
                {t.onlineBanking.enroll}
              </a>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E5E5E5]">
            <div className="flex items-center justify-center space-x-4 text-sm text-[#555555]">
              <Lock className="w-4 h-4" />
              <span>{t.onlineBanking.secure}</span>
            </div>
          </div>
        </div>

        <div className="text-white space-y-8 flex flex-col justify-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">{t.onlineBanking.anytime}</h3>
            <p className="text-[#E5E5E5] text-lg">{t.onlineBanking.description}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CreditCard className="w-10 h-10 text-[#D00000] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">{t.onlineBanking.transfers.title}</h4>
                <p className="text-[#E5E5E5]">{t.onlineBanking.transfers.description}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FileText className="w-10 h-10 text-[#D00000] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">{t.onlineBanking.statements.title}</h4>
                <p className="text-[#E5E5E5]">{t.onlineBanking.statements.description}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Lock className="w-10 h-10 text-[#D00000] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">{t.onlineBanking.security.title}</h4>
                <p className="text-[#E5E5E5]">{t.onlineBanking.security.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
