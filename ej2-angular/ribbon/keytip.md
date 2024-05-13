---
layout: post
title: Ribbon Keytip in Angular Ribbon component | Syncfusion
description:  Learn here all about Ribbon Keytip in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# Ribbon Keytip

The Ribbon supports keyboard navigations to interact the ribbon items using the keytips which can be enabled by setting the [enableKeyTips](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#enablekeytips) property.

The keytips will be shown when the `Alt + Windows/Command` keys are pressed.

## Ribbon items keytip

You can add keytips to all the ribbon items by using the [keyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#keytip) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Keytip/item-keytip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Keytip/item-keytip/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Keytip/item-keytip/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/Keytip/item-keytip/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Keytip/item-keytip" %}

## File menu keytip

You can add keytips to the file menu by using the [keyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#keytip) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Keytip/filemenu-keytip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Keytip/filemenu-keytip/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Keytip/filemenu-keytip/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/Keytip/filemenu-keytip/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Keytip/filemenu-keytip" %}

## Backstage menu keytip

You can add keytips to backstage menu items by using the [keyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#keytip) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Keytip/backstage-keytip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Keytip/backstage-keytip/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Keytip/backstage-keytip/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/Keytip/backstage-keytip/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Keytip/backstage-keytip" %}

## Ribbon layout switcher keytip

You can add keytip to the layout switcher by using the [layoutSwitcherKeyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon#layoutswitcherkeytip) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Keytip/layout-keytip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Keytip/layout-keytip/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Keytip/layout-keytip/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/Keytip/layout-keytip/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Keytip/layout-keytip" %}

## Ribbon launcher icon keytip

You can add keytip to the launcher icon by using the [launcherIconKeyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupDirective/#launchericonkeytip) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Keytip/launcher-keytip/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Keytip/launcher-keytip/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Keytip/launcher-keytip/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/Keytip/launcher-keytip/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Keytip/launcher-keytip" %}

## Methods

### Show keytips

You can use the [showKeyTips](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonKeyTip/#showkeytips) method to shown the keytips dynamically.

In order to show specific keytips, pass the key string as an argument in the `showKeyTips('H')` method.

### Hide keytips

You can use the [hideKeyTips](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonKeyTip/#hidekeytips) method in Ribbon to remove the keytips dynamically. This will remove all the visible keytips.

## Guidelines for adding keytips

Before adding keytips to the ribbon items consider the following:

* Avoid using the same keytip setting on multiple items.

> For example: When you add the keytip text `H` or `HF` for the same items, it activates the first item occurrence of `H`, while any subsequent instances of `H` or `HF` are ignored.
* Do not use the same first letter for the single and double keytip items.

> For example: When accessing keytip text `F`, `FP` and `FPF` added for the different ribbon items and pressing `F` key, only the `F` key tip associated item will be activated while the `FP`, `FPF` configured ribbon items will be ignored.
