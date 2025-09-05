---
layout: post
title: Customize the icon for column menu in Angular TreeGrid component | Syncfusion
description: Learn how to customize the column menu icon in the Syncfusion Angular TreeGrid component of Essential JS 2 by overriding default styles with custom CSS.
platform: ej2-angular
control: Customize the icon for column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icon for column menu in Angular TreeGrid component

The column menu icon in the TreeGrid component can be customized by overriding the default TreeGrid class **.e-icons.e-columnmenu** and setting a custom **content** property as shown below:

```css
    .e-treegrid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e903";
    }
```

In the following example, TreeGrid is rendered with a customized column menu icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/custom-column-menu-icon-cs1" %}

> For additional details, refer to the [`Angular TreeGrid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page. You can also explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to learn more about presenting and manipulating data.
