// Налаштування гри «Газетний сканворд».
// Змінюй лише значення в лапках.
window.APP_CONFIG = {
  // Посилання на твого бота (необов'язково), наприклад "https://t.me/my_scanword_bot"
  BOT_LINK: "",

  // Адреса Firebase Realtime Database для «Залу слави» (необов'язково).
  // Приклад: "https://my-project-default-rtdb.europe-west1.firebasedatabase.app"
  // Якщо порожньо — Зал слави показує лише твої особисті результати.
  FIREBASE_DB_URL: "",

  // Файл з випусками
  DATA_FILE: "scanwords.json",

  // Збільшуй число (2, 3, 4...) після кожного оновлення scanwords.json або фото,
  // щоб Telegram не показував стару закешовану версію.
  VERSION: "2"
};
