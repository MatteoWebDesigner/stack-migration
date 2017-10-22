# Stack migration
Example of how to migrate a stack or library on multi repo codebase. The example assume the folders vegetables, fruits and meat are repos. I did not create repos to keep the example simplier.

## Library migration
When you want migrate to a new dependency there are two solutions.

1. You can include the new library library with an alias and you have access of both in the same bundle
2. If the duplication of the library increase considerably your bundle size you can can produce two bundle one with the old library and one with new one
3. Another solution could be to extract the vendors from your bundle. And separate the vendor.
- bundle.app.js
- bundle.vendor-legacy.js
- bundle.vendor.js

When you choose which solution to use you should always consider your context. Updating a dependency it is not something which happen daily but rather something which happen after some time.

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
