import { DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  const { language } = useLanguage();

  const getLangPath = (path: string) => `/${language}${path}`;

  const content = {
    en: {
      title: 'Refund Policy',
      lastUpdated: 'Last Updated: February 12, 2026',
      intro: 'Malta Global Crypto Bank is committed to providing transparent and fair refund policies. This policy outlines the circumstances under which refunds may be issued for fees, charges, and transactions.',
      sections: [
        {
          title: '1. General Refund Principles',
          content: 'Our refund policy is based on the following principles:\n• Fairness and transparency in all refund decisions\n• Timely processing of legitimate refund requests\n• Clear communication about refund eligibility\n• Compliance with applicable laws and regulations\n\nRefunds are considered on a case-by-case basis and are subject to verification and approval.'
        },
        {
          title: '2. Service Fees and Charges',
          content: 'Account Maintenance Fees: Monthly or annual account fees are generally non-refundable once charged. However, if you close your account within 30 days of opening, you may be eligible for a prorated refund.\n\nTransaction Fees: Standard transaction fees are non-refundable once a transaction is completed. Refunds may be considered if:\n• The transaction failed due to our system error\n• You were charged an incorrect fee amount\n• The transaction was unauthorized\n\nProcessing time for fee refunds: 5-10 business days.'
        },
        {
          title: '3. Investment and Trading Fees',
          content: 'Trading Commissions: Commissions on executed trades are non-refundable as they represent compensation for services rendered.\n\nManagement Fees: Investment management fees are calculated based on assets under management and are typically non-refundable for the period services were provided.\n\nAdvisory Fees: Consultation and advisory fees are non-refundable once services have been delivered.'
        },
        {
          title: '4. Cryptocurrency Transactions',
          content: 'IMPORTANT: Cryptocurrency transactions are generally irreversible by nature.\n\nNo Refunds For:\n• Market losses or price fluctuations\n• Transactions sent to incorrect wallet addresses (user error)\n• Transactions confirmed on the blockchain\n• Gas fees and network transaction costs\n• Trading losses\n\nPossible Refunds For:\n• Technical errors preventing transaction completion\n• Unauthorized transactions (subject to investigation)\n• Duplicate charges due to system malfunction\n• Services not rendered as described\n\nCryptocurrency refunds may be issued in the original cryptocurrency or equivalent fiat value at our discretion.'
        },
        {
          title: '5. Unauthorized Transactions',
          content: 'If you believe an unauthorized transaction occurred:\n1. Contact us immediately at support@malta-global-crypto-bank.com\n2. Provide transaction details and explanation\n3. Complete any required fraud investigation forms\n4. Cooperate with our investigation\n\nWe will investigate within 10 business days. If unauthorized activity is confirmed, we will:\n• Reverse the transaction if possible\n• Issue a refund for the unauthorized amount\n• Implement additional security measures\n\nYou must report unauthorized transactions within 60 days of occurrence.'
        },
        {
          title: '6. Technical Errors and System Failures',
          content: 'If a transaction fails or is delayed due to our technical error:\n• We will investigate the issue promptly\n• Fees associated with the failed transaction will be refunded\n• If the transaction cannot be completed, funds will be returned\n• Compensation may be provided for significant inconvenience\n\nWe are not responsible for losses due to:\n• Third-party service provider failures\n• Blockchain network issues\n• Internet connectivity problems\n• User device or software issues'
        },
        {
          title: '7. Subscription Services',
          content: 'Premium Account Subscriptions:\n• Monthly subscriptions: Cancellation effective next billing cycle, no mid-month refunds\n• Annual subscriptions: Prorated refunds available if cancelled within first 30 days\n• No refunds after 30 days of annual subscription start\n\nAdditional Services:\n• Advisory services: Refundable within 7 days if no consultation occurred\n• Educational programs: Refundable within 14 days if less than 25% content accessed\n• Research subscriptions: Prorated refunds for annual plans cancelled early'
        },
        {
          title: '8. Disputed Charges',
          content: 'If you dispute a charge:\n1. Contact our support team with details\n2. Provide supporting documentation\n3. Allow 10-15 business days for investigation\n4. Receive written explanation of decision\n\nIf the dispute is resolved in your favor:\n• Refund will be processed within 5-10 business days\n• Original payment method will be credited\n• Confirmation will be sent via email\n\nIf the dispute is not resolved:\n• You will receive detailed explanation\n• You may escalate to management review\n• External dispute resolution options will be provided'
        },
        {
          title: '9. Refund Processing Time',
          content: 'Standard refund processing times:\n• Internal investigation: 3-10 business days\n• Approval and processing: 2-5 business days\n• Bank/payment processor: 5-10 business days\n• Total time: 10-25 business days\n\nCryptocurrency refunds:\n• Investigation: 3-10 business days\n• Blockchain transaction: 1-24 hours\n• Total time: 4-11 business days\n\nExpedited processing may be available for urgent cases.'
        },
        {
          title: '10. Refund Methods',
          content: 'Refunds will be issued using the original payment method when possible:\n• Bank transfer: Returned to originating account\n• Credit/Debit card: Credited to original card\n• Cryptocurrency: Returned to original wallet address\n• Cash deposits: Bank transfer or check\n\nAlternative refund methods may be used if:\n• Original method is no longer available\n• Original account is closed\n• You request a different method in writing'
        },
        {
          title: '11. Non-Refundable Items',
          content: 'The following are strictly non-refundable:\n• Market losses on investments\n• Completed cryptocurrency transactions\n• Interest rate differences\n• Foreign exchange losses\n• Third-party fees (blockchain gas fees, network fees)\n• Penalties for early withdrawal or contract breach\n• Services fully rendered\n• Expired promotional offers'
        },
        {
          title: '12. Chargebacks',
          content: 'If you initiate a chargeback through your bank or credit card company:\n• We will investigate the claim\n• Account may be suspended pending resolution\n• Services may be terminated if chargeback is unjustified\n• You may be liable for costs and fees\n\nWe encourage you to contact us directly before initiating a chargeback, as most issues can be resolved more quickly through our internal process.'
        },
        {
          title: '13. Special Circumstances',
          content: 'Refunds may be considered in special circumstances including:\n• Death of account holder (subject to documentation)\n• Serious illness or disability\n• Service disruption exceeding 48 hours\n• Material breach of our terms by the bank\n• Court order or legal requirement\n\nRequests based on special circumstances require supporting documentation and are evaluated individually.'
        },
        {
          title: '14. How to Request a Refund',
          content: 'To request a refund:\n1. Log in to your account\n2. Navigate to Support > Refund Request\n3. Complete the refund request form\n4. Provide required documentation\n5. Submit request\n\nAlternatively:\n• Email: support@malta-global-crypto-bank.com\n• Phone: Contact our support center\n• In writing: Mail to our registered address\n\nInclude:\n• Account information\n• Transaction details\n• Reason for refund request\n• Supporting documentation\n• Preferred refund method'
        },
        {
          title: '15. Contact Information',
          content: 'For refund inquiries and requests:\n\nEmail: support@malta-global-crypto-bank.com\nSupport Portal: Log in to your account\nPhone: Available through customer support\nMail: Malta Global Crypto Bank, Refunds Department, Valletta, Malta\n\nResponse time: We aim to respond to all refund requests within 3 business days.'
        }
      ]
    },
    fr: {
      title: 'Politique de Remboursement',
      lastUpdated: 'Dernière mise à jour: 12 février 2026',
      intro: 'Malta Global Crypto Bank s\'engage à fournir des politiques de remboursement transparentes et équitables. Cette politique décrit les circonstances dans lesquelles des remboursements peuvent être émis pour les frais, charges et transactions.',
      sections: [
        {
          title: '1. Principes Généraux de Remboursement',
          content: 'Notre politique de remboursement est basée sur les principes suivants:\n• Équité et transparence dans toutes les décisions de remboursement\n• Traitement rapide des demandes de remboursement légitimes\n• Communication claire sur l\'éligibilité au remboursement\n• Conformité aux lois et réglementations applicables\n\nLes remboursements sont examinés au cas par cas et sont soumis à vérification et approbation.'
        },
        {
          title: '2. Frais et Charges de Service',
          content: 'Frais de Tenue de Compte: Les frais de compte mensuels ou annuels sont généralement non remboursables une fois facturés. Cependant, si vous fermez votre compte dans les 30 jours suivant son ouverture, vous pouvez être éligible à un remboursement au prorata.\n\nFrais de Transaction: Les frais de transaction standard ne sont pas remboursables une fois la transaction terminée. Les remboursements peuvent être envisagés si:\n• La transaction a échoué en raison d\'une erreur de notre système\n• Vous avez été facturé un montant de frais incorrect\n• La transaction n\'était pas autorisée\n\nDélai de traitement des remboursements de frais: 5-10 jours ouvrables.'
        },
        {
          title: '3. Transactions de Cryptomonnaie',
          content: 'IMPORTANT: Les transactions de cryptomonnaie sont généralement irréversibles par nature.\n\nPas de Remboursement Pour:\n• Pertes de marché ou fluctuations de prix\n• Transactions envoyées à des adresses de portefeuille incorrectes (erreur de l\'utilisateur)\n• Transactions confirmées sur la blockchain\n• Frais de gaz et coûts de transaction réseau\n• Pertes de trading\n\nRemboursements Possibles Pour:\n• Erreurs techniques empêchant la réalisation de la transaction\n• Transactions non autorisées (sous réserve d\'enquête)\n• Frais en double dus à un dysfonctionnement du système\n• Services non rendus comme décrit\n\nLes remboursements en cryptomonnaie peuvent être émis dans la cryptomonnaie d\'origine ou en valeur fiat équivalente à notre discrétion.'
        },
        {
          title: '4. Demande de Remboursement',
          content: 'Pour demander un remboursement:\n1. Connectez-vous à votre compte\n2. Accédez à Support > Demande de Remboursement\n3. Remplissez le formulaire de demande de remboursement\n4. Fournissez la documentation requise\n5. Soumettez la demande\n\nAlternativement:\n• E-mail: support@malta-global-crypto-bank.com\n• Téléphone: Contactez notre centre de support\n• Par écrit: Envoyez à notre adresse enregistrée\n\nDélai de réponse: Nous visons à répondre à toutes les demandes de remboursement dans les 3 jours ouvrables.'
        }
      ]
    }
  };

  const currentContent = language === 'fr' ? content.fr : content.en;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="bg-gradient-to-r from-[#000000] to-[#000000] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{currentContent.title}</h1>
          </div>
          <p className="text-[#E5E5E5] text-lg mb-4">{currentContent.lastUpdated}</p>
          <p className="text-[#F5F5F5] leading-relaxed">{currentContent.intro}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-[#000000] mb-4">{section.title}</h2>
                <p className="text-[#333333] leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-2 border-[#E5E5E5]">
            <div className="bg-[#FFF1F1] border-l-4 border-[#D00000] p-6">
              <p className="text-[#000000] font-semibold mb-2">
                {language === 'fr' ? 'Questions sur les Remboursements?' : 'Questions about Refunds?'}
              </p>
              <p className="text-[#333333]">
                {language === 'fr'
                  ? 'Si vous avez des questions concernant cette politique de remboursement, veuillez '
                  : 'If you have questions about this refund policy, please '}
                <Link to={getLangPath('/support')} className="text-[#A00000] hover:text-[#000000] font-semibold underline">
                  {language === 'fr' ? 'contacter notre équipe de support' : 'contact our support team'}
                </Link>
                {language === 'fr'
                  ? ' ou envoyez-nous un e-mail à support@malta-global-crypto-bank.com.'
                  : ' or email us at support@malta-global-crypto-bank.com.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
