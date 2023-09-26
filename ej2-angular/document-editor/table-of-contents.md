---
layout: post
title: Table of contents in Angular Document editor component | Syncfusion
description: Learn here all about Table of contents in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Table of contents 
documentation: ug
domainurl: ##DomainURL##
---

# Table of contents in Angular Document editor component

The table of contents in a document is same as the list of chapters at the beginning of a book. It lists each heading in the document and the page number, where that heading starts with various options to customize the appearance.

## Inserting table of contents

Document Editor exposes an API to insert table of contents at cursor position programmatically. You can specify the settings for table of contents explicitly. Otherwise, the default settings will be applied.

[`TableOfContentsSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/tableOfContentsSettings/) contain the following properties:
* **startLevel**: Specifies the start level for constructing table of contents.
* **endLevel**: Specifies the end level for constructing table of contents.
* **includeHyperlink**: Specifies whether the link for headings is included.
* **includePageNumber**: Specified whether the page number of the headings is included.
* **rightAlign**: Specifies whether the page number is right aligned.
* **tabLeader**: Specifies the tab leader styles such as none, dot, hyphen, and underscore.
* **includeOutlineLevels**: Specifies whether the outline levels are included.

The following code illustrates how to insert table of content in document editor.

```typescript
let tocSettings: TableOfContentsSettings =
{
    startLevel: 1, endLevel: 3, includeHyperlink: true, includePageNumber: true, rightAlign: true
};
this.documentEditor.editor.insertTableOfContents(tocSettings);
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/link-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/link-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/link-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/link-cs8" %}

## Update or edit table of contents

You can update or edit the table of contents using the built-in context menu shown up by right-clicking it. Refer to the following screenshot.

![Table of Contents](images/table-of-contents.png)

* **Update Field**: Updates the headings in table of contents with same settings by searching the entire document.
* **Edit Field**: Opens the built-in table of contents dialog and allows you to modify its settings.

You can also do it programmatically by using the exposed API. Refer to the following sample code.

```typescript
  let tocSettings: TableOfContentsSettings =
  {
      startLevel: 1, endLevel: 3, includeHyperlink: true, includePageNumber: true, rightAlign: true
  };
  this.documentEditor.editor.insertTableOfContents(tocSettings);

```

>Same method is used for inserting, updating, and editing table of contents. This will work based on the current element at cursor position and the optional settings parameter. If table of contents is present at cursor position, the update operation will be done based on the optional settings parameter. Otherwise, the insert operation will be done.

## See Also

* [Table of contents dialog](../document-editor/dialog#table-of-contents-dialog)
