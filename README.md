# bob

unicorns

---

## configuration

_BY DEFAULT THESE ARE SETUP IN THE API RESOURCE - THIS WOULD ONLY BE IF YOU WANT TO OVERRIDE PROXIES_

- proxies.json => this is the file that setups all of the external/internal API urls.
  - this is done so that we can use the `env-config.json` to test different environments locally without having to deploy
  - for example to test a `qa` env locally just change the `env-config.json` local to have api of qa
  ```
  {
    "local": {
        "api": "qa"
    }
  }
  ```

---

## project overview

**Building the project**

- building the micro app to test/view by itself (each micro app was created using Creact React App v2 just for ease of use - there have been modifications)
  - since these are using CRA v2 they come with commands:
    - `yarn start` or `npm start` => this will spin up a web dev server showing the application. This can be used for testing/qa
    - `yarn test` or `npm test` => this will run all of the jest tests in the project
    - THIS ONE WAS RENAMED `yarn build:app` or `npm run build:app` => will build/create the minified version (`/build`) of the application (we do not actually use this)
  - we repurposed the command `yarn build` or `npm run build` => this builds the `/lib` that is a bundled version of all of the components/reducers/creators that we exported in `export.js`. This is what is imported into the main app that the user interacts with

---

**Folder structure for src/**

_all of your work will go here_

- **config** => this holds all of the configurations for the api
- **App** => this is the folder that holds all of the features that will be exported/bundled into an `npm` module
  - **[FEATURE]** => this and the following bullets should be renamed to whatever feature (there can be several features to a micro app)- example: `login` in the `eCards-user-app`
    - **[FEATURE.actions]** => contains all of the actions for redux
    - **[FEATURE.container]** => contains the actual react component/container (this will be added to `export.js` as this needs to be exported)
    - **[FEATURE_NAME.creators]** => contains all of the creators/functions for redux (this will be added to `export.js` as this needs to be exported)
    - **[FEATURE_NAME.model]** => contains the initial values for the redux store
    - **[FEATURE_NAME.reducer]** => contains the redux reducer for the feature (this will be added to `export.js` as this needs to be exported)
- **resource** => this holds the resource of the micro app (integration into the api). There should only be one resource for each micro app, example: `User.Resource` => `eCards-user-app`, this resource only interacts with the `/user` endpoint or any of the user related endpoints on the API
- **utils** => this holds all of the utility files that are shared between the features

---

**Important files in src/**

- **export.js** => this contains the `reducer, creators, component/container` of EACH feature. This will get bundled up into the `/lib` folder and that is what gets installed in the main app that the user interacts with. This allows the main app to do something like this

```
import { LoginContainer } from "ecards-user-app"
```

- **App.js** => this is where you can add links/routes to the components that are being built. This is what is used when we run `yarn start`; this is where we can setup for testing/qa. This does not get bundled up or exported to the library.
