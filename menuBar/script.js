function show(id) {
    document.getElementById("m1").style.visibility ="hidden";
    document.getElementById("m2").style.visibility ="hidden";
    document.getElementById("m3").style.visibility ="hidden";
    document.getElementById(id).style.visibility = "visible";
}

function clearTime(id) {
    window.clearTimeout(hide)
}

function hide(id) {
    setTimeout(() => {
        document.getElementById(id).style.visibility ="hidden"; 
    }, 1500);
}