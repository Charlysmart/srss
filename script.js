document.addEventListener('DOMContentLoaded', function() {
    fetch('top_header.html')
    .then(response=>response.text())
    .then(data => {
        document.getElementById("topNavContainer").innerHTML = data;
    })
    .catch(error=>console.error('Error loading header: ', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
    .then(response=>response.text())
    .then(data => {
        document.getElementById("headerContainer").innerHTML = data;
    })
    .catch(error=>console.error('Error loading header: ', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
    .then(response=>response.text())
    .then(data => {
        document.getElementById("footerContainer").innerHTML = data;
    })
    .catch(error=>console.error('Error loading header: ', error));
});
// for swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, //enabling the loop
    autoplay: {
        delay: 3000, //slide every 3 seconds
        disableOnInteraction: false, //keep autoplay after user interaction
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});