export const navbarExpand = () => {
    const nav = document.querySelector('nav')
    const navMenus = document.querySelector('#nav-menus')
    const navToggle = document.querySelector('#nav-toggle')

    navToggle.addEventListener("click", () => {
        const scrollPos = window.scrollY;

        if (nav.classList.contains('bg-white')) {
            if (scrollPos <= 50) {
                navMenus.classList.toggle('hidden');
                nav.classList.toggle('bg-white')
                nav.classList.toggle('shadow')
            } else navMenus.classList.toggle('hidden')
        }
        else {
            navMenus.classList.toggle('hidden')
            nav.classList.toggle('bg-white')
            nav.classList.toggle('shadow')
        }
    })
}

export const navbarScroll = () => {
    const nav = document.querySelector('nav')
    const navMenus = document.querySelector('#nav-menus')
    checkNavbarScroll(nav, navMenus)

    document.addEventListener("scroll", () => {
        checkNavbarScroll(nav, navMenus)
    })
}

export const checkNavbarScroll = (nav, navMenus) => {
    const scrollPos = window.scrollY;

    if (scrollPos >= 50) {

        if (nav.classList.contains('bg-white')) { }
        else {
            nav.classList.toggle('bg-white')
            nav.classList.toggle('shadow')
        }
    }
    else {
        if (nav.classList.contains('bg-white')) {
            if (navMenus.classList.contains('hidden')) {
                nav.classList.toggle('bg-white')
                nav.classList.toggle('shadow')
            } else { }
        } else {

        }
    }
}