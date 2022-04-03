const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#claireNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#sharleenNext').addEventListener('click', /*INSERTCODE*/)
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext(){
// 	claire.classList.add(/*INSERTCODE*/)
// 	sharleen.classList.add(/*INSERTCODE*/)
// 	andi.classList.toggle(/*INSERTCODE*/)
// }
function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

// function claireNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }
function claireNext() {
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
}

// function sharleenNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }
function sharleenNext() {
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}