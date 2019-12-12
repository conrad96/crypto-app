const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');
const shell = require('electron').shell

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
                {type: 'separator'},
                {
                    label: 'CoinMarketCap',
                    click(){
                        shell.openExternal('http://coinmarketcap.com');
                    }
                },
                {type: 'separator'},
                {
                    label: 'Exit',
                    click(){
                        //action
                        app.quit();
                    }
                }
            ]
        }
    ]);
    //add menu to application
    Menu.setApplicationMenu(menu);
});