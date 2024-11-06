import React from 'react'
import { Award, Users, DollarSign, CheckCircle } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Award}
            title="Experienced Attorneys"
            description="Our team has years of experience in various legal fields."
          />
          <FeatureCard 
            icon={Users}
            title="Client-Centered Approach"
            description="We prioritize your needs and provide personalized solutions."
          />
          <FeatureCard 
            icon={DollarSign}
            title="Transparent Pricing"
            description="Clear and upfront pricing with no hidden fees."
          />
          <FeatureCard 
            icon={CheckCircle}
            title="Proven Track Record"
            description="Numerous successful cases and satisfied clients."
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs