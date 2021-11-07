# Computer Science

## Tech

### Firebase

#### Firebase Auth: Google Implementation

`signInWithPopup(GoogleAuthProviderObj)`
      `signInWithPopup(provider)`
`getRedirectResult()`
`onAuthStateChanged()` - Check user state (Login or Not)
`signOut()`

#### Firebase Auth: Emamil Password

`createUserWithEmailAndPassword(email, password)`
`signInWithEmailAndPassword(email, password)`
`onAuthStateChanged()` - Check user state (Login or Not)
`signOut()`

#### Firebase commands

      npm install -g firebase-tools
      firebase login
      firebase logout
      firebase init
      firebase serve
      firebase deploy
      firebase emulators:start

      <!-- Firebase Auth -->
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider).then(res => console.log(res))

### Adonis

- { schema } validator - "@ioc:Adonis/Core/Validator";
- { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
- Validators

        node ace invoke @adonisjs/lucid
        node ace make:migration create_users_table --table users
        node ace make:model -h
        node ace make:model -mc // create migration and controller for the model

### Legacy AdonisJs

#### Commands

    Model.query()
        .paginate(1, 30)
        .whereIn("a", [1, 2])
        .where("a", "b")
        .where("a", ">=", ""b)
        .with("a")
    
    Model.query()
        .paginate().pages

    Model.query()
        .rows

### Yarn

    yarn create react-app my-app, yarn upgrade-interactive

### Cypress

#### cypress commands

      cy: visit(), contains(), get(), type(), request()   click() 

### MongoDB

`References` store the relationships between data by including `links` or `references` from one `document` to another. Applications can resolve these `references` to access the related data

### Mongoose

`Getters and setters` help you change how you `get` and `set` the attributes defined by the `keys` and `values` in the underlying raw `document`.

`Setters` allow you to transform the `mongoose document's data` before it gets to the raw `mongodb document` and is `set` as a value on an actual key.

`Getters` allow you to transform the `representation` of the `data` as it travels from the `raw mongodb document` to the `value` that you see.

`Models` are fancy constructors compiled from `Schema definitions`. An instance of a model is called a `document`. `Models` are responsible for **creating and reading** documents from the underlying MongoDB database.

You can connect to MongoDB with the `mongoose.connect()` method.

The `type` property is a property in the mongoose schema. When Mongoose finds a nested property named type in your schema, Mongoose assumes that it needs to define a SchemaType with the given type.

`Schema` :-- a schema is a map to a mongoDB collection and defines the shape of the documents within that collection

Each key (or path in mongoose terms) in a Schema defines a property in the documents which will be cast to its associated SchemaType.

`SchemaType` :-- You can think of a **Mongoose schema** as the configuration object for a **Mongoose model**.  A **SchemaType** is then a configuration object for an individual property. SchemaType doesn't actually create **MongoDB ObjectIds**, it is just a configuration for a `path` in a `schema`.

`SchemaType Options` You can declare a schema type using the type directly, or an object with a `type` property.

to use `schema` definition, we need to convert it to a `Model` towork with. so the schema is passed into `mongoose.model(modelName, schema)`

                                          commands

    mongoose.Schema({}), mongooose.model(), set(), get(), 

                                          keywords
    Virtuals, property, key, configuration, schema, model, instance, connect, type, collection, document

### Babel

they are also referred to as loaders

We can use loaders to inform webpack of the les that need to be processed before they are bundled.

#### babel config

    const path = require('path')

    const config = {
      entry: ['@babel/polyfill', './src/index.js',],
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ]
      }
    };

    module.exports = config;

Loaders are defined under the module property in the rules array

The test property species that the loader is for les that have names ending with .js. The loaderproperty species that the processing for those les will be done with babel-loader. The queryproperty is used for specifying parameters for the loader, that congure its functionality.

The transpilation process that is executed by Babel is defined with plugins. In practice, most developers use ready-made presets that are groups of pre-congured plugins example of such preset is the **@babe/preset-react** which is used for transpiing the source code of a react appliation.

The **babel/preset-env** plugin contains everythig neede to take the code using all the latest features and transpile it to code that is compatible with ES5 standard:

#### babel commands

      npm install @babel/core babel-loader @babel/preset-react --save-dev npm install '@babel/polyfill --save-dev

### Webpack

One of the key players in making React applications functional.

