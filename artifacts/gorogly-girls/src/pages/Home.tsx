import { useEffect, useState, useRef } from 'react';
import {
  Menu, X, Phone, Clock, MapPin,
  Dumbbell, Users, Building2, Trophy,
  Star, Check, ChevronUp, Flame, Lock,
  Smartphone, Instagram, ArrowRight,
  Shield, Heart, Zap, Activity, Timer, Crown
} from 'lucide-react';

import realLogo from '@/assets/logo.png';
import heroWoman from '@/assets/hero-woman.png';
import gymImage from '@/assets/gym-service.png';
import pilatesImage from '@/assets/pilates-service.png';
import trainerEkaterina from '@/assets/trainer-ekaterina.png';
import trainerYana from '@/assets/trainer-yana.png';
import trainerJahana from '@/assets/trainer-jahana.png';
import trainerNadezhda from '@/assets/trainer-nadezhda.png';

// ===== CUSTOM SVG ICONS =====
const IconFemale = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5" />
    <line x1="12" y1="13" x2="12" y2="21" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);

const IconApple = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const IconPlayStore = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.83 1-.97 1.4-.44l14 8.5c.38.23.38.79 0 1.02l-14 8.5C3 21.47 3 21.33 3 20.5z" />
  </svg>
);

const IconYoga = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="3.5" r="1.5" />
    <path d="M5 8c3.5-.5 5.5 1 7 4s3.5 4.5 7 4" />
    <path d="M12 12v9" />
    <path d="M8 15c1.5-1 2.5-1 4 0s2.5 1 4 0" />
  </svg>
);

