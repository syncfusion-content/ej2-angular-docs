---
layout: post
title: Angular Grid - Caption Template | Syncfusion
description: Angular Grid caption template explains customizing group captions, templates for group headers, and formatting group display with examples.
platform: ej2-angular
control: Caption template 
documentation: ug
domainurl: ##DomainURL##
---

# Group Row Title Customization in Angular Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#captiontemplate) property to customize the text shown in group row titles.  This feature enhances the visual presentation of grouped data by allowing the display of grouped values, record counts, and custom HTML elements such as icons or images.

The `captionTemplate` property allows for flexible customization. The `data` parameter within the template provides access to properties such as `field` (the column's field name), `headerText` (column's header display text), `key` (grouped value), and `count` (number of grouped records). These properties provide dynamic values that can be integrated into the caption for context-aware display.

The following example illustrates displaying the `headerText`, `key`, and `count` within a customized group caption.

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

The Grid supports adding custom text to group captions through the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#captiontemplate) property. This feature makes group captions more informative by including grouped values, record counts, or descriptive text, and can also display custom HTML elements such as icons or image.

In the example below, the data parameter is used to display the `key`, `count`, and `headerText` of the grouped column, along with custom text within the caption.

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

The Grid supports localization of group caption text based on the locale. This enables the display of translated or region-specific content within group captions.

Localization can be achieved using the `L10n.load()` and `setCulture()` methods from the `@syncfusion/ej2-base package`. The `L10n.load()` method defines localized strings, while `setCulture()` applies the desired locale to the Grid. The following example demonstrates customizing group caption text for the "ar" (Arabic) locale.

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

The Grid supports rendering custom components within group captions using the [captionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#captiontemplate) property. This functionality enables the integration of interactive UI elements such as buttons, icons, or dropdowns directly within the group caption row, enhancing both functionality and presentation.

In the example below, the [Chips](https://ej2.syncfusion.com/angular/documentation/chips/getting-started) component is rendered through the caption template, with its text value dynamically assigned based on the group key.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs14" %}

## See also
- [Grouping overview](./grouping)
- [GroupSettings API](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#captiontemplate)