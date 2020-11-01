const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book) // convert the JSON data to strings
// const parseJSON = JSON.parse(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json') // data is a buffer of binary data (numeric data)
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON) // parses stringified data from JSON
const title = data.title

// console.log(bookJSON)
// console.log(parseJSON)
console.log(title)