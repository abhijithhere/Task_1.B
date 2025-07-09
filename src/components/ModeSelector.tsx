import React from 'react';

interface ModeSelectorProps {
  useSplitScreen: boolean;
  onModeChange: (useSplitScreen: boolean) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({
  useSplitScreen,
  onModeChange
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-700">Background Mode:</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onModeChange(false)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                !useSplitScreen
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Classic
            </button>
            <button
              onClick={() => onModeChange(true)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                useSplitScreen
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Split Screen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;
