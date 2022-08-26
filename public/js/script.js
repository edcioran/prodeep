import { tab } from './tab.js'
import { navbarExpand, navbarScroll } from './navbar.js'
import { accordion } from './accordion.js'
import { downloadForm, overlayClick } from './downloadForm.js'

tab()
navbarExpand()
navbarScroll()
accordion()
downloadForm()

if(document.querySelector('#overlay')) overlayClick()

// document.addEventListener("click", e => console.log(e.target))