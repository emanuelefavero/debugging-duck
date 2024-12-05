# Debugging Duck

This is my first Electron Desktop Application, a cute rubber duck that helps you debug your code. Explain your code to the duck and it will help you find the bugs!

> _Read the origin of the debugging duck_: [Rubber duck debugging - wiki](https://en.wikipedia.org/wiki/Rubber_duck_debugging)

### **Check out a demo of it built on the web**

- [Debugging Duck - Web](https://emanuelefavero.github.io/debugging-duck-vanilla-js/)

> Note: The web version is built with vanilla JS and has less features

## Features

![screenshot](./screenshot.png 'screenshot')
![screenshot](./screenshot2.png 'screenshot')

Ducky will always appear on the bottom right corner of your screen (no matter your screen size) and greet you with different cute messages each time. It will also follow your mouse cursor when you get close to it. It also opens and closes its eyes and breathes like a real duck

## How to use (with Electron Forge)

> Note: You need `yarn` installed on your machine: `npm install --global yarn`

    ```bash
    cd debugging-duck
    yarn install
    yarn start
    ```

## Build App with electron-builder (slow, supports custom icon)

    ```bash
    yarn dist
    ```

## Build App with Electron Forge (fast, no custom icon)

    ```bash
    yarn make
    ```

#### Resources

[electron-builder Link](https://www.electron.build/)
[Electron Forge Link](https://www.electronforge.io/)

> Plans for the future:
>
> - Add more color themes (Night Owl is the only one right now)
> - Add a settings page
> - Add more cute messages
> - Add the possibility to change the duck mood
> - Add a way to change the duck's name
> - Add more cute animations
> - Add more languages
> - Add a way to change the app and duck's size
> - Add a way to change the duck's position at startup
> - Add a way to change the duck's color
> - Add rubber duck sounds when you click on it
> - Add a way to choose 3d or 2d duck

## License

- [MIT](LICENSE.md)
