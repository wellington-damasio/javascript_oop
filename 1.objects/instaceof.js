// Checks if a given object is an instance of a constructor function / Class

class Person {
  constructor(name, lastName, age){
    this.name = name
    this.lastName = lastName
    this.age = age
  }

  getFullName() {
    return `${this.name} ${this.lastName}`
  }

  greet() {
    console.log(`Hi! I am ${this.getFullName()}`)
  }
}

let wellington = new Person('Wellington', 'Damasio', 19)

wellington.greet()

console.log(wellington instanceof Person) // true

function createCar(brand, name, isManual) {
  return { brand,name, isManual }
}

let taycan = createCar('Porsche', 'Taycan', false)

console.log(taycan)
console.log(taycan instanceof createCar) // false

// TRUE, pois a função createCar retorna um objeto o qual o valor da variavel 'taycan' é associado
console.log(taycan instanceof Object) // true

let obj1 = {
  value: 2,
  string: 'something'
}

let obj2 = {
  value: 2,
  string: 'somethin'
}

let obj3 = {
  value: 2,
  string: 'something'
}

let obj4 = obj1

for(let prop in obj1) {
  // If property in obj2 doesnt exist or if its value is diffent from the same prop in obj1
  if(!obj2[prop] || obj2[prop] !== obj1[prop]) {
    console.log(`Objeto 2 é diferente do Objeto 1`)
  }
}

console.log(obj1)
console.log(Object.is(obj1, obj2))
console.log(Object.is(obj1, obj3))
console.log(Object.is(obj1, obj4)) // true

const obj1Copy = obj1

obj1Copy.value = 3 // Mudou o value do obj1, pois é uma referencia ao obj1

console.log(obj1)

let wellingtonComPoderes = Object.assign(wellington, {
  poderes: [
    'Raio sombrio',
    'Estocada Nefasta',
    'Raio que o parta',
    'Vim te Matei',
    'Esqueeece'
  ]
})

console.log(wellingtonComPoderes)
