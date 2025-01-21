---
layout: post
title: Load html content via ajax in Angular ListView component | Syncfusion
description: Learn here all about Load html content via ajax in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView
documentation: ug
domainurl: ##DomainURL##
---

# Load html content via ajax in Angular ListView component

We can set external `HTML` page content as [`template`](https://ej2.syncfusion.com/angular/documentation/api/list-view/#template) for our `ListView` component by making use of `AJAX` call.

```typescript

let ajax = new Ajax('./template.html', 'GET', false);
    ajax.onSuccess = (e)=>{
        this.listtemplate = e;
    };
    ajax.send();

```

In the below sample, we have rendered smartphone settings template from external `HTML` file.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/ajax-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/ajax-cs2/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/ajax-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/ajax-cs2" %}
