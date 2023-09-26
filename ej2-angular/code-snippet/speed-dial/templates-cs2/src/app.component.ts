

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
    <!-- To Render SpeedDial component with icon and text -->
    <button ejs-speeddial id="speeddial" content='Edit' openIconCss='e-icons e-edit' target='#targetElement' [popupTemplate]="popupTemplate">
    <ng-template #popupTemplate>
        <div>
            <div class="speeddial-form">
                <p>Here you can customize your code.</p>
            </div>
        </div>
    </ng-template>
    </button>`
})

export class AppComponent { }


