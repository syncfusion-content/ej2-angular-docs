


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <ejs-sidebar id="default-sidebar" #sidebar [width]="width">
                        <div class="title1">Menu</div>
                            <div class="closebtn">
                                <button  ejs-button id="close" class="e-btn close-btn" (click)="closeClick()">
                                    <span id="innerclose" class="e-icons close-icon"></span>
                                </button>
                            </div>
                            <div id="listcontainer">
                            <ejs-listview id='list' [dataSource]='data'></ejs-listview>
                            </div>
                                <div class="sub-title">
                                        ListView component is rendered in the sidebar container.
                                    </div>
                    </ejs-sidebar>
                    <div>
                        <div>
                            <div class="title2">Main content</div>
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
    public width: string = '100%';
    public type: string = 'Over';
    public data: Object[] = [
        { text: 'Home', id: 'list-02' },
        { text: 'Offers', id: 'list-03' },
        { text: 'Support', id: 'list-04' },
        { text: 'Logout', id: 'list-06' }
    ];

    toggleClick() {
        this.sidebar?.toggle();
    }
    closeClick() {
        this.sidebar?.hide();
    }
}



