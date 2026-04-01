# 💪 REPLIT AI AGENT — GÖROGLY GIRLS FITNESS CLUB
## Hakyky Müşderi | Iki Dilli (Türkmen + Rus) | Aşgabat, Türkmenistan

---

## ⚠️ IŇ MÖHÜM BAŞLANGYÇ TALAPLARY

Bu hakyky müşderiniň hakyky saýty. Her setir, her piksel, her söz — kämil bolmaly.  
Başlamazdan öň bu tutuş dokumenti doly oka. Planlashdir. Soňra gur.  
**Ýalňyşlyk kabul edilmeýär.**

---

## 🎯 TASLAMANYŇ MAZMUN SYNYNA

**Müşderi:** Görogly Girls Fitness Club  
**Görnüş:** Zenanlar üçin ýöriteleşdirilen fitnes merkezi tory  
**Şäher:** Aşgabat, Türkmenistan  
**Şahalaryň sany:** 7 şaha  
**Dilller:** Türkmen dili + Rus dili (ikisi hem doly, hatasyiz)  
**Platforma:** Bir `index.html` faýl — hiç hili framework/backend ýok

---

## 🛠️ TEHNIKI GURLUŞ

```
Faýl:        index.html  (HTML + CSS + JS — ählisi bir ýerde)
Animasiýa:   GSAP 3 + ScrollTrigger (CDN)
Şrift:       Google Fonts (CDN)
Ikonlar:     Lucide Icons (CDN) + özboluşly CSS şekiller
Dil ulgamy:  Doly JS-esasly i18n (türkmen / rus)
Ölçeg:       2500 – 4000 setir
```

---

## 🌐 DIL ULGAMY — I18N GURLUŞY

Bu saýt **Türkmen** we **Rus** dilinde işlemeli.

```javascript
const i18n = {
  tk: {
    nav: {
      home: 'Baş Sahypa', services: 'Hyzmatlar', schedule: 'Tertip',
      prices: 'Bahalar', branches: 'Şahalar', contact: 'Habarlaş'
    },
    hero: {
      badge: 'Diňe Zenanlar Üçin · Aşgabat',
      h1_1: 'Güýçli.',
      h1_2: 'Sagdyn.',
      h1_3: 'Erkin.',
      sub: 'Görogly Girls — 7 şahada, hünärmen tälimçiler bilen, diňe siz üçin döredilen fitnes merkezi.',
      cta1: 'Synag Türgenleşigine Ýazyl',
      cta2: 'Bahalar →'
    },
    // ... [ähli bölümler üçin]
  },
  ru: {
    nav: {
      home: 'Главная', services: 'Услуги', schedule: 'Расписание',
      prices: 'Цены', branches: 'Филиалы', contact: 'Контакты'
    },
    hero: {
      badge: 'Только для женщин · Ашхабад',
      h1_1: 'Сильная.',
      h1_2: 'Здоровая.',
      h1_3: 'Свободная.',
      sub: 'Görogly Girls — 7 филиалов, профессиональные тренеры, фитнес-клуб созданный только для вас.',
      cta1: 'Записаться на пробную',
      cta2: 'Цены →'
    },
    // ... [ähli bölümler üçin]
  }
};

// Aktiv dil
let currentLang = localStorage.getItem('gg_lang') || 'tk';

// Dil çalşanda ähli t('key') elementleri täzele
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gg_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = getNestedValue(i18n[lang], key);
    if (val) el.textContent = val;
  });
  // HTML lang atributyny täzele
  document.documentElement.lang = lang === 'tk' ? 'tk' : 'ru';
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, k) => acc?.[k], obj);
}

// Sahypa ýüklenende dili ulan
document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
```

**HÖKMAN TALAP:** Sahypanyň her ýazgysı `data-i18n="..."` atributy bilen bellenilmeli.  
Dil çalşykdyryjy nawigasiýada görünmeli — `[ТМ | РУ]` düwmejikleri.

---

## 🎨 DIZAÝN UGRY — GÜÝÇLI ZEN AÝAL

### Estetika Filosofiýasy:
**"Güýç owadan bolup biler."**

Görogly Girls zenanlar üçin. Dizaýn güýçli hem mährem, edermen hem inçe bolmaly.  
Gara fon — güýji aňladýar. Gülgüne/gyzyl aksentler — aýallygy aňladýar.  
Geometrik diagonal kesimleri — hereket we dinamikayi aňladýar.

**Bu saýt açylanda aýal:** *"Bu meniň ýerim. Bu meňziň mekanyna."* — diýmeli.

### Reňk Ulgamy:
```css
:root {
  /* Esasy */
  --pink:         #E91E8C;   /* Görogly Girls markasynyň gülgünesi */
  --pink-light:   #FF6BB5;   /* Açyk gülgüne */
  --pink-dark:    #B5156E;   /* Garaňky gülgüne */
  --pink-rgb:     233, 30, 140;

  --red:          #E53E3E;   /* Güýç gyzyl */
  --red-rgb:      229, 62, 62;

  /* Fon */
  --bg:           #080608;   /* Iň garaňky gara */
  --bg2:          #100C10;   /* Ikinji fon */
  --surface:      #160E16;   /* Kart fony */
  --surface2:     #1E1420;   /* Ýokary kart */

  /* Tekst */
  --text:         #FAF7FA;   /* Ýyly ak */
  --text-muted:   #9B7A9B;   /* Soluk */
  --text-bright:  #FFFFFF;

  /* Goşmaça */
  --gold:         #D4A843;   /* Premium altyn (bahalar üçin) */
  --border:       rgba(233,30,140, 0.18);
  --border-glow:  rgba(233,30,140, 0.45);
}
```

### Şrift Saýlawy (HÖKMAN):
```
Display/Logo:   'Montserrat'      — güýçli, sport, anyk
Headings:       'Barlow Condensed'— dinamiki, editorial, fitnes duýgusy
Body:           'DM Sans'         — arassa, okalýar
Numbers:        'Oswald'          — baha, san, güýçli
```

