


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<table class='size'>
                <tr>
                    <td class='lSize'>Small</td>
                    <td>
                        <ejs-switch cssClass="e-small"></ejs-switch>
                    </td>
                </tr>
                <tr>
                    <td class='lSize'>Default</td>
                    <td>
                        <ejs-switch></ejs-switch>
                    </td>
                </tr>
               </table>`
})

export class AppComponent { }



