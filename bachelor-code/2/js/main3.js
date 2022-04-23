let andi = document.querySelector('#andiNext')
let claire = document.querySelector('#claireNext')
let sharleen = document.querySelector('#sharleenNext')


andi.addEventListener('click', andiN)
claire.addEventListener('click', claireN)
sharleen.addEventListener('click', sharleenN)

function andiN(){
    document.querySelector('#andi').classList.toggle('hidden')
    document.querySelector('#claire').classList.add('hidden')
    document.querySelector('#sharleen').classList.add('hidden')
}

function claireN(){
    document.querySelector('#claire').classList.toggle('hidden')
    document.querySelector('#andi').classList.add('hidden')
    document.querySelector('#sharleen').classList.add('hidden')
}

function sharleenN(){
    document.querySelector('#sharleen').classList.toggle('hidden')
    document.querySelector('#andi').classList.add('hidden')
    document.querySelector('#claire').classList.add('hidden')
}