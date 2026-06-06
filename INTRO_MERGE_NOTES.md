# Intro Merge Notes

- Replaced the previous portfolio intro with the latest standalone HUD intro.
- Original `src/components/IntroLoader.tsx` was overwritten with the HUD intro implementation.
- HUD intro image asset copied to `public/images/hud-rizki-photo.png`.
- HUD styles appended to `src/app/globals.css`.
- Flow remains: HUD intro -> main portfolio hero.
- The standalone intro is not kept as a separate route; it is now the active app intro.


## Fix scroll/layout issue
- Fixed broken merged CSS selector `html, .scene` that made the whole document `height: 100vh` and `overflow: hidden`.
- The selector is now scoped to `.hud-intro-overlay .scene`.
- Body and html overflow reset is now more robust after intro completes.


## Intro timing revision
- Removed the outro stage:
  - SYSTEM BOOT COMPLETE
  - PORTFOLIO READY
  - 0% - 100% loading
  - ENTERING MAIN HERO
- Flow is now HUD dashboard -> fade directly into main hero.
- Intro timings shortened to avoid feeling too long.


## Intro timing restored
- Intro timing restored to the earlier normal pacing.
- Outro remains removed.
- Flow remains: Identify -> Password -> Target scan -> Welcome -> Full HUD dashboard -> main hero.
