# React Native Boilerplate

This project is a boilerplate of a React-Native Project, with 38 test passed (Containers, Components, Actions and Reducers). All the code has been linted using ESLint + Airbnb style.
I've added a custom folder structure to make containers and components more reusable.

Is an extension of the oficial React Native starter project, those that we generate using react-native-cli and typing:

```
react-native init MyProject
```

I don't have change anything of the react-native-core, just add an example and test it. To use this boilerplate, just clone this repository. Move into the folder and run:

```
npm install
```
You will have an initial react-native project with the following tools:

## Testing
I've implemented Enzyme (Airbnb), Mocha, Chai, Chai-as-promised, dirty-chai, mockery, react-dom, react-native-mock and Sinon for test my components.
Every component and container has it's own test file. Test config is inside test/setup.js.

To run test:
```
npm run test
```

## Linting
EsLint + eslint-plugin-react + eslint-plugin-react-native + eslint-config-airbnb are the packages that i've used to make sure that i've writed a clean code in my project. To execute the linter, run:
```
npm run linter
```

To check our project (linter + testing), run:
```
npm run check
```

## Ajax Request inside action creators
To comunicate with APIs from our app, i've added the Axios library. Thanks to Redux-promises, when the promise is resolved the app state is update and suscribed components too.

## State management
I use Redux and Redux-promises to manage the state throught my app, mutating it using actions creators and reducers. All are tested.


You can find me on Twitter: @ivanbtrujillo
