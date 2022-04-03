
document.querySelector('#run').addEventListener('click', run)


function run(){
    let temp = document.querySelector('#userTemp').value

    let newTemp = 5/9 * (temp - 32);

    document.querySelector('#display').innerText = newTemp
}
