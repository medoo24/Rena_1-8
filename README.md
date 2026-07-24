# Renal Medicine Lab — Interactive Website

A self-contained, offline-first study website built from four supplied renal medicine chapters:

1. Renal Principles
2. Renal Investigations
3. Proteinuria
4. Hematuria

## Open the website

Keep every file in the same folder, then open `index.html` in a modern browser. No installation, build step, account, or internet connection is required for the core website.

## Included

- 37 interconnected learning modules
- Structured renal anatomy, physiology, investigations, proteinuria, and hematuria teaching
- Original kidney, nephron, filtration-barrier, and urine-pattern visuals
- Searchable sidebar navigation with previous/next and related-module tabs
- Dark and light modes
- Three text-size settings
- Section-level text-to-speech with pause, resume from the same point, rate control, and reset
- Local progress, bookmarks, private notes, flashcard ratings, and quiz progress
- Interactive nephron transport explorer
- Interactive filtration-pressure calculator
- Cockcroft–Gault creatinine-clearance calculator with limitations
- Urine-pattern interpreter
- Proteinuria classifier
- 16 progressive clinical cases
- 72 flippable flashcards
- 40-question scored quiz with explanations
- Print/PDF-friendly layout that remains white even when the website is in dark mode
- Embedded access to all four original PDFs

## File structure

All runtime files are deliberately kept in one folder:

- `index.html` — application shell
- `styles.css` — screen styles and themes
- `print.css` — print/PDF export rules
- `render.js` — reusable interface and diagram components
- `data.js` — teaching modules, cases, flashcards, and quiz
- `labs.js` — interactive renal calculators and interpreters
- `study.js` — text-to-speech, flashcards, cases, quiz, and local study state
- `app.js` — routing, search, navigation, progress, bookmarks, notes, and preferences
- `01-renal-principles.pdf`
- `02-renal-investigations.pdf`
- `03-proteinuria.pdf`
- `04-hematuria.pdf`

## Keyboard and accessibility

- Press `/` to focus search.
- Use `Tab` and `Shift+Tab` to move through controls.
- Press `Enter` or `Space` to flip a flashcard.
- Nephron explorer tabs support arrow-key navigation.
- Focus indicators, landmarks, labels, skip navigation, accessible dialogs, and reduced-motion preferences are included.

## Educational scope

This is a revision resource, not patient-specific medical advice. Confirm clinical decisions against current local laboratory units, medicine labels, imaging protocols, and specialist guidance.