#### Bundlings

Even though ES6 modules are defined in the ECMAScripts standard, no browser actually knows how to handle code that is divided into modules.

For this reason, code that is divided into modules must be bundled for browsers, meaning that all of the source code files are transformed into a single file that contains all of the application code

The `index.html file located at the root of the build directory is the "main file" of the application, that loads the bundled JavaScript file with a script tag (in fact there are two bundled JavaScript files.the **build script** also bundles the application's CSS files into a single file.

bundling is done so that we define an entry point for the application, which typically is the `index.js` file. When webpack bundles the code, it includes all of the code that the entry point imports, and the code that its imports import, and so on.

#### webpack configuration

    const path = require('path')

    const config = {
      entry: ['@babel/polyfill', './src/index.js',],
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000
      },
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
          }
        ]
      }
    };

The webpack conguration file has been written in JavaScript and the conguration object is exported byusing Node's module syntax

The entry property of the conguration object species the file that will serve as the entry point for bundling the application

The output property defines the location where the bundled code will be stored. The target directory must be defined as an absolute path which is easy to create with the `path.resolve` method. We also use `__dirname` which is a global variable in Node that stores the path to the current directory

#### loaders

We can use loaders to inform webpack of the les that need to be processed before they are bundled.

      module: {
      rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
            presets: ['@babel/preset-react'],
            }
            }
      ]
      }
      };

Loaders are defined under the module property in the rules array

The test property species that the loader is for les that have names ending with .js. The loaderproperty species that the processing for those les will be done with babel-loader. The queryproperty is used for specifying parameters for the loader, that congure its functionality

When using CSS, we have to use `css` and `style` loaders. The job of the **css loader** is to load the `CSS` files and the job of the **style loader** is to generate and inject a style element that contains all of the styles of the application.

#### webpack-dev-server

Mainly used to create a smooth and nice devlopement workflow

npm script for web-server

    {
      // ...
      "script": {
        "build": "webpack --mode=development",
        "start": "webpack-dev-server --mode=development"
      },
      // ...
    }

webpack-dev-server configureation in the `webpack.config.js` file.

    const config = {
      entry: ['@babel/polyfill', './src/index.js',],
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000
      },
      // ...
    }

#### source-map

source map makes it possible to map errors that occur during the execution of the undling to the corresponding part in the original source code.

source map can be genereated by adding a new **devtool** property to the configuration object with the value 'source-map'

    const config = {
      entry: './src/ndex.js',
      output: {
        // ...
      },
      devServer: {
        // ...
      },
      devtool: 'source-map',
      // ...
    };

#### polyfills

They are codes which isused to add missing functionalities to older browsers. They can be added with the help of **webpack and Babel** by installing one of many polyfills dependencies.

The polyll provided by the promise-polyll library is easy to use, we simply have to add the following to the existing code

    import PromisePolyfill from 'promise-polyfill'

    if (!window.Promise) {
      window.Promise = PromisePolyfill
    }

#### webpack commands

webpack's `DefinePlugin` for defining global default constants that can be used in the bundled code

inspect thte bundled production version of application by executing `npx static-server`. By default the application will be available at `http://localhost:9080.`

      npm install --save-dev webpack webpack-cli, npm run build, npm install style-loader css-loader --save-dev, npm install --save-dev webpack-dev-server, npx static-server

### Bootstrap

In bootstrap all content of the application is rendered inside of a container

### heroku

#### heroku commands

      heroku create, heroku logs -t, git push heroku master, heroku certs -a your_app_name, heroku domains

### Node

#### node commands

      node index.js

### Express

#### Express Definition

Fast, unopinionated, minimalistic web framework for nodejs
It is a minimal and flexible **NodeJs web application framework** that provides a robust set of features for web and mobile application. With myriads of **HTTP utility methods and middleware**, creating a robust **API** is quicka and easy.

#### Routing in Express

Routing refers to how an application responds to a client **request** on a particular **endpoint**, which is the **URI or (path)** and a specific **HTTP method** (GET, POST, and so on).

      app.METHOD(PATH, HANDLER);
      <!--
       - app is the express instance
       - METHOD is the HTTP request method
       - PATH is the path on the server
       - HANDLER is the function executed when the path is matched
      -->

#### Serving static files in express

