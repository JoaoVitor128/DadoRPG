const max = document.querySelector(".maxNumber")
const numberDice = document.querySelector(".number")
const generater = document.querySelector(".generater")

generater.addEventListener("click", (e) => {
    const maxValue = max.value
    const numberDiceNumber = Math.random() * (maxValue - 1) + 1
    const numberDiceMath = Math.round(numberDiceNumber)

    if (numberDiceMath % 2 === 0){
        document.body.classList.remove("backgroundOrange")
        document.body.classList.add("backgroundRed")
    }
    else {
        document.body.classList.remove("backgroundRed")
        document.body.classList.add("backgroundOrange")
    }

    numberDice.style.color = "#fff"
    numberDice.innerHTML = numberDiceMath
})