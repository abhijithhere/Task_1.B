# Medical Image Gallery

A modern, responsive React application for viewing and managing medical images with an intuitive patient-centric interface. Built with TypeScript, React, and Tailwind CSS.

##  Features

### Patient Management
- **Patient List View**: Browse through patient records with comprehensive information
- **Patient Details**: View patient demographics, medical history, and contact information
- **Search & Filter**: Easily find patients and their associated medical images

### Medical Image Gallery
- **Multi-Modal Support**: View MRI, CT, Ultrasound, and X-Ray images
- **Image Filtering**: Filter images by modality (MRI, CT, Ultrasound, X-Ray)
- **Full-Screen Modal**: High-resolution image viewing with navigation controls
- **Keyboard Navigation**: Navigate through images using arrow keys
- **Responsive Design**: Optimized for desktop and mobile devices

### User Interface
- **Split-Screen Background**: Dynamic ocean-themed background with smooth transitions
- **Page Transitions**: Smooth swipe animations between patient list and image gallery
- **Modern Design**: Clean, medical-grade interface with accessibility considerations
- **Demo Modes**: Special demo modes for showcasing different UI themes

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Task_1.B
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

##  Usage

### Main Application
1. **Patient Selection**: Browse the patient list and click on any patient to view their medical images
2. **Image Gallery**: Once a patient is selected, view all their medical images organized by modality
3. **Image Filtering**: Use the dropdown filter to show only specific types of medical images
4. **Full-Screen Viewing**: Click on any image thumbnail to open it in full-screen modal
5. **Navigation**: Use arrow keys or navigation buttons to browse through images
6. **Return to Patients**: Click the back button to return to the patient list

### Demo Modes
- **Background Demo**: Add `?demo=true` to the URL to see background theme options
- **Split-Screen Demo**: Add `?demo=split` to the URL to see split-screen theme variations

##  Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder with optimized performance.

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for full configuration control.

##  Project Structure

```
src/
├── components/           # React components
│   ├── BackgroundDemo.tsx       # Background theme demo
│   ├── BackgroundSelector.tsx   # Background selection UI
│   ├── FilterDropdown.tsx       # Image filtering dropdown
│   ├── ImageModal.tsx           # Full-screen image modal
│   ├── ImageThumbnail.tsx       # Image thumbnail component
│   ├── MedicalImageGallery.tsx  # Main image gallery
│   ├── ModeSelector.tsx         # UI mode selection
│   ├── NavigationControls.tsx   # Image navigation controls
│   ├── PageTransition.tsx       # Page transition animations
│   ├── PatientCard.tsx          # Individual patient card
│   ├── PatientList.tsx          # Patient list view
│   ├── SplitScreenBackground.tsx # Split-screen background
│   ├── SplitScreenDemo.tsx      # Split-screen demo
│   └── SplitScreenThemeSelector.tsx # Theme selection
├── data/                # Data models and mock data
│   ├── medicalImagesClean.ts    # Medical image data
│   └── patients.ts              # Patient data
├── App.tsx              # Main application component
├── App.css              # Application styles
├── index.tsx            # Application entry point
└── index.css            # Global styles
```

##  Technologies Used

- **React 19.1.0** - Modern React with latest features
- **TypeScript 4.9.5** - Type-safe JavaScript development
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes
- **React Testing Library** - Component testing utilities
- **Jest** - JavaScript testing framework

##  Data Models

### Patient Interface
```typescript
interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  phoneNumber: string;
  email: string;
  address: Address;
  emergencyContact: EmergencyContact;
  medicalInfo: MedicalInfo;
  lastVisit: string;
  totalImages: number;
  recentModalities: string[];
  status: 'Active' | 'Inactive' | 'Pending';
}
```

### Medical Image Interface
```typescript
interface MedicalImage {
  id: string;
  title: string;
  modality: 'MRI' | 'CT' | 'Ultrasound' | 'X-Ray';
  category: 'MRI Scan' | 'CT Scan' | 'Ultrasound' | 'X-Ray';
  bodyPart: string;
  date: string;
  thumbnailUrl: string;
  fullUrl: string;
  description: string;
  patientId: string;
}
```

##  Key Features Explained

### Split-Screen Background
The application features a dynamic split-screen background with an ocean theme that responds to user interactions:
- **Left Panel**: Patient list with animated wave effects
- **Right Panel**: Medical image gallery with complementary styling
- **Smooth Transitions**: Animated transitions between different application states

### Image Modal System
Advanced image viewing capabilities:
- **Full-Screen Display**: High-resolution image viewing
- **Keyboard Navigation**: Arrow keys for image browsing
- **Touch Support**: Swipe gestures on mobile devices
- **Image Information**: Detailed metadata display

### Responsive Design
Mobile-first approach with:
- **Adaptive Layouts**: Optimized for different screen sizes
- **Touch-Friendly**: Large touch targets and gesture support
- **Performance Optimized**: Lazy loading and efficient rendering

##  Configuration Files

- **`tailwind.config.js`** - Tailwind CSS configuration
- **`postcss.config.js`** - PostCSS processing configuration
- **`tsconfig.json`** - TypeScript compiler configuration
- **`package.json`** - Project dependencies and scripts

##  Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options
- **Static Hosting**: Deploy to Netlify, Vercel, or GitHub Pages
- **Server Deployment**: Use with Express.js or other Node.js servers
- **Docker**: Containerize for consistent deployment environments

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

##  Future Enhancements

- **DICOM Support**: Integration with medical DICOM image format
- **User Authentication**: Secure login and role-based access
- **Database Integration**: Connect to real medical databases
- **Advanced Filtering**: More sophisticated search and filter options
- **Export Features**: PDF reports and image export functionality
- **Annotations**: Image annotation and markup tools

---

