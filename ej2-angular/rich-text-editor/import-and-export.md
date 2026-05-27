---
layout: post
title: Import and Export Content in Angular Rich Text Editor | Syncfusion
description: Learn how to import from Word and export content in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Import and Export
documentation: ug
domainurl: ##DomainURL##
---

# Import and Export Content in Angular Rich Text Editor

## Importing content from Microsoft Word

The Rich Text Editor provides functionality to import content directly from Microsoft Word documents, preserving the original formatting and structure. This feature ensures a smooth transition of content from Word to the editor, maintaining elements such as headings, lists, tables, and text styles.

To integrate an `ImportWord` option into the Rich Text Editor toolbar, you can add it as a custom toolbar [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings#items) using the items property in toolbarSettings.

The following example shows how to configure `ImportWord`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/import-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/import-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/import-cs1" %}

## Secure importing with authentication

The Rich Text Editor provides functionality to import Word documents with authentication for secure importing.

The [wordImporting](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#wordimporting) event provides [UploadingEventArgs](https://ej2.syncfusion.com/angular/documentation/api/uploader/uploadingeventargs) for secure Word file import. Use `currentRequest` to add authentication headers and `customFormData` to include extra parameters in the POST body along with the uploaded file. On the server, read headers and form data from the request to validate and process the import securely.

The following example demonstrates how to configure `wordImporting` for secure importing:

```typescript

import { Component } from '@angular/core';
import { ToolbarService, QuickToolbarService, LinkService, HtmlEditorService, ImageService,} from '@syncfusion/ej2-angular-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  template: `<ejs-richtexteditor id='editor' [toolbarSettings]='toolbarSettings' [importWord]='importWord' [wordImporting]='onWordImport'>
    </ejs-richtexteditor>`,
  providers: [ ToolbarService, QuickToolbarService, LinkService, ImageService, HtmlEditorService ],
})

export class AppComponent {
 private hostUrl: string = 'https://services.syncfusion.com/angular/production/';
  public toolbarSettings: object = {
    items: ['ImportWord'],
  };
  public importWord: ImportWordModel = {
        serviceUrl: this.hostUrl + 'api/RichTextEditor/ImportFromWord',
  };
  public onWordImport = (args: UploadingEventArgs) => {
    let accessToken = "Authorization_token";
    // adding authorization header
    args.currentRequest.setRequestHeader('Authorization', accessToken)
    // adding custom form Data
    args.customFormData = [{'userId': '1234'}];
  };
}

```

Here’s how to handle the server-side action for importing content from Word with authentication.

```csharp

public class RichTextEditorController : Controller
    
    {       
        public IWebHostEnvironment _webHostEnvironment;

        [AcceptVerbs("Post")]
        [EnableCors("AllowAllOrigins")]
        [Route("ImportFromWord")]
        public IActionResult ImportFromWord(IList<IFormFile> UploadFiles)
        {
            // Read headers (e.g., Authorization)
            var authorization = Request.Headers["Authorization"].ToString();
            // Read custom form data (from args.customFormData)
            var formData = Request.Form("userId").ToString();
            string HtmlString = string.Empty;
            if (UploadFiles != null)
            {
                foreach (var file in UploadFiles)
                {
                    string filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    filename = _webHostEnvironment.WebRootPath + $@"\{filename}";
                    using (FileStream fs = System.IO.File.Create(filename))
                    {
                        file.CopyTo(fs);
                        fs.Flush();
                    }
                    using (var mStream = new MemoryStream())
                    {
                        WordDocument document = new WordDocument(file.OpenReadStream(), FormatType.Rtf);
                        document.SaveOptions.HTMLExportWithWordCompatibility = false;
                        document.Save(mStream, FormatType.Html);
                        mStream.Position = 0;
                        HtmlString = new StreamReader(mStream).ReadToEnd();
                    };
                    HtmlString = ExtractBodyContent(HtmlString);
                    HtmlString = SanitizeHtml(HtmlString);
                    System.IO.File.Delete(filename);
                }
                return Ok(HtmlString);
            }
            else
            {
                Response.Clear();
                // Return an appropriate status code or message
                return BadRequest("No files were uploaded.");
            }
        }

        private string ExtractBodyContent(string html)
        {
            if (html.Contains("<html") && html.Contains("<body"))
            {
                return html.Remove(0, html.IndexOf("<body>") + 6).Replace("</body></html>", "");
            }
            return html;
        }

        private string SanitizeHtml(string html)
        {
            // Regex pattern to match non-ASCII or control characters: [^\x20-\x7E]
            return Regex.Replace(html, @"[^\x20-\x7E]", " ");
        }
    }    

```

## Exporting content to PDF and Microsoft Word

The Rich Text Editor's export functionality allows users to convert their edited content into PDF or Word documents with a single click, preserving all text styles, images, tables, and other formatting elements.

You can add `ExportWord` and `ExportPdf` tools to the Rich Text Editor toolbar using the [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings#items) property.

The following example demonstrates how to configure the `ExportWord` and `ExportPdf` tools in the Rich Text Editor, facilitating the export of content into Word or PDF documents:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/export-cs1" %}

## Secure exporting with authentication

The Rich Text Editor provides functionality to export Word or PDF documents with authentication for secure exporting.

The [documentExporting](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#documentexporting) event provides `ExportingEventArgs` for secure export of Word or PDF files. Use `exportType` to identify the format, `currentRequest` to add authentication headers, and `customFormData` to send extra parameters in the POST body. On the server, read headers and custom data to validate and process the export securely.

The following example demonstrates how to configure `documentExporting` for secure exporting:

```typescript

import { Component } from '@angular/core';
import { ToolbarService, QuickToolbarService, LinkService, HtmlEditorService, ImageService,} from '@syncfusion/ej2-angular-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  template: `<ejs-richtexteditor id='editor' [toolbarSettings]='toolbarSettings' [exportWord]='exportWord' [exportPdf]='exportPdf'[documentExporting]='onDocumentExporting'>
  </ejs-richtexteditor>`,
  providers: [ ToolbarService, QuickToolbarService, LinkService, ImageService, HtmlEditorService ],
})

export class AppComponent {
 private hostUrl: string = 'https://services.syncfusion.com/angular/production/';
  public toolbarSettings: object = {
    items: ['ExportWord', 'ExportPdf'],
  };
  public exportWord: ExportWordModel = {
    serviceUrl: this.hostUrl + 'api/RichTextEditor/ExportToDocx',
    fileName: 'RichTextEditor.docx',
    stylesheet: `
    .e-rte-content {
        font-size: 1em;
        font-weight: 400;
        margin: 0;
    }`
  };
  public exportPdf: ExportPdfModel = {
    serviceUrl: this.hostUrl + 'api/RichTextEditor/ExportToPdf',
    fileName: 'RichTextEditor.pdf',
    stylesheet: `
    .e-rte-content{
        font-size: 1em;
        font-weight: 400;
        margin: 0;
    }`
  };
  
 public onDocumentExporting = (args: ExportingEventArgs) => {
   const accessToken = "Authorization_token";
  // Specify export type (e.g., 'Pdf' or 'Word')
   args.exportType = 'Pdf';
  // Add authentication header
   args.currentRequest = [{ Authorization: accessToken }];
  // Add custom form data
   args.customFormData = [{ userId: '1234' }, { exportMode: 'secure' }];
 };
}

```

Here’s how to handle the server-side action for exporting content to PDF and Microsoft Word with authentication

```csharp

public class RichTextEditorController : Controller
    
    {       
        public IWebHostEnvironment _webHostEnvironment;

        [AcceptVerbs("Post")]
        [EnableCors("AllowAllOrigins")]
        [Route("ExportToPdf")]
        public ActionResult ExportToPdf([FromBody] ExportParam args)
        {
            // Read headers (e.g., Authorization)
            var authorization = Request.Headers["Authorization"].ToString();
            // Read custom form data (from args.customFormData)
            var formData = args.CustomFormData;
            string htmlString = args.html;
            if (htmlString == null && htmlString == "")
            {
                return null;
            }
            using (WordDocument wordDocument = new WordDocument())
            {
                //This method adds a section and a paragraph in the document
                wordDocument.EnsureMinimal();
                wordDocument.HTMLImportSettings.ImageNodeVisited += OpenImage;
                //Append the HTML string to the paragraph.
                wordDocument.LastParagraph.AppendHTML(htmlString);
                DocIORenderer render = new DocIORenderer();
                //Converts Word document into PDF document
                PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
                wordDocument.HTMLImportSettings.ImageNodeVisited -= OpenImage;
                MemoryStream stream = new MemoryStream();
                pdfDocument.Save(stream);
                return File(stream.ToArray(), System.Net.Mime.MediaTypeNames.Application.Pdf, "Sample.pdf");
            }
        }

        [AcceptVerbs("Post")]
        [EnableCors("AllowAllOrigins")]
        [Route("ExportToDocx")]
        public FileStreamResult ExportToDocx([FromBody] ExportParam args)
        {
            string htmlString = args.html;
            if (htmlString == null && htmlString == "")
            {
                return null;
            }
            using (WordDocument document = new WordDocument())
            {
                document.EnsureMinimal();
                //Hooks the ImageNodeVisited event to open the image from a specific location
                document.HTMLImportSettings.ImageNodeVisited += OpenImage;
                //Validates the Html string
                bool isValidHtml = document.LastSection.Body.IsValidXHTML(htmlString, XHTMLValidationType.None);
                //When the Html string passes validation, it is inserted to the document
                if (isValidHtml)
                {
                    //Appends the Html string to first paragraph in the document
                    document.Sections[0].Body.Paragraphs[0].AppendHTML(htmlString);
                }
                //Unhooks the ImageNodeVisited event after loading HTML
                document.HTMLImportSettings.ImageNodeVisited -= OpenImage;
                //Creates file stream.
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);
                stream.Position = 0;
                //Download Word document in the browser
                return File(stream, "application/msword", "Result.docx");
            }
        }

        private static void OpenImage(object sender, ImageNodeVisitedEventArgs args)
        {
            if (args.Uri.StartsWith("https://"))
            {
#pragma warning disable SYSLIB0014 // Type or member is obsolete
                WebClient client = new WebClient();
#pragma warning restore SYSLIB0014 // Type or member is obsolete
                                  //Download the image as a stream.
                byte[] image = client.DownloadData(args.Uri);
                Stream stream = new MemoryStream(image);
                //Set the retrieved image from the input Markdown.
                args.ImageStream = stream;
            }
        }

        public class ExportParam
        {
            public string html { get; set; }
            // For receiving custom form data
            public List<Dictionary<string,string>> CustomFormData { get; set; }
        }
    }    

```

### Exporting Rich Text Editor content to PDF or Word using external tools

By default, when exporting content from the Angular Rich Text Editor to generate PDF or Word documents using external tools (instead of Syncfusion’s built-in export services), the editor’s internal styles are not included in the retrieved HTML. This can lead to formatting inconsistencies in the final output.

To preserve the intended appearance of the content, you should manually apply the following CSS styles to the exported HTML container.

> Make sure to add a CSS class `e-rte-content` to the content container.

```CSS

.e-rte-content {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
}

html {
    height: auto;
    margin: 0;
}

body {
    margin: 0;
    color: #333;
    word-wrap: break-word;
}

.e-content {
    min-height: 100px;
    outline: 0 solid transparent;
    padding: 16px;
    position: relative;
    overflow-x: auto;
    font-weight: normal;
    line-height: 1.5;
    font-size: 14px;
    text-align: inherit;
    font-family: \"Roboto\", \"Segoe UI\", \"GeezaPro\", \"DejaVu Serif\", \"sans-serif\", \"-apple-system\", \"BlinkMacSystemFont\";
}

p {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
}

h1 {
    font-size: 2.857em;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
}

h2 {
    font-size: 2.285em;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
}

h3 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
}

h4 {
    font-size: 1.714em;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
}

h5 {
    font-size: 1.428em;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
}

h6 {
    font-size: 1.142em;
    font-weight: 600;
    line-height: 1.5;
    margin-top: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
}

blockquote {
    margin-top: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
    padding-left: 12px;
    border-left: 2px solid #5c5c5c;
}

pre {
    border: 0;
    border-radius: 0;
    color: #333;
    font-size: inherit;
    line-height: inherit;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;
    overflow: visible;
    padding: 0;
    white-space: pre-wrap;
    word-break: inherit;
    word-wrap: break-word;
}

code {
    background-color: #9d9d9d26;
    color: #ed484c;
}

strong {
    font-weight: bold;
}

b {
    font-weight: bold;
}

a {
    text-decoration: none;
    user-select: auto;
}

li {
    margin-bottom: 10px;
}

li ol {
    margin-block-start: 10px;
}

li ul {
    margin-block-start: 10px;
}

ul {
    list-style-type: disc;
}

ul ul {
    list-style-type: circle;
}

ol ul {
    list-style-type: circle;
}

ul ul ul {
    list-style-type: square;
}

ol ul ul {
    list-style-type: square;
}

ul ol ul {
    list-style-type: square;
}

ol ol ul {
    list-style-type: square;
}

table {
    margin-bottom: 10px;
    border-collapse: collapse;
}

th {
    background-color: rgba(157, 157, 157, .15);
    border: 1px solid #BDBDBD;
    height: 20px;
    min-width: 20px;
    padding: 2px 5px;
}

td {
    border: 1px solid #BDBDBD;
    height: 20px;
    min-width: 20px;
    padding: 2px 5px;
}

.e-rte-image {
    border: 0;
    cursor: pointer;
    display: block;
    float: none;
    margin: auto;
    max-width: 100%;
    position: relative;
}

.e-rte-audio {
    border: 0;
    cursor: pointer;
    display: block;
    float: none;
    margin: auto;
    max-width: 100%;
    position: relative;
}

.e-rte-video {
    border: 0;
    cursor: pointer;
    display: block;
    float: none;
    margin: auto;
    max-width: 100%;
    position: relative;
}

.e-imginline {
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    float: none;
    max-width: 100%;
    padding: 1px;
    vertical-align: bottom;
}

.e-audio-inline {
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    float: none;
    max-width: 100%;
    padding: 1px;
    vertical-align: bottom;
}

.e-video-inline {
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    float: none;
    max-width: 100%;
    padding: 1px;
    vertical-align: bottom;
}

.e-imgcenter {
    cursor: pointer;
    display: block;
    float: none;
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    max-width: 100%;
    position: relative;
}

.e-video-center {
    cursor: pointer;
    display: block;
    float: none;
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    max-width: 100%;
    position: relative;
}

.e-imgright {
    float: right;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    margin-left: 5px;
    text-align: right;
}

.e-video-right {
    float: right;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    margin-left: 5px;
    text-align: right;
}

.e-imgleft {
    float: left;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: 5px;
    text-align: left;
}

.e-video-left {
    float: left;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: 5px;
    text-align: left;
}

.e-rte-img-caption {
    display: inline-block;
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    max-width: 100%;
    position: relative;
}

.e-caption-inline {
    display: inline-block;
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    margin-left: 5px;
    margin-right: 5px;
    max-width: calc(100% - (2 * 5px));
    position: relative;
    text-align: center;
    vertical-align: bottom;
}

.e-img-wrap {
    display: inline-block;
    margin: auto;
    padding: 0;
    text-align: center;
    width: 100%;
}

.e-imgbreak {
    border: 0;
    cursor: pointer;
    display: block;
    float: none;
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    max-width: 100%;
    position: relative;
}

.e-audio-break {
    border: 0;
    cursor: pointer;
    display: block;
    float: none;
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    max-width: 100%;
    position: relative;
}

.e-video-break {
    border: 0;
    cursor: pointer;
    display: block;
    float: none;
    margin-top: 5px;
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
    max-width: 100%;
    position: relative;
}

```