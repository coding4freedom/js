//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', runStop)

function runStop(){
    document.querySelector('#stops').innerText = ''
    
    let userInput = Number(document.querySelector('#snacks').value)

    for(let i = 1; i <= userInput; i++){
        document.querySelector('#stops').innerText += `Stop eating snacks\n`
    }
    
}