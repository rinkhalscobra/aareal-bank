import { useLanguage } from '../context/LanguageContext';

export default function Investments() {
  const { t } = useLanguage();

  const performanceData = [
    {
      category: t.investments.performance.conservative,
      return1Year: '4.2%',
      return5Year: '5.8%',
      risk: t.investments.performance.low
    },
    {
      category: t.investments.performance.moderate,
      return1Year: '7.5%',
      return5Year: '8.9%',
      risk: t.investments.performance.medium
    },
    {
      category: t.investments.performance.aggressive,
      return1Year: '12.3%',
      return5Year: '14.1%',
      risk: t.investments.performance.high
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#000000] text-white py-20 px-8 lg:px-16 flex items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">{t.investments.hero.title}</h1>
            <p className="text-2xl text-white/90">{t.investments.hero.subtitle}</p>
          </div>
        </div>
        <div className="h-[400px] lg:h-auto">
          <img
            src="https://assets.abnamro.com/api/public/content/woonverzekeringen-rechtsbijstand-4654-landscape-16x9.jpg?t=h640"
            alt="Investment Services"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#FFF1F1] border-l-4 border-[#D00000] py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#000000] text-sm font-medium">
            {t.investments.riskWarning}
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://assets.abnamro.com/api/public/content/drinking-coffee-friends-landscape-3x2.jpg?t=w624"
                alt="Friends drinking coffee"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4 text-[#000000]">
                {t.investments.bonus.title}
              </h2>
              <p className="text-[#333333] text-lg leading-relaxed">
                {t.investments.bonus.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#000000]">
                {t.investments.winterBonus.title}
              </h2>
              <p className="text-[#333333] text-lg leading-relaxed mb-6">
                {t.investments.winterBonus.description}
              </p>
              <ul className="space-y-4 mb-6">
                <li className="text-[#333333] text-lg">
                  {t.investments.winterBonus.newClients}
                </li>
                <li className="text-[#333333] text-lg">
                  {t.investments.winterBonus.existingClients}
                </li>
              </ul>
              <p className="text-[#555555] text-sm italic">
                {t.investments.winterBonus.note}
              </p>
            </div>
            <div>
              <img
                src="https://assets.abnamro.com/api/public/content/couple-walking-dog-autumn-1775222024-landscape-3x2.png?t=w624"
                alt="Couple walking dog in autumn"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 shadow-lg border-l-4 border-[#D00000]">
            <h3 className="text-2xl font-bold mb-4 text-[#000000]">{t.investments.riskInfo.title}</h3>
            <p className="text-[#333333] text-lg leading-relaxed mb-4">
              {t.investments.riskInfo.description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#000000]">
            {t.investments.whyInvest.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://assets.abnamro.com/api/public/content/pr-calculate-original.svg"
                alt="Calculate"
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#000000]">{t.investments.whyInvest.tools.title}</h3>
              <p className="text-[#333333] text-lg leading-relaxed">
                {t.investments.whyInvest.tools.description}
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://assets.abnamro.com/api/public/content/pr-investment-start-original.svg"
                alt="Investment Start"
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#000000]">{t.investments.whyInvest.beginnings.title}</h3>
              <p className="text-[#333333] text-lg leading-relaxed">
                {t.investments.whyInvest.beginnings.description}
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://assets.abnamro.com/api/public/content/pr-couple-original.svg"
                alt="Investors"
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#000000]">{t.investments.whyInvest.investors.title}</h3>
              <p className="text-[#333333] text-lg leading-relaxed">
                {t.investments.whyInvest.investors.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#000000] text-center">
            {t.investments.performance.title}
          </h2>
          <p className="text-[#555555] text-center mb-8">{t.investments.performance.disclaimer}</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#CCCCCC]">
                  <th className="text-left py-4 px-6 font-bold text-[#000000]">
                    {t.investments.performance.portfolioType}
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-[#000000]">
                    {t.investments.performance.oneYear}
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-[#000000]">
                    {t.investments.performance.fiveYear}
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-[#000000]">
                    {t.investments.performance.riskLevel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((data, index) => (
                  <tr key={index} className="border-b border-[#E5E5E5] hover:bg-[#F5F5F5]">
                    <td className="py-4 px-6 font-semibold text-[#000000]">{data.category}</td>
                    <td className="py-4 px-6 text-center text-[#D00000] font-bold">{data.return1Year}</td>
                    <td className="py-4 px-6 text-center text-[#D00000] font-bold">{data.return5Year}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        data.risk === t.investments.performance.low
                          ? 'bg-[#FFF1F1] text-[#000000]'
                          : data.risk === t.investments.performance.medium
                          ? 'bg-[#FFF1F1] text-[#000000]'
                          : 'bg-[#FFE5E5] text-[#A00000]'
                      }`}>
                        {data.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
