---
layout: post
title: Change orientation of header text in Angular TreeGrid component | Syncfusion
description: Learn how to change the orientation of header text in the Syncfusion Angular TreeGrid component of Essential JS 2 using custom attributes and CSS.
platform: ej2-angular
control: Change orientation of header text 
documentation: ug
domainurl: ##DomainURL##
---

# Change orientation of header text in Angular TreeGrid component

The orientation of header text in the TreeGrid component can be changed using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property.

Follow these steps:

**Step 1**:

Define a CSS class with the desired orientation style for the TreeGrid header cell.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2**:

Apply the custom CSS class to a specific column using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property.

```typescript
<e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Right' [customAttributes]='customAttributes'></e-column>
```

**Step 3**:

Adjust the header cell height in the [`create`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#create) event using the following code.

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

> For additional details, refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page. Explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn more about presenting and manipulating data.
