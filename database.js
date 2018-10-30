const fs = require('fs')
const CircularJSON = require('circular-json')
const dbPath = `${__dirname}/data.json`

const save = async(data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, CircularJSON.stringify(data), (err) => {
           if (err) return reject(err)

           resolve()
        })
    })
}

let load = async() => {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const data = CircularJSON.parse(file)

            resolve(data)
        })
    })
}

// (async () => {
//     try {
//         await load()
//     } catch (e) {
//         console.log(e)
//     }
// })()

module.exports = {
    save,
    load
}