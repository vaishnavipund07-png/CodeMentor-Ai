import { Link } from "react-router-dom";
import { FaRobot, FaMoon } from "react-icons/fa";



function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <FaRobot className="text-3xl" />
          <span>CodeMentor AI</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition duration-300">
            Home
          </Link>

          <Link
            to="/ai-search"
            className="hover:text-indigo-600 transition duration-300"
          >
            AI Search
          </Link>

          <Link
            to="/interview"
            className="hover:text-indigo-600 transition duration-300"
          >
            Interview
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-indigo-600 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="hover:text-indigo-600 transition duration-300"
          >
            Profile
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <FaMoon />
          </button>

          <Link
            to="/login"
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;