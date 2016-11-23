const util = require('util')

function pp (o) {
  console.log(util.inspect(o, {depth: null, colors: true}))
}

function verifyTransaction (data, cb) {
  console.log('DEBUG: Mock ID verifyTransaction')
  pp(data)
  setTimeout(() => cb(null, {success: true}), 2000)
}

function verifyUser (data, cb) {
  console.log('DEBUG: Mock ID verifyUser')
  pp(data)
  const success = data.license.lastName === 'NAKAMOTO'
  setTimeout(() => cb(null, {success}), 2000)
}

function config () {}

module.exports = {
  verifyTransaction,
  verifyUser,
  config,
  SUPPORTED_MODULES: ['idVerifier'],
  NAME: 'MockIdVerify'
}
