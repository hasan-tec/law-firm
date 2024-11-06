import React from 'react'

const BlogPost = ({ imageUrl, title, snippet }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{snippet}</p>
      <a href="#" className="text-blue-600 hover:underline">Read More</a>
    </div>
  </div>
)

const BlogInsights = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Legal Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogPost 
            imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Understanding Business Contracts"
            snippet="Learn the key elements of business contracts and how to protect your interests."
          />
          <BlogPost 
            imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Navigating Child Custody Laws"
            snippet="A comprehensive guide to child custody laws and what to expect in court."
          />
          <BlogPost 
            imageUrl="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Criminal Law: Know Your Rights"
            snippet="Essential information about your rights when dealing with law enforcement."
          />
        </div>
      </div>
    </section>
  )
}

export default BlogInsights