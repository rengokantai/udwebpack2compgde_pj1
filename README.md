
###6
```
npm install --save webpack@2.2.0-rc.3
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