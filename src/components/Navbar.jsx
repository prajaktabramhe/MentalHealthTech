import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) =>
    location.pathname === path
      ? "bg-gray-200 text-[#297194] px-4 py-2 rounded-lg"
      : "hover:text-[#EC993D]";

  return (
    <nav className="bg-[#297194] shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#ffffff] text-white p-2 rounded-lg">✨</div>
          <h1 className="text-xl font-semibold text-[#D1E1F7]">
            MindfulSpace
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-[#E7F2F7] items-center">
          <li><Link to="/" className={linkStyle("/")}>Home</Link></li>
          <li><Link to="/mood" className={linkStyle("/mood")}>Mood Tracker</Link></li>
          <li><Link to="/journal" className={linkStyle("/journal")}>Journal</Link></li>
          <li><Link to="/chatbot" className={linkStyle("/chatbot")}>AI Companion</Link></li>
          <li><Link to="/dashboard" className={linkStyle("/dashboard")}>Dashboard</Link></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-[#E7F2F7]">
          <li><Link to="/" onClick={() => setIsOpen(false)} className={linkStyle("/")}>Home</Link></li>
          <li><Link to="/mood" onClick={() => setIsOpen(false)} className={linkStyle("/mood")}>Mood Tracker</Link></li>
          <li><Link to="/journal" onClick={() => setIsOpen(false)} className={linkStyle("/journal")}>Journal</Link></li>
          <li><Link to="/chatbot" onClick={() => setIsOpen(false)} className={linkStyle("/chatbot")}>AI Companion</Link></li>
          <li><Link to="/dashboard" onClick={() => setIsOpen(false)} className={linkStyle("/dashboard")}>Dashboard</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;