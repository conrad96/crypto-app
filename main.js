const path = require('path');
const url = require('url');

const {app, BrowserWindow} = require('electron');

let window;
app.on('ready', function(){
    window = new BrowserWindow({});
    window.loadURL({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file://',
        slashes: true
    });
});