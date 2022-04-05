
document.querySelector('#run').addEventListener('click', convert)

function convert(){
    let userTemp = document.querySelector('#userTemp').value

    let farTemp = userTemp * (9/5) + 32;

    document.querySelector('#display').innerText = farTemp
}