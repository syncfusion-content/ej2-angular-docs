import { Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { NumericTextBoxComponent, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';

/**
 * Adornments Numeric TextBox sample
 */
@Component({
    selector: 'app-root',
    templateUrl:`<div class="col-lg-12 control-section adornment-numeric">
    <div class="content-wrapper">
        <div class="row custom-margin">
            <ejs-numerictextbox #prependNumeric value="1" floatLabelType="Auto" cssClass="e-prepend-numeric" placeholder="Enter the price" [prependTemplate]="prependTemplate" (change)="onPriceChange()">
                <ng-template #prependTemplate>
                    <span class="e-icons e-menu"></span>
                    <span class="e-input-separator"></span>
                    <span class="e-icons e-search"></span>
                    <span class="e-input-separator"></span>
                </ng-template>
            </ejs-numerictextbox>
        </div>
        <div class="row custom-margin">
            <ejs-numerictextbox #appendNumeric value="5" step="1" floatLabelType="Auto" placeholder="Enter the kg" [appendTemplate]="appendTemplate" (change)="onKgChange()">
                <ng-template #appendTemplate>
                    <div>
                        <span>kg</span>
                    </div>
                </ng-template>
            </ejs-numerictextbox>
        </div>
        <div class="row custom-margin custom-margin-row">
            <ejs-numerictextbox #iconNumeric value="10" [showSpinButton]="showSpinButtons" floatLabelType="Auto" cssClass="e-icon-numeric" placeholder="Enter the Number" [prependTemplate]="prependIconTemplate" [appendTemplate]="appendIconTemplate">
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
</div>`,
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [NumericTextBoxModule, SBActionDescriptionComponent, SBDescriptionComponent]
})
export class AdornmentNumericTextbox {
    @ViewChild('prependNumeric')
    public prependNumericObj: NumericTextBoxComponent;
    @ViewChild('appendNumeric')
    public appendNumericObj: NumericTextBoxComponent;
    @ViewChild('iconNumeric')
    public iconNumericObj: NumericTextBoxComponent;
    public showSpinButtons: boolean = false;

    onPriceChange() {
        this.appendNumericObj.value = this.prependNumericObj.value * 5;
    }
    onKgChange() {
        this.prependNumericObj.value = this.appendNumericObj.value / 5;
    }
    onResetClick() {
        this.iconNumericObj.value = null;
    }
    onSubClick() {
        this.iconNumericObj.value = this.iconNumericObj.value - 1;
    }
    onPlusClick() {
        this.iconNumericObj.value = this.iconNumericObj.value + 1;
    }
}