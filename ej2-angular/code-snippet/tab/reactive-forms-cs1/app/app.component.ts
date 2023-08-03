


import { Component, Inject } from '@angular/core';
import { FormBuilder, FormsModule,FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-container',
    template: `
    <ejs-tab id="element" #tab>
    <e-tabitems>
        <e-tabitem [header]='headerText[0]'>
            <ng-template #content>
                <div id="reactive-form">
                    <div class="control-section">
                        <div class="col-lg-8  content-wrapper">
                            <div id='content' class='box-form' style="margin: 0 auto; width:250px; padding:25px">
                                <form [formGroup]="skillForm" novalidate id="formId">
                                    <div class="form-group">
                                        <ejs-autocomplete formControlName="skillname" name="skillname"
                                            [dataSource]='skillset' allowCustom=false [placeholder]='placeholder'
                                            floatLabelType='Auto'>
                                        </ejs-autocomplete>
                                    </div>
                                    <div class="form-group" style="padding-top:10px;">
                                        <div class="e-float-input">
                                            <input type="text" autocomplete="off" (focus)="onfocus($event)"
                                                (blur)="onblur($event)" formControlName="sname" name="sname"
                                                maxlength="10" />
                                            <span class="e-float-line"></span>
                                            <label class="e-float-text e-label-bottom">Name:</label>
                                        </div>
                                    </div>
                                    <div class="form-group" style="padding-top:10px;">
                                        <div class="e-float-input">
                                            <input type="text" autocomplete="off" (focus)="onfocus($event)"
                                                (blur)="onblur($event)" formControlName="smail" maxlength="15" />
                                            <span class="e-float-line"></span>
                                            <label class="e-float-text e-label-bottom">Email:</label>
                                        </div>
                                    </div>
                                    <div class="form-group" style="padding:10px;">
                                        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                            <button ejs-button [disabled]="!skillForm.valid">Done</button></div>
                                        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                            <button ejs-button type="reset" (click)="onreset($event)">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 property-section">
                            <div class="property-panel-section">
                                <div class="property-panel-header">Properties</div>
                                <div class="property-panel-content" style="padding: 10px;">
                                    <table id="property" class="box-table" title="Properties" style="width: 100%;">
                                        <tr>
                                            <td style="width:50%">Selected Language: </td>
                                            <td class="formtext">{{ skillForm.get('skillname').value }}</td>
                                        </tr>
                                        <tr>
                                            <td style="width:50%">Buyer Name: </td>
                                            <td class="formtext">{{ skillForm.get('sname').value }}</td>
                                        </tr>
                                        <tr>
                                            <td style="width:50%">Buyer Mail ID: </td>
                                            <td class="formtext">{{ skillForm.get('smail').value }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ng-template>
        </e-tabitem>
        <e-tabitem [header]='headerText[1]'>
            <ng-template #content>
                <div class="row" style="width:500px;">
                    <div class="col-xs-7 col-sm-7 col-lg-7 col-md-7" style="padding-top:20px;">
                        <div style="webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
     box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
     margin:0 auto;height:330px;">
                            <div style="padding:30px;">
                                <form #form="ngForm">
                                    <div class="form-group">
                                        <ejs-dropdownlist name="skillname" [(ngModel)]='skillForm.skillname'
                                            [dataSource]='skillset' [placeholder]='placeholder' floatLabelType='Auto'>
                                        </ejs-dropdownlist>
                                    </div>
                                    <div class="form-group" style="padding-top:10px;">
                                        <div class="e-float-input">
                                            <input type="text" [(ngModel)]="skillForm.sname" name="sname"
                                                maxlength="10" />
                                            <span class="e-float-line e-label-top"></span>
                                            <label class="e-float-text e-label-top">Name:</label>
                                        </div>
                                    </div>
                                    <div class="form-group" style="padding-top:10px;">
                                        <div class="e-float-input">
                                            <input type="text" [(ngModel)]="skillForm.smail" name="smail"
                                                maxlength="15" />
                                            <span class="e-float-line e-label-top"></span>
                                            <label class="e-float-text e-label-top">Email:</label>
                                        </div>
                                    </div>
                                    <div class="form-group" style="padding:10px;">
                                        <button ejs-button>Done</button>
                                        <button ejs-button type="reset">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-5 col-sm-5 col-lg-5 col-md-5" style="padding-top:20px;">
                        <div style="webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
     box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
     margin:0 auto;height:330px;">
                            <div style="padding:30px;">
                                <div class="form-group">
                                    <span style="font-weight:800;">Selected Language: </span>
                                    <span style="font-style:oblique;color:#8a2be2;">
                                        {{ skillForm.skillname }}</span>
                                </div>
                                <div class="form-group" style="padding-top:50px;">
                                    <span style="font-weight:800;">Buyer Name: </span>
                                    <span style="font-style:oblique;color:#8a2be2;">
                                        {{ skillForm.sname }}</span>
                                </div>
                                <div class="form-group" style="padding-top:50px;">
                                    <span style="font-weight:800;">Buyer Mail ID: </span>
                                    <span style="font-style:oblique;color:#8a2be2;">
                                        {{ skillForm.smail }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ng-template>
        </e-tabitem>

    </e-tabitems>
</ejs-tab>
`
})

