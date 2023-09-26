

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./default-style.css'],
    template: `
    <div class="control-section">
        <ejs-dashboardlayout id='defaultLayout' #defaultLayout [columns]='columns' [cellSpacing]='cellSpacing' [panels]='panels' 
        [enableRtl]='enableRtl'>
        </ejs-dashboardlayout>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public cellSpacing: number[] = [10, 10];
    public columns: number = 5;
    public enableRtl: boolean = true;
    public panels: any = [
    {'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, header: '<div>Panel 0</div>', content:'<div class="content"></div>'},
    {'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, header: '<div>Panel 1</div>', content:'<div class="content"></div>'},
    {'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, header: '<div>Panel 2</div>', content:'<div class="content"></div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, header: '<div>Panel 3</div>', content:'<div class="content"></div>'},
    {'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, header: '<div>Panel 4</div>', content:'<div class="content"></div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, header: '<div>Panel 5</div>', content:'<div class="content"></div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, header: '<div>Panel 6</div>', content:'<div class="content"></div>'}
    ];

}


