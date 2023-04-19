import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const { t } = useTranslation();
  return (
    <Card className={classes.home}>
      <h1>{t('welcome')}</h1>
    </Card>
  );
};

export default Home;
