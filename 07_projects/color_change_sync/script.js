// generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16)
        color += hex[random]
    }
    return color;
}

let changeColor;
const startChangingColor = function() {
    if(changeColor == null)
        changeColor = setInterval(changeBackgroundColor,1000)

    function changeBackgroundColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function() {
    clearInterval(changeColor)
    changeColor = null;

}

document.querySelector('#start').addEventListener(
    'click',startChangingColor
)
document.querySelector('#stop').addEventListener(
    'click',stopChangingColor
)

