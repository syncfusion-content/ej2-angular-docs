---
layout: post
title: Ej1 api migration in Angular Uploader component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# EJ1 API migration in Angular Uploader component

This article describes the API migration process for the File Upload component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Accessibility

<!-- markdownlint-disable MD033 -->

| **Behavior**           | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1**     |        **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2**       |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Localization           | **Property** : locale <br/> `<ej-uploadbox id='uploadDefault' locale='es-ES'> </ej-uploadbox>` | **Property** : locale <br/> `<ejs-uploader locale='es-ES'></ejs-uploader>` |
| Right to left | **Property:** enableRTL <br/> `<ej-uploadbox id='uploadDefault' [enableRTL]= 'true'></ej-uploadbox>`  | **Property:** enableRTL <br/> `<ejs-uploader [enableRtl]= 'true'> </ejs-uploader>` |

## File List

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Show/Hide the selected files | **Property** : showFileDetails <br/> `<ej-uploadbox id='uploadDefault' [showFileDetails]= 'false'></ej-uploadbox>`  | **Property** :  showFileList <br/> `<ejs-uploader [showFileList]= 'false'></ejs-uploader>`  |
| Customizing the file list | Not Applicable  | **Property** : template <br/> `<ejs-uploader> <ng-template #template let-data=''> // your custom template here</ng-template></ejs-uploader>`  |
| Get the files in sorted form | Not Applicable | **Method:** SortFileList<br/>  `<ejs-uploader #defaultupload></ejs-uploader>` <br/>  **TS:** <br/>  @ViewChild('defaultupload') public uploadObj: UploaderComponent; uploadObj.sortFileList(files)  |
| Clearing File List | Not Applicable | **Method:** ClearAll <br/> `<ejs-uploader #defaultupload></ejs-uploader>` <br/>  **TS:** <br/> @ViewChild('defaultupload')  public uploadObj: UploaderComponent; <br/>uploadObj.clearAll() |
| Event triggers when clearing Files | Not Applicable | **Event :** clearing <br/>  `<ejs-uploader #defaultupload (clearing)='onClearing($event)'></ejs-uploader>` <br/>  **TS:** <br/> public onClearing: EmitType< ClearingEventArgs>= () => { };  |

## File selection

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Select multiple files to upload | **Property** : multipleFilesSelection <br/> `<ej-uploadbox id='uploadDefault' [multipleFilesSelection]= 'true'></ej-uploadbox>`  | **Property** : multiple <br/> `<ejs-uploader [multiple]='true'></ejs-uploader>` |
| Set minimum file size to upload |   **Not Applicable** | **Property** : minFileSize<br/> `<ejs-uploader [minFileSize]=1024></ejs-uploader>`  |
| Set maximum file size to upload | **Property** : fileSize <br/> `<ej-uploadbox id='uploadDefault' [fileSize]= 5000></ej-uploadbox>` | **Property** : maxFileSize <br/> `<ejs-uploader [maxFileSize]= 5000></ejs-uploader>` |
| Allowed file types to select | **Property** :  extensionsAllow <br/> `<ej-uploadbox id='uploadDefault' [extensionsAllow]= '.zip'></ej-uploadbox>`  | **Property:** allowedExtensions <br/> `<ejs-uploader [allowedExtensions]= '.pdf'></ejs-uploader>` |
| Restricted files types to select | **Property:** extensionsDeny <br/> `<ej-uploadbox id='uploadDefault' [extensionsDeny]= '.docx'></ej-uploadbox>` |   **Not Applicable** |
| Display only selected details in File list | **Property** :  customFileDetails<br/> `<ej-uploadbox id='uploadDefault' [customFileDetails]= 'customDetails'></ej-uploadbox>` <br/> **TS:** <br/>public customDetails: any  { title: false, name: true, size: true, status: true, action: false} | **Not Applicable** |
| Options to customize File list dialog | **Property:** dialogAction <br/> `<ej-uploadbox [dialogAction]= 'dialogAction'></ej-uploadbox>` <br/> **TS:** <br/> public dialogAction: any {   modal: false, closeOnComplete: true, resize: true, drag: false, content: '#dialogTarget' } | **Not Applicable** |
| Customize dialog position | **Property:** dialogPosition<br/> `<ej-uploadbox [dialogPosition]= 'position'></ej-uploadbox>` <br/>  **TS:** <br/> public position: object  {X: 300, Y 100}  | **Not Applicable** |
| Change file list key values | **Property:** dialogText<br/> `<ej-uploadbox [dialogText]= 'dlgText'></ej-uploadbox>`<br/>  **TS:** <br/>public dlgText:  {     title: 'Upload File List',     name: 'File Name',     size: 'File Size'   } | **Not Applicable** |
| Change drop area text | **Property:**  dropAreaText<br/> `<ej-uploadbox dropAreaText= 'Drop files here'></ej-uploadbox>`  | No separate Property to change dropAreaText. It can be customize using locale Texts |
| Change drop area height | **Property:** dropAreaHeight<br/> `<ej-uploadbox [dropAreaHeight]= '100%'></ej-uploadbox>`  | Not Applicable |
| Change drop area width | **Property:** dropAreaWidth <br/> `<ej-uploadbox [dropAreaWidth]= '100%'></ej-uploadbox>`  | Not Applicable |
| Dynamically push the file | **Property:** pushFile<br/> `<ej-uploadbox [pushFile]= 'files'></ej-uploadbox>`  | Not Applicable |
| Show the files uploader in server already. | **Not Applicable** | **Property:** files <br/>`<ejs-uploader [files]='preloadFiles'></ejs-uploader>`<br/>  **TS:**<br/> public preloadFiles: any = [{name: 'nature', size: 5000,type: '.png'}] |
| Event triggers when select the file successfully | **Event:** fileSelect <br/> `<ej-uploadbox (fileSelect)= 'onFileSelect($event)'></ej-uploadbox>`<br/>   **TS:** <br/> public onFileSelect: any= () => { };  | **Event:** selected<br/> `<ejs-uploader (selected)=' onFileSelect($event)'></ejs-uploader>`<br/> **TS:**<br/> public onFileSelect: EmitType< SelectedEventArgs>= () => { };  |

