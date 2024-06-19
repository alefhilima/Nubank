const swiper = new Swiper(".swiper-container", {
    slidersPerView: "auto",
    spaceBetween: 40,
    grabCursor: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        type: "progressbar"
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    }
})