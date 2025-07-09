import React from 'react';

interface NavigationControlsProps {
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalImages: number;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  onNext,
  onPrevious,
  currentIndex,
  totalImages
}) => {
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < totalImages - 1;

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`
          flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
          ${canGoPrevious
            ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
            : 'text-gray-400 bg-gray-50 cursor-not-allowed'
          }
        `}
        aria-label="Previous image"
      >
        <svg
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      <div className="flex items-center space-x-2">
        {/* Progress Dots */}
        <div className="flex space-x-1">
          {Array.from({ length: Math.min(totalImages, 5) }, (_, index) => {
            let dotIndex = index;
            
            // Adjust dot indices for large image sets
            if (totalImages > 5) {
              if (currentIndex < 2) {
                dotIndex = index;
              } else if (currentIndex >= totalImages - 2) {
                dotIndex = totalImages - 5 + index;
              } else {
                dotIndex = currentIndex - 2 + index;
              }
            }

            const isActive = dotIndex === currentIndex;
            const isVisible = dotIndex < totalImages;

            return isVisible ? (
              <button
                key={dotIndex}
                className={`
                  w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                  ${isActive
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                aria-label={`Go to image ${dotIndex + 1}`}
                onClick={() => {
                  // This would need to be passed as a prop if we want direct navigation
                  // For now, we'll just use next/previous
                }}
              />
            ) : null;
          })}
          
          {totalImages > 5 && currentIndex < totalImages - 2 && (
            <span className="text-gray-400 text-xs">...</span>
          )}
        </div>

        {/* Image Counter */}
        <span className="text-xs text-gray-500 ml-2">
          {currentIndex + 1} / {totalImages}
        </span>
      </div>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`
          flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
          ${canGoNext
            ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
            : 'text-gray-400 bg-gray-50 cursor-not-allowed'
          }
        `}
        aria-label="Next image"
      >
        Next
        <svg
          className="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavigationControls;
