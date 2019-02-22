function confirmPass(e) {
    let passElem = document.querySelector('.p-password')
    let errTextElem = document.querySelector('.p-pass-valid-err-text')
    if (passElem.value === e.value) {
        errTextElem.classList.add('p-none')
    } else {
        errTextElem.classList.remove('p-none')
        e.value = ''
        e.focus()
    }
}