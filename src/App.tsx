/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VideoBackground } from './components/VideoBackground';
import { Hero } from './components/Hero';

export default function App() {
  const [notification, setNotification] = useState<string | null>(null);

  const handleBeginJourney = () => {
    setNotification('Bem vindo ao Terrazap Leituras. Sua jornada começa aqui.');
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <div
      id="aethera-hero-container"
      className="relative min-h-screen w-full overflow-hidden bg-white selection:bg-black selection:text-white"
    >
      {/* Background video layer (z-0) with custom fade loop and gradient overlays */}
      <VideoBackground />

      {/* Navigation bar (z-10) */}
      <Navbar onCtaClick={handleBeginJourney} />

      {/* Hero section (z-10) */}
      <Hero onCtaClick={handleBeginJourney} />

      {/* Interactive feedback notification */}
      {notification && (
        <div
          id="journey-toast"
          role="status"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm tracking-wide shadow-2xl backdrop-blur-md animate-fade-rise"
        >
          {notification}
        </div>
      )}
    </div>
  );
}