To serve static files such as images, css, use the `express.static` built in middleware function

      express.static(root, [option]);
      app.use(express.static('public'));

**root** specifies the directory from which to serve the static files.

#### Express Middlewares and built-in Functions

      express.static(root, [option]) 

### NPM

#### npm commands

      npm install, npm cache clean --force, rm package-lock.json, rm -r node_modules, npm update, npm start, npm rum <script>, json-server: npx json-server --port 3002 --watch json.db, npm run server, npm outdated --depth 0

### chrome

      chrome://flags/, cd \\Program Files (x86)\\Google\\Chrome\\Application, chrome --incognito, chrome --show-fps-counter, chrome --no-referrers, chrome --restore-last-session, chrome --disable-extensions, chrome --disable-notifications, chrome --start-maximized, chrome --disable-sync, chrome --no-experiments, chrome --mute-audio

### vscode

      code --help, code --version, code --list-extensions, code --new-window

### Terminal

#### terminal keybindings

      Ctrl+`, Ctrl+Shift+`, Ctrl+Alt+PageUp, Ctrl+Alt+PageDown, Shift+PageUp, Shift+PageDown, Ctrl+Home, Ctrl+End

### Linux

#### linux bash commands

      ls, touch

### Git

#### git commands

      git config: --global user.name, --global user.email, git init, git add, git status, git commit, git commit a, git commit -m 'Changed file_name>',
     git pull, git clone <url>, git rm --cached <file>, git restore --staged <file>, git remote, git remote add origin <url>, git remote -v, git push,
     git pull https://github.com/damigreen/fullstackopen2019.git --allow-unrelated-histories, git remote show origin, git config --get remote.origin.url, git switch foo, git switch -c foo origin/foo, git rm -rf --cached myuntrackedfolder, git add myuntrackedfolder, git loc -4, git push --force git commit --amend --author="Damilola Faseun <damilola.faseun@gmail.com>" --no-edit
     git push -u origin master, git branch <branch_name>, git checkout -b <branch_name>, git merge <branch_name>, git push --set-upstream origin master, git branch -a 

### PYTHON

#### python commands

      import, re(compile(), search(), findall()), sub(), exec(), open(),      write

### JAVASCRIPT

#### javascript commands

      forEach, document.createTextNod, readyState, onreadystatechange, res.redirect, bind, Uint8Array(), arr.fill(), XMLHTTPRequest: [send(), open(), setRequestHeader, ], find(), indexOf(), includes(), JSON.stringify(), document.location.pathname, dragable, e.srcElement, e.dataTransfer.setData, e.dataTransfer.effectAllowed, dataset.value, innerText, setAttribute, replace(), endsWith()

#### javascript frameworks

      React, Angular, vue

#### javascript libraries

      hapi, vanilla, JQuery, Babel

#### javascript keywords

      classes, closure, inheritance

### TYPESCRIPT

#### typscript commands

      tc, tsc --init, tsc -w, tsc --project . --pretty --skipLibCheck --diagnostics, implements,

#### typescript keywords

      constructor, accesor, public, private,

### ANGULAR

#### angular keywords 

      ngFor, components, OnInit,

#### angular commands

      evntemitters, ng generate component <name>, npm install -g yo (yeoman), yo --help, yo start-angular, yo start-angular --blank --bootstrap,
      npm install --save-dev @angular/cli@latest, npm run ng <command>, ng update @angular/cli --migrate-only --from=<WhateverVersionYouAreCurrentlyOn>,
      ng update @angular/cli --migrate-only --from=1.7.3, ng config -g cli.warnings.versionMismatch false, npm ls --global --depth 0, tsc --project . --pretty --skipLibCheck --diagnostics, npm install -g @angular/cli, ng new my-dream-app, cd my-dream-app, ng serve, ng update --all --force,

#### packages

      bower, grunt, yeoman, lite-server

### WEB

  searches(chrome):
      minification,
      concatenation,
      cache busting,
      unit,
      testing,
      linting optimization,
      databases and server administration and configuration.

### REACT

React only focuses on generating the views and the application state is separated completely from the React components and passed on to Redux, its actions, and its reducers

The `props.children`, that is used for referencing the child components of the component.

The `useImperativeHandle` function is a React hook, that is used for defining functions in a component which can be invoked from outside of the component.

#### React - router

