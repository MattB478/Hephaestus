function formCheck() {
    let ar = ['FirstName', 'LastName', 'Email', 'PhoneNumber'];


    for (i in ar) {
        document.getElementById(ar[i] + 'Error').innerText = '';
        if (document.getElementById(ar[i]).value == '') {
            document.getElementById(ar[i] + 'Error').innerText = 'Please provide a value';
            return false;
        }
    }
    console.log('Form checks out good');

}