## Upload action

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Save URL | **Property** : saveUrl <br/>`<ej-uploadbox [saveUrl]='saveUrl'></ej-uploadbox>` | **Property** : asyncSettings.saveUrl<br/>`<ejs-uploader [asyncSettings]='path'></ejs-uploader>`<br/> `public path: Object = {  saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'};`  |
| Remove URL | **Property** : removeUrl<br/> `<ej-uploadbox [removeUrl]=' removeUrl'></ej-uploadbox>` | **Property** : asyncSettings.removeUrl<br/> `<ejs-uploader [asyncSettings]='path'></ejs-uploader>`<br/> `public path: Object = { saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'};`  |
| Automatically upload the file when files added in to upload queue | **Property:** autoUpload <br/>`<ej-uploadbox [autoUpload]='false'></ej-uploadbox>`  | **Property:** autoUpload<br/> `<ejs-uploader [autoUpload]='false'></ejs-uploader>`  |
| Synchronous upload | **Property:** asyncUpload<br/> `<ej-uploadbox [asyncUpload]='false'></ej-uploadbox>`  | No Separate Property for enabling synchronous upload.  It can be enabling by using below configuration <br/>`<ejs-uploader [autoUpload]='false'></ejs-uploader>`  |
| Key to get the selected files in server side | **Property:**  uploadName<br/> `<ej-uploadbox [uploadName]='UploadKey'></ej-uploadbox>`  | Id of the element used as key value |
| Upload the files dynamically | **Not Applicable** | Method: upload()<br/> `<ejs-uploader [autoUpload]='false' #upload></ejs-uploader>`<br/>  **TS:** <br/>  @ViewChild('upload') public uploadObj: UploaderComponent;   uploadObj.upload(filesData); |
| Event triggers before start to upload the action | **Event:** beforeSend<br/> `<ej-uploadbox (beforeSend)= 'onBeforeSend ($event)'></ej-uploadbox>`<br/>  **TS:**<br/> public onBeforeSend: any= () => { }; | **Event** : uploading<br/> `<ejs-uploader (uploading)='beforeUploadStart ($event)'></ejs-uploader>`<br/>  **TS:**<br/> public beforeUploadStart: EmitType<Object>= () => { };  |
| Event triggers when the upload is in progress | **Event:** inProgress<br/> `<ej-uploadbox (inProgress)= 'uploadInprogress($event)'></ej-uploadbox>`<br/>  **TS:**<br/> public uploadInprogress: any= () => { }; | **Event** : progress<br/> `<ejs-uploader #defaultupload  (progress)='uploadInprogress ($event)'></ejs-uploader>`<br/>  **TS:**<br/> public uploadInprogress: EmitType<Object>= () => { };  |
| Event triggers when upload got success | **Event:** success<br/> `<ej-uploadbox (success)= 'uploadSuccess($event)'></ej-uploadbox>`<br/>   **TS:**<br/> public uploadSuccess: any= () => { }; | **Event** : success<br/> `<ejs-uploader (success)='uploadSuccess($event)'></ejs-uploader>`<br/>  **TS:**<br/> public uploadSuccess: EmitType<Object>= () => { }; |
| Event triggers when upload got failed | **Event:** error<br/> `<ej-uploadbox (error)= 'onUploadError($event)'></ej-uploadbox>`<br/>   **TS:** <br/>public onUploadError: any= () => { }; | **Event** : failure<br/> `<ejs-uploader (failure)='uploadFailure($event)'></ejs-uploader>`<br/>  **TS:**<br/> public uploadFailure: EmitType<Object>= () => { }; |
| Event triggers when the upload got started | **Event:** begin <br/>`<ej-uploadbox (begin)= 'onUploadBegin($event)'></ej-uploadbox>`<br/>   **TS:**<br/> public onUploadBegin: any= () => { };  |   **Not Applicable** |
| Event triggers when cancel the upload | **Event:** cancel<br/> `<ej-uploadbox (cancel)= 'onUploadCancel($event)'></ej-uploadbox>` <br/>  **TS:**<br/> public onUploadCancel: any= () => { }; | **Event** : canceling<br/> `<ejs-uploader (canceling)='uploadingCancel($event)'></ejs-uploader>`<br/>  **TS:**<br/> public uploadingCancel: EmitType<Object>= () => { };  |
| Event triggers when the upload completed | **Event:** complete<br/> `<ej-uploadbox (complete)= 'onUploadComplete($event)'></ej-uploadbox>`<br/>  **TS:**<br/> public onUploadComplete: any= () => { }; | **Not Applicable** |

