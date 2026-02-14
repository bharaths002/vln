
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import SurprisePage from './components/SurprisePage';

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    // Optional: Add a small sound or haptic feedback here
    setAccepted(true);
  };

  return (
    <div className="antialiased text-gray-800">
      {!accepted ? (
        <LandingPage onAccept={handleAccept} />
      ) : (
        <SurprisePage />
      )}
    </div>
  );
};

export default App;
