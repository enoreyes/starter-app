import { useState } from 'react';
import './App.css';

function App() {
  // State will be used later for the counter
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Hello Factory</h1>
      <div className="card">
        <p>
          Welcome to your first Tauri app! This minimal starter is ready for you
          to customize.
        </p>
        
        {/* This section will be modified during the tutorial to add a counter button */}
        <div className="actions">
          {/* Counter button will be added here */}
        </div>
      </div>
      
      <p className="footer">
        Powered by Tauri, React, and TypeScript
      </p>
    </div>
  );
}

export default App;
