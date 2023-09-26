


import { Component } from '@angular/core';
import { createButtonGroup } from '@syncfusion/ej2-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <h5>Normal behavior</h5>
               <div id='basic'>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <h5>Checkbox type behavior</h5>
                <div id='checkbox'>
                    <input type="checkbox" id="checkbold" name="font" value="bold" />
                    <input type="checkbox" id="checkitalic" name="font" value="italic" />
                    <input type="checkbox" id="checkundeline" name="font" value="underline" />
                </div>
                <h5>Radiobutton type behavior</h5>
                <div id='radio'>
                    <input type="radio" id="radioleft" name="align" value="left" />
                    <input type="radio" id="radiomiddle" name="align" value="middle" />
                    <input type="radio" id="radioright" name="align" value="right" />
                </div>`
})

export class AppComponent {

ngOnInit() {
createButtonGroup('#basic', {
    buttons: [
        { content: 'HTML' },
        { content: 'CSS' },
        { content: 'Javascript'}
    ]
});

createButtonGroup('#checkbox', {
    buttons: [
        { content: 'Bold' },
        { content: 'Italic' },
        { content: 'Undeline'}
    ]
});

createButtonGroup('#radio', {
    buttons: [
        { content: 'Left' },
        { content: 'Center' },
        { content: 'Right'}
    ]
});
}
}



