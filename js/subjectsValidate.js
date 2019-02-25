function subjectsValidate() {

    let subjectsArr = document.querySelectorAll('.p-subject')
    let subjectsValidErrorText = document.querySelector('.p-subjectsValidErrorText')
    for (var i = 0; i <= subjectsArr.length - 1; i++) {
        if (subjectsArr[i].checked) {
            subjectsValidErrorText.classList.add('p-none')
            return true
        }
    }
    subjectsValidErrorText.classList.remove('p-none')
    subjectsValidErrorText.scrollIntoView()
    return false
}