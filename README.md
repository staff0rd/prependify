# prependify

*Prepend your Browserify generated bundle-file with any given text.*

## Install

```sh
npm install prependify
```

## Usage

```js
var browserify = require('browserify')
var prependify = require('prependify')

var b = browserify()
b.add('/path/to/your/file')
b.plugin(prependify, 'some text')
b.bundle().pipe(somewhere)
```

## Related

- [licensify](https://github.com/twada/licensify): Browserify plugin to prepend license header to your bundle

## License

MIT
