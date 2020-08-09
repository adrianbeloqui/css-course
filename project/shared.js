var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaBtn = document.querySelector('.main-nav__item--cta');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        //modal.style.display = 'block';
        modal.classList.add('modal-open');
        //backdrop.style.display = 'block';
        backdrop.classList.add('open');
    })
}

var closeModal = function () {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('modal-open');
    }

    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', function () {
    closeModal();
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

ctaBtn.addEventListener('animationstarted', function (event) {
    console.log('Animation started', event);
})

ctaBtn.addEventListener('animationend', function (event) {
    console.log('Animation ended', event);
})

ctaBtn.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event);
})