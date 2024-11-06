import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Legal Partner for a Brighter Tomorrow</h1>
        <p className="text-xl mb-8">Offering professional legal services tailored to your needs.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Schedule a Consultation
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero