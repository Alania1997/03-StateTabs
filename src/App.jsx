import "./index.css";
import { useState } from "react";
import { cardData } from "./cardData";


// Grouping cards into three tabs
const tabData = [
  [cardData[0], cardData[1]], // Tab 1
  [cardData[2], cardData[3]], // Tab 2
  [cardData[4]], // Tab 3
];

export default function App() {

const [isOpen, setIsOpen] = useState(false);

const handleStart = () => {
  setIsOpen(true);
}

const handleBack = () => {
  setIsOpen(false);
}

const [activeTab, setActiveTab] = useState(0);

if(!isOpen) {
  return (
    <>
    <div className="start-screen">
      <button className="tab-button active" onClick={handleStart}>Start</button>
    </div>
    </>
  )
}

  return (
    <>
      <div className="app">
        <span className="close" onClick={handleBack}>&times;</span>
        <h1>State Tabs Card Display</h1>

        <div className="tab-buttons">
          <button className={`tab-button ${activeTab === 0 ? 'active' : ''}`}onClick={() => setActiveTab(0)}>Tab 1</button>
          <button className={`tab-button ${activeTab === 1 ? 'active' : ''}`}onClick={() => setActiveTab(1)}>Tab 2</button>
          <button className={`tab-button ${activeTab === 2 ? 'active' : ''}`}onClick={() => setActiveTab(2)}>Tab 3</button>
        </div>

        <CardContainer cards={tabData[activeTab]} />

        <div className="navigation-buttons">
          <button onClick={() => {
            if(activeTab > 0){
              setActiveTab(activeTab - 1);
            }
          }}>&lt; Previous</button>
          <button onClick={() => {
            if(activeTab < tabData.length -1){
              setActiveTab(activeTab + 1);
            }
          }}>Next &gt;</button>
        </div>

        <Footer />
      </div>
    </>
  );
}

// Container component to display the cards for the active tab
function CardContainer({ cards }) {
  return (
    <div className="card-container">
      <Card cardObj={cards[0]} />
      {cards[1] && <Card cardObj={cards[1]} />}
    </div>
  );
}

// Component to render individual card information
function Card({ cardObj }) {
  return (
    <div className="card">
      <img className="card-image" src={cardObj.imageUrl} alt={cardObj.title} />
      <div className="card-content">
        <h2 className="card-title">{cardObj.title}</h2>
        <p className="card-description">{cardObj.description}</p>
        <p className="card-date">{cardObj.date}</p>

        {/* Tags section */}
        <div className="card-tags">
          <CardTag tag={cardObj.tags[0]} />
          {cardObj.tags[1] && <CardTag tag={cardObj.tags[1]} />}
          {cardObj.tags[2] && <CardTag tag={cardObj.tags[2]} />}
        </div>
      </div>
    </div>
  );
}

// Component to render individual tag
function CardTag({ tag }) {
  return <span className="card-tag">{tag}</span>;
}

// Footer component listing the technologies used in the project
function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>Technologies used:</strong> React, JSX, useState, Conditional Rendering, CSS
        Modules, Event Handling.
      </p>
    </footer>
  );
}
