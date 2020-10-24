function formCheck() {
    const ar = document.getElementsByTagName('input');
    for (i in ar) {

        ar[i].setAttribute('class', '');
        if (ar[i].value == '') {
            ar[i].setAttribute('class', 'error');
            return false;
        }
    }
}
function removeError(element){
    element.setAttribute('class', '');
}
