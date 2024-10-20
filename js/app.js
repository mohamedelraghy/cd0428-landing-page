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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

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
/**
 * End Helper Functions
 * Begin Events
 *
 */

window.addEventListener("scroll", setActiveSection);

// Call the function to build the navigation when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  setActiveSection(); // Set the initial active section
});
