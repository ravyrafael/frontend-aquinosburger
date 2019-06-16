import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import Header from '../components/header';
import SideBar from '../components/sidebar';

function App() {
  return (
    <BrowserRouter forceRefresh={false} >
      <Header />
      <SideBar />
      <div className="app-content">
      <Routes  />
      </div>
    </BrowserRouter >

  );
}

export default App;


