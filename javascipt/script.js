const faqContainer = document.querySelector(".faq-container");

/*faqContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("faq-question")) {
    const faq = event.target.parentElement;
    faq.classList.toggle("active");
  }
});*/

//only open one faq at a time

/*faqContainer.addEventListener("click", function (event) {
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
});*/
// dynamic method using array

const faqs = [
  {
    question: "What is event delegation?",
    answer:
      "Event delegation is a technique in JavaScript where you attach a single event listener to a parent element to manage events for multiple child elements.",
  },
  {
    question: "Why is event delegation useful?",
    answer:
      "It improves performance, reduces memory usage, and simplifies code by avoiding multiple event listeners for similar elements.",
  },
  {
    question: "How does event delegation work?",
    answer:
      "It works because of event bubbling — when an event occurs on a child element, it bubbles up to its parent, allowing the parent to handle it.",
  },
  {
    question: "What is event bubbling?",
    answer:
      "Event bubbling is the process where an event starts from the target element and moves upward through its ancestors in the DOM.",
  },
  {
    question: "Can all events be delegated?",
    answer:
      "Most bubbling events like click, keyup, and input can be delegated, but some events like focus or blur do not bubble by default.",
  },
  {
    question: "How can I detect which child was clicked?",
    answer:
      "You can use the event object’s target property, such as event.target, to find out which element triggered the event.",
  },
  {
    question: "What happens if new elements are added later?",
    answer:
      "Event delegation still works for dynamically added elements, as long as they match the event selector and are inside the parent listener.",
  },
  {
    question: "Is event delegation only for click events?",
    answer: "No, it can be used for many events like keyup, input, submit, mouseover, etc., as long as they bubble up.",
  },
  {
    question: "What’s the difference between event capturing and bubbling?",
    answer:
      "In capturing, the event is handled from the top (document) down to the target. In bubbling, it’s handled from the target up to the document.",
  },
  {
    question: "When should I avoid using event delegation?",
    answer:
      "Avoid it when dealing with non-bubbling events or when the event handling logic depends heavily on isolated components.",
  },
];
faqs.forEach((item) => {
  const faqDiv = document.createElement("div");
  faqDiv.classList.add("faq");
  faqDiv.innerHTML = `<h3 class="faq-question">${item.question}</h3>
   <p class="faq-answer">${item.answer}</p> `;
  faqContainer.appendChild(faqDiv);
});

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
