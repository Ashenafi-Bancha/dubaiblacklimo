import type { Localized, LocaleCode } from '../locale.ts';

/**
 * THE FLEET
 *
 * Starting content for the collection: the world's leading luxury marques,
 * plus a VIP van for groups. Everything here is EXAMPLE DATA for the operator
 * to replace with their own vehicles: models, capacities, features and
 * especially prices.
 */
export interface VehicleClass {
  /** Used in URLs and to identify the vehicle in a booking. */
  slug: string;
  /** Image name in client/image-sources (without extension), or a full URL. */
  image: string;
  /** Manufacturer, shown small above the model name. */
  make: Localized;
  model: Localized;
  /** The kind of car, e.g. "Flagship saloon". */
  category: Localized;
  description: Localized;
  passengers: number;
  luggage: number;
  features: Localized[];
  /** Lowest fare, in whole AED. EXAMPLE VALUE. */
  fromPriceAed: number;
  /** What the "from" price buys: a single transfer, or an hour of hire. */
  priceBasis: 'transfer' | 'hour';
}

/** "Rolls-Royce Phantom", in the given language. */
export function vehicleName(vehicle: VehicleClass, locale: LocaleCode): string {
  return `${vehicle.make[locale]} ${vehicle.model[locale]}`;
}

const water = { en: 'Complimentary water and Wi-Fi', ar: 'مياه مجانية وواي فاي' };

