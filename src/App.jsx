import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Calculator from './pages/Calculator';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Calculator />
      </Layout>
    </LanguageProvider>
  );
}

export default App;