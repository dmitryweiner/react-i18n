import React from 'react';
import {FormattedMessage, IntlProvider} from 'react-intl';

let i18nConfig = {
  locale: 'ru',
  messages: {
    "home.welcome": "Добро пожаловать, {name}!",
    "home.bye": "Всего доброго!"
  }
};

export default function ReactIntlView() {
  return <>
    <h3>Библиотека React-Intl</h3>
    <IntlProvider
      locale={i18nConfig.locale}
      defaultLocale={i18nConfig.locale}
      messages={i18nConfig.messages}
    >
      <div>
        <FormattedMessage id="home.welcome" values={{name: "коллега"}}/>
      </div>
      <div>
        <FormattedMessage id="home.bye"/>
      </div>
    </IntlProvider>
  </>;
}
