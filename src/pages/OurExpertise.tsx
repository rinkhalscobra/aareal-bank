import { Award, Building2, Briefcase, Home, LineChart, Scale, Gem, Globe } from 'lucide-react';

export default function OurExpertise() {
  const expertiseAreas = [
    {
      icon: LineChart,
      title: 'Wealth Management',
      description: 'Comprehensive investment strategies tailored to preserve and grow your wealth across generations.',
      services: [
        'Portfolio Management',
        'Asset Allocation',
        'Risk Management',
        'Performance Monitoring'
      ]
    },
    {
      icon: Building2,
      title: 'Business Advisory',
      description: 'Strategic guidance for entrepreneurs and business owners on growth, succession, and exit planning.',
      services: [
        'Business Valuation',
        'Succession Planning',
        'M&A Advisory',
        'Corporate Finance'
      ]
    },
    {
      icon: Scale,
      title: 'Estate & Tax Planning',
      description: 'Sophisticated strategies to minimize tax burden and ensure smooth wealth transfer to future generations.',
      services: [
        'Estate Planning',
        'Tax Optimization',
        'Trust Services',
        'Legacy Planning'
      ]
    },
    {
      icon: Home,
      title: 'Real Estate Services',
      description: 'Expert advice on real estate investments, financing, and portfolio diversification through property.',
      services: [
        'Property Investment',
        'Real Estate Financing',
        'Portfolio Diversification',
        'Property Management'
      ]
    },
    {
      icon: Briefcase,
      title: 'Private Banking',
      description: 'Exclusive banking services with personalized attention and preferential terms for high-net-worth clients.',
      services: [
        'Premium Accounts',
        'Credit Facilities',
        'Cash Management',
        'Concierge Services'
      ]
    },
    {
      icon: Gem,
      title: 'Alternative Investments',
      description: 'Access to exclusive opportunities in private equity, hedge funds, and other alternative asset classes.',
      services: [
        'Private Equity',
        'Hedge Funds',
        'Art & Collectibles',
        'Structured Products'
      ]
    },
    {
      icon: Globe,
      title: 'International Services',
      description: 'Cross-border wealth management and international banking solutions for global clients.',
      services: [
        'Global Banking',
        'Currency Management',
        'International Transfers',
        'Offshore Solutions'
      ]
    },
    {
      icon: Award,
      title: 'Philanthropic Advisory',
      description: 'Guidance on charitable giving, foundation establishment, and impact investing aligned with your values.',
      services: [
        'Charitable Planning',
        'Foundation Setup',
        'Impact Investing',
        'Legacy Projects'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-br from-[#000000] via-[#D00000] to-[#000000] text-white py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            Our Expertise
          </h1>
          <p className="text-2xl lg:text-3xl text-[#F5F5F5] max-w-3xl font-light">
            Comprehensive financial services backed by decades of experience
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-12 shadow-lg mb-16">
          <h2 className="text-4xl font-bold text-[#000000] mb-6">
            Specialists in Complex Wealth
          </h2>
          <p className="text-xl text-[#333333] leading-relaxed mb-6">
            Malta Global Crypto Bank brings together a team of specialists with deep expertise across every aspect of wealth management. From investment strategy to tax planning, from business succession to philanthropic advisory, we have the knowledge and experience to address even the most complex financial situations.
          </p>
          <p className="text-xl text-[#333333] leading-relaxed">
            Our multidisciplinary approach ensures that every decision is informed by comprehensive expertise, and every strategy is optimized for your complete financial picture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#D00000]"
            >
              <area.icon className="w-12 h-12 text-[#D00000] mb-4" />
              <h3 className="text-2xl font-bold text-[#000000] mb-4">{area.title}</h3>
              <p className="text-[#333333] mb-6 leading-relaxed">{area.description}</p>
              <div className="border-t border-[#E5E5E5] pt-4">
                <h4 className="text-sm font-bold text-[#000000] mb-3 uppercase tracking-wide">
                  Key Services
                </h4>
                <ul className="space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#D00000] mr-2">•</span>
                      <span className="text-[#333333]">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#D00000] to-[#000000] text-white p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Our Expertise Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-[#FFFFFF]">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$5B+</div>
              <p className="text-[#FFFFFF]">Assets Under Management</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1,000+</div>
              <p className="text-[#FFFFFF]">Clients Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
