
 const contestants  = document.querySelectorAll('.contestant')

 Array.from(contestants).forEach(element => element.addEventListener('click', run))

 function run(click) {
    if(click.target.classList.contains('rose')){
        document.querySelector('#nikki').classList.toggle('hidden')
    }else{
        alert('Wrong!')
    }
 }