export const tab = ()=>{
    document.addEventListener("click", (e)=>{
        if(e.target.classList.contains('tab-header')){
            //traverse dom
            const tab = e.target.parentElement.parentElement;
            const tabID = e.target.id;
            const tabContent = tab.querySelector(`#${tabID}-content`);

            //toggle all header to inactive
            turnOffTabHeaders(tab)

            //toggle all content to hidden
            turnOffTabContents(tab)

            //show tabContent
            tabContent.classList.remove('hidden')

            //activate tabHeader
            e.target.classList.add('border-b-[1.5px]', 'border-blue-700')
            e.target.classList.replace('text-slate-600', 'text-blue-700')
        }
    })
}

export const turnOffTabHeaders = (tab)=>{
    const tabHeaders = Array.from(tab.firstElementChild.children)
    tabHeaders.forEach((tabHeader)=>{
        tabHeader.classList.remove('border-b-[1.5px]', 'border-blue-700')
        tabHeader.classList.replace('text-blue-700', 'text-slate-600')
    })
}
export const turnOffTabContents = (tab)=>{
    const tabContents = Array.from(tab.firstElementChild.nextElementSibling.children)
    tabContents.forEach((tabContent)=>{
        if(tabContent.classList.contains('hidden')) return 0;
        tabContent.classList.add('hidden')
    })
}