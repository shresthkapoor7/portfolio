import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../blog.css";

function BlogPost({ blogPosts }) {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div style={{
        textAlign: "center",
        padding: "4rem 2rem",
        color: "black"
      }}>
        <h1>Blog Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            background: "var(--primary-blue)",
            color: "black",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "500"
          }}
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2rem",
          color: "var(--text-secondary)",
          textDecoration: "none",
          fontSize: "0.9rem"
        }}
      >
        ← Back to Home
      </Link>

      <article>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <h1 style={{
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              lineHeight: "1.2"
            }}>
              {post.title}
            </h1>
            <span style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              background: "var(--bg-muted)",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              whiteSpace: "nowrap"
            }}>
              {post.readTime}
            </span>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <div style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              📅 {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    background: "var(--primary-blue-bg)",
                    color: "var(--primary-blue-text)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: "500"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "var(--text-secondary)",
          marginBottom: "3rem"
        }}>
          <p style={{ fontSize: "1.2rem", fontWeight: "500", marginBottom: "2rem" }}>
            {post.excerpt}
          </p>

          {post.content ? (
            <div style={{
              background: "var(--bg-muted)"
            }}>
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--text-primary)", margin: "2rem 0 1rem 0", paddingBottom: "0.5rem", borderBottom: "2px solid var(--border-light)" }} {...props} />,
                  h2: ({node, ...props}) => <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "var(--text-primary)", margin: "1.5rem 0 1rem 0", paddingBottom: "0.25rem", borderBottom: "1px solid var(--border-light)" }} {...props} />,
                  h3: ({node, ...props}) => <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "var(--text-primary)", margin: "1.25rem 0 0.75rem 0" }} {...props} />,
                  p: ({node, ...props}) => <p style={{ marginBottom: "1rem", lineHeight: "1.7" }} {...props} />,
                  code: ({node, inline, ...props}) =>
                    inline ?
                      <code style={{ background: "var(--bg-card)", color: "var(--text-primary)", padding: "0.125rem 0.375rem", borderRadius: "4px", fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace", fontSize: "0.9em", border: "1px solid var(--border-light)" }} {...props} /> :
                      <code style={{ display: "block", background: "var(--bg-card)", color: "var(--text-primary)", padding: "1rem", borderRadius: "8px", fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace", fontSize: "0.9rem", lineHeight: "1.5", overflowX: "auto", border: "1px solid var(--border-light)", margin: "1rem 0" }} {...props} />,
                  pre: ({node, ...props}) => <pre style={{ margin: "1rem 0", background: "var(--bg-card)", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-light)" }} {...props} />,
                  ul: ({node, ...props}) => <ul style={{ margin: "1rem 0", paddingLeft: "2rem" }} {...props} />,
                  ol: ({node, ...props}) => <ol style={{ margin: "1rem 0", paddingLeft: "2rem" }} {...props} />,
                  li: ({node, ...props}) => <li style={{ marginBottom: "0.5rem", lineHeight: "1.6" }} {...props} />,
                  blockquote: ({node, ...props}) => <blockquote style={{ margin: "1.5rem 0", padding: "1rem 1.5rem", background: "var(--bg-card)", borderLeft: "4px solid var(--primary-blue)", borderRadius: "0 8px 8px 0", fontStyle: "italic", color: "var(--text-secondary)" }} {...props} />,
                  strong: ({node, ...props}) => <strong style={{ fontWeight: "600", color: "var(--text-primary)" }} {...props} />,
                  em: ({node, ...props}) => <em style={{ fontStyle: "italic", color: "var(--text-secondary)" }} {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          ) : (
            <div style={{
              background: "var(--bg-muted)",
              padding: "2rem",
              borderRadius: "12px",
              border: "1px solid var(--border-light)"
            }}>
              <p style={{ margin: 0, fontStyle: "italic", color: "var(--text-muted)" }}>
                Loading blog content...
              </p>
            </div>
          )}
        </div>

        <footer style={{
          borderTop: "1px solid var(--border-light)",
          paddingTop: "2rem",
          marginTop: "3rem"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Written by Shresth Kapoor
            </div>
            <Link
              to="/"
              style={{
                padding: "0.75rem 1.5rem",
                background: "var(--primary-blue)",
                color: "black",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "500",
                transition: "background-color 0.2s"
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default BlogPost;