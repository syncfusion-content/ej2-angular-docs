---
layout: post
title: Task Labels in Angular Gantt component | Syncfusion
description: Learn here all about Task Labels in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
control: Task Labels 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Task labels in Angular Gantt component

## Task labels

The Gantt component maps any data source fields to task labels using the [`labelSettings.leftLabel`](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/#leftlabel), [`labelSettings.rightLabel`](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/#rightlabel), and [`labelSettings.taskLabel`](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/#tasklabel) properties. You can customize the task labels with templates.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/tasklabeltemplate-cs1" %}