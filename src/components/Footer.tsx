import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, Linkedin, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Law Firm</span>
            </Link>
            <p className="text-gray-400">Providing expert legal services for a brighter tomorrow.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/attorneys" className="text-gray-400 hover:text-white">Attorneys</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400">123 Legal Street, Cityville, State 12345</p>
            <p className="text-gray-400">(123) 456-7890</p>
            <p className="text-gray-400">info@lawfirm.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Law Firm. All Rights Reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer