// Levels of questions
const quizLevels = [
  // Level 1: Gampang (Mudah) - 10 poin per jawaban benar
  [
    {
      question: "Apa bahasa Jawane 'Buku'?",
      options: ["Layang", "Buku", "Kertas", "Tulis", "Wacan"],
      correctAnswer: "Layang",
      points: 10
    },
    {
      question: "Bahasa Indonesia saka 'Turu' yaiku apa?",
      options: ["Makan", "Minum", "Tidur", "Lari", "Duduk"],
      correctAnswer: "Tidur",
      points: 10
    },
    {
      question: "Jeneng dina sawise Selasa yaiku...",
      options: ["Senin", "Kemis", "Jumat", "Rebo", "Sabtu"],
      correctAnswer: "Rebo",
      points: 10
    },
    {
      question: "Apa tegese 'Sedulur'?",
      options: ["Teman", "Kenalan", "Saudara", "Tetangga", "Musuh"],
      correctAnswer: "Saudara",
      points: 10
    },
    {
      question: "Wong tuwa lanang diarani...",
      options: ["Bapak", "Ibu", "Kakang", "Mbakyu", "Adhik"],
      correctAnswer: "Bapak",
      points: 10
    }
  ],
  // Level 2: Lumayan (Sedang) - 15 poin per jawaban benar
  [
    {
      question: "Tembung 'Pitik' ing basa Indonesia tegese apa?",
      options: ["Bebek", "Burung", "Ayam", "Angsa", "Kucing"],
      correctAnswer: "Ayam",
      points: 15
    },
    {
      question: "Apa bahasa Jawane 'Matahari'?",
      options: ["Rembulan", "Lintang", "Srengenge", "Langit", "Mega"],
      correctAnswer: "Srengenge",
      points: 15
    },
    {
      question: "Undhak-undhaking basa Jawa kang paling dhuwur yaiku...",
      options: ["Ngoko", "Krama", "Krama Inggil", "Madya", "Krama Lugu"],
      correctAnswer: "Krama Inggil",
      points: 15
    },
    {
      question: "Tegese tembung 'Sekolah' ing basa Jawa yaiku...",
      options: ["Sinau", "Maca", "Nulis", "Pawiyatan", "Mlaku"],
      correctAnswer: "Pawiyatan",
      points: 15
    },
    {
      question: "Ana ing basa Jawa, tembung 'Matur Nuwun' tegese...",
      options: ["Selamat Pagi", "Selamat Datang", "Terima Kasih", "Sampai Jumpa", "Apa Kabar"],
      correctAnswer: "Terima Kasih",
      points: 15
    }
  ],
  // Level 3: Sedeng (Menengah) - 20 poin per jawaban benar
  [
    {
      question: "Tokoh wayang Pandawa sing paling tuwa yaiku...",
      options: ["Arjuna", "Bima", "Yudhistira", "Nakula", "Sadewa"],
      correctAnswer: "Yudhistira",
      points: 20
    },
    {
      question: "Apa tegese ukara 'Ajining dhiri saka lathi'?",
      options: ["Harga diri dilihat dari pakaian", "Harga diri dilihat dari kekayaan", "Harga diri dilihat dari ucapan", "Harga diri dilihat dari perbuatan", "Harga diri dilihat dari keturunan"],
      correctAnswer: "Harga diri dilihat dari ucapan",
      points: 20
    },
    {
      question: "Sebutna jeneng pakaian adat Jawa kanggo wong lanang...",
      options: ["Kebaya", "Beskap", "Kemben", "Jarik", "Selendang"],
      correctAnswer: "Beskap",
      points: 20
    },
    {
      question: "Kraton Ngayogyakarta didegne dening...",
      options: ["Sultan Hamengku Buwono I", "Pakubuwono II", "Sultan Agung", "Panembahan Senopati", "Ki Ageng Pemanahan"],
      correctAnswer: "Sultan Hamengku Buwono I",
      points: 20
    },
    {
      question: "Upacara adat Jawa kanggo bayi umur 7 sasi yaiku...",
      options: ["Tedhak Siten", "Mitoni", "Tingkeban", "Brokohan", "Sepasaran"],
      correctAnswer: "Tedhak Siten",
      points: 20
    }
  ],
  // Level 4: Angel (Sulit) - 25 poin per jawaban benar
  [
    {
      question: "Panyandra kanggo nggambarake wanita sing ayu banget ing basa Jawa yaiku...",
      options: ["Bagus", "Gagah", "Ayu", "Ayu Tenan", "Ayu Lir Widadari"],
      correctAnswer: "Ayu Lir Widadari",
      points: 25
    },
    {
      question: "Apa tegese parikan 'Wedang kopi pait rasane, aja lali tanamane budi'?",
      options: ["Kopi rasanya pahit seperti perasaan yang sedih", "Kopi pahit membuat kita bersemangat", "Minumlah kopi agar tidak mengantuk", "Jangan lupa berbuat baik meskipun hidup pahit", "Kopi lebih enak diminum bersama teman"],
      correctAnswer: "Jangan lupa berbuat baik meskipun hidup pahit",
      points: 25
    },
    {
      question: "Apa kang diarani 'Sesotya'?",
      options: ["Emas", "Perak", "Intan", "Berlian", "Tembaga"],
      correctAnswer: "Intan",
      points: 25
    },
    {
      question: "Tokoh pewayangan sing dadi simbol keserakahan yaiku...",
      options: ["Semar", "Duryudana", "Arjuna", "Gatotkaca", "Kresna"],
      correctAnswer: "Duryudana",
      points: 25
    },
    {
      question: "Istilah 'Purwakanthi Guru Swara' ing basa Jawa yaiku...",
      options: ["Pantun", "Pengulangan kata", "Pengulangan huruf", "Pengulangan bunyi vokal", "Cerita pendek"],
      correctAnswer: "Pengulangan bunyi vokal",
      points: 25
    }
  ],
  // Level 5: Paling Angel (Sangat Sulit) - 30 poin per jawaban benar
  [
    {
      question: "Kitab Jawa Kuna kang ngandhut ilmu pemerintahan lan ditulis jaman Majapahit yaiku...",
      options: ["Negarakertagama", "Sutasoma", "Pararaton", "Arjunawiwaha", "Ramayana"],
      correctAnswer: "Negarakertagama",
      points: 30
    },
    {
      question: "Aksara Jawa 'ꦱ' maca ning apa?",
      options: ["Ha", "Na", "Ca", "Ra", "Sa"],
      correctAnswer: "Sa",
      points: 30
    },
    {
      question: "Apa tegese bebasan 'Kena iwake aja nganti buthek banyune'?",
      options: ["Mencari ikan di air keruh", "Mencapai tujuan tanpa merusak situasi", "Memancing di sungai yang bersih", "Bekerja tanpa mendapat hasil", "Berusaha dengan cara yang salah"],
      correctAnswer: "Mencapai tujuan tanpa merusak situasi",
      points: 30
    },
    {
      question: "Pambuka serat sing bener miturut unggah-ungguh basa Jawa yaiku...",
      options: ["Salam Kagem", "Sapa Aruh", "Pakurmatan", "Pangajeng-ajeng", "Salam Panutup"],
      correctAnswer: "Pakurmatan",
      points: 30
    },
    {
      question: "Ing jaman Mataram Islam, agama lan budaya Jawa diwangun dadi konsep...",
      options: ["Agami Jawi", "Kejawen", "Manunggaling Kawula Gusti", "Islam Kejawen", "Sinkretisme Jawa"],
      correctAnswer: "Manunggaling Kawula Gusti",
      points: 30
    }
  ]
];

// Game state variables
let currentLevel = 0;
let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0;
let levelScores = [0, 0, 0, 0, 0];
let timeLeft = 30;
let timerInterval;
const passingScore = 60; // Minimum percentage to pass a level

// Sound effects
const soundEffects = {
  correct: new Audio('https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3'),
  incorrect: new Audio('https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3'),
  levelComplete: new Audio('https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3'),
  click: new Audio('https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3')
};

// Level names
const levelNames = [
  "Gampang (Mudah)",
  "Lumayan (Sedang)",
  "Sedeng (Menengah)",
  "Angel (Sulit)",
  "Paling Angel (Sangat Sulit)"
];

// Motivational messages
const messages = {
  correct: ["Pinter tenan!", "Sip!", "Bener banget!", "Wah, sampean pinter!"],
  incorrect: ["Ora papa, tetep semangat!", "Dicoba meneh ya!", "Salah, ora masalah!"],
  goodScore: ["Sampean pancen pinter!", "Hebat tenan!", "Apik banget!"],
  okayScore: ["Lumayan apik!", "Ora elek!", "Semangat terus!"],
  lowScore: ["Tetep sinau ya!", "Aja nyerah!", "Sinau maneh ya!"]
};

// Select a random message from a category
function getRandomMessage(category) {
  const messagesArray = messages[category];
  const randomIndex = Math.floor(Math.random() * messagesArray.length);
  return messagesArray[randomIndex];
}

// Mulai kuis
function startQuiz() {
  // Play click sound
  soundEffects.click.play();
  
  // Update level indication in the UI
  document.getElementById("level-display").textContent = `Level ${currentLevel + 1}: ${levelNames[currentLevel]}`;
  
  // Sembunyikan Tombol start dan tampilkan level
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("language-screen").style.display = "none";
  
  // Reset score for the current level
  score = 0;
  currentQuestionIndex = 0;
  
  displayQuestion();
  startTimer();
}

