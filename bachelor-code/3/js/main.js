
let constant = document.querySelectorAll('.contestant');

Array.from(constant).forEach(element => {
    element.addEventListener('click', rose)
});

function rose(click){
    if(click.target.classList.contains('rose')){
        document.querySelector('#nikki').classList.toggle('hidden')
    }else{
        alert('Wrong!')
    }
}