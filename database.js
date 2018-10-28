const fs = require('fs')
const CircularJSON = require('circular-json')


// function save(data) {
//         fs.writeFileSync('data.json', CircularJSON.stringify(data))
// }

const save = async(data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('data.json', CircularJSON.stringify(data), (err) => {
           if (err) return reject(err)

           resolve()
        })
    })
}

let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) return reject(err)

            resolve(contents)
        })
    })
}

const load = async() => {
    const loaded = await readFile('data.json').then(function(result) {
        return result
    })
    return loaded

}

(async () => {
    try {
        await load()
    } catch (e) {
        console.log(e)
    }
})()

module.exports = {
    save,
    load
}