


import { Component, ViewChild } from '@angular/core';
import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { ComboBoxComponent } from '@syncfusion/ej2-angular-dropdowns';

enableRipple(true);

@Component({
    selector: 'app-container',
    template: `<ejs-tab id="element">
    <e-tabitems>
        <e-tabitem>
            <ng-template #headerText>

                <div> Tab1 </div>

            </ng-template>
            <ng-template #content>

                <ejs-calendar></ejs-calendar>

            </ng-template>

        </e-tabitem>
        <e-tabitem>
            <ng-template #headerText>

                <div> Tab2 </div>

            </ng-template>
            <ng-template #content>

                <ejs-combobox id='comboelement' #samples [dataSource]='data' [placeholder]='text'></ejs-combobox>

            </ng-template>
        </e-tabitem>
        <e-tabitem>
            <ng-template #headerText>

                <div> Tab3 </div>

            </ng-template>
            <ng-template #content>

                <p>text inside tab3</p>

            </ng-template>

        </e-tabitem>
    </e-tabitems>
</ejs-tab>`
})

export class AppComponent {
    @ViewChild('element') tabInstance?: TabComponent;

    // defined the array of data
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
    // set placeholder text to ComboBox input element
    public text: string = 'Select a game';

}



