// Import
const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow = null

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = async () => {
  // get width and height of main screen
  const screenElectron = electron.screen
  const mainScreen = screenElectron.getPrimaryDisplay()
  const dimensions = mainScreen.size
  const mainScreenWidth = parseInt(dimensions.width)
  const mainScreenHeight = parseInt(dimensions.height)

  // Create the browser window.
  mainWindow = new BrowserWindow({
    x: mainScreenWidth - 250,
    y: mainScreenHeight - 350,
    width: 250,
    height: 350,
    icon: __dirname + '/src/favicon.ico',
    // frame: false,
    transparent: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be',
    },
    // backgroundColor: '#2e2c29',
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.setResizable(false)
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.setName('Debugging Duck')

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
