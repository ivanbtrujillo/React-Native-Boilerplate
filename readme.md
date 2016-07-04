# React Native Boilerplate

# This project development is not finished yet ...

This boilerplate is an extension of the oficial React Native starter project, those that we generate using react-native-cli and typing:

```
react-native init MyProject
```
To use this boilerplate, just clone this repository. Move into the folder and run:

```
npm install
```
You will have an initial react-native project with the following tools:

## Testing
I've implemented Enzyme (Airbnb), Mocha, Chai and Sinon for test my components easily.

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

## Ajax Request
To comunicate with APIs from our app, i've added the Axios library, that allow me make request easily.

## State management
I use Redux and Redux promises to manage the state throught my app, mutating it using actions and reducers.

## Router
React-Native-Router-Flux is integrated with Redux in this project.

## More to come:
To extends the functionality of this boilerplate, i will make some usefull components in other repositories that will be easy to integrate with our app.

* Example of update state and read state
* A better folder structure
* Google maps component
* AsyncStorage example
* Social Login component using Oauth
* Form validation component


Questions? @ivanbtrujillo
