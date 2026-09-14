// Content extracted 1:1 from the Figma design.
// Structured as data so it can later be wired to Supabase without touching markup.

export const nav = [
  { id: "about", label: "ПРО КЛУБ" },
  { id: "pricing", label: "ТАРИФИ" },
  { id: "contacts", label: "КОНТАКТИ" },
] as const;

export const hero = {
  title: ["Падел-клуб", "під відкритим", "небом"],
  address: ["м. Вінниця", "Вул Стефаника 9"],
  galleryCaption: [
    "Ми знаходимося",
    "на території глемпінгу",
    "«Двері в ліс»",
  ],
  cta: "забронювати корт",
};

export const about = {
  label: "ПРО КЛУБ",
  heading: ["Падел. Природа.", "Атмосфера"],
  lead: "WE are PADEL (I - ПАДЕЛ) - \nце відкритий падел-клуб.",
  text: "Ми розташувалися на території глемпінгу \"Двері в ліс\", гарного \nпростору серед сосен. Тут можна провести час на свіжому \nповітрі та поєднати гру в падл з відпочинком на природі.",
  features: [
    {
      number: "01",
      title: "Зручно \nдобиратися",
      desc: "Близькість до міста та простора паркування, можна швидко приїхати \nта включитися в гру",
      variant: "light",
    },
    {
      number: "02",
      title: "Гра на\nсвіжому повітрі",
      desc: "Більше світла, повітря та відчуття свободи, ніж у звичних задушливих спортивних залах",
      variant: "dark",
    },
    {
      number: "03",
      title: "Професійні \nкарти",
      desc: "Високоякісне покриття, передове \nобладнання та освітлення. Продумана \nінфраструктура для матчів",
      variant: "dark",
    },
    {
      number: "04",
      title: "Більше,\nчим  матч",
      desc: "Після гри можна прогулятися територією глемпінгу, сходити в лазню, повечеряти і навіть залишитися відпочивати",
      variant: "dark",
    },
  ],
  cta: {
    text: [
      "Дізнатись детальніше",
      "про всі послуги глемпінгу “Двері в ліс” можна на сайті",
    ],
    link: "детальніше",
  },
};

export const pricing = {
  label: "ТАРИФИ",
  title: "Оренда корту",
  basic: {
    title: ["Базовий", "Тариф"],
    schedule: [
      {
        label: "Будні дні",
        rows: [
          { time: "08:00 – 17:00", price: "1500 ₴" },
          { time: "18:00 – 22:00", price: "2000 ₴" },
        ],
      },
      {
        label: "Вихідні та святкові дні",
        rows: [
          { time: "08:00 – 17:00", price: "2000 ₴" },
          { time: "18:00 – 22:00", price: "2200 ₴" },
        ],
      },
    ],
    duration: "1 година",
    capacity: "до 4 гравців",
    button: "докладніше",
  },
  guest: {
    title: ["Тариф", "для гостей", "гемпінгу"],
    label: "Будь-який час*",
    price: "1500 ₴",
    note: "Гості комплексу можуть забронювати корт при заселенні або будь-якої миті під час проживання – за наявності вільних слотів",
    duration: "1 година",
    capacity: "до 4 гравців",
    button: "докладніше",
  },
};

export const contacts = {
  label: "Контакти",
  title: "Як нас знайти",
  phone: "+380 (099) 217-11-11",
  hours: "з 8:00 до 23:00",
  address: ["м. Вінниця, 2-й пров.", "В. Стефаника, 9."],
  socials: [
    { id: "whatsapp", text: ["Написати", "в Whatsapp"], href: "https://wa.me/380992171111" },
    { id: "telegram", text: ["Написати", "в Telegram"], href: "https://t.me/" },
    { id: "instagram", text: ["стежити", "в instagram"], href: "https://instagram.com/" },
  ],
  mapPinLabel: "We are Padel",
  routeCta: "побудувати маршрут",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("м. Вінниця, 2-й пров. В. Стефаника, 9"),
  mapsEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("м. Вінниця, 2-й пров. В. Стефаника, 9, Україна") +
    "&hl=uk&output=embed",
};

export const footer = {
  taglineLeft: "відпочинь від міста.",
  taglineRight: "зіграй у падЕл.",
  cta: "забронювати корт",
  legal: {
    company: "ФОП Казіна Т.Б. ЄДРПОУ: 74938216 ІПН: 7493821634",
    copyright: "© 2026 Всі права захищені",
    privacy: "Політика конфіденційності",
    credit: "СТВОРЕННЯ САЙТУ",
  },
};
