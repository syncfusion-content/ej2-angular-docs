---
layout: post
title: Template in Angular Timeline component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Timeline component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Timeline
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Timeline component

The Timeline component provides comprehensive template customization capabilities through the [template](https://ej2.syncfusion.com/angular/documentation/api/timeline/#template) property. This feature allows you to customize the complete appearance and content structure of timeline items, including dot indicators, content areas, styling, and layout arrangements to match your application's design requirements.

The `template` context provides access to the following data and properties for each timeline item:

| Type | Purpose |
| --- | --- |
| `item` | Indicates the current data of the Timeline item. |
| `itemIndex` | Indicates the current index of the Timeline item. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timeline/template/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timeline/template/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% raw %}
{% include code-snippet/timeline/template/src/app.component.html %}
{% endraw %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/timeline/template/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timeline/template" %}