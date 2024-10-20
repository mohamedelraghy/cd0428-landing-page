/**
 * DOM Manipulation Exercise.
 * Builds dynamic navigation, smooth scrolls to anchors,
 * highlights sections in the viewport upon scrolling,
 * and adds collapsible functionality.
 * 
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 */

/**
 * Global Variables
 */
// Navbar elements
const navbarList = document.getElementById("navbar__list");
const navbar = document.querySelector(".page__header");

// Sections and button
const sections = document.querySelectorAll("section");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Scroll activity tracker
let isScrolling;

/**
 * Helper Functions
 */

// Scroll smoothly to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Build navigation menu dynamically from sections
const buildNav = () => {
  sections.forEach((section) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    // Set href and text for the menu item
    link.href = `#${section.id}`;
    link.textContent = section.getAttribute("data-nav");
    link.classList.add("menu__link");

    // Smooth scroll to section on click
    link.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Append link to list item and list item to navbar
    listItem.appendChild(link);
    navbarList.appendChild(listItem);
  });
};

// Add 'active' class to section in viewport and corresponding nav link
const setActiveSection = () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= -50 && rect.top <= 250) {
      // Clear active state for all sections and links
      sections.forEach((sec) => sec.classList.remove("your-active-class"));
      document
        .querySelectorAll(".menu__link")
        .forEach((link) => link.classList.remove("active-link"));

      // Set active state for the section in view and its corresponding link
      section.classList.add("your-active-class");
      const activeLink = document.querySelector(`a[href="#${section.id}"]`);
      activeLink.classList.add("active-link");
    }
  });
};

// Hide the navbar when scrolling stops
const hideNavbar = () => {
  navbar.style.top = "-50px"; // Adjust as needed
};

// Show the navbar when scrolling starts
const showNavbar = () => {
  navbar.style.top = "0";
};

// Toggle collapsible content visibility
const toggleCollapsibleContent = (header) => {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
};

/**
 * Event Listeners
 */

// Build the navigation menu and set initial active section when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  showNavbar();
  buildNav();
  setActiveSection();
});

// Add scroll event listener to manage active section highlighting
window.addEventListener("scroll", setActiveSection);

// Manage navbar visibility on scroll
window.addEventListener("scroll", () => {
  // Show navbar during scroll
  showNavbar();

  // Clear previous timeout and hide navbar after 2 seconds of inactivity
  clearTimeout(isScrolling);
  isScrolling = setTimeout(hideNavbar, 2000);
});

// Show or hide 'Scroll to Top' button based on scroll position
window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Smooth scroll to top on button click
scrollToTopBtn.addEventListener("click", scrollToTop);

// Add click event listener to each collapsible header
document.querySelectorAll(".collapsible").forEach((header) => {
  header.addEventListener("click", () => toggleCollapsibleContent(header));
});
