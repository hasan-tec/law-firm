import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const ContactForm = () => (
  <form className="space-y-4">
    <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
    <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" />
    <select className="w-full p-2 border rounded">
      <option value="">Select a Service</option>
      <option value="business">Business Law</option>
      <option value="family">Family Law</option>
      <option value="criminal">Criminal Defense</option>
    </select>
    <textarea placeholder="Message" rows={4} className="w-full p-2 border rounded"></textarea>
    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
      Send Message
    </button>
  </form>
)

const ContactInfo = () => (
  <div className="space-y-4">
    <div className="flex items-center">
      <MapPin className="h-6 w-6 text-blue-600 mr-2" />
      <p>123 Legal Street, Cityville, State 12345</p>
    </div>
    <div className="flex items-center">
      <Phone className="h-6 w-6 text-blue-600 mr-2" />
      <p>(123) 456-7890</p>
    </div>
    <div className="flex items-center">
      <Mail className="h-6 w-6 text-blue-600 mr-2" />
      <p>info@lawfirm.com</p>
    </div>
    <div className="mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176767606813!2d-73.98823492346994!3d40.748440671388325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1709672124919!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
)

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

export default Contact