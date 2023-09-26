

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <input type="checkbox" id="checkbold" name="font" value="bold" checked/>
                    <label class="e-btn" for="checkbold">Bold</label>
                    <input type="checkbox" id="checkitalic" name="font" value="italic" />
                    <label class="e-btn" for="checkitalic">Italic</label>
                    <input type="checkbox" id="checkline" name="font" value="underline"/>
                    <label class="e-btn" for="checkline">Underline</label>
                </div>`
})

export class AppComponent { }


