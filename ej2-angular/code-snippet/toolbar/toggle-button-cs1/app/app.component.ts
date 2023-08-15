


import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { Button, ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DefaultToolbarComponent {
    @ViewChild('playButton') public mediaBtn!: ButtonComponent;
    @ViewChild('zoom') public zoomBtn!: ButtonComponent;
    @ViewChild('undo') public undoBtn!: ButtonComponent;
    @ViewChild('filter') public filterBtn!: ButtonComponent;
    @ViewChild('hide') public visibleBtn!: ButtonComponent;
    
    public content: string = 'Hide';
    public mediaBtnClick() { 
        if (this.mediaBtn.element.classList.contains('e-active')) {
            this.mediaBtn.iconCss = 'e-icons e-play-icon';
        } else {
            this.mediaBtn.iconCss = 'e-icons e-pause-icon';
        }
    }

    public zoomBtnClick() { 
        if (this.zoomBtn.element.classList.contains('e-active')) {
            this.zoomBtn.iconCss = 'e-icons e-zoomin-icon';
        } else {
            this.zoomBtn.iconCss = 'e-icons e-zoomout-icon';
        }
    }

    public undoBtnClick() { 
        if (this.undoBtn.element.classList.contains('e-active')) {
            this.undoBtn.iconCss = 'e-icons e-undo-icon';
        } else {
            this.undoBtn.iconCss = 'e-icons e-redo-icon';
        }
    }

    public filterBtnClick() { 
        if (this.filterBtn.element.classList.contains('e-active')) {
            this.filterBtn.iconCss = 'e-icons e-filter-icon';
        } else {
            this.filterBtn.iconCss = 'e-icons e-filternone-icon';
        }
    }

    public hideBtnClick() { 
        if (this.visibleBtn.element.classList.contains('e-active')) {
            (document.getElementById('content') as HTMLElement).style.display = 'block';
            this.visibleBtn.iconCss = 'e-icons e-hide-icon';
            this.content = 'Hide';
        } else {
            (document.getElementById('content') as HTMLElement).style.display = 'none';
            this.visibleBtn.iconCss = 'e-icons e-show-icon';
            this.content = 'Show';
        }
    }
}



