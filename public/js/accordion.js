export const accordion = ()=>{
    document.addEventListener('click', (e)=>{
        if(e.target.classList.contains('accordion-header')){
            const accordion = e.target.parentElement.parentElement
            const accordionHeader = e.target.parentElement
            const accordionID = e.target.id
            const accordionContent = accordion.querySelector(`#${accordionID}-content`)
            const accordionHeaderText = accordionHeader.querySelector('span')
            const accordionHeaderIcon = accordionHeader.querySelector('i')

            //Close all accordions
            const accordionHeaders = Array.from(accordion.querySelectorAll('.accordion-header'))
            const accordionContents = Array.from(accordion.querySelectorAll('.accordion-content'))
            
            accordionHeaders.forEach((ah)=>{
                ah.parentElement.classList.add('border-b-[1.25px]')
                ah.parentElement.querySelector('span').classList.remove('font-medium')
                ah.parentElement.querySelector('i').classList.replace('iconoir-nav-arrow-up', 'iconoir-nav-arrow-down')
            })
            accordionContents.forEach((ac)=>{
                ac.classList.add('hidden')
                ac.classList.remove('border-b-[1.25px]')
            })

            //Open targeted accordion
            accordionHeader.classList.remove('border-b-[1.25px]')
            accordionHeaderText.classList.add('font-medium')
            accordionHeaderIcon.classList.replace('iconoir-nav-arrow-down','iconoir-nav-arrow-up')
            accordionContent.classList.remove('hidden')
            accordionContent.classList.add('border-b-[1.25px]')
        }
    })
}