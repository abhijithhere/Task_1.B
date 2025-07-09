import React, { useEffect, useState } from 'react';
import { MedicalImage } from '../data/medicalImagesClean';

interface ImageModalProps {
  image: MedicalImage;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalImages: number;
  navigationControls: React.ReactNode;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalImages,
  navigationControls
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      setHasError(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getModalityColor = (modality: string) => {
    const colors = {
      'MRI': 'bg-blue-100 text-blue-800',
      'CT': 'bg-green-100 text-green-800',
      'Ultrasound': 'bg-purple-100 text-purple-800',
      'X-Ray': 'bg-yellow-100 text-yellow-800'
    };
    return colors[modality as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black bg-opacity-90"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Close Button - Fixed position at top right */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-30 p-3 rounded-full bg-white bg-opacity-90 text-gray-800 hover:bg-opacity-100 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Close modal"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Top Positioned Image Container with Fixed Size Box - Below Name Bar */}
      <div className="relative flex items-center justify-center w-full pt-20">
        {/* Fixed Size Image Box - Responsive */}
        <div className="relative w-[min(800px,90vw)] h-[min(600px,70vh)] bg-white rounded-lg shadow-2xl overflow-hidden flex items-center justify-center">
          {isLoading && (
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          )}

          {hasError ? (
            <div className="flex items-center justify-center w-full h-full text-gray-600">
              <div className="text-center">
                <svg className="mx-auto h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-medium">Image could not be loaded</p>
              </div>
            </div>
          ) : (
            <img
              src={image.fullUrl}
              alt={image.title}
              className={`
                w-full h-full object-contain transition-opacity duration-300
                ${isLoading ? 'opacity-0' : 'opacity-100'}
              `}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}

        </div>

        {/* Navigation Arrows - Positioned outside the image box */}
        {totalImages > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-white bg-opacity-95 text-gray-800 hover:bg-opacity-100 shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-white bg-opacity-95 text-gray-800 hover:bg-opacity-100 shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:scale-110"
              aria-label="Next image"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Image Details Panel - Positioned as overlay at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200 p-4 max-h-48 overflow-y-auto transform transition-transform duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            {/* Title and Modality */}
            <div className="flex items-center space-x-3">
              <h2 id="modal-title" className="text-lg font-bold text-gray-900">
                {image.title}
              </h2>
              <span className={`
                inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                ${getModalityColor(image.modality)}
              `}>
                {image.modality}
              </span>
              <span className="text-sm text-gray-500">
                {currentIndex + 1} of {totalImages}
              </span>
            </div>

            {/* Compact Details */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span>{image.category}</span>
              <span>•</span>
              <span>{image.bodyPart}</span>
              <span>•</span>
              <span>
                {new Date(image.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
              <span>•</span>
              <span>ID: {image.patientId}</span>
            </div>

            {/* Navigation Controls */}
            {totalImages > 1 && (
              <div className="flex items-center space-x-2">
                {navigationControls}
              </div>
            )}
          </div>

          {/* Description - Collapsible */}
          {image.description && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-sm text-gray-700 line-clamp-2">{image.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
