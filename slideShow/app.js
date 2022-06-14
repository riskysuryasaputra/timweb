// Pagination Script

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });




const h1main = document.querySelector('.h1-main');
const h3Brand = document.querySelector('.h3-brand');

const fade = () => {
  h1main.classList.add('fade'); 
}
const fade2 = () => {
  h3Brand.classList.add('fade'); 
}

fade();
fade2();


const sum = document.querySelector('.sum');

const sum2 = [...sum.textContent].map(h => `<span>${h}</span>`).join('');
sum.innerHTML = sum2;

console.info(sum2);



// Fade Effect Script

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     effect: "fade",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });