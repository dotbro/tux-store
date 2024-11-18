import React, { useState, useContext } from "react";
import PaymentModal from "../components/PaymentModal";
import { ProductContext } from "../ProductContext";
import PocketBase from "pocketbase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const OrderForm = () => {
    const pb = new PocketBase("http://localhost:8090");

    const { quantity, price } = useContext(ProductContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        telegramUsername: "",
        size: "L",
        color: "Black",
        trxid: ""
    });

    const payload = {
        ...formData,
        quantity,
        price,
    }
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await pb.collection('order').create(payload);
            console.log(payload);
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                address: "",
                phone: "",
                telegramUsername: "",
                size: "L",
                color: "Black",
                trxid: ""
            })
        } catch (err) {
            setError("Failed to submit order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-3"
            >
                <h2 className="text-2xl font-semibold mb-4">Order Your T-Shirt</h2>
                {success && <p className="text-green-500">Order placed successfully!</p>}
                {error && <p className="text-red-500">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="address">
                        Address
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your full address"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="e.g., +1234567890"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="telegramUsername">
                        Telegram Username
                    </label>
                    <input
                        type="text"
                        id="telegramUsername"
                        name="telegramUsername"
                        value={formData.telegramUsername}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="e.g., @yourusername"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="size">
                        Size
                    </label>
                    <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="color">
                        Color
                    </label>
                    <select
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="telegramUsername">
                        Transaction ID from bKash
                    </label>
                    <div className="flex gap-3 m-1">
                        <input
                            type="text"
                            id="trxid"
                            name="trxid"
                            value={formData.trxid}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="e.g., @yourusername"
                        />
                        <button type="button" onClick={() => setOpen(true)} className="bg-blue-500 rounded-xl p-3 text-white font-semibold">💸 Payment</button>
                        <PaymentModal open={open} onClose={() => setOpen(false)} />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Place Order
                </button>
            </form>
            <Footer />
        </>

    );
};

export default OrderForm;