BrowserRouter is a Router that uses the HTML5 history API (pushState, replaceState and thepopState event) to keep your UI in sync with the URL

with thehelp of the HTML5 history APIBrowserRouter enables us to use the url in the address bar of thebrowser for internal "routing" in a React-application. So even if the url in the address bar changes,the content of the page is only manipulated using Javascript, and the browser doesn't load newcontent form the server.

#### High order components

A higher-order component is just a function that takes an existing component and returns another component that wraps it. a high order component is a function that accept a "regular"component as its parameter, that then returns a new "regular" component as its return value.

They are a way of defining generic functionality that can be applied to components.

#### react-redux

##### react-redux commands

  npm install --save react-redux, Provider()

#### react-dom

The **React-elements** dening the appearance of the components of the application make up the **Virtual DOM**, which is stored in system memory during runtime

With the help of the **ReactDOM-library** the **virtual DOM** defined by the components is rendered to a real DOM that can be shown by the browser using the DOM API.

    ReatDOM.render(
      <App />,
      document.getElementById('root')
    )

When the state of the application changes a new virtual DOM gets defined by the components. React has the previous version of the virtual DOM in memory and instead of directly rendering the new virtual DOM using the DOM API React computes the optimal way to update the DOM (remove, add or modify elements in the DOM) such that the DOM reflects the new virtual DOM

#### create-react-app

A better development workflow has probably never existed for browser-side JavaScript development. Developing with React was notorious for requiring tools that were very difcult to congure. Thesedays, getting started with React development is almost painless thanks to create-react-app

#### Custom Hooks

React offers 10 different buitl-in hooks, of which the most popular ones are `useState` and `useEffect`. React also offers option to create our own custom hooks. the primary purpose of custom hooks is to facilitate the reuse of the logic used in componentes

> building custom hooks helps you extract component logics into reusable functions.

custom hooks are regular javascript funcion that can use any other hook. additionaly the name of a custom hook must start with the word use.

Dealing with forms is greatly simplied when the unpleasant nitty-gritty details related to synchronizing the state of the form is encapsulated inside of our custom hook.

Custom hooks are not only a tool for reuse, they also provide a better way for dividing codes into smaller modular parts

#### eject

The create-react-app tool uses webpack behind the scenes. If the default conguration is notenough, it is possible to eject the project which will get rid of all of the black magic, and the defaultconguration les will be stored in the cong directory and in a modied package.json file.

If you eject an application created with create-react-app, there is no return and all of theconguration will have to be maintained manually. The default conguration is not trivial, andinstead of ejecting from a create-react-app application, a better alternative may be to write yourown webpack conguration from the get-go

#### differnce between functional components and class components

The biggest difference between Functional components and Class components is mainly that the state of a Class component is a single object, and that the state is updated using the method setState, while in Functional components the state can consist of multiple different variables, with all of them having their own update function.

In some more advanced use cases the effect hook offers a considerably better mechanism forcontrolling side effects compared to the lifecycle-methods of Class Components

#### react terms

* presentational
* container component

#### Flux-architecture

facebook developed the flux-archtecture to make state management easier. In flux, states are separated completely from the react component into its own stores. states in the stores is not changed directly, but with different actions

When an action changes the state of the store, the views are rendered:

                             ------------[ Action ]----------
                             |                              | 
      [ Action ]---->[ Dispatcher ]----->[ store ]----->[ View ]

> * Action creators are helper methods, collected into a library, that create an action from method parameters, assaign it a type and provide it to the dispatcher
> * Every action is sent to all the stores via the callbacks the stores registers with the dispatcher.
> * After stores update themselves in the response t an  action, they emit a change event.
> * Special views called controller-views , listen for change event, retrieve the new data from the stores and provide the new data to the entire tree of the child views.

Flux offers a standard way for how and were the applications's state is kept and modified.

#### Redux

`createAction()` A helper function for defining `Redux` action types and creator.

It helps combines these two declarations (normal implementation of a reducer) into one. It takes an action type and returns an action creator for that type.

`createReducer()` the utility that simplifies creating reducer functions, by defining them as lookuptables of functions to handle each action types.

it also allows to simplify immutable uppdate logic, by writing matative codes inside your reducer.

It helps in the streamlining of reducers in general.

It takes two arguments. the first is the initial state and the second is an object mapping from action types  to the case reducers, each of which handles a specific action type.

