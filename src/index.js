import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import i18n from "i18next"; // npm i i18next
import { initReactI18next } from "react-i18next" // npm i react-i18next;
import translationsEn from "./i18n/locales/en";
import translationsRu from "./i18n/locales/ru";
import translationsAm from "./i18n/locales/am";
// jsfvuwegvfuwgevf

let language = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ru: { translation: translationsRu },
    am: { translation: translationsAm },
  },
  lng: language,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
