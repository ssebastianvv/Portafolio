// src/app.tsx
import React from 'react';
import MyComponent from './components/MyComponent';
import LanguageSwitcher from './components/LanguageSwitcher';

const App: React.FC = () => {
  return (
    <div>
      <LanguageSwitcher />
      <MyComponent />
    </div>
  );
};

export default App;
