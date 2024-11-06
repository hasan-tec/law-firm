import React from 'react'
import { Link } from 'react-router-dom'
import { Scale } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Scale className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Law Firm</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link to="/attorneys" className="text-gray-600 hover:text-blue-600">Attorneys</Link></li>
            <li><Link to="/case-studies" className="text-gray-600 hover:text-blue-600">Case Studies</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
        <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Get Legal Help
        </Link>
      </div>
    </header>
  )
}

export default Header