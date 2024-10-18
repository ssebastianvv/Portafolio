// src/components/MyComponent.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default MyComponent;
