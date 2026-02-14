
import React, { useState } from 'react';
import HeartBackground from './HeartBackground';

interface LandingPageProps {
  onAccept: () => void;
}

const questions = [
  "Will you accept me as your one and only Valentine?",
  "Are you sure? 🥺",
  "Think one more time please, my dear? 🙏",
  "You should not do that to me? 💔",
  "I'll be broke without you! 💸",
  "I know you are pretending! 😉"
];

const LandingPage: React.FC<LandingPageProps> = ({ onAccept }) => {
  const [noPos, setNoPos] = useState({ top: 'auto', left: 'auto' });
  const [isMoved, setIsMoved] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNoInteraction = () => {
    // Smoothly calculate next position
    const randomX = Math.floor(Math.random() * 60) + 20;
    const randomY = Math.floor(Math.random() * 60) + 20;
    
    setNoPos({ top: `${randomY}%`, left: `${randomX}%` });
    setIsMoved(true);
    
    // Each interaction grows Yes and cycles questions
    setYesScale(prev => Math.min(prev + 0.25, 3)); // Cap the scale slightly for mobile safety
    setQuestionIndex(prev => (prev + 1) % questions.length);
  };

  const handleYes = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onAccept();
    }, 2800);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen w-full bg-pink-100 flex items-center justify-center p-6 overflow-hidden">
        <HeartBackground count={120} />
        <div className="z-10 text-center space-y-6 bg-white/90 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] shadow-2xl animate-bounce border-4 border-pink-200 max-w-sm md:max-w-md">
          <h1 className="text-4xl md:text-6xl font-handwriting text-pink-600">I knew you will!😊😊</h1>
          <p className="text-7xl md:text-9xl animate-pulse drop-shadow-lg">🥰</p>
          <p className="text-5xl md:text-3xl text-pink-400 font-bold animate-pulse">Love you sweet heart!😚. Wait for it...🫣🤗</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-white to-pink-50 flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Higher heart density for entry page - hearts now stay moving */}
      <HeartBackground count={80} isMoving={true} />

      {/* Outer box is now smaller (max-w-xl instead of 3xl) */}
      <section className="z-10 text-center space-y-8 bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-white w-full max-w-lg transition-all duration-500">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-handwriting text-pink-600 drop-shadow-md">
            Hey Sweetie...
          </h1>
          <div className="min-h-[80px] flex items-center justify-center">
            <p className="text-xl md:text-2xl text-pink-500 font-bold italic leading-tight">
              {questions[questionIndex]}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 min-h-[180px] relative w-full">
          <button
            onClick={handleYes}
            style={{ transform: `scale(${yesScale})` }}
            className="px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-3xl font-black rounded-full shadow-xl transition-all duration-300 z-20 hover:ring-8 hover:ring-pink-100 active:scale-95"
          >
            YES! 💖
          </button>

          <button
            onMouseEnter={handleNoInteraction}
            onClick={handleNoInteraction}
            style={isMoved ? { 
              position: 'fixed', 
              top: noPos.top, 
              left: noPos.left, 
              zIndex: 100,
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' 
            } : {
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            className="px-8 py-3 bg-white text-pink-400 border-2 border-pink-100 text-lg font-bold rounded-full shadow-lg hover:bg-pink-50 active:scale-90"
          >
            No
          </button>
        </div>
      </section>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 text-6xl md:text-8xl opacity-30 animate-float pointer-events-none">🎈</div>
      <div className="absolute bottom-4 right-4 text-6xl md:text-8xl opacity-30 animate-float delay-700 pointer-events-none">🎈</div>
    </div>
  );
};

export default LandingPage;
