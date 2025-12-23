
import { Component, ViewEncapsulation } from '@angular/core';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  styleUrls: ['.././index.css'],
  template: `
    <div class="col-lg-12 control-section adornment-numeric">
      <div class="content-wrapper">
        <div class="row custom-margin">
          <ejs-numerictextbox
            [(value)]="price"
            floatLabelType="Auto"
            cssClass="e-prepend-numeric"
            placeholder="Enter the price"
            [prependTemplate]="prependTemplate"
            (change)="onPriceChange()">
            <ng-template #prependTemplate>
              <span class="e-icons e-menu"></span>
              <span class="e-input-separator"></span>
              <span class="e-icons e-search"></span>
              <span class="e-input-separator"></span>
            </ng-template>
          </ejs-numerictextbox>
        </div>

        <div class="row custom-margin">
          <ejs-numerictextbox
            [(value)]="kg"
            [step]="1"
            floatLabelType="Auto"
            placeholder="Enter the kg"
            [appendTemplate]="appendTemplate"
            (change)="onKgChange()">
            <ng-template #appendTemplate>
              <div>
                <span>kg</span>
              </div>
            </ng-template>
          </ejs-numerictextbox>
        </div>

        <div class="row custom-margin custom-margin-row">
          <ejs-numerictextbox
            [(value)]="iconValue"
            [showSpinButton]="showSpinButtons"
            floatLabelType="Auto"
            cssClass="e-icon-numeric"
            placeholder="Enter the Number"
            [prependTemplate]="prependIconTemplate"
            [appendTemplate]="appendIconTemplate">
            <ng-template #prependIconTemplate>
              <span class="e-icons e-reset" title="Reset" (click)="onResetClick()"></span>
              <span class="e-input-separator"></span>
            </ng-template>
            <ng-template #appendIconTemplate>
              <span class="e-input-separator"></span>
              <span class="e-icons e-horizontal-line" (click)="onSubClick()"></span>
              <span class="e-input-separator"></span>
              <span class="e-icons e-plus" (click)="onPlusClick()"></span>
            </ng-template>
          </ejs-numerictextbox>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NumericTextBoxModule]
})
export class AppComponent {
  public showSpinButtons = false;
  public price: number = 1;
  public kg: number = 5;
  public iconValue: number | null = 10;

  onPriceChange(): void {
    this.kg = (this.price ?? 0) * 5;
  }

  onKgChange(): void {
    this.price = (this.kg ?? 0) / 5;
  }

  onResetClick(): void {
    this.iconValue = null;
  }

  onSubClick(): void {
    const current = Number(this.iconValue ?? 0);
    this.iconValue = current - 1;
  }

  onPlusClick(): void {
    const current = Number(this.iconValue ?? 0);
    this.iconValue = current + 1;
  }

  constructor() {}
}
