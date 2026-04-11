import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "Shop": "Shop",
          "About Us": "About Us",
          "FAQ": "FAQ",
          "Services": "Services",
          "Language": "Language",
          "Search": "Search",
          "Logout": "Logout",
          "ACCOUNT": "ACCOUNT",
          "Login": "Login",
          "Register": "Register",
          "Delete": "Delete",
          "Profile": "Profile",
          "Arabic": "Arabic",
          "English": "English",
          "WELCOME TO BEAUTY QUEEN": "WELCOME TO BEAUTY QUEEN",
          "REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,": "REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,",
          "AND MANAGE YOUR ORDERS AND RETURNS.": "AND MANAGE YOUR ORDERS AND RETURNS.",
          "LOG IN": "LOG IN",
          "CREATE ACCOUNT": "CREATE ACCOUNT",
          "DISCOVER EVERYTHING,": "DISCOVER EVERYTHING,",
          " YOUR WAY.":" YOUR WAY.",
          "Shop curated picks across fashion, home, and lifestyle with fast, secure shipping.":"Shop curated picks across fashion, home, and lifestyle with fast, secure shipping.",
          "START SHOPPING NOW!": "START SHOPPING NOW!",
          "Your premier all-in-one shopping destination, offering a curated selection of everything you need for your lifestyle.": "Your premier all-in-one shopping destination, offering a curated selection of everything you need for your lifestyle.",
          "From the latest trends to everyday essentials, we prioritize quality and convenience in every order.": "From the latest trends to everyday essentials, we prioritize quality and convenience in every order.",
          "Discover a seamless shopping experience where variety meets value, all in one place.": "Discover a seamless shopping experience where variety meets value, all in one place.",
           "Fast Delivery":"Fast Delivery",
           "Worldwide shipping for all products with secure packaging.":"Worldwide shipping for all products with secure packaging.",
          "24/7 Support":"24/7 Support",
          "Our team is available anytime to help with your inquiries.":"Our team is available anytime to help with your inquiries.",
          "Secure Payment":"Secure Payment",
          "Multiple secure payment methods for a safe shopping experience.":"Multiple secure payment methods for a safe shopping experience.", 

        }
      }, 
      ar: {
        translation: {
          "Home": "الرئيسية",
          "Shop": "متجر",
          "About Us": "من نحن",
          "FAQ": "الأسئلة الشائعة",
          "Services": "خدماتنا",
          "Language": "اللغة",
          "Search": "بحث",
          "Logout": "خروج",
          "ACCOUNT": "الحساب",
          "Login": "دخول",
          "Register": "تسجيل",
          "Delete": "حذف",
          "Profile": "الملف الشخصي",
          "Arabic": "عربي",
          "English": "انجليزي",
          "WELCOME TO BEAUTY QUEEN": "أهلاً بكم في بيوتي كوين",
          "REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,": "سجل في بيوتي كوين لحفظ عناوين التوصيل الخاصة بك،",
          "AND MANAGE YOUR ORDERS AND RETURNS.": "وإدارة طلباتك وعمليات الإرجاع.",
          "LOG IN": "دخول",
          "CREATE ACCOUNT": "انشاء حساب",
          "DISCOVER EVERYTHING,": "اكتشف كل شيء،",
          "YOUR WAY.":" على طريقتك.",
          "START SHOPPING NOW!": "ابدأ التسوق الآن!",
          "Your premier all-in-one shopping destination, offering a curated selection of everything you need for your lifestyle.": "وجهتك الأمثل للتسوق الشامل، حيث نقدم لك تشكيلة مختارة بعناية من كل ما تحتاجه لأسلوب حياتك.",
          "From the latest trends to everyday essentials, we prioritize quality and convenience in every order.": "من أحدث صيحات الموضة إلى أساسيات الحياة اليومية، نولي الجودة والراحة أولوية قصوى في كل طلب.",
          "Discover a seamless shopping experience where variety meets value, all in one place.": "اكتشف تجربة تسوق سلسة تجمع بين التنوع والقيمة، كل ذلك في مكان واحد.",
          "Shop curated picks across fashion, home, and lifestyle with fast, secure shipping.":"تسوقي تشكيلة مختارة بعناية من الأزياء والمنزل وأسلوب الحياة مع خدمة شحن سريعة وآمنة.",
        "Fast Delivery":"توصيل سريع",
        "Worldwide shipping for all products with secure packaging.":"شحن دولي لجميع المنتجات مع تغليف آمن.",
        "24/7 Support":"دعم دائم",
        "Our team is available anytime to help with your inquiries.":"فريقنا متوفر في أي وقت لمساعدتكم في استفساراتكم.",
        "Secure Payment":"الدفع الآمن",
        "Multiple secure payment methods for a safe shopping experience.":"طرق دفع آمنة متعددة لتجربة تسوق آمنة.",

        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;