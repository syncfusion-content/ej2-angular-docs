---
layout: post
title: Taskbar in Angular Gantt component | Syncfusion
description: Learn here all about Taskbar in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
control: Taskbar 
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Taskbar in Angular Gantt component

## Taskbar customization

### Taskbar height

The height of child taskbars and parent taskbars can be customized by using [`taskbarHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) property. The following code example shows how to use the [`taskbarHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/taskbar-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/taskbar-height-cs1" %}

> NOTE
The [`taskbarHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskbarheight) value should be lower than [`rowHeight`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#rowheight) property value and these properties accept only pixel values.

### Conditional formatting

The default taskbar UI can be replaced with custom templates by using the [`queryTaskbarInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/iQueryTaskbarInfoEventArgs) event. The following code example shows customizing the taskbar UI based on task progress values in Gantt component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/formatting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/formatting-cs1" %}

### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/change-gripper-icon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/change-gripper-icon-cs1" %}

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [`connectorLineWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinewidth) and [`connectorLineBackground`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#connectorlinebackground) properties. The following code example shows how to use these properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/appearance-customization/dependency-cs1" %}

## Enable tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip for the following UI elements using the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#showtooltip) property:

* Taskbar
* Connector line
* Baseline
* Event marker

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/default-cs1" %}

> The default value of the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#showtooltip) property is `true`.

## Tooltip template

### Taskbar tooltip

The default tooltip in the Gantt component can be customized using the [`tooltipSettings.taskbar`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#taskbar) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/taskbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/taskbar-cs1" %}

### Connector line tooltip

The default connector line tooltip in the Gantt component can be customized using the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#connectorline) property. The following code example shows how to use the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#connectorline) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/dependency-cs1" %}

### Baseline tooltip

A baseline tooltip can be customized using the [`tooltipSettings.baseline`](https://ej2.syncfusion.com/angular/documentation/api/gantt/tooltipSettings/#baseline) property. The following code example shows how to customize the baseline tooltip in Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/tooltip/baseline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/tooltip/baseline-cs1" %}

## Tooltip Touch interaction

To perform `touch and hold` action on a element, refer to [`tooltip popup`](tooltip/#tooltip).