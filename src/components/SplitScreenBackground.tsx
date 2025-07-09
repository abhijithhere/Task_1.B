import React from 'react';

interface SplitScreenBackgroundProps {
  theme?: string;
  swiped?: boolean;
  showPatientDetails?: boolean;
  children: React.ReactNode;
}

const SplitScreenBackground: React.FC<SplitScreenBackgroundProps> = ({
  theme = 'ocean',
  swiped = false,
  showPatientDetails = false,
  children
}) => {
  return (
    <div className="relative min-h-screen">
      {/* Split Screen Background */}
      <div className={`split-screen-bg split-theme-${theme} ${swiped ? 'split-screen-swiped' : ''}`}>
        <div className="split-screen-left"></div>
        <div className="split-screen-right"></div>
      </div>

      {/* Content Overlay */}
      <div className={`content-overlay ${showPatientDetails ? 'patient-details' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default SplitScreenBackground;
