
document.querySelector('#check').addEventListener('click', check)

function check() {
    
    const day = document.querySelector('#day').value.toLowerCase()

    if(day === 'tuesday' || day === 'thursday'){
        alert('You have class')
    }else if(day === 'saturday' || day === 'sunday'){
        alert('Its the weekend')
    }else if(day === 'wednesday'){
       alert(`It's Hump day!`)
    }else{
        alert('Boring!!')
    }
}