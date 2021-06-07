const a = [1, 2 ,4, 5, 6, 134, 0, 443, 434, 654]

let b = a.map(item => {
    console.log(item)
    return item * 3
})

// console.log(b);

let c = a.filter(item => {
    if(item % 2 === 0) {
        return true
    }
})

console.log(c);