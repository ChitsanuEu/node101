const fs = require('fs')


const readFileDataUser = async () => {
    fs.readFileSync('./../mock/dataUsers.json', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data)
        console.log('raed data user = ', users)
    })
}


const writeFile = async (pathFile, dataJSON) => {
    fs.writeFileSync(pathFile, JSON.stringify(dataJSON))
}


module.exports = {
    readFileDataUser,
    writeFile
}