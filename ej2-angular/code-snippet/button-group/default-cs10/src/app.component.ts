

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <input type="checkbox" id="check_bold" name="align" value="bold"/>
                    <label class="e-btn" for="check_bold">Bold</label>
                    <input type="checkbox" id="check_italic" name="align" value="italic"/>
                    <label class="e-btn" for="check_italic">Italic</label>
                    <input type="checkbox" id="check_underline" name="align" value="underline"/>
                    <label class="e-btn" for="check_underline">Underline</label>
                </div>`
})

export class AppComponent { }


