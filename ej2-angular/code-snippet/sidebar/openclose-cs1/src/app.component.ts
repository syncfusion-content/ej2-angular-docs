


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <ejs-sidebar id="default-sidebar" #sidebar (open)="open($event)" (close)="close($event)">
                        <div class="title"> Sidebar content</div>
                        <div class="sub-title">
                            Click the button to close the Sidebar.
                        </div>
                        <div class="center-align">
                            <button ejs-button id="close" (click)="closeClick()" class="e-btn close-btn">Close Sidebar</button>
                        </div>
                    </ejs-sidebar>
                    <div>
                        <div>
                            <div class="title">Main content</div>
                            <div class="sub-title"> Click the button to Open the Sidebar.
                                <div style="padding:20px" class="center-align">
                                    <button ejs-button id="open" class="e-btn e-info" (click)="openClick()">Open Sidebar</button>
                                </div>

                            </div>
                            <div class="sub-title"> Click the button to open/close the Sidebar.
                                <div style="padding:20px" class="center-align">
                                    <button ejs-button id="toggle" class="e-btn e-info" (click)="toggleClick()">Toggle Sidebar</button>
                                </div>

                            </div>
                        </div>
                    </div>`
})
export class AppComponent {
    @ViewChild('sidebar') sidebar?: SidebarComponent;
    public open(args: any) {
       console.log("Sidebar Opened");
    }
    public close(args: any) {
        console.log("Sidebar Closed");
    }
    openClick() {
        this.sidebar?.show();
    }
    toggleClick() {
        this.sidebar?.toggle();
    }
    closeClick() {
        this.sidebar?.hide();
    }
}



