let truck = {
  numberOfWheels: 6,
  isManual: true,
  motor: 'V16',
  color: 'blue',
  owner: 'Joseph',
  year: 1999,
  hasRadio: false
}

let {numberOfWheels, isManual, motor, color, ...otherInfo} = truck

console.log(numberOfWheels)
console.log(isManual)
console.log(motor)
console.log(color)
console.log(otherInfo)
