const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "icon.png"),
    webPreferences: {
      nodeIntegration: true
    },
    darkTheme: true
  });

  //Menu.setApplicationMenu(null);

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, "dogeapp/index.html"));
}

app.on("ready", createWindow);
