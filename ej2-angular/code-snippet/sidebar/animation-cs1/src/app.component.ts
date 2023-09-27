


import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: ` <ejs-sidebar id="sidebar-element" class="sidebar" #sidebar  [showBackdrop]="showBackdrop" [closeOnDocumentClick]="closeOnDocumentClick" (created)="onCreated($event)" style="visibility: hidden">
                    <div class="title"> Sidebar content</div>
                    <div class="sub-title">
                        * Sidebar is rendered with animation effect
                    </div>
                    <div class="center-align">
                        <button ejs-button id="close_btn" (click)="closeClick_btn()" class="e-btn close-btn">Close Sidebar</button>
                    </div>
                </ejs-sidebar>
                <div>
                    <div class="title">Sidebar Transitions</div>
                    <div class="sub-title"> * Click the below button to render the Sidebar with animation effect.</div>
                    <div style="padding:20px" class="center-align">
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="zoom()">Zoom Sidebar</button>
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="open_door()">Open Door</button>
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="bottom_top()">Bottom to Top</button>
                    </div>
                    <div style="padding:20px" class="center-align">
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="rotate()">Rotate Sidebar</button>
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="rotate_3d()">Rotate 3D</button>
                        <button ejs-button id="toggle" class="e-btn e-info" (click)="reverse()">Reverse Slide Out</button>
                    </div>
                </div>`
})
export class AppComponent {
  @ViewChild('sidebar') sidebar?: SidebarComponent;
  public showBackdrop: boolean = true;
  public closeOnDocumentClick: boolean = true;

  public onCreated(args: any) {
         (this.sidebar as SidebarComponent).element.style.visibility = '';
    }
  // Close Button
  closeClick_btn(): void {
    (this.sidebar as SidebarComponent).element.classList.remove("sidebar");
    (this.sidebar as SidebarComponent).element.classList.remove("rotate");
    (this.sidebar as SidebarComponent).element.classList.remove("w3-animate-zoom");
    (this.sidebar as SidebarComponent).element.classList.remove("w3-animate-bottom");
    (this.sidebar as SidebarComponent).element.classList.remove("rotate_3d");
    (this.sidebar as SidebarComponent).element.classList.remove("reverse_slide_out");
    this.sidebar?.hide();
  };
  // Zoom Effect
  zoom():void{
    this.sidebar?.show();
    (this.sidebar as SidebarComponent).element.classList.add("w3-animate-zoom");
  };
  // Open Door
  open_door():void{
    this.sidebar?.show();
    let sidebar_element: Element =document.getElementsByClassName("e-sidebar-overlay")[0];
    sidebar_element.classList.add("move");
    (document.getElementsByClassName("move")[0] as any).style.transform ="rotateX(-20deg)";
  };
  // Bottom To Top
  bottom_top():void{
    this.sidebar?.show();
    (this.sidebar as SidebarComponent).element.classList.add("w3-animate-bottom");
  };
  // Rotate
  rotate():void{
    this.sidebar?.show();
    (this.sidebar as SidebarComponent).element.classList.add("rotate");
  };
  // Rotate 3D
  rotate_3d():void{
    this.sidebar?.show();
    (this.sidebar as SidebarComponent).element.classList.add("rotate_3d");
  };
  // Reverse Slide Out
  reverse():void{
    this.sidebar?.show();
    (this.sidebar as SidebarComponent).element.classList.add("reverse_slide_out");
  };
}




