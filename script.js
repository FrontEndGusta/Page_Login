const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnPopupMobile = document.querySelector('.btnLogin-mobile')
const iconClose = document.querySelector('.icon-close');
const navigation = document.querySelector('navigation');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
});
btnPopupMobile.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
