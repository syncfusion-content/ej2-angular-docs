---
layout: post
title: Caption template in Angular Grid component | Syncfusion
description: Learn all about the caption template feature in the Syncfusion Angular Grid component, including customization options for grouping captions, advanced template integration, and localization support.
platform: ej2-angular
control: Caption template 
documentation: ug
domainurl: ##DomainURL##
---

# Caption template in Angular Grid component

The caption template feature in the Syncfusion Angular Grid enables full customization of the group caption row, allowing the display of detailed information about grouped data such as counts or grouped values. Caption templates support a wide range of custom content, including images, icons, and other HTML elements. This capability allows you to create visually rich and informative group captions directly within the Grid component.

The [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#captiontemplate) property allows for flexible customization. By utilizing the `data` parameter within the template, you can reference properties such as `field` (the column's field name), `headerText` (column's header display text), `key` (grouped value), and `count` (number of grouped records). These properties provide dynamic values that can be integrated into the caption for context-aware display.

The following example demonstrates how to customize the group header caption in the Grid using the `captionTemplate` property. It displays the **headerText**, **key**, and **count** of the grouped columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
                <ng-template #groupSettingsCaptionTemplate let-data>
                    <span class="groupItems"> {{ data.headerText }} - {{ data.key }} : {{ data.count }} Items </span>
                </ng-template>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showDropArea: false, columns: ['CustomerID', 'ShipCity'] };
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs1" %}

## Adding custom text in group caption

The Syncfusion Angular Grid makes it straightforward to enhance group captions by adding custom text, resulting in a more informative and meaningful representation of grouped data. With the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#captiontemplate) property, you can define specific text or additional information in the group caption, providing maximum flexibility.

The following example demonstrates how to augment the group caption by combining custom text with values from the `data` parameter, such as **key**, **count**, and **headerText** of the grouped column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' height='290px'>
                <e-columns>
                    <e-column field='OrderID' headerText='ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Name' width=100></e-column>
                    <e-column field='ShipCity' headerText='City' width=100></e-column>
                    <e-column field='Freight' headerText='Value' width=80></e-column>
                </e-columns>
                <ng-template #groupSettingsCaptionTemplate let-data>
                    <span class="groupItems">{{ data.key }} - {{ data.count }} Records :  {{ data.headerText }}</span>
                </ng-template>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs13" %}

## Customize group caption text using locale

The Syncfusion Angular Grid includes built-in localization support to customize the group caption text according to different languages or regions. This makes it possible to provide a translated or culture-specific group caption for globalized applications.

To implement localization, use the `L10n.load()` method to define localized strings and the `setCulture` method from `@syncfusion/ej2-base` to apply the locale (for example, the **"ar"** culture for Arabic). You can localize group captions and other Grid messages for a seamless multi-language experience.

The following example demonstrates custom group caption text based on the **"ar"** locale.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs19" %}

## Render custom component in group caption

The Syncfusion Angular Grid offers advanced customization by enabling the rendering of custom Angular components in the group caption row. This feature allows you to add functional UI elements such as buttons, icons, dropdowns, or other interactive components, supporting a broader range of scenarios and improved user interaction directly in grouped captions.

To render a custom component in the group caption row, use the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#captiontemplate) property. With this approach, you can fully replace traditional caption text with custom Angular content for greater flexibility.

The following example illustrates adding a custom component to the group caption by referencing the [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component, with its content bound to the current group key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs14" %}