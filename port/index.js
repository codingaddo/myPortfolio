const navLink = document.querySelectorAll('.nav_link')
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose =document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}




navLink.forEach((n)=>{
    n.addEventListener('click',()=>navMenu.classList.remove('show-menu'))
})
 


            // highlight active links

    navLink.forEach(link=>{
        link.addEventListener('click',()=>{
            navLink.forEach(link=>link.classList.remove('active-link'))
            
            link.classList.add('active-link')
        })

        if(link.href==window.location.href){
            link.classList.add('active-link');
        }
    })






// Show hidden skills

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')
    
function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass == 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
    // console.log(itemClass)
}

skillsHeader.forEach((header)=>{
    header.addEventListener('click', toggleSkills)
})




// activating the modals
const modalView = document.querySelectorAll('.services_modal'),
    modalBtn = document.querySelectorAll('.services_button'),
    modalClose = document.querySelectorAll('.services_modal-close')

// modalBtn.forEach((btn)=>{
//     btn.addEventListener('click',()=>{
//         modalView.forEach((view)=>{
//             view.classList.add('active-modal')
//         })
//     }) 
// })



let modal = function(modalClick){
    modalView[modalClick].classList.add('active-modal')
}

modalBtn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>
        modal(i))
})

modalClose.forEach((close)=>{
    close.addEventListener('click',()=>{
        modalView.forEach((view)=>{
            view.classList.remove('active-modal')
        })
    })
})


function scrrollUp(){
    const scrolltop = document.getElementById('scroll-up')
    //if horizontal viewpoit is >=560
    if(this.scrollY >= 560){scrolltop.classList.add('show-scroll')
        }else{
            scrolltop.classList.remove('show-scroll')
        }
}

window.addEventListener('scroll', scrrollUp)



        //Dark /Light Theme
const themeBtn = document.getElementById('theme-btn'),
        darkTheme = 'dark-theme',
        iconTheme = 'uil-sun'

    //  Get previously selected icon and theme
const selectedTheme =localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
console.log(selectedTheme)
console.log(selectedIcon)


        // Get the current theme the interface has by validating the dark-theme class
const currentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const currentIcon = ()=> themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme ==='dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

        // Activate buttons
themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)
})

localStorage.setItem('selected-theme', currentTheme())
localStorage.setItem('selected-icon', currentIcon())