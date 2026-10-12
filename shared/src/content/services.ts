import type { Localized } from '../locale.ts';

/**
 * THE SERVICES
 *
 * Starting content for the service pages. The operator should review every
 * claim here (waiting arrangements, journey times, what is included) against
 * what they actually offer.
 */
export interface Service {
  /** Used in the page address: /services/<slug>. */
  slug: string;
  /** Image name in client/image-sources (without extension), or a full URL. */
  image: string;
  /**
   * Which part of the photo to keep in view when it is cropped to a card, as a
   * CSS object-position ("left center", "50% 30%"). Defaults to the centre.
   */
  imageFocus?: string;
  name: Localized;
  /** One line, shown on cards. */
  summary: Localized;
  /** The opening paragraph of the service page. */
  intro: Localized;
  /** Three selling points, shown as a row on the service page. */
  highlights: { title: Localized; body: Localized }[];
  /** What every booking of this service includes. */
  included: Localized[];
  /** Title and description shown in search results. */
  seoTitle: Localized;
  seoDescription: Localized;
}

export const services: Service[] = [
  {
    slug: 'airport-transfers',
    image: 'services/airport-transfers',
    name: { en: 'Airport Transfers', ar: 'التوصيل من وإلى المطار' },
    summary: {
      en: 'Meet-and-greet at DXB and DWC, with your flight tracked from take-off.',
      ar: 'استقبال شخصي في مطاري دبي الدولي وآل مكتوم، مع متابعة رحلتك منذ الإقلاع.',
    },
    intro: {
      en: 'Begin and end every journey calmly. Your chauffeur follows your flight, waits in the arrivals hall with a name board at Dubai International (DXB) or Al Maktoum International (DWC), and takes care of the luggage, all at a price fixed before you travel.',
      ar: 'ابدأ رحلتك واختمها بهدوء. يتابع سائقك موعد رحلتك، وينتظرك في صالة القادمين حاملاً لوحة باسمك في مطار دبي الدولي (DXB) أو مطار آل مكتوم الدولي (DWC)، ويتولى حمل أمتعتك، وكل ذلك بسعر ثابت يُحدَّد قبل سفرك.',
    },
    highlights: [
      {
        title: { en: 'Flight tracking', ar: 'متابعة الرحلة' },
        body: {
          en: 'Share your flight number and your pickup moves with the flight, whether it lands early or late.',
          ar: 'زوّدنا برقم رحلتك ليتغيّر موعد استقبالك تلقائياً مع موعد الهبوط، سواء تقدّم أو تأخّر.',
        },
      },
      {
        title: { en: 'Meet and greet', ar: 'استقبال شخصي' },
        body: {
          en: 'Your chauffeur waits in the arrivals hall with a name board and escorts you to the car.',
          ar: 'ينتظرك سائقك في صالة القادمين حاملاً لوحة باسمك ويرافقك إلى السيارة.',
        },
      },
      {
        title: { en: 'Fixed price', ar: 'سعر ثابت' },
        body: {
          en: 'The fare is confirmed when you book. No meter, and no surprises on arrival.',
          ar: 'يُؤكَّد السعر عند الحجز. لا عدّاد ولا مفاجآت عند الوصول.',
        },
      },
    ],
    included: [
      { en: 'Meet-and-greet in the arrivals hall', ar: 'استقبال شخصي في صالة القادمين' },
      { en: 'Flight monitoring', ar: 'متابعة موعد الرحلة' },
      { en: 'Help with luggage', ar: 'المساعدة في حمل الأمتعة' },
      { en: 'Complimentary bottled water', ar: 'مياه معبأة مجانية' },
    ],
    seoTitle: {
      en: 'Dubai Airport Limo & Chauffeur Transfers (DXB & DWC)',
      ar: 'ليموزين مطار دبي وخدمة التوصيل مع سائق خاص',
    },
    seoDescription: {
      en: 'Dubai airport limo service with meet-and-greet at DXB and DWC, flight tracking and fixed prices. Book a private chauffeur transfer online.',
      ar: 'خدمة ليموزين مطار دبي مع استقبال شخصي في مطاري دبي الدولي وآل مكتوم، ومتابعة للرحلات وأسعار ثابتة. احجز سائقك الخاص عبر الإنترنت.',
    },
  },
  {
    slug: 'hourly-chauffeur',
    image: 'services/hourly-chauffeur',
    name: { en: 'Hourly Chauffeur', ar: 'سائق خاص بالساعة' },
    summary: {
      en: 'A car and chauffeur at your disposal, for as long as you need.',
      ar: 'سيارة وسائق في خدمتك طوال المدة التي تحتاجها.',
    },
    intro: {
      en: 'Meetings across the city, an afternoon of shopping, an evening with no fixed end. Reserve a luxury chauffeur in Dubai by the hour and keep the same car and driver waiting wherever the day takes you.',
      ar: 'اجتماعات في أنحاء المدينة، أو جولة تسوّق بعد الظهر، أو أمسية بلا موعد محدد للانتهاء. احجز سائقاً خاصاً في دبي بالساعة، ولتبقَ السيارة نفسها والسائق نفسه في انتظارك أينما أخذك يومك.',
    },
    highlights: [
      {
        title: { en: 'Your schedule', ar: 'وفق جدولك' },
        body: {
          en: 'Add stops and change plans as you go. Your chauffeur adapts.',
          ar: 'أضف محطات توقف وغيّر خططك في أي وقت، وسائقك يتكيّف معها.',
        },
      },
      {
        title: { en: 'One car, all day', ar: 'سيارة واحدة طوال اليوم' },
        body: {
          en: 'Leave your belongings in the car between appointments.',
          ar: 'اترك أغراضك في السيارة بين موعد وآخر.',
        },
      },
      {
        title: { en: 'A clear hourly rate', ar: 'سعر واضح للساعة' },
        body: {
          en: 'One simple rate per hour, shown before you confirm.',
          ar: 'سعر بسيط واحد للساعة، يظهر لك قبل تأكيد الحجز.',
        },
      },
    ],
    included: [
      { en: 'A dedicated chauffeur and vehicle', ar: 'سائق وسيارة مخصصان لك' },
      { en: 'As many stops as you need within the booked time', ar: 'عدد غير محدود من المحطات ضمن مدة الحجز' },
      { en: 'Waiting at every stop', ar: 'الانتظار عند كل محطة' },
      { en: 'Bottled water and phone charging', ar: 'مياه معبأة وشحن للهاتف' },
    ],
    seoTitle: {
      en: 'Hourly Luxury Chauffeur Service in Dubai',
      ar: 'خدمة سائق خاص فاخرة بالساعة في دبي',
    },
    seoDescription: {
      en: 'Hire a luxury car with a private chauffeur in Dubai by the hour. One car and driver at your disposal for meetings, shopping and evenings out.',
      ar: 'استأجر سيارة فاخرة مع سائق خاص في دبي بالساعة. سيارة وسائق في خدمتك للاجتماعات والتسوق والسهرات.',
    },
  },
  {
    slug: 'corporate-events',
    image: 'services/corporate-events',
    name: { en: 'Corporate & Events', ar: 'الشركات والفعاليات' },
    summary: {
      en: 'Dependable ground transport for executives, delegations and events.',
      ar: 'خدمة نقل يُعتمد عليها للمديرين التنفيذيين والوفود والفعاليات.',
    },
    intro: {
      en: 'From a single executive transfer to the movement of a full delegation, we plan and run ground transport that reflects well on your company. Corporate accounts receive one monthly invoice and a single point of contact.',
      ar: 'من توصيل مدير تنفيذي واحد إلى تنقّل وفد كامل، نخطط وندير خدمة نقل تليق بصورة شركتك. تحصل حسابات الشركات على فاتورة شهرية واحدة وجهة اتصال واحدة.',
    },
    highlights: [
      {
        title: { en: 'Corporate accounts', ar: 'حسابات الشركات' },
        body: {
          en: 'Monthly invoicing and a full booking history for your finance team.',
          ar: 'فواتير شهرية وسجل كامل للحجوزات لفريقك المالي.',
        },
      },
      {
        title: { en: 'Event coordination', ar: 'تنسيق الفعاليات' },
        body: {
          en: 'Several vehicles scheduled and managed as a single movement.',
          ar: 'عدة سيارات تُجدوَل وتُدار كعملية تنقّل واحدة.',
        },
      },
      {
        title: { en: 'Discretion', ar: 'الخصوصية' },
        body: {
          en: 'Chauffeurs briefed to protect the privacy of your guests.',
          ar: 'سائقون مدرَّبون على حفظ خصوصية ضيوفك.',
        },
      },
    ],
    included: [
      { en: 'A dedicated account contact', ar: 'مسؤول حساب مخصص' },
      { en: 'One consolidated monthly invoice', ar: 'فاتورة شهرية موحّدة' },
      { en: 'Coordination of multiple vehicles', ar: 'تنسيق عدة سيارات' },
      { en: 'Professional chauffeurs in business attire', ar: 'سائقون محترفون بزيّ رسمي' },
    ],
    seoTitle: {
      en: 'Corporate Chauffeur & Event Transport in Dubai',
      ar: 'خدمة سائق خاص للشركات ونقل الفعاليات في دبي',
    },
    seoDescription: {
      en: 'Corporate chauffeur service in Dubai for executives, delegations and events, with monthly invoicing and a dedicated account contact.',
      ar: 'خدمة سائق خاص للشركات في دبي للمديرين التنفيذيين والوفود والفعاليات، مع فواتير شهرية ومسؤول حساب مخصص.',
    },
  },
  {
    slug: 'weddings',
    image: 'services/weddings',
    name: { en: 'Weddings', ar: 'حفلات الزفاف' },
    summary: {
      en: 'An arrival worthy of the day, timed to the minute.',
      ar: 'وصول يليق بيومكم، في موعده بالدقيقة.',
    },
    intro: {
      en: 'Your wedding deserves an entrance to match. Choose a first class sedan or a stretch limousine, with a chauffeur who understands that on this day timing and presentation are everything.',
      ar: 'يستحق زفافكم وصولاً يليق به. اختاروا سيارة سيدان من الدرجة الأولى أو ليموزين ممتدة، مع سائق يدرك أن الدقة في المواعيد وحسن المظهر هما كل شيء في هذا اليوم.',
    },
    highlights: [
      {
        title: { en: 'Prepared for the occasion', ar: 'مجهّزة للمناسبة' },
        body: {
          en: 'An immaculate car, detailed and ready for your day.',
          ar: 'سيارة في غاية النظافة والأناقة، جاهزة ليومكم.',
        },
      },
      {
        title: { en: 'In step with your planner', ar: 'بالتنسيق مع منظّم الحفل' },
        body: {
          en: 'We coordinate timings with your venue and wedding planner.',
          ar: 'ننسّق المواعيد مع قاعة الحفل ومنظّم الزفاف.',
        },
      },
      {
        title: { en: 'For the whole party', ar: 'لجميع المدعوين' },
        body: {
          en: 'Additional vehicles for family and guests, arranged together.',
          ar: 'سيارات إضافية للعائلة والضيوف، تُرتَّب معاً.',
        },
      },
    ],
    included: [
      { en: 'An immaculately prepared vehicle', ar: 'سيارة مجهّزة بعناية فائقة' },
      { en: 'A chauffeur in formal attire', ar: 'سائق بزيّ رسمي' },
      { en: 'Coordination with your planner', ar: 'التنسيق مع منظّم الحفل' },
      { en: 'Flexible waiting during the celebration', ar: 'انتظار مرن خلال الحفل' },
    ],
    seoTitle: {
      en: 'Wedding Car & Limousine Service in Dubai',
      ar: 'سيارات وليموزين الزفاف في دبي',
    },
    seoDescription: {
      en: 'Wedding limousine service in Dubai: first class sedans and stretch limousines with a professional chauffeur, coordinated with your venue and planner.',
      ar: 'خدمة ليموزين الزفاف في دبي: سيارات سيدان من الدرجة الأولى وليموزين ممتدة مع سائق محترف، بالتنسيق مع قاعة الحفل ومنظّم الزفاف.',
    },
  },
  {
    slug: 'city-tours',
    image: 'services/city-tours',
    imageFocus: '12% center',
    name: { en: 'City Tours', ar: 'جولات المدينة' },
    summary: {
      en: 'Dubai at your own pace, from the old Creek to the Palm.',
      ar: 'دبي على مهلك، من الخور القديم إلى النخلة.',
    },
    intro: {
      en: 'See the city privately and without hurry. Plan your own route or let your chauffeur suggest one: Downtown and the Burj Khalifa, the old souks along the Creek, the Jumeirah coastline and the Palm, with the car waiting at every stop.',
      ar: 'تعرّف على المدينة بخصوصية تامة ومن دون استعجال. ضع مسارك بنفسك أو دع سائقك يقترح مساراً: وسط المدينة وبرج خليفة، والأسواق القديمة على ضفاف الخور، وساحل جميرا والنخلة، والسيارة في انتظارك عند كل محطة.',
    },
    highlights: [
      {
        title: { en: 'Your itinerary', ar: 'برنامجك الخاص' },
        body: {
          en: 'Stay as long as you like at each stop. The day is yours.',
          ar: 'ابقَ في كل محطة المدة التي تشاء، فاليوم يومك.',
        },
      },
      {
        title: { en: 'A chauffeur who knows the city', ar: 'سائق يعرف المدينة' },
        body: {
          en: 'Local knowledge of the best routes and the best times to visit.',
          ar: 'معرفة محلية بأفضل الطرق وأنسب أوقات الزيارة.',
        },
      },
      {
        title: { en: 'Comfort between stops', ar: 'راحة بين المحطات' },
        body: {
          en: 'A cool, quiet cabin to return to, whatever the season.',
          ar: 'مقصورة باردة وهادئة تعود إليها أياً كان الفصل.',
        },
      },
    ],
    included: [
      { en: 'A private vehicle and chauffeur', ar: 'سيارة خاصة وسائق' },
      { en: 'Flexible stops and timings', ar: 'محطات ومواعيد مرنة' },
      { en: 'Pickup from and return to your hotel', ar: 'الاستقبال من الفندق والعودة إليه' },
      { en: 'Complimentary bottled water', ar: 'مياه معبأة مجانية' },
    ],
    seoTitle: {
      en: 'Private Dubai City Tours with a Chauffeur',
      ar: 'جولات خاصة في دبي مع سائق خاص',
    },
    seoDescription: {
      en: 'Private Dubai city tours in a luxury car with your own chauffeur. See Downtown, the Creek, Jumeirah and the Palm at your own pace.',
      ar: 'جولات خاصة في دبي بسيارة فاخرة مع سائق خاص. زُر وسط المدينة والخور وجميرا والنخلة على مهلك.',
    },
  },
  {
    slug: 'intercity',
    image: 'services/intercity',
    name: { en: 'Intercity Travel', ar: 'التنقل بين الإمارات' },
    summary: {
      en: 'Door to door between Dubai, Abu Dhabi, Sharjah and Al Ain.',
      ar: 'من الباب إلى الباب بين دبي وأبوظبي والشارقة والعين.',
    },
    intro: {
      en: 'Travel between the Emirates in comfort. Whether it is a meeting in Abu Dhabi, a visit to Sharjah or a day in Al Ain, your chauffeur collects you at the door and delivers you to the door, at a fixed price.',
      ar: 'تنقّل بين الإمارات براحة تامة. سواء كان لديك اجتماع في أبوظبي أو زيارة إلى الشارقة أو يوم في العين، يصطحبك سائقك من باب مكانك ويوصلك إلى باب وجهتك بسعر ثابت.',
    },
    highlights: [
      {
        title: { en: 'Abu Dhabi', ar: 'أبوظبي' },
        body: {
          en: 'Around an hour and a half from Dubai, direct to your meeting, hotel or the airport.',
          ar: 'نحو ساعة ونصف من دبي، مباشرةً إلى اجتماعك أو فندقك أو المطار.',
        },
      },
      {
        title: { en: 'Sharjah', ar: 'الشارقة' },
        body: {
          en: 'A short journey north, timed around the traffic.',
          ar: 'رحلة قصيرة شمالاً، نختار لها الوقت الأنسب لتفادي الازدحام.',
        },
      },
      {
        title: { en: 'Al Ain', ar: 'العين' },
        body: {
          en: 'The garden city, around an hour and a half inland.',
          ar: 'مدينة الحدائق، على بُعد نحو ساعة ونصف.',
        },
      },
    ],
    included: [
      { en: 'Door-to-door service', ar: 'خدمة من الباب إلى الباب' },
      { en: 'A fixed intercity fare', ar: 'سعر ثابت للتنقل بين المدن' },
      { en: 'Return journeys and waiting on request', ar: 'رحلات العودة والانتظار عند الطلب' },
      { en: 'Bottled water and phone charging', ar: 'مياه معبأة وشحن للهاتف' },
    ],
    seoTitle: {
      en: 'Dubai to Abu Dhabi, Sharjah & Al Ain Chauffeur Service',
      ar: 'خدمة سائق خاص من دبي إلى أبوظبي والشارقة والعين',
    },
    seoDescription: {
      en: 'Private chauffeur transfers from Dubai to Abu Dhabi, Sharjah and Al Ain. Door-to-door intercity travel in a luxury car at a fixed price.',
      ar: 'توصيل مع سائق خاص من دبي إلى أبوظبي والشارقة والعين. تنقّل بين المدن من الباب إلى الباب بسيارة فاخرة وسعر ثابت.',
    },
  },
  {
    slug: 'hotel-partners',
    image: 'services/hotel-partners',
    name: { en: 'Hotel Partners', ar: 'شركاء الفنادق' },
    summary: {
      en: 'A chauffeur service your concierge can book with confidence.',
      ar: 'خدمة سائق خاص يحجزها موظفو الكونسيرج لديكم بكل ثقة.',
    },
    intro: {
      en: 'We work with hotels and serviced residences to give their guests a chauffeur service that matches the standard of the stay: airport transfers, cars on demand and event transport, arranged through your concierge and invoiced monthly.',
      ar: 'نتعاون مع الفنادق والشقق الفندقية لنقدّم لضيوفها خدمة سائق خاص بمستوى إقامتهم: التوصيل من وإلى المطار، وسيارات عند الطلب، ونقل الفعاليات، تُرتَّب عبر الكونسيرج وتُصدر فواتيرها شهرياً.',
    },
    highlights: [
      {
        title: { en: 'Made for your concierge', ar: 'مصمَّمة للكونسيرج' },
        body: {
          en: 'A direct line for your team, and fast confirmations.',
          ar: 'خط مباشر لفريقكم وتأكيدات سريعة للحجوزات.',
        },
      },
      {
        title: { en: 'Monthly invoicing', ar: 'فواتير شهرية' },
        body: {
          en: 'One statement each month, itemised by guest and journey.',
          ar: 'كشف واحد كل شهر، مفصَّل حسب الضيف والرحلة.',
        },
      },
      {
        title: { en: 'Your standard, upheld', ar: 'بمستوى فندقكم' },
        body: {
          en: 'Chauffeurs who represent your property as you would.',
          ar: 'سائقون يمثّلون فندقكم كما تمثّلونه أنتم.',
        },
      },
    ],
    included: [
      { en: 'A priority booking line', ar: 'خط حجز ذو أولوية' },
      { en: 'One consolidated monthly invoice', ar: 'فاتورة شهرية موحّدة' },
      { en: 'Guest airport transfers with meet-and-greet', ar: 'توصيل الضيوف من وإلى المطار مع استقبال شخصي' },
      { en: 'Vehicles on standby for events', ar: 'سيارات جاهزة للفعاليات' },
    ],
    seoTitle: {
      en: 'Chauffeur Service for Hotels in Dubai',
      ar: 'خدمة سائق خاص للفنادق في دبي',
    },
    seoDescription: {
      en: 'A chauffeur and limousine service for Dubai hotels and serviced residences: guest airport transfers, cars on demand and monthly invoicing.',
      ar: 'خدمة سائق خاص وليموزين لفنادق دبي وشققها الفندقية: توصيل الضيوف من وإلى المطار، وسيارات عند الطلب، وفواتير شهرية.',
    },
  },
];
