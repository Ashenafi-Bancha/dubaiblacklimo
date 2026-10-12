import type { Localized } from '../locale.ts';

/**
 * FREQUENTLY ASKED QUESTIONS
 *
 * Starting content. The answers describe how the booking platform works and
 * deliberately leave policy details (notice periods, waiting time, charges)
 * to the Cancellation Policy and the booking confirmation. The operator should
 * review and extend them.
 */
export type FaqCategory = 'booking' | 'airport' | 'payment' | 'service';

export interface Faq {
  id: string;
  category: FaqCategory;
  question: Localized;
  answer: Localized;
}

/** The order in which categories appear on the FAQ page. */
export const faqCategories: FaqCategory[] = ['booking', 'airport', 'payment', 'service'];

export const faqs: Faq[] = [
  {
    id: 'how-to-book',
    category: 'booking',
    question: { en: 'How do I book a chauffeur?', ar: 'كيف أحجز سائقاً خاصاً؟' },
    answer: {
      en: 'Book online in a few steps, or contact us by WhatsApp or phone. You will receive a confirmation by email as soon as your booking is placed.',
      ar: 'احجز عبر الموقع في خطوات قليلة، أو تواصل معنا عبر واتساب أو الهاتف. ستصلك رسالة تأكيد عبر البريد الإلكتروني فور إتمام الحجز.',
    },
  },
  {
    id: 'advance-notice',
    category: 'booking',
    question: { en: 'How far in advance should I book?', ar: 'كم من الوقت يجب أن أحجز مسبقاً؟' },
    answer: {
      en: 'As early as you can, particularly for airport transfers and events. Short-notice requests are welcome: contact us by WhatsApp or phone and we will confirm availability.',
      ar: 'في أبكر وقت ممكن، خصوصاً للتوصيل من وإلى المطار وللفعاليات. ونرحّب بالطلبات العاجلة: تواصل معنا عبر واتساب أو الهاتف وسنؤكد لك مدى التوفر.',
    },
  },
  {
    id: 'change-or-cancel',
    category: 'booking',
    question: { en: 'Can I change or cancel my booking?', ar: 'هل يمكنني تعديل الحجز أو إلغاؤه؟' },
    answer: {
      en: 'Yes. Contact us as soon as your plans change. The notice required and any charges are set out in our Cancellation Policy.',
      ar: 'نعم. تواصل معنا فور تغيّر خططك. مدة الإشعار المطلوبة وأي رسوم مترتبة موضّحة في سياسة الإلغاء.',
    },
  },
  {
    id: 'flight-delay',
    category: 'airport',
    question: { en: 'What happens if my flight is delayed?', ar: 'ماذا يحدث إذا تأخرت رحلتي؟' },
    answer: {
      en: 'Give us your flight number when you book. We follow the flight and adjust your pickup to its actual arrival time.',
      ar: 'زوّدنا برقم رحلتك عند الحجز. نتابع الرحلة ونعدّل موعد استقبالك وفق وقت الوصول الفعلي.',
    },
  },
  {
    id: 'meeting-point',
    category: 'airport',
    question: { en: 'Where will I meet my chauffeur at the airport?', ar: 'أين سألتقي بسائقي في المطار؟' },
    answer: {
      en: 'With meet-and-greet, your chauffeur waits in the arrivals hall holding a board with your name, and escorts you to the car.',
      ar: 'مع خدمة الاستقبال الشخصي، ينتظرك سائقك في صالة القادمين حاملاً لوحة باسمك ثم يرافقك إلى السيارة.',
    },
  },
  {
    id: 'how-priced',
    category: 'payment',
    question: { en: 'How is the price calculated?', ar: 'كيف يُحتسب السعر؟' },
    answer: {
      en: 'Prices are fixed and shown before you confirm. They depend on the vehicle class and the journey: by distance, by the hour, or a flat rate for airport transfers.',
      ar: 'الأسعار ثابتة وتظهر لك قبل تأكيد الحجز. تعتمد على فئة السيارة ونوع الرحلة: حسب المسافة، أو بالساعة، أو بسعر مقطوع للتوصيل من وإلى المطار.',
    },
  },
  {
    id: 'how-to-pay',
    category: 'payment',
    question: { en: 'How can I pay?', ar: 'ما طرق الدفع المتاحة؟' },
    answer: {
      en: 'Pay securely online by card when you book, or choose to pay later. Companies and hotels can apply for an account with monthly invoicing.',
      ar: 'ادفع بأمان عبر الإنترنت بالبطاقة عند الحجز، أو اختر الدفع لاحقاً. ويمكن للشركات والفنادق التقدّم بطلب حساب بفواتير شهرية.',
    },
  },
  {
    id: 'child-seats',
    category: 'service',
    question: { en: 'Do you provide child seats?', ar: 'هل توفّرون مقاعد للأطفال؟' },
    answer: {
      en: 'Yes. Add a child seat as an extra when you book and tell us the age of the child, so that the right seat is fitted before you are collected.',
      ar: 'نعم. أضف مقعد طفل كخدمة إضافية عند الحجز وأخبرنا بعمر الطفل، ليُثبَّت المقعد المناسب قبل موعد استقبالك.',
    },
  },
  {
    id: 'extra-stops',
    category: 'service',
    question: { en: 'Can I add a stop on the way?', ar: 'هل يمكنني إضافة محطة توقف في الطريق؟' },
    answer: {
      en: 'Yes. Add an extra stop when you book, or reserve the car by the hour if you expect to make several.',
      ar: 'نعم. أضف محطة توقف عند الحجز، أو احجز السيارة بالساعة إذا كنت تتوقع التوقف في عدة محطات.',
    },
  },
  {
    id: 'coverage',
    category: 'service',
    question: { en: 'Which areas do you cover?', ar: 'ما المناطق التي تغطّيها خدمتكم؟' },
    answer: {
      en: 'All of Dubai, and travel between the Emirates including Abu Dhabi, Sharjah and Al Ain.',
      ar: 'جميع مناطق دبي، إضافةً إلى التنقل بين الإمارات، ومنها أبوظبي والشارقة والعين.',
    },
  },
];
