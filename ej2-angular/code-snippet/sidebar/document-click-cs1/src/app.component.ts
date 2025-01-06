import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { SidebarModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [SidebarModule,],
    standalone: true,
    selector: 'app-root',
    template: ` <ejs-sidebar id="default-sidebar" #sidebar (created)="onCreated($event)" style="visibility: hidden" [closeOnDocumentClick]="closeOnDocumentClick" [isOpen]="isOpen">
                    <div class="title"> Sidebar content</div>
                </ejs-sidebar>
                <div>
                    <div class="title">Main content</div>
                    <div class="sub-title"> Click the button to open the Sidebar.</div>
                    <div style="padding:20px" class="center-align">
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="toggleClick()">Open Sidebar</button>
                    </div>
                </div>`
})
export class AppComponent {
    @ViewChild('sidebar') sidebar?: SidebarComponent;
    public isOpen: boolean = true;
    public closeOnDocumentClick: boolean = true;
    public type: string = 'Push';
    public onCreated(args: any) {
        (this.sidebar as SidebarComponent).element.style.visibility = '';
    }

    toggleClick(): void {
        this.sidebar?.show();
    }
}


