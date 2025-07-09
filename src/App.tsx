import React, { useState } from 'react';
import PatientList from './components/PatientList';
import MedicalImageGallery from './components/MedicalImageGallery';
import BackgroundDemo from './components/BackgroundDemo';
import SplitScreenDemo from './components/SplitScreenDemo';
import SplitScreenBackground from './components/SplitScreenBackground';
import PageTransition from './components/PageTransition';
import './App.css';

function App() {
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Permanent settings - no user selection
  const splitTheme = 'ocean';

  const handlePatientSelect = (patientId: string) => {
    setIsTransitioning(true);
    // Small delay to trigger the swipe animation
    setTimeout(() => {
      setSelectedPatientId(patientId);
      setIsTransitioning(false);
    }, 400); // Half of the transition duration
  };

  const handleBackToPatients = () => {
    setIsTransitioning(true);
    // Small delay to trigger the swipe animation
    setTimeout(() => {
      setSelectedPatientId(null);
      setIsTransitioning(false);
    }, 400);
  };

  // Check URL for demo mode
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const demoParam = urlParams.get('demo');
    setShowDemo(demoParam === 'true' || demoParam === 'split');
  }, []);

  if (showDemo) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('demo') === 'split') {
      return <SplitScreenDemo />;
    }
    return <BackgroundDemo />;
  }

  // Render with split screen background (permanent mode)
  return (
    <div className="App">
      <SplitScreenBackground
        theme={splitTheme}
        swiped={selectedPatientId !== null || isTransitioning}
        showPatientDetails={selectedPatientId !== null}
      >
        <div className="relative">
          <PageTransition isVisible={!selectedPatientId && !isTransitioning}>
            <PatientList onPatientSelect={handlePatientSelect} />
          </PageTransition>

          <PageTransition isVisible={selectedPatientId !== null && !isTransitioning}>
            {selectedPatientId && (
              <MedicalImageGallery
                patientId={selectedPatientId}
                onBackToPatients={handleBackToPatients}
                splitTheme={splitTheme}
              />
            )}
          </PageTransition>
        </div>
      </SplitScreenBackground>
    </div>
  );
}

export default App;
