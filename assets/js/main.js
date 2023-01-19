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

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

function scrollTop() {
  const scrollTop = document.querySelector('#scroll-top');
  if (this.scrollY >= 200) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollTop);

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

function slider({ slidesSelector, prevArrow, nextArrow, currentId, totalId }) {
  const slides = document.querySelectorAll(slidesSelector),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    current = document.querySelector(currentId),
    total = document.querySelector(totalId);

  let indexSlide = 1;
  let index = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  showSlides(indexSlide);

  next.addEventListener('click', function () {
    index++;
    if (index > slides.length - 1) {
      index = 0;
    }
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');

    plusSlide(1);
  });

  prev.addEventListener('click', () => {
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }

    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
    plusSlide(-1);
  });

  function showSlides(n) {
    if (n > slides.length) {
      indexSlide = 1;
    }

    if (n < 1) {
      indexSlide = slides.length;
    }

    if (indexSlide < 10) {
      current.textContent = `0${indexSlide}`;
    } else {
      current.textContent = indexSlide;
    }
  }

  function plusSlide(n) {
    showSlides((indexSlide += n));
  }
}

slider({
  slidesSelector: '.certificate__slide',
  prevArrow: '.certificate__slider-prev',
  nextArrow: '.certificate__slider-next',
  currentId: '#current',
  totalId: '#total',
});
