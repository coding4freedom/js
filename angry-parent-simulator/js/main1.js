
document.querySelector('#yell').addEventListener('click', displayMessage)

// let fName = document.querySelector('#firstName').value
// let mName = document.querySelector('#firstMiddle').value
// let lMiddle = document.querySelector('#lastMiddle').value
// let lName = document.querySelector('#lastName').value

function displayMessage() {
    let fName = document.querySelector('#firstName').value
    let mName = document.querySelector('#firstMiddle').value
    let lMiddle = document.querySelector('#lastMiddle').value
    let lName = document.querySelector('#lastName').value

    document.querySelector('#placeToYell').innerText = `${fName} ${mName} ${lMiddle} ${lName}`
}