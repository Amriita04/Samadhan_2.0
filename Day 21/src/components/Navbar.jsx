import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Shivani Lodhi</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}