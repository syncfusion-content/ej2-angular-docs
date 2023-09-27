

import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <ejs-sidebar id="default-sidebar" #sidebar (created)="onCreated($event)" style="visibility: hidden">
                    <div class="title"> Sidebar content</div>
                </ejs-sidebar>
                <div>
                    <div class="title">Main content</div>
                    <div class="sub-title">
                        Content goes here.
                    </div>
                </div>`
})
export class AppComponent {
    @ViewChild('sidebar') sidebar?: SidebarComponent;
    public onCreated(args: any) {
        (this.sidebar as SidebarComponent).element.style.visibility = '';
    }
}



