document.querySelector('#andiNext').addEventListener('click', andiDisplay)
document.querySelector('#claireNext').addEventListener('click', claireDisplay)
document.querySelector('#sharleenNext').addEventListener('click', sharleenDisplay)

const clarieImg = document.querySelector('#claire')
const andiImg = document.querySelector('#andi')
const sharleenImg = document.querySelector('#sharleen')

function andiDisplay() {
    clarieImg.classList.add('hidden')
    sharleenImg.classList.add('hidden')
    andiImg.classList.toggle('hidden')
}

function claireDisplay() {
    andiImg.classList.add('hidden')
    sharleenImg.classList.add('hidden')
    clarieImg.classList.toggle('hidden')
}

function sharleenDisplay() {
    clarieImg.classList.add('hidden')
    andiImg.classList.add('hidden')
    sharleenImg.classList.toggle('hidden')
}