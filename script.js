let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".menu-slider", {
      grabCursor:true,
      loop:true,
      autoHeight:true,
      centeredSlides:true,
      spaceBetween:20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper = new Swiper(".blog-slider", {
      grabCursor:true,
      loop:true,
      autoHeight:true,
      centeredSlides:true,
      spaceBetween:20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    });

    let previewcontainer = document.querySelector('.food-preview-container');
    let previewBox = previewcontainer.querySelectorAll('.food-preview');

    document.querySelectorAll('.food .slide').forEach(food =>{
        food.onclick = () =>{
            previewcontainer.style.display = 'flex';
            let name = food.getAttribute('data-name');
            previewBox.forEach(preview =>{
                let target = preview.getAttribute('data-target');
                if(name == target){
                    preview.classList.add('active')
                };
            });
        };
    });
    previewcontainer.querySelector('#close-preview').onclick = () =>{
    previewcontainer.style.display = 'none';
    previewBox.forEach(close =>{ 
            close.classList.remove('active')
        });
    };

