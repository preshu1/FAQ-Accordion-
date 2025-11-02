const faqContainer = document.querySelector(".faq-container");

/*faqContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("faq-question")) {
    const faq = event.target.parentElement;
    faq.classList.toggle("active");
  }
});*/

//only open one faq at a time

faqContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("faq-question")) {
    const clickedFaq = event.target.parentElement;

    const allFaq = faqContainer.querySelectorAll(".faq");
    allFaq.forEach((faq) => {
      if (faq !== clickedFaq) {
        faq.classList.remove("active");
      }
    });

    clickedFaq.classList.toggle("active");
  }
});
