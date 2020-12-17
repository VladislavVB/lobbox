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
let openText = (arg) => {
    // document.querySelector('#' + arg).classList.add('faq-card-text-active');
    let elem = document.querySelector('#' + arg);
    if (elem.classList.contains('faq-card-text-active')) {
        elem.classList.remove('faq-card-text-active')
        document.querySelector('.faq-plus-' + arg).src = 'img/footer/Plusbutton.png'
       
    } else {
        document.querySelector('.faq-plus-' + arg).src = 'img/footer/PlusbuttonBg.png'
        elem.classList.add('faq-card-text-active')
    }
}
// console.log(document.querySelector('faq-plus-first'));

// let closeText = (arg) => {
//     document.querySelector('#' + arg).classList.remove('faq-card-text-active');
// }




//закртые снизу
let closeFooter = () => {
    document.querySelector('.footer-sub').classList.add('footer-sub-hiden')
}

