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
    <div className="bg-[#F6F8F7] border-2 border-[#DDE7E3] rounded-lg p-6 mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-[#172033] mb-4">{title}</h2>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section.id)}
            className="block w-full text-left text-sm sm:text-base text-[#3F4D5F] hover:text-[#0F766E] hover:bg-white px-4 py-2 rounded transition-colors"
          >
            <span className="font-semibold text-[#0F766E] mr-2">{index + 1}.</span>
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
