import { useState } from 'react'
import MerchImg from './assets/merch.jpg'
import Navbar from './components/Navbar';
function App() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(280);

  function Increase() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setPrice(280 * newQuantity);
  }

  function Decrease() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setPrice(280 * newQuantity);
    }
  }
  function handleChange(e) {

    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    setPrice(280 * newQuantity);

  }

  return (
    <>
      <Navbar></Navbar>
      <div className='flex'>
        <div className='w-1/2 flex items-center flex-col p-10 text-center m-5 '>
          <img src={MerchImg} alt="" className='w-1/2' />
          <p className='font-thin italic'>Merch Image Black Edition</p>
        </div>
        <div className='w-1/2 flex flex-col m-3 p-10 gap-3'>
          <h3 className='text-4xl font-bold my-2'>Penguins Merch Exclusive</h3>
          <p>This is awesome t-shirt thats why you gotta buy it!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sequi cupiditate hic minus maxime saepe nihil ipsam illum dolores veritatis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, unde id. Possimus fugit voluptas debitis harum rem dignissimos nulla temporibus velit iusto, aliquam explicabo minima error, quo cumque qui quis, ipsum ab cupiditate non iure magnam laboriosam voluptates! Hic sequi, veritatis eos atque molestias dolore blanditiis optio perspiciatis assumenda ex ullam cum minus enim adipisci dignissimos quae! Nihil, ducimus quia?</p>

          <div className='flex items-center space-x-4 my-4'>
            <label className='font-bold text-xl'>Quantity</label>
            <div className='flex items-center border border-gray-400 rounded-md overflow-hidden shadow-md'>
              <button
                onClick={Decrease}
                className='px-4 py-2 font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 ease-in-out focus:outline-none active:scale-95'
              >
                -
              </button>
              <input
                type="number"
                className='w-16 p-2 text-center border-none outline-none focus:ring-2 focus:ring-blue-300'
                value={quantity}
                onChange={handleChange}
                min="1"
              />
              <button
                onClick={Increase}
                className='px-4 py-2 font-bold bg-yellow-500 text-gray-800 hover:bg-yellow-600 transition-colors duration-200 ease-in-out focus:outline-none active:scale-95'
              >
                +
              </button>
            </div>
            <h2 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 rounded-md shadow-lg text-white flex items-center space-x-2'>
              <span className='text-gray-200 line-through text-lg'>৳350/pc</span>
              <span className='text-yellow-300 text-3xl'>৳{price}</span>
            </h2>
          </div>
          <button className='text-2xl font-bold w-max bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 rounded-md shadow-lg text-white flex items-center space-x-2 '>Buy Now!!</button>
        </div>
      </div >
    </>
  )
}

export default App
