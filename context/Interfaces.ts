export interface LearningMethode {
  methodeId: string;
  methodeName: string;
  methodeImg: string;
  methodeDescription: string;
  methodeClipart: string;
}
export interface ILearningMethodePros {
  items: LearningMethode[];
}

export interface Faq {
  faqId: string;
  faqQuestion: string;
  faqAnswer: string;
}

export interface Faqs {
  items: Faq[];
}

export interface InstructorInfo {
  instructorId: string;
  instructorName: string;
  instructorBio: string;
  instructorImg: string;
}

export interface InstructorsInfo {
  items: InstructorInfo[];
}

export interface ContactInfo {
  mainLocation: string;
  enrollmentPhone: string;
  studentPhone: string;
  enrollmentEmail: string;
  studentEmail: string;
}

export interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface ModalProps {
  isShown?: boolean;
  hide?: () => void;
}
