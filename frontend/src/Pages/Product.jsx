import { useState, useContext, useEffect } from 'react'
import MerchImg from '../assets/merch.jpg'
import { ProductContext } from '../ProductContext';
import PocketBase from 'pocketbase';


function Product() {
    const pb = new PocketBase('http://127.0.0.1:8090', { autoCancel: false });

    const { quantity, setQuantity, price, setPrice } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [productImg, setProductImg] = useState(null);
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
    useEffect(() => {
        fetchProd();
    }, []);


    async function fetchProd() {
        try {
            const record = await pb.collection('products').getOne('kkk06778qlpzhxv');
            const imageUrl = pb.getFileUrl(record, record.image);
            setProductImg(imageUrl);
            setProduct(record);
            console.log(record);
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>
            <div className='flex'>
                <div className='w-1/2 flex items-center flex-col p-10 text-center m-5 '>
                    <img src={productImg} alt="" className='w-1/2' />
                    <p className='font-thin italic'>{product ? product.name : "Loading product..."}
                    </p>
                </div>
                <div className='w-1/2 flex flex-col m-3 p-10 gap-3'>
                    <h3 className='text-4xl font-bold my-2'>{product ? product.name : "Loading product..."}</h3>

                    {product && (
                        <div
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    )}

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
                            <span className='text-yellow-300 text-3xl'>৳{product ? product.price : "Loading"}</span>
                        </h2>
                    </div>
                    <a className='text-2xl font-bold w-max bg-blue-600 px-4 py-2 rounded-md shadow-lg text-white flex items-center space-x-2' href='/order'>Buy Now!!</a>
                </div>
            </div >
        </>
    )
}

export default Product
