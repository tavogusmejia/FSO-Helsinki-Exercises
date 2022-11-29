const _ = require('lodash');

let dragons = [
    {name: 'Leviathan', element: 'Water'},
    {name: 'Falkor', element: 'Wind'},
    {name: 'Shenron', element: 'Magic'},
    {name: 'Jormungand', element: 'Water'},
    {name: 'Quetzalcoatl', element: 'Lightning'},
    {name: 'Toothless', element: 'Fire'},
    {name: 'Tiamat', element: 'Life'},
    {name: 'Bahamut', element: 'Fire'},
    {name: 'Charizard', element: 'Fire'},
    {name: 'Frostbite', element: 'Ice'},
    {name: 'Onyx', element: 'Earth'},
    {name: 'Alduin', element: 'Fire'}
]

// let hasElement =
// (element, obj) => obj.element === element

// let fireDragons =
// dragons.filter(x => hasElement('Fire', x))

let hasElement =
_.curry((element, obj) => obj.element === element)

let fireDragons =
dragons.filter(hasElement('Fire'))

console.log(fireDragons);