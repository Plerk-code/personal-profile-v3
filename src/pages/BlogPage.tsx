import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const posts = [
    {
      id: "delivery-lead-axa",
      title: "How to Cut Your Teeth as a Lone Wolf Delivery Lead in AXA",
      date: "June 5, 2025",
      category: "Leadership",
      excerpt: "Stepping into the role of a delivery lead at a major organization like AXA can be both exhilarating and daunting, especially when you find yourself navigating complex technical projects with limited guidance.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      id: "future-ai-enterprise",
      title: "The Future of AI in Enterprise Solutions",
      date: "January 10, 2025",
      category: "Artificial Intelligence",
      excerpt: "Exploring how AI is transforming enterprise solutions and what the future holds for businesses adopting AI technologies.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    },
    {
      id: "scalable-react-apps",
      title: "Building Scalable React Applications",
      date: "January 5, 2025",
      category: "Web Development",
      excerpt: "Best practices and architectural patterns for building large-scale React applications that can grow with your business.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
    },
    {
      id: "ml-production",
      title: "Machine Learning in Production",
      date: "December 28, 2024",
      category: "Machine Learning",
      excerpt: "A comprehensive guide to deploying and maintaining machine learning models in production environments.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="group cursor-pointer bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-blue-300">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="text-blue-400">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-blue-200">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-blue-400 font-medium group-hover:text-blue-500 transition-colors inline-flex">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
