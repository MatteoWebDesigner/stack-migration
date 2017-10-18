# Stack migration
Example of how to migrate a stack or library on multi repo codebase. The example assume the folders vegetables, fruits and meat are repos just for keep the example simplier.

## ngAnnotate
you need to add this string on every function which need to be annotate in angular
```"ngInject";```

## Yarn alias
You can have the same library with two versions, more information below

https://github.com/callemall/material-ui/issues/7195#issuecomment-314547601
https://yarnpkg.com/en/docs/install#alternatives-tab

```
yarn add lodash@1.3.1
yarn add lodash-next@npm:lodash@4.17.4
```
