document.querySelector('#check').addEventListener('click', checkDay)

function checkDay(){
    let userDay = document.querySelector('#day').value
    userDay = userDay.toLowerCase()

    if(userDay === 'tuesday' || userDay === 'thursday')
        document.querySelector('#placeToSee').innerText = 'you have an exam'
    else if(userDay === 'sunday' || userDay === 'saturday')
        document.querySelector('#placeToSee').innerText = `it's the weekend let party`
    else
    document.querySelector('#placeToSee').innerText = 'this is boring'
}