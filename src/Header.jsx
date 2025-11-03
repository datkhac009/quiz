import quizAvatar from "./assets/quiz-avartar.png";

export function Header() {
  return (
    <>
      <header className="app-header">
        <img src={quizAvatar} alt="React" />
        <h1>🎮 Welcome to the Ultimate Game Quiz!</h1>
      </header>
    </>
  );
}
