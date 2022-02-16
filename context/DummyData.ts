import {
  ContactInfo,
  Faq,
  InstructorInfo,
  LearningMethode,
} from "./Interfaces";
const loremText: string =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, enim quo! Iure aut quas iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo quisquam in iure voluptatem. Obcaecati blanditiis placeat sapiente aut maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla, aut atque voluptatem earum harum quisquam optio mollitia iste culpa!";

export let DUMMY_LEARNING_MATIRAL: LearningMethode[] = [
  {
    methodeId: "m1",
    methodeName: "Virtual",
    methodeImg: "bi bi-laptop",
    methodeDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio",
    methodeClipart: "/images/online.jpg",
  },
  {
    methodeId: "m2",
    methodeName: "Hybrid",
    methodeImg: "bi bi-person-square",
    methodeDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio",
    methodeClipart: "/images/hybrid.png",
  },
  {
    methodeId: "m3",
    methodeName: "In person",
    methodeImg: "bi bi-people",
    methodeDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio",
    methodeClipart: "/images/personal.jpg",
  },
];
export let DUMMY_FAQ: Faq[] = [
  {
    faqAnswer: loremText,
    faqId: "1",
    faqQuestion: "Where exactly are you located?",
  },
  {
    faqAnswer: loremText,
    faqId: "2",
    faqQuestion: "How much does it cost to attend?",
  },
  {
    faqAnswer: loremText,
    faqId: "3",
    faqQuestion: "What do I need to know?",
  },
  {
    faqAnswer: loremText,
    faqId: "4",
    faqQuestion: "How do i sign up?",
  },
  {
    faqAnswer: loremText,
    faqId: "5",
    faqQuestion: "Do you help me find a job?",
  },
];

export let DUMMY_INATRUCTORS: InstructorInfo[] = [
  {
    instructorBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio.",
    instructorId: "i1",
    instructorImg: "https://randomuser.me/api/portraits/men/11.jpg",
    instructorName: "John Doe",
  },
  {
    instructorBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio.",
    instructorId: "i2",
    instructorImg: "https://randomuser.me/api/portraits/women/11.jpg",
    instructorName: "Jane Doe",
  },
  {
    instructorBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio.",
    instructorId: "i3",
    instructorImg: "https://randomuser.me/api/portraits/men/12.jpg",
    instructorName: "Sam Smith",
  },
  {
    instructorBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio.",
    instructorId: "i4",
    instructorImg: "https://randomuser.me/api/portraits/women/12.jpg",
    instructorName: "Sara Smith",
  },
];

export let DUMMY_CONTACT: ContactInfo = {
  enrollmentEmail: "aaa@hotmail.com",
  enrollmentPhone: "03123456",
  mainLocation: "50 Main st Boston MA",
  studentEmail: "student@hotmail.com",
  studentPhone: "03123456",
};
