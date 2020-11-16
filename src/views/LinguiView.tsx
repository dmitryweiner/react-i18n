import React from 'react';
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react';
import { Trans } from '@lingui/react';
import { en, ru } from 'make-plural/plurals';
import messagesEN from '../i18n/en/messages.json';
import messagesRU from '../i18n/ru/messages.json';

i18n.load('ru', messagesRU);
i18n.activate('ru');
i18n.loadLocaleData({
  en: { plurals: en },
  ru: { plurals: ru },
});

export default function LinguiView() {

  function switchLocale(locale: string) {
    switch (locale) {
      case 'ru': i18n.load('ru', messagesRU); break;
      case 'en': i18n.load('en', messagesEN); break;
      default: i18n.load('ru', messagesRU); break;
    }
    i18n.activate('ru');
  }

  return <>
    <h3>Библиотека Lingui</h3>
    <I18nProvider i18n={i18n}>
      <div>
        <button onClick={() => switchLocale('ru')}>RU</button>
        <button onClick={() => switchLocale('en')}>EN</button>
      </div>
      <div>
        <Trans id="home.welcome" values={{ name: "X Æ A-Xii" }}/>
      </div>
      <div>
        <Trans id="home.bye" />
      </div>
    </I18nProvider>
  </>;
}
