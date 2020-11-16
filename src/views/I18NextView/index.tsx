import React from 'react';
import {I18nextProvider, Trans, useTranslation} from 'react-i18next';
import i18n from './i18n';

class Component extends React.Component {
  render() {
    return <>
      <div>
        <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
      <div>
        <Trans values={{name: "X Æ A-Xii"}}>home.welcome</Trans>
      </div>
      <div>
        <Trans>home.bye</Trans>
      </div>
    </>;
  }
}

export function I18NextView() {
  const { i18n } = useTranslation();
  return <>
    <h3>Библиотека i18next</h3>
    <I18nextProvider i18n={ i18n }>
      <Component />
    </I18nextProvider>
  </>;
}
