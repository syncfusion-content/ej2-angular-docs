


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <ejs-sidebar id="default" #leftSidebar [width]='width' [type]='type' [closeOnDocumentClick]='closeOnDocumentClick'>
                        <div class="title"> Left Sidebar content</div>
                    </ejs-sidebar>

                    <ejs-sidebar id="default1" #rightSidebar [width]='width' [position]='position'
                        [type]='type' [closeOnDocumentClick]='closeOnDocumentClick'>
                        <div class="title">Right Sidebar content</div>
                    </ejs-sidebar>
                    <div class="e-main-content" style="font-size: 16px; padding: 100px 0; transform: translateX(0px); margin-left: 100px; margin-right: 100px;"> 
                        <p>Place your main content here.....</p>
                        <div id="button-align">
                            <button ejs-button id="toggle" class="e-btn e-info" (click)="leftToggle()">Toggle Sidebar 1</button>
                        </div>
                        <div id="button-align">
                            <button ejs-button id="toggle2" class="e-btn e-info" (click)="rightToggle()">Toggle Sidebar 2</button>
                        </div>
                    </div>`
})
export class AppComponent {
    @ViewChild('leftSidebar') leftsidebar?: SidebarComponent;
    @ViewChild('rightSidebar') rightsidebar?: SidebarComponent;

    public width:string='250px';
    public position:string='Right';
    public type:string='Push';
closeOnDocumentClick: any;

    leftToggle() {
        this.leftsidebar?.toggle();
    }
    rightToggle() {
        this.rightsidebar?.toggle();
    }
}




