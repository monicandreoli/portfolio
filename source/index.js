//navbar sticky at the top changing on scroll with observer
const header = document.querySelector("nav");
const sectionOne = document.querySelector("#home");

const sectionOneOptions = {
  rootMargin: "-500px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");

      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);
sectionOneObserver.observe(sectionOne);

//navbar highlight

function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}
const sections = [
  selectElementByClass('home'),
  selectElementByClass('about'),
  selectElementByClass('services'),
  selectElementByClass('portfolio'),
  selectElementByClass('contact'),
];

const navItems = {
  home: selectElementByClass('homeNavItem'),
  about: selectElementByClass('aboutNavItem'),
  services: selectElementByClass('servicesNavItem'),
  portfolio: selectElementByClass('portfolioNavItem'),
  contact: selectElementByClass('contactNavItem'),
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'current' class on the navItem
      navItem.classList.add('current');
      // remove 'current' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove('current');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));


//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const pageLinks = document.querySelectorAll(".nav-links a")


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

// Redirection card on click
const cardOne = document.querySelector(".card-one");
cardOne.addEventListener("click", () => {
  window.open('https://the-taoist.herokuapp.com/', '_blank');
});

const cardTwo = document.querySelector(".card-two");
cardTwo.addEventListener("click", () => {
  window.open('https://moody-moovie.herokuapp.com/', '_blank');
});

// animation on scroll
AOS.init({
  duration: 1600,
  once: true,
})