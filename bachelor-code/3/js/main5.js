let contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(element => {
   return element.addEventListener('click', checkRose)
})

function checkRose(click){

    if(click.target.classList.contains('rose')){
        document.querySelector('#nikki').classList.toggle('hidden')
    }else{
        alert('wrong ')
    }
}