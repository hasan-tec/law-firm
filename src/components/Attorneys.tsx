import React from 'react'

const AttorneyCard = ({ name, specialization, imageUrl, linkedInUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">{specialization}</p>
    <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      LinkedIn Profile
    </a>
  </div>
)

const Attorneys = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AttorneyCard 
            name="Jane Doe"
            specialization="Business Law"
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            linkedInUrl="#"
          />
          <AttorneyCard 
            name="John Smith"
            specialization="Family Law"
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            linkedInUrl="#"
          />
          <AttorneyCard 
            name="Emily Brown"
            specialization="Criminal Defense"
            imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            linkedInUrl="#"
          />
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            View All Attorneys
          </button>
        </div>
      </div>
    </section>
  )
}

export default Attorneys