// Utility functions để quản lý localStorage

const STORAGE_KEY = "quiz_questions_data";
const DEFAULT_QUESTIONS = [
  {
    question: "Trò chơi nào được xem là GOTY?",
    options: ["PUBG", "Fortnite", "H1Z1", "Apex Legends"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Nhân vật chính trong series game 'The Legend of Zelda' là ai?",
    options: ["Zelda", "Ganon", "Link", "Midna"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Trong tựa game 'Among Us', nhiệm vụ của Impostor là gì?",
    options: [
      "Hoàn thành nhiệm vụ nhanh nhất",
      "Giết Crewmate mà không bị phát hiện",
      "Tìm ra ai là Impostor",
      "Cố gắng cứu phi hành đoàn",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Tựa game nào sau đây là sản phẩm của Riot Games?",
    options: ["Overwatch", "Valorant", "Dota 2", "Counter-Strike 2"],
    correctOption: 1,
    points: 10,
  },
  {
    question:
      "Trong 'Minecraft', nguyên liệu nào dùng để chế tạo cúp kim cương?",
    options: [
      "3 viên kim cương và 2 que gỗ",
      "4 viên kim cương và 1 thanh sắt",
      "3 viên ngọc lưu ly và 2 que gỗ",
      "2 viên kim cương và 3 que gỗ",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Hãng phát triển game 'Grand Theft Auto' (GTA) là ai?",
    options: ["Ubisoft", "Rockstar Games", "EA Games", "CD Projekt Red"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Trò chơi nào được xem là biểu tượng của thể loại MOBA?",
    options: ["Dota 2", "Overwatch", "PUBG", "Apex Legends"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "Trong 'League of Legends', Baron Nashor xuất hiện lần đầu ở phút thứ bao nhiêu?",
    options: ["10", "15", "20", "25"],
    correctOption: 2,
    points: 20,
  },
  {
    question: "Tựa game nào sau đây có nhân vật chính là Geralt of Rivia?",
    options: [
      "The Elder Scrolls V: Skyrim",
      "The Witcher 3: Wild Hunt",
      "Dark Souls III",
      "Dragon Age: Inquisition",
    ],
    correctOption: 1,
    points: 20,
  },
  {
    question: "Trò chơi nào nổi tiếng với câu nói: “Finish Him!”?",
    options: ["Street Fighter", "Tekken", "Mortal Kombat", "Injustice"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Console đầu tiên của Sony có tên là gì?",
    options: ["PlayStation", "PlayStation 2", "PS Vita", "PSP"],
    correctOption: 0,
    points: 10,
  },
  {
    question: "Trò chơi 'Genshin Impact' thuộc thể loại nào?",
    options: ["FPS", "MOBA", "Open-world RPG", "Battle Royale"],
    correctOption: 2,
    points: 20,
  },
  {
    question: "Nhà phát triển của tựa game 'Cyberpunk 2077' là ai?",
    options: ["CD Projekt Red", "Bethesda", "Ubisoft", "Rockstar Games"],
    correctOption: 0,
    points: 20,
  },
  {
    question: "Trong 'Valorant', kỹ năng tối thượng của nhân vật Jett là gì?",
    options: ["Blade Storm", "Shock Bolt", "Resurrection", "Run It Back"],
    correctOption: 0,
    points: 20,
  },
  {
    question: "Game nào sau đây KHÔNG phải là sản phẩm của Nintendo?",
    options: ["Pokémon", "Super Mario", "Halo", "Animal Crossing"],
    correctOption: 2,
    points: 10,
  },
];

// Lấy data từ localStorage, nếu không có thì trả về default data
export function getQuestionsFromStorage() {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Kiểm tra xem data có hợp lệ không
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        return parsedData;
      }
    }
    // Nếu không có data hoặc data không hợp lệ, trả về default và lưu vào storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_QUESTIONS));
    return DEFAULT_QUESTIONS;
  } catch (error) {
    console.error("Error getting questions from localStorage:", error);
    return DEFAULT_QUESTIONS;
  }
}
