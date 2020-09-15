// const validator = require('validator')
const getNotes = require('./notes')
const chalk = require('chalk')

const msg = getNotes()
const greenMsg = 'Error!'

console.log(msg)

console.log(chalk.blue.bold.underline.strikethrough.inverse.bgRed(greenMsg))


// console.log(validator.isURL('https://mead.io'))