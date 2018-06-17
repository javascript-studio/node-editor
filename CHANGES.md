# Changes

## 1.1.1

- Fix wrongly applied commit

## 1.1.0

Fork `editor` to `@studio/editor` to get [node-editor#13][] into the project.

- Call callback when child process errors, pass 127 on ENOENT (Frederik Ring)

Developer tools changes (Maximilian Antoni):

- Use [Studio Changes][] for releases 
- Use eslint and adjust source style
- Adjust project name and URLs for fork
- Add `package-lock.json`
- Remove unused tab dependency and test script
- Change README style to match Studio projects

[node-editor#13]: https://github.com/substack/node-editor/pull/13
[Studio Changes]: https://github.com/javascript-studio/studio-changes

---

Previous releases published as [editor](http://npm.im/editor):

## 1.0.0

## 0.0.1

- fix for node 0.10

## 0.0.6

- support for arguments in editor (Mathias Buus)
- fix the license

## 0.0.5

- There is no such thing as MIT/X11 license (Jérémy Lal)

    > MIT usually refers to Expat. "X11 License", also called "MIT/X" is MIT +
    > a paragraph about trademark.
    >
    > http://en.wikipedia.org/wiki/MIT_License#Various_versions

- add MIT license file (T.C. Hollingsworth)

## 0.0.4

## 0.0.3

- fix typeError (Dominic Tarr)
- use notepad on windows
- remove unnecessary `stdin.pipe()`
- pkginit-generated `package.json`
- use `__dirname`
- working example ripped out of pkginit
