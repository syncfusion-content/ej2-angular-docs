---
layout: post
title: Customize column styles in Angular TreeGrid component | Syncfusion
description: Learn how to customize column styles in the Syncfusion Angular TreeGrid component of Essential JS 2, including applying custom CSS to header and content cells using customAttributes.
platform: ej2-angular
control: Customize column styles 
documentation: ug
domainurl: ##DomainURL##
---

# Customize column styles in Angular TreeGrid component

You can customize the appearance of the header and content of a specific column in the TreeGrid component by using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property.

To customize a TreeGrid column, follow these steps:

**Step 1**:

Define a CSS class with the desired custom styles to override the default styles for row cells and header cells.

```css

.e-treegrid .e-rowcell.customcss{
    background-color: #ecedee;
    font-family: 'Bell MT';
    color: 'red';
    font-size: '20px';
}

.e-treegrid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: '20px';
}
```

**Step 2**:

Apply the custom CSS class to a specific column using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#customattributes) property.

```typescript
<e-column field='TaskName' headerText='Task Name' width='170' [customAttributes]='customAttributes'></e-column>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/custom-column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/custom-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/custom-column-cs1" %}

> For additional details, refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page. You can also explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn more about presenting and manipulating data.
