import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Product from './Pages/Product';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
