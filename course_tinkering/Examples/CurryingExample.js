
// let dragon = (name, size, element) =>
// name + ' is a ' +
// size + ' dragon that breathes ' +
// element + '!'


let dragon =
name =>
    size=>
        element=>
            name + ' is a ' +
            size + ' dragon that breathes ' +
            element + '!'

// console.log(dragon('Leviathan')('Titanic')('Water'));

let leviathanDragon = dragon('Leviathan')
let titanicDragon = leviathanDragon('Titanic')

console.log(titanicDragon('Water'))