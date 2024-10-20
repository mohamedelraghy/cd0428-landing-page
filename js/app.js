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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//* Select the navbar unordered list
const navbarList = document.getElementById("navbar__list");

//* select all sections
const sections = document.querySelectorAll("section");

//* loop through sections and create the navbar dynamically
sections.forEach((section) => {
  //* create a new listItem
  const listItem = document.createElement("li");

  // * create a new link inside the list item and set its href attribute to the section ID
  const link = document.createElement("a");
  link.href = `#${section.id}`;
  link.textContent = section.getAttribute("data-nav");
  link.classList.add("menu__link");

  // * append the link to the list item
  listItem.appendChild(link);

  //* append the list item to the navbar
  navbarList.append(listItem);
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
