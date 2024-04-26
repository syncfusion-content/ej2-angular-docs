import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'
import { TooltipModule } from '@syncfusion/ej2-angular-popups'



import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
         ToolbarModule, TooltipModule
    ],


standalone: true,
    selector: 'app-container',
    template: `
         <button id='Template' class='e-btn'>Template</button>
        <ejs-toolbar>
          <e-items>
             <e-item text='Cut'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Paste' prefixIcon = 'e-paste-icon'></e-item>
             <e-item type='Separator'></e-item>
             <e-item [template]='templateEle'></e-item>
             <e-item text='Undo'></e-item>
             <e-item text='Redo'></e-item>
             <e-item [template]='templateEleId'></e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {
    @ViewChild('element') element?: any;
    public templateEle: any = "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>";
    public templateEleId: any = '#Template';
    ngAfterViewInit() {
    }
}



