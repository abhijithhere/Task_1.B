import React from 'react';

const BackgroundDemo: React.FC = () => {
  const backgrounds = [
    {
      name: 'Professional',
      className: 'medical-bg-professional',
      description: 'Clean gradient with subtle medical accents - perfect for professional medical applications'
    },
    {
      name: 'Primary Medical',
      className: 'medical-bg-primary',
      description: 'Subtle gradient with medical cross pattern - traditional medical theme'
    },
    {
      name: 'Geometric',
      className: 'medical-bg-geometric',
      description: 'Clean lines with geometric patterns - modern and structured'
    },
    {
      name: 'Soft Waves',
      className: 'medical-bg-waves',
      description: 'Gentle wave patterns for a calming effect - soothing for patients'
    },
    {
      name: 'Pulse (Animated)',
      className: 'medical-bg-pulse',
      description: 'Subtle animated background with pulse effect - dynamic yet professional'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Background Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional background designs crafted specifically for medical applications. 
            Each design maintains accessibility while providing visual appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {backgrounds.map((bg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {bg.name}
                </h3>
                <p className="text-gray-600">
                  {bg.description}
                </p>
              </div>
              
              <div className={`h-64 ${bg.className} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg max-w-sm mx-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Artograph</h4>
                        <p className="text-sm text-gray-600">Medical Imaging</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50">
                <code className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">
                  className="{bg.className}"
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accessibility First</h3>
              <p className="text-gray-600 text-sm">All designs maintain high contrast ratios and support reduced motion preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance Optimized</h3>
              <p className="text-gray-600 text-sm">CSS-only implementations with minimal impact on page load times</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Medical Appropriate</h3>
              <p className="text-gray-600 text-sm">Designed specifically for healthcare applications with professional aesthetics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundDemo;
