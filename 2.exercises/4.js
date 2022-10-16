// Crie um objeto ninja com a propriedade shurikens, com uma quantidade de estrelas ninja.
// A cada metodo atirarShuriken subtraia uma shuriken da propriedade acima
// O ninja não pode jogar mais shurikens do que possui

function Ninja(name, lastName, ranking, shurikenQty) {
  this.name = name,
  this.lastName = lastName
  this.ranking = ranking
  this.shurikenCount = shurikenQty

  this.shootShuriken = function (target = {}) {
    if(this.shurikenCount <= 0) {
      console.log('There\'s no shurikens left...')
      return
    }
    console.log('Ninja Shuriken! Shoooot!')
    this.shurikenCount--

    target.isAlive ? target.isAlive = false : false
  }

  this.reloadShurikens = function () {
    this.shurikenCount = shurikenQty
  }

  this.getShurikenCount= function () {
    console.log(this.shurikenCount)
  }
}

let itachi = new Ninja('Itachi', 'Uchiha', 'Jonin', 7)

itachi.getShurikenCount()

itachi.shootShuriken()

itachi.getShurikenCount()

itachi.shootShuriken()
itachi.shootShuriken()
itachi.shootShuriken()
itachi.shootShuriken()
itachi.shootShuriken()
itachi.shootShuriken()

itachi.getShurikenCount()

itachi.shootShuriken()

let enemy = {name: 'Marcos', isAlive: true}

console.log('Enemy is alive? : ' + enemy.isAlive)

itachi.reloadShurikens()

itachi.getShurikenCount()

itachi.shootShuriken(enemy)

console.log('Enemy is alive? : ' + enemy.isAlive)





