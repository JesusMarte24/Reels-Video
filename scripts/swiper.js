window.addEventListener("load", () => {
  let swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
