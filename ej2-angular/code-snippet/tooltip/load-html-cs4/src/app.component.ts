import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    imports: [
        TooltipModule, ButtonModule
    ],
    standalone: true,
    selector: 'my-app',
    template: `
    <ejs-tooltip style="display:block;position:absolute;left:calc( 50% - 60px);top:45%;">
            <button ejs-button >Show Tooltip</button>
            <ng-template #content >
              Tooltip content here!!!
            </ng-template>
        </ejs-tooltip>
    `,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}


