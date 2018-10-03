# better-commit-examples
examples of using the [`better-commit`](https://github.com/amerani/better-commit) plugin system

## configuration
[`.bettercommitrc`](./.bettercommitrc)
```json
{
    "plugins": []
}
```
plugin npm package name begin with `better-commit-`

## core plugins
included by default, exclude using `!`
- [prepend-branch](https://github.com/amerani/better-commit/tree/master/plugins/prepend-branch)
- [autocorrect](https://github.com/amerani/better-commit/tree/master/plugins/autocorrect)

## local plugins
include path instead of npm package name
- [local](./localPlugin.js)

## community plugins
- please create and have fun

## lulz plugins
include npm package name without `better-commit-`
- [poop](https://github.com/amerani/better-commit-poop)
