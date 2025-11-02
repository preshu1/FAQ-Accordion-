const faqContainer = document.querySelector(".faq-container");

faqContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("faq-question")) {
    const faq = event.target.parentElement;
    faq.classList.toggle("active");
  }
});
