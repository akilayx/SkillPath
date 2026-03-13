// поиск стажировок

const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase()

let cards = document.querySelectorAll(".card")

cards.forEach(card => {

let text = card.innerText.toLowerCase()

if(text.includes(filter)){

card.style.display = "block"

}

else{

card.style.display = "none"

}

})

})



// кнопки подачи заявки

const buttons = document.querySelectorAll(".applyBtn")

buttons.forEach(button => {

button.addEventListener("click", function(){

alert("Заявка отправлена! Мы скоро свяжемся с вами.")

})

})



// форма контакта

const form = document.getElementById("contactForm")

form.addEventListener("submit", function(e){

e.preventDefault()

alert("Спасибо! Сообщение отправлено.")

form.reset()

})