### Wizual Gol Elementi — "DIAGONAL SLASH":
Sahypanyň her uly bölümünde, yşyklandyryş hökmünde: **45 dereje diagonal çyzgy** gülgüne gradient reňkde, pes opasitetde.  
Bu Görogly Girls-iň nyşanynda "G" harpy meňzeş forma.

```css
/* Her bölüm üçin diagonal bezeg */
.section::after {
  content: '';
  position: absolute;
  top: -20%;  right: -10%;
  width: 60%;  height: 140%;
  background: linear-gradient(
    -45deg,
    transparent 45%,
    rgba(var(--pink-rgb), 0.04) 45%,
    rgba(var(--pink-rgb), 0.04) 55%,
    transparent 55%
  );
  pointer-events: none;
  z-index: 0;
}
```

---

## 📋 ÄHLI BÖLÜMLER — DOLY MAGLUMAT BILEN

---

### BÖLÜM 0: HEAD, META, DİNAMIK FAVICON

```html
<!DOCTYPE html>
<html lang="tk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>Görogly Girls — Aşgabadyň Fitnes Kluby | Диňe Zenanlar Üçin</title>
  <meta name="description" content="Görogly Girls — Aşgabatda 7 şaha, zenanlar üçin ýöriteleşdirilen fitnes merkezi. 
    Gym, Pilates Reformer, hünärmen tälimçiler. Synag türgenleşigi 100 M.">
  <meta name="theme-color" content="#E91E8C">
  <!-- Open Graph -->
  <meta property="og:title" content="Görogly Girls Fitness Club">
  <meta property="og:description" content="Aşgabatda 7 şaha. Diňe zenanlar üçin.">
  <meta property="og:type" content="website">
```

**Dinamik Favicon (JS-SVG):**
```javascript
// Görogly Girls logosyna meňzeş: G harpy + gülgüne tegelek
const svgFav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#E91E8C"/>
  <text x="50%" y="68%" text-anchor="middle" 
        font-family="Montserrat,sans-serif" font-size="18" 
        font-weight="900" fill="white">G</text>
</svg>`;
const blob = new Blob([svgFav], {type:'image/svg+xml'});
const link = document.createElement('link');
link.rel = 'icon';
link.href = URL.createObjectURL(blob);
document.head.appendChild(link);
```

---

### BÖLÜM 1: NAWIGASIÝA

**Özboluşly dizaýn:** Çep ýylgyrymly logo + merkez linkler + sag dil çalşykdyryjy + CTA.

**Logo (HTML-CSS bilen):**
```html
<div class="logo">
  <div class="logo-circle">
    <!-- Görogly Girls logosyna meňzeş -->
    <span class="logo-go">GO</span>
    <span class="logo-rogly">ROGLY</span>
    <span class="logo-girls">GIRLS</span>
  </div>
