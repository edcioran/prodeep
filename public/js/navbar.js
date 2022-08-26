const navbar = document.querySelector('nav')
const closedNav = navbar.firstElementChild
const navToggle = document.querySelector('#nav-toggle')
const navMenus = document.querySelector('#nav-menus')

navToggle.addEventListener("click", ()=>{
    const scrollPos = window.scrollY;

    if (closedNav.classList.contains('bg-white')) {
        if (scrollPos <= 50) {
            navMenus.classList.toggle('max-h-[300px]')
            navMenus.classList.toggle('max-h-0')
            setTimeout(()=>{
                closedNav.classList.toggle('bg-white')
                closedNav.classList.toggle('shadow')
            }, 200)
        } else {
            navMenus.classList.toggle('max-h-0')
            navMenus.classList.toggle('max-h-[300px]')
        }
    }
    else {
        navMenus.classList.toggle('max-h-0')
        navMenus.classList.toggle('max-h-[300px]')
        closedNav.classList.toggle('bg-white')
        closedNav.classList.toggle('shadow')
    }
})

const checkNavbarScroll = () => {
    const scrollPos = window.scrollY;

    if (scrollPos >= 50) {

        if (closedNav.classList.contains('bg-white')) { }
        else {
            closedNav.classList.toggle('bg-white')
            closedNav.classList.toggle('shadow')
        }
    }
    else {
        if (closedNav.classList.contains('bg-white')) {
            if (navMenus.classList.contains('max-h-0')) {
                closedNav.classList.toggle('bg-white')
                closedNav.classList.toggle('shadow')
            } else { }
        } else {

        }
    }
}

document.addEventListener("scroll", checkNavbarScroll)