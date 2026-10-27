const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#service");
    const requestedService = link.dataset.service;
    [...serviceSelect.options].forEach((option) => {
      if (option.text === requestedService) serviceSelect.value = requestedService;
    });
  });
});

const reviews = [
  {
    quote: "«После полировки кузов выглядит совершенно иначе — цвет стал глубже, а мелкие следы почти не заметны. Всё объяснили до начала работ и показали результат при выдаче.»",
    name: "Алексей К.",
    car: "BMW 5 серии",
    initials: "АК"
  },
  {
    quote: "«Приятно, когда не навязывают лишнее. Осмотрели автомобиль, объяснили разницу между вариантами защиты и заранее согласовали стоимость. Результатом доволен.»",
    name: "Мария С.",
    car: "Mercedes-Benz GLC",
    initials: "МС"
  },
  {
    quote: "«Заказывал комплексную уборку салона. Уделили внимание деталям, материалам и труднодоступным местам. После выдачи всё выглядело аккуратно и свежо.»",
    name: "Дмитрий Р.",
    car: "Toyota Camry",
    initials: "ДР"
  }
];
let reviewIndex = 0;

function renderReview() {
  const review = reviews[reviewIndex];
  document.querySelector("#review-quote").textContent = review.quote;
  document.querySelector("#review-name").textContent = review.name;
  document.querySelector("#review-car").textContent = review.car;
  document.querySelector("#review-avatar").textContent = review.initials;
  document.querySelector("#review-counter").textContent =
    `${String(reviewIndex + 1).padStart(2, "0")} / ${String(reviews.length).padStart(2, "0")}`;
}
document.querySelector("#prev-review").addEventListener("click", () => {
  reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
  renderReview();
});
document.querySelector("#next-review").addEventListener("click", () => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  renderReview();
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const service = document.querySelector("#service").value;
  const message = document.querySelector("#form-message");
  message.textContent = `Спасибо, ${name}! Это демонстрационная форма: заявка на «${service}» не отправлена. Для реального сайта подключите обработчик формы.`;
});

document.querySelector("#year").textContent = new Date().getFullYear();
