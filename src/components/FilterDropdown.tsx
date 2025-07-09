import React, { useState, useRef, useEffect } from 'react';

interface FilterDropdownProps {
  selectedModality: string;
  onModalityChange: (modality: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  selectedModality,
  onModalityChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const modalities = [
    { value: 'All', label: 'All Modalities', count: 20 },
    { value: 'CT', label: 'CT Scan', count: 5 },
    { value: 'MRI', label: 'MRI Scan', count: 5 },
    { value: 'Ultrasound', label: 'Ultrasound', count: 5 },
    { value: 'X-Ray', label: 'X-Ray', count: 5 }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleOptionSelect = (modality: string) => {
    onModalityChange(modality);
    setIsOpen(false);
  };

  const selectedOption = modalities.find(m => m.value === selectedModality);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="relative w-full md:w-64 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="filter-label"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        <span className="flex items-center">
          <span className="block truncate">
            Filter by: {selectedOption?.label || 'All Modalities'}
          </span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ul role="listbox" aria-labelledby="filter-label">
            {modalities.map((modality) => (
              <li
                key={modality.value}
                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 ${
                  selectedModality === modality.value
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-900'
                }`}
                role="option"
                aria-selected={selectedModality === modality.value}
                onClick={() => handleOptionSelect(modality.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOptionSelect(modality.value);
                  }
                }}
                tabIndex={0}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`block truncate ${
                      selectedModality === modality.value ? 'font-semibold' : 'font-normal'
                    }`}
                  >
                    {modality.label}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {modality.count}
                  </span>
                </div>

                {selectedModality === modality.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
