import React, { useState, useEffect } from "react";
import "./index.css";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ItemsListPage from "../pages/ItemsListPage";

const mockItems = [
  {
    _id: "1",
    itemName: "Lost: Blue Water Bottle",
    description:
      "Hydro Flask, has a small dent on the side and a sticker of a mountain.",
    status: "Lost",
    location: "Library, 2nd Floor",
    createdAt: "2024-08-18T10:00:00Z",
  },
  {
    _id: "2",
    itemName: "Found: Black Wireless Mouse",
    description:
      "Logitech MX Master 3. Left near the computers in the student union.",
    status: "Found",
    location: "Student Union",
    createdAt: "2024-08-18T12:30:00Z",
  },
  {
    _id: "3",
    itemName: "Lost: Silver Keychain",
    description: "Has about 5 keys and a small red bottle opener attached.",
    status: "Lost",
    location: "Main Quad",
    createdAt: "2024-08-17T15:45:00Z",
  },
  {
    _id: "4",
    itemName: 'Found: Text book "Intro to Physics"',
    description:
      "The book has some highlighting in the first few chapters. Found in lecture hall 3B.",
    status: "Found",
    location: "Lecture Hall 3B",
    createdAt: "2024-08-19T09:15:00Z",
  },
  {
    _id: "5",
    itemName: "Lost: Black North Face Jacket",
    description: "Size medium. Might have a student ID in the right pocket.",
    status: "Lost",
    location: "Campus Cafe",
    createdAt: "2024-08-19T11:00:00Z",
  },
  {
    _id: "6",
    itemName: "Found: Pair of Ray-Ban Sunglasses",
    description: "Classic wayfarer style. Found on a bench near the gym.",
    status: "Found",
    location: "Gym Entrance",
    createdAt: "2024-08-19T13:20:00Z",
  },
];

const ItemCard = ({ item }) => {
  const statusClass =
    item.status === "Lost" ? "item-status-lost" : "item-status-found";
  return (
    <div className="item-card">
      <div className="item-card-content">
        <div className="item-card-header">
          <h3 className="item-card-title">{item.itemName}</h3>
          <span className={`item-status ${statusClass}`}>{item.status}</span>
        </div>
        <p className="item-card-description">{item.description}</p>
        <div className="item-card-footer">
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ id, label, type, placeholder }) => (
  <div className="form-input-field">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} type={type} required placeholder={placeholder} />
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage FormInput={FormInput} />;
      case "register":
        return <RegisterPage FormInput={FormInput} />;
      case "dashboard":
        return <DashboardPage />;
      case "items":
        return (
          <ItemsListPage
            mockItems={mockItems}
            ItemCard={ItemCard}
            useState={useState}
            useEffect={useEffect}
          />
        );
      case "landing":
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <React.Fragment>
      <Navbar
        setCurrentPage={setCurrentPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>{renderPage()}</main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} UniRetriever. All rights reserved.
        </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
