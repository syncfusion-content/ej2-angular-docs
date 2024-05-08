import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SidebarModule } from '@syncfusion/ej2-angular-navigations'




import { Component } from '@angular/core';

@Component({
imports: [
        
        SidebarModule
    ],


standalone: true,
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <ejs-sidebar id="default-sidebar" #sidebar [width]="width" [mediaQuery]= "mediaQuery" [closeOnDocumentClick]='colseOnDocumentClick'>
                    <div class="title"> Sidebar content</div>
                </ejs-sidebar>
                <div>
                    <div class="title">Main content</div>
                    <div class="sub-title">
                        Sidebar will collapse and expand in based on screen resolution automatically
                    </div>
                </div>`
})
export class AppComponent {
    public width: string = '280px';
    public mediaQuery: object = window.matchMedia('(min-width: 600px)');
colseOnDocumentClick: any;
}



