


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<div class="dual-list-wrapper">
               <div class="dual-list-groupa">
               <h4>Group A</h4>
               <ejs-listbox [dataSource]="groupA" [fields]="setfield" height="330px" [toolbarSettings]="toolbar" scope="#listbox"></ejs-listbox>
               </div>
               <div class="dual-list-groupb">
               <h4>Group B</h4>
               <ejs-listbox [dataSource]="groupB" [fields]="setfield" height="330px" id="listbox"></ejs-listbox>
               </div></div>`,
   
})

export class AppComponent {
    public groupA: { [key: string]: Object }[] = [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Hong Kong", "Code": "HK" }
];

public groupB: { [key: string]: Object }[] = [
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" }
];
public setfield = { text: "Name" }
public toolbar = { items: ['moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom'] }
}



