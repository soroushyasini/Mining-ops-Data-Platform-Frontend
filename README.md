# پلتفرم عملیات معدن — Mining Operations Data Platform Frontend

پلتفرم مدیریت زنجیره تأمین عملیات معدن طلا — یک اپلیکیشن تک‌صفحه‌ای (SPA) با رابط کاربری فارسی/RTL.

---

## فناوری‌های استفاده‌شده

| فناوری | نسخه | هدف |
|--------|-------|-----|
| React | 18 | فریم‌ورک اصلی |
| TypeScript | 5.x | تایپ‌سیفتی |
| Vite | 6.x | ابزار بیلد |
| MUI v6 | 6.x | کتابخانه UI با پشتیبانی کامل RTL |
| TanStack Query | 5.x | مدیریت state سرور |
| React Hook Form + Zod | | مدیریت فرم و ولیدیشن |
| Orval | | تولید خودکار کلاینت API از OpenAPI |
| date-fns-jalali | | پشتیبانی از تقویم شمسی |
| Zustand | | state مدیریت جهانی UI |
| React Router | 6.x | مسیریابی سمت کلاینت |
| vite-plugin-pwa | | پشتیبانی PWA |
| stylis-plugin-rtl | | تبدیل CSS به RTL |

---

## ساختار پروژه

```
src/
├── api/
│   ├── client.ts          # نمونه Axios با interceptors
│   └── generated/         # خروجی Orval (تولید شده، commit نمی‌شود)
├── config/
│   └── theme.ts           # تم MUI (RTL، فونت وزیرمتن، رنگ‌های سازمانی)
├── layout/
│   ├── AppLayout.tsx      # لایه اصلی (تصمیم بین سایدبار vs ناوبری پایین)
│   ├── Sidebar.tsx        # سایدبار دسکتاپ (از registry خوانده می‌شود)
│   ├── BottomNav.tsx      # ناوبری پایین موبایل
│   └── TopBar.tsx         # نوار برنامه
├── modules/
│   ├── registry.ts        # رجیستری مرکزی ماژول‌ها
│   ├── trucks/            # بارنامه‌های کامیون
│   ├── bunkers/           # حمل باکت
│   ├── grinding/          # دفتر آسیاب
│   ├── lab/               # آزمایشگاه
│   ├── payments/          # پرداخت‌ها
│   ├── drivers/           # رانندگان و خودروها
│   └── dashboard/         # داشبورد (مرحله ۵)
├── providers/
│   ├── QueryProvider.tsx  # TanStack Query
│   ├── ThemeProvider.tsx  # MUI + RTL CacheProvider
│   └── index.tsx          # ترکیب providers
├── router/
│   └── index.tsx          # React Router (از registry خوانده می‌شود)
├── shared/
│   ├── components/        # کامپوننت‌های مشترک
│   ├── hooks/             # hook های مشترک
│   └── types.ts           # نوع‌های مشترک
└── store/
    └── uiStore.ts         # Zustand (سایدبار، ماژول فعال)
```

---

## راه‌اندازی محلی

### پیش‌نیازها
- Node.js 20+
- npm 10+

### مراحل

```bash
# ۱. کلون پروژه
git clone https://github.com/soroushyasini/Mining-ops-Data-Platform-Frontend.git
cd Mining-ops-Data-Platform-Frontend

# ۲. نصب وابستگی‌ها
npm install

# ۳. کپی فایل محیطی
cp .env.example .env.development

# ۴. راه‌اندازی سرور توسعه
npm run dev
```

اپلیکیشن روی `http://localhost:5173` در دسترس خواهد بود.

---

## تولید کلاینت API

کلاینت API به‌صورت خودکار از OpenAPI schema بکند تولید می‌شود:

```bash
# مطمئن شوید بکند در دسترس است (http://172.16.2.31:8000)
npm run generate-api
```

فایل‌های تولیدشده در `src/api/generated/` قرار می‌گیرند و commit نمی‌شوند.

---

## بیلد Docker

### بیلد تصویر

```bash
docker build -t mining-ops-frontend:latest .
```

### اجرا با docker-compose

```bash
# با متغیر محیطی پیش‌فرض
docker-compose -f docker-compose.frontend.yml up -d

# با تنظیم URL سفارشی
VITE_API_BASE_URL=http://your-server:8000 docker-compose -f docker-compose.frontend.yml up -d
```

اپلیکیشن روی پورت `3000` در دسترس خواهد بود.

---

## دستورات مفید

```bash
npm run dev          # سرور توسعه
npm run build        # بیلد production
npm run preview      # پیش‌نمایش بیلد
npm run type-check   # بررسی TypeScript
npm run lint         # لینت کد
npm run generate-api # تولید کلاینت API
```

---

## سیستم ماژول

هر ماژول یک واحد مستقل است:
- `components/` — کامپوننت‌های UI خاص ماژول
- `hooks/` — TanStack Query hooks برای API
- `schemas/` — اسکیماهای Zod
- `types.ts` — انواع TypeScript
- `routes.tsx` — مسیرهای lazy-loaded
- `index.ts` — صادرات عمومی

رجیستری مرکزی در `src/modules/registry.ts` تمام ماژول‌ها را تعریف می‌کند. سایدبار و ناوبری پایین از این رجیستری می‌خوانند. در مرحله ۳ (احراز هویت)، سایدبار بر اساس مجوزهای کاربر فیلتر می‌شود.

---

## مراحل توسعه

| مرحله | هدف |
|-------|-----|
| ۱ (فعلی) | پایه پروژه: ناوبری، مسیریابی، RTL، PWA |
| ۲ | فرم‌های داده‌ورودی برای تمام ماژول‌ها |
| ۳ | احراز هویت و RBAC |
| ۴ | ویرایش و مدیریت رکوردها |
| ۵ | داشبورد و ویژوالیزیشن داده |