## Chunk Upload

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Enabling the chunk upload | Not Applicable | **Property:** asyncSettings.chunkSize<br/> `<ejs-uploader [asyncSettings]='path'></ejs-uploader>`<br/>  **TS:**<br/> public path: Object = {  saveUrl: 'saveUrl',chunkSize: 50000   }; |
| Retry the upload automatically when it's get failed | Not Applicable | **Property:** asyncSettings.retryCount,         asyncSettings.retryAfterDelay<br/> `<ejs-uploader [asyncSettings]='path'></ejs-uploader>`<br/>  **TS:**<br/> public path: Object = {  saveUrl: 'saveUrl',chunkSize: 50000,retryCount: 3,retryAfterDelay: 1000}; |
| Pause the uploading file | Not Applicable | **Method:** pause<br/> `<ejs-uploader #defaultupload></ejs-uploader>`<br/>  **TS:**<br/> @ViewChild('defaultupload') public uploadObj: UploaderComponent;   uploadObj.pause(filesData); |
| Event triggers when pausing the file | Not Applicable | **Event:** pausing<br/> `<ejs-uploader (pausing)='pausingUpload($event)'></ejs-uploader>`<br/>  **TS:**<br/> public pausingUpload: EmitType<Object>= () => { }; |
| Resuming the paused file | Not Applicable | **Method:** resume<br/> `<ejs-uploader #defaultupload></ejs-uploader>`<br/>  **TS:**<br/> @ViewChild('defaultupload')    public uploadObj: UploaderComponent;   uploadObj.resume(filesData); |
| Event triggers when resuming the file | Not Applicable | **Event:** resuming<br/> `<ejs-uploader (resuming)='resumingUpload($event)'></ejs-uploader>`<br/>  **TS:**<br/> public resumingUpload: EmitType<Object>= () => { }; |
| Retry the failed file | Not Applicable | **Method:** retry<br/> `<ejs-uploader #defaultupload></ejs-uploader>`<br/>  **TS:** <br/>@ViewChild('defaultupload')    public uploadObj: UploaderComponent;uploadObj.retry(filesData); |
| Cancel the failed file | Not Applicable | **Method:** cancel<br/> `<ejs-uploader #defaultupload></ejs-uploader>`<br/>  **TS:**<br/> @ViewChild('defaultupload')    public uploadObj: UploaderComponent;   uploadObj.cancel(filesData); |
| Event triggers when cancel the file | Not Applicable | **Event:** canceling<br/> `<ejs-uploader (canceling)='cancelingUpload($event)'></ejs-uploader>`<br/>  **TS:**<br/> public cancelingUpload: EmitType<Object>= () => { }; |
| Event triggers when chunk file fails | Not Applicable | **Event:** chunkFailure<br/> `<ejs-uploader (chunkFailure)='onChunkFailure($event)'></ejs-uploader>`<br/>  **TS:**<br/> public onChunkFailure: EmitType<Object>= () => { }; |
| Event triggers when chunk file success | Not Applicable | **Event:** chunkSuccess<br/> `<ejs-uploader (chunkSuccess)='onChunkSuccess($event)'></ejs-uploader>`<br/>  **TS:**<br/> public onChunkSuccess: EmitType<Object>= () => { }; |