const IconDiamond = ({ size = 10 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="currentColor">
    <polygon points="5,0 10,5 5,10 0,5" />
  </svg>
);

// ===== I18N DATA =====
const i18n = {
  tk: {
    nav: { home: 'Baş Sahypa', services: 'Hyzmatlar', schedule: 'Tertip', prices: 'Bahalar', branches: 'Şahalar', contact: 'Habarlaş', cta: 'Ýazyl' },
    hero: {
      badge: 'Diňe Zenanlar Üçin · 7 Şaha · Aşgabat',
      h1: ['GÜÝÇLI.', 'SAGDYN.', 'ERKIN.'],
      heart: '♥',
      body: 'Görogly Girls — Aşgabadyň iň uly zenanlar fitnes tory. 7 şaha, hünärmen tälimçiler, Gym we Pilates Reformer.',
      btn1: 'Synag Türgenleşigine Ýazyl',
      btn2: 'Bahalary Gör',
      trust: ['7 Şaha', '100 M Synag', 'Diňe Aýallar', '24/7 Goldaw'],
    },
    stats: [
      { num: '1000+', label: 'Agza Zenan' },
      { num: '7', label: 'Şaha Aşgabatda' },
      { num: '100 M', label: 'Synag Bahasy' },
      { num: '5+ ýyl', label: 'Tejribe' },
    ],
    services: {
      title: 'Biziň Hyzmatlarymyz',
      label: 'Hyzmatlar',
      gym: {
        name: 'FITNESS ZALY', tagline: 'Güýç we kardio türgenleşigi',
        desc: 'Iň häzirki zaman enjamlar bilen enjamlaşdyrylan fitness zaly. Güýç türgenleşigi, kardio bölümi, bedenterbiýe we has köp.',
        prices: [
          { label: 'Synag türgenleşigi', price: '100 M' },
          { label: '14 türgenleşige (aýlyk)', price: '350 M' },
          { label: 'Aýlyk çäksiz', price: '500 M' },
        ],
        discounts: [
          { label: 'Ýyllyk çäksiz', old: '6.000 M', price: '2.400 M' },
          { label: 'Toraýn Ýyllyk RED', old: '9.000 M', price: '3.600 M' },
        ],
        instructor: { title: 'Instruktor Hyzmatlary', rows: [
          { label: 'Synag', price: '50 M' },
          { label: 'Aýlyk', price: '150 M' },
          { label: 'Şahsy synag', price: '250 M' },
          { label: 'Şahsy aýlyk', price: '2.500 M' },
        ]},
        locker: 'Şkafçik kärendesi: 200 M/aý',
        btn: 'Şu Gün Ýazyl',
      },
      pilates: {
        name: 'PILATES REFORMER', tagline: 'Häzirki zaman Pilates enjamy bilen',
        badge: 'MEŞHUR',
        desc: 'Pilates Reformer — bedenini döretmek we güýçlendirmek üçin iň netijeli usullaryň biri. Hünärmen instruktorlar ýolbaşçylygynda.',
        prices: [
          { label: 'Synag (topar)', price: '200 M' },
          { label: 'Aýlyk (topar)', price: '1.000 M' },
        ],
        discounts: [
          { label: 'Şahsy (1 adam)', price: '4.000 M' },
          { label: 'Şahsy (2 adam)', price: '5.000 M' },
          { label: 'Şahsy synag', price: '400 M' },
        ],
        address: 'Diýar TM 15 ýol (Zenanlar)',
        phone: '+993 12 415311',
        btn: 'Pilates Sapaga Ýazyl',
      }
    },
    schedule: {
      title: 'Pilates Dersleri Tertibi', label: 'Tertip',
      tab1: 'DUŞ · ÇAR · ANNA', tab2: 'SİŞ · PENŞ · ŞENB',
      tab1_full: 'Duşenbe · Çarşenbe · Anna',
      tab2_full: 'Sişenbe · Penşenbe · Şenbe',
      note: 'Pilates sapaklary diňe Diýar TM şahasynda geçirilýär. Tel: +993 12 415311',
    },
    branches: {
      title: 'Şahalarymyz', label: 'Şahalar',
      sub: 'Aşgabadyň her künjünde siz üçin ýerimiz bar.',
      call: 'Jaň Et', map: 'Karta', gym: 'GYM', pilates: 'PILATES',
      open: 'Iş sagady',
    },
    trainers: { title: 'Biziň Instruktorlarymyz', label: 'Instruktorlar', btn: 'Ýazyl' },
    programs: {
      title: 'Näme Öwrenip Bilersiňiz?', label: 'Programlar',
      intensity: 'Intensiwlik',
      duration: 'Dowamlylygy',
    },
    app: {
      title: 'Görogly Girls Mobil App',
      sub: 'iOS we Android üçin elýeterli!',
      features: [
        'Sapak tertibini gör we ýazyl',
        'Abonementiňi dolandir',
        'Tälimçiňe habar ýolla',
        'Netijeleriňi yzarla',
      ],
      apple_small: 'App Store-da ýükle', apple: 'App Store',
      google_small: 'Google Play-de ýükle', google: 'Google Play',
      phone_workout: 'Günüň Türgenleşigi', phone_schedule: 'Pilates: 18:30', phone_sub: 'Abonementiňiz işjeň',
    },
    testimonials: { title: 'Agzalarymyz Näme Diýýär?', label: 'Teswirler', months: 'aý' },
    steps: {
      title: 'Nähili Başlap Bolar?', label: '3 Ädim',
      steps: [
        { title: 'Jaň et', desc: 'Ýakyn şahasy saýla we jaň et.' },
        { title: 'Synaga gel', desc: '100 M synag türgenleşigi et.' },
        { title: 'Agza bol!', desc: 'Saňa laýyk paket saýla.' },
      ]
    },
    contact: {
      title: 'Habarlaşmak', label: 'Habarlaş',
      sub: 'Islän şahymyza ýazylmak üçin aşakdaky formy doldur!',
      direct: 'Göni Jaň Et',
      form_title: 'Sapaga Ýazyl',
      name: 'Adyňyz *',
      phone: 'Telefon belgiňiz *',
      branch: 'Haýsy şaha? *',
      service: 'Haýsy hyzmat? *',
      services_opts: ['Fitnes Zaly', 'Pilates Reformer (diňe Diýar TM)', 'Şahsy instruktor'],
      time: 'Haýsy wagt amatly?',
      times: ['Ertir / 07:00–12:00', 'Günorta / 12:00–17:00', 'Agşam / 17:00–22:00'],
      message: 'Habar (islegler)',
      submit: 'Ýazyl',
      success_title: 'MINNETDAR!',
      success_text_fn: (name: string, branch: string, service: string) =>
        `${name}, saňa tizden jaň ederis!\n\nSaýlan şahan: ${branch}\nHyzmat: ${service}\n\nGörogly Girls-da seni garşylamagy sabyrsyzlyk bilen garaşýarys!`,
      branch_placeholder: 'Şahy saýlaň...',
    },
    footer: {
      tagline: 'Diňe Zenanlar Üçin · Aşgabat, Türkmenistan',
      nav_title: 'Nawigasiýa',
      branches_title: 'Şahalar',
      copy: '© 2025 Görogly Girls. Ähli hukuklar goragly.',
      credit: 'Bu saýt Ýeňil Web Agentligi tarapyndan döredildi',
      credit_link: 'yenil.ru',
    }
  },
  ru: {
    nav: { home: 'Главная', services: 'Услуги', schedule: 'Расписание', prices: 'Цены', branches: 'Филиалы', contact: 'Контакты', cta: 'Записаться' },
    hero: {
      badge: 'Только для женщин · 7 Филиалов · Ашхабад',
      h1: ['СИЛЬНАЯ.', 'ЗДОРОВАЯ.', 'СВОБОДНАЯ.'],
      heart: '♥',
      body: 'Görogly Girls — 7 филиалов, профессиональные тренеры, фитнес-клуб созданный только для вас.',
      btn1: 'Записаться на пробную',
      btn2: 'Смотреть цены',
      trust: ['7 Филиалов', 'Пробная 100 М', 'Только женщины', 'Поддержка 24/7'],
    },
    stats: [
      { num: '1000+', label: 'Участниц' },
      { num: '7', label: 'Филиалов в Ашхабаде' },
      { num: '100 М', label: 'Пробная тренировка' },
      { num: '5+ лет', label: 'Опыта' },
    ],
    services: {
      title: 'Наши Услуги',
      label: 'Услуги',
      gym: {
        name: 'ТРЕНАЖЁРНЫЙ ЗАЛ', tagline: 'Силовые и кардио тренировки',
        desc: 'Тренажёрный зал оснащён современным оборудованием. Силовая тренировка, кардиозона, фитнес и многое другое.',
        prices: [
          { label: 'Пробная тренировка', price: '100 М' },
          { label: '14 тр. в месяц', price: '350 М' },
          { label: 'Безлимит месяц', price: '500 М' },
        ],
        discounts: [
          { label: 'Годовой безлимит', old: '6.000 М', price: '2.400 М' },
          { label: 'Сетевая RED годовая', old: '9.000 М', price: '3.600 М' },
        ],
        instructor: { title: 'Услуги инструктора', rows: [
          { label: 'Пробная', price: '50 М' },
          { label: 'Месячная', price: '150 М' },
          { label: 'Личная пробная', price: '250 М' },
          { label: 'Личная месячная', price: '2.500 М' },
        ]},
        locker: 'Аренда шкафчика: 200 М/месяц',
        btn: 'Записаться сегодня',
      },
      pilates: {
        name: 'PILATES REFORMER', tagline: 'С современным оборудованием Pilates',
        badge: 'ПОПУЛЯРНО',
        desc: 'Pilates Reformer — один из самых эффективных методов для формирования и укрепления тела. Под руководством профессиональных инструкторов.',
        prices: [
          { label: 'Пробное (группа)', price: '200 М' },
          { label: 'Месяц (группа)', price: '1.000 М' },
        ],
        discounts: [
          { label: 'Личное (1 чел)', price: '4.000 М' },
          { label: 'Личное (2 чел)', price: '5.000 М' },
          { label: 'Личное пробное', price: '400 М' },
        ],
        address: 'ТЦ Диар ТМ, 15 этап (Женский)',
        phone: '+993 12 415311',
        btn: 'Записаться на Pilates',
      }
    },
    schedule: {
      title: 'Расписание занятий Pilates', label: 'Расписание',
      tab1: 'ПН · СР · ПТ', tab2: 'ВТ · ЧТ · СБ',
      tab1_full: 'Понедельник · Среда · Пятница',
      tab2_full: 'Вторник · Четверг · Суббота',
      note: 'Занятия Pilates только в филиале Диар ТМ. Тел: +993 12 415311',
    },
    branches: {
      title: 'Наши Филиалы', label: 'Филиалы',
      sub: 'В каждом районе Ашхабада есть наш филиал.',
      call: 'Позвонить', map: 'Карта', gym: 'GYM', pilates: 'PILATES',
      open: 'Рабочие часы',
    },
    trainers: { title: 'Наши Инструкторы', label: 'Инструкторы', btn: 'Записаться' },
    programs: {
      title: 'Что вы можете освоить?', label: 'Программы',
      intensity: 'Интенсивность',
      duration: 'Длительность',
    },
    app: {
      title: 'Мобильное приложение',
      sub: 'Доступно для iOS и Android!',
      features: [
        'Смотреть расписание и записываться',
        'Управлять абонементом',
        'Писать тренеру',
        'Отслеживать результаты',
      ],
      apple_small: 'Загрузить в App Store', apple: 'App Store',
      google_small: 'Загрузить в Google Play', google: 'Google Play',
      phone_workout: 'Тренировка дня', phone_schedule: 'Pilates: 18:30', phone_sub: 'Абонемент активен',
    },
    testimonials: { title: 'Что говорят наши участницы?', label: 'Отзывы', months: 'мес' },
    steps: {
      title: 'Как начать?', label: '3 шага',
      steps: [
        { title: 'Позвоните', desc: 'Выберите ближайший филиал и позвоните.' },
        { title: 'Приходите', desc: 'Попробуйте пробную за 100 М.' },
        { title: 'Станьте членом!', desc: 'Выберите подходящий пакет.' },
      ]
    },
    contact: {
      title: 'Контакты', label: 'Контакты',
      sub: 'Заполните форму для записи в любой из наших филиалов!',
      direct: 'Позвонить напрямую',
      form_title: 'Записаться',
      name: 'Ваше имя *',
      phone: 'Номер телефона *',
      branch: 'Какой филиал? *',
      service: 'Какая услуга? *',
      services_opts: ['Тренажёрный зал', 'Pilates Reformer (только Диар ТМ)', 'Персональный инструктор'],
      time: 'Когда удобно?',
      times: ['Утро / 07:00–12:00', 'День / 12:00–17:00', 'Вечер / 17:00–22:00'],
      message: 'Сообщение (пожелания)',
      submit: 'Записаться',
      success_title: 'СПАСИБО!',
      success_text_fn: (name: string, branch: string, service: string) =>
        `${name}, скоро вам позвоним!\n\nФилиал: ${branch}\nУслуга: ${service}\n\nС нетерпением ждём вас в Görogly Girls!`,
      branch_placeholder: 'Выберите филиал...',
    },
    footer: {
      tagline: 'Только для женщин · Ашхабад, Туркменистан',
      nav_title: 'Навигация',
      branches_title: 'Филиалы',
      copy: '© 2025 Görogly Girls. Все права защищены.',
      credit: 'Сайт создан агентством Yenil Web',
      credit_link: 'yenil.ru',
    }
  }
} as const;

type Lang = 'tk' | 'ru';

// ===== DATA =====
const branches = [
  { id: 1, name_tk: 'Üniwermag Şahasy', name_ru: 'Филиал Универмаг', area_tk: 'Üniwermag ýakynynda', area_ru: 'Рядом с Универмагом', phone: '+993 12 942771', tel: '+99312942771', services: ['gym'], open: '07:00 – 22:00', highlight: false },
  { id: 2, name_tk: '6-njy Mikroraýon', name_ru: '6-й Микрорайон', area_tk: '6-njy mikroraýon', area_ru: '6 микрорайон', phone: '+993 12 286719', tel: '+99312286719', services: ['gym'], open: '07:00 – 22:00', highlight: false },
  { id: 3, name_tk: 'Çehow Şahasy', name_ru: 'Филиал Чехова', area_tk: 'Çehow köçesi', area_ru: 'Улица Чехова', phone: '+993 12 414296', tel: '+99312414296', services: ['gym'], open: '07:00 – 22:00', highlight: false },
  { id: 4, name_tk: 'Gülzümin Şahasy', name_ru: 'Филиал Гульземин', area_tk: 'Gülzümin etrap', area_ru: 'Район Гульземин', phone: '+993 12 903706', tel: '+99312903706', services: ['gym'], open: '07:00 – 22:00', highlight: false },
  { id: 5, name_tk: 'Diýar TM — ZENANLAR', name_ru: 'Диар ТМ — ЖЕНСКИЙ', area_tk: 'Seydi köç. 15 ýol, TM Diýar', area_ru: 'ул. Сейди, 15 этап, ТЦ Диар', phone: '+993 12 415311', tel: '+99312415311', services: ['gym', 'pilates'], open: '08:00 – 21:30', highlight: true, special_tk: 'Pilates Reformer hem bar!', special_ru: 'Здесь есть Pilates Reformer!' },
  { id: 6, name_tk: 'Rysga Bank Şahasy', name_ru: 'Филиал Рысгал Банк', area_tk: 'Rysga bank ýakynynda', area_ru: 'Рядом с Рысгал Банком', phone: '+993 12 964992', tel: '+99312964992', services: ['gym'], open: '07:00 – 22:00', highlight: false },
  { id: 7, name_tk: 'Syýahat Myhmanhanasy', name_ru: 'Гостиница Турист', area_tk: 'Syýahat myhmanhanasy ýakynynda', area_ru: 'Рядом с гостиницей Турист', phone: '+993 12 343668', tel: '+99312343668', services: ['gym'], open: '07:00 – 22:00', highlight: false },
];

const trainers = [
  { name: 'Ýekaterina', title_tk: 'Pilates Reformer Instruktory', title_ru: 'Инструктор Pilates Reformer', badges: ['ПН-СР-ПТ: 10:00–13:00', 'ВТ-ЧТ: 17:30–19:30'], spec_tk: 'Pilates Reformer, Beden Formasy, Oňurga saglygy', spec_ru: 'Pilates Reformer, Формирование тела, Здоровье позвоночника', photo: trainerEkaterina },
  { name: 'Ýana', title_tk: 'Pilates Instruktory', title_ru: 'Инструктор Pilates', badges: ['ПН-СР-ПТ: 17:30–20:30'], spec_tk: 'Agşam sapaklary, Dinamiki Pilates, Güýçlendirme', spec_ru: 'Вечерние занятия, Динамический Pilates, Укрепление', photo: trainerYana },
  { name: 'Jahana', title_tk: 'Pilates Instruktory', title_ru: 'Инструктор Pilates', badges: ['ПН-СР-ПТ: 13:15–14:15', 'ВТ-ЧТ-СБ: 20:30–21:30'], spec_tk: 'Günortanky we agşam sapaklary, Ynjalyk', spec_ru: 'Дневные и вечерние занятия, Расслабление', photo: trainerJahana },
  { name: 'Nadezhda', title_tk: 'Pilates Instruktory', title_ru: 'Инструктор Pilates', badges: ['ВТ-ЧТ-СБ: 12:00–13:00'], spec_tk: 'Günortanky sapaklary, Esasy Pilates', spec_ru: 'Дневные занятия, Базовый Pilates', photo: trainerNadezhda },
];

const scheduleData = {
  mnwf: [
    { time: '10:00–11:00', teacher: 'Ekaterina' },
    { time: '11:00–12:00', teacher: 'Ekaterina' },
    { time: '12:00–13:00', teacher: 'Ekaterina' },
    { time: '13:15–14:15', teacher: 'Jahana' },
    { time: '17:30–18:30', teacher: 'Ýana' },
    { time: '18:30–19:30', teacher: 'Ýana' },
    { time: '19:30–20:30', teacher: 'Ýana' },
  ],
  tts: [
    { time: '12:00–13:00', teacher: 'Nadezhda' },
    { time: '17:30–18:30', teacher: 'Ekaterina' },
    { time: '18:30–19:30', teacher: 'Ekaterina' },
    { time: '20:30–21:30', teacher: 'Jahana' },
  ]
};

const programs = [
  { Icon: Dumbbell, name_tk: 'Güýç Türgenleşigi', name_ru: 'Силовые тренировки', desc_tk: 'Häzirki zaman trenažýorlar bilen myşsa gurluşy we güýç gazanmak. Hünärmen instruktor goldawy.', desc_ru: 'Набор мышечной массы и развитие силы на современных тренажёрах. Поддержка профессионального инструктора.', intensity: 5, dur_tk: '45-60 min', dur_ru: '45-60 мин' },
  { Icon: Activity, name_tk: 'Kardio Bölümi', name_ru: 'Кардио зона', desc_tk: 'Ýürek-damar ulgamyňyzy güýçlendiriň, kaloriýa ýakyn.', desc_ru: 'Укрепление сердечно-сосудистой системы, сжигание калорий.', intensity: 3, dur_tk: '30-60 min', dur_ru: '30-60 мин' },
  { Icon: IconYoga as any, name_tk: 'Pilates Reformer', name_ru: 'Pilates Reformer', desc_tk: 'Özboluşly Pilates enjamy bilen beden formasy, ýeňillik we güýç. Diňe Diýar şahasynda.', desc_ru: 'Формирование тела, гибкость и силы с помощью реформера. Только в филиале Диар.', intensity: 2, dur_tk: '50-60 min', dur_ru: '50-60 мин' },
  { Icon: Zap, name_tk: 'HIIT & Aerobika', name_ru: 'HIIT & Аэробика', desc_tk: 'Ýokary intensiwli interval türgenleşigi. Gysga wagtda maksimal netije.', desc_ru: 'Высокоинтенсивные интервальные тренировки. Максимальный результат за короткое время.', intensity: 5, dur_tk: '30-45 min', dur_ru: '30-45 мин' },
  { Icon: Heart, name_tk: 'Stretching & Ýeňillik', name_ru: 'Растяжка & Гибкость', desc_tk: 'Bedeniňizi ýeňilleşdiriň, myşsalaryňyzy dikeldip beriň.', desc_ru: 'Расслабление тела, восстановление мышц.', intensity: 1, dur_tk: '45 min', dur_ru: '45 мин' },
  { Icon: Crown, name_tk: 'Şahsy Türgenleşik', name_ru: 'Персональные тренировки', desc_tk: 'Instruktoryň size ýörite düzen programması. Çalt we takyk netije.', desc_ru: 'Программа тренировок, составленная специально для вас. Быстрый и точный результат.', intensity: 4, dur_tk: 'Ylalaşyk', dur_ru: 'По договор.' },
];

const testimonials = [
  { name: 'Aýna Gurbanowa', months: 8, result_tk: '12 kg azaldym', result_ru: 'Похудела на 12 кг', text_tk: 'Görogly Girls-a gelmezden öň sport bilen hiç hili gatnaşygym ýokdy. Instruktorlar örän sabyrly we goldawçy. 8 aýda özümi tanamadym!', text_ru: 'До Görogly Girls я вообще не занималась спортом. Инструкторы очень терпеливые и поддерживающие. За 8 месяцев себя не узнала!', branch_tk: 'Üniwermag şahasy', branch_ru: 'Филиал Универмаг', rating: 5 },
  { name: 'Maral Orazowa', months: 12, result_tk: 'Pilates bilen täze başladym', result_ru: 'Начала новую жизнь с Pilates', text_tk: 'Pilates Reformer — düşünjesi ýokdy, indi bolsa onsyz ýaşap bilemok. Ýekaterina hanym hünärmen we mährem. Diýar şahasy iň gowy!', text_ru: 'О Pilates Reformer не знала ничего, теперь не могу без него. Екатерина — профессионал и очень добрый человек.', branch_tk: 'Diýar TM şahasy', branch_ru: 'Филиал Диар ТМ', rating: 5 },
  { name: 'Gülälek Hojamyradowa', months: 6, result_tk: 'Belim sagaldy', result_ru: 'Спина перестала болеть', text_tk: 'Pilates-e geçenimden bäri belim agyrmasy doly geçdi. Nadezhda hanym hünärmenligine minnetdar.', text_ru: 'С тех пор как начала Pilates, спина перестала болеть. Благодарна Надежде за профессионализм.', branch_tk: 'Diýar TM — Pilates', branch_ru: 'Диар ТМ — Pilates', rating: 5 },
  { name: 'Leýla Saparowa', months: 14, result_tk: 'Her gün gelýärin', result_ru: 'Прихожу каждый день', text_tk: 'Toraýn kart alyp gymmat bolar öýdüpdim. Ýyllyk arzanladyş ähli zady çözdi. Indi Rysga bank şahasyna her gün gelýärin.', text_ru: 'Думала сетевая карта будет дорого. Скидка на годовой всё решила. Теперь каждый день хожу.', branch_tk: 'Rysga bank şahasy', branch_ru: 'Филиал Рысгал Банк', rating: 5 },
  { name: 'Ogulnar Durdyýewa', months: 3, result_tk: 'Özüme ynam artdy', result_ru: 'Выросла уверенность в себе', text_tk: 'Görogly Girls diňe zenanlar üçin bolany üçin has rahat duýýaryn. Synag türgenleşigi 100 M bilen başladym.', text_ru: 'В Görogly Girls чувствую себя комфортнее, потому что только для женщин. Начала с пробной за 100 М.', branch_tk: 'Çehow şahasy', branch_ru: 'Филиал Чехова', rating: 5 },
  { name: 'Mährijemal Annaýewa', months: 18, result_tk: 'Iň gowy karar', result_ru: 'Лучшее решение', text_tk: '6-njy mikroraýon şahasy öýüme ýakyn. Instruktorlar hemişe goldaw berýär. Görogly Girls — meniň ikinji öýüm!', text_ru: 'Филиал 6 микрорайона рядом с домом. Инструкторы всегда поддерживают. Görogly Girls — мой второй дом!', branch_tk: '6-njy Mikroraýon şahasy', branch_ru: 'Филиал 6 Микрорайон', rating: 5 },
];

const statIcons = [Users, Building2, Trophy, Star];

// ===== HOOKS =====
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCountUp(target: string, start: boolean) {
  const [val, setVal] = useState('0');
  useEffect(() => {
    if (!start) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.,]/g, '');
    if (isNaN(num)) { setVal(target); return; }
    const dur = 1500; const step = 50;
    const inc = num / (dur / step);
    let current = 0;
    const t = setInterval(() => {
      current = Math.min(current + inc, num);
      const display = num >= 100 ? Math.round(current).toLocaleString() : Math.round(current).toString();
      setVal(display + suffix);
      if (current >= num) clearInterval(t);
    }, step);
    return () => clearInterval(t);
  }, [start, target]);
  return val;
}

