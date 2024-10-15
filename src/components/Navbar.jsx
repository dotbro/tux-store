const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-md px-4 py-2 flex items-center justify-around">
            <div className="text-2xl font-bold text-gray-800">
                <h1>Tux Store</h1>
            </div>

            <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
