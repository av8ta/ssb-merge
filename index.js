
exports.name = 'merge'
exports.version = require('./package.json').version
exports.manifest = {
  get: 'sync'
}

exports.init = function (ssb, config) {
  return {
    get: function (opts) {
    console.log('ssb-merge-running-as-plugin')
    return 'ssb-merge'
    }
  }

}
