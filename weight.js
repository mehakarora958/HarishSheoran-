const cssStyle = document.getElementById('output')
cssStyle.style.visibility='hidden'

// first grab the input
const myInput = document.getElementById('kgInput')

myInput.addEventListener('input', function(e){
    cssStyle.style.visibility = 'visible'
    let kgs = e.target.value;

    let pounds = document.getElementById('poundOutput')
    pounds.innerHTML = kgs*2.20462


    let ounces = document.getElementById('ozOutput')
    ounces.innerHTML = kgs*35.274

    let gms = document.getElementById('gmsOutput')
    gms.innerHTML = kgs * 1000

})
