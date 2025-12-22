import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AdornmentsDirection, TextAreaComponent, TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  styleUrls: ['.././index.css'],
  template: `
    <div class="col-lg-8 control-section adornment-textarea">
      <div class="content-wrapper">
        <div class="multiline-row">
          <ejs-textarea
            #iconTextarea
            floatLabelType="Auto"
            placeholder="Add a comment"
            cssClass="e-outline"
            [rows]="5"
            [cols]="250"
            resizeMode="None"
            [prependTemplate]="prependTemplate"
            [appendTemplate]="appendTemplate">
            <ng-template #prependTemplate>
              <span class="e-icons e-bold"></span>
              <span class="e-input-separator"></span>
              <span class="e-icons e-italic"></span>
              <span class="e-input-separator"></span>
            </ng-template>
            <ng-template #appendTemplate>
              <span class="e-input-separator"></span>
              <span class="e-icons e-save"></span>
              <span class="e-input-separator"></span>
              <span class="e-icons e-trash"></span>
            </ng-template>
          </ejs-textarea>
        </div>
      </div>
    </div>

    <div class="col-lg-4 property-section adornment-textarea">
      <div class="property-panel-section">
        <div class="property-panel-header">Properties</div>
        <div class="property-panel-content">
          <table id="property" title="Properties" class="multiline-property">
            <tr>
              <td> Flow Direction </td>
              <td>
                <ejs-dropdownlist
                  [dataSource]="flowOrientationData"
                  (change)="handleFlowOrientation($event)"
                  [index]="0"
                  popupHeight="200px">
                </ejs-dropdownlist>
              </td>
            </tr>
            <tr>
              <td> Orientation Direction </td>
              <td>
                <ejs-dropdownlist
                  [dataSource]="orientOrientationData"
                  (change)="handleOrientOrientation($event)"
                  [index]="0"
                  popupHeight="200px">
                </ejs-dropdownlist>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TextAreaModule, DropDownListModule]
})
export class AppComponent {
  // Definite assignment because Angular sets this after view init
  @ViewChild('iconTextarea', { static: false })
  public textareaObj!: TextAreaComponent;

  public flowOrientationData: string[] = ['Horizontal', 'Vertical'];
  public orientOrientationData: string[] = ['Horizontal', 'Vertical'];

  // Update Flow direction and adjust append template
  handleFlowOrientation = (args: any): void => {
    const val = (args?.value as AdornmentsDirection) ?? 'Horizontal';
    this.textareaObj.adornmentFlow = val;

    // Update the append template (string template is supported)
    this.textareaObj.appendTemplate =
      val === 'Horizontal'
        ? '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>'
        : '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';

    this.textareaObj.dataBind();
  };

  // Update Orientation direction and adjust append template
  handleOrientOrientation = (args: any): void => {
    const val = (args?.value as AdornmentsDirection) ?? 'Horizontal';
    this.textareaObj.adornmentOrientation = val;

    this.textareaObj.appendTemplate =
      val === 'Horizontal'
        ? '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>'
        : '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';

    this.textareaObj.dataBind();
  };
}
