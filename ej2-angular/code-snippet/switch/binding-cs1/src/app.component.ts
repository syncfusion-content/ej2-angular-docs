


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <div id='container'>
                    <table class='tablealign'>
                        <thead>
                            <th></th>
                            <th>
                                <h4>Switch</h4>
                            </th>
                            <th>
                                <h4>Checkbox</h4>
                            </th>
                        </thead>
                        <tr>
                            <td class='dataalign'>
                                <label>Wi-Fi</label>
                            </td>
                            <td class='dataalign'>
                                <ejs-switch #wswitch [(ngModel)]="checkedwifi">
                                </ejs-switch>
                            </td>
                            <td class='dataalign'>
                                <ejs-checkbox #wcheckbox [(checked)]="checkedwifi">
                                </ejs-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <td class='dataalign'>
                                <label>Bluetooth</label>
                            </td>
                            <td class='dataalign'>
                                <ejs-switch #bswitch [(ngModel)]="checkedbluetooth">
                                </ejs-switch>
                            </td>
                            <td class='dataalign'>
                                <ejs-checkbox #bcheckbox  [(checked)]="checkedbluetooth">
                                </ejs-checkbox>
                            </td>
                        </tr>
                    </table>
               </div>
               </div>`
})

export class AppComponent {
    public checkedwifi: boolean = true;
    public checkedbluetooth: boolean = false;
}



