document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Scroll by 300px on each button click
  const scrollAmount = 300;

  // Scroll to the left
  prevButton.addEventListener("click", function () {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  // Scroll to the right
  nextButton.addEventListener("click", function () {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});
