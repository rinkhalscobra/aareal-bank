import { useLanguage } from '../context/LanguageContext';

export default function TrustSection() {
  const { t } = useLanguage();

  const cryptoAssets = [
    {
      name: 'Bitcoin',
      code: 'BTC',
      logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
    },
    {
      name: 'Ethereum',
      code: 'ETH',
      logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      name: 'Tether',
      code: 'USDT',
      logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png'
    },
    {
      name: 'USD Coin',
      code: 'USDC',
      logo: 'https://assets.coingecko.com/coins/images/6319/large/usdc.png'
    },
    {
      name: 'Ripple',
      code: 'XRP',
      logo: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png'
    },
    {
      name: 'Cardano',
      code: 'ADA',
      logo: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
    },
    {
      name: 'Solana',
      code: 'SOL',
      logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
    },
    {
      name: 'Polkadot',
      code: 'DOT',
      logo: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png'
    }
  ];

  const fiatCurrencies = [
    {
      name: 'US Dollar',
      code: 'USD',
      flag: 'https://flagcdn.com/w80/us.png'
    },
    {
      name: 'Euro',
      code: 'EUR',
      flag: 'https://flagcdn.com/w80/eu.png'
    },
    {
      name: 'British Pound',
      code: 'GBP',
      flag: 'https://flagcdn.com/w80/gb.png'
    },
    {
      name: 'Japanese Yen',
      code: 'JPY',
      flag: 'https://flagcdn.com/w80/jp.png'
    },
    {
      name: 'Swiss Franc',
      code: 'CHF',
      flag: 'https://flagcdn.com/w80/ch.png'
    },
    {
      name: 'Canadian Dollar',
      code: 'CAD',
      flag: 'https://flagcdn.com/w80/ca.png'
    },
    {
      name: 'Australian Dollar',
      code: 'AUD',
      flag: 'https://flagcdn.com/w80/au.png'
    },
    {
      name: 'Chinese Yuan',
      code: 'CNY',
      flag: 'https://flagcdn.com/w80/cn.png'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            {t.trustSection.title}
          </h2>
          <div className="w-24 h-1 bg-[#D00000] mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-[#555555] font-medium px-4">
            {t.trustSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white border-2 border-[#E5E5E5] p-6 sm:p-8 hover:border-[#D00000] transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-2">
                {t.trustSection.crypto.title}
              </h3>
              <p className="text-sm sm:text-base text-[#555555] px-2">
                {t.trustSection.crypto.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {cryptoAssets.map((crypto, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-[#F5F5F5] hover:bg-[#FFFFFF] transition-colors duration-200 border border-[#E5E5E5] hover:border-[#CCCCCC]"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <img
                      src={crypto.logo}
                      alt={crypto.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[#000000] text-sm">
                      {crypto.code}
                    </div>
                    <div className="text-[#555555] text-xs truncate">
                      {crypto.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-[#777777] text-xs sm:text-sm font-medium italic">
                {t.trustSection.crypto.more}
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-[#E5E5E5] p-6 sm:p-8 hover:border-[#D00000] transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-2">
                {t.trustSection.fiat.title}
              </h3>
              <p className="text-sm sm:text-base text-[#555555] px-2">
                {t.trustSection.fiat.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {fiatCurrencies.map((currency, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-[#F5F5F5] hover:bg-[#FFFFFF] transition-colors duration-200 border border-[#E5E5E5] hover:border-[#CCCCCC]"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 overflow-hidden rounded">
                    <img
                      src={currency.flag}
                      alt={currency.name}
                      className="w-10 h-8 sm:w-12 sm:h-9 object-cover rounded shadow-sm"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[#000000] text-sm">
                      {currency.code}
                    </div>
                    <div className="text-[#555555] text-xs truncate">
                      {currency.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-[#777777] text-xs sm:text-sm font-medium italic">
                {t.trustSection.fiat.more}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