</div>
```

```css
.logo-circle {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: linear-gradient(145deg, #E91E8C, #B5156E);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  box-shadow: 0 0 20px rgba(233,30,140,0.4);
  line-height: 1;
}
.logo-go    { font: 900 9px/1 'Montserrat',sans-serif; color:#fff; }
.logo-rogly { font: 900 8px/1 'Montserrat',sans-serif; color:#fff; }
.logo-girls { font: 900 7px/1 'Montserrat',sans-serif; color:rgba(255,255,255,0.85); }
```

**Nawigasiýa linkleri:**
```
Baş / Главная  ·  Hyzmatlar / Услуги  ·  Tertip / Расписание  
·  Bahalar / Цены  ·  Şahalar / Филиалы  ·  Habarlaş / Контакты
```

**Sag taraf:**
```html
<!-- Dil çalşykdyryjy -->
<div class="lang-switcher">
  <button onclick="setLang('tk')" class="lang-btn" id="btn-tk">ТМ</button>
  <span>|</span>
  <button onclick="setLang('ru')" class="lang-btn" id="btn-ru">РУ</button>
</div>

<!-- CTA -->
<a href="#contact" class="nav-cta" data-i18n="nav.cta">Ýazyl / Записаться</a>
```

**Scroll soňra:**
```css
.nav.scrolled {
  background: rgba(8, 6, 8, 0.94);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(233,30,140, 0.22);
  box-shadow: 0 4px 40px rgba(0,0,0,0.5),
              0 0 80px rgba(233,30,140, 0.04);
}
```

**Aktip dil düwmejigi:**
```css
.lang-btn.active {
  color: var(--pink);
  font-weight: 700;
}
```

**Mobil:** Hamburger menýu → doly ekran overlay, logo uly merkezde, linkler uly.  
Mobil menýu aşagy: Dil çalşykdyryjy + telefon belgisi.

---

### BÖLÜM 2: HERO — DYM ETDİRİJİ GIRIŞ

**Maksat:** Zenan açan wagty dem almaly, "Bu meniň ýerim" diýmeli.

**Fon Gatlamalary (CSS only, surat ýok):**
```css
/* 1. Esasy gara */
background: var(--bg);

/* 2. Uly gülgüne nebula — çep aşak */
.hero-nebula-1 {
  position:absolute; width:80vw; height:80vw; 
  border-radius:50%;
  background: radial-gradient(circle,
    rgba(233,30,140,0.12) 0%, transparent 65%);
  bottom: -30%;  left: -30%;
  animation: nebula1 15s ease-in-out infinite;
}
/* 3. Ownuk gülgüne — sag ýokarda */
.hero-nebula-2 {
  width: 40vw; height: 40vw;
  background: radial-gradient(circle,
    rgba(229,62,62,0.08) 0%, transparent 65%);
  top: -10%; right: -10%;
  animation: nebula2 20s ease-in-out infinite;
}
/* 4. Nokta gözeneği */
background-image: radial-gradient(
  circle, rgba(233,30,140,0.07) 1px, transparent 1px);
background-size: 28px 28px;

/* 5. Diagonal slash bezeg */
/* 6. Aşakda: çep tarapdan sag tarapa diagonal SVG bölüji */
```

**Mazmun — Çep agyr layout (desktop):**

```
[ÇEPDE — 55%]

[Ownuk animirleýän badge]
♀  Diňe Zenanlar Üçin · 7 Şaha · Aşgabat

[Barlow Condensed, 6–9rem, uppercase, ýollar bilen]
GÜÝÇLI.
SAGDYN.
ERKIN.

[Inçe gülgüne divider: ──────── ♥ ────────]

[DM Sans, muted, 1.1rem]
Görogly Girls — Aşgabadyň iň uly 
zenanlar fitnes tory. 7 şaha, hünärmen
tälimçiler, Gym we Pilates Reformer.

[İki düwme]
[💪 Synag Türgenleşigine Ýazyl →]    [Bahalary Gör]

[Ynandyryjy 4 maglumat — inçe gülgüne çyzyk bilen bölünen]
✦ 7 Şaha    ✦ 100 M Synag    ✦ Diňe Aýallar    ✦ 24/7 Goldaw

[SAGDA — 45%]
[Ýüzýän statistika kartlary — 3 sany]
```

**Ýüzýän Kartlar (Hero sag):**

```javascript
const heroCards = [
  {
    icon: '💪',
    stat: '7',
    label_tk: 'Şaha Aşgabatda',
    label_ru: 'Филиалов в Ашхабаде',
    float: '4s'
  },
  {
    icon: '👩',
    stat: '1000+',
    label_tk: 'Agza Zenan',
    label_ru: 'Участниц',
    float: '5.5s'
  },
  {
    icon: '🏆',
    stat: '100 M',
    label_tk: 'Synag Türg.',
    label_ru: 'Пробная тр.',
    float: '3.5s'
  }
];
```

**Hero Girişi (GSAP):**
```javascript
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .from('.nav',            { y: -80, opacity: 0, duration: 0.7 })
  .from('.hero-badge',     { x: -50, opacity: 0, duration: 0.5 }, '-=0.3')
  .from('.hero-line',      {
      y: '120%', opacity: 0,
      stagger: { amount: 0.4 },
      duration: 0.8, ease: 'power4.out'
    }, '-=0.2')
  .from('.hero-divider',   { scaleX: 0, opacity: 0, duration: 0.6 }, '-=0.2')
  .from('.hero-body',      { y: 30, opacity: 0, duration: 0.5 }, '-=0.2')
  .from('.hero-btn',       { y: 25, opacity: 0, stagger: 0.15,
                             ease: 'back.out(2)', duration: 0.5 }, '-=0.2')
  .from('.hero-trust',     { opacity: 0, y: 15, stagger: 0.08 }, '-=0.2')
  .from('.hero-float-card',{ x: 80, opacity: 0, stagger: 0.2,
                             ease: 'back.out(1.5)', duration: 0.7 }, '-=0.5');
```

---

### BÖLÜM 3: STATISTIKA ZOLAGY

Full-width, `background: linear-gradient(to right, var(--bg2), var(--surface), var(--bg2))`.  
Ýokary we aşak: 1px gülgüne gradient çyzyk.

```
[Sanlar count-up bilen]
♀ 1000+          7              100 M           5+ ýyl
Agza Zenan    Şaha Aşgabatda  Synag Bahasy    Tejribe
```

---

### BÖLÜM 4: HYZMATLAR — "GYM & PILATES"

**Başlyk:**
```
Biziň Hyzmatlarymyz
```

**Iki sany uly hyzmat kartoçkasy — ýan-ýana:**

#### KARTA 1 — FITNESS ZALY

```
[Uly gülgüne aksentli kart — garaňky gradient fon]

💪  FITNESS ZALY
    Güýç we kardio türgenleşigi

Türkmen:
Iň häzirki zaman enjamlar bilen enjamlaşdyrylan 
fitness zaly. Güýç türgenleşigi, kardio bölümi, 
bedenterbiýe we has köp.

Rus:
Тренажёрный зал оснащён современным оборудованием.
Силовая тренировка, кардиозона, фитнес и многое другое.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[BAHALAR TABLISASY]
┌─────────────────────────────────────────────┐
│                           BAHASY / ЦЕНА     │
│  Synag türgenleşigi / Пробная тренировка    │
│                                    100 M    │
│  14 türgenleşige (aýlyk) / 14 тр. в месяц  │
│                                    350 M    │
│  Aýlyk çäksiz / Безлимит месяц              │
│                                    500 M    │
├─────────────────────────────────────────────┤
│             BAHA      ARZANLADYŞ / СКИДКА   │
│  Ýyllyk çäksiz / Годовой безлимит           │
│              6.000 M   ➜   2.400 M 🔥       │
│  Toraýn Ýyllyk RED / Сетевая RED            │
│              9.000 M   ➜   3.600 M 🔥       │
└─────────────────────────────────────────────┘

[INSTRUKTOR HYZMATLARY]
┌─────────────────────────────────────────────┐
│  Synag / Пробная               50 M         │
│  Aýlyk / Месячная             150 M         │
│  Şahsy synag / Личная пробная 250 M         │
│  Şahsy aýlyk / Личная месяч. 2.500 M        │
└─────────────────────────────────────────────┘

Şkafçik kärendesi / Аренда шкафчика: 200 M/aý

[💪 Şu Gün Ýazyl]
```

#### KARTA 2 — PILATES REFORMER

```
[Uly gülgüne-dykyz kart, çep tarafda — MEŞHUR badge]

🧘  PILATES REFORMER
    Häzirki zaman Pilates enjamy bilen

Türkmen:
Pilates Reformer — bedenini döretmek we 
güýçlendirmek üçin iň netijeli usullaryň biri.
Hünärmen instruktorlar ýolbaşçylygynda.

Rus:
Pilates Reformer — один из самых эффективных 
методов для формирования и укрепления тела.
Под руководством профессиональных инструкторов.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[PILATES BAHALAR]
┌─────────────────────────────────────────────┐
│  Synag (topar) / Пробное (группа)  200 M    │
│  Aýlyk (topar) / Месяц (группа) 1.000 M    │
├─────────────────────────────────────────────┤
│  Şahsy (1 adam) / Личное (1 чел) 4.000 M   │
│  Şahsy (2 adam) / Личное (2 чел) 5.000 M   │
│  Şahsy synag / Личное пробное      400 M    │
└─────────────────────────────────────────────┘

📍 Diýar TM 15 ýol (Zenanlar / Женский)
   +993 12 415311

[🧘 Pilates Sapaga Ýazyl]
```

**Kart Dizaýny:**
- Garaňky kart, gülgüne çep çyzgy (3px)
- Bahalar tablisasy: `surface2` fon, inçe gülgüne çarçuwa
- Arzanladyş bahalar: Gyzyl gülgüne reňkde, `🔥` belligi bilen
- Hover: Kart ýokaryk galýar, çyzyk ýagtylaýar

---

### BÖLÜM 5: GÜNDELIK TERTIP (SCHEDULE) — PILATES

**Başlyk:**
```
Pilates Dersleri Tertibi
Расписание занятий Pilates
```

**Tab ulgamy — iki gün topary:**

```
[DUŞENBE - ÇARŞENBE - ANNA / ПН - СР - ПТ]    [SIŞENBE - PENŞENBE - ŞENBE / ВТ - ЧТ - СБ]
```

**Tertip maglumatlary (HÖKMAN DOGRY GIRIZILMELI):**

```javascript
const schedule = {
  'mnwf': [ // Duşenbe, Çarşenbe, Anna (ПН-СР-ПТ)
    { time: '10:00–11:00', teacher: 'Ekaterina', type: 'group' },
    { time: '11:00–12:00', teacher: 'Ekaterina', type: 'group' },
    { time: '12:00–13:00', teacher: 'Ekaterina', type: 'group' },
    { time: '13:15–14:15', teacher: 'Jahana',    type: 'group' },
    { time: '17:30–18:30', teacher: 'Ýana',      type: 'group' },
    { time: '18:30–19:30', teacher: 'Ýana',      type: 'group' },
    { time: '19:30–20:30', teacher: 'Ýana',      type: 'group' },
  ],
  'tts': [ // Sişenbe, Penşenbe, Şenbe (ВТ-ЧТ-СБ)
    { time: '12:00–13:00', teacher: 'Nadezhda',  type: 'group' },
    { time: '17:30–18:30', teacher: 'Ekaterina', type: 'group' },
    { time: '18:30–19:30', teacher: 'Ekaterina', type: 'group' },
    { time: '20:30–21:30', teacher: 'Jahana',    type: 'group' },
  ]
};
```

**Tertip Setiriniň Dizaýny:**
```
[Wagt — Oswald şrift, gülgüne]   [Instruktor ady]   [Bosh yer / Doly badge]   [Ýazyl düwme]
10:00–11:00                       Ekaterina          ✓ Bar ýer                  [→]
```

- Her satyryň hover-da: Gülgüne çep çyzgy peýda bolýar + "Ýazyl" düwmesi görünýär
- Wagt: Gülgüne öwüşgin bilen uly
- Instruktor ady: Bold, ak
- Sessiýa dolulygyna görä renk üýtgeýär (ýaşyl/gyzyl)

**Mobilde:** Tab düwmeleri uly, tertip liste görnüşinde.

---

### BÖLÜM 6: 7 ŞAHA — DOLY MAGLUMAT

**Başlyk:**
```
Şahalarymyz
Наши Филиалы

[Sub]
Aşgabadyň her künjünde siz üçin ýerimiz bar.
В каждом районе Ашхабада есть наш филиал.
```

**7 şahanyň ählisi — dogry maglumatlar bilen:**

```javascript
const branches = [
  {
    id: 1,
    name_tk: 'Üniwermag Şahasy',
    name_ru: 'Филиал Универмаг',
    area_tk: 'Üniwermag ýakynynda',
    area_ru: 'Рядом с Универмагом',
    phone: '+993 12 942771',
    tel_link: '+99312942771',
    services: ['gym'],
    emoji: '🏢',
    open: '07:00 – 22:00'
  },
  {
    id: 2,
    name_tk: '6-njy Mikroraýon',
    name_ru: '6-й Микрорайон',
    area_tk: '6-njy mikroraýon',
    area_ru: '6 микрорайон',
    phone: '+993 12 286719',
    tel_link: '+99312286719',
    services: ['gym'],
    emoji: '🏗️',
    open: '07:00 – 22:00'
  },
  {
    id: 3,
    name_tk: 'Çehow Şahasy',
    name_ru: 'Филиал Чехова',
    area_tk: 'Çehow köçesi',
    area_ru: 'Улица Чехова',
    phone: '+993 12 414296',
    tel_link: '+99312414296',
    services: ['gym'],
    emoji: '🌆',
    open: '07:00 – 22:00'
  },
  {
    id: 4,
    name_tk: 'Gülzümin Şahasy',
    name_ru: 'Филиал Гульземин',
    area_tk: 'Gülzümin etrap',
    area_ru: 'Район Гульземин',
    phone: '+993 12 903706',
    tel_link: '+99312903706',
    services: ['gym'],
    emoji: '🏘️',
    open: '07:00 – 22:00'
  },
  {
    id: 5,
    name_tk: 'Diýar TM — ZENANLAR',
    name_ru: 'Диар ТМ — ЖЕНСКИЙ',
    area_tk: 'Seydi köç. 15 ýol, TM Diýar',
    area_ru: 'ул. Сейди, 15 этап, ТЦ Диар',
    phone: '+993 12 415311',
    tel_link: '+99312415311',
    services: ['gym', 'pilates'],
    special_tk: '⭐ Pilates Reformer hem bar!',
    special_ru: '⭐ Здесь есть Pilates Reformer!',
    emoji: '⭐',
    highlight: true,
    open: '08:00 – 21:30'
  },
  {
    id: 6,
    name_tk: 'Rysga Bank Şahasy',
    name_ru: 'Филиал Рысгал Банк',
    area_tk: 'Rysga bank ýakynynda',
    area_ru: 'Рядом с Рысгал Банком',
    phone: '+993 12 964992',
    tel_link: '+99312964992',
    services: ['gym'],
    emoji: '🏦',
    open: '07:00 – 22:00'
  },
  {
    id: 7,
    name_tk: 'Syýahat Myhmanhanasy',
    name_ru: 'Гостиница Турист',
    area_tk: 'Syýahat myhmanhanasy ýakynynda',
    area_ru: 'Рядом с гостиницей Турист',
    phone: '+993 12 343668',
    tel_link: '+99312343668',
    services: ['gym'],
    emoji: '🏨',
    open: '07:00 – 22:00'
  }
];
```

**Şaha Kartoçkasy Dizaýny:**

```
┌─────────────────────────────────────────┐
│  [Nomer badge: 01]   [Emoji]  [Hyzmat taglar: GYM / PILATES] │
│                                         │
│  [Şaha ady — Barlow Condensed, uly]     │
│  [Etrap/ýer ady — muted]                │
│                                         │
│  ─────────────────────────             │
│  📞 +993 12 XXXXXX                     │
│  ⏰ 07:00 – 22:00                      │
│                                         │
│  [Jaň Et düwmesi]  [Kartalarda Gör →]  │
└─────────────────────────────────────────┘
```

**Şaha 5 (Diýar TM — Zenanlar)** — aýratyn bellenilmeli:
- Uly, parlak kartoçka
- Gülgüne çarçuwa + glow
- "Pilates Reformer hem bar!" ýörite badge
- Abzals ýokaryk galydyrylgan (CSS translate -8px)

**Grid:** 3 sütun desktop (3+4 bölüp), 2 sütun tablet, 1 sütun mobil.

**HÖKMAN:** Her şahadaky "Jaň Et" düwmesi `href="tel:+99312XXXXXX"` bilen dogry baglanyşyk.  
Mobilde bu düwme basylanda — göni jaň açylmaly.

---

### BÖLÜM 7: TÄLIMÇILER — INSTRUKTORLAR

**Başlyk:**
```
Biziň Instruktorlarymyz
Наши Инструкторы
```

**4 instruktor kartoçkasy (Pilates Reformer derslerindäki hakyky instruktorlar + Gym):**

```javascript
const trainers = [
  {
    name: 'Ýekaterina',
    title_tk: 'Pilates Reformer Instruktory',
    title_ru: 'Инструктор Pilates Reformer',
    schedule_tk: 'Duş-Çar-Anna | Siş-Penş',
    schedule_ru: 'Пн-Ср-Пт | Вт-Чт',
    sessions: [
      { days: 'ПН-СР-ПТ', times: ['10:00–11:00', '11:00–12:00', '12:00–13:00'] },
      { days: 'ВТ-ЧТ', times: ['17:30–18:30', '18:30–19:30'] }
    ],
    spec_tk: 'Pilates Reformer, Beden Formasy, Oňurga saglygy',
    spec_ru: 'Pilates Reformer, Формирование тела, Здоровье позвоночника',
    emoji: '🧘',
    gradient: 'linear-gradient(145deg, #1a0510, #2d0a1e)'
  },
  {
    name: 'Ýana',
    title_tk: 'Pilates Instruktory',
    title_ru: 'Инструктор Pilates',
    schedule_tk: 'Duş-Çar-Anna',
    schedule_ru: 'Пн-Ср-Пт',
    sessions: [
      { days: 'ПН-СР-ПТ', times: ['17:30–18:30', '18:30–19:30', '19:30–20:30'] }
    ],
    spec_tk: 'Agşam sapaklary, Dinamiki Pilates, Güýçlendirme',
    spec_ru: 'Вечерние занятия, Динамический Pilates, Укрепление',
    emoji: '💫',
    gradient: 'linear-gradient(145deg, #140a1a, #200e28)'
  },
  {
    name: 'Jahana',
    title_tk: 'Pilates Instruktory',
    title_ru: 'Инструктор Pilates',
    schedule_tk: 'Duş-Çar-Anna | Siş-Penş-Şenb',
    schedule_ru: 'Пн-Ср-Пт | Вт-Чт-Сб',
    sessions: [
      { days: 'ПН-СР-ПТ', times: ['13:15–14:15'] },
      { days: 'ВТ-ЧТ-СБ', times: ['20:30–21:30'] }
    ],
    spec_tk: 'Günortanky we agşam sapaklary, Ynjalyk',
    spec_ru: 'Дневные и вечерние занятия, Расслабление',
    emoji: '🌸',
    gradient: 'linear-gradient(145deg, #0a1020, #101828)'
  },
  {
    name: 'Nadezhda',
    title_tk: 'Pilates Instruktory',
    title_ru: 'Инструктор Pilates',
    schedule_tk: 'Sişenbe, Penşenbe, Şenbe',
    schedule_ru: 'Вт, Чт, Сб',
    sessions: [
      { days: 'ВТ-ЧТ-СБ', times: ['12:00–13:00'] }
    ],
    spec_tk: 'Günortanky sapaklary, Esasy Pilates',
    spec_ru: 'Дневные занятия, Базовый Pilates',
    emoji: '🌿',
    gradient: 'linear-gradient(145deg, #051510, #0a2018)'
  }
];
```

**Instruktor Kartoçkasy:**
- Gradient fon, uly emoji ýokardan, mährem duýgy
- At, wezipe, ýöriteleşme
- Sapak tertibi: Kiçi badge hökmünde
- "Ýazyl" düwmesi hover-da görünýär
- Hover: 3D perspektif tilt (CSS rotateY/X ±4deg)

---

### BÖLÜM 8: PROGRAMLAR BÖLÜMI — ÖTÜMİŇ HAREKET

**Başlyk:**
```
Görogly Girls-da Näme Öwrenip Bilersiňiz?
Что вы можете освоить в Görogly Girls?
```

**6 programma kartoçkasy:**

```javascript
const programs = [
  {
    emoji: '🏋️',
    name_tk: 'Güýç Türgenleşigi',
    name_ru: 'Силовые тренировки',
    desc_tk: 'Häzirki zaman trenažýorlar bilen myşsa gurluşy we güýç gazanmak. Hünärmen instruktor goldawy.',
    desc_ru: 'Набор мышечной массы и развитие силы на современных тренажёрах. Поддержка профессионального инструктора.',
    intensity: 5,
    duration_tk: '45-60 min',
    duration_ru: '45-60 мин'
  },
  {
    emoji: '🏃',
    name_tk: 'Kardio Bölümi',
    name_ru: 'Кардио зона',
    desc_tk: 'Ýürek-damar ulgamyňyzy güýçlendiriň, kaloriýa ýakyn. Беговые дорожки, велотренажёры.',
    desc_ru: 'Укрепление сердечно-сосудистой системы, сжигание калорий. Беговые дорожки, велотренажёры.',
    intensity: 3,
    duration_tk: '30-60 min',
    duration_ru: '30-60 мин'
  },
  {
    emoji: '🧘',
    name_tk: 'Pilates Reformer',
    name_ru: 'Pilates Reformer',
    desc_tk: 'Özboluşly Pilates enjamy bilen beden formasy, ýeňillik we güýç. Diňe Diýar şahasymyzda.',
    desc_ru: 'Формирование тела, гибкость и силы с помощью реформера. Только в нашем филиале Диар.',
    intensity: 2,
    duration_tk: '50-60 min',
    duration_ru: '50-60 мин'
  },
  {
    emoji: '🔥',
    name_tk: 'HIIT & Aerobika',
    name_ru: 'HIIT & Аэробика',
    desc_tk: 'Ýokary intensiwli interval türgenleşigi. Gysga wagtda maksimal netije.',
    desc_ru: 'Высокоинтенсивные интервальные тренировки. Максимальный результат за короткое время.',
    intensity: 5,
    duration_tk: '30-45 min',
    duration_ru: '30-45 мин'
  },
  {
    emoji: '💆',
    name_tk: 'Stretching & Ýeňillik',
    name_ru: 'Растяжка & Гибкость',
    desc_tk: 'Bedeniňizi ýeňilleşdiriň, myşsalaryňyzy dikeldip beriň. Bogunlara we arka goldaw.',
    desc_ru: 'Расслабление тела, восстановление мышц. Поддержка суставов и спины.',
    intensity: 1,
    duration_tk: '45 min',
    duration_ru: '45 мин'
  },
  {
    emoji: '👩‍🏫',
    name_tk: 'Şahsy Türgenleşik',
    name_ru: 'Персональные тренировки',
    desc_tk: 'Instruktoryň size ýörite düzen programması. Çalt we takyk netije.',
    desc_ru: 'Программа тренировок, составленная специально для вас. Быстрый и точный результат.',
    intensity: 4,
    duration_tk: 'Ylalaşyk',
    duration_ru: 'По договор.'
  }
];
```

**Intensiwlik ölçegi:**
```javascript
// Her kart aşagynda: 5 nokatlyk intensiwlik görkeziji
function renderIntensity(level) {
  return Array.from({length: 5}, (_, i) => 
    `<span class="int-dot ${i < level ? 'active' : ''}"></span>`
  ).join('');
}
```

---

### BÖLÜM 9: MOBİL APPLIKASIÝA

**Şekiller peýda bolýar:**
```
[Çepde]
📱 Görogly Girls Mobil App

IOS we Android üçin elýeterli!

• Sapak tertibini gör we ýazyl
• Abonementiňi dolandir
• Tälimçiňe habar ýolla
• Netijeleriňi yzarla

[App Store düwmesi]  [Google Play düwmesi]
(Iki düwme hem stilleşdirilen)

[Sagda]
Telefon mockup (CSS bilen çekilmeli):
— Garaňky telefon çarçuwasy
— Ekranda: Görogly Girls dashboard
  • Logo ýokarda
  — Günüň türgenleşigi
  — Sapak tertibi
  — Abonement ýagdaýy
```

**App Store / Google Play düwmeleri:**
```html
<!-- App Store -->
<a href="#" class="store-btn apple">
  <span class="store-icon">🍎</span>
  <span>
    <small>App Store-da ýükle</small>
    <strong>App Store</strong>
  </span>
</a>
<!-- Google Play -->
<a href="#" class="store-btn google">
  <span class="store-icon">▶</span>
  <span>
    <small>Google Play-de ýükle</small>
    <strong>Google Play</strong>
  </span>
</a>
```

---

### BÖLÜM 10: MÜŞDERI TESWIRLER

**Başlyk:**
```
Agzalarymyz Näme Diýýär?
Что говорят наши участницы?
```

**6 teswir kartoçkasy — masonry görnüşi:**

```javascript
const testimonials = [
  {
    name: 'Aýna Gurbanowa',
    months: 8,
    result_tk: '12 kg azaldym',
    result_ru: 'Похудела на 12 кг',
    text_tk: 'Görogly Girls-a gelmezden öň sport bilen hiç hili gatnaşygym ýokdy. Instruktorlar örän sabyrly we goldawçy. 8 aýda özümi tanamadym!',
    text_ru: 'До Görogly Girls я вообще не занималась спортом. Инструкторы очень терпеливые и поддерживающие. За 8 месяцев себя не узнала!',
    branch_tk: 'Üniwermag şahasy',
    branch_ru: 'Филиал Универмаг',
    rating: 5
  },
  {
    name: 'Maral Orazowa',
    months: 12,
    result_tk: 'Pilates bilen täze başladym',
    result_ru: 'Начала новую жизнь с Pilates',
    text_tk: 'Pilates Reformer — düşünjesi ýokdy, indi bolsa onsyz ýaşap bilemok. Ýekaterina hanym hünärmen we mährem. Diýar şahasy iň gowy!',
    text_ru: 'О Pilates Reformer не знала ничего, теперь не могу без него. Екатерина — профессионал и очень добрый человек. Филиал Диар лучший!',
    branch_tk: 'Diýar TM şahasy',
    branch_ru: 'Филиал Диар ТМ',
    rating: 5
  },
  {
    name: 'Gülälek Hojamyradowa',
    months: 6,
    result_tk: 'Belim sagaldy',
    result_ru: 'Спина перестала болеть',
    text_tk: 'Pilates-e geçenimden bäri belim agyrmasy doly geçdi. Nadezhda hanym hünärmenligine we alada beredişine minnetdar.',
    text_ru: 'С тех пор как начала Pilates, спина перестала болеть. Благодарна Надежде за профессионализм и заботу.',
    branch_tk: 'Diýar TM — Pilates',
    branch_ru: 'Диар ТМ — Pilates',
    rating: 5
  },
  {
    name: 'Leýla Saparowa',
    months: 14,
    result_tk: 'Her gün gelýärin',
    result_ru: 'Прихожу каждый день',
    text_tk: 'Toraýn kart alyp gymmat bolar öýdüpdim. Ýyllyk arzanladyş ähli zady çözdi. Indi Rysga bank şahasyna her gün gelýärin.',
    text_ru: 'Думала сетевая карта будет дорого. Скидка на годовой всё решила. Теперь каждый день хожу в филиал Рысгал.',
    branch_tk: 'Rysga bank şahasy',
    branch_ru: 'Филиал Рысгал Банк',
    rating: 5
  },
  {
    name: 'Ogulnar Durdyýewa',
    months: 3,
    result_tk: 'Özüme ynam artdy',
    result_ru: 'Выросла уверенность в себе',
    text_tk: 'Görogly Girls diňe zenanlar üçin bolany üçin has rahat duýýaryn. Synag türgenleşigi 100 M bilen başladym, indi çäksiz abonementi bar.',
    text_ru: 'В Görogly Girls чувствую себя комфортнее, потому что только для женщин. Начала с пробной за 100 М, теперь безлимит.',
    branch_tk: 'Çehow şahasy',
    branch_ru: 'Филиал Чехова',
    rating: 5
  },
  {
    name: 'Mährijemal Annaýewa',
    months: 18,
    result_tk: 'Iň gowy karar',
    result_ru: 'Лучшее решение',
    text_tk: '6-njy mikroraýon şahasy öýüme ýakyn. Instruktorlar hemişe goldaw berýär. Görogly Girls — meniň ikinji öýüm!',
    text_ru: 'Филиал 6 микрорайона рядом с домом. Инструкторы всегда поддерживают. Görogly Girls — мой второй дом!',
    branch_tk: '6-njy Mikroraýon şahasy',
    branch_ru: 'Филиал 6 Микрорайон',
    rating: 5
  }
];
```

---

### BÖLÜM 11: NÄHILI BAŞLAP BOLAR? — 3 ÄDIM

```
[Ädim 1]              [Ädim 2]              [Ädim 3]
📞 Jaň et             💪 Synaga gel          🌟 Agza bol!
Ýakyn şahasy          100 M synag            Saňa laýyk
saýla we jaň et.      türgenleşigi et.       paket saýla.
```

---

### BÖLÜM 12: HABARLAŞMAK FORMY + ÄHLI ŞAHALAR

**Başlyk:**
```
Habarlaşmak / Контакты

Islän şahymyza ýazylmak üçin
aşakdaky formy doldur!
```

**Form meýdanlar:**
```
HÖKMAN:
✦ Adyňyz / Ваше имя *                 → text
✦ Telefon belgiňiz / Номер телефона * → tel input (+993 prefiksi)
✦ Haýsy şaha? / Какой филиал? *       → select (7 şaha sanawy)
✦ Haýsy hyzmat? / Какая услуга? *     → radio:
  ○ Fitnes Zaly / Тренажёрный зал
  ○ Pilates Reformer (diňe Diýar TM / только Диар ТМ)
  ○ Şahsy instruktor / Персональный инструктор
✦ Dil / Язык *                        → radio: [Türkmen] [Русский]

ISLEGLER:
✦ Haýsy wagt amatly? / Когда удобно?  → select: Ertir/Утро | Günorta/День | Agşam/Вечер
✦ Habar / Сообщение                   → textarea (2 setir)
```

**Iberiş düwmesi:**
```html
<button class="submit-btn">
  💪 Ýazyl / Записаться →
</button>
```

**Üstünlikli iberme:**
```
✅ MINNETDAR! / СПАСИБО!

[Ady], saňa tizden jaň ederis!
[Имя], скоро вам позвоним!

Saýlan şahan: [Şaha ady]
Hyzmat: [Saýlan hyzmat]

Görogly Girls-da seni garşylamagy 
sabyrsyzlyk bilen garaşýarys! 💪
```

**Aşakda — Ähli şahalaryň telefon sanawy (dikligine lista):**
```html
<div class="quick-contacts">
  <h3>Göni Jaň Et / Позвонить напрямую</h3>
  <!-- 7 şaha, her biri clickable tel: link -->
  <a href="tel:+99312942771">📍 Üniwermag: +993 12 942771</a>
  <a href="tel:+99312286719">📍 6 Mikroraýon: +993 12 286719</a>
  <!-- ... 7 şahanyň hemmesi -->
</div>
```

---

### BÖLÜM 13: FOOTER

```
┌──────────────────────────────────────────────────────────┐
│  [Ýokarda gülgüne gradient çyzyk]                        │
│                                                          │
│  [GÖROGLY GIRLS Logo + tagline]   [Nawigasiýa]  [Şahalar]│
│  Diňe Zenanlar Üçin /             Baş / Главная  1. Univ │
│  Только для женщин                Hyzmatlar...   2. 6mkr │
│                                                  ...     │
│  [Sosial mediýa ikonlar — gülgüne reňkde]               │
│  Instagram: @goroglygitnness                             │
│                                                          │
│  📞 Ähli şahalar: [kompakt liste]                        │
│                                                          │
│  © 2025 Görogly Girls. Ähli hukuklar goragly.           │
│  ─────────────────────────────────────────────          │
│  Bu saýt 🛠️ Ýeňil Web Agentligi tarapyndan döredildi     │
│                                          yenil.ru        │
└──────────────────────────────────────────────────────────┘
```

---

## 🎭 ANIMASIÝA DOLY SANAWY

### GSAP Sahypa Açylyş (0–2s):
```javascript
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
tl
  .from('.nav',           { y:-80, opacity:0, duration:0.7 })
  .from('.hero-badge',    { x:-50, opacity:0, duration:0.5 }, '-=0.3')
  .from('.hero-line',     { y:'130%', opacity:0, stagger:{amount:0.45},
                            duration:0.85, ease:'power4.out' }, '-=0.3')
  .from('.hero-divider',  { scaleX:0, opacity:0, duration:0.6 }, '-=0.2')
  .from('.hero-body',     { y:30, opacity:0, duration:0.5 }, '-=0.2')
  .from('.hero-btn',      { y:25, opacity:0, stagger:0.15,
                            duration:0.5, ease:'back.out(2)' }, '-=0.2')
  .from('.hero-trust',    { opacity:0, y:15, stagger:0.08 }, '-=0.2')
  .from('.hero-float-card',{ x:80, opacity:0, stagger:0.2,
                              ease:'back.out(1.5)', duration:0.7 }, '-=0.5');
```

### CSS Animasiýalar:
```css
@keyframes nebula1 {
  0%,100% { transform: translate(0,0) scale(1); }
  50%     { transform: translate(5%,3%) scale(1.1); }
}
@keyframes nebula2 {
  0%,100% { transform: translate(0,0) scale(1); }
  50%     { transform: translate(-4%,-3%) scale(1.08); }
}
@keyframes floatCard {
  0%,100% { transform: translateY(0px) rotate(0deg); }
  33%     { transform: translateY(-14px) rotate(1deg); }
  66%     { transform: translateY(-6px) rotate(-0.5deg); }
}
@keyframes pinkGlow {
  0%,100% { box-shadow: 0 0 20px rgba(233,30,140,0.35), 
                        0 0 60px rgba(233,30,140,0.1); }
  50%     { box-shadow: 0 0 40px rgba(233,30,140,0.65), 
                        0 0 100px rgba(233,30,140,0.2); }
}
@keyframes diagonalSlide {
  from { background-position: 0% 0%; }
  to   { background-position: 200% 200%; }
}
@keyframes scheduleReveal {
  from { opacity:0; transform:translateX(-20px); }
  to   { opacity:1; transform:translateX(0); }
}
```

---

## 📱 MOBIL TALAPLARY (HÖKMAN)

```css
.hero-h1   { font-size: clamp(3rem, 13vw, 8rem); line-height: 1.0; }
.section-h2 { font-size: clamp(1.8rem, 7vw, 3.5rem); }
.body-text  { font-size: clamp(0.9rem, 4vw, 1.1rem); }
.price-big  { font-size: clamp(1.5rem, 6vw, 2.5rem); }

body { overflow-x: hidden; }
*, *::before, *::after { box-sizing: border-box; }
button, a { min-height: 44px; }

.section { padding: clamp(3.5rem, 9vw, 7rem) clamp(1rem, 5vw, 2rem); }
```

**Mobil üýtgeşmeler:**
- Hyzmat kartlary: Tekli sütun, doly ini
- Şaha kartlary: 2 sütun (kiçi) ýa-da tekli
- Tertip: Tab ulgamy, her gün toparyna aýratyn
- "Jaň Et" düwmeleri — has uly, has ýagty
- Footer: Doly tekli sütun

**ÝÖRITE MOBIL ÜÇIN:** Her şahanyň kartynda "📞 Jaň Et" düwmesi görünmeli we `tel:` baglanyşyk işlemeli.

---

## ✅ HIL BARLAG SANAWY

### Maglumatyň dogurlygy:
- [ ] 7 şahanyň ähli telefon belgileri dogry girizilen
- [ ] Pilates Reformer diňe Diýar TM şahasyna degişli bildirildi
- [ ] Ähli bahalar tablisasynda dogry görünýär
- [ ] Arzanladyş bahalar (Ýyllyk) gülgüne/gyzyl reňkde görünýär
- [ ] Pilates tertibi (4 instruktor, 2 gün topary) dogry
- [ ] App Store we Google Play baglanyşyk düwmeleri bar

### Dil:
- [ ] Türkmen dili dogry we hatasyiz
- [ ] Rus dili dogry we hatasyiz
- [ ] Dil çalşykdyryjy [ТМ | РУ] işleýär
- [ ] Dil saýlama localStorage-da saklanýar
- [ ] Sahypa täzeden açylanda soňky dil ýüklenmeli

### Mobillilik:
- [ ] 375px we 390px ekranda gorizontal syrylma ýok
- [ ] "Jaň Et" düwmeleri mobilde `tel:` baglanyşyk bilen işleýär
- [ ] Nawigasiýa mobilde hamburger görünýär
- [ ] Ähli kart teksti aşmaýar

### Animasiýa:
- [ ] GSAP hero animasiýasy işleýär
- [ ] Scroll animasiýalar işleýär
- [ ] Stat count-up animasiýa işleýär
- [ ] Tab geçişleri animirleýär

---

## 🚀 REPLIT AGENTINE SON SÖZ

**Bu hakyky müşderiniň hakyky saýty.**  
Bu Görogly Girls üçin ilkinji professional saýty bolar.  
Zenan müşderileri bu saýty görende şuny duýmaly:  
*"Bu meniň ýerim. Bu meňziň mekany. Ertir giderin."*

Ähli maglumat dogry girizilmeli:  
7 şaha, 7 telefon belgisi, 4 pilates instruktory,  
3 baha bölümi, 2 dil — ählisi hatasyiz.

**Bir `index.html`. Türkmen + Rus. Göni işleýär.**  
**Gülgüne + Gara. Güýçli + Mährem. Premium + Ynanymly.**

Gur ony. Kämillige ýetir. Görogly Girls-y buýsandyr. 💪🌸
