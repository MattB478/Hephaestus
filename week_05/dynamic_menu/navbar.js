
let timer1;
let str = '';
let str1 = '';
let counter = 0;


fetch('jada.json')
    .then(response => response.json())
    .then(mainNav => {
        mainNav.forEach((obj)=>{
            counter++;
            str+=`
            <div class="item">
                <div class="vcontain">
                    <h1 onmouseover="show('m${counter}')" onmouseout="hide('m${counter}')">${obj.main}</h1>
                    <div id="m${counter}" onmouseover="show('m${counter}')" onmouseout="hide('m${counter}')">`;
                if(obj.sub){
                        obj.sub.forEach((subs)=>{
                            str+=`<a href="${subs.href}"><h2>${subs.label}</h2></a>`;
                        });
                    }

        str+=`     </div>
                </div>
            </div>
            `;
        });
        document.getElementsByClassName('hcontain')[0].innerHTML = str;
}).catch(error=>{
    alert('Could not load external data');
});

function show(id) {
    hideAll();
    clearTimeout(timer1);
    document.getElementById(id).style.visibility = "visible";
}

function hide(id) {
    timer1 = setTimeout(() => {
        document.getElementById(id).style.visibility = "hidden";
        $(id).fadeOut();
    }, 1500);
}

function hideAll() {

    $('#m1').fadeOut();
    $("#m2").fadeOut();
    $('#m3').fadeOut();
}
