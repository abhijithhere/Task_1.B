import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  direction?: 'left' | 'right';
  onTransitionComplete?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  isVisible,
  direction = 'left',
  onTransitionComplete
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Small delay to ensure the element is rendered before animation
      setTimeout(() => {
        setAnimationClass('page-transition-enter-active');
      }, 10);
    } else {
      setAnimationClass('page-transition-exit-active');
      // Wait for animation to complete before unmounting
      setTimeout(() => {
        setShouldRender(false);
        onTransitionComplete?.();
      }, 800); // Match the CSS transition duration
    }
  }, [isVisible, onTransitionComplete]);

  if (!shouldRender) return null;

  const baseClass = isVisible ? 'page-transition-enter' : 'page-transition-exit';
  const fullClass = `${baseClass} ${animationClass}`;

  return (
    <div className={fullClass} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      {children}
    </div>
  );
};

export default PageTransition;
