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
//выбор карточки
let onItemClick = (index, event) => {
    
  event.stopPropagation();
  if (document.querySelectorAll('.catalog-card')[index].classList.item(1) === 'catalog-card-active') {
    return false;
}

document.querySelectorAll('.catalog-card').forEach(element => {
    element.classList.toggle('catalog-card-active', false);

}) 
document.querySelectorAll('.catalog-link').forEach(element => {
    element.classList.toggle('catalog-link-active', false);

})

document.querySelectorAll('.catalog-link')[index].classList.add('catalog-link-active');
document.querySelectorAll('.catalog-card')[index].classList.add('catalog-card-active');  
return false;
}



//закртые снизу
let closeFooter = () => {
    document.querySelector('.footer-sub').classList.add('footer-sub-hiden')
}