## Remove action

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Remove the uploaded file | Not Applicable | **Method:** remove<br/> `<ejs-uploader #defaultupload></ejs-uploader>`<br/>  **TS:**<br/> @ViewChild('defaultupload')    public uploadObj: UploaderComponent;   uploadObj.remove(filesData); |
| Event triggers when the file removing succeed | **Event:** remove<br/> `<ej-uploadbox (remove)='onRemove($event)'></ej-uploadbox>`<br/>  **TS:**<br/> public onRemove: any= () => { }; | **Event:** success<br/> `<ejs-uploader (success)='onSuccess($event)'></ejs-uploader>`<br/>  **TS:**<br/> public onSuccess: EmitType<Object>= () => { }; |
| Event triggers when the file removing fails | **Not Applicable** | **Event:** failure<br/> `<ejs-uploader (failure)='onFailure($event)'></ejs-uploader>`<br/>  **TS:**<br/> public onFailure: EmitType<Object>= () => { }; |

## Buttons

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Customize button text | **Property** : buttonText<br/> `<ej-uploadbox buttonText.browse]='browse' [buttonText.upload]='upload' [buttonText.cancel]='cancel'></ej-uploadbox>`<br/>  **TS:**<br/>  public browse: string = 'Choose File';   public upload: string = 'Upload File';  public cancel: string = 'Cancel Upload'; | **Property** : buttons<br/> `<ejs-uploader [buttons]='buttons'></ejs-uploader>`<br/>  **TS:**<br/>  public buttons: object { browse: 'Choose File', clear: 'Clear files', upload: 'upload Files' } |

## Drag and Drop

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS  1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | --------------------------------| ------------------------------ |
| Enable drag and drop upload | **Property** : allowDragAndDrop<br/> `<ej-uploadbox [allowDragAndDrop]='true'></ej-uploadbox>` | No separate Property to disabling drag and drop |
| Set custom drop area | **Not Applicable** | **Property** :  dropArea<br/> `<ejs-uploader [dropArea]=' dropElement'></ejs-uploader>`  |

## Common

<!-- markdownlint-disable MD033 -->

| **Behavior** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **Property in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Adding custom class to wrapper element | **Property** : cssClass<br/> `<ej-uploadbox cssClass='Custom-Class'></ej-uploadbox>` | Not Applicable |
| Enable/Disable the control | **Property** : enabled<br/> `<ej-uploadbox id='uploadBox' [enabled]='false'></ej-uploadbox>`  **Method** : enable(), disable()<br/> $('#uploadBox').ejUploadbox('enable');   $('#uploadBox').ejUploadbox('disable');   | **Property:** enabled<br/> `<ejs-uploader [enabled]='false'></ejs-uploader>` |
| Set height for uploader | **Property:** height<br/> `<ej-uploadbox id='uploadBox'  height='100%'></ej-uploadbox>`  | **Not Applicable** |
| Set width for uploader | **Property:** width<br/> `<ej-uploadbox id='uploadBox'  width='100%'></ej-uploadbox>`  | **Not Applicable** |
| Adding HTML attributes | **Property:** htmlAttributes<br/> `<ej-uploadbox id='uploadBox'  [htmlAttributes]='htmlAttribute'></ej-uploadbox>`<br/>  **TS:**<br/> public htmlAttribute: object = { 'aria-label': 'UploadBox'} | **Not Applicable** |
| Event triggers when control created successfully | **Event:** create<br/> `<ej-uploadbox (create)= 'onCreate($event)'></ej-uploadbox>`<br/>  **TS:**<br/> public onCreate: any= () => { }; | **Event:** created<br/> `<ejs-uploader (created)='onCreated($event)'></ejs-uploader>`<br/>  **TS:**<br/> public onCreated: EmitType<Object>= () => { }; |
| Event triggers when destroy the control | **Event:** destroy<br/> `<ej-uploadbox (destroy)= 'onDestroy($event)'></ej-uploadbox>`<br/>  **TS:**<br/> public onDestroy: any= () => { };  | **Not Applicable** |
| Keeping the model values in cookies | **Property:** enablePersistence<br/> `<ej-uploadbox id='uploadBox'  [enablePersistence]='true'></ej-uploadbox>`  | **Property:** enablePersistence<br/> `<ejs-uploader [enablePersistence]='true'></ejs-uploader>` |
| Get the selected files data | **Not Applicable** | **Method:** getFilesData<br/> `<ejs-uploader #defaultupload></ejs-uploader>`<br/>  **TS:**<br/> @ViewChild('defaultupload')  public uploadObj: UploaderComponent;  uploadObj.getFilesData();  |
| Convert bytes in to MB, GB | **Not Applicable** | **Method:** bytesToSize<br/> `<ejs-uploader #defaultupload></ejs-uploader>`<br/>  **TS:**<br/> @ViewChild('defaultupload')  public uploadObj: UploaderComponent;    uploadObj.bytesToSize(5000); |