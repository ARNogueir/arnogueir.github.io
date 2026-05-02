/**
 * Configuration & Constants
 * Centraliza todos os valores mágicos e configurações
 */

const CONFIG = {
    // Idiomas
    LANGUAGES: {
        EN: 'en',
        PT: 'pt',
        DE: 'de',
        FR: 'fr'
    },

    SUPPORTED_LANGS: ['en', 'pt', 'de', 'fr'],
    DEFAULT_LANG: 'en',

    // Temas
    THEMES: {
        LIGHT: 'light',
        DARK: 'dark'
    },

    // LocalStorage Keys
    STORAGE_KEYS: {
        LANGUAGE: 'language',
        THEME: 'theme'
    },

    // Paths
    PATHS: {
        LOCALE_PREFIX: 'locales/'
    },

    // Messages
    ERROR_MESSAGES: {
        TRANSLATION_LOAD_FAILED: 'Falha ao carregar traduções',
        INVALID_LANGUAGE: 'Idioma não suportado',
        INVALID_THEME: 'Tema não válido'
    }
};

Object.freeze(CONFIG);

