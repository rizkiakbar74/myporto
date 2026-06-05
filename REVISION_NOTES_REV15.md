REV15 updates:
- Re-encoded hero.mp4 to browser-safe H.264 MP4 with +faststart.
- Added a poster image at public/videos/hero-scroll-poster.jpg.
- Updated ScrollVideoHero to use <source type="video/mp4"> and poster fallback.
- Forces video.load() on mount and seeks to a tiny visible frame after metadata loads.
- Keeps scroll-scrubbing active only while ScrollVideoHero is in the viewport.
- Pauses the video once the user leaves the section.
