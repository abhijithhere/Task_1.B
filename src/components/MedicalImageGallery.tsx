import React, { useState, useEffect, useCallback } from 'react';
import { MedicalImage, getImagesByModality, getImagesByPatient } from '../data/medicalImagesClean';
import { getPatientById } from '../data/patients';
import ImageThumbnail from './ImageThumbnail';
import ImageModal from './ImageModal';
import FilterDropdown from './FilterDropdown';
import NavigationControls from './NavigationControls';

interface MedicalImageGalleryProps {
  patientId: string;
  onBackToPatients: () => void;
  splitTheme?: string;
}

const MedicalImageGallery: React.FC<MedicalImageGalleryProps> = ({ patientId, onBackToPatients, splitTheme }) => {
  const patient = getPatientById(patientId);
  const patientImages = getImagesByPatient(patientId);
  const [images, setImages] = useState<MedicalImage[]>(patientImages);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModality, setSelectedModality] = useState<string>('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on selected modality
  useEffect(() => {
    const filteredImages = getImagesByModality(selectedModality, patientId);
    setImages(filteredImages);

    // Reset selection if current image is not in filtered results
    if (selectedImageId && !filteredImages.find(img => img.id === selectedImageId)) {
      setSelectedImageId(null);
      setIsModalOpen(false);
    }
  }, [selectedModality, selectedImageId, patientId]);

  // Update current image index when selected image changes
  useEffect(() => {
    if (selectedImageId) {
      const index = images.findIndex(img => img.id === selectedImageId);
      setCurrentImageIndex(index >= 0 ? index : 0);
    }
  }, [selectedImageId, images]);

  const handleImageClick = (imageId: string) => {
    setSelectedImageId(imageId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageId(null);
  };

  const handleNextImage = useCallback(() => {
    if (images.length === 0) return;
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImageId(images[nextIndex].id);
  }, [currentImageIndex, images]);

  const handlePreviousImage = useCallback(() => {
    if (images.length === 0) return;
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImageId(images[prevIndex].id);
  }, [currentImageIndex, images]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          handleNextImage();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          handlePreviousImage();
          break;
        case 'Escape':
          event.preventDefault();
          handleCloseModal();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, handleNextImage, handlePreviousImage]);

  const selectedImage = selectedImageId ? images.find(img => img.id === selectedImageId) : null;

  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Not Found</h2>
          <button
            onClick={onBackToPatients}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Patients
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          {/* Back Button */}
          <button
            onClick={onBackToPatients}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md p-1"
          >
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Patients
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Medical Images - {patient.firstName} {patient.lastName}
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {patient.firstName.charAt(0)}{patient.lastName.charAt(0)}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {patient.firstName} {patient.lastName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Patient ID: {patient.id} | Blood Type: {patient.medicalInfo.bloodType}
                  </p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 text-sm text-gray-600">
                <p>Total Images: {images.length}</p>
                <p>Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <FilterDropdown
              selectedModality={selectedModality}
              onModalityChange={setSelectedModality}
            />
            <div className="text-sm text-gray-500">
              Use arrow keys to navigate when viewing images
            </div>
          </div>
        </div>

        {/* Image Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {images.map((image) => (
              <ImageThumbnail
                key={image.id}
                image={image}
                onClick={() => handleImageClick(image.id)}
                isSelected={selectedImageId === image.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No images found for the selected filter.
            </div>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && selectedImage && (
          <ImageModal
            image={selectedImage}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onNext={handleNextImage}
            onPrevious={handlePreviousImage}
            currentIndex={currentImageIndex}
            totalImages={images.length}
            navigationControls={
              <NavigationControls
                onNext={handleNextImage}
                onPrevious={handlePreviousImage}
                currentIndex={currentImageIndex}
                totalImages={images.length}
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default MedicalImageGallery;
