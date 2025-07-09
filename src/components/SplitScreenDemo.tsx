import React, { useState } from 'react';
import SplitScreenBackground from './SplitScreenBackground';

const SplitScreenDemo: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState('medical');
  const [showSwiped, setShowSwiped] = useState(false);

  const themes = [
    { id: 'medical', name: 'Classic Orange', description: 'White left, vibrant orange right' },
    { id: 'sunset', name: 'Soft Orange', description: 'White left, soft orange right' },
    { id: 'ocean', name: 'Deep Orange', description: 'White left, deep orange right' },
    { id: 'forest', name: 'Coral Orange', description: 'White left, coral orange right' },
    { id: 'professional', name: 'Golden Orange', description: 'White left, golden orange right' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Split-Screen Background Template
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive split-screen backgrounds with smooth swipe transitions. 
              Perfect for modern medical applications with professional aesthetics.
            </p>
          </div>

          {/* Theme Selector */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Theme</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setCurrentTheme(theme.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      currentTheme === theme.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-900">{theme.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{theme.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Animation Controls */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Animation Demo</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowSwiped(!showSwiped)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {showSwiped ? 'Reset Position' : 'Trigger Swipe Left'}
                </button>
                <span className="text-sm text-gray-600">
                  {showSwiped ? 'Swiped state - simulates patient details view' : 'Default state - simulates patient list view'}
                </span>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
                <p className="text-sm text-gray-600">Interactive split-screen background with {themes.find(t => t.id === currentTheme)?.name} theme</p>
              </div>
              
              <div className="relative h-96">
                <SplitScreenBackground theme={currentTheme} swiped={showSwiped}>
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-white bg-opacity-95 rounded-lg p-8 shadow-lg max-w-md mx-4 text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Artograph</h4>
                      <p className="text-gray-600 mb-4">Medical Imaging Platform</p>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
                      </div>
                      <div className="mt-4 text-xs text-gray-500">
                        {showSwiped ? 'Patient Details View' : 'Patient List View'}
                      </div>
                    </div>
                  </div>
                </SplitScreenBackground>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smooth Transitions</h3>
              <p className="text-gray-600 text-sm">Elegant swipe-left animations with cubic-bezier easing for professional feel</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Split-Screen Design</h3>
              <p className="text-gray-600 text-sm">Two-color gradient backgrounds that create visual depth and modern aesthetics</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Optimized</h3>
              <p className="text-gray-600 text-sm">Color schemes designed specifically for healthcare applications with professional appeal</p>
            </div>
          </div>

          {/* Back to App */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenDemo;
