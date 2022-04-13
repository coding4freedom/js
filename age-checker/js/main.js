document.querySelector('h1').addEventListener('click', check)




function check(){
    let userInput =  Number(document.querySelector('input').value)
    document.querySelector('p').innerText = `your age is ${userInput}`
}