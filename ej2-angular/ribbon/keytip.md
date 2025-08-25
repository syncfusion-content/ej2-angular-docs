---
layout: post
title: Ribbon Keytip in Angular Ribbon component | Syncfusion
description:  Learn here all about Ribbon Keytip in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# Keytip in Angular Ribbon Component

The Ribbon component supports KeyTips to provide keyboard navigation for its items. This feature can be enabled by setting the [enableKeyTips](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#enablekeytips) property to `true`.

The keytips will be shown when the `Alt + Windows/Command` keys are pressed. This allows users to access any Ribbon element by pressing the corresponding keys.

## Ribbon Item KeyTip

You can assign a KeyTip to any Ribbon item, including tabs, groups, and individual controls, using the [keyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#keytip) property.

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

## File Menu KeyTip

A KeyTip can be assigned to the File Menu button using the [keyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/fileMenuSettingsModel/#keytip) property within the `fileMenuSettings`.

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

## Backstage Menu KeyTip

You can assign KeyTips to Backstage menu items by defining the [keyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/backStageMenuModel/#keytip) property for each item in the Backstage configuration.

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

## Ribbon Layout Switcher KeyTip

A KeyTip can be added to the layout switcher button using the [layoutSwitcherKeyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#layoutswitcherkeytip) property.

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

## Ribbon Launcher Icon KeyTip

A KeyTip can be assigned to a group's launcher icon using the [launcherIconKeyTip](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroupDirective/#launchericonkeytip) property.

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

Use the [showKeyTips](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonKeyTip/#showkeytips) method to display the KeyTips dynamically. To navigate into a specific tab's or group's KeyTips, pass its KeyTip as an argument. For instance, `showKeyTips('H')` will show the KeyTips for all items under the element assigned the 'H' KeyTip.

### Hide KeyTips

Use the [hideKeyTips](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonKeyTip/#hidekeytips) method to hide all visible KeyTips on the Ribbon.

## Guidelines for adding keytips

Before adding keytips to the ribbon items consider the following:

* Avoid using the same keytip setting on multiple items.

> For example: When you add the keytip text `H` or `HF` for the same items, it activates the first item occurrence of `H`, while any subsequent instances of `H` or `HF` are ignored.
* Do not use the same first letter for the single and double keytip items.

> For example: When accessing keytip text `F`, `FP` and `FPF` added for the different ribbon items and pressing `F` key, only the `F` key tip associated item will be activated while the `FP`, `FPF` configured ribbon items will be ignored.
