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
      left: -390 * 0.8,
      behavior: "smooth",
    });
  });

  nextButton2.addEventListener("click", () => {
    carousel2.scrollBy({
      left: 390 * 0.8,
      behavior: "smooth",
    });
  });
}

// Scroll to Top Functionality
document
  .getElementById("scrollToTop")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedLeft.forEach((item) => observer.observe(item));
  animatedRight.forEach((item) => observer.observe(item));
});

//

// button nav hover active

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      navLinks.forEach((el) => {
        el.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});

//  select nav language

const toggle = document.getElementById("dropdownToggle");
const menu = document.getElementById("dropdownMenu");

// Open and close dropdown with animation
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Update the selected value
const options = document.querySelectorAll("#dropdownMenu li");
options.forEach((option) => {
  option.addEventListener("click", () => {
    toggle.textContent = option.dataset.value;
    menu.classList.remove("show");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    menu.classList.remove("show");
  }
});

// 2nd mobile view
const toggle2 = document.getElementById("dropdownToggle2");
const menu2 = document.getElementById("dropdownMenu2");

// Open and close dropdown with animation
toggle2.addEventListener("click", () => {
  menu2.classList.toggle("show");
});

// Update the selected value
const options2 = document.querySelectorAll("#dropdownMenu2 li");
options2.forEach((option) => {
  option.addEventListener("click", () => {
    toggle2.textContent = option.dataset.value;
    menu2.classList.remove("show");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    menu2.classList.remove("show");
  }
});

//image rotetor
/**
 * Rotates an image continuously with a given speed.
 * @param {string} imageId - The ID of the image element.
 * @param {number} speed - The rotation speed in seconds (lower is faster).
 */
function rotateImageContinuously(imageId, speed) {
  const image = document.getElementById(imageId);

  if (image) {
    // Dynamically create a <style> tag to hold the keyframes
    const styleTag = document.createElement("style");
    styleTag.type = "text/css";
    const keyframes = `
      @keyframes rotateAnimation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }
    `;

    // Append the keyframes to the style tag
    styleTag.appendChild(document.createTextNode(keyframes));
    document.head.appendChild(styleTag);

    // Apply the animation to the image
    image.style.animation = `rotateAnimation ${speed}s linear infinite`;
  } else {
    console.error(
      `Image with ID "${imageId}" not found. Check if the ID is correct.`
    );
  }
}
