


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id='container'>
                    <table class='tablealign'>
                        <thead>
                            <th></th>
                            <th>
                                <h4>Checkbox</h4>
                            </th>
                            <th>
                                <h4>Switch</h4>
                            </th>
                        </thead>
                        <tr>
                            <td class='dataalign'>
                                <label>Wi-Fi</label>
                            </td>
                            <td class='dataalign'>
                                <ejs-checkbox #wcheckbox [(ngModel)]="checkedwifi">
                                </ejs-checkbox>
                            </td>
                            <td class='dataalign'>
                                <ejs-switch #wswitch [(checked)]="checkedwifi">
                                </ejs-switch>
                            </td>
                        </tr>
                        <tr>
                            <td class='dataalign'>
                                <label>Bluetooth</label>
                            </td>
                            <td class='dataalign'>
                                <ejs-checkbox #bcheckbox  [(ngModel)]="checkedbluetooth">
                                </ejs-checkbox>
                            </td>
                            <td class='dataalign'>
                                <ejs-switch #bswitch [(checked)]="checkedbluetooth">
                                </ejs-switch>
                            </td>
                        </tr>
                    </table>
               </div>`
})

export class AppComponent {
    public checkedwifi: boolean = true;
    public checkedbluetooth: boolean = false;
}



