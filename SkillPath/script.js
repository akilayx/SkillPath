// ================== ПОИСК НА ГЛАВНОЙ ==================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    // Ничего не фильтруем на главной
    // Поиск используется только для перехода
  });
}

// ================== ОТКРЫТИЕ СТРАНИЦЫ СТАЖИРОВОК ==================
function openInternships() {
  const query = document.getElementById("searchInput")?.value || "";

  // скрываем всё старое
  document.querySelectorAll("header, section:not(#internships-page), footer")
    .forEach(el => el.style.display = "none");

  // показываем страницу стажировок
  const page = document.getElementById("internships-page");
  page.style.display = "block";

  // передаём поисковый запрос
  const search = document.getElementById("globalSearch");
  if (search) {
    search.value = query.toLowerCase();
    filterInternships();
  }
}

// ================== ВОЗВРАТ НАЗАД ==================
function goBack() {
  document.querySelectorAll("header, section, footer")
    .forEach(el => el.style.display = "");
  document.getElementById("internships-page").style.display = "none";
}

// ================== ПОИСК НА СТРАНИЦЕ СТАЖИРОВОК ==================
function filterInternships() {
  const value = document.getElementById("globalSearch").value.toLowerCase();
  const cards = document.querySelectorAll("#allInternships .card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
}

document.addEventListener("input", function (e) {
  if (e.target.id === "globalSearch") {
    filterInternships();
  }
});

// ================== КНОПКИ ПОДАЧИ ЗАЯВКИ ==================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("applyBtn")) {
    openInternships();
  }

  if (e.target.tagName === "BUTTON" && e.target.innerText.includes("Подать")) {
    alert("Заявка принята! Следующий этап — виртуальная стажировка 🚀");
  }
});

// ================== ФОРМА КОНТАКТА ==================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Спасибо! Мы скоро с вами свяжемся 💌");
    form.reset();
  });
}