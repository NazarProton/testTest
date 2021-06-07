let count = 0


const increment = () => {
    debugger
    count++
    console.log(count)
}
const timeFunction = () => {
    setTimeout(increment, 1000)
}

document
.querySelector('#test')
.addEventListener
('click', timeFunction)