const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.toggle("hidden");

  if (!isExpanded) {
    document.addEventListener("click", handleOutsideClick);
  } else {
    document.removeEventListener("click", handleOutsideClick);
  }
});

function handleOutsideClick(event) {
  if (
    !mobileMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", handleOutsideClick);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

//scroll
const carousel = document.querySelector("#carousel");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

if (carousel && prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({
      left: -390 * 1,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({
      left: 390 * 1,
      behavior: "smooth",
    });
  });
}

const carousel2 = document.querySelector("#carousel2");
const prevButton2 = document.querySelector("#prevButton2");
const nextButton2 = document.querySelector("#nextButton2");

if (carousel2 && prevButton2 && nextButton2) {
  prevButton2.addEventListener("click", () => {
    carousel2.scrollBy({
      left: -390 * 1.1,
      behavior: "smooth",
    });
  });

  nextButton2.addEventListener("click", () => {
    carousel2.scrollBy({
      left: 390 * 1.1,
      behavior: "smooth",
    });
  });
}

// Scroll to Top Functionality
document
  .getElementById("scrollToTop")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  });

// animations.js

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  const elements = document.querySelectorAll(".fade-in, .scale-up");
  elements.forEach((el) => observer.observe(el));
});

// ----------------

// scroll-animations.js

document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".animate-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add "show" class when in view
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  animatedItems.forEach((item) => observer.observe(item));
});

//

// -----------
// script.js

// -------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements to animate
  const animatedLeft = document.querySelectorAll(".animate-item-left");
  const animatedRight = document.querySelectorAll(".animate-item-right");

  // Create IntersectionObserver to observe when the element comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add "show" class when element is in view
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe the left-side elements (e.g., phone image)
  animatedLeft.forEach((item) => observer.observe(item));
  // Observe the right-side elements (e.g., text, buttons)
  animatedRight.forEach((item) => observer.observe(item));
});

//
