//Create a function that grabs the number of snacks from the input and tells you to stop that many times


document.querySelector('#help').addEventListener('click', giveHelp)

function giveHelp(){
    let snack = Number(document.querySelector('#snacks').value)

    document.querySelector('#stops').innerText = ''

    for(let i =1; i <= snack; i++ ){
        document.querySelector('#stops').innerText += `Stop eating snacks\n`
    }
}