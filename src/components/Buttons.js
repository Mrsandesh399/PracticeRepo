import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Buttons() {
  const [t, i18n] = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <nav style={{ width: '100%', backgroundColor: 'blue' }}>
        <button onClick={() => handleClick('en')}>English</button>
        <button onClick={() => handleClick('hi')}>Hindi</button>

        <button onClick={() => handleClick('ko')}>korean</button>
      </nav>
    </div>
  );
}
