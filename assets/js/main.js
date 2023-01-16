const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu');
  });
});
