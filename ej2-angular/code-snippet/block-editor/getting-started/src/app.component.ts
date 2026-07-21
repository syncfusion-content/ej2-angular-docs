import { Component } from '@angular/core';

import { BlockEditorModule } from "@syncfusion/ej2-angular-blockeditor"
import './App.css';
@Component({
    imports: [BlockEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<!-- To Render BlockEditor component. -->
    <div id="container" >
        <ejs-blockeditor />
    </div>`
})


export class App {
}