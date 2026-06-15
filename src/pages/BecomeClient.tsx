import { UserPlus, CheckCircle, Calendar, MessageSquare, FileText, HandshakeIcon } from 'lucide-react';
import { useState } from 'react';

export default function BecomeClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    netWorth: '',
    interests: [] as string[],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const steps = [
    {
      icon: MessageSquare,
      title: 'Initial Contact',
      description: 'Reach out to us through the form below or call our dedicated client services team.'
    },
    {
      icon: Calendar,
      title: 'Discovery Meeting',
      description: 'Meet with one of our advisors to discuss your financial situation, goals, and aspirations.'
    },
    {
      icon: FileText,
      title: 'Proposal & Planning',
      description: 'Receive a comprehensive proposal outlining our recommended strategy and services.'
    },
    {
      icon: HandshakeIcon,
      title: 'Partnership Begins',
      description: 'Once you approve, we begin implementing your customized wealth management strategy.'
    }
  ];

  const serviceInterests = [
    'Wealth Management',
    'Investment Advisory',
    'Estate Planning',
    'Tax Planning',
    'Business Advisory',
    'Real Estate Services',
    'International Banking',
    'Philanthropic Advisory'
  ];

  return (
    <div className="min-h-screen bg-[#F6F8F7]">
      <div className="bg-gradient-to-br from-[#12355B] via-[#0F766E] to-[#172033] text-white py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            Become a Client
          </h1>
          <p className="text-2xl lg:text-3xl text-[#E6ECEF] max-w-3xl font-light">
            Start your journey to financial excellence with Aareal Bank AG
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-12 shadow-lg mb-16">
          <h2 className="text-4xl font-bold text-[#172033] mb-6">
            Your Path to Partnership
          </h2>
          <p className="text-xl text-[#3F4D5F] leading-relaxed mb-12">
            Becoming a client of Aareal Bank AG is the first step toward a lasting partnership built on trust, expertise, and shared success. Our process is designed to ensure we're the right fit for your unique needs and goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0F766E] text-white rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#12355B] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#172033] mb-3">{step.title}</h3>
                  <p className="text-[#3F4D5F]">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#C7D3D0] -ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-10 shadow-lg">
            <UserPlus className="w-12 h-12 text-[#0F766E] mb-6" />
            <h3 className="text-3xl font-bold text-[#172033] mb-6">Get Started Today</h3>
            <p className="text-[#3F4D5F] mb-8 leading-relaxed">
              Complete the form to schedule your confidential consultation with one of our wealth management specialists. We'll discuss your goals and explore how we can help you achieve them.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#172033] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#172033] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#172033] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#172033] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 border border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#172033] mb-2">
                  Investable Assets
                </label>
                <select
                  className="w-full p-3 border border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none"
                  value={formData.netWorth}
                  onChange={(e) => setFormData({ ...formData, netWorth: e.target.value })}
                >
                  <option value="">Select range</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m+">$10M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#172033] mb-3">
                  Services of Interest
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {serviceInterests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-4 h-4 text-[#0F766E] focus:ring-[#0F766E]"
                      />
                      <span className="text-sm text-[#3F4D5F]">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#172033] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-[#C7D3D0] focus:border-[#0F766E] focus:outline-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your financial goals and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F766E] hover:bg-[#0B5F59] text-white font-bold py-4 px-8 transition-all text-lg"
              >
                Request Consultation
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0F766E] to-[#12355B] text-white p-10 shadow-xl">
              <CheckCircle className="w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-6">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <div>
                    <p className="font-bold mb-1">Confidential Consultation</p>
                    <p className="text-[#F3F7F6]">All discussions are completely confidential and without obligation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <div>
                    <p className="font-bold mb-1">Personalized Approach</p>
                    <p className="text-[#F3F7F6]">We'll take time to understand your unique situation and goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <div>
                    <p className="font-bold mb-1">Expert Guidance</p>
                    <p className="text-[#F3F7F6]">Meet with experienced advisors who specialize in complex wealth</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <div>
                    <p className="font-bold mb-1">No Pressure</p>
                    <p className="text-[#F3F7F6]">Take the time you need to make an informed decision</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#172033] mb-6">Contact Information</h3>
              <div className="space-y-4 text-[#3F4D5F]">
                <div>
                  <p className="font-bold text-[#172033]">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-bold text-[#172033]">Email</p>
                  <p>support@aareal-bank-ag.com</p>
                </div>
                <div>
                  <p className="font-bold text-[#172033]">Office Hours</p>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
