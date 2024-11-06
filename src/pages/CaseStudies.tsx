import React from 'react'

const CaseStudyCard = ({ title, description, outcome }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-green-600 font-semibold">Outcome: {outcome}</p>
  </div>
)

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard 
            title="Corporate Merger Success"
            description="Successfully navigated a complex corporate merger between two tech giants, ensuring compliance with antitrust regulations and protecting our client's interests."
            outcome="Merger approved with favorable terms for our client"
          />
          <CaseStudyCard 
            title="High-Stakes Divorce Settlement"
            description="Represented a high-net-worth individual in a contentious divorce case, involving complex asset division and child custody arrangements."
            outcome="Equitable settlement reached, protecting our client's assets and parental rights"
          />
          <CaseStudyCard 
            title="Criminal Charges Dismissed"
            description="Defended a client against serious criminal charges, uncovering crucial evidence that led to the case's dismissal before trial."
            outcome="All charges dropped, client's reputation preserved"
          />
          <CaseStudyCard 
            title="Intellectual Property Dispute"
            description="Represented a startup in a patent infringement case against a larger competitor, protecting our client's innovative technology."
            outcome="Favorable settlement reached, including licensing agreement"
          />
          <CaseStudyCard 
            title="Environmental Compliance Victory"
            description="Assisted a manufacturing company in navigating complex environmental regulations, avoiding potential fines and implementing sustainable practices."
            outcome="Full compliance achieved, avoiding penalties and improving public image"
          />
          <CaseStudyCard 
            title="Landmark Civil Rights Case"
            description="Represented a group of employees in a class-action discrimination lawsuit against a major corporation."
            outcome="Substantial settlement and policy changes implemented"
          />
        </div>
      </div>
    </section>
  )
}

export default CaseStudies