import React from 'react';

interface BackgroundSelectorProps {
  currentBackground: string;
  onBackgroundChange: (background: string) => void;
}

const backgroundOptions = [
  {
    id: 'medical-bg-professional',
    name: 'Professional',
    description: 'Clean gradient with subtle medical accents',
    preview: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 25%, #e2e8f0 50%, #f8fafc 100%)'
  },
  {
    id: 'medical-bg-primary',
    name: 'Primary Medical',
    description: 'Subtle gradient with medical cross pattern',
    preview: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
  },
  {
    id: 'medical-bg-geometric',
    name: 'Geometric',
    description: 'Clean lines with geometric patterns',
    preview: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)'
  },
  {
    id: 'medical-bg-waves',
    name: 'Soft Waves',
    description: 'Gentle wave patterns for a calming effect',
    preview: 'linear-gradient(135deg, #fefefe 0%, #f8fafc 100%)'
  },
  {
    id: 'medical-bg-pulse',
    name: 'Pulse (Animated)',
    description: 'Subtle animated background with pulse effect',
    preview: 'linear-gradient(135deg, #fefefe 0%, #f8fafc 100%)'
  }
];

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
  currentBackground,
  onBackgroundChange
}) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Background Theme</h3>
        <div className="space-y-2">
          {backgroundOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onBackgroundChange(option.id)}
              className={`w-full text-left p-2 rounded-md border transition-all duration-200 ${
                currentBackground === option.id
                  ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded border border-gray-200 flex-shrink-0"
                  style={{ background: option.preview }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {option.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Choose a background theme that suits your preference
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSelector;
