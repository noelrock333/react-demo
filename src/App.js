import React from 'react';
import './App.css';
import AppRoutes from './router';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header brandImageUrl="https://michelada.io/images/v3/logo.svg" />
      <AppRoutes />
    </div>
  );
}

export default App;
