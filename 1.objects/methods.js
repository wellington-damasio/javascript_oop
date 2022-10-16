// Métodos são ações dos objetos
// Podemos ter métodos de resgatar propriedades do objeto ou modificar o valor destas

const robot = {
  // Properties
  personalInfo:  {
    name: 'Robert',
    lastName: 'Lieber',
    age: 32,
    profession: 'Lawyer'
  },

  arms: 2,
  legs: 2,
  gun: 'flamethrower',
  specialGun: 'RPG',

  // Methods
  getFullName() {
    return `${this.personalInfo.name} ${this.personalInfo.lastName}`
  },

  gunFire() {
    console.log('Firing: Trá ta tata pow pow')
  },

  greet() {
    console.log(`Hi, my is ${this.getFullName()}`)
  }
}

console.log(robot)

robot.gunFire()

console.log(robot.personalInfo.name)

robot.greet()

// Criando Propriedades ou Métodos em Objetos Existentes

// Obs: Quanto menos metodos e propriedades você criar fora das funções, mais organizado e livre de bugs será seu
//código


robot.attack = function() {
  console.log('Attacking: Pá pá pá pow ')
}

robot.attack()

robot.personalInfo.eyeColor = 'green'

console.log(robot.personalInfo)
