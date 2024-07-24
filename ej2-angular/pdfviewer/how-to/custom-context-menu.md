---
layout: post
title: Customize context menu in Angular Pdfviewer component | Syncfusion
description: Learn here all about Customize context menu in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu

PDF Viewer allows you to add custom option in context menu. It can be achieved by using the [addCustomMenu()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#addcustommenu) method and custom action is defined using the [customContextMenuSelect()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#customcontextmenuselect) method.

### Add Custom Option

The following code shows how to add custom option in context menu.

```ts
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
      // ngOnInit function
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search'
    },
    {
      text: 'Lock Annotation',
      iconCss: 'e-icons e-lock',
      id: 'lock_annotation'
    },
    {
      text: 'Unlock Annotation',
      iconCss: 'e-icons e-unlock',
      id: 'unlock_annotation'
    },
    {
      text: 'Lock Form Fields',
      iconCss: 'e-icons e-lock',
      id: 'read_only_true'
    },
    {
      text: 'Unlock Form Fields',
      iconCss: 'e-icons e-unlock',
      id: 'read_only_false'
    },
  ]
  public documentLoaded(e: any): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfViewer.addCustomMenu(this.menuItems, false, false);
  }

```

### Customize custom option in context menu

The PDF Viewer feature enables customization of custom options and the ability to toggle the display of the default context menu. When the addCustomMenu parameter is set to `true`, the default menu is hidden; conversely, when it is set to `false`, the default menu items are displayed.

```js
  public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
      // ngOnInit function
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search'
    },
    {
      text: 'Lock Annotation',
      iconCss: 'e-icons e-lock',
      id: 'lock_annotation'
    },
    {
      text: 'Unlock Annotation',
      iconCss: 'e-icons e-unlock',
      id: 'unlock_annotation'
    },
    {
      text: 'Lock Form Fields',
      iconCss: 'e-icons e-lock',
      id: 'read_only_true'
    },
    {
      text: 'Unlock Form Fields',
      iconCss: 'e-icons e-unlock',
      id: 'read_only_false'
    },
  ]
  public documentLoaded(e: any): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfViewer.addCustomMenu(this.menuItems, false, false);
  }
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the [customContextMenuBeforeOpen()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#customcontextmenubeforeopen) method.

```js
export class CustomContextMenuComponent implements OnInit {
  public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resource: string = 'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib';
  ;
  ngOnInit(): void {
  }
  public menuItems: MenuItemModel[] = [
    {
      text: 'Search In Google',
      id: 'search_in_google',
      iconCss: 'e-icons e-search'
    },
    {
      text: 'Lock Annotation',
      iconCss: 'e-icons e-lock',
      id: 'lock_annotation'
    },
    {
      text: 'Unlock Annotation',
      iconCss: 'e-icons e-unlock',
      id: 'unlock_annotation'
    },
    {
      text: 'Lock Form Fields',
      iconCss: 'e-icons e-lock',
      id: 'read_only_true'
    },
    {
      text: 'Unlock Form Fields',
      iconCss: 'e-icons e-unlock',
      id: 'read_only_false'
    },
  ]
  public documentLoaded(e: any): void {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    pdfViewer.addCustomMenu(this.menuItems, false, false);
  }

  public customContextMenuSelect = (e: any): void => {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    switch (e.id) {
      case 'search_in_google':
        for (var i = 0; i < pdfViewer.textSelectionModule.selectionRangeArray.length; i++) {
          var content = pdfViewer.textSelectionModule.selectionRangeArray[i].textContent;
          if ((pdfViewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
            window.open('http://google.com/search?q=' + content);
          }
        }
        break;
      case 'lock_annotation':
        this.lockAnnotations(e);
        break;
      case 'unlock_annotation':
        this.unlockAnnotations(e);
        break;
      case 'read_only_true':
        this.setReadOnlyTrue(e);
        break;
      case 'read_only_false':
        this.setReadOnlyFalse(e);
        break;
      case 'formfield properties':
        break;
      default:
        break;
    }
  }

  public customContextMenuBeforeOpen = (e: any): void => {
    var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (var i = 0; i < e.ids.length; i++) {
      var search = document.getElementById(e.ids[i]);
      if (search) {
        search.style.display = 'none';
        if (e.ids[i] === 'search_in_google' && (pdfViewer.textSelectionModule) && pdfViewer.textSelectionModule.isTextSelection) {
          search.style.display = 'block';
        } else if (e.ids[i] === "lock_annotation" || e.ids[i] === "unlock_annotation") {
          var isLockOption = e.ids[i] === "lock_annotation";
          for (var j = 0; j < pdfViewer.selectedItems.annotations.length; j++) {
            var selectedAnnotation: any = pdfViewer.selectedItems.annotations[j];
            if (selectedAnnotation && selectedAnnotation.annotationSettings) {
              var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
              search.style.display = shouldDisplay ? 'block' : 'none';
            }
          }
        } else if ((e.ids[i] === "read_only_true" || e.ids[i] === "read_only_false") && pdfViewer.selectedItems.formFields.length !== 0) {
          var isReadOnlyOption = e.ids[i] === "read_only_true";
          for (var j = 0; j < pdfViewer.selectedItems.formFields.length; j++) {
            var selectedFormFields = pdfViewer.selectedItems.formFields[j];
            if (selectedFormFields) {
              var selectedFormField = pdfViewer.selectedItems.formFields[j].isReadonly;
              var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
              search.style.display = displayMenu ? 'block' : 'none';
            }
          }
        } else if (e.ids[i] === 'formfield properties' && pdfViewer.selectedItems.formFields.length !== 0) {
          search.style.display = 'block';
        }
      }
    }
  }

}
```
The following is the output of custom context menu with customization. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/custom-context-menu/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/custom-context-menu/src/main.ts %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**, 
Add the below serviceUrl in the `app.component.ts` file 
`public service: string = 'https://services.syncfusion.com/angular/production/api/pdfviewer'`;
Within the template, configure the PDF Viewer by adding the `[serviceUrl]='service'` attribute inside the div element.

{% previewsample "page.domainurl/samples/pdfviewer/custom-context-menu" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Custom%20Context%20Menu)