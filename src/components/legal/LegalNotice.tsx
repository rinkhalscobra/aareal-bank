import { AlertCircle, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface LegalNoticeProps {
  type: 'info' | 'warning' | 'important' | 'success';
  title?: string;
  children: ReactNode;
}

export default function LegalNotice({ type, title, children }: LegalNoticeProps) {
  const configs = {
    info: {
      icon: Info,
      bgColor: 'bg-[#ECFDF8]',
      borderColor: 'border-[#0F766E]',
      textColor: 'text-[#12355B]',
      titleColor: 'text-[#12355B]'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-700',
      textColor: 'text-yellow-900',
      titleColor: 'text-yellow-900'
    },
    important: {
      icon: AlertCircle,
      bgColor: 'bg-[#ECFDF8]',
      borderColor: 'border-[#0F766E]',
      textColor: 'text-[#12355B]',
      titleColor: 'text-[#12355B]'
    },
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-700',
      textColor: 'text-green-900',
      titleColor: 'text-green-900'
    }
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} border-l-4 ${config.borderColor} p-4 sm:p-6 my-6 rounded-r-lg`}>
      <div className="flex items-start space-x-3">
        <Icon className={`${config.textColor} flex-shrink-0 mt-1`} size={24} />
        <div className="flex-1">
          {title && (
            <p className={`${config.titleColor} font-bold text-base sm:text-lg mb-2`}>
              {title}
            </p>
          )}
          <div className={`${config.textColor} text-sm sm:text-base leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
