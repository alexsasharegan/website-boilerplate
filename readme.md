#Website Building Boilerplate

##Development Bundling
- Webpack is already configured to start writing es2015 javascript and `sass`/`scss`.

###Getting started
To get started, open up a terminal, clone the repo, `cd` into the directory and run:
```
npm install
```
Then:
```
npm run dev
```
This should run webpack in watch mode and generate the bundle file. This boilerplate makes no assumptions about your server stack, so once you've setup your server to serve from `./dist`, you should see your javascript modules inject **Hello World** into your page and you scss styles setting the text color red.

When you ready to build a production bundle that is minified:
```
npm run bundle
```
