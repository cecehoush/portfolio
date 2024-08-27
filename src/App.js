import React from 'react';
import './App.css';
import NavBar from './navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Welcome to My Website!!</h1>
        </section>
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
          <h2>About Me</h2>
        </section>
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>Nej</h2>
        </section>
      </main>
    </div>
  );
}

export default App;