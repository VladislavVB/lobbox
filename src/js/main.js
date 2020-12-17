const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//закрытие меню
let openMenu = () => {
    document.querySelector('.menu-window').classList.add('menu-window-active');
}

let closeMenu = () => {
    document.querySelector('.menu-window').classList.remove('menu-window-active');
    
}

//плюс текст
let openText1 = () => {
    document.querySelector('.faq-card-text-1').classList.add('faq-card-text-active-1');
}
let closeText1 = () => {
    document.querySelector('.faq-card-text-1').classList.remove('faq-card-text-active-1');
}


let openText2 = () => {
    document.querySelector('.faq-card-text-2').classList.add('faq-card-text-active-2');
}
let closeText2 = () => {
    document.querySelector('.faq-card-text-2').classList.remove('faq-card-text-active-2');
}


let openText3 = () => {
    document.querySelector('.faq-card-text-3').classList.add('faq-card-text-active-3');
}
let closeText3 = () => {
    document.querySelector('.faq-card-text-3').classList.remove('faq-card-text-active-3');
}


let openText4 = () => {
    document.querySelector('.faq-card-text-4').classList.add('faq-card-text-active-4');
}
let closeText4 = () => {
    document.querySelector('.faq-card-text-4').classList.remove('faq-card-text-active-4');
}


let openText5 = () => {
    document.querySelector('.faq-card-text-5').classList.add('faq-card-text-active-5');
}
let closeText5 = () => {
    document.querySelector('.faq-card-text-5').classList.remove('faq-card-text-active-5');
}


let openText6 = () => {
    document.querySelector('.faq-card-text-6').classList.add('faq-card-text-active-6');
}
let closeText6 = () => {
    document.querySelector('.faq-card-text-6').classList.remove('faq-card-text-active-6');
}


let openText7 = () => {
    document.querySelector('.faq-card-text-7').classList.add('faq-card-text-active-7');
}
let closeText7 = () => {
    document.querySelector('.faq-card-text-7').classList.remove('faq-card-text-active-7');
}


let openText8 = () => {
    document.querySelector('.faq-card-text-8').classList.add('faq-card-text-active-8');
}
let closeText8 = () => {
    document.querySelector('.faq-card-text-8').classList.remove('faq-card-text-active-8');
}

//закртые снизу
let closeFooter = () => {
    document.querySelector('.footer-sub').classList.add('footer-sub-hiden')
}

