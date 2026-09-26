# Rebuild M Dhruv's portfolio in Lovable — bold visual refresh

Your GitHub site has strong content (APEX.AI battery intelligence, AERO.AI aero surrogate, metrics, skills, terminal contact) but a fairly generic dark "telemetry dashboard" skin, giant multi-megabyte images, and everything crammed on one scroll. This plan recreates it here with the same substance and a much stronger look.

## What stays (content carried over)

- Intro: M Dhruv, AI & Data Science undergrad at REVA University, Bengaluru
- Four headline numbers: ~2.3 ms p99 inference, 0.0% thermal-runaway false negatives, 1.158% state-of-health error, Reynolds range up to 2.0M
- Skills in four groups: languages & CS, ML/deep learning, backend & systems, simulation & tooling
- Two projects with their descriptions, results, stack, architecture flow and sample API response
- Education strip and coursework
- Contact: email, copy-address button, GitHub, LinkedIn

## Design step (first thing I do after approval)

I'll produce three rendered design concepts for the bold refresh and let you pick one before any of the site is built. Each keeps your engineering-instrument character but pushes further: heavy editorial typography, a distinctive accent palette, asymmetric layout, and restrained motion (numbers counting up, panels revealing on scroll, a subtle live-telemetry pulse in the hero).

## Pages

Rather than one long scroll, the content becomes real pages so each can be shared and found in search:

- `/` — hero, headline numbers, project teasers, short contact call to action
- `/work` — the two project records in full detail
- `/stack` — skills, tooling, education
- `/contact` — the terminal-style contact console

Every page gets its own title and social preview text.

## Fixes worth making while rebuilding

- Your current "Start a conversation" link points at an anchor that sits mid-section; contact becomes its own page, so it always lands right.
- The three project images are 4–5 MB each. I'll generate optimised artwork sized for the web so the site loads fast on mobile.
- Mobile layout gets proper treatment: readable numbers, stacked project records, working menu.

## Technical notes

- Built on the project's TanStack Start + Tailwind v4 stack; content lives in a single `src/data/portfolio.ts` module so text and numbers are easy to edit later.
- Design tokens (colours, fonts, radii, shadows) defined in `src/styles.css` from the chosen concept — no hardcoded colours in components.
- Components: `SiteHeader`, `Hero`, `MetricStrip`, `ProjectRecord`, `SkillPanels`, `TerminalContact`, `SiteFooter`.
- Motion via CSS/Motion-style transitions with reduced-motion respected.
- Project imagery generated as compressed assets in `src/assets/` and imported directly.
- No backend needed; the contact section stays mailto + copy-to-clipboard. If you later want a real contact form that stores messages, that needs Lovable Cloud and can be added.

## Open items

You didn't mention extra content, so I'll build with exactly what's in the repo. A resume download, more projects, or certificates can be added any time — just send the files or details.
