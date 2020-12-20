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
    let allCards =  document.querySelectorAll('.catalog-card');
    let allLinks = document.querySelectorAll('.catalog-link');
    if(index === -1) {
        allCards.forEach((res) => {
            console.log(res);
            res.classList.add('catalog-card-active');
        })
        allLinks.forEach((res) => {
            res.classList.remove('catalog-link-active');
        })
        console.log(allLinks[index]);
        allLinks[0].classList.add('catalog-link-active');
        return
    }

    event.stopPropagation();
    allCards.forEach((res, i) => {
        res.classList.remove('catalog-card-active')
    })
    allLinks.forEach((res) => {
        res.classList.remove('catalog-link-active')
    })
    allCards[index].classList.add('catalog-card-active')
    allLinks[index+1].classList.add('catalog-link-active')
}

//скрытие пароля
function show_hide_password(target){
	let input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

//закртые снизу
let closeFooter = () => {
    document.querySelector('.footer-sub').classList.add('footer-sub-hiden')
}

