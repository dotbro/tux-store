import { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../ProductContext';
import PocketBase from 'pocketbase';


function Product() {
    const pb = new PocketBase('http://127.0.0.1:8090', { autoCancel: false });

    const { quantity, setQuantity, price, setPrice } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [productImg, setProductImg] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        async function fetchProd() {
            try {
                const record = await pb.collection('products').getOne('kkk06778qlpzhxv');
                const images = record.image;
                const imageUrls = images.map((image) => pb.getFileUrl(record, image));
                setPrice(record.price);
                setProductImg(imageUrls);
                setProduct(record);
                console.log(record);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        fetchProd();
    }, []);

    useEffect(() => {
        if (productImg.length > 0) {
            setSelectedImage(productImg[0]);
        }
    }, [productImg]);
    function Increase() {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setPrice(product.price * newQuantity);
    }

    function Decrease() {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setPrice(product.price * newQuantity);
        }
    }
    function handleChange(e) {

        const newQuantity = e.target.value;
        setQuantity(newQuantity);
        setPrice(product.price * newQuantity);
    }
    return (
        <>
            <div className='flex h-screen mt-10'>
                <div className='w-1/2 flex items-center flex-col p-10 text-center m-5 '>
                    <div className="flex flex-wrap">
                        <div className="flex flex-col space-y-4">
                            {productImg.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedImage === image ? 'border-blue-500' : 'border-gray-300'
                                        }`}
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>

                        <div className="ml-5">
                            {selectedImage ? (
                                <img
                                    src={selectedImage}
                                    alt="Selected product"
                                    className="w-96 h-auto object-cover rounded-md shadow-lg"
                                />
                            ) : (
                                <p>No image selected</p>
                            )}
                        </div>
                    </div>
                    <p className='mt-4 text-gray-500 italic'>{product ? product.name : "Loading product..."}
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
                                className='px-4 py-2 font-bold bg-gray-200'
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
                                className='px-4 py-2 bg-gray-300 font-bold text-gray-800'
                            >
                                +
                            </button>
                        </div>
                        <h2 className='text-2xl font-bold bg-blue-600 px-4 py-2 rounded-md shadow-lg text-white flex items-center space-x-2'>
                            <span className='text-white font-semibold text-3xl'>৳{product ? price : "Loading"}</span>
                        </h2>
                    </div>
                    <a className='text-2xl font-bold w-max bg-blue-600 px-4 py-2 rounded-md shadow-lg text-white flex items-center space-x-2' href='/order'>Buy Now!!</a>
                </div>
            </div >
        </>
    )
}

export default Product
