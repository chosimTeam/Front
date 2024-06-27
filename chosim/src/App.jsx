// import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chosim</h1>
        <nav>
          <ul>
            <li><a href="#home">myPage</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>myPage</h2>
          <p>This is the home section of the homepage.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This is the about section of the homepage.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section of the homepage.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Homepage</p>
      </footer>
    </div>
  );
}

export default App;
