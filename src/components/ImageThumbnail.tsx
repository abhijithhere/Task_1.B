import React, { useState } from 'react';
import { MedicalImage } from '../data/medicalImagesClean';

interface ImageThumbnailProps {
  image: MedicalImage;
  onClick: () => void;
  isSelected: boolean;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({ image, onClick, isSelected }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
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

  return (
    <div
      className={`
        group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
        transform transition-all duration-200 hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
      `}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`View ${image.title}`}
    >
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center text-gray-500">
              <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        ) : (
          <img
            src={image.thumbnailUrl}
            alt={image.title}
            className={`
              w-full h-full object-cover transition-opacity duration-200
              ${isLoading ? 'opacity-0' : 'opacity-100'}
              group-hover:opacity-90
            `}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Modality Badge */}
        <div className="absolute top-2 left-2">
          <span className={`
            inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
            ${getModalityColor(image.modality)}
          `}>
            {image.modality}
          </span>
        </div>
      </div>

      {/* Image Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
          {image.title}
        </h3>
        <p className="text-gray-600 text-xs mb-2">
          {image.bodyPart}
        </p>
        <p className="text-gray-500 text-xs">
          {new Date(image.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ImageThumbnail;
