

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./default-style.css'],
    template: `
    <div class="control-section">
        <ejs-dashboardlayout id='defaultLayout' #defaultLayout [columns]='5' [cellSpacing]='cellSpacing' [panels]='panels' [allowResizing]='allowResizing' [resizableHandles]='resizableHandles'
        (resizeStart)="onResizeStart($this)" (resize)="onResize($this)" (resizeStop)="onResizeStop($this)">
        </ejs-dashboardlayout>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public cellSpacing: number[] = [10, 10];
    public columns: number = 5;
    public allowResizing: boolean = true;
    public resizableHandles: string[] = ['e-south-east','e-east','e-west','e-north','e-south'];
    public panels: any = [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
    ];
    public $this: any = this;
    //Dashboard Layout's resizestart event function
    onResizeStart(args: any) {
        console.log("Resize start");
    }

    //Dashboard Layout's resize event function
    onResize(args: any) {
        console.log("Resizing");
    }

    //Dashboard Layout's resizestop event function
    onResizeStop(args: any) {
        console.log("Resize stop");
    }

}


