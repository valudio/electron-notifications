const { app, BrowserWindow } = require('electron')

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: { nodeIntegration: true }})
  mainWindow.loadURL('file://' + __dirname + '/playbook.html')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
