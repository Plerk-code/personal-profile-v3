import { ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  id: string;
  title: string;  date: string;
  category: string;
  content: string;
  image?: string;
}

const blogPosts: Record<string, BlogPost> = {
  "delivery-lead-axa": {
    id: "delivery-lead-axa",
    title: "How to Cut Your Teeth as a Lone Wolf Delivery Lead in AXA",
    date: "June 5, 2025",
    category: "Leadership",
    content: `# How to Cut Your Teeth as a Lone Wolf Delivery Lead in AXA

## Introduction

Stepping into the role of a delivery lead at a major organization like AXA can be both exhilarating and daunting, especially when you find yourself navigating complex technical projects with limited guidance. Over the past several months, I've been leading the Azure Machine Learning (AZML) implementation at AXA, a transformative project that has taught me invaluable lessons about leadership, technical delivery, and stakeholder management. This journey has been filled with challenges—from team changes and missed requirements to configuration issues and timeline pressures—but it has also offered tremendous growth opportunities. In this blog, I'll share my experience as a "lone wolf" delivery lead and the strategies that helped me succeed despite the obstacles.

## The AZML Project: A Complex Technical Landscape

The AZML project at AXA involved implementing machine learning models to transform pricing calculations across various insurance products. This required integrating Azure ML services with existing systems, configuring non-production and production environments, and ensuring seamless communication between different components like function apps, APIs, and machine learning models (AZML Direct Home).

One of the first challenges I encountered was the complexity of the technical landscape. We needed to establish connectivity between Sandpiper and E99 servers, set up FI VIPs, and configure network paths—all while dealing with team changes and departures of key members like Juror Ma and James Hammond. This taught me my first lesson: **technical knowledge is your foundation**. As a delivery lead, you don't need to be the deepest technical expert, but you must understand enough to ask the right questions and validate proposed solutions.

## Navigating Budget Constraints and Resource Allocation

Another critical aspect of delivery leadership is managing budgets and resources effectively. In our case, we had to track costs across different work streams, allocate resources appropriately, and justify any variances (AZML Pricing :-)). This required regular check-ins with finance teams and project managers to ensure alignment.

I learned to create detailed spreadsheets tracking all costs, including people costs (team members' time), non-people costs (infrastructure, third-party services), and support costs (architects, technical resources). This transparency helped build trust with stakeholders and allowed for informed decision-making when priorities shifted.

## Handling Missed Requirements and Strategic Pivots

Perhaps the most challenging aspect of the project was dealing with missed requirements that emerged mid-implementation. We discovered that our calculator was recalculating on every screen, causing costly and potentially disruptive ML calls (AZML Missed Requirement). This required a strategic pivot and additional development work to set flags in various processes.

This situation taught me another crucial lesson: **embrace adaptability**. As a lone wolf delivery lead, you must be willing to adjust plans quickly when new information emerges. I worked closely with developers to analyze the code, map out affected areas, and develop a solution that minimized impact on the timeline while addressing the core issue.

## Building Cross-Functional Collaboration

The AZML project involved multiple teams: developers, testers, network engineers, cloud platform specialists, and business stakeholders. Coordinating across these groups required intentional communication strategies and regular touchpoints.

I established daily standups to track progress and identify blockers early (Daily Standup). These meetings became invaluable for maintaining momentum and ensuring everyone was aligned on priorities. Additionally, I created dedicated sessions for specific technical challenges, like auto-scaling and SKU changes (AZML Next Steps on AutoScaling and SKU's), which allowed for focused problem-solving.

## Performance Testing and Quality Assurance

Ensuring the performance and reliability of the AZML implementation was critical. We conducted baseline performance metrics before introducing Azure ML and then compared results after implementation to measure impact (Note). This data-driven approach helped build confidence in the solution and identify areas for optimization.

I learned to prioritize testing early and often, establishing clear test plans and acceptance criteria. This prevented issues from cascading and gave stakeholders visibility into the quality of the solution being delivered.

## Managing Timeline Pressure and Prioritization

As with many complex projects, we faced timeline pressures and competing priorities. The strategic fix for the missed requirement threatened to delay our March release, requiring careful prioritization and resource allocation (Daily Stand up).

I developed a critical list approach, identifying the must-have items for each release and ensuring these received adequate focus. This meant sometimes making difficult decisions about what could be deferred to later releases, always with transparency to stakeholders about the rationale and impacts.

## Conclusion: Thriving as a Lone Wolf Delivery Lead

My experience leading the AZML project at AXA has reinforced that successful delivery leadership isn't just about technical knowledge or project management skills—it's about balancing multiple dimensions simultaneously while maintaining forward momentum.

To thrive as a lone wolf delivery lead:

1. **Build a strong technical foundation** that allows you to engage meaningfully with specialists
2. **Develop transparent processes** for tracking budgets, resources, and progress
3. **Cultivate adaptability** in the face of changing requirements and unexpected challenges
4. **Foster cross-functional collaboration** through regular, structured communication
5. **Prioritize ruthlessly** based on business value and technical dependencies
6. **Document decisions and rationale** to maintain continuity and build organizational knowledge

The journey isn't always smooth—our project faced delays in non-production configuration, team changes, and missed requirements—but with persistence and the right approach, you can successfully navigate complex technical implementations even without extensive support structures.

Remember that being a "lone wolf" doesn't mean working in isolation; it means taking ownership and initiative while leveraging the expertise around you. By building strong relationships across technical and business teams, maintaining clear communication, and staying focused on delivering value, you can cut your teeth as a delivery lead and emerge stronger for the experience.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  }
};

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? blogPosts[postId] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">Blog post not found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/blog" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
          
          {post.image && (
            <div className="relative h-80 mb-8 overflow-hidden rounded-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-4 text-sm text-blue-200 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-blue-400">{post.category}</span>
                </div>
                <h1 className="text-4xl font-bold text-white">{post.title}</h1>
              </div>
            </div>
          )}

          {!post.image && (
            <>
              <div className="flex items-center gap-4 text-sm text-blue-200 mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span className="text-blue-400">{post.category}</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-8">{post.title}</h1>
            </>
          )}

          <div className="prose prose-invert prose-blue max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
