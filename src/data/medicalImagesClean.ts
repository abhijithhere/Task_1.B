export interface MedicalImage {
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

export const medicalImages: MedicalImage[] = [
  {
    id: '1',
    title: 'Head MRI - Axial T1',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-15',
    thumbnailUrl: '/images/medical/mri1.webp',
    fullUrl: '/images/medical/mri1.webp',
    description: 'Axial T1-weighted MRI of the head showing normal anatomy',
    patientId: 'P001'
  },
  {
    id: '2',
    title: 'Head CT Scan',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-14',
    thumbnailUrl: '/images/medical/ct1.png',
    fullUrl: '/images/medical/ct1.png',
    description: 'High-resolution CT scan of the head',
    patientId: 'P001'
  },
  {
    id: '3',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-13',
    thumbnailUrl: '/images/medical/ut1.jpg',
    fullUrl: '/images/medical/ut1.jpg',
    description: 'Ultrasound examination of head structures',
    patientId: 'P001'
  },
  {
    id: '4',
    title: 'Head X-Ray PA',
    modality: 'X-Ray',
    category: 'X-Ray',
    bodyPart: 'Head',
    date: '2024-01-12',
    thumbnailUrl: '/images/medical/x1.webp',
    fullUrl: '/images/medical/x1.webp',
    description: 'Posterior-anterior head X-ray',
    patientId: 'P001'
  },

  {
    id: '5',
    title: 'Head MRI - Sagittal View',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-18',
    thumbnailUrl: '/images/medical/mri2.webp',
    fullUrl: '/images/medical/mri2.webp',
    description: 'Sagittal MRI scan of head structures',
    patientId: 'P002'
  },
  {
    id: '6',
    title: 'Head CT Scan',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-17',
    thumbnailUrl: '/images/medical/ct2.avif',
    fullUrl: '/images/medical/ct2.avif',
    description: 'Contrast-enhanced CT scan of the head',
    patientId: 'P002'
  },
  {
    id: '7',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-16',
    thumbnailUrl: '/images/medical/ut2.webp',
    fullUrl: '/images/medical/ut2.webp',
    description: 'Ultrasound examination of head structures',
    patientId: 'P002'
  },
  {
    id: '8',
    title: 'Head X-Ray',
    modality: 'X-Ray',
    category: 'X-Ray',
    bodyPart: 'Head',
    date: '2024-01-15',
    thumbnailUrl: '/images/medical/x2.jpg',
    fullUrl: '/images/medical/x2.jpg',
    description: 'Lateral view X-ray of the head',
    patientId: 'P002'
  },

  {
    id: '9',
    title: 'Head MRI - FLAIR Sequence',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-20',
    thumbnailUrl: '/images/medical/mri3.webp',
    fullUrl: '/images/medical/mri3.webp',
    description: 'FLAIR MRI sequence for head evaluation',
    patientId: 'P003'
  },
  {
    id: '10',
    title: 'Head CT Scan',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-19',
    thumbnailUrl: '/images/medical/ct3.ppm',
    fullUrl: '/images/medical/ct3.ppm',
    description: 'Non-contrast CT scan of the head',
    patientId: 'P003'
  },
  {
    id: '11',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-18',
    thumbnailUrl: '/images/medical/ut3.jpg',
    fullUrl: '/images/medical/ut3.jpg',
    description: 'Ultrasound examination of head structures',
    patientId: 'P003'
  },
  {
    id: '12',
    title: 'Head X-Ray',
    modality: 'X-Ray',
    category: 'X-Ray',
    bodyPart: 'Head',
    date: '2024-01-17',
    thumbnailUrl: '/images/medical/x3.jpg',
    fullUrl: '/images/medical/x3.jpg',
    description: 'Head X-ray lateral view',
    patientId: 'P003'
  },

  {
    id: '13',
    title: 'Head MRI - Lumbar',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-11',
    thumbnailUrl: '/images/medical/mri4.jpg',
    fullUrl: '/images/medical/mri4.jpg',
    description: 'Head MRI showing detailed structures',
    patientId: 'P001'
  },
  {
    id: '14',
    title: 'Head CT',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-10',
    thumbnailUrl: '/images/medical/ct4.webp',
    fullUrl: '/images/medical/ct4.webp',
    description: 'CT scan of head region',
    patientId: 'P001'
  },

  {
    id: '15',
    title: 'Head MRI',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-14',
    thumbnailUrl: '/images/medical/mri5.jpg',
    fullUrl: '/images/medical/mri5.jpg',
    description: 'MRI of head showing detailed anatomy',
    patientId: 'P002'
  },
  {
    id: '16',
    title: 'Head CT Scan',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-13',
    thumbnailUrl: '/images/medical/ct5.webp',
    fullUrl: '/images/medical/ct5.webp',
    description: 'High-resolution head CT scan',
    patientId: 'P002'
  },
  {
    id: '17',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-12',
    thumbnailUrl: '/images/medical/ut4.png',
    fullUrl: '/images/medical/ut4.png',
    description: 'Ultrasound examination of head',
    patientId: 'P002'
  },

  {
    id: '18',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-16',
    thumbnailUrl: '/images/medical/ut5.webp',
    fullUrl: '/images/medical/ut5.webp',
    description: 'Head ultrasound examination',
    patientId: 'P003'
  },
  {
    id: '19',
    title: 'Head X-Ray',
    modality: 'X-Ray',
    category: 'X-Ray',
    bodyPart: 'Head',
    date: '2024-01-15',
    thumbnailUrl: '/images/medical/x4.avif',
    fullUrl: '/images/medical/x4.avif',
    description: 'PA view X-ray of head',
    patientId: 'P003'
  },
  {
    id: '20',
    title: 'Head X-Ray',
    modality: 'X-Ray',
    category: 'X-Ray',
    bodyPart: 'Head',
    date: '2024-01-14',
    thumbnailUrl: '/images/medical/x5.jpg',
    fullUrl: '/images/medical/x5.jpg',
    description: 'AP view X-ray of head',
    patientId: 'P003'
  },

  // Patient P004 - Emily Davis
  {
    id: '21',
    title: 'Head MRI - T2 Weighted',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-22',
    thumbnailUrl: '/images/medical/mri1.webp',
    fullUrl: '/images/medical/mri1.webp',
    description: 'T2-weighted MRI of the head showing detailed anatomy',
    patientId: 'P004'
  },
  {
    id: '22',
    title: 'Head CT Scan',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-21',
    thumbnailUrl: '/images/medical/ct1.png',
    fullUrl: '/images/medical/ct1.png',
    description: 'High-resolution CT scan of the head',
    patientId: 'P004'
  },
  {
    id: '23',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-20',
    thumbnailUrl: '/images/medical/ut1.jpg',
    fullUrl: '/images/medical/ut1.jpg',
    description: 'Ultrasound examination of head structures',
    patientId: 'P004'
  },

  // Patient P005 - David Wilson
  {
    id: '24',
    title: 'Head MRI - DWI Sequence',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-25',
    thumbnailUrl: '/images/medical/mri2.webp',
    fullUrl: '/images/medical/mri2.webp',
    description: 'Diffusion-weighted MRI of the head',
    patientId: 'P005'
  },
  {
    id: '25',
    title: 'Head CT Scan',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-24',
    thumbnailUrl: '/images/medical/ct2.avif',
    fullUrl: '/images/medical/ct2.avif',
    description: 'Contrast-enhanced CT scan of the head',
    patientId: 'P005'
  },
  {
    id: '26',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-23',
    thumbnailUrl: '/images/medical/ut2.webp',
    fullUrl: '/images/medical/ut2.webp',
    description: 'Ultrasound examination of head structures',
    patientId: 'P005'
  },
  {
    id: '27',
    title: 'Head X-Ray',
    modality: 'X-Ray',
    category: 'X-Ray',
    bodyPart: 'Head',
    date: '2024-01-22',
    thumbnailUrl: '/images/medical/x1.webp',
    fullUrl: '/images/medical/x1.webp',
    description: 'Lateral view X-ray of the head',
    patientId: 'P005'
  },

  // Patient P006 - Lisa Anderson
  {
    id: '28',
    title: 'Head MRI - Perfusion',
    modality: 'MRI',
    category: 'MRI Scan',
    bodyPart: 'Head',
    date: '2024-01-28',
    thumbnailUrl: '/images/medical/mri3.webp',
    fullUrl: '/images/medical/mri3.webp',
    description: 'Perfusion MRI of the head',
    patientId: 'P006'
  },
  {
    id: '29',
    title: 'Head CT Scan',
    modality: 'CT',
    category: 'CT Scan',
    bodyPart: 'Head',
    date: '2024-01-27',
    thumbnailUrl: '/images/medical/ct3.ppm',
    fullUrl: '/images/medical/ct3.ppm',
    description: 'Non-contrast CT scan of the head',
    patientId: 'P006'
  },
  {
    id: '30',
    title: 'Head Ultrasound',
    modality: 'Ultrasound',
    category: 'Ultrasound',
    bodyPart: 'Head',
    date: '2024-01-26',
    thumbnailUrl: '/images/medical/ut3.jpg',
    fullUrl: '/images/medical/ut3.jpg',
    description: 'Ultrasound examination of head structures',
    patientId: 'P006'
  },
  {
    id: '31',
    title: 'Head X-Ray',
    modality: 'X-Ray',
    category: 'X-Ray',
    bodyPart: 'Head',
    date: '2024-01-25',
    thumbnailUrl: '/images/medical/x2.jpg',
    fullUrl: '/images/medical/x2.jpg',
    description: 'AP view X-ray of the head',
    patientId: 'P006'
  }
];

export const getImagesByModality = (modality: string, patientId?: string): MedicalImage[] => {
  let filteredImages = medicalImages;

  if (patientId) {
    filteredImages = filteredImages.filter(image => image.patientId === patientId);
  }

  if (modality === 'All') {
    return filteredImages;
  }

  return filteredImages.filter(image => image.modality === modality);
};

export const getImagesByPatient = (patientId: string): MedicalImage[] => {
  return medicalImages.filter(image => image.patientId === patientId);
};

export const getImageById = (id: string): MedicalImage | undefined => {
  return medicalImages.find(image => image.id === id);
};
