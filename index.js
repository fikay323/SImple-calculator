var screen = document.querySelector('#screen');
let body = document.querySelector("body")
let them = document.getElementById('boyd')
var button = document.querySelectorAll('.buttons');
let big = document.querySelector(".rounded-pill")
let small = document.querySelector(".rounded-circle")
// for (item of button) 
// {
//     item.addEventListener ('click', (e) =>  {
//         btntext = e.target.innerText;
//         screen.value += btntext;   
//     })
// }
button.forEach(function(btn) {
    btn.addEventListener('click', (e)=> {
        screen.value += e.currentTarget.innerText
    })
})
function sin(){
    screen.value = Math.sin(screen.value)
}
function cos(){
    screen.value = Math.cos(screen.value)
}
function tan(){
    screen.value = Math.tan(screen.value)
}
function log(){
    screen.value = Math.log(screen.value)
}
function root(){
    screen.value = Math.sqrt(screen.value,2)
}
function pow(){
    screen.value = Math.pow(screen.value,2)
}
function pi(){
    screen.value += '*3.142';
}
function x() {
    screen.value += '*'
}
function e(){
    screen.value += '*2.71828182846';
}
function del() {
    let removed = screen.value.substr(0, screen.value.length -1)
    screen.value = removed
}
function change() {
    if (them.style.marginLeft == 'auto') {
        them.style.marginLeft = 0
        big.style.borderColor = 'rgb(100, 96, 96)'
        small.style.borderColor = 'rgb(100, 96, 96)'
        small.style.backgroundColor = 'rgb(100, 96, 96)'
        body.style.backgroundColor = 'whitesmoke'
        body.style.color = 'black'
        screen.style.backgroundColor = 'whitesmoke'
    }
    else {
        them.style.marginLeft = 'auto'
        big.style.borderColor = 'grey'
        small.style.borderColor = 'grey'
        small.style.backgroundColor = 'grey'
        body.style.color = 'whitesmoke'
        body.style.backgroundColor = 'black'
        screen.style.color = 'whitesmoke'
        screen.style.backgroundColor = 'black'
    }
}