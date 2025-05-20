import React, { useRef } from 'react';
import '../styles/HomePage.css';

const cardData = [
  {
    key: 'background-remove',
    title: 'Background Remove',
    description: 'Removes the background from your image, making it transparent or ready for a new background.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    onClick: null,
  },
  {
    key: 'sharpen-image',
    title: 'Sharpen Image',
    description: 'Enhances the details of an image, making edges and textures clearer. It reduces blurriness and makes objects look more defined, improving overall sharpness.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    onClick: 'sharpen',
  },
  {
    key: 'generate-background',
    title: 'Generate Background',
    description: 'Creates a new background for your image using AI. Just describe what you want, and it will generate a matching background.',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    onClick: null,
  },
];

function HomePage({ onSharpenClick }) {
  const sharpenRef = useRef(null);
  return (
    <div className="homepage-root">
      <div className="homepage-hero">
        <div className="homepage-logo">NEURAPIX</div>
        <div className="homepage-subtitle">NEURAPIX - Fix it in a click!</div>
      </div>
      <div className="homepage-cards">
        {cardData.map(card => (
          <div className="homepage-card" key={card.key}>
            <div className="homepage-card-img" style={{ backgroundImage: `url(${card.img})` }} />
            <div className="homepage-card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <button
              className="homepage-card-btn"
              onClick={card.onClick === 'sharpen' ? onSharpenClick : undefined}
            >
              USE THIS TEMPLATE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage; 