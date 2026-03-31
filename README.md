# Ultimate Game Quiz

An interactive quiz application built with React and Vite. Players can answer multiple-choice questions, track their score in real time, and compete on a persistent leaderboard.

## Live Demo

[https://quizss-phi.vercel.app/](https://quizss-phi.vercel.app/)

## Features

- 15 multiple-choice questions about the gaming world
- Player name input before the game starts
- Countdown timer per quiz session (2 minutes 30 seconds)
- Progress bar showing current question and score
- Leaderboard that persists across page reloads via localStorage
- Upsert logic — same player name updates the existing score if the new one is higher
- Quit button to exit the game mid-session
- Responsive design

## Tech Stack

| Technology | Description |
|------------|-------------|
| React 18 | UI library |
| Vite | Build tool and dev server |
| useReducer | Complex state management |
| Context API | Global state sharing |
| localStorage | Client-side data persistence |
| Vanilla CSS | Styling with glassmorphism and animations |

## Project Structure

```
src/
├── contexts/
│   └── QuizContext.jsx     # Global state and reducer
├── utils/
│   ├── localStorage.js     # Questions and leaderboard storage
│   └── Date.js             # Date formatting utility
├── App.jsx
├── Header.jsx
├── StarSreen.jsx           # Start screen with name input
├── Questions.jsx
├── Progress.jsx
├── Timer.jsx
├── NextButton.jsx
├── FineshScreen.jsx        # Results screen
├── Leaderboard.jsx
└── App.css
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Author

Dat Nguyen