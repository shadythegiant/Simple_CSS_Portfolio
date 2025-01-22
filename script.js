"use strict";

const hiddenElements = document.querySelectorAll(".hidden");

const options = {
  root: null, // Default: viewport
  rootMargin: "0px 0px -10% 0px", // Adjust as needed
  threshold: [0, 0.25, 0.5, 0.75, 1], // only the 0 value works here
  //   adding another value other than 0 the observer doesn't work
};

const addingShowClass = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
};

const observer = new IntersectionObserver(addingShowClass, options);

hiddenElements.forEach((el) => observer.observe(el));

// Mobile Navigation Logic

const navButton = document.querySelector(".navBtn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closbtn");
const list = document.querySelector(".mobile_nav_ul");
const navElements = Array.from(list.children);

// functions

function removeOverlay() {
  overlay.style.left = -200 + "%";
  navElements.forEach((el, i) => {
    el.classList.remove(`slide-in-${i}`);
  });
}

function addOverlay() {
  overlay.style.left = 0;
  navElements.forEach((el, i) => {
    el.classList.add(`slide-in-${i}`);
  });
}

// Event Listeners
navElements.forEach((el) => {
  el.addEventListener("click", removeOverlay);
});

navButton.addEventListener("click", addOverlay);

closeBtn.addEventListener("click", removeOverlay);
