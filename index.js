const util = require('util')

function pp (o) {
  console.log(util.inspect(o, {depth: null, colors: true}))
}

function verifyTransaction (account, data) {
  console.log('DEBUG: Mock ID verifyTransaction')
  pp(data)

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({success: true}), 2000)
  })
}

function verifyUser (account, data) {
  console.log('DEBUG: Mock ID verifyUser')
  pp(data)

  const success = data.license.lastName === 'NAKAMOTO'
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({success}), 2000)
  })
}

module.exports = {
  verifyTransaction,
  verifyUser,
  NAME: 'MockIdVerify'
}
