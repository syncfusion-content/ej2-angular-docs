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

PDF Viewer allows you to add custom option in context menu. It can be achieved by using the `addCustomMenu()` method and custom action is defined using the `customContextMenuSelect()`method.

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
      iconCss: 'e-icons e-de-ctnr-find'
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
      this.pdfviewerControl.addCustomMenu(this.menuItems, false, false);
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
      iconCss: 'e-icons e-de-ctnr-find'
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
      this.pdfviewerControl.addCustomMenu(this.menuItems, true);
  }
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the `customContextMenuBeforeOpen()` method.

```js
export class CustomContextMenuComponent implements OnInit {
    @ViewChild('pdfviewer')
    public pdfviewerControl: PdfViewerComponent;
    @ViewChild('switch')
    public switch: SwitchComponent;
    @ViewChild('hide')
    public hideObj: CheckBoxComponent;
    @ViewChild('toolbar')
    public toolbarObj: CheckBoxComponent;

    public document: string = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
    public resource: string = "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib";
    ngOnInit(): void {
        // ngOnInit function
    }
    public menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
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
        this.pdfviewerControl.addCustomMenu(this.menuItems, false, false);
    }

    public customContextMenuSelect = (e: any): void => {
        switch (e.id) {
            case 'search_in_google':
                for (var i = 0; i < this.pdfviewerControl.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = this.pdfviewerControl.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((this.pdfviewerControl.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
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
        for (var i = 0; i < e.ids.length; i++) {
            var search = document.getElementById(e.ids[i]);
            if (search) {
                search.style.display = 'none';
                if (e.ids[i] === 'search_in_google' && (this.pdfviewerControl.textSelectionModule) && this.pdfviewerControl.textSelectionModule.isTextSelection) {
                    search.style.display = 'block';
                } else if (e.ids[i] === "lock_annotation" || e.ids[i] === "unlock_annotation") {
                    var isLockOption = e.ids[i] === "lock_annotation";
                    for (var j = 0; j < this.pdfviewerControl.selectedItems.annotations.length; j++) {
                        var selectedAnnotation: any = this.pdfviewerControl.selectedItems.annotations[j];
                        if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                            var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                            search.style.display = shouldDisplay ? 'block' : 'none';
                        }
                    }
                }  else if ((e.ids[i] === "read_only_true" || e.ids[i] === "read_only_false") && this.pdfviewerControl.selectedItems.formFields.length !== 0) {
                    var isReadOnlyOption = e.ids[i] === "read_only_true";
                    for (var j = 0; j < this.pdfviewerControl.selectedItems.formFields.length; j++) {
                        var selectedFormFields = this.pdfviewerControl.selectedItems.formFields[j];
                        if (selectedFormFields) {
                            var selectedFormField = this.pdfviewerControl.selectedItems.formFields[j].isReadonly;
                            var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                            search.style.display = displayMenu ? 'block' : 'none';
                        }
                    }
                } else if (e.ids[i] === 'formfield properties' && this.pdfviewerControl.selectedItems.formFields.length !== 0) {
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
{% include code-snippet/pdfviewer/custom-context-menu/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pdfviewer/custom-context-menu/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/custom-context-menu/app/main.ts %}
{% endhighlight %}
{% endtabs %}

[View sample in GitHub]()