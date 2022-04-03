//Write your pseduo code first! 

//only on click
document.querySelector('#run').addEventListener('click', convertTemp)

function convertTemp() {
    // retrieve the tempature entered by user
    let temp = document.querySelector('#userTemp').value

    // create a function that takes in a tempature and converts tempature
    temp = temp * (9/5) + 32

    // display the converted tempature to user
    document.querySelector('#display').innerText = `The temperature in Fairenhith ${temp}`
}
