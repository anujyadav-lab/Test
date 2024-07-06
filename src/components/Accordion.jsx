import React, { useState, useEffect } from 'react';

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    { title: 'BRAND', content: ['Stationary', 'Some stationary'] },
    { title: 'DESIGN COLOR', content: ['Stationary', 'Some stationary'] },
    { title: 'DESIGN STYLE', content: ['Stationary', 'Some stationary'] },
    { title: 'OCCASION', content: ['Stationary', 'Some stationary'] },
    { title: 'PAPER COLOR', content: ['Stationary', 'Some stationary'] },
    { title: 'PAPER WEIGHT', content: ['Stationary', 'Some stationary'] },
    { title: 'PERSONALIZED', content: ['Stationary', 'Some stationary'] },
    { title: 'PHOTO CARD', content: ['Stationary', 'Some stationary'] },
    { title: 'PRINT METHOD', content: ['Stationary', 'Some stationary'] },
    { title: 'PRODUCT TYPE', content: ['Stationary', 'Some stationary'] },
  ];

  return (
    <div className="w-full md:w-60">
      {isMobile ? (
        <div className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">FILTERS</h2>
            <button 
              className="text-lg font-semibold"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              {isFiltersOpen ? '✕' : '+'}
            </button>
          </div>
          {isFiltersOpen && (
            <div className="mt-4">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex justify-between w-full p-4 text-sm md:text-base font-medium text-left text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onClick={() => toggleSection(index)}
                  >
                    <span>{section.title}</span>
                    <span>{activeSection === index ? '⬆' : '⬇'}</span>
                  </button>
                  {activeSection === index && (
                    <div className="p-4 bg-white">
                      {section.content.length > 0 ? (
                        <ul>
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-700 text-sm md:text-base">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700 text-sm md:text-base">No items available</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex justify-between w-full p-4 text-sm md:text-base font-medium text-left text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => toggleSection(index)}
              >
                <span>{section.title}</span>
                <span>{activeSection === index ? '⬆' : '⬇'}</span>
              </button>
              {activeSection === index && (
                <div className="p-4 bg-white">
                  {section.content.length > 0 ? (
                    <ul>
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 text-sm md:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 text-sm md:text-base">No items available</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;