

import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, RadioButtonComponent } from "@syncfusion/ej2-angular-buttons";
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <ejs-sidebar id="default-sidebar" #sidebar [type]='type' [enablePersistence]='enablePersistence' (created)="onCreated($event)" style="visibility: hidden" [target]='target'>
                        <div class="title"> Sidebar content</div>
                        <div class="sub-title">
                            Click the button to close the Sidebar.
                        </div>
                        <div class="center-align">
                            <button ej-button id="close" (click)="closeClick()" class="e-btn close-btn">Close Sidebar</button>
                        </div>
                    </ejs-sidebar>
                    <div id="head">
                        <button ejs-button id="toggle" #togglebtn cssClass="e-flat" iconCss="e-icons burg-icon" isToggle="true"
                            (click)="btnClick()" content="Open"></button>
                    </div>
                    <div id="maincontent" class="content">

                        <div>
                            <div class="title">Main content</div>
                            <div class="rows">
                                <div class="row">
                                    <ejs-radiobutton id='left' #radio label="Left" name="position" checked="true"
                                        (change)="changeHandler($event)"></ejs-radiobutton>
                                </div>
                                <div class="row">
                                    <ejs-radiobutton id='right' #radio label="Right" name="position" (change)="changeHandler($event)">
                                    </ejs-radiobutton>
                                </div>
                            </div>
                        </div>
                    </div>`
})
export class AppComponent {
    @ViewChild('sidebar') sidebar?: SidebarComponent;
    public type: string = 'Push';
    public target: string = 'content';
    public enablePersistence: boolean = true;
    @ViewChild('togglebtn')
    public togglebtn?: ButtonComponent;
    public onCreated(args: any) {
        (this.sidebar as SidebarComponent).element.style.visibility = '';
    }
    btnClick() {
        if ((this.togglebtn as ButtonComponent).element.classList.contains('e-active')) {
            (this.togglebtn as ButtonComponent).content = 'Open';
            this.sidebar?.hide();
        } else {
            (this.togglebtn as ButtonComponent).content = 'Close';
            this.sidebar?.show();
        }
    }
    closeClick() {
        this.sidebar?.hide();
        (this.togglebtn as ButtonComponent).element.classList.remove('e-active');
        (this.togglebtn as ButtonComponent).content = 'Open'
    }
    @ViewChild('radio')
    public radiobutton?: RadioButtonComponent;
    public changeHandler(args: any): void {
        (this.sidebar as SidebarComponent).position = (args.event.target.ej2_instances[0].label == "Left") ? "Left" : "Right";
    }
}


