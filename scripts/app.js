// Navigation Menu
const navMenu = document.querySelector('.navigation');
const navButton = document.querySelector('#navigation-button');
let isMenuActive = false;

const navButtonLinks = document.querySelectorAll('.navigation li a');

navButtonLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
    navMenu.classList.remove('show');
    navMenu.classList.remove('animate__animated');
    navMenu.classList.remove('animate__bounceInLeft');
  });
});

navButton.addEventListener('click', () => {
  if (!isMenuActive) {
    const navIconClose = `<i class="bi bi-x-lg"></i>`;
    navButton.innerHTML = navIconClose;
    isMenuActive = true;
  } else {
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
  }
  // Show and Hide Menu
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('animate__animated');
  navMenu.classList.toggle('animate__bounceInLeft');
});

// Splidejs Slide
const splide = new Splide('.splide', {
  type: 'loop',
  direction: 'ltr',
  width: '72%',
  height: '36rem',
  autoplay: true,
  perPage: 1,
  breakpoints: {
    1100: {
      height: '40rem',
      width: '90%'
    },
    720: {
      height: '46rem',
      width: '100%'
    }
  }
});

splide.mount();

// Scroll Reveal
ScrollReveal().reveal('.about', { delay: 300 });
ScrollReveal().reveal('.testimonials', { delay: 300 });
ScrollReveal().reveal('.contact', { delay: 300 });


var imageSources1 = [
  "./assets/Screenshot (599).png",
  "./assets/Screenshot (600).png",
  "./assets/Screenshot (601).png",
  "./assets/Screenshot (602).png",
  "./assets/Screenshot (603).png",
]

var index1 = 0;
setInterval (function(){
  if (index1 === imageSources1.length) {
    index1 = 0;
  }
  document.getElementById("projectimage1").src = imageSources1[index1];
  index1++;
} , 2000);


var imageSources2 = [
"./assets/Screenshot (604).png",
"./assets/Screenshot (605).png",
"./assets/Screenshot (606).png",
"./assets/Screenshot (607).png",
"./assets/Screenshot (608).png"
]


var index2 = 0;
setInterval (function(){
  if (index2 === imageSources2.length) {
    index2 = 0;
  }
  document.getElementById("projectimage2").src = imageSources2[index2];
  index2++;
} , 2000);

document.getElementById("projectimage1").addEventListener("click",function(){
  window.open("https://vigorous-meitner-b9028e.netlify.app/","_blank");
})
document.getElementById("projectimage2").addEventListener("click",function(){
  window.open("https://leviwithbackend.herokuapp.com","_blank");
})

