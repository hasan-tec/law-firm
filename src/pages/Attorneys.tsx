import React from 'react'

const AttorneyCard = ({ name, specialization, imageUrl, bio }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
    <p className="text-gray-600 mb-4 text-center">{specialization}</p>
    <p className="text-gray-700">{bio}</p>
  </div>
)

const Attorneys = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Legal Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AttorneyCard 
            name="Jane Doe"
            specialization="Business Law"
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            bio="Jane Doe is a seasoned business law attorney with over 15 years of experience. She specializes in corporate law, mergers and acquisitions, and contract negotiations."
          />
          <AttorneyCard 
            name="John Smith"
            specialization="Family Law"
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            bio="John Smith is a compassionate family law attorney dedicated to helping clients navigate complex family issues. He has extensive experience in divorce, child custody, and adoption cases."
          />
          <AttorneyCard 
            name="Emily Brown"
            specialization="Criminal Defense"
            imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            bio="Emily Brown is a skilled criminal defense attorney known for her strategic approach and dedication to protecting her clients' rights. She has successfully handled a wide range of criminal cases."
          />
          <AttorneyCard 
            name="Michael Johnson"
            specialization="Civil Litigation"
            imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            bio="Michael Johnson is an experienced civil litigator with a track record of successful outcomes in complex disputes. He excels in both negotiation and courtroom advocacy."
          />
          <AttorneyCard 
            name="Sarah Lee"
            specialization="Estate Planning"
            imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            bio="Sarah Lee is a detail-oriented estate planning attorney helping clients secure their legacy. She specializes in creating comprehensive estate plans tailored to each client's unique needs."
          />
          <AttorneyCard 
            name="David Chen"
            specialization="Real Estate Law"
            imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            bio="David Chen is a knowledgeable real estate attorney with expertise in property transactions, zoning laws, and landlord-tenant disputes. He provides valuable insights for both residential and commercial real estate matters."
          />
        </div>
      </div>
    </section>
  )
}

export default Attorneys