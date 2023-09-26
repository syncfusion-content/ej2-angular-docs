


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<table class='size'>
                <tr>
                    <td class='lSize'>Checked</td>
                    <td>
                        <ejs-switch [checked]="true"></ejs-switch>
                    </td>
                </tr>
                <tr>
                    <td class='lSize'>Unchecked</td>
                    <td>
                        <ejs-switch></ejs-switch>
                    </td>
                </tr>
                </table>`
})

export class AppComponent { }



