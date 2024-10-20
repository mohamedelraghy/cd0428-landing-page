/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

//* Select the navbar unordered list
const navbarList = document.getElementById("navbar__list");

//* select all sections
const sections = document.querySelectorAll("section");

//* Select the navigation bar
const navbar = document.querySelector(".page__header");

//* Variable to keep track of scrolling activity
let isScrolling;

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Select all collapsible headers
const collapsibleHeaders = document.querySelectorAll(".collapsible");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Function to scroll to top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling behavior
  });
}

// build the nav
function buildNav() {
  //* loop through sections and create the navbar dynamically
  sections.forEach((section) => {
    //* create a new listItem
    const listItem = document.createElement("li");

    // * create a new link inside the list item and set its href attribute to the section ID
    const link = document.createElement("a");
    link.href = `#${section.id}`;
    link.textContent = section.getAttribute("data-nav");
    link.classList.add("menu__link");

    // Add click event listener for smooth scrolling
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor click behavior

      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // * append the link to the list item
    listItem.appendChild(link);

    //* append the list item to the navbar
    navbarList.append(listItem);
  });
}

// Add class 'active' to section when near top of viewport
//* function to detect the section in view
function setActiveSection() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    //* check if the section is in view
    if (rect.top >= -50 && rect.top <= 250) {
      console.log({ rect });
      // Remove active class from all sections and links
      sections.forEach((sec) => sec.classList.remove("your-active-class"));
      document
        .querySelectorAll(".menu__link")
        .forEach((link) => link.classList.remove("active-link"));

      // Add active class to the section in view and its corresponding nav link
      section.classList.add("your-active-class");
      const activeLink = document.querySelector(`a[href="#${section.id}"]`);
      activeLink.classList.add("active-link");
    }
  });
}

//* Function to hide the navigation bar
function hideNavbar() {
  navbar.style.top = "-50px"; // Slide the navbar up (you can adjust the value as needed)
}

//* Function to show the navigation bar
function showNavbar() {
  navbar.style.top = "0"; // Show the navbar
}

//* Function to scroll to top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling behavior
  });
}

/**
 * End Helper Functions
 * Begin Events
 *
 */

window.addEventListener("scroll", setActiveSection);

// Call the function to build the navigation when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  showNavbar();
  buildNav();
  setActiveSection(); // Set the initial active section
});

// Add an event listener for the scroll event
window.addEventListener("scroll", function () {
  // Clear the timeout if it's already set
  window.clearTimeout(isScrolling);

  // Show the navbar when scrolling starts
  showNavbar();

  // Set a timeout to hide the navbar after scrolling stops (2 seconds delay)
  isScrolling = setTimeout(function () {
    hideNavbar();
  }, 2000); // 2000ms = 2 seconds of inactivity before hiding the navbar
});

// Add an event listener to the scroll event
window.addEventListener("scroll", function () {
  // Show the button when the user scrolls down 300px from the top of the document
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

//* Add click event to the button
scrollToTopBtn.addEventListener("click", scrollToTop);

// Add click event listener to each collapsible header
collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    // Toggle the content visibility
    const content = this.nextElementSibling; // Get the next sibling (the content div)

    if (content.style.display === "block") {
      content.style.display = "none"; // Hide content
    } else {
      content.style.display = "block"; // Show content
    }
  });
});
