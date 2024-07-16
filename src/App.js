import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './component/Nav';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}


export default App;