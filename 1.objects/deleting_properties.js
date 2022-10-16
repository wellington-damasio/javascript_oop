// Obs: Evite deletar propriedades, isto pode gerar problemas em partes do código que utilizando o 
//método/propriedade deletado

const person = {
  personalInfo: {
    name: 'Wellington',
    lastName: 'Damasio',
    age: 19,
    profession: 'Web Developer'
  },
  items: ['pocket', 'earrings', 'shoes', 'basic clothes'],
  money: {
    currency: 'R$',
    number: 186756
  },

  getName() {
    return this.personalInfo.name
  },

  getLastName() {
    return this.personalInfo.lastName
  },

  getFullName() {
    return `${this.getName()} ${this.getLastName()}`
  },

  greet() {
    return `Hi, my name is ${this.getFullName()}`
  },

  financialStatus() {
    return `${this.money.currency}${this.money.number}`
  }
}

console.log(person.personalInfo)
console.log(person.getName())
console.log(person.getFullName())
console.log(person.greet())
console.log(person.financialStatus())

delete person.getName

//console.log(person.getFullName()) // Error: getName is not a function (maybe because it was deleted :p )
