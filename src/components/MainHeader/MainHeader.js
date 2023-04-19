import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Buttons from '../Buttons';
import { useTranslation } from 'react-i18next';

const MainHeader = (props) => {
  const { t } = useTranslation();
  return (
    <header className={classes['main-header']}>
      <h1>{t('header')}</h1>
      <Buttons />
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
