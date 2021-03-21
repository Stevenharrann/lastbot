exports.cekResi = require('./cekResi')
exports.downloader = require('./downloader')
exports.meme = require('./meme')

exports.urlShortener = require('./shortener')

exports.getLocationData = require('./location')
function requireUncached(module) {
    delete require.cache[require.resolve(module)]
    return require(module)
}
exports.cekResi = require('./cekResi')
exports.meme = require('./meme')
exports.urlShortener = require('./shortener')
exports.getLocationData = require('./location')
exports.menuId = require('./help')


exports.rugaapi = require('./rugaApi')

exports.api = require('./api.js')
