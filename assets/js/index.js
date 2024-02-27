/* services modal */
const modal = document.querySelectorAll('.services__modal'),
        modalButton = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

/* close modal */
modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

/* swiper testimonial */
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 28,
    grabCursor: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },   
  });

/* show scroll up */
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 150 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 150 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)