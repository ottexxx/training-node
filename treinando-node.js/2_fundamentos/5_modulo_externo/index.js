//node index.js --nome=Bibi --idade=31
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
console.log(nome)

const idade = args['idade']
console.log(idade)

console.log(`Meu nome é ${idade} e a minha idade é ${idade} anos.`)