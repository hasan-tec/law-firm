import React from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: "Understanding Business Contracts: Key Elements to Protect Your Interests",
    snippet: "Learn the essential components of business contracts and how they safeguard your company's interests in various transactions.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "April 1, 2024"
  },
  {
    id: 2,
    title: "Navigating Child Custody Laws: A Comprehensive Guide",
    snippet: "Understand the complexities of child custody laws and what to expect when going through custody proceedings in court.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "March 25, 2024"
  },
  {
    id: 3,
    title: "Criminal Law: Know Your Rights During Police Encounters",
    snippet: "Essential information about your rights when dealing with law enforcement, including what to do if you're stopped, questioned, or arrested.",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "March 18, 2024"
  },
  {
    id: 4,
    title: "The Importance of Estate Planning: Securing Your Legacy",
    snippet: "Discover why estate planning is crucial for everyone, regardless of age or wealth, and learn about the key components of a solid estate plan.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "March 10, 2024"
  },
  {
    id: 5,
    title: "Intellectual Property in the Digital Age: Protecting Your Creations",
    snippet: "Explore the various forms of intellectual property protection available in today's digital landscape and how to safeguard your innovations.",
    imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "March 3, 2024"
  },
  {
    id: 6,
    title: "Employment Law Updates: What Employers and Employees Need to Know",
    snippet: "Stay informed about recent changes in employment law and how they affect both employers and employees in the workplace.",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "February 25, 2024"
  }
]

const BlogPost = ({ id, imageUrl, title, snippet, date }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      <p className="text-gray-600 mb-4">{snippet}</p>
      <Link to={`/blog/${id}`} className="text-blue-600 hover:underline">Read More</Link>
    </div>
  </div>
)

const Blog = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Legal Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog