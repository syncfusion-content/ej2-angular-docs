


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<form><table class='size'>
                <tr>
                    <td class='lSize'>USB</td>
                    <td>
                        <ejs-switch name= "Tethering" value= "USB" [checked]="true" ></ejs-switch>
                    </td>
                </tr>
                <tr>
                    <td class='lSize'>Wi-Fi</td>
                    <td>
                        <ejs-switch name= "Hotspot" value= "Wi-Fi" [checked]="true" ></ejs-switch>
                    </td>
                </tr>
                <tr>
                    <td class='lSize'>Bluetooth</td>
                    <td>
                        <ejs-switch name= "Tethering" value= "Bluetooth" [disabled]="true" ></ejs-switch>
                    </td>
                </tr>
               <tr>
                    <td>
                        <button ejs-button [isPrimary]="true">Submit</button>
                    </td>
                </tr>
                </table></form>`
})

export class AppComponent { }