export const vehicleClasses: VehicleClass[] = [
  {
    slug: 'rolls-royce-phantom',
    image: 'fleet/rolls-royce-phantom',
    make: { en: 'Rolls-Royce', ar: 'رولز رويس' },
    model: { en: 'Phantom', ar: 'فانتوم' },
    category: { en: 'Flagship saloon', ar: 'سيدان رائدة' },
    description: {
      en: 'The definitive arrival. Coach doors, a hushed cabin and the famously serene ride that has made the Phantom the benchmark of luxury motoring.',
      ar: 'الوصول بأرقى صوره. أبواب خلفية متقابلة، ومقصورة يسودها الهدوء، وقيادة بالغة السلاسة جعلت من فانتوم المعيار الأعلى للفخامة.',
    },
    passengers: 3,
    luggage: 3,
    features: [
      { en: 'Coach doors', ar: 'أبواب خلفية متقابلة' },
      { en: 'Starlight headliner', ar: 'سقف النجوم المضيء' },
      { en: 'Rear lounge seating', ar: 'مقاعد خلفية على طراز الصالون' },
      water,
    ],
    fromPriceAed: 950,
    priceBasis: 'hour',
  },
  {
    slug: 'rolls-royce-ghost',
    image: 'fleet/rolls-royce-ghost',
    make: { en: 'Rolls-Royce', ar: 'رولز رويس' },
    model: { en: 'Ghost', ar: 'غوست' },
    category: { en: 'Executive saloon', ar: 'سيدان تنفيذية' },
    description: {
      en: 'Understated, assured and quietly powerful: the Rolls-Royce for those who prefer to be driven without ceremony.',
      ar: 'رزينة وواثقة وقوية بهدوء: رولز رويس لمن يفضّل التنقّل بأناقة بعيداً عن الأضواء.',
    },
    passengers: 3,
    luggage: 3,
    features: [
      { en: 'Reclining rear seats', ar: 'مقاعد خلفية قابلة للإمالة' },
      { en: 'Starlight headliner', ar: 'سقف النجوم المضيء' },
      { en: 'Bespoke audio', ar: 'نظام صوتي فاخر' },
      water,
    ],
    fromPriceAed: 750,
    priceBasis: 'hour',
  },
  {
    slug: 'rolls-royce-cullinan',
    image: 'fleet/rolls-royce-cullinan',
    make: { en: 'Rolls-Royce', ar: 'رولز رويس' },
    model: { en: 'Cullinan', ar: 'كولينان' },
    category: { en: 'Luxury SUV', ar: 'سيارة دفع رباعي فاخرة' },
    description: {
      en: 'Rolls-Royce comfort with the presence and space of an SUV, as much at ease on Sheikh Zayed Road as on the road to the desert.',
      ar: 'راحة رولز رويس بحضور سيارة الدفع الرباعي ورحابتها، تنساب على شارع الشيخ زايد كما على طريق الصحراء.',
    },
    passengers: 4,
    luggage: 4,
    features: [
      { en: 'Coach doors', ar: 'أبواب خلفية متقابلة' },
      { en: 'Raised, commanding seating', ar: 'جلسة مرتفعة ورؤية واسعة' },
      { en: 'Generous luggage space', ar: 'مساحة واسعة للأمتعة' },
      water,
    ],
    fromPriceAed: 850,
    priceBasis: 'hour',
  },
  {
    slug: 'bentley-flying-spur',
    image: 'fleet/bentley-flying-spur',
    make: { en: 'Bentley', ar: 'بنتلي' },
    model: { en: 'Flying Spur', ar: 'فلاينغ سبير' },
    category: { en: 'Grand touring saloon', ar: 'سيدان سياحية فاخرة' },
    description: {
      en: 'Handcrafted in Crewe, with diamond-quilted leather and effortless pace for the longer journeys between the Emirates.',
      ar: 'مصنوعة يدوياً في كرو، بجلد مبطّن على شكل الماس وأداء سلس للرحلات الطويلة بين الإمارات.',
    },
    passengers: 3,
    luggage: 3,
    features: [
      { en: 'Diamond-quilted leather', ar: 'جلد مبطّن على شكل الماس' },
      { en: 'Massage seats', ar: 'مقاعد بخاصية التدليك' },
      { en: 'Rear climate control', ar: 'تكييف خلفي مستقل' },
      water,
    ],
    fromPriceAed: 650,
    priceBasis: 'hour',
  },
  {
    slug: 'mercedes-maybach-s-class',
    image: 'fleet/mercedes-maybach-s-class',
    make: { en: 'Mercedes-Maybach', ar: 'مرسيدس-مايباخ' },
    model: { en: 'S-Class', ar: 'الفئة S' },
    category: { en: 'Executive limousine', ar: 'ليموزين تنفيذية' },
    description: {
      en: 'A boardroom on wheels: executive rear seats that recline almost flat, rear screens, and the calm to work or rest between appointments.',
      ar: 'مكتب متنقّل: مقاعد خلفية تنفيذية تكاد تستلقي بالكامل، وشاشات خلفية، وهدوء يتيح لك العمل أو الراحة بين المواعيد.',
    },
    passengers: 3,
    luggage: 3,
    features: [
      { en: 'Executive reclining rear seats', ar: 'مقاعد خلفية تنفيذية قابلة للإمالة' },
      { en: 'Rear entertainment screens', ar: 'شاشات ترفيه خلفية' },
      { en: 'Massage seats', ar: 'مقاعد بخاصية التدليك' },
      water,
    ],
    fromPriceAed: 550,
    priceBasis: 'hour',
  },
  {
    slug: 'mercedes-maybach-gls',
    image: 'fleet/mercedes-maybach-gls',
    make: { en: 'Mercedes-Maybach', ar: 'مرسيدس-مايباخ' },
    model: { en: 'GLS', ar: 'GLS' },
    category: { en: 'Luxury SUV', ar: 'سيارة دفع رباعي فاخرة' },
    description: {
      en: 'Maybach refinement in a spacious SUV: ideal for families, airport runs with luggage and evenings out.',
      ar: 'رقيّ مايباخ في سيارة دفع رباعي رحبة: مثالية للعائلات وللمطار مع الأمتعة ولأمسيات الخروج.',
    },
    passengers: 4,
    luggage: 4,
    features: [
      { en: 'Executive rear seats', ar: 'مقاعد خلفية تنفيذية' },
      { en: 'Rear refrigerator', ar: 'ثلاجة خلفية' },
      { en: 'Child seats on request', ar: 'مقاعد أطفال عند الطلب' },
      water,
    ],
    fromPriceAed: 500,
    priceBasis: 'hour',
  },
  {
    slug: 'mercedes-v-class',
    image: 'fleet/mercedes-v-class',
    make: { en: 'Mercedes-Benz', ar: 'مرسيدس-بنز' },
    model: { en: 'V-Class VIP', ar: 'الفئة V لكبار الشخصيات' },
    category: { en: 'VIP lounge van', ar: 'فان صالون لكبار الشخصيات' },
    description: {
      en: 'A private lounge on wheels, with face-to-face seating for delegations, families and event transfers.',
      ar: 'صالة خاصة متنقلة بمقاعد متقابلة، مناسبة للوفود والعائلات وتنقلات الفعاليات.',
    },
    passengers: 7,
    luggage: 7,
    features: [
      { en: 'Face-to-face lounge seating', ar: 'مقاعد صالون متقابلة' },
      { en: 'Power sliding doors', ar: 'أبواب منزلقة كهربائية' },
      { en: 'Room for up to seven', ar: 'تتسع لسبعة ركاب' },
      water,
    ],
    fromPriceAed: 350,
    priceBasis: 'hour',
  },
];
