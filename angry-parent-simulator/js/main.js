document.querySelector('#yell').addEventListener('click', runYell);

function runYell(){
    let fn = document.querySelector('#firstName').value;
    let fm = document.querySelector('#firstMiddle').value;
    let lm = document.querySelector('#lastMiddle').value;
    let ln = document.querySelector('#lastName').value;

    document.querySelector('#placeToYell').innerText = `${fn} ${fm} ${lm} ${ln}`; 
}