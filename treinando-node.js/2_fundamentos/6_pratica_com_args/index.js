const minimist = require('minimist')

//externo
const args = minimist(process.argv.slice(2))

//interno
const  moduloSoma = require('./soma').soma

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a,b)