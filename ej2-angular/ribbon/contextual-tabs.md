---
layout: post
title: Ribbon Contextual Tabs in Angular Ribbon component | Syncfusion
description:  Learn here all about Ribbon Contextual Tabs in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# Ribbon Contextual Tabs

Ribbon Contextual Tabs are special tabs that appear only when a specific object or context is selected, such as a table, image, or chart. They provide users with a set of tools relevant only to the selected item. These tabs can host all built-in and custom Ribbon items to perform specific actions.

## Visible tabs

You can control the initial visibility of a contextual tab by setting the [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonContextualTabSettingsModel/#visible) property to `true` or `false` within the `e-ribbon-contextual-tab` directive.

## Adding Contextual Tabs

Add contextual tabs to the Ribbon by using the `e-ribbon-contextual-tabs` tag directive. You can define multiple contextual tabs, each containing one or more standard Ribbon tabs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/add-tabs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/add-tabs/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Contextual-tabs/add-tabs/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Contextual-tabs/add-tabs" %}

## Selected tabs

The [isSelected](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonContextualTabSettingsModel/#isselected) property determines which contextual tab is active upon initialization. Setting this property to `true` makes the corresponding tab the currently selected one.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/selected-tab/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/selected-tab/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Contextual-tabs/selected-tab/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Contextual-tabs/selected-tab" %}

## Methods

The Ribbon provides methods to dynamically manage the visibility of contextual tabs after the component has been initialized.

### Show Tab

The [showTab](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#showtab) method makes a specific contextual tab visible in the Ribbon.

### Hide Tab

The [hideTab](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#hidetab) method hides a specific contextual tab in the Ribbon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/method/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/method/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Contextual-tabs/method/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Contextual-tabs/method" %}