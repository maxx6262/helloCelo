onst Web3 = require('web3')
const fs = require('fs')
const path = require('path')
var web3 = new Web3()
const privateKey = '0xbf163c12734401778c593794eeb19353fda8da1abf4cdc731cc5b64fdcbc5dbc'
const filePath = path.join(__dirname, './.secret')
function getAccount() {
    return new Promise(resolve => {
//        if(fs.existsSync(filePath)){
//            fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
//                resolve(web3.eth.accounts.privateKeyToAccount(data))
//            })
//        } else {
//            let randomAccount = web3.eth.accounts.create()
//            fs.writeFile(filePath, randomAccount.privateKey, (err) => {
          let randomAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
//if(err) {
//                    return console.log(err);
//                }
//            })
          resolve(randomAccount)
//        }
    })
}
module.exports = {
    getAccount
}
