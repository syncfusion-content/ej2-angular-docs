

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
                </div>
                <!-- To Render Floating Action Button -->
                <button ejs-fab id='fab' iconCss= 'e-icons e-edit' content='<span class="text-container"><span class="textEle">Edit</span></span>' cssClass= 'fab-hover' target='#targetElement'></button>`
})

export class AppComponent { }


