import Swiper from 'swiper/bundle';

function swiper () {
    const swiper = new Swiper('.swiper', {
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            820: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1184: {
                slidesPerView: 4.5,
                spaceBetween: 24,
            }
        },
        
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        // // Navigation arrows
        // navigation: {
        // 	nextEl: '.swiper-button-next',
        // 	prevEl: '.swiper-button-prev',
        // },
    });
}

export default swiper