export class AppComponent {
    public headerText: Object | any = [{ 'text': 'ReactiveForms1' }, { 'text': 'ReactiveForms2'}];

    public skillset: string[] = [
        'ASP.NET', 'ActionScript', 'Basic',
        'C++' , 'C#' , 'dBase' , 'Delphi' ,
        'ESPOL' , 'F#' , 'FoxPro' , 'Java',
        'J#' , 'Lisp' , 'Logo' , 'PHP'
    ];


    public placeholder: String = 'Select a language';
    skillForm?: FormGroup | any ;

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.createForm();
    }

    createForm() : void {
        this.skillForm = this.builder.group({
            skillname: ['', Validators.required],
            sname: ['', Validators.required],
            smail: ['', Validators.required]
        });
    }

     onfocus(element: FocusEvent) : void {
        let target: HTMLInputElement = element.target as HTMLInputElement;
        let parentNode: HTMLElement = target.parentNode as HTMLElement;
        if (parentNode.classList.contains('e-input-in-wrap')) {
            parentNode = (parentNode.parentNode as HTMLElement);
        }
        parentNode.classList.add('e-input-focus');
        (parentNode.querySelector('.e-float-text') as Element).classList.add('e-label-top');
        (parentNode.querySelector('.e-float-text') as Element).classList.remove('e-label-bottom');
    }
    onblur(element: FocusEvent) : void {
        let target: HTMLInputElement = element.target as HTMLInputElement;
        let parentNode: HTMLElement = target.parentNode as HTMLElement;
        if (parentNode.classList.contains('e-input-in-wrap')) {
            (parentNode.parentNode as HTMLElement).classList.remove('e-input-focus');
        }
        parentNode.classList.remove('e-input-focus');
        if (target.value === null || target.value === '') {
            (parentNode.querySelector('.e-float-text') as Element ).classList.remove('e-label-top');
            (parentNode.querySelector('.e-float-text') as Element).classList.add('e-label-bottom');
        }else {
            (parentNode.querySelector('.e-float-text') as Element).classList.add('e-label-top');
            (parentNode.querySelector('.e-float-text') as Element).classList.remove('e-label-bottom');
        }
    }
    onreset(element: MouseEvent) : void {
        let parentNode: NodeListOf<HTMLElement> = document.getElementsByClassName('box-form')[0].querySelectorAll('.e-float-text');
        for (let i: number = 0; i < parentNode.length; i++) {
            parentNode[i].classList.remove('e-label-top');
            parentNode[i].classList.add('e-label-bottom');
        }
    }
}



