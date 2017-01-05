
###6
```
npm install --save-dev webpack@2.2.0-rc.3
```
###11
create a npm script
```
  "scripts": {
    "build": "webpack"
  },
```
then
```
npm run build
```
do not run this, it will run webpack in globally installed
```
webpack
```

###14
modules:
- babel-loader: teaches babel how to work with webpack
- babel-core: how to take in code
- babel-preset-env: ruleset

###15
webpack1: loaders = webpack2: module

###19
css
- css-loader: knows how to deal with css imports
- style-loader: take css imports and adds them to the HTML document
```
npm install --save-dev babel-core babel-loader babel-preset-env
```
```
npm install --save-dev css-loader style-loader
```
###21
```
npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4
```