// Memilih bahasa
function selectLanguage(language) {
  // For now, only Javanese is implemented
  soundEffects.click.play();
  document.getElementById("language-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

// Memilih level
function selectLevel(level) {
  soundEffects.click.play();
  currentLevel = level;
  startQuiz();
}

// Tampilan beranda
function showHomePage() {
  soundEffects.click.play();
  document.getElementById("language-screen").style.display = "block";
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("final-score-screen").style.display = "none";
  
  // Reset all scores
  totalScore = 0;
  levelScores = [0, 0, 0, 0, 0];
  
  // Reset timer if it's running
  clearInterval(timerInterval);
}

// Go to level selection
function showLevelSelection() {
  soundEffects.click.play();
  document.getElementById("language-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("final-score-screen").style.display = "none";
  
  // Reset timer if it's running
  clearInterval(timerInterval);
}

// Tampilan soal
function displayQuestion() {
  const currentLevelQuestions = quizLevels[currentLevel];
  const currentQuestion = currentLevelQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const feedbackElement = document.getElementById("feedback-message");
  
  // Clear feedback message
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback-message";

  // Hapus Soal yang sudah di kerjakan
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Tampilkan soal
  questionText.innerHTML = currentQuestion.question;

  // Tampilkan nomor soal saat ini
  document.getElementById("question-number").textContent = `Soal ${currentQuestionIndex + 1} saking ${currentLevelQuestions.length}`;

  // Buat Button untuk jawaban
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Check Jawaban
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

// Memilih Jawaban
function checkAnswer(selectedOption) {
  const currentLevelQuestions = quizLevels[currentLevel];
  const currentQuestion = currentLevelQuestions[currentQuestionIndex];
  const feedbackElement = document.getElementById("feedback-message");
  
  // Nonaktifkan semua tombol setelah jawaban dipilih
  const buttons = document.querySelectorAll(".answer-button");
  buttons.forEach(button => {
    button.disabled = true;
    
    // Tandai jawaban yang benar dan salah
    if (button.innerText === currentQuestion.correctAnswer) {
      button.classList.add("correct");
    } else if (button.innerText === selectedOption && selectedOption !== currentQuestion.correctAnswer) {
      button.classList.add("incorrect");
    }
  });

  // Jika benar
  if (selectedOption === currentQuestion.correctAnswer) {
    score += currentQuestion.points;
    levelScores[currentLevel] += currentQuestion.points;
    totalScore += currentQuestion.points;
    soundEffects.correct.play();
    
    // Show positive feedback
    feedbackElement.textContent = getRandomMessage("correct");
    feedbackElement.className = "feedback-message correct-feedback";
  } else {
    soundEffects.incorrect.play();
    
    // Show encouragement feedback
    feedbackElement.textContent = getRandomMessage("incorrect");
    feedbackElement.className = "feedback-message incorrect-feedback";
  }

  // Tunggu sebentar sebelum ke soal berikutnya
  setTimeout(() => {
    // Pindah Ke soal berikutnya
    currentQuestionIndex++;

    if (currentQuestionIndex < currentLevelQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }, 2000);
}

// Memulai Timer
function startTimer() {
  // Reset timer
  timeLeft = 30;
  document.getElementById("timer").textContent = timeLeft;
  
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    timeLeft--;

    // Timer
    document.getElementById("timer").textContent = timeLeft;

    // Animate timer when low
    if (timeLeft <= 10) {
      document.getElementById("timer").classList.add("timer-warning");
    } else {
      document.getElementById("timer").classList.remove("timer-warning");
    }

    // Selesaikan Quis Jika waktu habis
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Akhir Quis
function endQuiz() {
  // Play level complete sound
  soundEffects.levelComplete.play();
  
  // Berhenti kan Waktunya
  clearInterval(timerInterval);

  // Hitung score
  const currentLevelQuestions = quizLevels[currentLevel];
  const maxLevelScore = currentLevelQuestions.reduce((total, question) => total + question.points, 0);
  const scorePercentage = Math.round((score / maxLevelScore) * 100);
  
  // Tampilkan layar hasil
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  
  const resultTitle = document.getElementById("result-title");
  const resultScore = document.getElementById("result-score");
  const resultMessage = document.getElementById("result-message");
  const btnContainer = document.getElementById("result-buttons");
  
  resultTitle.textContent = `Level ${currentLevel + 1}: ${levelNames[currentLevel]} Rampung!`;
  resultScore.textContent = `Biji: ${score} saking ${maxLevelScore} (${scorePercentage}%)`;
  
  // Set result message based on score
  if (scorePercentage >= 80) {
    resultMessage.textContent = getRandomMessage("goodScore");
  } else if (scorePercentage >= 60) {
    resultMessage.textContent = getRandomMessage("okayScore");
  } else {
    resultMessage.textContent = getRandomMessage("lowScore");
  }
  
  // Kosongkan container tombol
  btnContainer.innerHTML = "";
  
  // Tambahkan tombol sesuai kondisi
  
  // Tombol ulangi
  const retryBtn = document.createElement("button");
  retryBtn.textContent = "Baleni";
  retryBtn.classList.add("result-button");
  retryBtn.addEventListener("click", () => retryLevel());
  btnContainer.appendChild(retryBtn);
  
  // Tombol kembali
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Wangsul";
  homeBtn.classList.add("result-button");
  homeBtn.addEventListener("click", () => showLevelSelection());
  btnContainer.appendChild(homeBtn);
  
  // Tombol lihat skor akhir
  const finalScoreBtn = document.createElement("button");
  finalScoreBtn.textContent = "Deleng Biji";
  finalScoreBtn.classList.add("result-button");
  finalScoreBtn.addEventListener("click", () => showFinalScore());
  btnContainer.appendChild(finalScoreBtn);
  
  // Tombol lanjutkan (jika masih ada level berikutnya dan skornya cukup)
  if (currentLevel < quizLevels.length - 1 && scorePercentage >= passingScore) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Lanjut";
    nextBtn.classList.add("result-button", "next-button");
    nextBtn.addEventListener("click", () => {
      currentLevel++;
      startQuiz();
    });
    btnContainer.appendChild(nextBtn);
  } else if (currentLevel === quizLevels.length - 1) {
    resultMessage.textContent += " Sampean wis ngrampungake kabeh level!";
  }
}

// Ulangi level
function retryLevel() {
  soundEffects.click.play();
  startQuiz();
}

// Show final score screen
function showFinalScore() {
  soundEffects.click.play();
  
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("final-score-screen").style.display = "block";
  
  const finalScoreTable = document.getElementById("final-score-table");
  const totalScoreElement = document.getElementById("total-final-score");
  
  // Clear previous table content
  finalScoreTable.innerHTML = "";
  
  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  
  const levelHeader = document.createElement("th");
  levelHeader.textContent = "Level";
  headerRow.appendChild(levelHeader);
  
  const scoreHeader = document.createElement("th");
  scoreHeader.textContent = "Biji";
  headerRow.appendChild(scoreHeader);
  
  thead.appendChild(headerRow);
  finalScoreTable.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement("tbody");
  
  // Calculate max possible score
  const maxPossibleScores = quizLevels.map(level => 
    level.reduce((total, question) => total + question.points, 0)
  );
  
  // Add rows for each level
  for (let i = 0; i < quizLevels.length; i++) {
    const row = document.createElement("tr");
    
    const levelCell = document.createElement("td");
    levelCell.textContent = `Level ${i + 1}: ${levelNames[i]}`;
    row.appendChild(levelCell);
    
    const scoreCell = document.createElement("td");
    scoreCell.textContent = `${levelScores[i]} / ${maxPossibleScores[i]}`;
    row.appendChild(scoreCell);
    
    tbody.appendChild(row);
  }
  
  finalScoreTable.appendChild(tbody);
  
  // Update total score
  const maxTotalScore = maxPossibleScores.reduce((total, score) => total + score, 0);
  totalScoreElement.textContent = `Biji Total: ${totalScore} saking ${maxTotalScore}`;
  
  // Add achievement message based on total score percentage
  const achievementElement = document.getElementById("achievement-message");
  const scorePercentage = Math.round((totalScore / maxTotalScore) * 100);
  
  if (scorePercentage >= 80) {
    achievementElement.textContent = "Prestasi: Ahli Basa Jawa!";
    achievementElement.className = "achievement high";
  } else if (scorePercentage >= 60) {
    achievementElement.textContent = "Prestasi: Wasis Basa Jawa!";
    achievementElement.className = "achievement medium";
  } else {
    achievementElement.textContent = "Prestasi: Sinau Basa Jawa!";
    achievementElement.className = "achievement low";
  }
}

// Initialize game on page load
document.addEventListener("DOMContentLoaded", function() {
  // Add event listeners for language selection
  document.getElementById("java-language-button").addEventListener("click", () => selectLanguage("java"));
  
  // Add event listeners for home page level buttons
  document.getElementById("level1-button").addEventListener("click", () => selectLevel(0));
  document.getElementById("level2-button").addEventListener("click", () => selectLevel(1));
  document.getElementById("level3-button").addEventListener("click", () => selectLevel(2));
  document.getElementById("level4-button").addEventListener("click", () => selectLevel(3));
  document.getElementById("level5-button").addEventListener("click", () => selectLevel(4));
  
  // Add event listeners for final score screen buttons
  document.getElementById("play-again-button").addEventListener("click", showHomePage);
  document.getElementById("return-levels-button").addEventListener("click", showLevelSelection);
  
  // Show language selection screen
  showHomePage();
});