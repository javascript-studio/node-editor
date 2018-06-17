# Studio Editor

📝  Launch `$EDITOR` in your program.

> A fork of [substack/node-editor](https://github.com/substack/node-editor).

# Usage

```js
const editor = require('@studio/editor');
editor('beep.json', function (code, sig) {
  console.log('finished editing with code ' + code);
});
```

# API

```js
const editor = require('@studio/editor')
```

- `editor(file, opts={}, cb)`: Launch the `$EDITOR` (or `opts.editor`) for
  `file`. When the editor exits, `cb(code, sig)` fires.

## Install

With [npm](http://npmjs.org) do:

```
npm install editor
```

# License

MIT
