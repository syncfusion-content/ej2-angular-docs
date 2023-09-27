


import { Component, ViewChild  } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, RadioButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <ejs-sidebar id="default-sidebar" #sidebar [type]='type' [target]='target' (created)="onCreated($event)" style="visibility: hidden">
                        <div class="title"> Sidebar content</div>
                        <div class="sub-title">
                            Click the button to close the Sidebar.
                        </div>
                        <div class="center-align">
                            <button ejs-button id="close" (click)="closeClick()" class="e-btn close-btn">Close Sidebar</button>
                        </div>
                    </ejs-sidebar>
                    <div>
                    <div id="head">
                        <button ejs-button id="toggle" #togglebtn cssClass="e-flat" iconCss="e-icons burg-icon" isToggle="true" (click)="btnClick()" content="Open"></button>
                    </div>
                    <div id="maincontent" class="content">
                        <div>
                            <div class="title">Main content</div>
                            <div class="rows">
                                <div class="row">
                                    <ejs-radiobutton id='push' #radio label="Push" name="type" checked="true" (change)="changeHandler($event)"></ejs-radiobutton>
                                </div>
                                <div class="row">
                                    <ejs-radiobutton id='slide' #radio label="Slide" name="type" (change)="changeHandler($event)"></ejs-radiobutton>
                                </div>
                                <div class="row">
                                    <ejs-radiobutton id='over' #radio label="Over" name="type"  (change)="changeHandler($event)"></ejs-radiobutton>
                                </div>
                                <div class="row">
                                    <ejs-radiobutton id='auto' #radio label="Auto" name="type" (change)="changeHandler($event)"></ejs-radiobutton>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>`
})
export class AppComponent {
    onCreated($event: any) {
    }
    @ViewChild('sidebar') sidebar?: SidebarComponent;
    @ViewChild('togglebtn') togglebtn?: ButtonComponent;

    public type: string = 'Push';
    public target: string = '.content';
    btnClick(){
        if((this.togglebtn as ButtonComponent).element.classList.contains('e-active')){
            (this.togglebtn as ButtonComponent).content = 'Open';
            this.sidebar?.hide();
        }
        else{
            (this.togglebtn as ButtonComponent).content = 'Close';
            this.sidebar?.show();
        }
    }
    closeClick() {
        this.sidebar?.hide();
        (this.togglebtn as ButtonComponent).element.classList.remove('e-active');
        (this.togglebtn as ButtonComponent).content = 'Open'
    }
    changeHandler(args: any) : void {
        if(args.event.target.ej2_instances[0].label == 'Over') {
            (this.sidebar as SidebarComponent).type = 'Over';
        } else if (args.event.target.ej2_instances[0].label == 'Push') {
            (this.sidebar as SidebarComponent).type = 'Push';
        } else if (args.event.target.ej2_instances[0].label == 'Slide') {
            (this.sidebar as SidebarComponent).type = 'Slide';
        } else {
            (this.sidebar as SidebarComponent).type = 'Auto';
        }
    }
}