`reselect` simple selector library for redux

`Selectors` can compute derived data, allowing Redux to store the minimal possible state.

`Selectors` are efficient. A selector is not recomputed unless one of its arguments changes.

`Selectors` are composable. They can be used as input to other selectors.

Facebook has an implementation for Flux, but we will be using the Redux - library. It works with thesame principle, but is a bit simpler. Facebook also uses Redux now instead of their original Flux.

As in Flux, in Redux the state is also stored in a store.

The state of the store changed with a action. **Actions** are object which have at least a field determining the type of the type of the action.

The impact of the action to the state is defined using a **reducer**. In practice, the reducer is a function which is given the current state and an action as parameters.

The `subscribe()`, is used to create recall functions thestore calls when its state is changed

Reducer is only given as a parameter to the `createStore()`function which creates the store

The store uses reducers to handle actions which are sent to the store with the `dispatch()` method.

use the `getState()` method to find the state of the store.

The `subsciribe()` method is use to create a recall function the store calls when its state is changed.

A reducer state must be compiled of **immutable objects**. If there is a change in the state, the old object is not changed, but it is replaced with a new, changed, object

Functions that create actions in redux are called action creators

The `combineReducer()` method is used to combine reducers.It forms one reducer from many simple reduces. The state of the store is defines by the reducer is an object with properties whose value are properties of reducers.

The combined reducer works in such a way that every action gets handled in every part of the combined reducer.

The `connect()` is used to pass redux store to React components. In order to use connect, you define the application as a child of `Provider` component provided by the React Redux library. They can be used in transforming 'regular' React componets so that the state of the Redux store can be "mapped into the component's props.

The `mapStateToProps` is used to pass the state of the redux store to a React component as a propery.

`ownProps`

The `mapDispatchToProps` is used to direcly dispatch an action to a reducer with the `connect()` method without calling the dispatch from the `store.getState()`. Components can easily dispatch actions with the `props.` command. It is a JavaScript object.

`selectors` are functions that receives the store state entirely and selets an appropriate piece of the store that is passed to the component

##### redux-thunk-library

enables us to create asynchronous actions

The redux-thunk-library is a so-called redux-middleware, which must be initialized along with the initialization of the store.

with redux-thunk, it is possible to define action creators so that they return a function having the dispatch-method of redux-store as its parameter.

##### action creators

##### redux commands

      createStore() subscribe() dispatch(), connect(), store(), getState(), combineReducer(), mapDisptchToProps, matchStateToProps 

#### React-router

provides an excellent solution to the navigational management of a react application

##### React-router commands

      npm install --save react-router npm install --save react-router-dom

#### react bullet sort

* render defines how and what is rendered to the screen
* the lifecycle-method `componentDidMount`, whichis executed once right after the rst time a component renders
* The **React-elements** dening the appearance of the components of the application make up the **Virtual DOM**, which is stored in system memory during runtime

#### React commands

    npm install --save react, npm install --save react-dom, npx create-react-app <app name>, cd <app name>, npm start, ReactDOM.render(), useState, npm install --save react@latest, npm install --save reaact-dom@latest, rm package-lock.json, rm -r node_modules
    setState(), useEffect(), useState(), useImperativeHandle, ref, createRef()

### PHP

`Commands`

      var_dump() array_merge() number_format();

`Concepts`

      `associate array =>` Multidimensional array Assignment operators Arithmetic operators Comparison Operators `Pre-increment ++$x` `Post-increment $x++` `Pre-decrement --$x` `Post-decrement $x++` Logical Operators

`Spaceshift` - `<=>`
-- If the value on the left is less than the value on the right, the system returns -1
-- If the value on the left is equal to the value on the right, the system returns a 0
-- If the value on the left is greater than the value on the right, the system returns a 1

### MYSQL

#### Commands - mysql

      mysql -u root -p
      CREATE DATABASE adonis5
      SELECT User, Host FROM mysql.user; - get all users from mysql
      ALTER USER 'user-name'@'localhost' IDENTIFIED BY 'NEW_USER_PASSWORD';FLUSH PRIVILEGES;
      SET PASSWORD FOR 'user-name'@'localhost' = PASSWORD('NEW_USER_PASSWORD');FLUSH PRIVILEGES;

      USE mysql;

      UPDATE user 
      SET password = PASSWORD('dolphin')
      WHERE user = 'dbadmin' AND 
            host = 'localhost';

      FLUSH PRIVILEGES;

