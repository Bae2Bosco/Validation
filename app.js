var responseDiv=document.body.querySelector(".response");
var list=[];

document.body.querySelector(".butt").addEventListener("click", function(){
    var textValue = document.body.querySelector(".input").value;
    var textValuePass = document.body.querySelector(".inputPass").value;
    if(textValue==="coolStudent123"&&textValuePass==="password"){
        responseDiv.innerHTML="You are the Right User";
        list.push(textValue);
        window.location.href="https://bae2bosco.github.io/MenusInApp/";
        renderList();
    }else{
        responseDiv.innerHTML="You didn't type in valid username"
    }
})

function  renderList(){
    var itemsDiv = document.body.querySelector(".items");
    itemsDiv.innerHTML="";
    for (var i=0; i<list.length; i++){
        var ele=document.createElement("div");
        ele.innerHTML=list[i];
        itemsDiv.appendChild(ele);
    }
}
