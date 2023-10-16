import en_lng from './locales/en-US/translation.json';
import zh_lng from './locales/zh-CN/translation.json';

const resources = {
  zh: {
    translation: {
      ...zh_lng
    }
  },
  en: {
    translation: {
      ...en_lng
    }
  }
};
export { resources };
