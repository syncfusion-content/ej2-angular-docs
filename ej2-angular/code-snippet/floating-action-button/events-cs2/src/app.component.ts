

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;">
               </div>
               <!-- To Render Floating Action Button. -->
                <button ejs-fab id='fab' iconCss= 'e-icons e-edit' content= 'Edit' (click) ="onclick()" target= '#targetElement'></button>`
})

export class AppComponent {

    onclick() {
        alert("Edit is clicked!");
  };
 }


