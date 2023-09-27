---
layout: post
title: Size Modes in Angular Appearance component | Syncfusion
description: Learn here all about Size Modes in Syncfusion Angular Appearance component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Size Modes
documentation: ug
domainurl: ##DomainURL##
---

# Size Mode for Syncfusion Angular Components

An application that is designed to be accessed through a web browser on various devices, including desktop computers and mobile devices, may have a distinct layout or user interface on a mobile device compared to a desktop computer to better suit the smaller screen size.

Syncfusion Angular components support both touch (bigger) and normal size modes. Touch mode creates a responsive design for mobile devices by adding the `e-bigger` class, which enhances interactions, visibility, and the overall experience.

## Size mode for application

The user can enable touch mode (bigger) for the entire application by adding the `e-bigger` class to the `body` element in the `index.html` file as follows:

  ```html
  <body className="e-bigger">
    ...
  </body>
  ```

## Size mode for a component

The user can enable touch mode (bigger) for a component by adding the `e-bigger` class to the `div` element that contains the component. Another way of enabling touch mode is by adding the `e-bigger` class using the available `cssClass` property of the component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/size-modes/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/size-modes" %}

## Change size mode for application at runtime

The user can change the size mode of the application between touch and normal (mouse) mode at runtime by adding and removing the `e-bigger` class. The following steps explain how to change the size mode of an application at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes-src/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/size-modes-src/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes-src/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/size-modes-app" %}

## Change size mode for a component at runtime

The user can change the size mode of a component between touch and normal (mouse) mode at runtime by setting the `e-bigger` CSS class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/size-modes-cp/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/size-modes-cp/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/size-modes-cp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/size-modes-cp" %}

## See also

* [Sidebar responsiveness](https://ej2.syncfusion.com/angular/documentation/sidebar/auto-close/)
* [DataGrid responsiveness](https://ej2.syncfusion.com/angular/documentation/grid/columns/responsive-columns/)
* [TreeGrid responsiveness](https://ej2.syncfusion.com/angular/documentation/treegrid/scrolling/#responsive-with-parent-container)
* [Dashboard Layout responsiveness](https://ej2.syncfusion.com/angular/documentation/dashboard-layout/responsive-adaptive/)
* [Kanban responsiveness](https://ej2.syncfusion.com/angular/documentation/kanban/responsive-mode/)
* [Toolbar responsiveness](https://ej2.syncfusion.com/angular/documentation/toolbar/responsive-mode/)
* [Tab responsiveness](https://ej2.syncfusion.com/angular/documentation/tab/adaptive/)