---
layout: post
title: Group popup items with listview component in Angular Drop down button component | Syncfusion
description: Learn here all about Group popup items with listview component in Syncfusion Angular Drop down button component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Group popup items with listview component 
documentation: ug
domainurl: ##DomainURL##
---

# Group popup items with listview component in Angular Drop down button component

Header in popup items is possible in DropdownButton by templating entire popup with ListView. Create ListView with id `listview` and provide it as a [`target`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-button/#target) for DropDownButton.

In the following example, ListView element is given as `target` to DropDownButton and header can be achieved by [`groupBy`](https://ej2.syncfusion.com/angular/documentation/api/list-view/fieldSettingsModel/#groupby) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/drop-down-button/header-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/drop-down-button/header-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/drop-down-button/header-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/drop-down-button/header-cs1" %}