function StatItem({ IconComp, num, label }: { IconComp: React.ComponentType<{size?: number; strokeWidth?: number}>; num: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const val = useCountUp(num, started);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon-wrap"><IconComp size={22} strokeWidth={1.5} /></div>
      <span className="stat-num">{val}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

// ===== MAIN COMPONENT =====
export default function Home() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('gg_lang') as Lang) || 'tk');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scheduleTab, setScheduleTab] = useState<'mnwf' | 'tts'>('mnwf');
  const [formData, setFormData] = useState({ name: '', phone: '', branch: '', service: '', time: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);
  const [backTop, setBackTop] = useState(false);
  const t = i18n[lang];

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('gg_lang', l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setBackTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useReveal();

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
  };

  const navLinks: Array<[string, keyof typeof t.nav]> = [
    ['hero', 'home'], ['services', 'services'], ['schedule', 'schedule'],
    ['services', 'prices'], ['branches', 'branches'], ['contact', 'contact']
  ];

  const logoEl = (
    <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
      <img src={realLogo} alt="Görogly Girls" className="logo-img" />
      <div className="logo-text">GÖROGLY<span>GIRLS FITNESS CLUB</span></div>
    </a>
  );

  return (
    <>
      {/* ===== NAV ===== */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-ornament-line" />
        {logoEl}
        <ul className="nav-links">
          {navLinks.map(([id, key], idx) => (
            <li key={key}>
              {idx > 0 && <span className="nav-sep"><IconDiamond size={5} /></span>}
              <a href={`#${id}`} className="nav-link-item" onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                {t.nav[key]}
                <span className="nav-link-underline" />
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="lang-switcher">
            <button className={`lang-btn${lang === 'tk' ? ' active' : ''}`} onClick={() => changeLang('tk')}>ТМ</button>
            <span className="lang-sep-bar" />
            <button className={`lang-btn${lang === 'ru' ? ' active' : ''}`} onClick={() => changeLang('ru')}>РУ</button>
          </div>
          <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            <span className="nav-cta-shimmer" />
            {t.nav.cta}
          </a>
          <button className={`hamburger${mobileOpen ? ' is-open' : ''}`} onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            <span className="hamburger-bar top" />
            <span className="hamburger-bar mid" />
            <span className="hamburger-bar bot" />
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu-overlay${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-logo">{logoEl}</div>
        <ul className="mobile-nav-links">
          {navLinks.map(([id, key]) => (
            <li key={key}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); setMobileOpen(false); }}>
              <ArrowRight size={14} style={{ marginRight: '0.5rem', opacity: 0.6 }} />
              {t.nav[key]}
            </a></li>
          ))}
        </ul>
        <div className="mobile-menu-bottom">
          <div className="mobile-lang">
            <button className={`lang-btn${lang === 'tk' ? ' active' : ''}`} style={{ fontSize: '1.1rem' }} onClick={() => changeLang('tk')}>ТМ</button>
            <span className="lang-sep-bar" />
            <button className={`lang-btn${lang === 'ru' ? ' active' : ''}`} style={{ fontSize: '1.1rem' }} onClick={() => changeLang('ru')}>РУ</button>
          </div>
          <a href="tel:+99312415311" className="mobile-phone">
            <Phone size={16} style={{ marginRight: '0.5rem' }} />
            +993 12 415311
          </a>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-mobile-bg">
          <img src={heroWoman} alt="" className="hero-mobile-bg-img" />
          <div className="hero-mobile-bg-overlay" />
        </div>
        <div className="hero-dots" />
        <div className="hero-nebula-1" />
        <div className="hero-nebula-2" />
        <div className="hero-nebula-3" />
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <IconFemale size={14} />
              {t.hero.badge}
            </div>
            <div>
              {t.hero.h1.map((line, i) => (
                <div className="hero-h1-wrap" key={i}>
                  <span className="hero-line">{line}</span>
                </div>
              ))}
            </div>
            <div className="hero-divider">
              <div className="hero-divider-line" />
              <Heart size={16} className="hero-heart-icon" />
              <div className="hero-divider-line" />
            </div>
            <p className="hero-body">{t.hero.body}</p>
            <div className="hero-btns">
              <a href="#contact" className="hero-btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                <Dumbbell size={17} strokeWidth={2} />
                {t.hero.btn1}
              </a>
              <a href="#services" className="hero-btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                {t.hero.btn2}
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-trust">
              {t.hero.trust.map((item, i) => (
                <span key={i} className="hero-trust-item">
                  <Check size={12} className="trust-check" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-wrap">
              <div className="hero-image-glow" />
              <img src={heroWoman} alt="Görogly Girls Fitness" className="hero-woman-img" />
              <div className="hero-image-overlay" />
            </div>
            <div className="hero-float-cards">
              {[
                { Icon: Building2, stat: '7', label: lang === 'tk' ? 'Şaha Aşgabatda' : 'Филиалов' },
                { Icon: Users, stat: '1000+', label: lang === 'tk' ? 'Agza Zenan' : 'Участниц' },
                { Icon: Trophy, stat: '100 M', label: lang === 'tk' ? 'Synag Türg.' : 'Пробная тр.' }
              ].map((card, i) => (
                <div key={i} className="hero-float-card">
                  <div className="card-icon-wrap"><card.Icon size={18} strokeWidth={1.5} /></div>
                  <div>
                    <div className="card-stat">{card.stat}</div>
                    <div className="card-label">{card.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <div className="stats-strip">
        <div className="stats-grid">
          {t.stats.map((s, i) => (
            <StatItem key={i} IconComp={statIcons[i]} num={s.num} label={s.label} />
          ))}
        </div>
      </div>

      {/* ===== SERVICES ===== */}
      <section id="services">
        <div className="section">
          <div className="diag-slash" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header-inner reveal">
              <p className="section-label">{t.services.label}</p>
              <h2 className="section-h2">{t.services.title}</h2>
            </div>
            <div className="services-grid">
              {/* GYM */}
              <div className="service-card reveal">
                <div className="service-img-wrap">
                  <img src={gymImage} alt="Fitness Gym" className="service-img" />
                  <div className="service-img-overlay" />
                </div>
                <div className="service-body">
                  <div className="service-top">
                    <div className="service-icon-circle"><Dumbbell size={22} strokeWidth={1.5} /></div>
                    <div>
                      <div className="service-name">{t.services.gym.name}</div>
                      <div className="service-tagline">{t.services.gym.tagline}</div>
                    </div>
                  </div>
                  <p className="service-desc">{t.services.gym.desc}</p>
                  <div className="service-divider" />
                  <div className="price-table">
                    {t.services.gym.prices.map((p, i) => (
                      <div className="price-row" key={i}>
                        <span className="price-row-label">{p.label}</span>
                        <span className="price-row-price font-oswald">{p.price}</span>
                      </div>
                    ))}
                    {t.services.gym.discounts.map((p, i) => (
                      <div className="price-row discount highlight-row" key={i}>
                        <span className="price-row-label">
                          <Flame size={12} style={{ display: 'inline', marginRight: '4px', color: '#ff6b35' }} />
                          {p.label}
                        </span>
                        <span className="price-row-price font-oswald">
                          <span className="price-old">{p.old}</span>{p.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="price-table" style={{ marginTop: '1rem' }}>
                    <div className="price-row"><strong style={{ color: 'var(--text)', fontSize: '0.85rem' }}>{t.services.gym.instructor.title}</strong></div>
                    {t.services.gym.instructor.rows.map((r, i) => (
                      <div className="price-row" key={i}>
                        <span className="price-row-label">{r.label}</span>
                        <span className="price-row-price font-oswald">{r.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="service-locker">
                    <Lock size={12} style={{ display: 'inline', marginRight: '5px', opacity: 0.6 }} />
                    {t.services.gym.locker}
                  </p>
                  <a href="#contact" className="service-btn" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                    <Dumbbell size={16} strokeWidth={2} />
                    {t.services.gym.btn}
                  </a>
                </div>
              </div>

              {/* PILATES */}
              <div className="service-card featured reveal">
                <div className="service-badge">{t.services.pilates.badge}</div>
                <div className="service-img-wrap">
                  <img src={pilatesImage} alt="Pilates Reformer" className="service-img" />
                  <div className="service-img-overlay" />
                </div>
                <div className="service-body">
                  <div className="service-top">
                    <div className="service-icon-circle pilates-icon"><IconYoga size={22} /></div>
                    <div>
                      <div className="service-name">{t.services.pilates.name}</div>
                      <div className="service-tagline">{t.services.pilates.tagline}</div>
                    </div>
                  </div>
                  <p className="service-desc">{t.services.pilates.desc}</p>
                  <div className="service-divider" />
                  <div className="price-table">
                    {t.services.pilates.prices.map((p, i) => (
                      <div className="price-row" key={i}>
                        <span className="price-row-label">{p.label}</span>
                        <span className="price-row-price font-oswald">{p.price}</span>
                      </div>
                    ))}
                    {t.services.pilates.discounts.map((p, i) => (
                      <div className="price-row discount highlight-row" key={i}>
                        <span className="price-row-label">{p.label}</span>
                        <span className="price-row-price font-oswald">{p.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="service-address-box">
                    <p><MapPin size={13} style={{ display: 'inline', marginRight: '5px' }} />{t.services.pilates.address}</p>
                    <p><Phone size={13} style={{ display: 'inline', marginRight: '5px' }} />{t.services.pilates.phone}</p>
                  </div>
                  <a href="#contact" className="service-btn pilates-btn" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                    <IconYoga size={16} />
                    {t.services.pilates.btn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE ===== */}
      <div id="schedule" className="section-full schedule-bg">
        <div className="section">
          <div className="diag-slash" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal">
              <p className="section-label">{t.schedule.label}</p>
              <h2 className="section-h2">{t.schedule.title}</h2>
            </div>
            <div className="schedule-tabs reveal">
              <button className={`tab-btn${scheduleTab === 'mnwf' ? ' active' : ''}`} onClick={() => setScheduleTab('mnwf')}>
                <div>{t.schedule.tab1}</div>
                <div style={{ fontSize: '0.72rem', opacity: 0.75, marginTop: '0.2rem' }}>{t.schedule.tab1_full}</div>
              </button>
              <button className={`tab-btn${scheduleTab === 'tts' ? ' active' : ''}`} onClick={() => setScheduleTab('tts')}>
                <div>{t.schedule.tab2}</div>
                <div style={{ fontSize: '0.72rem', opacity: 0.75, marginTop: '0.2rem' }}>{t.schedule.tab2_full}</div>
              </button>
            </div>
            <div className="schedule-list">
              {scheduleData[scheduleTab].map((row, i) => (
                <div className="schedule-row" key={i}>
                  <span className="sched-time">
                    <Timer size={14} strokeWidth={1.5} style={{ display: 'inline', marginRight: '6px', opacity: 0.7 }} />
                    {row.time}
                  </span>
                  <span className="sched-teacher">{row.teacher}</span>
                  <span className="sched-spots">
                    <Check size={13} strokeWidth={2.5} style={{ display: 'inline', marginRight: '4px' }} />
                    {lang === 'tk' ? 'Bar ýer' : 'Есть места'}
                  </span>
                  <a href="#contact" className="sched-btn" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                    {lang === 'tk' ? 'Ýazyl' : 'Записаться'}
                    <ArrowRight size={13} style={{ marginLeft: '4px' }} />
                  </a>
                </div>
              ))}
            </div>
            <div className="schedule-note">
              <MapPin size={14} style={{ display: 'inline', marginRight: '6px', flexShrink: 0 }} />
              {t.schedule.note}
            </div>
          </div>
        </div>
      </div>

      {/* ===== BRANCHES ===== */}
      <section id="branches">
        <div className="section">
          <div className="diag-slash" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header-inner reveal">
              <p className="section-label">{t.branches.label}</p>
              <h2 className="section-h2">{t.branches.title}</h2>
              <p className="section-sub">{t.branches.sub}</p>
            </div>
            <div className="branches-grid">
              {branches.map((b) => (
                <div key={b.id} className={`branch-card reveal${b.highlight ? ' highlight' : ''}`}>
                  <div className="branch-top">
                    <span className="branch-num">0{b.id}</span>
                    <div className="branch-icon-wrap">
                      {b.highlight ? <Trophy size={18} strokeWidth={1.5} /> : <Building2 size={18} strokeWidth={1.5} />}
                    </div>
                  </div>
                  <div className="branch-tags">
                    {b.services.includes('gym') && <span className="branch-tag"><Dumbbell size={10} style={{ display: 'inline', marginRight: '4px' }} />{t.branches.gym}</span>}
                    {b.services.includes('pilates') && <span className="branch-tag pilates-tag"><IconYoga size={10} />{t.branches.pilates}</span>}
                  </div>
                  <div className="branch-name">{lang === 'tk' ? b.name_tk : b.name_ru}</div>
                  <div className="branch-area">
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px', opacity: 0.5 }} />
                    {lang === 'tk' ? b.area_tk : b.area_ru}
                  </div>
                  {b.highlight && (b as any)[`special_${lang}`] && (
                    <div className="branch-special">
                      <Star size={12} style={{ display: 'inline', marginRight: '4px', fill: 'currentColor' }} />
                      {(b as any)[`special_${lang}`]}
                    </div>
                  )}
                  <div className="branch-divider" />
                  <div className="branch-info">
                    <div className="branch-info-row">
                      <Phone size={13} strokeWidth={1.5} />
                      <strong>{b.phone}</strong>
                    </div>
                    <div className="branch-info-row">
                      <Clock size={13} strokeWidth={1.5} />
                      <span>{t.branches.open}: {b.open}</span>
                    </div>
                  </div>
                  <div className="branch-btns">
                    <a href={`tel:${b.tel}`} className="branch-call">
                      <Phone size={13} strokeWidth={2} />
                      {t.branches.call}
                    </a>
                    <a href="#" className="branch-map" onClick={(e) => e.preventDefault()}>
                      <MapPin size={13} strokeWidth={2} />
                      {t.branches.map}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAINERS ===== */}
      <div className="section-full" style={{ background: 'var(--bg2)' }}>
        <div className="section">
          <div className="diag-slash" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header-inner reveal">
              <p className="section-label">{t.trainers.label}</p>
              <h2 className="section-h2">{t.trainers.title}</h2>
            </div>
            <div className="trainers-grid">
              {trainers.map((tr, i) => (
                <div key={i} className="trainer-card reveal">
                  <div className="trainer-photo-wrap">
                    <img src={tr.photo} alt={tr.name} className="trainer-photo" />
                    <div className="trainer-photo-overlay" />
                    <div className="trainer-photo-glow" />
                  </div>
                  <div className="trainer-info">
                    <div className="trainer-name">{tr.name}</div>
                    <div className="trainer-title">{lang === 'tk' ? tr.title_tk : tr.title_ru}</div>
                    <div className="trainer-schedule-badges">
                      {tr.badges.map((b, j) => (
                        <div key={j} className="trainer-schedule-badge">
                          <Timer size={10} strokeWidth={2} style={{ display: 'inline', marginRight: '4px' }} />
                          {b}
                        </div>
                      ))}
                    </div>
                    <div className="trainer-spec">{lang === 'tk' ? tr.spec_tk : tr.spec_ru}</div>
                    <a href="#contact" className="trainer-cta" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                      <ArrowRight size={14} />
                      {t.trainers.btn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== PROGRAMS ===== */}
      <section>
        <div className="section">
          <div className="diag-slash" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header-inner reveal">
              <p className="section-label">{t.programs.label}</p>
              <h2 className="section-h2">{t.programs.title}</h2>
            </div>
            <div className="programs-grid">
              {programs.map((p, i) => (
                <div key={i} className="program-card reveal">
                  <div className="program-icon-wrap">
                    {p.Icon === IconYoga ? <IconYoga size={26} /> : <p.Icon size={26} strokeWidth={1.3} />}
                  </div>
                  <div className="program-name">{lang === 'tk' ? p.name_tk : p.name_ru}</div>
                  <div className="program-divider-line" />
                  <p className="program-desc">{lang === 'tk' ? p.desc_tk : p.desc_ru}</p>
                  <div className="program-meta">
                    <span className="program-duration">
                      <Timer size={12} strokeWidth={1.5} style={{ display: 'inline', marginRight: '4px', opacity: 0.7 }} />
                      {lang === 'tk' ? p.dur_tk : p.dur_ru}
                    </span>
                    <div className="intensity-dots">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span key={dot} className={`int-dot${dot <= p.intensity ? ' active' : ''}`} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== APP SECTION ===== */}
      <div className="section-full app-section">
        <div className="section">
          <div className="app-content">
            <div className="reveal-left">
              <p className="section-label">{lang === 'tk' ? 'Mobil App' : 'Мобильное приложение'}</p>
              <div className="app-title">
                <Smartphone size={32} strokeWidth={1.3} className="app-title-icon" />
                {t.app.title}
              </div>
              <p className="app-sub">{t.app.sub}</p>
              <div className="app-features">
                {t.app.features.map((f, i) => (
                  <div key={i} className="app-feature">
                    <Check size={14} className="app-feature-check" strokeWidth={2.5} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="store-btns">
                <a href="#" className="store-btn" onClick={(e) => e.preventDefault()}>
                  <span className="store-icon"><IconApple size={22} /></span>
                  <span className="store-info"><small>{t.app.apple_small}</small><strong>{t.app.apple}</strong></span>
                </a>
                <a href="#" className="store-btn" onClick={(e) => e.preventDefault()}>
                  <span className="store-icon"><IconPlayStore size={20} /></span>
                  <span className="store-info"><small>{t.app.google_small}</small><strong>{t.app.google}</strong></span>
                </a>
              </div>
            </div>
            <div className="reveal-right" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="phone-mockup">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-logo-row">
                    <div className="phone-logo-sm">G</div>
                    <span className="phone-logo-text">GÖROGLY GIRLS</span>
                  </div>
                  <div className="phone-widget">
                    <div className="phone-widget-title">{t.app.phone_workout}</div>
                    <div className="phone-widget-val">{t.app.phone_schedule}</div>
                  </div>
                  <div className="phone-widget">
                    <div className="phone-widget-title">{lang === 'tk' ? 'Abonement' : 'Абонемент'}</div>
                    <div className="phone-status"><span className="phone-status-dot" /><span className="phone-status-text">{t.app.phone_sub}</span></div>
                  </div>
                  <div className="phone-widget">
                    <div className="phone-widget-title">{lang === 'tk' ? 'Şu hepde' : 'Эта неделя'}</div>
                    <div className="phone-widget-val" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      3 {lang === 'tk' ? 'türgenleşik' : 'тренировки'}
                      <Check size={11} style={{ display: 'inline', marginLeft: '4px', color: 'var(--pink)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <section>
        <div className="section">
          <div className="diag-slash" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header-inner reveal">
              <p className="section-label">{t.testimonials.label}</p>
              <h2 className="section-h2">{t.testimonials.title}</h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((test, i) => (
                <div key={i} className="testimonial-card reveal">
                  <div className="test-stars">
                    {Array.from({ length: test.rating }).map((_, j) => (
                      <Star key={j} size={14} strokeWidth={0} fill="#E91E8C" />
                    ))}
                  </div>
                  <div className="test-result">{lang === 'tk' ? test.result_tk : test.result_ru}</div>
                  <p className="test-text">"{lang === 'tk' ? test.text_tk : test.text_ru}"</p>
                  <div className="test-author">
                    <div className="test-avatar">{test.name.charAt(0)}</div>
                    <div>
                      <div className="test-author-name">{test.name}</div>
                      <div className="test-branch">
                        <MapPin size={10} style={{ display: 'inline', marginRight: '3px', opacity: 0.6 }} />
                        {lang === 'tk' ? test.branch_tk : test.branch_ru}
                      </div>
                      <div className="test-months">{test.months} {t.testimonials.months}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO START ===== */}
      <div className="section-full steps-bg">
        <div className="section">
          <div className="section-header-inner reveal">
            <p className="section-label">{t.steps.label}</p>
            <h2 className="section-h2">{t.steps.title}</h2>
          </div>
          <div className="steps-grid">
            {[
              { Icon: Phone },
              { Icon: Dumbbell },
              { Icon: Crown },
            ].map(({ Icon }, i) => (
              <div key={i} className="step-card reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <span className="step-num">0{i + 1}</span>
                <div className="step-icon-wrap"><Icon size={28} strokeWidth={1.3} /></div>
                <div className="step-title">{t.steps.steps[i].title}</div>
                <p className="step-desc">{t.steps.steps[i].desc}</p>
                {i < t.steps.steps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CONTACT ===== */}
      <section id="contact">
        <div className="section">
          <div className="diag-slash" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header-inner reveal">
              <p className="section-label">{t.contact.label}</p>
              <h2 className="section-h2">{t.contact.title}</h2>
              <p className="section-sub">{t.contact.sub}</p>
            </div>
            <div className="contact-wrap">
              <div className="contact-info reveal-left">
                <div className="contact-info-title">{t.contact.direct}</div>
                <div className="quick-contacts">
                  {branches.map((b) => (
                    <a key={b.id} href={`tel:${b.tel}`} className="quick-contact-link">
                      <MapPin size={12} style={{ flexShrink: 0 }} />
                      <span>{lang === 'tk' ? b.name_tk : b.name_ru}: <strong>{b.phone}</strong></span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="form-card reveal-right">
                <div className={`form-success${formSuccess ? ' show' : ''}`}>
                  <div className="form-success-icon">
                    <Check size={32} strokeWidth={2.5} />
                  </div>
                  <div className="form-success-title">{t.contact.success_title}</div>
                  <p className="form-success-text" style={{ whiteSpace: 'pre-line' }}>
                    {t.contact.success_text_fn(formData.name || (lang === 'tk' ? 'Hormatly agza' : 'Уважаемый участник'), formData.branch || '—', formData.service || '—')}
                  </p>
                </div>
                {!formSuccess && (
                  <form onSubmit={handleSubmit}>
                    <div className="form-title">
                      <Dumbbell size={18} strokeWidth={2} style={{ display: 'inline', marginRight: '8px' }} />
                      {t.contact.form_title}
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.contact.name}</label>
                      <input type="text" className="form-input" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder={lang === 'tk' ? 'Adyňyz' : 'Ваше имя'} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.contact.phone}</label>
                      <input type="tel" className="form-input" required value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="+993 __ ______" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.contact.branch}</label>
                      <select className="form-select" required value={formData.branch} onChange={e => setFormData(p => ({ ...p, branch: e.target.value }))}>
                        <option value="">{t.contact.branch_placeholder}</option>
                        {branches.map((b) => <option key={b.id} value={lang === 'tk' ? b.name_tk : b.name_ru}>{lang === 'tk' ? b.name_tk : b.name_ru}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.contact.service}</label>
                      <div className="form-radio-group">
                        {t.contact.services_opts.map((s) => (
                          <label key={s} className="form-radio-label">
                            <input type="radio" name="service" value={s} checked={formData.service === s} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))} required />
                            {s}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.contact.time}</label>
                      <select className="form-select" value={formData.time} onChange={e => setFormData(p => ({ ...p, time: e.target.value }))}>
                        <option value="">—</option>
                        {t.contact.times.map((ti) => <option key={ti} value={ti}>{ti}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.contact.message}</label>
                      <textarea className="form-textarea" rows={2} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
                    </div>
                    <button type="submit" className="submit-btn">
                      {t.contact.submit}
                      <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#hero" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
                <img src={realLogo} alt="Görogly Girls" className="logo-img" />
                <div className="logo-text">GÖROGLY<span>GIRLS</span></div>
              </a>
              <p className="footer-tagline">{t.footer.tagline}</p>
              <div className="footer-social">
                <a href="https://instagram.com/goroglygitnness" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Instagram">
                  <Instagram size={17} strokeWidth={1.8} />
                </a>
                <a href="tel:+99312415311" className="footer-social-link" title="Phone">
                  <Phone size={17} strokeWidth={1.8} />
                </a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">{t.footer.nav_title}</div>
              <ul className="footer-links">
                {[['hero', 'home'], ['services', 'services'], ['schedule', 'schedule'], ['branches', 'branches'], ['contact', 'contact']].map(([id, key]) => (
                  <li key={key}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                    <ArrowRight size={11} style={{ display: 'inline', marginRight: '5px', opacity: 0.5 }} />
                    {t.nav[key as keyof typeof t.nav]}
                  </a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-title">{t.footer.branches_title}</div>
              <div className="footer-phone-list">
                {branches.map((b) => (
                  <a key={b.id} href={`tel:${b.tel}`} className="footer-phone-item">
                    <MapPin size={11} style={{ display: 'inline', marginRight: '5px', flexShrink: 0, opacity: 0.6 }} />
                    {lang === 'tk' ? b.name_tk : b.name_ru}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">{t.footer.copy}</span>
            <span className="footer-credit">{t.footer.credit} — <a href={`https://${t.footer.credit_link}`} target="_blank" rel="noopener noreferrer">{t.footer.credit_link}</a></span>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button className={`back-top${backTop ? ' visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <ChevronUp size={20} strokeWidth={2.5} />
      </button>
    </>
  );
}
