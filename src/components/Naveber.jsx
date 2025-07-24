import { NavLink } from "react-router-dom";


const Naveber = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-xl font-bold text-black">Book Vibe</div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <li>
          <NavLink
            to="/"
            className="border border-green-500 text-green-600 px-3 py-1 rounded-md hover:bg-green-50"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/listedBooks" className="hover:text-black">
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/PagesToRead" className="hover:text-black">
            Pages to Read
          </NavLink>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex space-x-3">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm md:text-base">
          Sign In
        </button>
        <button className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-500 text-sm md:text-base">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Naveber;
