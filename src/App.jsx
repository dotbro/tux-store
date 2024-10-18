import React from 'react';
import Navbar from './components/Navbar';
import Product from './Pages/Product';
import OrderForm from './Pages/OrderForm';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Product /> */}
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
