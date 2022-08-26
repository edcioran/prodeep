const peopleSlider = document.querySelector('#people-slider')
const bio = document.querySelector('#bio')
const overlay = document.querySelector('#overlay-people')

fetch('https://docs.google.com/spreadsheets/d/1W5H0lUAF4Nf9L4m5rwJA1rRGh6TNNpJV4yWxO1AEsks/gviz/tq?')
    .then(res => res.text())
    .then(rep => {
        const data = JSON.parse(rep.substring(47).slice(0, -2)).table.rows
        data.forEach((el, id) => {
            if (id > 0) {
                const card = createCard(data, id)
                peopleSlider.innerHTML += card
            }
        })
    })
    .catch(error =>{
        const errorMessage = `
        <div class="flex gap-5 items-center border rounded px-4 py-3 shadow-sm bg-red-50">
            <i class="iconoir-wifi-off text-[18px] text-red-800"></i>
            <span class="text-red-800">Maaf, terjadi kesalahan :(</span>
        </div>
        `
        peopleSlider.innerHTML += errorMessage
    })

const createCard = (data, id) => {
    return `
    <div class="h-50 w-40 border rounded shadow-sm flex flex-col gap-2 py-3 px-3 bg-white overflow-hidden shrink-0 relative">
        <div class="hidden">${data[id].c[0].v}</div>
        <div class="hidden">${data[id].c[1].v}</div>
        <div class="hidden">${data[id].c[2].v}</div>
        <div class="hidden">${data[id].c[3].v}</div>

        <div class="people-card-overlay absolute top-0 bottom-0 left-0 right-0"></div>
        <div class="w-10 h-10 rounded-full bg-center bg-cover" style="background-image: url('${data[id].c[2].v}')"></div>
        <span class="font-medium text-slate-900">${data[id].c[0].v}</span>
        <p class="text-[16px]">${data[id].c[1].v}</p>
    </div>
    `
}



document.addEventListener("click", (e) => {
    if (e.target.classList.contains('people-card-overlay')) {
        bio.classList.replace('-z-10', 'z-30')
        bio.classList.replace('opacity-0', 'opacity-100')
        overlay.classList.toggle('hidden')
        bioData(e.target.parentElement)
    }
})

overlay.addEventListener("click", () => {
    overlay.classList.toggle('hidden')
    bio.classList.replace('opacity-100', 'opacity-0')
    bio.classList.replace('z-30', '-z-10')
})

const bioData = (card)=>{
    bio.firstElementChild.firstElementChild.style.backgroundImage = `url('${card.firstElementChild.nextElementSibling.nextElementSibling.innerHTML}')`
    bio.firstElementChild.nextElementSibling.innerHTML = card.firstElementChild.innerHTML
    bio.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = card.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
}