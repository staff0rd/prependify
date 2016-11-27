var through = require('through2')

module.exports = prependify

function prependify (b, text) {
  if (typeof (text) === 'object') {
    text = text[Object.keys(text)[0]].join(' ')
  }

  b.on('bundle', function () {
    var first = true
    b.pipeline.get('wrap').push(
      through.obj(function (buf, _, next) {
        if (first) {
          this.push(text)
          first = false
        }
        this.push(buf)
        next()
      })
    )
  })
}
