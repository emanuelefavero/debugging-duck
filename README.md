# Debugging Duck

This is my first Electron Desktop Application, a cute rubber duck that helps you debug your code. Explain your code to the duck and it will help you find the bugs!

_If you want to read the origin of the debugging duck_: [Rubber duck debugging - wiki](https://en.wikipedia.org/wiki/Rubber_duck_debugging)

## How to use (with Electron Forge)

    ```bash
    cd debugging-duck
    npm i
    yarn start OR npm start
    ```

## Build App with electron-builder (slow, supports custom icon)

    ```bash
    yarn dist
    ```

## Build App with Electron Forge (fast, no custom icon)

    ```bash
    yarn make OR npm run make
    ```

[electron-builder Link](https://www.electron.build/)
[Electron Forge Link](https://www.electronforge.io/)
