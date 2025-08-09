// App.js
import React, { useState } from "react";
import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/hero";
import Parallax from "./Components/Parallax/Parallax";
import Myself from "./Components/MySelf/Myself";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Game from "./Components/Game/Game";

const App = () => {
  const [showGame, setShowGame] = useState(false);
  const handleLogoClick = () => {
    setShowGame(true);
  };
  const handleGoBack = () => {
    setShowGame(false);
  };

  return (
    <div>
      {showGame ? (
        // Render the Game component when showGame is true
        <Game onGoBack={handleGoBack} />
      ) : (
        // Otherwise, render the main website sections
        <>
          <section id="Homepage">
            <Navbar />
            <Hero />
          </section>
          <section id="About Myself">
            <Parallax type="about" />
          </section>
          <Myself />
          <section id="Projects">
            <Parallax type="projects" />
          </section>
          <Portfolio />
          <section id="Contact">
            {/* Pass the handler function down as a prop */}
            <Contact onGameLogoClick={handleLogoClick} />
          </section>
        </>
      )}
    </div>
  );
};

export default App;