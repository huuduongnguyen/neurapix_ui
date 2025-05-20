import React, { useState } from 'react';
import '../styles/SubscriptionPage.css';

const plans = [
  {
    name: 'Free',
    price: 'FREE',
    highlight: true,
    features: ['Text To Image'],
    photoSize: '1024 px',
    numPhotos: '3 Photos/Day',
    watermark: false,
    pay: null,
    sub: null,
  },
  {
    name: 'Pay-Per Use',
    price: '5,000 VND/Credit',
    highlight: false,
    features: ['Text To Image', 'Edit In Personal Style'],
    photoSize: '1500 px',
    numPhotos: 'Charge Per Credit or Feature Used',
    watermark: true,
    pay: true,
    sub: null,
  },
  {
    name: 'Subscriptions',
    price: ['59,000 VND/Month', '649,000 VND/Year'],
    highlight: false,
    features: ['Text To Image', 'Edit In Personal Style', 'Photo Sharpen', 'AI Prompt Guidance'],
    photoSize: '1920 px',
    numPhotos: 'Unlimited',
    watermark: true,
    pay: null,
    sub: true,
  },
];

const faqs = [
  {
    q: 'What are the plans?',
    a: 'We offer three pricing plans: Free, Pro, and Business. Each plan is designed to cater to different user needs, ensuring you find the perfect fit. Explore the features of each plan to see which suits you best.'
  },
  {
    q: 'Is there a trial?',
    a: 'Yes, we offer a free trial for our Pro and Business plans. This allows you to explore all features without commitment. You can cancel anytime during the trial period.'
  },
  {
    q: 'What payment methods?',
    a: 'We accept various payment methods including credit cards, PayPal, and bank transfers. All transactions are secure and encrypted for your safety. Choose the method that works best for you.'
  },
  {
    q: 'Can I change plans?',
    a: 'Absolutely! You can upgrade or downgrade your plan at any time. Simply go to your account settings to make the change. Your billing will adjust accordingly.'
  },
  {
    q: 'What if I cancel?',
    a: 'If you cancel your subscription, you will retain access until the end of your billing cycle. We also offer a money back guarantee within the first 30 days. Your satisfaction is our priority.'
  },
];

const creatorPlans = [
  {
    name: 'Basic Plan',
    price: '99.000VND/mo\n990.000 VND/year',
    features: [
      'Access to essential AI tool',
      'Limited storage (5GB)',
      '50 image edits per month',
    ],
  },
  {
    name: 'Pro Plan',
    price: '199.000VND/mo\n1.990.000 VND/year',
    features: [
      'Everything in Basic',
      'Unlimited storage',
      '200 image edits per month',
      'Priority customer support',
    ],
  },
  {
    name: 'Elite Plan',
    price: '399.000VND/mo\n3.990.000VND/year',
    features: [
      'Everything in Pro',
      'Unlimited image edits',
      'Early access to new AI tools',
      'Exclusive AI generated assets',
      'Dedicated account manager',
    ],
  },
];

