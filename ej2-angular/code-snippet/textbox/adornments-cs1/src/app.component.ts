import { Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';

/**
 * Adornments TextBox sample
 */
@Component({
    selector: 'app-root',
    template:`<div class="col-lg-12 control-section adornments">
    <div class="content-wrapper">
        <div class="row">
            <ejs-textbox placeholder="Enter your Name" cssClass="e-prepend-textbox" floatLabelType="Auto" [prependTemplate]="prependTemplate">
                <ng-template #prependTemplate>
                    <span class="e-icons e-user"></span>
                    <span class="e-input-separator"></span>
                </ng-template>
            </ejs-textbox>
        </div>
        <div class="row">
            <ejs-textbox #appendTextbox placeholder="Password" cssClass="e-eye-icon" floatLabelType="Auto" [appendTemplate]="appendTemplate">
                <ng-template #appendTemplate>
                    <span class="e-input-separator"></span>
                    <span class="e-icons e-eye" (click)="onEyeIconClick($event)"></span>
                </ng-template>
            </ejs-textbox>
        </div>
        <div class="row">
            <ejs-textbox #iconTextbox placeholder="Enter the Mail Address" cssClass="e-icon-textbox" floatLabelType="Auto" [prependTemplate]="prependIconTemplate" [appendTemplate]="appendIconTemplate">
                <ng-template #prependIconTemplate>
                    <span class="e-icons e-people"></span>
                    <span class="e-input-separator"></span>
                </ng-template>
                <ng-template #appendIconTemplate>
                    <span>.com</span>
                    <span class="e-input-separator"></span>
                    <span class="e-icons e-trash" (click)="ondeleteClick()"></span>
                </ng-template>
            </ejs-textbox>
        </div>
    </div>
</div>  `,
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [TextBoxModule, DropDownListModule, SBActionDescriptionComponent, SBDescriptionComponent]
})
export class AdornmentTextbox {
    @ViewChild('appendTextbox')
    public appendTextboxObj: TextBoxComponent;
    @ViewChild('iconTextbox')
    public iconTextboxObj: TextBoxComponent;
    
    onEyeIconClick(e: MouseEvent) {
        let textIcon: Element = e.target as HTMLElement;
        if (this.appendTextboxObj.type === 'text') {
            this.appendTextboxObj.type = 'Password';
            textIcon.className = 'e-icons e-eye-slash';
        } else {
            this.appendTextboxObj.type = 'text';
            textIcon.className = 'e-icons e-eye';
        }
    }

    ondeleteClick() {
        this.iconTextboxObj.value = '';
    }
}