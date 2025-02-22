const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



const modalViews=document.querySelectorAll('.services__modal'),
    modalBtns=document.querySelectorAll('.services__button'),
    modalClose=document.querySelectorAll('.services__modal-close')

let modal=function(modalClicked){
    modalViews[modalClicked].classList.add('active-modal')
}

modalBtns.forEach((mb,i)=>{
    mb.addEventListener('click',()=>{
        modal(i);
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})


let mixerPortfolio=mixitup('.work__container',{
    selectors:{
        target:'.work__card'
    },
    animation:{
        duration:300
    }
});

const linkwork=document.querySelectorAll('.work__item')
function activework(){
    linkwork.forEach(L=>L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l=> l.addEventListener('click',activework))





const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id')
			//   sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link')

		}else{
			document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link')

		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)




/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light/ icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400

})
sr.reveal('.home__data');
sr.reveal('.home__handle',{delay:700});
sr.reveal('.home__social', { delay: 900, origin: 'bottom' });
sr.reveal('.home__scroll', { delay: 900, origin: 'bottom' });

