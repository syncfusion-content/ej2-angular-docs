

import { Component } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';

@Component({
    selector: 'app-root',
    template: `
       <div id='container'>
    <h4>Example of data-underline attribute</h4>
    <table class="table-section">
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Intractable UI </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="default" mode="Inline" value="Andrew" [model]="model"></ejs-inplaceeditor>
            </td>
        </tr>
        <tr>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Normal UI </td>
            <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ejs-inplaceeditor id="inline" data-underline="false" mode="Inline" value="Andrew" [model]="model"></ejs-inplaceeditor>
            </td>
        </tr>
    </table>
</div>
    `
})

export class AppComponent {
  public model: Object = {  placeholder: 'Enter some text' };
}


