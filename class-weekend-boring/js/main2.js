
document.querySelector('#check').addEventListener('click', check)


function check() {
    let userDay = document.querySelector('#day').value.toLowerCase()

    if (userDay === 'tuesday' || userDay === 'thursday'){
        document.querySelector('#placeToSee').innerText = 'you have class';
    }else if (userDay === 'wednesday'){
        document.querySelector('#placeToSee').innerText = `It's hump day!`
    }else if (userDay === 'sunday' || userDay === 'saturday'){
        document.querySelector('#placeToSee').innerText = 'The weekend is here!!'
    }else{
        document.querySelector('#placeToSee').innerText = 'No luck try again'
    }
}