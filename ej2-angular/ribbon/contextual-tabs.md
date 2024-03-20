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

The Ribbon Contextual tabs are similar to the Ribbon tabs that are displayed on demand based on their needs, such as an image or a table tabs. It supports adding all built-in and custom ribbon items to perform specific actions.

## Visible tabs

You can utilize the [visible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonContextualTabSettingsModel/#visible) property within each `e-ribbon-contextual-tag` directive to control the visibility of each contextual tab.

## Adding contextual tabs

You can utilize the `e-ribbon-contextual-tabs` tag directive to add contextual tabs in the Ribbon where you can add multiple tabs based on your needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/add-tabs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/add-tabs/src/app.module.ts %}
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

By using the [isSelected](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonContextualTabSettingsModel/#isselected) property, you can control the selected state of each contextual tab and indicates which tab is currently active.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/selected-tab/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/selected-tab/src/app.module.ts %}
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

### Show tab

You can use the [showTab](https://ej2.syncfusion.com/angular/documentation/api/ribbon#showtab) method to make the specific Contextual tab visible in the Ribbon.

### Hide tab

You can use the [hideTab](https://ej2.syncfusion.com/angular/documentation/api/ribbon#hidetab) method to hide specific Contextual tab in the Ribbon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/method/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/method/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Contextual-tabs/method/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Contextual-tabs/method/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Contextual-tabs/method" %}