### GraphQL

the `GraphQL Playground` is a development tool used for making `GraphQL queries` and inspecting `GraphQL schema and documentation`

## JavaScript

### High order functions

HOFs are functions that either accept functions as parameters or return functions. Examples are methods used for dealing with arrays like `map()`, `filter(`) and `find()` are HOFs

the `super()` keyword is used to access and call functions on an objects parent.

## Topics

### Serverless

Serverless is not about there not being a server in applications, but about how the server is dened.Software developer can shift their programming efforts to a higher level of abstraction as there is nolonger a need to programmatically dene the routing of HTTP-requests, database relations, etc.,since the cloud infrastructure provides all of this. Cloud functions also lend themselves to creatingwell scaling system, e.g. Amazon's Lambda can execute a massive amount of cloud functions persecond. All of this happens automatically through the infrastructure and there is no need to initiatenew servers,

### Microservice architecture

A microservice architecture (microservices) is a way of composing the backend of an applicationfrom many separate, independent services, which communicate with each other over the network.An individual microservice's purpose is to take care of a particular logical functional whole. In a puremicroservice architecture the services do not use a shared database

### Progressive web apps

Lately people have started using the term progressive web app (PWA) launched by Google. they are web-applications, working as well as possible on every platform taking advantage of the best parts of those platforms. The smaller screen of mobile device must not hamper the usability of the application. PWA:s should also work flawlessly in offline-mode or with a slow internet connection. On mobile devices they must be installable just like any other application. All the network trafic in a PWA:s should be encrypted.

Applications created using create-react-app are progressive by default. If the application uses datafrom a server, making it progressive takes work. The offline functionality is usually implemented with the help of **service workers.**

### IsO apps / Universal code

an isomorphic web application is one that performs rendering on both the front- andbackend. On the other )hand, universal code is code that can be executed in most environments,meaning both the frontend and the backend

### End to end testing

E2E-testing of web applications is done using the browser with the help of some library. There areplenty of solutions out there, e.g. Selenium, which enables automatic tests using practically anybrowser

Even though E2E for web applications has been technologically possible for more than ten years ithas been woefully difcult, especially when it comes to applications created using the Single PageApp(SPA) -principle. SPA-tests have often been unreliable, or some might say flaky: sometimesparticular tests pass and sometimes they don't, even though the code remains unchanged

### Transpilers

The process of transforming code from one form of JavaScript to another is called transpiling. The general denition of the term is to compile source code code by transforming it from one languageto another.

in react, we can tranpile code containing JSX into regular JavaScript with the help of **babel** which is currently the most popular tool for the job.

Also, most browsers do not support the latest features that were introduced in ES6 and ES7, and for this reason the code is usually transpiled to a version of JavaScript that implements the ES5 standard.

The transpilation process that is executed by Babel is defined with plugins. In practice, most developers use ready-made presets that are groups of pre-congured plugins example of such preset is the **@babe/preset-react** which is used for transpiing the source code of a react appliation.

The **babel/preset-env** plugin contains everythig neede to take the code using all the latest features and transpile it to code that is compatible with ES5 standard:

### [port](<https://en.wikipedia.org/wiki/Port_(computer_networking)> 'wikipedia port link')

In computer networking, a port is a communication endpoint. Physical as well as wireless connections are terminated at ports of hardware devices.
In computer networking, a port is a communication endpoint. Physical as well as wireless connections are terminated at ports of hardware devices.
At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service.

### cs50

    commands:clang hello hello.c, make hello, help50 make hello, %s, name,

### Maths

#### math characters

      ♠ Ω ℮ ∀ ∃ ∃! ∈ ℝ ∏ 𝕌 ℤ ∪ ∩ ∧ ∨ ∅ π ∑ σ ∏ ℕ ∌ ∉ 𝔠 ℂ 𝔹 ⊂ ⊆ ⊇ ⊃ ≠ < > ≤ ≥ ↔ → ← ↕ ↔ ∆ ∂ ∞ ≈ • √ ± λ × f ∘ ≡ Φ ̄  ̅  ˆ ̂  ۸ √ ᶧ * ≺ ≻ ⊀ ⊁ ⪯ ⪰ ⋠ ⋡ ՛   

