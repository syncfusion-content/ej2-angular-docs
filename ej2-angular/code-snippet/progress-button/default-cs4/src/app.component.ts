

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render progress button. -->
               <button ejs-progressbutton  [content]='content' [cssClass]='cssClass' [enableProgress]='true' [duration]='4000' (begin)='begin()' (end)='end()'></button>`
})

export class AppComponent {
    public content: string = 'Upload';
    public cssClass: string = 'e-hide-spinner';

    public begin(): void {
        this.content = 'Uploading...';
        this.cssClass = 'e-hide-spinner e-info';
    }
    public end(): void {
        this.content = 'Success';
        this.cssClass = 'e-hide-spinner e-success';
        setTimeout(() => {
            this.content = 'Upload';
            this.cssClass = 'e-hide-spinner';
        }, 500)
    }
}


