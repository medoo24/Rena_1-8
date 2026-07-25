# Renal Medicine Lab — Interactive Website

A self-contained, offline-first study website built from eight supplied renal medicine chapters:

1. Renal Principles
2. Renal Investigations
3. Proteinuria
4. Hematuria
5. Glomerulonephritis
6. Diabetic Kidney Disease
7. Nephrotic Syndrome
8. Nephritic Syndrome

## Open the website

Keep every file in the same folder, then open `index.html` in a modern browser. No installation, build step, account, or internet connection is required for the core website.

## Included

- 76 interconnected learning modules
- Integrated renal anatomy, physiology, investigations, urinary abnormalities, glomerular disease, diabetic kidney disease, nephrotic syndrome, and nephritic syndrome
- Searchable sidebar navigation with previous/next controls and related-module links
- Persistent light/night mode and three text-size settings
- Section-level text-to-speech with British-English voice preference, speed control, pause/resume from the same point, and reset
- Local progress, bookmarks, private notes, flashcard ratings, and quiz progress
- Nine interactive tools:
  - Nephron transport explorer
  - Filtration-pressure calculator
  - Cockcroft–Gault creatinine-clearance calculator
  - Urine-pattern interpreter
  - Proteinuria classifier
  - Glomerulonephritis pattern interpreter
  - Diabetic kidney disease risk and atypicality lab
  - Nephrotic syndrome lab
  - Nephritic differential lab
- 32 progressive clinical cases
- 140 functional flippable flashcards
- 84-question scored quiz with explanations
- Print/PDF-friendly layout that remains white even when the website is in night mode
- Embedded access to all eight original PDFs
- Responsive keyboard-accessible desktop and mobile interface

## File structure

All runtime files and source PDFs are deliberately kept in one folder:

- `index.html` — application shell
- `styles.css` — screen styles and themes
- `print.css` — print/PDF export rules
- `render.js` — reusable interface and diagram components
- `data.js` — chapters 1–5, cases, flashcards, and quiz data
- `chapters-6-8.js` — chapters 6–8, added cases, flashcards, quizzes, and labs
- `labs.js` — interactive renal calculators and interpreters
- `study.js` — text-to-speech, flashcards, cases, quiz, and local study state
- `app.js` — routing, search, navigation, progress, bookmarks, notes, and preferences
- `01-renal-principles.pdf`
- `02-renal-investigations.pdf`
- `03-proteinuria.pdf`
- `04-hematuria.pdf`
- `05-glomerulonephritis.pdf`
- `06-diabetic-kidney-disease.pdf`
- `07-nephrotic-syndrome.pdf`
- `08-nephritic-syndrome.pdf`

## Keyboard and accessibility

- Press `/` to focus search.
- Use `Tab` and `Shift+Tab` to move through controls.
- Press `Enter` or `Space` to flip a flashcard.
- Nephron explorer tabs support arrow-key navigation.
- Focus indicators, landmarks, labels, skip navigation, accessible dialogs, and reduced-motion preferences are included.

## Educational scope

This is a revision resource, not patient-specific medical advice. Confirm clinical decisions against current local laboratory units, medicine labels, imaging protocols, and specialist guidance.
