


import { Component, ViewChild } from '@angular/core';
import { EmitType, detach, isNullOrUndefined, createElement, EventHandler } from '@syncfusion/ej2-base';
import { UploaderComponent, FileInfo, SelectedEventArgs, RemovingEventArgs  } from '@syncfusion/ej2-angular-inputs';
import { createSpinner, showSpinner, hideSpinner  } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    template: `<div id='dropArea'>
                    <span id='drop' class="droparea"> Drop files here or <a href="" id='browse'><u>Browse</u></a> </span>
                    <ejs-uploader #templateupload id='templatefileupload' [dropArea]="dropArea" [asyncSettings]='path'(progress)='onFileUpload($event)' (selected)='onFileSelect($event)' (removing)='onFileRemove($event)' (failure)='onUploadFailed($event)' (success)='onUploadSuccess($event)'></ejs-uploader>
                </div>`,
    styleUrls: ['./index.css']
})
export class AppComponent {
    @ViewChild('templateupload')
    public uploadObj?: UploaderComponent;

    public path: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };

    ngAfterViewInit() {
    this.dropArea = document.querySelector('#dropArea') as HTMLElement;
    (document.getElementById('browse') as HTMLElement).onclick = function() {
    (document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button') as HTMLButtonElement).click();
      return false;
      }
    }
    constructor() {
    }
    public dropArea?: HTMLElement;
    public uploadWrapper: HTMLElement = document.getElementsByClassName('e-upload')[0] as HTMLElement;
    public parentElement ?: HTMLElement;
    public progressbarContainer ?: HTMLElement;
    public filesDetails : FileInfo[] = [];
    public filesList: HTMLElement[] = [];
    public onFileSelect(args : SelectedEventArgs) : void  {
        if (isNullOrUndefined((document.getElementById('dropArea') as HTMLElement).querySelector('.upload-list-root') as Element )) {
            this.parentElement = createElement('div', { className: 'upload-list-root' });
            this.parentElement.appendChild(createElement('ul', {className: 'ul-element' }));
            (document.getElementById('dropArea') as HTMLElement).appendChild(this.parentElement);
        }
        for (let i : number = 0; i < args.filesData.length; i++) {
            this.formSelectedData(args.filesData[i], this);  // create the LI element for each file Data
        }
        this.filesDetails = this.filesDetails.concat(args.filesData);
        this.uploadObj?.upload(args.filesData, true);
        args.cancel = true;
    }
     public formSelectedData (selectedFiles : FileInfo, proxy: any ) : void {
        let liEle : HTMLElement = createElement('li',  { className: 'file-lists', attrs: {'data-file-name' : selectedFiles.name} });
        liEle.appendChild(createElement('span', {className: 'file-name ', innerHTML: selectedFiles.name }));
        liEle.appendChild(createElement('span', {className: 'file-size ', innerHTML: (this.uploadObj as UploaderComponent).bytesToSize(selectedFiles.size) }));
        if (selectedFiles.status === 'Ready to upload') {
            this.progressbarContainer = createElement('span', {className: 'progress-bar-container'});
            this.progressbarContainer.appendChild(createElement('progress', {className: 'progress', attrs: {value : '0', max : '100'}} ));
            liEle.appendChild(this.progressbarContainer);
        } else { (liEle.querySelector('.file-name') as Element).classList.add('upload-fails'); }
        let closeIconContainer : HTMLElement = createElement('span', {className: 'e-icons close-icon-container'});
        EventHandler.add(closeIconContainer, 'click', this.removeFiles, proxy);
        liEle.appendChild(closeIconContainer);
        (document.querySelector('.ul-element') as Element).appendChild(liEle);
        this.filesList.push(liEle);
    }

    public onFileUpload(args : any) : void {
        let li: Element = (document.getElementById('dropArea') as HTMLElement).querySelector('[data-file-name="' + args.file.name + '"]') as Element;
        EventHandler.remove(li.querySelector('.close-icon-container') as Element, 'click', this.removeFiles);
        let progressValue : number = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue)) {
            li.getElementsByTagName('progress')[0].value = progressValue;   // Updating the progress bar value
        }
    }

    public onUploadSuccess:  EmitType<Object> = (args: any) => {
        let spinnerElement: HTMLElement = document.getElementById('dropArea') as HTMLElement;
        let li: HTMLElement =  (document.getElementById('dropArea') as HTMLElement).querySelector('[data-file-name="' + args.file.name + '"]') as HTMLElement;
        if (args.operation === 'upload') {
            let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
            (li.querySelector('.close-icon-container') as Element).classList.add('delete-icon');
            detach(li.getElementsByTagName('progress')[0]);
            (li.querySelector('.file-size') as HTMLElement).style.display = 'inline-block';
            (li.querySelector('.file-name') as HTMLElement).style.color = 'green';
            (li.querySelector('.e-icons') as HTMLElement).onclick = () => {
                createSpinner({ target: spinnerElement, width: '25px' });
                showSpinner(spinnerElement);
            };
            (li.querySelector('.close-icon-container') as HTMLElement).onkeydown = (e: any) => {
                if (e.keyCode === 13) {
                    createSpinner({ target: spinnerElement, width: '25px' });
                    showSpinner(spinnerElement);
                }
            };
        } else {
            this.filesList.splice(this.filesList.indexOf(li), 1);
            this.filesDetails.splice(this.filesList.indexOf(li), 1);
            detach(li);
            hideSpinner(spinnerElement);
            detach(spinnerElement.querySelector('.e-spinner-pane') as Element );
        }
        EventHandler.add(li.querySelector('.close-icon-container') as Element, 'click', this.removeFiles, this);
    }

    public onFileRemove(args: RemovingEventArgs): void {
        args.postRawFile = false;
    }

    public onUploadFailed(args : any) : void {
        let li: Element = (document.getElementById('dropArea') as HTMLElement).querySelector('[data-file-name="' + args.file.name + '"]') as Element;
        EventHandler.add(li.querySelector('.close-icon-container') as Element, 'click', this.removeFiles, this);
        (li.querySelector('.file-name ') as Element).classList.add('upload-fails');
        if (args.operation === 'upload') {
            detach(li.querySelector('.progress-bar-container') as Element);
        }
    }

    public removeFiles(args : any) : void {
        let status : string = this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].status;
        if (status === 'File uploaded successfully') {
            this.uploadObj?.remove(this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)]);
        } else {
            detach(args.currentTarget.parentElement);
        }
        (this.uploadObj as UploaderComponent).element.value = '';
    }

    public generateSpinner(targetElement: HTMLElement): void {
        createSpinner({ target: targetElement, width: '25px' });
        showSpinner(targetElement);
    }
}



