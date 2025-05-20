import React, { useRef, useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SharpenSection from './components/SharpenSection';
import TestimonialsSection from './components/TestimonialsSection';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import SubscriptionPage from './components/SubscriptionPage';
import ProfilePage from './components/ProfilePage';
import './styles/App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authPage, setAuthPage] = useState('signin'); // 'signin' or 'signup'
  const [subscriptionPage, setSubscriptionPage] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const sharpenRef = useRef(null);

  const handleSharpenClick = () => {
    if (sharpenRef.current) {
      sharpenRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // goHome: always go to homepage and log in
  const goHome = () => {
    setLoggedIn(true);
    setAuthPage('signin');
    setSubscriptionPage(false);
    setProfilePage(false);
  };

  const goSubscription = () => {
    setSubscriptionPage(true);
    setProfilePage(false);
  };

  const goProfile = () => {
    setProfilePage(true);
    setSubscriptionPage(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setAuthPage('signin');
    setSubscriptionPage(false);
    setProfilePage(false);
    setUser({ name: '', email: '' });
  };

  if (!loggedIn) {
    if (authPage === 'signin') {
      return <SignInPage onLogin={(name) => { setUser({ name, email: name }); setLoggedIn(true); }}
                        onRegister={() => setAuthPage('signup')}
                        goHome={goHome} />;
    } else {
      return <SignUpPage onSignUp={({ name, email }) => { setUser({ name, email }); setLoggedIn(true); }}
                        onLogin={() => setAuthPage('signin')}
                        goHome={goHome} />;
    }
  }

  if (subscriptionPage) {
    return <SubscriptionPage goHome={goHome} />;
  }

  if (profilePage) {
    return <ProfilePage goHome={goHome} goSubscription={goSubscription} user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="app">
      <Header goHome={goHome} goSubscription={goSubscription} goProfile={goProfile} user={user} />
      <main>
        <HomePage onSharpenClick={handleSharpenClick} />
        <div ref={sharpenRef}>
          <SharpenSection />
        </div>
        <TestimonialsSection />
      </main>
    </div>
  );
}

export default App; 