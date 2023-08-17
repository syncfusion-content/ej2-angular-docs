---
layout: post
title: Caption template in Angular Grid component | Syncfusion
description: Learn here all about Caption template in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Caption template 
documentation: ug
domainurl: ##DomainURL##
---

# Caption template in Angular Grid component

The caption template feature in the Syncfusion Angular Grid allows you to customize and enhance the appearance of group caption row. It provides a flexible way to display additional information about grouped data, such as counts or grouped value, and enables you to incorporate custom content like images, icons, or other HTML elements. This feature empowers you to create visually appealing and informative group captions in the grid component.

To achieve this customization, you can utilize the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#captiontemplate) property. By accessing the `data` parameter, which represents the currently displayed group, you can incorporate its properties such as `field` (column's field name), `headerText` (column's header text), `key`(grouped value) and `count` (count of the grouped records) into the caption template.

The following example demonstrates how to customize the group header caption in the Grid by utilizing  the `captionTemplate` property. It displays the **headerText**, **key** and **count** of the grouped columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs1/app/app.component.ts %}
{% endhighlight %}Caption template in Angular Grid component
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs1" %}

## Adding custom text in group caption

The Syncfusion Angular Grid allows you to enhance the group captions by adding custom text, providing a more meaningful and informative representation of the grouped data. By utilizing the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#captiontemplate) property, you can add specific text or information to the group caption, offering flexibility in customization.

The following example demonstrates how to add a custom text to the group caption using the `captionTemplate` property. The data parameter is utilized to display the  **key**, **count** and **headerText** of the grouped columns along with the custom text. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs13/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs13/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs13/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs13" %}

## Customize group caption text using locale

The Syncfusion Angular Grid allows you to customize the group caption text based on the locale. This feature enables you to display localized text or translated content in the group captions according to different language or region settings.

To achieve this, you can utilize the `L10n` and `setCulture` methods from the `@syncfusion/ej2-base` package. The `L10n.load()` method is used to load the localized strings, where the grid object contains the specific translations for the group caption text and the `setCulture` method sets the active locale to **ar** culture to the Grid component.

The following example demonstrates, how to customize group caption text based on **"ar"** locale.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs19/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs19/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs19/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs19" %}

## Render custom component in group caption

The Syncfusion Angular Grid offers the flexibility to render a custom component in the group caption, providing advanced or interactive functionality within the group caption row. This feature allows you to display custom UI elements, like buttons, icons, or dropdowns, and handle user interactions directly within the group caption. 

To render custom component in the group caption, you can utilize the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#captiontemplate) property. This feature enables you to replace plain text with a custom component in the group caption, enhancing customization and interactivity.

The following example demonstrates how to add a custom component to the group caption using the `captionTemplate` property. In the template, the [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component is utilized, with the text content set as the group key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs14" %}
