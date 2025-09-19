// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Highlight nav links on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function changeActiveLink() {
    let index = sections.length;

    while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
    // Remove .active from all
    navLinks.forEach((link) => link.classList.remove('active'));
    // Add .active to current
    const currentSection = sections[index];
    const id = currentSection.getAttribute('id');
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeLink) activeLink.classList.add('active');
  }

  changeActiveLink();
  window.addEventListener('scroll', changeActiveLink);

  // Optional: mobile nav toggle (if you want to make it responsive later)
});
