
import { Component, ViewEncapsulation } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  styleUrls: ['.././index.css'],
  template: `
    <div class="col-lg-12 control-section adornments">
      <div class="content-wrapper">
        <div class="row">
          <ejs-textbox
            placeholder="Enter your Name"
            cssClass="e-prepend-textbox"
            floatLabelType="Auto"
            [prependTemplate]="prependTemplate">
            <ng-template #prependTemplate>
              <span class="e-icons e-user"></span>
              <span class="e-input-separator"></span>
            </ng-template>
          </ejs-textbox>
        </div>

        <div class="row">
          <ejs-textbox
            placeholder="Password"
            cssClass="e-eye-icon"
            floatLabelType="Auto"
            [(value)]="password"
            [type]="passwordType"
            [appendTemplate]="appendTemplate">
            <ng-template #appendTemplate>
              <span class="e-input-separator"></span>
              <span
                class="e-icons"
                [class.e-eye]="passwordType === 'password'"
                [class.e-eye-slash]="passwordType === 'text'"
                (click)="onEyeIconClick($event)">
              </span>
            </ng-template>
          </ejs-textbox>
        </div>

        <div class="row">
          <ejs-textbox
            placeholder="Enter the Mail Address"
            cssClass="e-icon-textbox"
            floatLabelType="Auto"
            [(value)]="email"
            [prependTemplate]="prependIconTemplate"
            [appendTemplate]="appendIconTemplate">
            <ng-template #prependIconTemplate>
              <span class="e-icons e-people"></span>
              <span class="e-input-separator"></span>
            </ng-template>
            <ng-template #appendIconTemplate>
              <span>.com</span>
              <span class="e-input-separator"></span>
              <span class="e-icons e-trash" (click)="onDeleteClick()"></span>
            </ng-template>
          </ejs-textbox>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TextBoxModule, DropDownListModule]
})
export class AppComponent {

  public password: string = '';
  public passwordType: 'password' | 'text' = 'password';
  public email: string = '';

  onEyeIconClick(e: MouseEvent): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
     }

  onDeleteClick(): void {
    this.email = '';
  }
}
