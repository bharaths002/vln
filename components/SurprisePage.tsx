import React, { useState, useRef } from "react";
import HeartBackground from "./HeartBackground";
import PhotoFrame from "./PhotoFrame";

const SurprisePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const quotes = [
    "Every heartbeat of mine whispers your name. You are my greatest treasure. ❤️",
    "Time flies when I'm with you, making every second feel like a beautiful dream. ✨",
    "Happy moments with you are the highlights of my life. I love you endlessly. 🌹",
    "Your love is the rainbow that brightens up my darkest days. 🌈",
    "I fall in love with you more and more with every single passing moment. ⏳",
    "Being with you is where my heart finds its truest and happiest home. 🏠",
    "Thank you for being my valentine today, tomorrow, and for all eternity. ♾️",
  ];

  const photos: Record<number, string> = {
    100: "images/1.jpg",
    101: "images/2.jpg",
    102: "images/3.jpg",
    103: "images/4.jpg",
    104: "images/5.jpg",
    105: "images/6.jpg",
    106: "images/7.jpg",
  };

  return (
    <div
      className="min-h-screen w-full relative bg-gradient-to-b from-pink-50 via-rose-100 to-pink-300 flex flex-col items-center p-4 pb-40"
      onClick={() => isOpen && setIsOpen(false)}
    >
      <HeartBackground count={40} />

      {/* Corner Decorations */}
      <div className="fixed top-8 left-8 text-8xl z-50 animate-float opacity-90 pointer-events-none">
        🌈
      </div>
      <div className="fixed top-8 right-8 text-8xl z-50 animate-float opacity-90 pointer-events-none delay-700">
        🎈
      </div>
      <div className="fixed bottom-8 left-8 text-8xl z-50 animate-float opacity-90 pointer-events-none delay-1000">
        🎈
      </div>
      <div className="fixed bottom-8 right-8 text-8xl z-50 animate-float opacity-90 pointer-events-none delay-300">
        🌈
      </div>

      <div className="z-20 w-full max-w-7xl flex flex-col items-center mt-12 mb-32">
        <div className="text-center space-y-6 mb-20 bg-white/40 backdrop-blur-md p-10 rounded-[3rem] shadow-xl border-4 border-white/80">
          <h2 className="text-7xl md:text-9xl font-handwriting text-pink-600 drop-shadow-2xl animate-bounce">
            Yay! 💖🫂
          </h2>
          <p className="text-2xl md:text-4xl text-pink-500 font-black px-10 py-6">
            You are officially my Valentine!
          </p>
        </div>

        {/* Interactive Envelope Section */}
        <div
          className="relative w-full max-w-lg mt-48 mb-64 animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`transition-all duration-700 ease-in-out transform ${isOpen ? "translate-y-40 scale-110" : "translate-y-0 cursor-pointer hover:scale-105"}`}
            onClick={toggleEnvelope}
          >
            <div className="relative group">
              <div className="w-full h-80 bg-pink-300 rounded-b-[3rem] shadow-2xl relative overflow-hidden border-8 border-white/50">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-400 to-pink-500"></div>
              </div>

              <div
                className={`absolute top-0 left-0 w-full h-40 bg-pink-400 origin-top transition-all duration-700 z-30 rounded-t-[3rem] shadow-inner ${isOpen ? "transform -rotate-x-180 -translate-y-full opacity-0 pointer-events-none" : "rotate-x-0"}`}
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              ></div>

              <div
                className={`absolute left-8 right-8 bg-white p-12 shadow-2xl transition-all duration-1000 z-10 rounded-3xl border-4 border-pink-50 ${isOpen ? "-top-96 opacity-100 h-auto scale-100" : "top-10 opacity-0 h-0 scale-90 overflow-hidden"}`}
              >
                <div className="text-center space-y-8">
                  <span className="text-7xl animate-pulse inline-block">
                    💌
                  </span>
                  <h3 className="text-4xl font-handwriting text-pink-600 border-b-4 border-pink-100 pb-4">
                    To My One & Only,
                  </h3>
                  <div className="text-pink-500 text-xl leading-relaxed italic font-bold space-y-6">
                    <p>
                      "My world became infinitely brighter ✨ The moment I met
                      you.😽"
                    </p>
                    <p>
                      "I promise to love you with everything I have "💖MY LOVE
                      🫶."
                    </p>
                  </div>
                  <div className="flex justify-center gap-6 pt-6 text-5xl">
                    <span className="hover:scale-150 transition-transform cursor-pointer">
                      💖
                    </span>
                    <span className="hover:scale-150 transition-transform cursor-pointer">
                      💝
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 w-full h-40 bg-pink-200/40 z-20 pointer-events-none"
                style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)" }}
              ></div>

              <div
                className="
    absolute inset-0 
    flex items-center justify-center 
    z-40
  "
              >
                <div
                  onClick={toggleEnvelope}
                  className="
      bg-white p-6 rounded-full shadow-2xl
      transition-all duration-300
      hover:scale-125 active:scale-95
      cursor-pointer border-8 border-pink-100 animate-pulse

    "
                >
                  <span className="text-pink-600 text-4xl font-black">
                    {isOpen ? "💝" : "❤️"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Carousel Section with 7 Frames */}
        <div className="w-full mt-40 bg-white/50 backdrop-blur-xl p-16 md:p-24 rounded-[5rem] shadow-[0_30px_60px_-15px_rgba(236,72,153,0.3)] border-8 border-white/80">
          <div className="text-center mb-20 space-y-6">
            <h3 className="text-6xl font-handwriting text-pink-700 underline decoration-pink-300 underline-offset-12">
              Our Journey Together
            </h3>

            {/* LEFT ARROW */}
            <button
              onClick={scrollLeft}
              className="
    absolute left-6 top-1/2 -translate-y-1/2
    text-pink-500 text-6xl
    hover:scale-125 transition-transform
    z-50
  "
            >
              ❮
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={scrollRight}
              className="
    absolute right-6 top-1/2 -translate-y-1/2
    text-pink-500 text-6xl
    hover:scale-125 transition-transform
    z-50
  "
            >
              ❯
            </button>

            <p className="text-pink-500 font-black text-2xl uppercase tracking-[0.3em]">
              {" "}
              Magic Moments
            </p>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-16 pb-24 pt-10 px-10 scrollbar-hide snap-x scroll-smooth items-center"
          >
            {[100, 101, 102, 103, 104, 105, 106].map((id, index) => (
              <div key={id} className="snap-center shrink-0">
                <PhotoFrame
                  id={id}
                  imageUrl={photos[id]}
                  quote={quotes[index]}
                  className={`
                    ${index % 2 === 0 ? "rotate-6" : "-rotate-6"} 
                    hover:rotate-0 hover:scale-110 transition-all duration-500
                    ring-[16px] ring-white shadow-3xl
                    w-72 h-96
                  `}
                />
              </div>
            ))}
          </div>

          <div className="text-center text-pink-400 font-handwriting text-4xl animate-bounce mt-10">
            Swipe to see all our memories! ↔️
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes float-up {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: float-up 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SurprisePage;
