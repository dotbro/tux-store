const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-md px-4 py-2 flex items-center justify-around">
            <div className="text-2xl font-bold text-gray-800">
                <h1>Tux Store</h1>
            </div>

            <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="/Support" className="text-gray-700 hover:text-gray-900">Support</a>
            </div>
            <a href="/Dashboard" className="bg-blue-600 p-4 rounded-lg text-white">Dashboard</a>
        </nav>
    );
};

export default Navbar;
