


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `  <ejs-sidebar id="top-sidebar" #topSidebar [type]="type" (open)="top_sidebar_open()" (close)="top_sidebar_close()">
                        <div class="title">
                            <div style="display:inline-block"> Top Sidebar </div>
                        </div>
                        <div class="content">
                            Place your top sidebar primary content here.
                        </div>
                    </ejs-sidebar>
                    <ejs-sidebar id="bottom-sidebar" #bottomSidebar [type]="type" (open)="bottom_sidebar_open()" (close)="bottom_sidebar_close()">
                        <div class="title">
                            <div style="display:inline-block"> Bottom Sidebar </div>
                        </div>
                        <div class="content">
                            Place your bottom sidebar primary content here.
                        </div>
                    </ejs-sidebar>
                    <div class="e-main-content">
                    <div class="sub-content">
                        <p>Place your main content here.....</p>
                        <div id="button-align">
                            <button ejs-button id="top-btn" class="toggle e-btn e-info" (click)="topBtnClick()">Toggle Top Sidebar</button>
                        </div>
                        <div id="button-align">
                            <button ejs-button id="bottom-btn" class="toggle e-btn e-info" (click)="bottomBtnClick()">Toggle Bottom Sidebar</button>
                        </div>
                    </div>
                    </div>`
})
export class AppComponent {
    @ViewChild('topSidebar', { static: true }) topSidebar?: SidebarComponent;
    @ViewChild('bottomSidebar', { static: true }) bottomSidebar?: SidebarComponent;

    public type: string = 'Push';
    // only for sample browser use
    constructor( ) {

    }
    topBtnClick() {
        this.topSidebar?.toggle();
    }
    bottomBtnClick() {
        this.bottomSidebar?.toggle();
    }
    top_sidebar_open() {
        let element: Element = document.getElementsByClassName("e-content-animation")[0];
        (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight - 75) + "px";
        element.classList.add("top_content_animation");
        // Remove the e-left class in sidebar
        (this.topSidebar as SidebarComponent).element.classList.remove("e-left");
        // Add the custom class to sidebar
        (this.topSidebar as SidebarComponent).element.classList.add("top_sidebar");
    }
    top_sidebar_close() {
        let element: Element = document.getElementsByClassName("e-content-animation")[0];
        (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight + 75) + "px";
        element.classList.remove("top_content_animation");
    }

    bottom_sidebar_open() {
        let element: Element = document.getElementsByClassName("e-content-animation")[0];
        (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight - 75) + "px";
        element.classList.add("bottom_animation_content");
        // Remove the e-left class in sidebar
        (this.bottomSidebar as SidebarComponent).element.classList.remove("e-left");
        // Add the custom class to sidebar
        (this.bottomSidebar as SidebarComponent).element.classList.add("bottom_sidebar");
    }

    bottom_sidebar_close() {
        let element: Element = document.getElementsByClassName("e-content-animation")[0];
        (<HTMLElement>element).style.height = ((<HTMLElement>element).offsetHeight + 75) + "px";
        element.classList.remove("bottom_animation_content");
    }
}



