import React from 'react'
import { Briefcase, Users, Shield, Scale, FileText, Home } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
  </div>
)

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Legal Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Briefcase}
            title="Business Law"
            description="Expert legal advice for all your business needs, including contract drafting, negotiations, and dispute resolution."
          />
          <ServiceCard 
            icon={Users}
            title="Family Law"
            description="Compassionate support for family-related legal matters, including divorce, child custody, and adoption."
          />
          <ServiceCard 
            icon={Shield}
            title="Criminal Defense"
            description="Strong defense strategies for criminal cases, protecting your rights and fighting for the best possible outcome."
          />
          <ServiceCard 
            icon={Scale}
            title="Civil Litigation"
            description="Skilled representation in civil disputes, from pre-trial negotiations to courtroom advocacy."
          />
          <ServiceCard 
            icon={FileText}
            title="Estate Planning"
            description="Comprehensive estate planning services, including wills, trusts, and power of attorney arrangements."
          />
          <ServiceCard 
            icon={Home}
            title="Real Estate Law"
            description="Legal assistance for real estate transactions, property disputes, and landlord-tenant issues."
          />
        </div>
      </div>
    </section>
  )
}

export default Services