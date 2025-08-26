import React, { useState, useEffect } from 'react';
import './index.css';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ItemsListPage from '../pages/ItemsListPage';


// --- Mock Data ---
const mockItems = [
  { _id: '1', itemName: 'Lost: Blue Water Bottle', description: 'Hydro Flask, has a small dent on the side and a sticker of a mountain.', status: 'Lost', location: 'Library, 2nd Floor', createdAt: '2024-08-18T10:00:00Z' },
  { _id: '2', itemName: 'Found: Black Wireless Mouse', description: 'Logitech MX Master 3. Left near the computers in the student union.', status: 'Found', location: 'Student Union', createdAt: '2024-08-18T12:30:00Z' },
  { _id: '3', itemName: 'Lost: Silver Keychain', description: 'Has about 5 keys and a small red bottle opener attached.', status: 'Lost', location: 'Main Quad', createdAt: '2024-08-17T15:45:00Z' },
  { _id: '4', itemName: 'Found: Text book "Intro to Physics"', description: 'The book has some highlighting in the first few chapters. Found in lecture hall 3B.', status: 'Found', location: 'Lecture Hall 3B', createdAt: '2024-08-19T09:15:00Z' },
  { _id: '5', itemName: 'Lost: Black North Face Jacket', description: 'Size medium. Might have a student ID in the right pocket.', status: 'Lost', location: 'Campus Cafe', createdAt: '2024-08-19T11:00:00Z' },
  { _id: '6', itemName: 'Found: Pair of Ray-Ban Sunglasses', description: 'Classic wayfarer style. Found on a bench near the gym.', status: 'Found', location: 'Gym Entrance', createdAt: '2024-08-19T13:20:00Z' },
];


// --- Reusable UI Components ---
const ItemCard = ({ item }) => {
  const statusClass = item.status === 'Lost' ? 'item-status-lost' : 'item-status-found';
  return (
    <div className="item-card">
      <div className="item-card-content">
        <div className="item-card-header">
          <h3 className="item-card-title">{item.itemName}</h3>
          <span className={`item-status ${statusClass}`}>{item.status}</span>
        </div>
        <p className="item-card-description">{item.description}</p>
        <div className="item-card-footer">
          <p><strong>Location:</strong> {item.location}</p>
          <p><strong>Date:</strong> {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ setCurrentPage, theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
            <button onClick={() => setCurrentPage('landing')} className="navbar-brand">
                UniRetriever ✨
            </button>
            <div className="navbar-links">
                <button onClick={() => setCurrentPage('items')} className="nav-button">Browse Items</button>
                <button onClick={() => setCurrentPage('login')} className="nav-button">Login</button>
                <button onClick={() => setCurrentPage('register')} className="nav-button nav-button-primary">Register</button>
                <button onClick={toggleTheme} className="nav-button theme-toggle" aria-label="Toggle theme">
                {theme === 'light' ? 
                    <svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> :
                    <svg viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                }
                </button>
            </div>
        </div>
      </div>
    </nav>
  );
};

// --- Page Components ---
const FeatureCard = ({ icon, title, children }) => (
    <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{children}</p>
    </div>
);

const LandingPage = ({ setCurrentPage }) => {
    return (
        <React.Fragment>
            <section className="hero-section">
                <div className="container">
                    <h1>Lost Something? <span>Find it Here.</span></h1>
                    <p>The central hub for lost and found items on campus. Reconnect with your belongings quickly and easily.</p>
                    <div className="hero-actions">
                        <button onClick={() => setCurrentPage('items')} className="hero-button hero-button-primary">Browse Found Items</button>
                        <button onClick={() => setCurrentPage('dashboard')} className="hero-button hero-button-secondary">Post a Lost Item</button>
                    </div>
                </div>
            </section>
            <section className="features-section">
                <div className="container">
                    <div className="features-header">
                        <h2>How It Works</h2>
                        <p>A simple process to reunite you with your items.</p>
                    </div>
                    <div className="features-grid">
                        <FeatureCard 
                            icon={<svg viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                            title="Post an Item">
                            Quickly create a post with details and a location for your lost or found item.
                        </FeatureCard>
                        <FeatureCard 
                            icon={<svg viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                            title="Search & Discover">
                            Browse the listings and use filters to easily search for specific items on campus.
                        </FeatureCard>
                        <FeatureCard 
                            icon={<svg viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg>}
                            title="Connect & Reclaim">
                            Contact the poster directly through the platform to arrange a safe and easy return.
                        </FeatureCard>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};



const FormInput = ({ id, label, type, placeholder }) => (
  <div className="form-input-field">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} type={type} required placeholder={placeholder} />
  </div>
);

const DashboardPage = () => (
    <div className="dashboard-placeholder">
        <h1>Welcome to your Dashboard!</h1>
        <p>This area is protected. Only logged-in users can see this.</p>
        <p>Here you would manage your posted items and create new ones.</p>
    </div>
);

// --- Main App Component ---
function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage FormInput={FormInput} />;
      case 'register':
        return <RegisterPage FormInput={FormInput} />;
      case 'dashboard':
        return <DashboardPage />;
      case 'items':
        return <ItemsListPage mockItems={mockItems} ItemCard={ItemCard} useState={useState} useEffect={useEffect} />;
      case 'landing':
      default:  
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <React.Fragment>
      <Navbar setCurrentPage={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />
      <main>
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} UniRetriever. All rights reserved.</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
