import React, {useState} from 'react';
import {FormattedDate, FormattedMessage, IntlProvider} from 'react-intl';
import messagesEN from '../i18n/en/messages.json';
import messagesRU from '../i18n/ru/messages.json';

let i18nConfigRU = {
  locale: 'ru',
  messages: messagesRU
};

let i18nConfigEN = {
  locale: 'en',
  messages: messagesEN
};

export default function ReactIntlView() {
  const [locale, setLocale] = useState(i18nConfigRU.locale);
  const [messages, setMessages] = useState(i18nConfigRU.messages);

  function switchLocale(locale: string) {
    setLocale(locale);
    switch (locale) {
      case i18nConfigEN.locale: setMessages(i18nConfigEN.messages); break;
      case i18nConfigRU.locale: setMessages(i18nConfigRU.messages); break;
      default: setMessages(i18nConfigEN.messages); break;
    }
  }

  return <>
    <h3>Библиотека React-Intl</h3>
    <IntlProvider
      locale={locale}
      defaultLocale={locale}
      messages={messages}
    >
      <div>
        <button onClick={() => switchLocale(i18nConfigRU.locale)}>RU</button>
        <button onClick={() => switchLocale(i18nConfigEN.locale)}>EN</button>
      </div>
      <div>
        <FormattedMessage id="home.welcome" values={{name: "X Æ A-Xii"}}/>
      </div>
      <div>
        <FormattedMessage id="home.bye"/>
      </div>
      <div>
        <FormattedDate
          value={new Date()}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </div>
    </IntlProvider>
  </>;
}
