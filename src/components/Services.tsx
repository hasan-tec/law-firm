import React from 'react'
import { Briefcase, Users, Shield } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-blue-600 hover:underline">Read More</a>
  </div>
)

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Briefcase}
            title="Business Law"
            description="Expert legal advice for all your business needs."
          />
          <ServiceCard 
            icon={Users}
            title="Family Law"
            description="Compassionate support for family-related legal matters."
          />
          <ServiceCard 
            icon={Shield}
            title="Criminal Defense"
            description="Strong defense strategies for criminal cases."
          />
        </div>
      </div>
    </section>
  )
}

export default Services