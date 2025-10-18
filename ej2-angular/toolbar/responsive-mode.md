---
layout: post
title: Responsive mode in Angular Toolbar component | Syncfusion
description: Learn here all about Responsive mode in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Toolbar 
documentation: ug
domainurl: ##DomainURL##
---

# Responsive mode in Angular Toolbar component

The Angular Toolbar component automatically handles content overflow with responsive display modes when toolbar items exceed the available viewing area. The component supports two primary responsive modes:

* Scrollable
* Popup

## Scrollable

The default overflow mode of the Toolbar is `Scrollable`. This responsive mode displays all commands in a single horizontal line with scrolling navigation when content overflows the available container width.

* Navigation arrows appear at the start and end of the Toolbar to access hidden commands.
* You can also see the hidden commands using touch swipe action.
* When the left navigation icon is disabled, hidden commands are accessible by moving right.
* Clicking or holding navigation arrows continuously reveals hidden commands.
* On devices without navigation icons, touch swipe gestures provide access to hidden toolbar commands.

![Scrollable](./images/scrolling.gif)

* When the Toolbar reaches the first or last command, the corresponding navigation icon becomes disabled, allowing movement in the opposite direction only.

![Touch scroll](./images/scrolling_touch.gif)

![Swipe scroll](./images/scrolling_swipe.gif)

* Continuous scrolling is possible by holding the navigation icon.

![Long press scroll](./images/scrolling_long_press.gif)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs7" %}

## Popup

`Popup` is an alternative [`overflowMode`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/#overflowmode) where the Toolbar container displays commands that fit within the available space. Overflowing commands that exceed the viewing area automatically move to an overflow popup container.

Commands in the popup become accessible by opening the dropdown using the overflow icon at the end of the Toolbar.

![Toolbar popup](images/popup.gif)

> If the popup content overflows the page height, the remaining commands will be hidden.

### Priority of commands

Default popup priority is set as `none`, and when the commands of the Toolbar overflow, the ones listed last will be moved to the popup.

Command display priority can be customized using the [`overflow`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#overflow) property to control which items appear in the Toolbar versus the popup.

Property     | Description
------------ | -------------
  show       | Always displays items on the Toolbar with primary priority
  hide       | Always displays items in the popup with secondary priority
  none       | No priority assigned - commands move to popup in normal order when content exceeds viewing area

When primary priority commands exceed available space, they move to the popup container at the top position, placed before secondary priority commands.

> You can maintain toolbar item on popup always by using the ['showAlwaysInPopup'](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemDirective/#showalwaysinpopup) property, and this behavior is not applicable for toolbar items with [overflow](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#overflow) property as 'show'.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs8" %}

### Text mode for buttons

The [`showTextOn`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/item/#showtexton) property determines where button text displays within the Toolbar, popup, or both locations. This enables customization of text and image representations for different display contexts.

For example, icon-only buttons can display on the Toolbar while the popup container shows detailed information with both icons and text.

Available values:

  Property   | Description
------------ | -------------
  Both     | Button text appears in both `Toolbar` and `popup`
  Overflow | Button text appears only in the `popup`
  Toolbar  | Button text appears only on the `Toolbar`

The following example demonstrates text visibility limited to the popup container only.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-items-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/toolbar-items-cs9" %}

## Render toolbar with a less than minimum height

By default, the Toolbar renders with a minimum height to accommodate items properly. A customized toolbar with height less than the minimum can be achieved by overriding default styles from the application level.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/toolbar/minimum-height-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/minimum-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/minimum-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/toolbar/minimum-height-cs1" %}