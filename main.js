const url = "https://api.adviceslip.com/advice"
const hideMessage = document.getElementById("hide-message")
const adviceId = document.getElementById("advice-id")
const adviceQuote = document.getElementById("advice-quote")
const newQuoteButton = document.getElementById("new-quote")

function generateNewQuote() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        adviceId.innerHTML = data.slip.id
        adviceQuote.innerHTML = data.slip.advice
})
    .catch(err => {
        console.log(err)
})}

newQuoteButton.addEventListener("click", () => {
    hideMessage.classList.add("hidden")
    generateNewQuote()
})