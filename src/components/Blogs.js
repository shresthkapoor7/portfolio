import React from "react";
import { Link } from "react-router-dom";
import "../blog.css";

function Blogs({ blogPosts }) {
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <section>
      <div>
        <h2>Blog Posts</h2>
        <div className="blogs-grid">
          {sortedBlogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.id}`}
              className="blog-card"
            >
              <div className="blog-card-header">
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-card-date">
                    📅 {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="blog-card-read-time">{post.readTime}</span>
                </div>
              </div>

              <p className="blog-card-excerpt">{post.excerpt}</p>

              <div className="blog-card-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;