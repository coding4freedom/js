
document.querySelector('#run').addEventListener('click', convert)

function convert() {

    let temp = document.querySelector('#userTemp').value

    temp = temp * (9/5) + 32

    document.querySelector('#display').innerText = temp
}