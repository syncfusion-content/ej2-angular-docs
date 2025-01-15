---
layout: post
title: Electron with Angular Getting started component | Syncfusion
description:  Checkout and learn about Electron with Angular Getting started component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Electron 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Angular and Electron

This guide is designed to help you create a basic Angular application using the `Electron Framework` and integrate `Syncfusion Angular UI components`.

## Prerequisites

Before initiating your Angular project, ensure you have the following installed on your machine:

* Angular version 6 or later
* TypeScript version 2.6 or later
* Electron CLI version 6.0.10 or later

If the `Electron CLI` is not installed, refer to the [`Electron package`](https://www.npmjs.com/package/electron-cli) for installation instructions.

## Set Up Angular Environment

You can follow the [Setting up the local environment and workspace](https://v17.angular.io/guide/setup-local) guide.

Install the Electron framework by using the following command:

```bash
npm install -g electron
```

>Note: This setup uses Electron version 6.0.10, which is compatible with Angular 6.

>Note: Refer to this [getting started guide](https://electronjs.org/docs/tutorial/installation) to install the Electron framework.

## Installing Syncfusion Menu package

Syncfusion packages are available on npm under the `@syncfusion` scope. You can explore all Angular Syncfusion packages [here](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular-).

To install the Menu package, execute the following command:

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
(or)
npm i @syncfusion/ej2-angular-navigations@ngcc --save
```

## Adding the Menu Module

Once the package is installed, component modules are available for configuration in your application. The Syncfusion Angular package offers two types of ng-Modules.

Import the Menu module into your Angular application (`app.module.ts`) from the `@syncfusion/ej2-angular-navigations` package.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Syncfusion menu module from navigations package.
import { MenuModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, MenuModule], // Registering EJ2 Menu Module.
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Menu Component

To integrate the Syncfusion Menu component into your application, update the template in the `app.component.ts` file by adding the `ejs-menu` element and binding it to the `menuItems` variable.

```typescript
import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Menu. -->
            <ejs-menu [items]='menuItems'></ejs-menu>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'File',
            items: [
                { text: 'Open',  url: 'https://www.google.com/search?q=washing+machine' },
                { text: 'Save' },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        },
        {
            text: 'View',
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ]
        },
        { text: 'Go' },
        { text: 'Help' }
    ];
}
```

## Adding CSS Reference

To incorporate the styles for the Menu component, update the `style.css` with the following imports:

```typescript
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```
## Create main.js File

Create a `main.js` file in the root directory of your project and add the following code:

```typescript
const { app, BrowserWindow } = require('electron');
let win;
function createWindow () {     
// Create the browser window.
win = new BrowserWindow({ width: 800, height: 600 });
// Load the index.html of the app. 
win.loadFile('./dist/my-app/index.html');
// Open the DevTools.
win.webContents.openDevTools();
// Emitted when the window is closed.
win.on('closed', () => {       
   win = null     
  })
};      
// This method will be called when Electron finish initialization and is ready to create browser windows.   
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => { 
// On macOS, it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.
if (process.platform !== 'darwin') {
app.quit()
}   
});

app.on('activate', () => {
// On macOS, it is common to re-create a Window in an app when the dock icon is clicked and there are no other windows open.
if (win === null) {
createWindow()
}   
});  
```

## Update index.html

In the `/src/index.html` file, modify `<base href="/">` to `<base href="./">`, enabling Electron to locate the Angular files.

## Update package.json

Modify the `package.json` to include the following entries:

```typescript
"main":"main.js",
"scripts": { 
    "ng": "ng", 
    "start": "ng serve", 
    "build": "ng build", 
    "test": "ng test", 
    "lint": "ng lint", 
    "e2e": "ng e2e", 
    "electron-build": "ng build --prod", 
    "electron": "electron ." 
}, 
```

## Update tsconfig.json

Within the `tsconfig.json` file, update the target to the following setting:

```typescript
"target": "es5"
```

## Running the application

To launch the application, execute the following command lines. The Syncfusion Essential JS 2 Menu component will be rendered within the Electron framework:

```bash
npm  run electron-build 
 
npm  run electron 
```

>Note: For further reference, we have prepared an [Angular sample with the Electron framework](https://github.com/SyncfusionExamples/ej2-angular-electron).

## See Also

* [Electron Browser Window](https://www.electronjs.org/docs/latest/api/browser-window)

* [Angular 10 Electron Tutorial](https://www.techiediaries.com/angular-electron/)

* [Build Angular Desktop Apps With Electron Tutorial](https://fireship.io/lessons/desktop-apps-with-electron-and-angular/)

* [Getting Started with Angular CLI](../getting-started/angular-cli/)
