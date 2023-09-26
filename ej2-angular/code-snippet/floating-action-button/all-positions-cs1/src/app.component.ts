

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="target" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To Render Floating Action Button in TopLeft position. -->
        <button ejs-fab id="fab1" iconCss='fab-icons fab-icon-people' position='TopLeft'
            target='#target'></button>
        <!-- To Render Floating Action Button in TopCenter position. -->
        <button ejs-fab id="fab2" iconCss='fab-icons fab-icon-people' position='TopCenter'
            target='#target'></button>
        <!-- To Render Floating Action Button in TopRight position. -->
        <button ejs-fab id="fab3" iconCss='fab-icons fab-icon-people' position='TopRight'
            target='#target'></button>
        <!-- To Render Floating Action Button in MiddleLeft position. -->
        <button ejs-fab id="fab4" iconCss='fab-icons fab-icon-people'position='MiddleLeft'
            target='#target'></button>
        <!-- To Render Floating Action Button in MiddleCenter position. -->
        <button ejs-fab id="fab5" iconCss='fab-icons fab-icon-people' position='MiddleCenter'
            target='#target'></button>
        <!-- To Render Floating Action Button in MiddleRight position. -->
        <button ejs-fab id="fab6" iconCss='fab-icons fab-icon-people' position='MiddleRight'
            target='#target'></button>
        <!-- To Render Floating Action Button in BottomLeft position. -->
        <button ejs-fab id="fab7" iconCss='fab-icons fab-icon-people' position='BottomLeft'
            target='#target'></button>
        <!-- To Render Floating Action Button in BottomCenter position. -->
        <button ejs-fab id="fab8" iconCss='fab-icons fab-icon-people' position='BottomCenter'
            target='#target'></button>
        <!-- To Render Floating Action Button in BottomRight position. -->
        <button ejs-fab id="fab9" iconCss='fab-icons fab-icon-people' position='BottomRight'
            target='#target'></button>`
})

export class AppComponent { }


