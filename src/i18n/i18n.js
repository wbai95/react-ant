import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './resources';

const initLangage = () => {
  let lang = localStorage.getItem('language') || navigator.language; // 获取浏览器的语言环境，兼容IE的写法
  if (lang) {
    lang = lang.substring(0, 2).toLowerCase(); // 截取前两位字符，并转化为小写
    return lang;
  } else {
    return 'en';
  }
};

i18n
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    resources, //资源初始化
    lng: initLangage(),
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false // this will do the magic
    },
    debug: false
  });

export default i18n;
