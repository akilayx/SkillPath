// обработка формы

document.querySelector(".contact-form").addEventListener("submit", function(e){

e.preventDefault();

alert("Спасибо! Сообщение отправлено.");

this.reset();

});


// кнопки стажировок

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

button.addEventListener("click", function(){

alert("Заявка скоро будет доступна на платформе SkillPath.");

});

});


// плавная прокрутка

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});

});


// simple search demo

const searchButton = document.querySelector(".search-section button");

if(searchButton){

searchButton.addEventListener("click", function(){

alert("Поиск стажировок скоро будет доступен!");

});

}