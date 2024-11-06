import React from 'react'
import { useParams, Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: "Understanding Business Contracts: Key Elements to Protect Your Interests",
    content: `
      <p>Business contracts are essential documents that define the terms and conditions of a business relationship. Understanding the key elements of these contracts is crucial for protecting your company's interests. Here are some important components to consider:</p>
      
      <h2>1. Parties Involved</h2>
      <p>Clearly identify all parties involved in the agreement, including their legal names and addresses.</p>
      
      <h2>2. Scope of Work</h2>
      <p>Define the specific products or services to be provided, including any deliverables and timelines.</p>
      
      <h2>3. Payment Terms</h2>
      <p>Outline the payment amount, schedule, and method of payment. Include any late payment penalties or early payment incentives.</p>
      
      <h2>4. Duration and Termination</h2>
      <p>Specify the contract's start and end dates, as well as conditions for termination or renewal.</p>
      
      <h2>5. Confidentiality Clauses</h2>
      <p>Include provisions to protect sensitive information shared during the course of the business relationship.</p>
      
      <h2>6. Dispute Resolution</h2>
      <p>Establish a process for resolving conflicts, such as mediation or arbitration.</p>
      
      <h2>7. Liability and Indemnification</h2>
      <p>Define the limits of liability for each party and include indemnification clauses to protect against third-party claims.</p>
      
      <p>By carefully considering these elements and seeking legal advice when drafting or reviewing contracts, you can better protect your business interests and minimize potential risks.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "April 1, 2024",
    author: "Jane Doe, Business Law Attorney"
  },
  // Add more blog posts here...
]

const BlogPost = () => {
  const { id } = useParams()
  const post = blogPosts.find(post => post.id === parseInt(id))

  if (!post) {
    return <div className="container mx-auto px-4 py-16">Blog post not found.</div>
  }

  return (
    <article className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="mb-4 text-gray-600">
          <span>{post.date}</span> | <span>{post.author}</span>
        </div>
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </article>
  )
}

export default BlogPost