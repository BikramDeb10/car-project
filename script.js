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

//

// how its work

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
  }
}

//------This is how our fleet portal works

document.addEventListener("DOMContentLoaded", () => {
  const imageSliderTrack = document.getElementById("image-slider-track");
  const textSliderTrack = document.getElementById("text-slider-track");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const totalSlides = imageSliderTrack.children.length;
  let currentSlide = 0;

  const updateSlider = () => {
    const translateValue = `-${currentSlide * 100}%`;
    imageSliderTrack.style.transform = `translateX(${translateValue})`;
    textSliderTrack.style.transform = `translateX(${translateValue})`;
  };

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });
});

// VIP car Pricing

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");

  // Set the first button as active by default
  const firstButton = buttons[0];
  firstButton.classList.add("bg-gray-900", "text-white");

  // Add event listeners to toggle the active state on buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active styles from all buttons
      buttons.forEach((btn) =>
        btn.classList.remove("bg-gray-900", "text-white")
      );
      // Add active styles to the clicked button
      button.classList.add("bg-gray-900", "text-white");
    });
  });
});

// 2222222222222

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn2");

  // Set the first button as active by default
  const firstButton = buttons[0];
  firstButton.classList.add("bg-gray-900", "text-white");

  // Add event listeners to toggle the active state on buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active styles from all buttons
      buttons.forEach((btn) =>
        btn.classList.remove("bg-gray-900", "text-white")
      );
      // Add active styles to the clicked button
      button.classList.add("bg-gray-900", "text-white");
    });
  });
});

// Car rounded ------------
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  rotateImageContinuously("roundOne", 50);
  rotateImageContinuously("roundTwo", 20);
});

// FAQs ------------------

// document.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault(); // This would block navigation
//   });
// });
