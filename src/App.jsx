import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage.jsx'; // Import your LoginPage component

function App() {
  return (
    <>
      <div className="App">
        <LoginPage /> {/* Render the LoginPage component here */}
      </div>
    </>
  );
}

export default App;
