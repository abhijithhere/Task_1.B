import React from 'react';

interface SplitScreenThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const themeOptions = [
  {
    id: 'medical',
    name: 'Classic Orange',
    description: 'White left, vibrant orange right',
    leftColor: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    rightColor: 'linear-gradient(135deg, #ff8c42 0%, #ff6b1a 100%)'
  },
  {
    id: 'sunset',
    name: 'Soft Orange',
    description: 'White left, soft orange right',
    leftColor: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
    rightColor: 'linear-gradient(135deg, #ff9f43 0%, #ff7b25 100%)'
  },
  {
    id: 'ocean',
    name: 'Deep Orange',
    description: 'White left, deep orange right',
    leftColor: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    rightColor: 'linear-gradient(135deg, #ff7043 0%, #ff5722 100%)'
  },
  {
    id: 'forest',
    name: 'Coral Orange',
    description: 'White left, coral orange right',
    leftColor: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
    rightColor: 'linear-gradient(135deg, #ffab40 0%, #ff9800 100%)'
  },
  {
    id: 'professional',
    name: 'Golden Orange',
    description: 'White left, golden orange right',
    leftColor: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    rightColor: 'linear-gradient(135deg, #ffa000 0%, #ff8f00 100%)'
  }
];

const SplitScreenThemeSelector: React.FC<SplitScreenThemeSelectorProps> = ({
  currentTheme,
  onThemeChange
}) => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Split Screen Theme</h3>
        <div className="space-y-2">
          {themeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onThemeChange(option.id)}
              className={`w-full text-left p-2 rounded-md border transition-all duration-200 ${
                currentTheme === option.id
                  ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div
                    className="w-4 h-8 rounded-l border border-gray-200 flex-shrink-0"
                    style={{ background: option.leftColor }}
                  />
                  <div
                    className="w-4 h-8 rounded-r border border-gray-200 flex-shrink-0"
                    style={{ background: option.rightColor }}
                  />
                </div>
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
            Choose a split-screen color theme
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenThemeSelector;
