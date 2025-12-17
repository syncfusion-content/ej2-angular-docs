import { Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';

/**
 * Adornments Masked TextBox sample
 */
@Component({
    selector: 'app-root',
    template:`<div class="control-section adornment-mask">
    <div class="content-wrapper">
        <div class="mask-row">
            <ejs-maskedtextbox mask="0000-000-000" promptChar="#" cssClass="e-prepend-mask" placeholder="Enter phone number" floatLabelType="Auto" [prependTemplate]="prependTemplate" [appendTemplate]="appendTemplate">
                <ng-template #prependTemplate>
                    <span class="e-icons e-user"></span>
                    <span class="e-input-separator"></span>
                </ng-template>
                <ng-template #appendTemplate>
                    <span class="e-input-separator"></span>
                    <span class="e-icons e-send"></span>
                </ng-template>
            </ejs-maskedtextbox>
        </div>
    </div>
</div>`,
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [MaskedTextBoxModule, SBActionDescriptionComponent, SBDescriptionComponent]
})
export class AdornmentMaskedTextbox {
    constructor() { }
}