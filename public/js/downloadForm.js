export const downloadForm = () => {
    const form = document.querySelector('#download-form')
    const overlay = document.querySelector('#overlay')
    const idInput = document.querySelector('#idinput')

    document.addEventListener("click", e => {
        if (e.target.classList.contains('file-title')) {
            overlay.classList.toggle('hidden')
            form.style.opacity = "100%"
            form.style.zIndex = 30
            idInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.textContent

            submitForm(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        }
    })

}

export const overlayClick = () => {
    const form = document.querySelector('#download-form')
    const overlay = document.querySelector('#overlay')

    overlay.addEventListener('click', () => {
        overlay.classList.toggle('hidden')
        form.style.zIndex = -10
        form.style.opacity = "0%"
    })
}

export const submitForm = (id) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbynCut96IWYeMxfDf3iWUAxLpiiYLposfuHHIIpVZJg1apniNR-Tyyo3dyCkqDqwYGZKQ/exec'
    const form = document.forms['download-form']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response)
                window.location.href = `/Download.html?id=${id}`
            })
            .catch(error => console.error('Error!', error.message))
    })
}