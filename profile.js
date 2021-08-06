
// const getColor = document.querySelector('#color')

// const placeBtn = document.querySelector('place')

// const ritualBtn = document.querySelector('ritual')

function favColor(){
    alert('My Favorite Color is green!')
}
const colorBtn = document.getElementById('color')
colorBtn.addEventListener('click',favColor)

function favPlace(){
    alert('My Favorite place is Disneyland!!!!')
}
const placeBtn = document.getElementById('place')
placeBtn.addEventListener('click',favPlace)

function favRit(){
    alert("My Favorite ritual is watching youtube late night! ")
}
const ritBtn = document.getElementById('ritual')
ritBtn.addEventListener('click',favRit)

