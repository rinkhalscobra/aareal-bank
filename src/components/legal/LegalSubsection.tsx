import { ReactNode } from 'react';

interface LegalSubsectionProps {
  title: string;
  children: ReactNode;
}

export default function LegalSubsection({ title, children }: LegalSubsectionProps) {
  return (
    <div className="ml-0 sm:ml-4 my-6">
      <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-3">
        {title}
      </h3>
      <div className="text-[#333333] text-sm sm:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
