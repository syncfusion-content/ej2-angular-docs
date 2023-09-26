---
layout: post
title: Customize the icon for column menu in Angular Treegrid component | Syncfusion
description: Learn here all about Customize the icon for column menu in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize the icon for column menu 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icon for column menu in Angular Treegrid component

You can customize the column menu icon by overriding the default Tree Grid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below,

```css
    .e-treegrid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e903";
    }
```

In the below sample, Tree Grid is rendered with a customized column menu icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/custom-column-menu-icon-cs1" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.