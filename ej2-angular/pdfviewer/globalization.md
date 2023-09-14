---
layout: post
title: Globalization in Angular Pdfviewer component | Syncfusion
description: Learn here all about Globalization in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Globalization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular PDF Viewer component

The text contents provided in the PDF Viewer can be localized using the collection of localized strings for different cultures. By default, the PDF Viewer is localized in “__en-US__”.

The following table shows the default text values used in PDF Viewer in 'en-US' culture:

|Keywords|Values|
|---|---|
|PdfViewer|PDF Viewer|
|Cancel|Cancel|
|Download file|Download file|
|Download|Download|
|Enter Password|This document is password protected. Please enter a password.|
|File Corrupted|File corrupted|
|File Corrupted Content|The file is corrupted and cannot be opened.|
|Fit Page|Fit page|
|Fit Width|Fit width|
|Automatic|Automatic|
|Go To First Page|Show first page|
|Invalid Password|Incorrect password. Please try again.|
|Next Page|Show next page|
|OK|OK|
|Open|Open file|
|Page Number|Current page number|
|Previous Page|Show previous page|
|Go To Last Page|Show last page|
|Zoom|Zoom|
|Zoom In|Zoom in|
|Zoom Out|Zoom out|
|Page Thumbnails|Page thumbnails|
|Bookmarks|Bookmarks|
|Print|Print file
|Password Protected|Password required|
|Copy|Copy|
|Text Selection|Text selection tool|
|Panning|Pan mode|
|Text Search|Find text|
|Find in document|Find in document|
|Match case|Match case|
|Apply|Apply|
|GoToPage|Go to page|
|No matches|Viewer has finished searching the document. No more matches were found|
|No Text Found|No Text Found|
|Undo|Undo|
|Redo|Redo|
|Annotation|Add or Edit annotations|
|Highlight|Highlight Text|
|Underline|Underline Text|
|Strikethrough|Strikethrough Text|
|Delete|Delete annotation|
|Opacity|Opacity|
|Color edit|Change Color|
|Opacity edit|Change Opacity|
|Highlight context|Highlight|
|Underline context|Underline|
|Strikethrough context|Strike through|
|Server error|Web-service is not listening. PDF Viewer depends on web-service for all it's features. Please start the web service to continue.|
|Open text|Open|
|First text|First Page|
|Previous text|Previous Page|
|Next text|Next Page|
|Last text|Last Page|
|Zoom in text|Zoom In|
|Zoom out text|Zoom Out|
|Selection text|Selection|
|Pan text|Pan|
|Print text|Print|
|Search text|Search|
|Annotation Edit text|Edit Annotation|

The different locale value for the PDF Viewer can be specified using the locale property.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
```typescript

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                      locale='ar-AE'
                      [documentPath]='document'
                      style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }
```
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
```typescript

import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
              <ejs-pdfviewer id="pdfViewer"
                      [serviceUrl]='service'
                      locale='ar-AE'
                      [documentPath]='document'
                      style="height:640px;display:block">
              </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
  })
  export class AppComponent implements OnInit {
    public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
    public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  }

```
{% endhighlight %}
{% endtabs %}

You have to map the text content based on locale like following script in sample level.,

```html
<script>
    ej.base.L10n.load({
                'ar-AE': {
                    'PdfViewer': {
                        'PdfViewer': 'قوات الدفاع الشعبي المشاهد',
                        'Cancel': 'إلغاء',
                        'Download file': 'تحميل الملف',
                        'Download': 'تحميل',
                        'Enter Password': 'هذا المستند محمي بكلمة مرور. يرجى إدخال كلمة مرور.',
                        'File Corrupted': 'ملف تالف',
                        'File Corrupted Content': 'الملف تالف ولا يمكن فتحه.',
                        'Fit Page': 'لائق بدنيا الصفحة',
                        'Fit Width': 'لائق بدنيا عرض',
                        'Automatic': 'تلقائي',
                        'Go To First Page': 'عرض الصفحة الأولى',
                        'Invalid Password': 'كلمة سر خاطئة. حاول مرة اخرى.',
                        'Next Page': 'عرض الصفحة التالية',
                        'OK': 'حسنا',
                        'Open': 'فتح الملف',
                        'Page Number': 'رقم الصفحة الحالية',
                        'Previous Page': 'عرض الصفحة السابقة',
                        'Go To Last Page': 'عرض الصفحة الأخيرة',
                        'Zoom': 'تكبير',
                        'Zoom In': 'تكبير في',
                        'Zoom Out': 'تكبير خارج',
                        'Page Thumbnails': 'مصغرات الصفحة',
                        'Bookmarks': 'المرجعية',
                        'Print': 'اطبع الملف',
                        'Password Protected': 'كلمة المرور مطلوبة',
                        'Copy': 'نسخ',
                        'Text Selection': 'أداة اختيار النص',
                        'Panning': 'وضع عموم',
                        'Text Search': 'بحث عن نص',
                        'Find in document': 'ابحث في المستند',
                        'Match case': 'حالة مباراة',
                        'Apply': 'تطبيق',
                        'GoToPage': 'انتقل إلى صفحة',
                        // tslint:disable-next-line:max-line-length
                        'No matches': 'انتهى العارض من البحث في المستند. لم يتم العثور على مزيد من التطابقات',
                        'No Text Found': 'لم يتم العثور على نص',
                        'Undo' : 'فك',
                        'Redo' : 'فعل ثانية',
                        'Annotation': 'إضافة أو تعديل التعليقات التوضيحية',
                        'Highlight': 'تسليط الضوء على النص',
                        'Underline': 'تسطير النص',
                        'Strikethrough': 'نص يتوسطه خط',
                        'Delete': 'حذف التعليق التوضيحي',
                        'Opacity': 'غموض',
                        'Color edit': 'غير اللون',
                        'Opacity edit': 'تغيير التعتيم',
                        'Highlight context': 'تسليط الضوء',
                        'Underline context': 'أكد',
                        'Strikethrough context': 'يتوسطه',
                        // tslint:disable-next-line:max-line-length
                        'Server error': 'خدمة الانترنت لا يستمع. يعتمد قوات الدفاع الشعبي المشاهد على خدمة الويب لجميع ميزاته. يرجى بدء خدمة الويب للمتابعة.'
                        'Open text': 'افتح',
                        'First text': 'الصفحة الأولى',
                        'Previous text': 'الصفحة السابقة',
                        'Next text': 'الصفحة التالية',
                        'Last text': 'آخر صفحة',
                        'Zoom in text': 'تكبير',
                        'Zoom out text': 'تصغير',
                        'Selection text': 'اختيار',
                        'Pan text': 'مقلاة',
                        'Print text': 'طباعة',
                        'Search text': 'بحث',
                        'Annotation Edit text': 'تحرير التعليق التوضيحي'
                    }
                }
            });
</script>
```
