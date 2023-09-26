


import { Component, ViewChild } from '@angular/core';
import { Ajax } from '@syncfusion/ej2-base';

@Component({
    selector: 'my-app',
    template: `
          <ejs-listview id='List' [dataSource]='data' showHeader='true' headerTitle='Settings' [template]="listtemplate">
        </ejs-listview>
        `
})

export class AppComponent {
  public listtemplate?: any;
  public data =  [
    { name: 'Network & Internet', id: '0', description: 'Wi-Fi, mobile, data usage, hotspot' },
    { name: 'Connected devices', id: '1', description: 'Bluetooth, cast, NFC' },
    { name: 'Battery', id: '2', description: '18% -4h 12m left' },
    { name: 'Display', id: '3', description: 'Wallpaper, sleep, font size' },
    { name: 'Sound', id: '4', description: 'Volume, vibration, Do Not Disturb' },
    { name: 'Storage', id: '5', description: '52% used - 15.48 GB free' }
    ];
    ngOnInit(){
        let ajax = new Ajax('./template.html', 'GET', false);
        ajax.onSuccess = (e: any)=>{
          this.listtemplate = e;
        };
        ajax.send();
    }
}



