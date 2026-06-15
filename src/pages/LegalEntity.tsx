import { Building2, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LegalEntity() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Legal Entity Information',
      lastUpdated: 'Last Updated: February 12, 2026',
      intro: 'Aareal Bank AG operates as a fully regulated financial institution. This page provides important information about our legal entity, regulatory status, and compliance framework.',
      sections: [
        {
          title: 'Company Details',
          items: [
            { label: 'Legal Name', value: 'Aareal Bank AG' },
            { label: 'Registration Number', value: 'C 98765' },
            { label: 'Date of Incorporation', value: 'January 15, 2020' },
            { label: 'Jurisdiction', value: 'Republic of Malta' },
            { label: 'Legal Form', value: 'Limited Liability Company' },
            { label: 'Share Capital', value: '€50,000,000' }
          ]
        },
        {
          title: 'Registered Office',
          items: [
            { label: 'Address', value: 'Level 3, 123 Republic Street' },
            { label: 'City', value: 'Valletta VLT 1117' },
            { label: 'Country', value: 'Malta' },
            { label: 'Email', value: 'support@aareal-bank-ag.com' },
            { label: 'Phone', value: '+356 2123 4567' }
          ]
        },
        {
          title: 'Regulatory Authorizations',
          items: [
            {
              label: 'Malta Financial Services Authority (MFSA)',
              value: 'Licensed as a Credit Institution under the Banking Act',
              license: 'License Number: B/12345/2020'
            },
            {
              label: 'Virtual Financial Assets (VFA) Framework',
              value: 'Class 2 VFA License for cryptocurrency services',
              license: 'License Number: VFA/C2/67890/2020'
            },
            {
              label: 'European Banking Authority (EBA)',
              value: 'Compliant with EU banking regulations and directives'
            },
            {
              label: 'European Securities and Markets Authority (ESMA)',
              value: 'Registered for investment services'
            }
          ]
        },
        {
          title: 'Compliance and Certifications',
          items: [
            { label: 'AML/CFT Compliance', value: 'Full compliance with EU AML Directives (5AMLD/6AMLD)' },
            { label: 'GDPR Compliance', value: 'EU General Data Protection Regulation certified' },
            { label: 'PCI DSS Certification', value: 'Level 1 Payment Card Industry Data Security Standard' },
            { label: 'ISO 27001', value: 'Information Security Management System certified' },
            { label: 'SOC 2 Type II', value: 'Service Organization Control audit certified' },
            { label: 'KYC Standards', value: 'FATF-compliant Know Your Customer procedures' }
          ]
        },
        {
          title: 'Deposit Protection',
          items: [
            {
              label: 'Deposit Guarantee Scheme',
              value: 'Member of the Malta Depositor Compensation Scheme (DCS)',
              details: 'Eligible deposits protected up to €100,000 per depositor'
            },
            {
              label: 'Cryptocurrency Assets',
              value: 'Cryptocurrency holdings are not covered by deposit insurance',
              details: 'Cold storage and insurance arrangements in place for digital assets'
            }
          ]
        },
        {
          title: 'Corporate Governance',
          items: [
            { label: 'Board of Directors', value: '7 members including 4 independent directors' },
            { label: 'Audit Committee', value: 'Independent oversight of financial reporting' },
            { label: 'Risk Committee', value: 'Risk management and compliance oversight' },
            { label: 'Technology Committee', value: 'Cybersecurity and IT infrastructure governance' },
            { label: 'Annual General Meeting', value: 'Held annually in accordance with Maltese law' }
          ]
        },
        {
          title: 'Financial Reporting',
          items: [
            { label: 'Accounting Standards', value: 'International Financial Reporting Standards (IFRS)' },
            { label: 'Auditor', value: 'KPMG Malta' },
            { label: 'Financial Year End', value: 'December 31' },
            { label: 'Annual Reports', value: 'Published and available on our website' },
            { label: 'Regulatory Reporting', value: 'Regular submissions to MFSA and ECB' }
          ]
        },
        {
          title: 'Investor Protection',
          items: [
            { label: 'Investor Compensation Scheme', value: 'Member of the Malta Investor Compensation Scheme' },
            { label: 'Coverage Limit', value: 'Up to €20,000 per investor for eligible claims' },
            { label: 'Segregated Accounts', value: 'Client funds held separately from company funds' },
            { label: 'Client Money Protection', value: 'Daily reconciliation and independent oversight' }
          ]
        },
        {
          title: 'Anti-Money Laundering',
          items: [
            { label: 'AML Compliance Officer', value: 'Designated MLRO (Money Laundering Reporting Officer)' },
            { label: 'Transaction Monitoring', value: 'Real-time automated screening and alerts' },
            { label: 'Sanctions Screening', value: 'Continuous screening against global sanctions lists' },
            { label: 'Enhanced Due Diligence', value: 'Risk-based approach for high-risk customers' },
            { label: 'Suspicious Activity Reporting', value: 'Direct reporting to FIAU (Financial Intelligence Analysis Unit)' }
          ]
        },
        {
          title: 'Professional Indemnity Insurance',
          items: [
            { label: 'Coverage', value: 'Professional indemnity insurance maintained' },
            { label: 'Provider', value: 'Lloyd\'s of London syndicates' },
            { label: 'Coverage Amount', value: '€25,000,000 per claim / €50,000,000 aggregate' },
            { label: 'Cyber Insurance', value: 'Dedicated cybersecurity insurance policy' }
          ]
        },
        {
          title: 'Dispute Resolution',
          items: [
            { label: 'Internal Complaints', value: 'Dedicated complaints handling procedure' },
            { label: 'Arbiter for Financial Services', value: 'Alternative dispute resolution available' },
            { label: 'Ombudsman Scheme', value: 'Access to independent ombudsman services' },
            { label: 'Arbitration', value: 'Commercial disputes subject to Malta arbitration' },
            { label: 'Jurisdiction', value: 'Malta courts have exclusive jurisdiction' }
          ]
        },
        {
          title: 'Tax Information',
          items: [
            { label: 'Tax Identification Number', value: 'MT12345678P' },
            { label: 'VAT Number', value: 'MT98765432' },
            { label: 'Tax Status', value: 'Maltese tax resident company' },
            { label: 'Tax Rate', value: 'Subject to Malta corporate tax at 35%' },
            { label: 'Tax Treaties', value: 'Benefits from Malta\'s extensive double tax treaty network' },
            { label: 'FATCA Reporting', value: 'Compliant with US Foreign Account Tax Compliance Act' },
            { label: 'CRS Reporting', value: 'Common Reporting Standard for automatic exchange of information' }
          ]
        }
      ]
    },
    fr: {
      title: 'Informations sur l\'Entité Juridique',
      lastUpdated: 'Dernière mise à jour: 12 février 2026',
      intro: 'Aareal Bank AG opère en tant qu\'institution financière entièrement réglementée. Cette page fournit des informations importantes sur notre entité juridique, notre statut réglementaire et notre cadre de conformité.',
      sections: [
        {
          title: 'Détails de l\'Entreprise',
          items: [
            { label: 'Nom Légal', value: 'Aareal Bank AG' },
            { label: 'Numéro d\'Enregistrement', value: 'C 98765' },
            { label: 'Date de Création', value: '15 janvier 2020' },
            { label: 'Juridiction', value: 'République de Malte' },
            { label: 'Forme Juridique', value: 'Société à Responsabilité Limitée' },
            { label: 'Capital Social', value: '€50,000,000' }
          ]
        },
        {
          title: 'Siège Social',
          items: [
            { label: 'Adresse', value: 'Niveau 3, 123 Republic Street' },
            { label: 'Ville', value: 'Valletta VLT 1117' },
            { label: 'Pays', value: 'Malte' },
            { label: 'E-mail', value: 'support@aareal-bank-ag.com' },
            { label: 'Téléphone', value: '+356 2123 4567' }
          ]
        },
        {
          title: 'Autorisations Réglementaires',
          items: [
            {
              label: 'Autorité des Services Financiers de Malte (MFSA)',
              value: 'Agréé en tant qu\'établissement de crédit en vertu de la loi bancaire',
              license: 'Numéro de Licence: B/12345/2020'
            },
            {
              label: 'Cadre des Actifs Financiers Virtuels (VFA)',
              value: 'Licence VFA de Classe 2 pour les services de cryptomonnaie',
              license: 'Numéro de Licence: VFA/C2/67890/2020'
            }
          ]
        }
      ]
    }
  };

  const currentContent = language === 'fr' ? content.fr : content.en;

  return (
    <div className="min-h-screen bg-[#F6F8F7]">
      <div className="bg-gradient-to-r from-[#172033] to-[#172033] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Building2 size={48} className="text-[#C8942D]" />
            <h1 className="text-4xl md:text-5xl font-bold">{currentContent.title}</h1>
          </div>
          <p className="text-[#CBD5DE] text-lg mb-4">{currentContent.lastUpdated}</p>
          <p className="text-[#E6ECEF] leading-relaxed">{currentContent.intro}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {currentContent.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#172033] mb-6 flex items-center">
                <CheckCircle className="text-[#0F766E] mr-3" size={32} />
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-[#0F766E] pl-4">
                    <h3 className="font-semibold text-[#172033] mb-1">{item.label}</h3>
                    <p className="text-[#3F4D5F]">{item.value}</p>
                    {item.license && (
                      <p className="text-sm text-[#5D6B7B] mt-1 italic">{item.license}</p>
                    )}
                    {item.details && (
                      <p className="text-sm text-[#5D6B7B] mt-1">{item.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="bg-green-50 border-2 border-green-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              {language === 'fr' ? 'Entièrement Agréé et Réglementé' : 'Fully Licensed and Regulated'}
            </h3>
            <p className="text-[#24364B] leading-relaxed">
              {language === 'fr'
                ? 'Aareal Bank AG est fièrement agréée et réglementée par l\'Autorité des Services Financiers de Malte (MFSA) et opère en pleine conformité avec toutes les réglementations de l\'Union Européenne et internationales applicables. Nous maintenons les normes les plus élevées de conformité réglementaire, de sécurité et de protection des clients.'
                : 'Aareal Bank AG is proudly licensed and regulated by the Malta Financial Services Authority (MFSA) and operates in full compliance with all applicable European Union and international regulations. We maintain the highest standards of regulatory compliance, security, and client protection.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
