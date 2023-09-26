

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <input type="radio" id="radioleft" name="font" value="left"/>
                    <label class="e-btn" for="radioleft">Left</label>
                    <input type="radio" id="radiomiddle" name="font" value="middle"/>
                    <label class="e-btn" for="radiomiddle">Center</label>
                    <input type="radio" id="radioright" name="font" value="right"/>
                    <label class="e-btn" for="radioright">Right</label>
                </div>`
})

export class AppComponent { }