function SubscriptionPage({ goHome }) {
  const [tab, setTab] = useState('individual');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="subscription-root">
      <header className="subscription-header">
        <div className="subscription-logo" style={{cursor: 'pointer'}} onClick={goHome}>NEURAPIX</div>
        <div className="subscription-profile">User Profile</div>
      </header>
      <main className="subscription-main">
        <h1 className="subscription-title">Perfect Plan Selection</h1>
        <div className="subscription-subtitle">
          Find a plan that fits your needs and experience the best in AI-powered photo editing. Our tailored options ensure you get the most value for your investment.
        </div>
        <div className="subscription-tabs">
          <button className={tab === 'individual' ? 'active' : ''} onClick={() => setTab('individual')}>INDIVIDUAL USERS</button>
          <button className={tab === 'creator' ? 'active' : ''} onClick={() => setTab('creator')}>CONTENT CREATORS</button>
        </div>
        {tab === 'individual' && (
          <div className="subscription-table-wrap">
            <div className="subscription-table">
              <div className="subscription-table-title">Individual Users</div>
              <div className="subscription-table-desc">
                <b>One-Time Purchase:</b> Buy extra image credits (129,000 VND for 100 additional edits)<br/>
                <b>Referral Discounts:</b> Get 20% off for 3 months when referring a friend<br/>
                <b>Annual Subscription Discount:</b> Save 2 months free when paying annually
              </div>
              <div className="subscription-table-content">
                <div className="subscription-table-row subscription-table-header">
                  <div>Free</div>
                  <div>Pay-Per Use</div>
                  <div>Subscriptions</div>
                </div>
                <div className="subscription-table-row subscription-table-price">
                  <div><button className="plan-btn selected">FREE</button></div>
                  <div><button className="plan-btn pay">5,000 VND/Credit</button></div>
                  <div>
                    <button className="plan-btn sub">59,000 VND/Month</button>
                    <button className="plan-btn sub">649,000 VND/Year</button>
                  </div>
                </div>
                <div className="subscription-table-row"><div>Photo Size</div><div>1024 px</div><div>1500 px</div><div>1920 px</div></div>
                <div className="subscription-table-row"><div>Number Of Photos</div><div>3 Photos/Day</div><div>Charge Per Credit or Feature Used</div><div>Unlimited</div></div>
                <div className="subscription-table-row"><div>No Watermark And Ads</div><div></div><div>✓</div><div>✓</div></div>
                <div className="subscription-table-row"><div>Features</div><div>Text To Image</div><div>Text To Image<br/>Edit In Personal Style</div><div>Text To Image<br/>Edit In Personal Style<br/>Photo Sharpen<br/>AI Prompt Guidance</div></div>
              </div>
            </div>
          </div>
        )}
        {tab === 'creator' && (
          <div className="subscription-table-wrap">
            <div className="subscription-table">
              <div className="subscription-table-title">Content Creators</div>
              <div className="subscription-table-desc">
                <b>One-Time Purchase:</b> Buy extra image credits (129,000 VND for 100 additional edits)<br/>
                <b>Referral Discounts:</b> Get 20% off for 3 months when referring a friend<br/>
                <b>Annual Subscription Discount:</b> Save 2 months free when paying annually
              </div>
              <div className="creator-cards">
                {creatorPlans.map((plan, idx) => (
                  <div className="creator-card" key={plan.name}>
                    <div className="creator-card-title">{plan.name}</div>
                    <div className="creator-card-price">
                      {plan.price.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                    <ul className="creator-card-features">
                      {plan.features.map((f, i) => (
                        <li key={i}>✓ {f}</li>
                      ))}
                    </ul>
                    <button className="creator-card-btn">Get started</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <section className="subscription-faq">
          <h2>FAQs</h2>
          <div className="faq-desc">Here are some common questions about our pricing and subscription options.</div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-arrow">{openFaq === i ? '▲' : '▼'}</span>
                </div>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>
        <section className="subscription-contact">
          <h3>Still have questions?</h3>
          <div>We're here to help!</div>
          <button className="contact-btn">Contact</button>
        </section>
      </main>
      <footer className="signin-footer">
        <div className="footer-content">
          <div className="footer-col logo-col">
            <div className="footer-logo">NEURAPIX</div>
            <div className="footer-newsletter">
              <div>Subscribe to our newsletter for the latest updates on features and releases.</div>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email here" />
                <button type="submit">Join</button>
              </form>
              <div className="footer-disclaimer">By subscribing, you consent to our Privacy Policy and receive updates.</div>
            </div>
            <div className="footer-copyright">© 2025 NEURAPIX. All rights reserved.</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Quick Links</div>
            <ul>
              <li><a href="#">Home Page</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog Posts</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">Resources</div>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">E-books</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">Connect With Us</div>
            <ul className="footer-social">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a> <span>|</span> <a href="#">Terms of Service</a> <span>|</span> <a href="#">Cookie Settings</a>
        </div>
      </footer>
    </div>
  );
}

export default SubscriptionPage; 