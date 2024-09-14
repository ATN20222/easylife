import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: {
            logo: "Easy Life",
            home: "Home",
            about_us: "About Us",
            services: "Services",
            news: "News",
            contact_us: "Contact Us",
            login: "Login",
            register: "Register",
            english: "En",
            arabic: "Ar",
            solutions: "Solutions",
            clients: "Clients",
            careers: "Careers",
            we_help_you: "We Help You Have a Better Easy Life",
            // easy_life: "Easy Life",
            home_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus praesentium deleniti voluptate a laborum? Unde error quibusdam officiis et tempora ad, enim maiores dolores porro. Possimus distinctio excepturi porro.",
            get_started: "Get Started",
            cleaning_services_title: "Cleaning Services",
            cleaning_services_text: "From deep cleaning to regular maintenance, we've got you covered.",
            elderly_care_title: "Elderly Care",
            elderly_care_text: "Compassionate care for your loved ones, providing support and companionship.",
            child_care_title: "Child Care",
            child_care_text: "Reliable care that ensures your children's safety and happiness.",
            our_services:"Our Services",
            LearnMore:'Learn More',
    },
        },
        ar: {
            translation: {
            // logo: "الحياة السهلة",
            home: "الرئيسية",
            about_us: "من نحن",
            services: "الخدمات",
            news: "الأخبار",
            contact_us: "اتصل بنا",
            login: "الدخول",
            register: "إنشاء حساب",
            english: "En",
            arabic: "Ar",
            solutions: "الحلول",
            clients: "العملاء",
            careers: "الوظائف",
            we_help_you: "نساعدك في الحصول على حياة أفضل واسهل",
            home_description: "لوريم إيبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم.",
            get_started: "ابدأ الآن",
            cleaning_services_title: "خدمات التنظيف",
            cleaning_services_text: "من التنظيف العميق إلى الصيانة الدورية، نوفر لك كل ما تحتاج.",
            elderly_care_title: "رعاية كبار السن",
            elderly_care_text: "رعاية رحيمة لأحبائك، مع تقديم الدعم والرفقة.",
            child_care_title: "رعاية الأطفال",
            child_care_text: "رعاية موثوقة لضمان سلامة وسعادة أطفالك.",
            our_services:'خدماتنا',
            LearnMore:' اقرأ المزيد'
        },
        },
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
    escapeValue: false,
    },
});

export default i18n;
