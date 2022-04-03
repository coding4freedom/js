
document.querySelector('#yell').addEventListener('click', combine)

function combine(){

    const fName = document.querySelector('#firstName').value
    const fMid = document.querySelector('#firstMiddle').value
    const lMid = document.querySelector('#lastMiddle').value
    const lName = document.querySelector('#lastName').value

    document.querySelector('#placeToYell').innerText = `${fName} ${fMid} ${lMid} ${lName}`

}