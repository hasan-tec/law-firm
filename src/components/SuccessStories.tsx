import React from 'react'

const SuccessStoryCard = ({ title, description, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
      "{quote}"
    </blockquote>
  </div>
)

const SuccessStories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessStoryCard 
            title="Corporate Merger Success"
            description="Successfully navigated a complex corporate merger, ensuring compliance and protecting our client's interests."
            quote="The law firm's expertise was invaluable during our merger process."
          />
          <SuccessStoryCard 
            title="Family Dispute Resolution"
            description="Mediated a high-stakes family dispute, reaching an amicable settlement that satisfied all parties."
            quote="Their compassionate approach helped us resolve our issues peacefully."
          />
          <SuccessStoryCard 
            title="Criminal Case Dismissal"
            description="Secured a dismissal of all charges in a high-profile criminal case through meticulous defense strategy."
            quote="I'm grateful for their unwavering support and brilliant legal strategy."
          />
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories