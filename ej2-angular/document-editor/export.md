---
layout: post
title: Export in Angular Document editor component | Syncfusion
description: Learn here all about Export in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export 
documentation: ug
domainurl: ##DomainURL##
---

# Export in Angular Document editor component

Document Editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**.

We are providing two types of save APIs  as mentioned below.

|API name|Purpose|
|--------|---------|
|save(filename,FormatType):void<br>FormatType: Sfdt or Docx or Txt|Creates the document with specified file name and format type. Then, the created file is downloaded in the client browser by default.|
|saveAsBlob(FormatType):Blob|Creates the document in specified format type and returns the created document as Blob.<br>This blob can be uploaded to your required server, database, or file path.|

## SFDT export

The following example shows how to export documents in document editor as Syncfusion<sup style="font-size:70%">&reg;</sup> document text (.sfdt).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/export-cs1" %}

## Word export

The following example shows how to export the document as Word document (.docx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](../document-editor/import#why-the-document-pagination-differs-from-microsoft-word)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/export-cs2" %}

## Template export

The following example shows how to export the document as Word Template (.dotx).

>Note: The Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word] (../document-editor/import/#why-the-document-pagination-differs-from-microsoft-word)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/export-cs4" %}

## Text export

The following example shows how to export document as text document (.txt).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/export-cs3" %}

## Export as blob

Document Editor also supports API to store the document into a blob. Refer to the following sample to export document into blob in client-side.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, SfdtExportService, WordExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div><button ejs-button (click)="saveAsBlob()" >Save</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableEditor]=true [enableWordExport]=true [enableSfdtExport]=true> </ejs-documenteditor></div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [EditorService, SelectionService, SfdtExportService, TextExportService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public saveAsBlob(): void {
        //Export the document as Blob object.
        this.documentEditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
            // The blob can be processed further
        });
    }
}
```

For instance, to export the document as Rich Text Format file, implement an ASP.NET MVC web API controller using DocIO library by passing the DOCX blob. Refer to the following code example.

```csharp
  //API controller for the conversion.
  [HttpPost]
  public HttpResponseMessage ExportAsRtf()
  {
        System.Web.HttpPostedFile data = HttpContext.Current.Request.Files[0];
        //Opens document stream
        WordDocument wordDocument = new WordDocument(data.InputStream);
        MemoryStream stream = new MemoryStream();
        //Converts document stream as RTF
        wordDocument.Save(stream, FormatType.Rtf);
        wordDocument.Close();
        stream.Position = 0;
        return new HttpResponseMessage() { Content = new StreamContent(stream) };
  }
```

In client-side, you can consume this web service and save the document as Rich Text Format (.rtf) file. Refer to the following example.

```typescript
public saveAsBlob() :void {
    this.documentEditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
          // The blob can be processed further
          let formData: FormData = new FormData();
          formData.append('fileName', 'sample.docx');
          formData.append('data', exportedDocument);
          saveAsRtf(formData);
    });
}

function saveAsRtf(formData: FormData): void {
    let httpRequest: XMLHttpRequest = new XMLHttpRequest();
    httpRequest.open('POST', '/api/DocumentEditor/ExportAsRtf', true);
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200 || httpRequest.status === 304) {
                if (!(!navigator.msSaveBlob)) {
                    navigator.msSaveBlob(httpRequest.response, 'sample.rtf');
                } else {
                    let downloadLink: HTMLAnchorElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement;
                    download('sample.rtf', 'rtf', httpRequest.response, downloadLink, 'download' in downloadLink);
                }
            } else {
                console.error(httpRequest.response);
            }
        }
    }
    httpRequest.responseType = 'blob';
    httpRequest.send(formData);
}

function download(fileName: string, extension: string, buffer: Blob, downloadLink: HTMLAnchorElement, hasDownloadAttribute: Boolean): void {
    if (hasDownloadAttribute) {
        downloadLink.download = fileName;
        let dataUrl: string = window.URL.createObjectURL(buffer);
        downloadLink.href = dataUrl;
        let event: MouseEvent = document.createEvent('MouseEvent');
        event.initEvent('click', true, true);
        downloadLink.dispatchEvent(event);
        setTimeout((): void => {
            window.URL.revokeObjectURL(dataUrl);
            dataUrl = undefined;
        });
    } else {
        if (extension !== 'docx' && extension !== 'xlsx') {
            let url: string = window.URL.createObjectURL(buffer);
            let isPopupBlocked: Window = window.open(url, '_blank');
            if (!isPopupBlocked) {
                window.location.href = url;
            }
        }
    }
}
```

## See Also

* [Feature modules](../document-editor/feature-module)