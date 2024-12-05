const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-md px-4 py-5 flex items-center justify-around">
            <div className="text-2xl font-bold text-gray-800">
                <a href="/">
                    <h1>Tux Store</h1>
                </a>
            </div>

            <div className="hidden md:flex space-x-8">
                <a href="/" className="text-black hover:text-gray-700">Home</a>
                <a href="https://t.me/The_PenguinsClub" className="text-black hover:text-gray-700">Support</a>
            </div>
        </nav>
    );
};

export default Navbar;
