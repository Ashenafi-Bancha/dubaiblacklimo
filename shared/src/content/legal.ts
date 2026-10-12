import type { Localized } from '../locale.ts';

/**
 * LEGAL PAGES: PLACEHOLDER TEXT
 *
 * These are outlines, not policies. Each section says what the operator needs
 * to write there. The pages show a visible notice saying so. Replace all of it
 * with text reviewed by a qualified lawyer before the site goes live.
 */
export type LegalSlug = 'terms' | 'privacy' | 'cancellation';

export interface LegalDocument {
  slug: LegalSlug;
  title: Localized;
  sections: { heading: Localized; body: Localized }[];
}

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'terms',
    title: { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
    sections: [
      {
        heading: { en: '1. The service', ar: '١. الخدمة' },
        body: {
          en: '[Placeholder] State who operates the service (registered company name, licence number and address) and describe what is provided: chauffeur-driven transfers, hourly hire and related services.',
          ar: '[نص مؤقت] اذكر الجهة المشغِّلة للخدمة (الاسم التجاري المسجَّل ورقم الترخيص والعنوان) وصِف ما يُقدَّم: التوصيل مع سائق خاص، والحجز بالساعة، والخدمات المرتبطة بهما.',
        },
      },
      {
        heading: { en: '2. Bookings and confirmation', ar: '٢. الحجوزات والتأكيد' },
        body: {
          en: '[Placeholder] Explain how a booking is made, when it becomes binding, and what the customer must provide (accurate pickup details, flight number, passenger and luggage numbers).',
          ar: '[نص مؤقت] وضّح طريقة إجراء الحجز، ومتى يصبح ملزماً، وما يجب على العميل تقديمه (تفاصيل دقيقة لموقع الاستقبال، ورقم الرحلة، وعدد الركاب والأمتعة).',
        },
      },
      {
        heading: { en: '3. Prices and payment', ar: '٣. الأسعار والدفع' },
        body: {
          en: '[Placeholder] Set out how prices are fixed, what they include (tolls, parking, VAT), accepted payment methods, and when payment is taken.',
          ar: '[نص مؤقت] بيّن كيفية تحديد الأسعار، وما تشمله (رسوم الطرق، ومواقف السيارات، وضريبة القيمة المضافة)، وطرق الدفع المقبولة، وموعد تحصيل المبلغ.',
        },
      },
      {
        heading: { en: '4. Changes, cancellations and no-shows', ar: '٤. التعديلات والإلغاء وعدم الحضور' },
        body: {
          en: '[Placeholder] Refer to the Cancellation Policy and summarise the rules for changes, waiting time and passengers who do not appear.',
          ar: '[نص مؤقت] أشِر إلى سياسة الإلغاء ولخّص قواعد التعديل، ووقت الانتظار، وحالات عدم حضور الراكب.',
        },
      },
      {
        heading: { en: '5. Conduct and liability', ar: '٥. السلوك والمسؤولية' },
        body: {
          en: '[Placeholder] Describe passenger conduct (smoking, damage, seat belts, child seats), the limits of the operator’s liability, and delays outside its control.',
          ar: '[نص مؤقت] صِف قواعد سلوك الركاب (التدخين، والأضرار، وأحزمة الأمان، ومقاعد الأطفال)، وحدود مسؤولية المشغِّل، وحالات التأخير الخارجة عن إرادته.',
        },
      },
      {
        heading: { en: '6. Governing law', ar: '٦. القانون الحاكم' },
        body: {
          en: '[Placeholder] State the governing law and the courts that have jurisdiction.',
          ar: '[نص مؤقت] حدّد القانون الحاكم والمحاكم المختصة.',
        },
      },
    ],
  },
  {
    slug: 'privacy',
    title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    sections: [
      {
        heading: { en: '1. Information we collect', ar: '١. المعلومات التي نجمعها' },
        body: {
          en: '[Placeholder] List the personal data collected through the website: name, phone, email, pickup and drop-off locations, flight number, and payment details handled by the payment provider.',
          ar: '[نص مؤقت] اذكر البيانات الشخصية التي تُجمع عبر الموقع: الاسم، والهاتف، والبريد الإلكتروني، ومواقع الاستقبال والوصول، ورقم الرحلة، وبيانات الدفع التي يعالجها مزوّد خدمة الدفع.',
        },
      },
      {
        heading: { en: '2. How we use it', ar: '٢. كيف نستخدمها' },
        body: {
          en: '[Placeholder] Explain the purposes: fulfilling bookings, sending confirmations, customer support, invoicing and legal obligations.',
          ar: '[نص مؤقت] وضّح الأغراض: تنفيذ الحجوزات، وإرسال التأكيدات، ودعم العملاء، وإصدار الفواتير، والالتزامات القانونية.',
        },
      },
      {
        heading: { en: '3. Sharing and service providers', ar: '٣. المشاركة ومزوّدو الخدمات' },
        body: {
          en: '[Placeholder] Name the categories of third parties that receive data (payment, email, mapping, hosting) and why.',
          ar: '[نص مؤقت] اذكر فئات الأطراف الأخرى التي تتلقى البيانات (الدفع، والبريد الإلكتروني، والخرائط، والاستضافة) وسبب ذلك.',
        },
      },
      {
        heading: { en: '4. Retention and security', ar: '٤. الاحتفاظ بالبيانات وأمنها' },
        body: {
          en: '[Placeholder] State how long data is kept and how it is protected.',
          ar: '[نص مؤقت] بيّن مدة الاحتفاظ بالبيانات وطريقة حمايتها.',
        },
      },
      {
        heading: { en: '5. Your rights and how to contact us', ar: '٥. حقوقك وطريقة التواصل معنا' },
        body: {
          en: '[Placeholder] Describe the rights available under UAE data protection law and give a contact for privacy requests.',
          ar: '[نص مؤقت] صِف الحقوق المتاحة بموجب قانون حماية البيانات في دولة الإمارات، واذكر جهة اتصال لطلبات الخصوصية.',
        },
      },
    ],
  },
  {
    slug: 'cancellation',
    title: { en: 'Cancellation Policy', ar: 'سياسة الإلغاء' },
    sections: [
      {
        heading: { en: '1. Cancelling a booking', ar: '١. إلغاء الحجز' },
        body: {
          en: '[Placeholder] State how to cancel (phone, WhatsApp, email) and the notice period for a cancellation free of charge, for each type of service.',
          ar: '[نص مؤقت] بيّن طريقة الإلغاء (الهاتف، واتساب، البريد الإلكتروني) ومدة الإشعار اللازمة للإلغاء المجاني لكل نوع من الخدمات.',
        },
      },
      {
        heading: { en: '2. Late cancellations and no-shows', ar: '٢. الإلغاء المتأخر وعدم الحضور' },
        body: {
          en: '[Placeholder] Set out the charge for cancelling inside the notice period and for not appearing at the pickup point.',
          ar: '[نص مؤقت] حدّد الرسوم المترتبة على الإلغاء بعد انقضاء مدة الإشعار وعلى عدم الحضور إلى موقع الاستقبال.',
        },
      },
      {
        heading: { en: '3. Flight delays and waiting time', ar: '٣. تأخّر الرحلات ووقت الانتظار' },
        body: {
          en: '[Placeholder] State the waiting time included with airport pickups and other journeys, and the charge after it ends.',
          ar: '[نص مؤقت] اذكر وقت الانتظار المشمول في الاستقبال من المطار وفي الرحلات الأخرى، والرسوم المترتبة بعد انتهائه.',
        },
      },
      {
        heading: { en: '4. Refunds', ar: '٤. استرداد المبالغ' },
        body: {
          en: '[Placeholder] Explain how and when refunds are paid for bookings that were paid in advance.',
          ar: '[نص مؤقت] وضّح طريقة استرداد المبالغ وموعده للحجوزات المدفوعة مسبقاً.',
        },
      },
    ],
  },
];
