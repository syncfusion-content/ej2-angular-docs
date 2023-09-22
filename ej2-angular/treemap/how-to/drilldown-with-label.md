---
layout: post
title: Drilldown with label in Angular Treemap component | Syncfusion
description: Learn here all about Drilldown with label in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drilldown with label 
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown with label in Angular Treemap component

Yon can add a label template as <div> element to the treemap control when using the label template. To add a label template to the treemap control, you have to hide another labels by setting the `showLabels` property to **false** in `leafItemSettings` to show only the label template.

To add label template to treemap drilldown, follow the given steps:

**Step 1**:

<!-- markdownlint-disable MD010 -->
Create a tree map control and enable the drill-down option.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { TreeMap, IDrillStartEventArgs } from '@syncfusion/ej2-angular-treemap';
import { CarSales } from './datasource';

/**
 * Default sample
 */
@Component({
  selector: 'app-container',
  template:'<ejs-treemap id="container" #treemap style="display:block;" [dataSource]="dataSource" [weightValuePath]="weightValuePath"enableDrillDown="true" [palette]="palette"><e-levels><e-level groupPath="Continent" [border]="border"></e-level><e-level groupPath="Company" [border]="border"> </e-level></e-levels></ejs-treemap>',
  encapsulation: ViewEncapsulation.None
})
export class TreemapDrillDownComponent {
  public weightValuePath: string = "Sales";
  public palette: string[] = ['white'];
  public dataSource: object[] = CarSales;
  public border: Object = { width: 0.5, color: 'black' }
};
```

**Step 2**:

Add the label template in the `leafItemSettings` options, and then set the `showLabels` property to **false** to hide another labels and show only label template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/how-to/label-template-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treemap/how-to/label-template-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/how-to/label-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/how-to/label-template-cs1" %}