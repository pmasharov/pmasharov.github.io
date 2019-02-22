function cahngePupilRole() {
    let pupilMarker = document.querySelector('.p-role-pupil-marker')
    let parentMarker = document.querySelector('.p-role-parent-marker')
    let radioPupilElem = document.querySelector('.p-pupil-role-pupil')
    let radioParentElem = document.querySelector('.p-pupil-role-parent')

    pupilMarker.classList.toggle('p-role-marker-active')
    parentMarker.classList.toggle('p-role-marker-active')
    if (pupilMarker.classList.contains('p-role-marker-active')) {
        radioPupilElem.checked = true
    } else {
        radioParentElem.checked = true
    }
}