// const a = [1, 2, 3];

// let b = a.map((item) => item * 3);

// console.log(b);

function z(n) {
  if (n >= 0) return n;
  else return 0;
}

console.log(z(-3));
console.log(z(4));

const z2 = (n) => (n >= 0 ? n : 0)

console.log(z2(-3));
console.log(z2(4));

const b = [2, 4, 5, 6, 7, 8];
let c = b.map(item => ({'num': item}))
console.log(c);

document.querySelector('#test').addEventListener
('click' , () => {
    fetch('file.json')
        .then(res => res.json())
        .then(file => {
            file.forEach(item => {
                console.log(item.name)
            });
        })
})