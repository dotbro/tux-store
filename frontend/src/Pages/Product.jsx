import { useState, useContext } from 'react'
import MerchImg from '../assets/merch.jpg'
import { ProductContext } from '../ProductContext';

function Product() {

    const { quantity, setQuantity, price, setPrice } = useContext(ProductContext);

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
            <div className='flex'>
                <div className='w-1/2 flex items-center flex-col p-10 text-center m-5 '>
                    <img src={MerchImg} alt="" className='w-1/2' />
                    <p className='font-thin italic'>Merch Image Black Edition</p>
                </div>
                <div className='w-1/2 flex flex-col m-3 p-10 gap-3'>
                    <h3 className='text-4xl font-bold my-2'>Penguins Merch Exclusive</h3>
                    <p>
                        Introducing the Placeholder T-Shirt – where comfort meets quality. Made from 100% premium combed cotton, this tee is a staple for any wardrobe. With a fabric weight of 180 GSM, it strikes the perfect balance between durability and breathability, making it suitable for all-day wear in any season.

                        The Placeholder T-Shirt features double-stitched seams for added durability, ensuring it keeps its shape and softness wash after wash. The relaxed fit and pre-shrunk material guarantee a comfortable fit that lasts. Available in a range of timeless colors, this tee is perfect for layering or wearing on its own. The fabric is OEKO-TEX® certified, meaning it’s free from harmful chemicals, so you can wear it with confidence.

                        Whether you’re hitting the gym, running errands, or just relaxing at home, the Placeholder T-Shirt has got you covered. Experience the perfect blend of style, comfort, and quality with this essential wardrobe piece.
                        <br />
                        <br /> - <b>Material:</b> 100% premium combed cotton
                        <br /> - <b>Fabric Weight:</b> 180 GSM for a perfect balance of durability and breathability
                        <br /> - <b>Fit:</b> Relaxed and pre-shrunk for consistent comfort and shape retention
                        <br /> - <b>Durability:</b> Double-stitched seams for enhanced longevity
                        <br /> - <b>Certification:</b> OEKO-TEX® certified, ensuring the fabric is free from harmful chemicals
                        <br /> - <b>Versatility:</b> Available in a range of neutral colors, ideal for layering or wearing solo
                        <br /> - <b>Care:</b> Machine washable, maintaining softness and color wash after wash
                    </p>

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
                        <h2 className='text-2xl font-bold bg-blue-600 px-4 py-2 rounded-md shadow-lg text-white flex items-center space-x-2'>
                            <span className='text-gray-200 line-through text-lg'>৳350/pc</span>
                            <span className='text-yellow-300 text-3xl'>৳{price}</span>
                        </h2>
                    </div>
                    <a className='text-2xl font-bold w-max bg-blue-600 px-4 py-2 rounded-md shadow-lg text-white flex items-center space-x-2' href='/order'>Buy Now!!</a>
                </div>
            </div >
        </>
    )
}

export default Product
