import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl dark:text-gray-400 text-gray-600">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;