---
layout: post
title: Layouts in Angular Ribbon component | Syncfusion
description:  Learn here all about Layouts in Syncfusion Angular Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---     

# Layouts in the Angular Ribbon Component

The Ribbon layout can be customized using the [activeLayout](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In the Classic layout, the Ribbon component organizes items and groups in a traditional multi-row format. This is the default layout and can be explicitly set by assigning [classic](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonLayout/) to the [activeLayout](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#activelayout) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Classic/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Classic/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Classic/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Classic" %}

### Defining item size

The [allowedSizes](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonItem/#allowedsizes) property sets the permitted sizes for a ribbon item. Ribbon items can be displayed in three sizes: Large (large icon with text), Medium (small icon with text), and Small (small icon only). During resizing, item sizes automatically adjust based on the available tab content width, transitioning from Large to Medium and then to Small.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/ItemsSize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/ItemsSize/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/ItemsSize/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/ItemsSize" %}

### Defining item orientation

The group's [orientation](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#orientation) property manages how items are aligned, either in a `Row` or `Column`. By default, the orientation is `Column`, which arranges items vertically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Orientation/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Orientation/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Orientation/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Orientation" %}

>  When the orientation is set to `Row` a group may have a maximum of three collections each of which may contain any number of items. When the orientation is set to `Column` a group may have any number of collections, each of which may contain one large-sized item or three medium/small-sized items. If two large-sized items are specified, it automatically converts into two medium/small-sized items.

### Defining a group header

The [header](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#header) property sets the title for each group.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/HeaderText/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/HeaderText/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/HeaderText/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/HeaderText" %}

### Defining a group icon

The [groupIconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#groupiconcss) property customizes the icon for the group's overflow button. When the ribbon's width is reduced, groups collapse into this button, which reveals a popup menu with the group's items when clicked.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/GroupIcon/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/GroupIcon/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/GroupIcon/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/GroupIcon" %}

### Enabling the group launcher icon

The [showLauncherIcon](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#showlaunchericon) property enables or disables the launcher icon for a group. This property is `false` by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/LauncherIcon/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/LauncherIcon/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/LauncherIcon/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/LauncherIcon" %}

#### Customize the launcher icon

The [launcherIconCss](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#launchericoncss) property customizes the group's launcher icon with a custom CSS class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/CustomLauncher/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/CustomLauncher/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/CustomLauncher/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/CustomLauncher" %}

### Defining the group collapsible state

The [isCollapsible](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#iscollapsible) property determines whether a group collapses during resizing. By default, this property is `true`. Set it to `false` to prevent the group from collapsing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/CollapsibleState/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/CollapsibleState/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/CollapsibleState/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/CollapsibleState" %}

### Defining priority for group collapsing and expanding

The [priority](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#priority) property sets the order in which groups collapse or expand on resize. When collapsing, groups with higher priority values are processed first. When expanding, groups with lower priority values are processed first.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Priority/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Priority/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Priority/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Priority" %}

## Simplified layout

In the Simplified layout, the Ribbon organizes items and groups into a single row, creating a more compact interface. This layout is enabled by setting the [activeLayout](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Simplified/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Simplified/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Simplified/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Simplified" %}

### Enabling group overflow popup

The [enableGroupOverflow](https://ej2.syncfusion.com/angular/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property creates a dedicated popup menu for a group's overflow items during resizing. If this is `false`, overflow items are moved to a common overflow popup at the right end of the tab content area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/GroupOverflow/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/GroupOverflow/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/GroupOverflow/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/GroupOverflow" %}

## Minimized state

The Ribbon can be minimized to hide its contents and display only the tab headers. To toggle this state, double-click a tab header or click the collapse/expand icon. When minimized, clicking a tab header temporarily expands the content.

The [isMinimized](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#isminimized) property programmatically sets the Ribbon's minimized state. The `minimized` event is triggered when this state changes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/Minimize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/Minimize/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/Minimize/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/Minimize" %}

## Showing or hiding the layout switcher

The [hideLayoutSwitcher](https://ej2.syncfusion.com/angular/documentation/api/ribbon/#hidelayoutswitcher) property shows or hides the layout switcher button. By default, this property is `false`, and the button is visible.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ribbon/HideLayoutSwitcher/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ribbon/HideLayoutSwitcher/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/ribbon/HideLayoutSwitcher/src/app.component.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/ribbon/HideLayoutSwitcher" %}