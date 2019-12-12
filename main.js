const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');


let window, menu;
app.on('ready', function(){
    window = new BrowserWindow({});
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    //create menu
    menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {label: 'Adjust Notification Value'},
                {label: 'CoinMarketCap'},
                {label: 'Exit'}
            ]
        }
    ]);
    //add menu to application
    Menu.setApplicationMenu(menu);
});