'use client';

import { useState } from 'react';

export function VideoPoster() {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <div className="video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/X7Q16ITXozc?autoplay=1"
          title="Travel in Stockholm – exempel på interaktiv mobilguide"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button className="video-poster" type="button" onClick={() => setPlaying(true)} aria-label="Spela videon Travel in Stockholm">
      <img src="/media/travel-in-stockholm-poster.jpg" alt="Travel in Stockholm, interaktiv mobilguide" width="960" height="720" loading="lazy" />
      <span className="video-play" aria-hidden="true">▶</span>
      <span className="video-consent">Klicka för att ladda videon från YouTube</span>
    </button>
  );
}
