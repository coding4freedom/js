
document.querySelector('#andiNext').addEventListener('click', andi)
document.querySelector('#claireNext').addEventListener('click', claire)
document.querySelector('#sharleenNext').addEventListener('click', sharleen)

function andi(){
    document.querySelector('#claire').classList.add('hidden')
    document.querySelector('#sharleen').classList.add('hidden')
    document.querySelector('#andi').classList.toggle('hidden')
}
function claire(){
    document.querySelector('#andi').classList.add('hidden')
    document.querySelector('#sharleen').classList.add('hidden')
    document.querySelector('#claire').classList.toggle('hidden')
}
function sharleen(){
    document.querySelector('#claire').classList.add('hidden')
    document.querySelector('#andi').classList.add('hidden')
    document.querySelector('#sharleen').classList.toggle('hidden')
}