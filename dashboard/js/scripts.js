let troca = document.querySelector(".troca");
let body = document.querySelector("body");
let header = document.querySelector("header");
let main = document.querySelector("main");
troca.addEventListener("click", function(){
    troca.classList.toggle("active");
    body.classList.toggle("dark");
    header.classList.toggle("active");
    main.classList.toggle("active");
});