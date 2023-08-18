

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <e-items>
          <e-item prefixIcon="fa fa-twitter"></e-item>
          <e-item prefixIcon="fa fa-facebook"></e-item>
          <e-item prefixIcon="fa fa-whatsapp"></e-item>
          <e-item
          template='<button class="e-btn e-tbar-btn"><span><i style="font-size: 3em !important; color: Tomato" class="e-icons fa fa-twitter"></i></span></button>'></e-item>
          </e-items>
       </ejs-toolbar>`
})

export class AppComponent {

}



