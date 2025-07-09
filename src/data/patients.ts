export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  phoneNumber: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
  medicalInfo: {
    bloodType: string;
    allergies: string[];
    conditions: string[];
    medications: string[];
  };
  lastVisit: string;
  totalImages: number;
  recentModalities: string[];
  status: 'Active' | 'Inactive' | 'Pending';
}

// Mock patient data
export const patients: Patient[] = [
  {
    id: 'P001',
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    phoneNumber: '1234567890',
    email: 'abc@gmail.com',
    address: {
      street: 'Ernakulam',
      city: 'Ernakulam',
      state: 'Kerala',
      zipCode: '682001'
    },
    emergencyContact: {
      name: 'Jane Smith',
      relationship: 'Spouse',
      phoneNumber: '1234567890'
    },
    medicalInfo: {
      bloodType: 'A+',
      allergies: ['Penicillin', 'Shellfish'],
      conditions: ['Asthma'],
      medications: ['Metformin', 'Lisinopril']
    },
    lastVisit: '2024-01-15',
    totalImages: 6,
    recentModalities: ['MRI', 'CT', 'Ultrasound', 'X-Ray'],
    status: 'Active'
  },
  {
    id: 'P002',
    firstName: 'Sarah',
    lastName: 'Johnson',
    dateOfBirth: '1992-07-22',
    gender: 'Female',
    phoneNumber: '1234567890',
    email: 'abc@gmail.com',
    address: {
      street: 'Ernakulam',
      city: 'Ernakulam',
      state: 'Kerala',
      zipCode: '682001'
    },
    emergencyContact: {
      name: 'Michael Johnson',
      relationship: 'Brother',
      phoneNumber: '1234567890'
    },
    medicalInfo: {
      bloodType: 'O-',
      allergies: ['Latex'],
      conditions: ['Asthma'],
      medications: ['Albuterol Inhaler']
    },
    lastVisit: '2024-01-12',
    totalImages: 7,
    recentModalities: ['MRI', 'CT', 'Ultrasound', 'X-Ray'],
    status: 'Active'
  },
  {
    id: 'P003',
    firstName: 'Michael',
    lastName: 'Brown',
    dateOfBirth: '1978-11-08',
    gender: 'Male',
    phoneNumber: '1234567890',
    email: 'abc@gmail.com',
    address: {
      street: 'Ernakulam',
      city: 'Ernakulam',
      state: 'Kerala',
      zipCode: '682001'
    },
    emergencyContact: {
      name: 'Lisa Brown',
      relationship: 'Wife',
      phoneNumber: '1234567890'
    },
    medicalInfo: {
      bloodType: 'B+',
      allergies: [],
      conditions: ['Asthma'],
      medications: ['Atorvastatin']
    },
    lastVisit: '2024-01-10',
    totalImages: 7,
    recentModalities: ['MRI', 'CT', 'Ultrasound', 'X-Ray'],
    status: 'Active'
  },
  {
    id: 'P004',
    firstName: 'Emily',
    lastName: 'Davis',
    dateOfBirth: '1995-05-14',
    gender: 'Female',
    phoneNumber: '1234567890',
    email: 'abc@gmail.com',
    address: {
      street: 'Ernakulam',
      city: 'Ernakulam',
      state: 'Kerala',
      zipCode: '682001'
    },
    emergencyContact: {
      name: 'Robert Davis',
      relationship: 'Father',
      phoneNumber: '1234567890'
    },
    medicalInfo: {
      bloodType: 'AB+',
      allergies: ['Peanuts', 'Tree Nuts'],
      conditions: ['Asthma'],
      medications: []
    },
    lastVisit: '2024-01-08',
    totalImages: 3,
    recentModalities: ['MRI', 'CT', 'Ultrasound'],
    status: 'Active'
  },
  {
    id: 'P005',
    firstName: 'David',
    lastName: 'Wilson',
    dateOfBirth: '1965-12-03',
    gender: 'Male',
    phoneNumber: '1234567890',
    email: 'abc@gmail.com',
    address: {
      street: 'Ernakulam',
      city: 'Ernakulam',
      state: 'Kerala',
      zipCode: '682001'
    },
    emergencyContact: {
      name: 'Nancy Wilson',
      relationship: 'Wife',
      phoneNumber: '1234567890'
    },
    medicalInfo: {
      bloodType: 'O+',
      allergies: ['Sulfa Drugs'],
      conditions: ['Asthma'],
      medications: ['Prednisone', 'Albuterol']
    },
    lastVisit: '2024-01-05',
    totalImages: 4,
    recentModalities: ['MRI', 'CT', 'Ultrasound', 'X-Ray'],
    status: 'Active'
  },
  {
    id: 'P006',
    firstName: 'Lisa',
    lastName: 'Anderson',
    dateOfBirth: '1988-09-18',
    gender: 'Female',
    phoneNumber: '1234567890',
    email: 'abc@gmail.com',
    address: {
      street: 'Ernakulam',
      city: 'Ernakulam',
      state: 'Kerala',
      zipCode: '682001'
    },
    emergencyContact: {
      name: 'James Anderson',
      relationship: 'Husband',
      phoneNumber: '1234567890'
    },
    medicalInfo: {
      bloodType: 'A-',
      allergies: ['Iodine'],
      conditions: ['Asthma'],
      medications: ['Sumatriptan']
    },
    lastVisit: '2024-01-03',
    totalImages: 4,
    recentModalities: ['MRI', 'CT', 'Ultrasound', 'X-Ray'],
    status: 'Pending'
  }
];

export const getPatientById = (id: string): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

export const getPatientsByStatus = (status?: string): Patient[] => {
  if (!status || status === 'All') {
    return patients;
  }
  return patients.filter(patient => patient.status === status);
};
