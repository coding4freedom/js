document.querySelector('#andiNext').addEventListener('click', nextAndi)
document.querySelector('#claireNext').addEventListener('click', nextClaireNext)
document.querySelector('#sharleenNext').addEventListener('click', nextSharleenNext)


let andi = document.querySelector('#andi');
let claire = document.querySelector('#claire');
let sharleen = document.querySelector('#sharleen');

function nextAndi() {
    // andi.classList.toggle('hidden')
    claire.classList.add('hidden')
    sharleen.classList.add('hidden')
    andi.classList.toggle('hidden')
}

// function nextClaireNext() {
//     claire.classList.toggle('hidden')
//     andi.classList.add('hidden')
//     sharleen.classList.add('hidden')
// }

// function nextSharleenNext() {
//     sharleen.classList.toggle('hidden')
//     andi.classList.add('hidden')
//     claire.classList.add('hidden')
// }