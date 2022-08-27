const displayPosts = (id, src, count) => {

    if (document.querySelectorAll(`#${id}`).length > 0) {
        const where = document.querySelector(`#${id}`)
        const xhr = new XMLHttpRequest()

        const url = src

        fetch(url)
            .then(res => res.text())
            .then(rep => {
                const data = JSON.parse(rep.substring(47).slice(0, -2))
                const publications = data.table.rows
                let acount = '';
                if (count == "all") acount = publications.length
                else acount = count

                for (let i = publications.length - 1; i >= publications.length - acount; i--) {
                    if(i>0) {
                        const pub = publications[i].c
                        where.append(createPost(pub[0].v, pub[1].v, pub[2].v, i))
                    }
                }
            })
            .catch(error =>{
                const errorMessage = `
                <div class="flex gap-5 items-center border rounded px-4 py-3 shadow-sm bg-red-50">
                    <i class="iconoir-wifi-off text-[18px] text-red-800"></i>
                    <span class="text-red-800">Maaf, terjadi kesalahan :(</span>
                </div>
                `
                where.innerHTML += errorMessage
            })
    }
}

const createPost = (date, type, title, id) => {
    //Creation
    const container = document.createElement('div')
    const adate = document.createElement('span')
    const wrapper = document.createElement('div')
    const icon = document.createElement('i')
    const atitle = document.createElement('span')
    const aId = document.createElement('span')

    //Assigning class
    container.classList.add('flex', 'flex-col', 'gap-4', 'border-b', 'py-3')
    adate.classList.add('text-[16px]', 'text-slate-600')
    wrapper.classList.add('flex', 'items-start', 'gap-4')
    icon.classList.add('text-slate-700', 'text-[20px]')
    atitle.classList.add('file-title')
    aId.classList.add('hidden')

    //Assigning contents
    adate.textContent = date
    atitle.textContent = title
    aId.textContent = id
    switch (type) {
        case 'video':
            icon.classList.add('iconoir-media-video')
            break;
        case 'picture':
            icon.classList.add('iconoir-media-image')
            break;
        case 'document':
            icon.classList.add('iconoir-page')
    }

    //Combining contents
    wrapper.append(icon, atitle);
    container.append(aId, adate, wrapper);

    return container;
}



displayPosts('displayer', 'https://docs.google.com/spreadsheets/d/1QK-KwhJHW78aVsX4er4x9bufq9k7_OP2YGH1UJU7TLc/gviz/tq?', 3)
displayPosts('displayerAll', 'https://docs.google.com/spreadsheets/d/1QK-KwhJHW78aVsX4er4x9bufq9k7_OP2YGH1UJU7TLc/gviz/tq?', 'all')