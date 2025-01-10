---
layout: post
title: Managing File Attachments | Syncfusion
description: Learn here all about File attachments in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File attachments
documentation: ug
domainurl: ##DomainURL##
---

# Managing File Attachments in Angular Rich Text Editor Component

The Rich Text Editor allows you to attach a file based on the file upload. You can attach your files using the file upload or drag-and-drop from your local path. When the file upload gets success, the attachment link inserts into the content.

In the below sample, configure the saveUrl and path properties to achieve file attachments.

        1. saveUrl: Specifies the service URL where files will be saved.
        2. path: Defines the location where uploaded files will be stored.

The following sample illustrates how to attach a file in the Rich Text Editor.

```typescript

import { Component, ViewChild } from '@angular/core';
import { FileInfo, SuccessEventArgs, UploaderComponent, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { ContentRender, HTMLFormatter, RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, NodeSelection } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [
        RichTextEditorModule,
        UploaderModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' #sample [insertImageSettings]='insertImageSettings' [(value)]='value'></ejs-richtexteditor>
    <ejs-uploader #defaultupload id='defaultfileupload' [asyncSettings]='path' [dropArea]='dropElement' (success)='onImageUploadSuccess($event)'></ejs-uploader>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    @ViewChild('sample') public editorObj!: RichTextEditorComponent;
    @ViewChild('defaultupload') public uploadObj!: UploaderComponent;
    public value: string = "<p>The Rich Text Editor triggers events based on its actions. </p> <p> The events can be used as an extension point to perform custom operations.</p> <ul><li>created - Triggers when the component is rendered.</li><li>change - Triggers only when Rich Text Editor is blurred and changes are done to the content.</li><li>focus - Triggers when Rich Text Editor is focused in.</li><li>blur - Triggers when Rich Text Editor is focused out.</li><li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li><li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li><li>destroyed – Triggers when the component is destroyed.</li></ul>";
    public insertImageSettings: object = {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Save",
        path: "../Files/"
    };

    public path: Object = {
        saveUrl: '[SERVICE_HOSTED_PATH]/api/uploadbox/Save',
    };
    public dropElement = '#editor'
    public selection: NodeSelection = new NodeSelection();
    public range!: Range;
    public saveSelection!: NodeSelection;
    public onImageUploadSuccess = (args: SuccessEventArgs) => {
        ((this.editorObj!.contentModule as ContentRender).getEditPanel() as HTMLElement).focus();
        this.range = this.selection.getRange(document);
        this.saveSelection = this.selection.save(this.range, document);
        var fileUrl = document.URL + this.editorObj.insertImageSettings.path + (args.file as FileInfo).name;
        if ((this.editorObj!.formatter as HTMLFormatter).getUndoRedoStack().length === 0) {
            (this.editorObj!.formatter as HTMLFormatter).saveData();
        }
        this.saveSelection.restore();
        this.editorObj.executeCommand('createLink', { url: fileUrl, text: fileUrl, selection: this.saveSelection });
        (this.editorObj!.formatter as HTMLFormatter).saveData();
        (this.editorObj!.formatter as HTMLFormatter).enableUndo(this.editorObj);
        this.uploadObj.clearAll();
    }
}

```

To config server-side handler, refer the below code.

``` csharp
int x = 0;
string file;
 [AcceptVerbs("Post")]
        public void Save()
        {
            try
            {
                var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
                file = httpPostedFile.FileName;
                if (httpPostedFile != null)
                {
                    Console.WriteLine(System.Web.HttpContext.Current.Server.MapPath("~/Files"));
                    var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Files");
                    if (!Directory.Exists(fileSave))
                    {
                        Directory.CreateDirectory(fileSave);
                    }
                    var fileName = Path.GetFileName(httpPostedFile.FileName);
                    var fileSavePath = Path.Combine(fileSave, fileName);
                    while (System.IO.File.Exists(fileSavePath))
                    {
                        file = "rte" + x + "-" + fileName;
                        fileSavePath = Path.Combine(fileSave, file);
                        x++;
                    }
                    if (!System.IO.File.Exists(fileSavePath))
                    {
                        httpPostedFile.SaveAs(fileSavePath);
                        HttpResponse Response = System.Web.HttpContext.Current.Response;
                        Response.Clear();
                        Response.Headers.Add("name", file);
                        Response.ContentType = "application/json; charset=utf-8";
                        Response.StatusDescription = "File uploaded succesfully";
                        Response.Headers.Add("url", fileSavePath);
                        Response.End();
                    }
                }
            }
            catch (Exception e)
            {
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 204;
                Response.Status = "204 No Content";
                Response.StatusDescription = e.Message;
                Response.End();
            }
        }
```