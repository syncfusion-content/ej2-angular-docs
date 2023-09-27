


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <ejs-sidebar #dockBar id="dockSidebar" [enableDock]='enableDock' [width]='width' [dockSize]='dockSize'>
                    <div class="dock">
                        <ul>
                            <li class="sidebar-item" id="toggle" (click)="toggleClick()">
                                <span class="e-icons expand"></span>
                                <span class="e-text" title="menu">Menu</span>
                            </li>
                            <li class="sidebar-item">
                                <span class="e-icons home"></span>
                                <span class="e-text" title="home">Home</span>
                            </li>
                            <li class="sidebar-item">
                                <span class="e-icons profile"></span>
                                <span class="e-text" title="profile">Profile</span>
                            </li>
                            <li class="sidebar-item">
                                <span class="e-icons info"></span>
                                <span class="e-text" title="info">Info</span>
                            </li>
                            <li class="sidebar-item">
                                <span class="e-icons settings"></span>
                                <span class="e-text" title="settings">Settings</span>
                            </li>
                        </ul>
                    </div>
                </ejs-sidebar>
                <div id="main-content container-fluid col-md-12 ">
                    <div class="title">Main content</div>
                    <div class="sub-title"> Click the expand icon to open and collapse icons to close the Sidebar.</div>
                </div>
                <div>
                </div>`
})
export class AppComponent {
    @ViewChild('dockBar') dockBar?: SidebarComponent;
    public enableDock: boolean = true;
    public width: string = '220px';
    public dockSize: string = '72px';
    toggleClick() {
        this.dockBar?.toggle();
    }
}



