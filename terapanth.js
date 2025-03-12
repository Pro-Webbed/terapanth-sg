document.addEventListener("DOMContentLoaded", function () {
  // Initialize any interactive elements
  setupFAQToggle();
  setupFormValidation();
});

// Toggle FAQ answers
function setupFAQToggle() {
  const faqItems = document.querySelectorAll(".faq-item h3");

  if (faqItems) {
    faqItems.forEach((item) => {
      item.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
          this.classList.remove("active");
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          this.classList.add("active");
        }
      });
    });
  }
}
