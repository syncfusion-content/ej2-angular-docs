

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render splitbutton. -->
    <div id='dropdowntarget'>
          <div id= "first">
              <div id='black'></div>
              <div id='red'></div>
              <div id='green'></div>
              <div id='gray'></div>
              <div id='blue'></div>
              <div id='violet'></div>
              <div id='brown'></div>
              <div id='darkgoldenrod'></div>
              <div id='aquamarine'></div>
        </div>
    </div>
<ejs-splitbutton iconCss ="e-sb-icons e-color" target="#dropdowntarget"></ejs-splitbutton>`
})

export class AppComponent {
}



