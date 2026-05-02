// Cache for loaded translations
let translations = {};
const SUPPORTED_LANGS = ['en', 'pt', 'de', 'fr'];

// Load translation file dynamically
async function loadTranslation(lang) {
    if (translations[lang]) {
        return translations[lang];
    }

    try {
        const response = await fetch(`locales/${lang}.json`);
        if (!response.ok) throw new Error(`Failed to load ${lang}`);
        translations[lang] = await response.json();
        return translations[lang];
    } catch (error) {
        console.error(`Error loading translation for ${lang}:`, error);
        return null;
    }
}

async function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
        lang = 'en';
    }

    await loadTranslation(lang);

    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    updatePageContent(lang);
}

function getLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

    const browserLang = navigator.language.split('-')[0];
    if (SUPPORTED_LANGS.includes(browserLang)) {
        return browserLang;
    }
    return 'en';
}

function updatePageContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update copyright year
    const copyrightEl = document.querySelector('[data-i18n="copyright"]');
    if (copyrightEl) {
        copyrightEl.textContent = t.copyright.replace('{year}', new Date().getFullYear());
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', async function() {
    const lang = getLanguage();
    await setLanguage(lang);
});


