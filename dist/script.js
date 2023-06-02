const headerNav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
const contactNav = document.querySelector('.contact__nav');
const toggleContact = document.querySelector('.toggle__contact');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
    contactNav.classList.remove('open');
    toggleContact.classList.remove('open');
});


toggleContact.addEventListener('click', ()=>{
    contactNav.classList.toggle('open');
    toggleContact.classList.toggle('open');
    headerNav.classList.remove('open');
    toggleMenu.classList.remove('open');
});

const nav = document.querySelectorAll(".header__nav ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

//coffee nav
const starNav = document.querySelectorAll(".discover__nav__link");
const starContent = document.querySelectorAll(".discover__tab__content");
starNav.forEach((nav) => {
    nav.addEventListener("click", () => {
    removeActiveStar();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
    });
});

function removeActiveStar() {
  starNav.forEach((nav) => {
  nav.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((nav) => {
  nav.classList.remove("active");
  });
}
