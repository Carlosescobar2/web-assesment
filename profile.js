function favColor(){ 
    alert("Green is Carlos's favorite color")
}
const colorBtn = document.getElementById('color')
colorBtn.addEventListener('click', favColor)

function favPlace(){ 
    alert("Home is Carlos's favorite place")
}

const placeBtn  = document.getElementById("place")

placeBtn.addEventListener('click', favPlace)

function favRit(){ 
    alert("Watching movies at 1 am is Carlos's favorite ritual")
}

const ritBtn = document.getElementById("ritual")

ritBtn.addEventListener('click', favRit)