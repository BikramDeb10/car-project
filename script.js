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
      left: -390 * 1,
      behavior: "smooth",
    });
  });

  nextButton2.addEventListener("click", () => {
    carousel2.scrollBy({
      left: 390 * 1,
      behavior: "smooth",
    });
  });
}
