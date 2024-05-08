import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, ViewEncapsulation } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';

@Component({
imports: [
        
        TooltipModule,ButtonModule
    ],


standalone: true,
    selector: 'my-app',
    template: `
       <div id="tooltipContent">
            <div class="content">
            <ejs-tooltip cssClass='e-tooltip-css' position='BottomCenter' opensOn='Click'>
                <!-- iframe element -->
                 <ng-template #content>
                 <iframe src="https://www.syncfusion.com/products/essential-js2"></iframe>
                </ng-template>
                <button ejs-button class="text" id="iframeContent" cssClass='e-outline' isPrimary=true>Embedded Iframe</button>
            </ejs-tooltip>
            </div>
        </div>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
}



