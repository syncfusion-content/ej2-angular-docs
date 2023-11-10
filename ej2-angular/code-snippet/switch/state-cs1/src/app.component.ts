


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <table class='size'>
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
                </table>
                </div>`
})

export class AppComponent { }



