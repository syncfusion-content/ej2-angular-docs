---
layout: post
title: Change orientation of header text in Angular Treegrid component | Syncfusion
description: Learn here all about Change orientation of header text in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Change orientation of header text 
documentation: ug
domainurl: ##DomainURL##
---

# Change orientation of header text in Angular Treegrid component

You can change the orientation of the header text by using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property.

Ensure the following steps:

**Step 1**:

Create a CSS class with orientation style for Tree Grid header cell.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom CSS class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property.

```typescript
    <e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Right' [customAttributes]='customAttributes' ></e-column>

```

**Step 3**:

Resize the header cell height in [`create`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#create) event by using the following code.

```typescript
  public setHeaderHeight() {
    /** Obtain the width of the headerText content */
    const textWidth: number = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
    const headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for(let i: number = 0; i < headerCell.length; i++) {
      /** Assign the obtained textWidth as the height of the headerCell */
      ((headerCell as any).item(i)).style.height = textWidth + 'px';
    }
  }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/header-orientation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/header-orientation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/header-orientation-cs1" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.