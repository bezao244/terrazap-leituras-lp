import { useEffect, useRef } from 'react';
import defaultVideo from '../assets/kling_20260904_VIDEO_Use_the_pr_27_0.mp4';

interface VideoBackgroundProps {
  videoSrc?: string;
}

export function VideoBackground({
  videoSrc = defaultVideo,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let isTransitioning = false;

    const monitorLoopFade = () => {
      if (video && !isTransitioning && video.duration && !video.paused) {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const fadeDuration = 0.5;

        let opacity = 1;

        if (currentTime < fadeDuration) {
          // Fade in over 0.5s at the start (opacity 0 to 1)
          opacity = Math.min(1, Math.max(0, currentTime / fadeDuration));
        } else if (duration > 0 && currentTime > duration - fadeDuration) {
          // Fade out over 0.5s before the end (opacity 1 to 0)
          opacity = Math.max(0, Math.min(1, (duration - currentTime) / fadeDuration));
        } else {
          opacity = 1;
        }

        video.style.opacity = opacity.toString();
      } else if (video && video.paused) {
        // Keep the first frame visible if autoplay is blocked by browser policy.
        video.style.opacity = '1';
      }

      rafId = requestAnimationFrame(monitorLoopFade);
    };

    const handleEnded = () => {
      isTransitioning = true;
      if (video) {
        // On ended event: set opacity to 0, wait 100ms, reset currentTime = 0, then play() again
        video.style.opacity = '0';
        setTimeout(() => {
          if (video) {
            video.currentTime = 0;
            video
              .play()
              .then(() => {
                isTransitioning = false;
              })
              .catch((err) => {
                console.warn('Playback resume encountered:', err);
                isTransitioning = false;
              });
          }
        }, 100);
      }
    };

    video.addEventListener('ended', handleEnded);
    rafId = requestAnimationFrame(monitorLoopFade);

    // Initial play trigger
    video.play().catch((err) => {
      console.warn('Initial autoplay paused by browser policy:', err);
      video.style.opacity = '1';
    });

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoSrc]);

  return (
    <div
      id="video-background-layer"
      className="absolute z-0 overflow-hidden pointer-events-none"
      style={{
        top: '300px',
        inset: 'auto 0 0 0',
        height: 'calc(100% - 300px)',
      }}
    >
      {/* Background Video */}
      <video
        id="hero-loop-video"
        key={videoSrc}
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center transition-opacity duration-300"
        style={{ opacity: 1 }}
      />

      {/* Gradient overlays: absolute inset-0 bg-gradient-to-b from-background via-transparent to-background positioned over the video */}
      <div
        id="video-gradient-overlay"
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"
      />
    </div>
  );
}
