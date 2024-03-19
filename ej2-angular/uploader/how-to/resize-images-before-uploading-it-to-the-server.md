---
layout: post
title: Resize images before upload Angular Uploader component | Syncfusion
description: Learn here all about Resize images before uploading it to the server in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Resize images before uploading it to the server 
documentation: ug
domainurl: ##DomainURL##
---

# Resize images before upload to server.

You can customize the dimension of the images before uploading it to the server.
By using selected event, you can get the selected file information as type of an object. From the obtained image file information, create a new canvas and render an image with the custom dimensions. Refer the corresponding code snippet as follows.

```typescript

@ViewChild('templateupload')
    public uploadObj: UploaderComponent;

    public path: Object = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };

    public uploadWrapper: HTMLElement = document.getElementsByClassName('e-upload')[0] as HTMLElement;
    public parentElement : HTMLElement;
    public proxy : any;
    public progressbarContainer : HTMLElement;
    public filesDetails : FileInfo[] = [];
    public filesList: HTMLElement[] = [];
    public dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;
public newImage: any;

    ngAfterViewInit(): void {
        document.getElementById('browse').onclick = () => {
            document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
            return false;
        };
    }

    public onFileSelect(args : SelectedEventArgs) : void  {
      args.cancel = true;
        if (isNullOrUndefined(document.getElementById('dropArea').querySelector('.upload-list-root'))) {
            this.parentElement = createElement('div', { className: 'upload-list-root' });
            this.parentElement.appendChild(createElement('ul', {className: 'ul-element' }));
            document.getElementById('dropArea').appendChild(this.parentElement);
        }
        for (let i : number = 0; i < args.filesData.length; i++) {
            this.formSelectedData(args.filesData[i], this);  // create the LI element for each file Data
        }
        this.filesDetails = this.filesDetails.concat(args.filesData);
        let proxy = this;
        let file: FileInfo = args.filesData[0].rawFile as any;
        let width: number;
        let height: number;
        let img: any = document.createElement("img");
        let reader: any = new FileReader();
        reader.onload = function(e: any) { img.src = e.target.result; };
        reader.readAsDataURL(file);
        let imgs = new Image();
        img.onload = function(): void {
            width = this.width;
            height = this.height;
            proxy.onNewImg(height, width, img, args.filesData[0])
        };
        imgs.src = img.src;
    }

    // to create canvas and update our custom dimensions
    private onNewImg(height: any, width: any, img: any, file: any) {
        let canvas: HTMLCanvasElement = document.createElement("canvas");
        let ctx: any = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let MAX_WIDTH: any = 1000;
        let MAX_HEIGHT: any = 600;
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx1 = canvas.getContext("2d");
        ctx1.drawImage(img, 0, 0, width, height);
        this.newImage = canvas.toDataURL("image/png");
        let blobBin = atob(this.newImage.split(',')[1]);
        let array = [];
        for(var i = 0; i < blobBin.length; i++) {
            array.push(blobBin.charCodeAt(i));
        }
        let newBlob = new Blob([new Uint8Array(array)], {type: 'image/png'});
        let newFile: any = this.createFile(newBlob, file);
        this.uploadObj.upload(newFile, true);
    }
    // To create File object to upload
    public createFile(image: any , file: any) {
        let newFile = {
            name: file.name,
            rawFile: image,
            size: image.size,
            type: file.type,
            validationMessage: '',
            statusCode: '1',
            status: 'Ready to Upload'
        }
        return newFile;
    }

    public onFileRemove(args: RemovingEventArgs): void {
        args.postRawFile = false;
    }

    public formSelectedData (selectedFiles : FileInfo, proxy: any ) : void {
        let liEle : HTMLElement = createElement('li',  { className: 'file-lists', attrs: {'data-file-name' : selectedFiles.name} });
        liEle.appendChild(createElement('span', {className: 'file-name ', innerHTML: selectedFiles.name }));
        liEle.appendChild(createElement('span', {className: 'file-size ', innerHTML: this.uploadObj.bytesToSize(selectedFiles.size) }));
        if (selectedFiles.status === 'Ready to upload') {
            this.progressbarContainer = createElement('span', {className: 'progress-bar-container'});
            this.progressbarContainer.appendChild(createElement('progress', {className: 'progress', attrs: {value : '0', max : '100'}} ));
            liEle.appendChild(this.progressbarContainer);
        } else { liEle.querySelector('.file-name').classList.add('upload-fails'); }
        let closeIconContainer : HTMLElement = createElement('span', {className: 'e-icons close-icon-container'});
        EventHandler.add(closeIconContainer, 'click', this.removeFiles, proxy);
        liEle.appendChild(closeIconContainer);
        document.querySelector('.ul-element').appendChild(liEle);
        this.filesList.push(liEle);
    }

    public onFileUpload(args : any) : void {
        let li : Element = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        EventHandler.remove(li.querySelector('.close-icon-container'), 'click', this.removeFiles);
        let progressValue : number = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue)) {
            li.getElementsByTagName('progress')[0].value = progressValue;   // Updating the progress bar value
        }
    }

    public onUploadSuccess:  EmitType<Object> = (args: any) => {
      console.log("The selected file has resized and uploaded");
        let spinnerElement: HTMLElement = document.getElementById('dropArea');
        let li: Element =  document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        if (args.operation === 'upload') {
            let progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
            li.querySelector('.close-icon-container').classList.add('delete-icon');
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
            if (!isNullOrUndefined(li)) { detach(li); }
            if (!isNullOrUndefined(spinnerElement)) {
                hideSpinner(spinnerElement);
                detach(spinnerElement.querySelector('.e-spinner-pane'));
            }
        }
        EventHandler.add(li.querySelector('.close-icon-container'), 'click', this.removeFiles, this);
    }

    public onUploadFailed(args : any) : void {
        let li : Element = document.getElementById('dropArea').querySelector('[data-file-name="' + args.file.name + '"]');
        EventHandler.add(li.querySelector('.close-icon-container'), 'click', this.removeFiles, this);
        li.querySelector('.file-name ').classList.add('upload-fails');
        if (args.operation === 'upload') {
            detach(li.querySelector('.progress-bar-container'));
        }
    }

    public removeFiles(args : any) : void {
        let status : string = this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].status;
        if (status === 'File uploaded successfully') {
            this.uploadObj.remove(this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)]);
        } else {
            detach(args.currentTarget.parentElement);
        }
        this.uploadObj.element.value = '';
    }

    public generateSpinner(targetElement: HTMLElement): void {
        createSpinner({ target: targetElement, width: '25px' });
        showSpinner(targetElement);
    }

```

```

<div class="uploadtemplate">
    <div id='dropArea'>
        <span id='drop' class="droparea"> Drop files here or <a href="" id='browse'><u>Browse</u></a> </span>
        <ejs-uploader #templateupload id='templatefileupload' [asyncSettings]='path' [dropArea]='dropElement' (progress)='onFileUpload($event)' (selected)='onFileSelect($event)' (failure)='onUploadFailed($event)' (success)='onUploadSuccess($event)' (removing)='onFileRemove($event)'></ejs-uploader>
    </div>
</div>

```

```
<style>
.uploadtemplate #dropArea {
    min-height: 50px;
    margin: 15px 0;
    position: relative;
}

.uploadtemplate #drop {
    padding: 3% 30% 3%;
    display: inherit;
    border: 1px dashed #c3c3cc
}
.e-upload {
    float: none;
}

.uploadtemplate .droparea {
    font-size: 14px;
}

.uploadtemplate  .e-file-select-wrap {
    display: none;
}

.uploadtemplate .e-upload {
    float: none;
    border: none;
}

.uploadtemplate .ul-element {
    list-style: none;
    width: 100%;
    padding-left: 0;
}

.uploadtemplate .file-name {
    padding: 8px 6px 8px 0;
    font-size: 13px;
    width: 46%;
    display: inline-block;
    position: relative;
    top: 4px;
}

.uploadtemplate .file-size {
    padding: 4px;
    font-size: 13px;
    width: 18%;
    display: inline-block;
    position: relative;
}

.uploadtemplate li.file-lists {
    border: 1px solid lightgray;
    padding: 0 6px 0 14px;
    margin-top: 15px;
    position: relative;
    background: rgba(0, 0, 0, 0.04);
}

.uploadtemplate span.file-size, .file-name {
    font-family: "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.uploadtemplate span.progress-bar-container {
    display: block;
    float: right;
    height: 20px;
    right: 13%;
    top: 14px;
    position: relative;
    width: 20%;
}

.uploadtemplate .progress {
    width: 100%;
    height: 15px;
    -webkit-appearance: none;
}

.uploadtemplate .close-icon-container {
    cursor: pointer;
    font-size: 11px;
    height: 24px;
    margin: 0 12px 0 22px;
    padding: 0;
    position: absolute;
    right: 0;
    width: 24px;
    top: 6px;
}

.uploadtemplate .close-icon-container.e-icons::before {
    left: 7px;
    position: inherit;
    top: 7px;
    content: '\e932';
}

.uploadtemplate .close-icon-container.delete-icon::before {
    content: '\e94a';
}

.uploadtemplate .close-icon-container:hover {
    background-color: rgba(0, 0, 0, 0.12);
    border-color: transparent;
    border-radius: 50%;
    box-shadow: 0 0 0 transparent;
}
.uploadtemplate .upload-success {
    color: #2bc700;
}

.uploadtemplate .upload-fails {
    color: #f44336;
}
.uploadtemplate progress::-webkit-progress-bar {
    border: 1px solid lightgrey;
    background-color: #ffffff;
    border-radius: 2px;
}
.uploadtemplate #dropArea progress {
    border: 1px solid lightgrey;
    background-color: #ffffff;
    border-radius: 2px;
}
.uploadtemplate progress::-webkit-progress-value, .uploadtemplate progress::-webkit-progress-value {
    border-radius: 2px;
    background-color: #ff4081;
}
</style>

```

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
