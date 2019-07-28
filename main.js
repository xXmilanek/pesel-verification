const { app, BrowserWindow } = require('electron')



function createWindow () {

let win = new BrowserWindow({
    width: 800,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })


  win.loadFile('index.html')


  


  win.on('closed', () => {

    win = null
  })
}


app.on('ready', createWindow)


app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (win === null) {
    createWindow()
  }
})
