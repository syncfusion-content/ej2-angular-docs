

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
            <h5>Normal behavior</h5>
            <div class='e-btn-group' role='group'>
                <button class="e-btn">HTML</button>
                <button class="e-btn">CSS</button>
                <button class="e-btn">Javascript</button>
            </div>
            <h5>Checkbox type behavior</h5>
            <div class='e-btn-group' role='group'>
                <input type="checkbox" id="check_bold" name="font" value="bold"/>
                <label class="e-btn" for="check_bold">Bold</label>
                <input type="checkbox" id="check_italic" name="font" value="italic"/>
                <label class="e-btn" for="check_italic">Italic</label>
                <input type="checkbox" id="check_underline" name="font" value="underline"/>
                <label class="e-btn" for="check_underline">Underline</label>
            </div>
            <h5>Radiobutton type behavior</h5>
            <div class='e-btn-group' role='group'>
                <input type="radio" id="radioleft" name="align" value="left"/>
                <label class="e-btn" for="radioleft">Left</label>
                <input type="radio" id="radiomiddle" name="align" value="middle"/>
                <label class="e-btn" for="radiomiddle">Center</label>
                <input type="radio" id="radioright" name="align" value="right"/>
                <label class="e-btn" for="radioright">Right</label>
            </div>`
})

export class AppComponent { }


