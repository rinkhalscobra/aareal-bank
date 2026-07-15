interface TableOfContentsProps {
  sections: { title: string; id: string }[];
  title: string;
}

export default function TableOfContents({ sections, title }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#F5F5F5] border-2 border-[#E5E5E5] rounded-lg p-6 mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-[#000000] mb-4">{title}</h2>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section.id)}
            className="block w-full text-left text-sm sm:text-base text-[#333333] hover:text-[#D00000] hover:bg-white px-4 py-2 rounded transition-colors"
          >
            <span className="font-semibold text-[#D00000] mr-2">{index + 1}.</span>
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
