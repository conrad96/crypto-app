const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');


let window;
app.on('ready', function(){
    window = new BrowserWindow({});
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
});