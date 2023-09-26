---
layout: post
title: Row template in Angular Treegrid component | Syncfusion
description: Learn here all about Row template in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row template 
documentation: ug
domainurl: ##DomainURL##
---

# Row Template in Angular Treegrid component

The [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) has an option to customise the look and behavior of the treegrid rows. The [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) property accepts either the template string or HTML element ID.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs8" %}

The [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) property accepts only the TR element.

## Row template with formatting

If the [`rowTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowtemplate) is used, the value cannot be  formatted  inside the template using the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/row-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/row-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/row-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/row-cs9" %}

## Limitations

Row template feature is not compatible with all the features which are available in treegrid and it has limited features support. Here we have listed out the features which are not compatible with row template feature.

* Filtering
* Paging
* Sorting
* Scrolling
* Searching
* Rtl
* Context Menu
* State Persistence