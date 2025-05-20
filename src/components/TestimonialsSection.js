import React from 'react';
import '../styles/TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Professional Photographer",
      text: "The image sharpening tool has revolutionized my workflow. The results are consistently impressive!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Digital Artist",
      text: "I use this tool daily for my digital art. The quality of the sharpening is unmatched.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Content Creator",
      text: "Perfect for enhancing my social media content. The AI-powered sharpening is incredible.",
      rating: 4
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-text">
            <h2>What Our Users Say</h2>
            <p className="intro">
              Join thousands of satisfied users who have transformed their images with our AI-powered sharpening technology.
            </p>
            <button className="btn btn-rate">Rate Us</button>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name[0]}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection; 