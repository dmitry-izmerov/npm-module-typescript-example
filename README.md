## What is this repository for? ##
Provide an example how to initialize npm module with typescript support.

### How to start working with repo? ###
* To have installed nodejs and npm (their versions should be compatible with dev dependencies in `package.json`)
* Run `npm install` to install necessary packages

### How to check local import of this package in another application? ###
* Run `npm pack` - it creates a tar archive from sources
* Add the following entry in dependencies section of target package.json: `"@scope/npm-module-typescript-example": "file:{path to archive}/scope-npm-module-typescript-example-1.0.0.tgz",`
* Run `npm install`

### How to build the module? ###
Run `npm run build`

### How to publish a build? ###
* Add `.npmrc` file in user home directory.
* Use `.npmrc.module-example` file as a template for `.npmrc`.
* Add base64 encoded username:password in `.npmrc` (You might use the following command in Windows OS for powershell to get base64 encoded value: `[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("username:password"))`, where `username:password` should be replaced with a real value.)
* Run `npm publish`

### How to load the npm module from a private repository on client side? ###
* Add `@scope/npm-module-typescript-example` npm module in dependencies section of `package.json` like `"@scope/npm-module-typescript-example": "^1.0.0"`
* To make it loading you need to add `.npmrc` file in user home directory.
* Use `.npmrc.client-example` file as a template for `.npmrc`.
* Add base64 encoded value of `username:password` for `_auth` parameter in `.npmrc` file.
You might use the following command in Windows OS for powershell to get base64 encoded value: `[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("username:password"))`, where `username:password` should be replaced with a real value
