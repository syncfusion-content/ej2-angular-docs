import { Component } from '@angular/core';

import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor"

@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div id="container" >
        <div ejs-blockeditor ></div>
    </div>`
})


export class AppComponent {
}
