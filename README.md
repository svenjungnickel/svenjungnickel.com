# svenjungnickel.com

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project and launch server
$ npm run generate
$ npm run start
```

## 💫 Deploy

To deploy on [Netlify](https://www.netlify.com/) just hit following button:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/svenjungnickel/svenjungnickel.com)

You can also test the Netlify build before you deploy.

1.  **Link Netlify Project.**

    Run following command to link the project.

    ```sh
    netlify link
    ```

    Select a way to link the project.

2.  **Run test build.**

    To test the build run following command:

    ```sh
    netlify build
    ```

    This will run the build on your local dev environment. The logs will show if the build will be successful or has
    any errors.

## 🚨 Linting

We are using [EsLint](https://eslint.org/) for Javascript linting. Simply run following command to lint your code:

```sh
npm run lint
```

To fix any issues simply run the fix command:

```sh
npm run lintfix
```

## ✅ Unit tests

We are using [Jest](https://jestjs.io/) for unit tests. You can find more details in the [gatsby docs](https://www.gatsbyjs.org/docs/unit-testing/).

To run all unit tests simply use following command:

```sh
npm run test
```

You can also watch unit tests while developing:

```sh
npx jest --watch
```

To watch all unit tests run following:

```sh
npx jest --watchAll
```

All unit tests generate also code coverage. You can find the generated code coverage under `<rootDir>/coverage/index.html`.

## 🎉 Lighthouse audits

We are running lighthouse audits via [lighthouse CI CLI](https://github.com/GoogleChrome/lighthouse-ci).

To start mobile Lighthouse audits use following command:

```sh
npm run lhci:mobile
```

To start desktop Lighthouse audits use following command:

```sh
npm run lhci:desktop
```

## 🎬 Run GitHub actions locally

To test GitHub actions locally before pushing to GitHub we are using [nektos/act](https://github.com/nektos/act).
You have to install it first via brew `brew install act`. Then you can run actions via following command:

```sh
act -j <workflow-name>
```

Visit the docs for more [example commands](https://github.com/nektos/act#example-commands).
