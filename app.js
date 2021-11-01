var responseDiv=document.body.querySelector(".response");
var list=[];

document.body.querySelector(".butt").addEventListener("click", function(){

var pages = ["home", "about","view"];
function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(butt);
    }
}

function createWrapper(){
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg){
    var wrapper = document.body.querySelector(".wrapper");
    if (pg === "home") {
        homePage()
    }
    if (pg === "about") {
        aboutPage()
    }
    if (pg === "view") {
        intPage()
        document.getElementById('counter_label').innerHTML = 'Counter: ' + counter;
    }
}



function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="About";
    header.innerHTML="Bae";
    wrapper.appendChild(header);
}

function intPage(){
    document.body.querySelector(".view-note").addEventListener("click", function(event){
        var textValue = document.body.querySelector(".inputTxt").value;
        var textValuePass = document.body.querySelector(".inputImp").value;
        if(inputTxt)
        var wrapper=document.body.querySelector(".wrapper");
        wrapper.innerHTML="";
        var header = document.createElement("h1");
        header.innerHTML="View Notes";
        wrapper.appendChild(header);
    }
}




createNav();
createWrapper();

