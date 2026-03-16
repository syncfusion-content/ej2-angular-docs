import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';

@Component({
    imports: [RadioButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
        <ul>
            <!-- checked state. -->
            <li><ejs-radiobutton label="Option 1" name="state" checked="true"></ejs-radiobutton></li>

            <!-- unchecked state. -->
            <li><ejs-radiobutton label="Option 2" name="state"></ejs-radiobutton></li>
        </ul>
    </div>`
})

export class AppComponent { }
