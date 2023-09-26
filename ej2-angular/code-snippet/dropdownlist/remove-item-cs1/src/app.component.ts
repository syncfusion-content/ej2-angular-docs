

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'control-content',
    // specifies the template path for DropDownList component
    templateUrl: `remove.html`
})
export class AppComponent {
    constructor() {
    }
    ngAfterViewInit(){
        document.getElementById('btn')!.onclick = () => {
            // create DropDownList object
            let obj: any = document.getElementById('ddlelement');
            if (obj.ej2_instances[0].list) {
                // Remove the selected value if 0th index selected
                if (((this.dropDownListObject as any) as any).index === 0) {
                    ((this.dropDownListObject as any) as any).value = null;
                    ((this.dropDownListObject as any) as any).dataBind();
                }
                // remove first item in list
                (obj.ej2_instances[0].list.querySelectorAll('li')[0]).remove();
                if (!obj.ej2_instances[0].list.querySelectorAll('li')[0]) {
                    (this.dropDownListObject as any).dataSource = [];
                    // enable the nodata template when no data source is empty.
                    obj.ej2_instances[0].list.classList.add('e-nodata');
                }
            } else {
                // remove first item in list
                (this.dropDownListObject as any).dataSource.splice(0, 1);
            }
        }
    }
    // defined the array of data
    public data: { [key: string]: Object }[] = [ { Id: 'game1', Game: 'Badminton' },
                 { Id: 'game2', Game: 'Football' }, { Id: 'game3', Game: 'Tennis' }];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Game', value: 'Id' };
    //set the placeholder to DropDownList input
    public text: string = "Select a game";
    @ViewChild('ddlelement')
    public dropDownListObject = DropDownListComponent;

}


