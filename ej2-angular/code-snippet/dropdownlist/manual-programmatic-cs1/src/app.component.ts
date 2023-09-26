

import { Component , ViewChild} from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    // specifies the template path for DropDownList component
    templateUrl: `template.html`
})
export class AppComponent {
    constructor() {
    }
    ngAfterViewInit(){
        document.getElementById('btn')!.onclick = () => {
            this.dropDownListObject!.value = 'game3';
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
    public dropDownListObject?: DropDownListComponent;
    onChange(args: any): void {
        let element: HTMLElement = document.createElement('p');
        if (args.isInteracted) {
            element.innerText = 'Changes happened by Interaction';
        } else {
            element.innerText = 'Changes happened by programmatic';
        }
        document.getElementById('event')!.append(element);
    }
}


