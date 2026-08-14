---
layout: post
title: How to enable or disable items in Angular ListBox | Syncfusion
description: Toggle items in the Angular ListBox between enabled and disabled states at runtime by calling the enableItems method with the target items array.
platform: ej2-angular
control: Enable or disable items 
documentation: ug
domainurl: ##DomainURL##
---

# How to enable or disable items in Angular ListBox

To enable or disable items in the list box, [`enableItems`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#enableitems) method can be used. In the following example, the `Bugatti Veyron Super Sport` and `SSC Ultimate Aero` items are disabled by default and by clicking `Enable Items` buttons, the disabled items will be enabled.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/listbox/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs9" %}