import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RiskDisclosure() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Risk Disclosure Statement',
      lastUpdated: 'Last Updated: February 12, 2026',
      intro: 'This Risk Disclosure Statement is provided to inform you of the potential risks associated with financial services, banking, and cryptocurrency investments offered by Aareal Bank AG. You should carefully consider whether these services are suitable for you in light of your financial circumstances and risk tolerance.',
      warning: 'IMPORTANT: You should not invest money that you cannot afford to lose. All investments carry risk of loss.',
      sections: [
        {
          title: '1. Cryptocurrency Investment Risks',
          content: 'HIGH RISK WARNING: Cryptocurrencies are highly volatile and speculative investments. The value of cryptocurrencies can fluctuate dramatically in short periods. You may lose all or a substantial portion of your investment.\n\nKey risks include:\n• Market Volatility: Prices can change rapidly and unpredictably\n• Liquidity Risk: You may not be able to sell at desired times or prices\n• Technology Risk: Blockchain and wallet security vulnerabilities\n• Regulatory Risk: Changing laws and regulations may impact value\n• Operational Risk: Exchange failures, hacks, or technical issues\n• Loss of Private Keys: Irreversible loss of access to funds\n• No Deposit Insurance: Cryptocurrency deposits are not protected by government insurance schemes'
        },
        {
          title: '2. Market Risk',
          content: 'All financial instruments are subject to market risk. The value of investments can go down as well as up due to various factors including:\n• Economic conditions and trends\n• Political events and instability\n• Market sentiment and speculation\n• Supply and demand dynamics\n• Currency exchange rate fluctuations\n• Interest rate changes\n\nPast performance is not indicative of future results. Historical returns do not guarantee future performance.'
        },
        {
          title: '3. Leverage and Margin Trading Risks',
          content: 'If you engage in leveraged or margin trading:\n• You can lose more than your initial investment\n• Small market movements can result in large losses\n• Margin calls may require additional funds immediately\n• Positions may be liquidated without your consent\n• High volatility increases risk of significant losses\n\nLeverage amplifies both gains and losses. Only experienced investors should consider leveraged products.'
        },
        {
          title: '4. Technology and Cybersecurity Risks',
          content: 'Digital banking and cryptocurrency services face unique technology risks:\n• Cyberattacks, hacking, and unauthorized access\n• System outages and technical failures\n• Software bugs and vulnerabilities\n• Phishing and social engineering attacks\n• Device security compromises\n• Network disruptions\n\nWhile we implement robust security measures, no system is completely immune to security breaches.'
        },
        {
          title: '5. Regulatory and Legal Risks',
          content: 'The regulatory environment for cryptocurrencies and digital assets is evolving:\n• New regulations may restrict or prohibit certain activities\n• Regulatory actions may impact asset values\n• Tax treatment may change\n• Legal status of assets may be uncertain\n• Cross-border transactions may face restrictions\n• Compliance requirements may increase\n\nYou are responsible for understanding and complying with applicable laws in your jurisdiction.'
        },
        {
          title: '6. Counterparty Risk',
          content: 'When you transact with or through third parties, you face counterparty risk:\n• Exchange or platform failure\n• Insolvency of service providers\n• Fraud or misrepresentation\n• Failure to honor commitments\n• Loss of funds held by third parties\n\nWe conduct due diligence on partners, but cannot guarantee their solvency or integrity.'
        },
        {
          title: '7. Liquidity Risk',
          content: 'Liquidity risk refers to the risk of not being able to buy or sell assets quickly:\n• Low trading volumes may prevent timely transactions\n• Wide bid-ask spreads may result in unfavorable prices\n• Market disruptions may halt trading\n• Withdrawal restrictions may be imposed\n• Asset conversion may take time\n\nCertain assets may have limited liquidity, especially during market stress.'
        },
        {
          title: '8. Currency and Foreign Exchange Risk',
          content: 'If you hold assets in foreign currencies or cryptocurrencies:\n• Exchange rate fluctuations can affect value\n• Conversion fees may apply\n• Currency controls may restrict transfers\n• Hedging may not be available or effective\n\nYour returns may be significantly impacted by currency movements.'
        },
        {
          title: '9. Operational Risk',
          content: 'Operational risks include:\n• Human error in processing transactions\n• System failures and downtime\n• Process failures and delays\n• Inadequate procedures or controls\n• External events beyond our control\n\nWe maintain business continuity plans, but disruptions may still occur.'
        },
        {
          title: '10. No Guarantee of Returns',
          content: 'We do not guarantee:\n• Investment returns or profits\n• Capital preservation\n• Specific performance outcomes\n• Protection against losses\n• Achievement of financial goals\n\nAll investment decisions are your responsibility. You should seek independent financial advice if needed.'
        },
        {
          title: '11. Suitability and Appropriateness',
          content: 'Before using our services, you should:\n• Assess your financial situation and objectives\n• Understand your risk tolerance\n• Evaluate whether products are suitable for you\n• Consider your investment time horizon\n• Review your overall portfolio allocation\n• Understand the products and their risks\n\nIf you do not understand a product, do not invest in it until you have sought professional advice.'
        },
        {
          title: '12. Information and Communication Risks',
          content: 'Risks related to information and communication:\n• Market information may be delayed or inaccurate\n• Communication channels may be disrupted\n• Electronic trading systems may fail\n• Price quotes may not reflect actual market conditions\n• Execution may differ from expectations\n\nYou should verify important information through multiple sources.'
        },
        {
          title: '13. Tax Implications',
          content: 'You are responsible for:\n• Understanding tax treatment of transactions\n• Reporting income and gains to tax authorities\n• Paying applicable taxes\n• Maintaining records for tax purposes\n\nTax laws are complex and subject to change. We recommend consulting a tax professional.'
        },
        {
          title: '14. Acknowledgment',
          content: 'By using our services, you acknowledge that:\n• You have read and understood this Risk Disclosure\n• You accept the risks described\n• You are responsible for your investment decisions\n• You will not hold Aareal Bank AG liable for losses\n• You have the financial resources to bear the risks\n• You have obtained independent advice if needed'
        }
      ]
    },
    fr: {
      title: 'Déclaration de Divulgation des Risques',
      lastUpdated: 'Dernière mise à jour: 12 février 2026',
      intro: 'Cette Déclaration de Divulgation des Risques est fournie pour vous informer des risques potentiels associés aux services financiers, bancaires et aux investissements en cryptomonnaie offerts par Aareal Bank AG. Vous devez examiner attentivement si ces services vous conviennent compte tenu de votre situation financière et de votre tolérance au risque.',
      warning: 'IMPORTANT: Vous ne devriez pas investir de l\'argent que vous ne pouvez pas vous permettre de perdre. Tous les investissements comportent un risque de perte.',
      sections: [
        {
          title: '1. Risques d\'Investissement en Cryptomonnaie',
          content: 'AVERTISSEMENT DE RISQUE ÉLEVÉ: Les cryptomonnaies sont des investissements très volatils et spéculatifs. La valeur des cryptomonnaies peut fluctuer de façon spectaculaire sur de courtes périodes. Vous pouvez perdre la totalité ou une partie importante de votre investissement.\n\nRisques clés:\n• Volatilité du Marché: Les prix peuvent changer rapidement et de manière imprévisible\n• Risque de Liquidité: Vous pourriez ne pas pouvoir vendre aux moments ou prix souhaités\n• Risque Technologique: Vulnérabilités de la blockchain et des portefeuilles\n• Risque Réglementaire: L\'évolution des lois et réglementations peut affecter la valeur\n• Risque Opérationnel: Défaillances d\'échanges, piratages ou problèmes techniques\n• Perte de Clés Privées: Perte irréversible de l\'accès aux fonds\n• Pas d\'Assurance-dépôts: Les dépôts en cryptomonnaie ne sont pas protégés par les régimes d\'assurance gouvernementaux'
        },
        {
          title: '2. Risque de Marché',
          content: 'Tous les instruments financiers sont soumis au risque de marché. La valeur des investissements peut baisser ou augmenter en raison de divers facteurs, notamment:\n• Conditions et tendances économiques\n• Événements politiques et instabilité\n• Sentiment et spéculation du marché\n• Dynamique de l\'offre et de la demande\n• Fluctuations des taux de change\n• Changements de taux d\'intérêt\n\nLes performances passées ne sont pas indicatives des résultats futurs. Les rendements historiques ne garantissent pas les performances futures.'
        },
        {
          title: '3. Risques de Trading à Effet de Levier et sur Marge',
          content: 'Si vous vous engagez dans le trading à effet de levier ou sur marge:\n• Vous pouvez perdre plus que votre investissement initial\n• De petits mouvements de marché peuvent entraîner de grandes pertes\n• Les appels de marge peuvent nécessiter des fonds supplémentaires immédiatement\n• Les positions peuvent être liquidées sans votre consentement\n• Une forte volatilité augmente le risque de pertes importantes\n\nL\'effet de levier amplifie à la fois les gains et les pertes. Seuls les investisseurs expérimentés devraient envisager des produits à effet de levier.'
        },
        {
          title: '4. Risques Technologiques et de Cybersécurité',
          content: 'Les services bancaires numériques et de cryptomonnaie font face à des risques technologiques uniques:\n• Cyberattaques, piratage et accès non autorisé\n• Pannes de système et défaillances techniques\n• Bugs logiciels et vulnérabilités\n• Attaques de phishing et d\'ingénierie sociale\n• Compromission de la sécurité des appareils\n• Interruptions de réseau\n\nBien que nous mettions en œuvre des mesures de sécurité robustes, aucun système n\'est complètement à l\'abri des violations de sécurité.'
        }
      ]
    }
  };

  const currentContent = language === 'fr' ? content.fr : content.en;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-r from-[#000000] to-[#D00000] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <AlertTriangle size={48} className="text-white" />
            <h1 className="text-4xl md:text-5xl font-bold">{currentContent.title}</h1>
          </div>
          <p className="text-[#FFFFFF] text-lg mb-4">{currentContent.lastUpdated}</p>
          <p className="text-[#F5F5F5] leading-relaxed mb-4">{currentContent.intro}</p>
          <div className="bg-[#D00000] text-[#000000] p-4 rounded-lg font-bold">
            {currentContent.warning}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-[#000000] mb-4 flex items-start">
                  <AlertTriangle size={24} className="text-[#D00000] mr-2 flex-shrink-0 mt-1" />
                  {section.title}
                </h2>
                <p className="text-[#333333] leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-2 border-[#F5C2C7]">
            <div className="bg-[#FFF1F1] border-2 border-[#D00000] p-6 rounded-lg">
              <p className="text-[#000000] font-bold text-lg mb-2">
                {language === 'fr' ? 'MISE EN GARDE FINALE' : 'FINAL WARNING'}
              </p>
              <p className="text-[#000000] leading-relaxed">
                {language === 'fr'
                  ? 'En utilisant nos services, vous reconnaissez avoir lu, compris et accepté les risques décrits dans cette déclaration. Vous comprenez que vous pouvez perdre une partie ou la totalité de votre investissement. Si vous n\'êtes pas à l\'aise avec ces risques, vous ne devriez pas utiliser nos services.'
                  : 'By using our services, you acknowledge that you have read, understood, and accepted the risks described in this statement. You understand that you may lose some or all of your investment. If you are not comfortable with these risks, you should not use our services.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
