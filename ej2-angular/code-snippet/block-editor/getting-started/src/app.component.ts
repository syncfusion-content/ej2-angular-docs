import { Component, ViewChild } from '@angular/core';

import { BlockEditorModule, BlockModel, BlockType, ContentType } from "@syncfusion/ej2-angular-blockeditor"

@Component({
    imports: [
        BlockEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div class="container" style="width: 40px; margin: 50px auto;">
        <div ejs-blockeditor ></div>
    </div>`
})


export class AppComponent {
}
