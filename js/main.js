let button1 = document.querySelector("#dodaj");
let button2 = document.querySelector("#usun");
let p = document.querySelector("#tekst");
button1.onclick = function(){
    p.textContent = "Fajna dziś pogoda";
}
button2.onclick = function(){
    p.textContent = "";
}