


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";
@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <ejs-sidebar id="default-sidebar" #sidebar [type]='type' [target]='target' (created)="onCreated($event)" style="visibility: hidden">
                    <div class="title"> Sidebar content</div>
                    <div class="sub-title">
                        Click the button to close the Sidebar.
                    </div>
                    <div class="center-align">
                        <button ejs-button id="close" (click)="closeClick()" class="e-btn close-btn">Close Sidebar</button>
                    </div>
                </ejs-sidebar>
                <div id="head">
                    <button ejs-button id="toggle" #togglebtn cssClass="e-flat" iconCss="e-icons burg-icon" isToggle="true"
                        (click)="btnClick()" content="Open"></button>
                </div>
                <div id="maincontent" class="content">
                    <div>
                        <div class="title">Main content</div>
                        <div class="center-align">
                            content goes here.
                        </div>
                    </div>
                </div>`
})
export class AppComponent {
    @ViewChild('sidebar') sidebar?: SidebarComponent;
    public type: string = 'Push';
    public target: string = '.content';
    @ViewChild('togglebtn')
    public togglebtn?: ButtonComponent;
    public onCreated(args: any) {
        (this.sidebar as SidebarComponent).element.style.visibility = '';
    }
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
}



