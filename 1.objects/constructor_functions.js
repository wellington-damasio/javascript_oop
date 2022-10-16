// Constructor functions act like Classes in Object Orietend Languages
// JavaScript, since ES5 has built-in Classes but you still find Constructor Functions in some old codebases

function Car(brand, name, numberOfDoors, isManual, isElectric, horsepower, maxSpeed) {
  // Static Properties
  this.brand = brand
  this.name = name
  this.numberOfDoors = numberOfDoors
  this.isManual = isManual 
  this.isElectric = isElectric
  this.horsepower = horsepower
  this.maxSpeed = maxSpeed

  // Dynamic Properties
  this.currentSpeed = 0

  this.accelerate = function () {
    if(this.horsepower > 0 && this.horsepower <= 100) {
      if(this.currentSpeed + 10 <= this.maxSpeed) {
        this.currentSpeed += 10
      } else {
        this.currentSpeed = this.maxSpeed
      }
    }

    if(this.horsepower > 100 && this.horsepower <= 300) {
      if(this.currentSpeed + 25 <= this.maxSpeed) {
        this.currentSpeed += 25
      } else {
        this.currentSpeed = this.maxSpeed
      }
    }

    if(this.horsepower > 300 && this.horsepower <= 500) {
      if(this.currentSpeed + 45 <= this.maxSpeed) {
        this.currentSpeed += 45
      } else {
        this.currentSpeed = this.maxSpeed
      }
    }
  }

  this.getSpeed = function() {
    this.currentSpeed === this.maxSpeed ? console.log(`Max Speed: ${this.currentSpeed} Km/h`)
      : console.log(`${this.currentSpeed} Km/h`)
  }

  this.brake = function(brakeForce) { // brakeForce is a percentage
    let brakeForcePercentage = brakeForce / 100
  
    this.currentSpeed = this.currentSpeed - (this.currentSpeed * brakeForcePercentage)
  }

  this.stop = function() {
    this.currentSpeed = 0
  }
}

const hondaCivic = new Car('Honda', 'Civic', 4, true, false, 190, 170)

console.log(hondaCivic)

hondaCivic.getSpeed()

hondaCivic.accelerate()

hondaCivic.getSpeed()

hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()

hondaCivic.getSpeed()

hondaCivic.brake(50)

hondaCivic.getSpeed()

hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()
hondaCivic.accelerate()

hondaCivic.getSpeed()

function createPerson(name, lastName, age, profession, height, weight) {
  return {
    personalInfo: { name, lastName, age, profession },
    bodyInfo: {height, weight}
  }
}

const lorraine = createPerson('Lorraine', 'Damasio', 16, 'Student', '1.64m', '48Kg')
console.log(lorraine)
console.log(lorraine.constructor)







