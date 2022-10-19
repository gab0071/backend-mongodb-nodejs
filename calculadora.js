'use strict'

var params = process.argv.slice(2)

var num1 = parseFloat(params[0])
var num2 = parseFloat(params[1])

var plantilla = `
the sum is = ${num1 + num2}
the rest is = ${num1 - num2}
the mult is = ${num1 * num2}
the div is = ${num1 / num2}

`

console.log(plantilla)

