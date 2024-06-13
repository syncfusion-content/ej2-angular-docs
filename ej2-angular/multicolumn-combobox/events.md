---
layout: post
title: Events in Angular MultiColumn ComboBox component | Syncfusion
description: Learn here all about Events in Syncfusion Angular MultiColumn ComboBox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: MultiColumn ComboBox 
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular MultiColumn ComboBox component

This section describes the multicolumn combobox events that will be triggered when appropriate actions are performed. The following events are available in the multicolumn combobox component.

## actionBegin

The [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#actionbegin) event is triggered when actions such as sorting, filtering, grouping starts.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/action-begin/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/action-begin/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/action-begin" %}

## actionFailure

The [actionFailure](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#actionfailure) event is triggered when the data fetch request from the remote server fails.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/action-failure/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/action-failure/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/action-failure" %}

## actionComplete

The [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#actioncomplete) event is triggered when actions such as sorting, filtering, grouping are completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/action-complete/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/action-complete/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/action-complete" %}

## select

The [select](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#select) event is triggered when the popup item is selected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/select-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/select-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/select-event" %}

## change

The [change](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#change) event is triggered when the popup item is selected or when the model value is changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/change-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/change-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/change-event" %}

## filtering

The [filtering](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#filtering) event is triggered when typing a character in the component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/filtering-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/filtering-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/filtering-event" %}

## open

The [open](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#open) event is triggered when the popup is opened.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/open-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/open-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/open-event" %}

## close

The [close](https://ej2.syncfusion.com/angular/documentation/api/multicolumn-combobox#close) event is triggered when the popup is closed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multicolumn-combobox/close-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multicolumn-combobox/close-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multicolumn-combobox/close-event" %}
