import { ReactNode } from 'react';

interface LegalListProps {
  items: ReactNode[];
  ordered?: boolean;
}

export default function LegalList({ items, ordered = false }: LegalListProps) {
  const ListTag = ordered ? 'ol' : 'ul';
  const listStyle = ordered ? 'list-decimal' : 'list-disc';

  return (
    <ListTag className={`${listStyle} ml-6 sm:ml-8 space-y-2 text-sm sm:text-base text-[#333333]`}>
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ListTag>
  );
}
