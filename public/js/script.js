import { tab } from './tab.js'
import { accordion } from './accordion.js'
import { downloadForm, overlayClick } from './downloadForm.js'

tab()
accordion()
downloadForm()

if(document.querySelector('#overlay')) overlayClick()

// document.addEventListener("click", e => console.log(e.target))