---
layout: post
title: Load html content via ajax in Angular Listview component | Syncfusion
description: Learn here all about Load html content via ajax in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Load html content via ajax 
documentation: ug
domainurl: ##DomainURL##
---

# Load html content via ajax in Angular Listview component

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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/ajax-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/ajax-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/ajax-cs2" %}
