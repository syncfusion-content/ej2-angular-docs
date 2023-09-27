

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { EmitType, createElement, detach } from '@syncfusion/ej2-base';
import { UploaderComponent, SelectedEventArgs, FormValidator, FormValidatorModel  } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
@Component({
    selector: 'app-root',
    templateUrl: './default.html',
    styleUrls: ['./index.css']
})

export class AppComponent {
    @ViewChild('defaultupload')
    public uploadObj?: UploaderComponent;
    @ViewChild('dialog')
    public dialog?: DialogComponent;

    public path: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
    public removeFile: any = [];
    public content: string = 'Your details have been updated successfully, Thank you.';
    public width: string = '250px';
    public visible: boolean = false;
    public header: string = 'Success';
    public target: HTMLElement = document.getElementById('control_wrapper') as HTMLElement;
    public onFileSelect: EmitType<SelectedEventArgs> = (args: any) =>  {
        if (args.filesData.length > 0) {
        if (document.getElementsByClassName('upload-image').length > 0) {
            detach(document.getElementsByClassName('imgWrapper')[0]);
        }
        let imageTag = createElement('IMG', { className: 'upload-image', attrs: { 'alt': 'Image' } });
        let wrapper: HTMLElement = createElement('span', { className: 'imgWrapper' }) as HTMLElement;
        wrapper.appendChild(imageTag);
        let rootFile = document.getElementsByClassName('dropUpload')[0];
        rootFile.insertBefore(wrapper, rootFile.firstChild);
        this.readURL(wrapper, args.filesData[0]);
        }
        args.cancel = true;
    }
    options: FormValidatorModel | undefined;
    autoUpload: any;
    extensions: any;
    dropElement: any;
    ngAfterViewInit() {
        (document.getElementById('customBrowse') as HTMLElement).onclick = () => {
            (document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button') as HTMLButtonElement).click();
        };
        (document.getElementById('submit-btn') as HTMLElement).onclick = () => {
            this.onFormSubmit();
        };
        let options = { rules: { 'name': { required: true } } };
        let formObj: FormValidator = new FormValidator('#form1', this.options);
        let proxy = this;
        setTimeout(() => {
            this.uploadObj?.element.setAttribute('data-required-message', '* Choose your image to upload');
            this.uploadObj?.element.setAttribute('required', '');
            this.uploadObj?.element.setAttribute('data-msg-containerid', 'uploadError');
        }, 500);
    }
    public readURL: EmitType<SelectedEventArgs> = (li: HTMLElement, args: any) => {
        let preview: HTMLImageElement = li.querySelector('.upload-image') as HTMLImageElement;
        let file: File = args.rawFile; let reader: FileReader = new FileReader();
        reader.addEventListener('load', () => { preview.src = reader.result as string; }, false);
        if (file) { reader.readAsDataURL(file); }
    }
    public onFormSubmit: any = () => {
        let formObj: FormValidator = new FormValidator('#form1', this.options);
        let formStatus: Boolean = formObj.validate();
        if (formStatus) {
            formObj.element.reset();
            detach(document.getElementsByClassName('imgWrapper')[0]);
            this.dialog?.show();
        }
    }
}


