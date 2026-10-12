import type { Localized } from '../locale.ts';

/**
 * THE FLEET
 *
 * Starting content for the vehicle classes. Customers book a class, not a
 * specific car, so each class lists example models.
 *
 * Everything here is EXAMPLE DATA for the operator to replace: models,
 * capacities, features and especially prices.
 */
export interface VehicleClass {
  /** Used in URLs and to identify the class in a booking. */
  slug: string;
  /** Image name in client/image-sources (without extension), or a full URL. */
  image: string;
  name: Localized;
  models: Localized;
  description: Localized;
  passengers: number;
  luggage: number;
  features: Localized[];
  /** Lowest fare for the class, in whole AED. EXAMPLE VALUE. */
  fromPriceAed: number;
  /** What the "from" price buys: a single transfer, or an hour of hire. */
  priceBasis: 'transfer' | 'hour';
}

export const vehicleClasses: VehicleClass[] = [
  {
    slug: 'executive-sedan',
    image: 'fleet/executive-sedan',
    name: { en: 'Executive Sedan', ar: 'سيدان تنفيذية' },
    models: {
      en: 'Mercedes-Benz E-Class, Lexus ES or similar',
      ar: 'مرسيدس-بنز الفئة E، لكزس ES أو ما يماثلهما',
    },
    description: {
      en: 'The considered choice for airport transfers and everyday business travel: quiet, comfortable and always immaculate.',
      ar: 'الخيار الأمثل للتوصيل من وإلى المطار ولتنقلات الأعمال اليومية: هادئة ومريحة ونظيفة على الدوام.',
    },
    passengers: 3,
    luggage: 2,
    features: [
      { en: 'Leather seating', ar: 'مقاعد جلدية' },
      { en: 'Complimentary bottled water', ar: 'مياه معبأة مجانية' },
      { en: 'Phone charging', ar: 'شحن للهاتف' },
      { en: 'Climate control', ar: 'تكييف هواء أوتوماتيكي' },
    ],
    fromPriceAed: 200,
    priceBasis: 'transfer',
  },
  {
    slug: 'first-class-sedan',
    image: 'fleet/first-class-sedan',
    name: { en: 'First Class Sedan', ar: 'سيدان الدرجة الأولى' },
    models: {
      en: 'Mercedes-Benz S-Class, BMW 7 Series or similar',
      ar: 'مرسيدس-بنز الفئة S، بي إم دبليو الفئة السابعة أو ما يماثلهما',
    },
    description: {
      en: 'The flagship. Reclining rear seats, near silence at speed, and the presence an important arrival deserves.',
      ar: 'قمة الأسطول. مقاعد خلفية قابلة للإمالة، وهدوء شبه تام أثناء السير، وحضور يليق بالمناسبات المهمة.',
    },
    passengers: 3,
    luggage: 2,
    features: [
      { en: 'Reclining rear seats', ar: 'مقاعد خلفية قابلة للإمالة' },
      { en: 'Rear climate and ambient lighting', ar: 'تكييف خلفي وإضاءة محيطية' },
      { en: 'Wi-Fi on board', ar: 'واي فاي داخل السيارة' },
      { en: 'Complimentary bottled water', ar: 'مياه معبأة مجانية' },
    ],
    fromPriceAed: 450,
    priceBasis: 'transfer',
  },
  {
    slug: 'luxury-suv',
    image: 'fleet/luxury-suv',
    name: { en: 'Luxury SUV', ar: 'دفع رباعي فاخرة' },
    models: {
      en: 'Cadillac Escalade, GMC Yukon Denali or similar',
      ar: 'كاديلاك إسكاليد، جي إم سي يوكون دينالي أو ما يماثلهما',
    },
    description: {
      en: 'Commanding space for families, small groups and generous luggage, in a full-size cabin that keeps everyone comfortable.',
      ar: 'مساحة رحبة للعائلات والمجموعات الصغيرة والأمتعة الكثيرة، في مقصورة واسعة تضمن راحة الجميع.',
    },
    passengers: 6,
    luggage: 5,
    features: [
      { en: 'Seating for up to six', ar: 'تتسع لستة ركاب' },
      { en: 'Generous luggage space', ar: 'مساحة واسعة للأمتعة' },
      { en: 'Child seats on request', ar: 'مقاعد أطفال عند الطلب' },
      { en: 'Complimentary bottled water', ar: 'مياه معبأة مجانية' },
    ],
    fromPriceAed: 400,
    priceBasis: 'transfer',
  },
  {
    slug: 'vip-van',
    image: 'fleet/vip-van',
    name: { en: 'VIP Van', ar: 'فان كبار الشخصيات' },
    models: {
      en: 'Mercedes-Benz V-Class or similar',
      ar: 'مرسيدس-بنز الفئة V أو ما يماثلها',
    },
    description: {
      en: 'A private lounge on wheels, with face-to-face seating for delegations, families and event transfers.',
      ar: 'صالة خاصة متنقلة بمقاعد متقابلة، مناسبة للوفود والعائلات وتنقلات الفعاليات.',
    },
    passengers: 7,
    luggage: 6,
    features: [
      { en: 'Face-to-face seating', ar: 'مقاعد متقابلة' },
      { en: 'Power sliding doors', ar: 'أبواب منزلقة كهربائية' },
      { en: 'Room for up to seven', ar: 'تتسع لسبعة ركاب' },
      { en: 'USB charging', ar: 'منافذ شحن USB' },
    ],
    fromPriceAed: 350,
    priceBasis: 'transfer',
  },
  {
    slug: 'stretch-limousine',
    image: 'fleet/stretch-limousine',
    name: { en: 'Stretch Limousine', ar: 'ليموزين ممتدة' },
    models: {
      en: 'Stretch limousine, model subject to availability',
      ar: 'ليموزين ممتدة، ويُحدَّد الطراز حسب التوفر',
    },
    description: {
      en: 'For weddings, celebrations and the evenings that call for an entrance.',
      ar: 'لحفلات الزفاف والاحتفالات والأمسيات التي تستحق وصولاً مميزاً.',
    },
    passengers: 8,
    luggage: 2,
    features: [
      { en: 'Lounge seating', ar: 'مقاعد على طراز الصالون' },
      { en: 'Mood lighting', ar: 'إضاءة داخلية هادئة' },
      { en: 'Privacy partition', ar: 'حاجز للخصوصية' },
      { en: 'Sound system', ar: 'نظام صوتي' },
    ],
    fromPriceAed: 650,
    priceBasis: 'hour',
  },
];
