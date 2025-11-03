import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QuizProvider } from "./contexts/QuizContext.jsx";
import { getQuestionsFromStorage } from "./utils/localStorage";

// Khởi tạo localStorage ngay khi app load (gọi hàm để trigger default data nếu chưa có)
getQuestionsFromStorage();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
