import { ReactNode } from 'react';

interface LegalSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  id?: string;
}

export default function LegalSection({ title, children, icon, id }: LegalSectionProps) {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="mb-8 sm:mb-10 scroll-mt-24" id={sectionId}>
      <div className="flex items-start space-x-3 mb-4">
        {icon && <div className="text-[#D00000] mt-1">{icon}</div>}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] border-b-2 border-[#D00000] pb-2 flex-1">
          {title}
        </h2>
      </div>
      <div className="text-[#333333] leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
