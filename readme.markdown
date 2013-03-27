# char-size

return the size in pixels of a single character

This is useful for writing column-sensitive wrapping code, particularly for
fixed-width fonts.

# example

``` js
var charSize = require('char-size');
var size = charSize(document.body);
console.log(size.width + 'x' + size.height);
```

compile the example and open it in a browser:

```
$ echo '<html><body><script src="bundle.js"></script></body></html>' > index.html
$ browserify size.js > bundle.js
$ xdg-open index.html
```

in the browser console you'll see:

```
8x20
```

# methods

``` js
var charSize = require('char-size')
```

## var size = charSize(opts)

Return the `size` of the `opts.chr` or `'x'` character at `opts.target` or
`document.body`. The `size.width` and `size.height` will be integers in pixels.

If `opts` is a dom element, use it as the `opts.target` value.

# install

With [npm](https://npmjs.org) do:

```
npm install char-size
```

# license

MIT
