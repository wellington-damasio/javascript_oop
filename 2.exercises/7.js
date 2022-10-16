// Crie dois objetos que compartilhem nomes de propriedades via object literals

// Uma variavel deve definir a parte que se repete nas propriedades dos objetos

let n = 'numero_de'

let carro = {
  [n+'_rodas']: 4,
  [n+'_portas']: 2,
  [n+'_cilindros']: 8,
  [n+'_farois']: 6
}

console.log(carro)

let pessoa = {
  [n+'_brincos']: 12,
  [n+'_pulseiras']: 4,
  [n+'_aneis']: 5
}

console.log(pessoa)
