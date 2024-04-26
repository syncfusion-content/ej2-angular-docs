---
layout: post
title: Drilldown in Angular Treemap component | Syncfusion
description: Learn here all about Drilldown in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drilldown 
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown in Angular Treemap component

## Customize the header for treemap drilldown

Yon can add a header element as <div> and customize it to show the population of a particular country or continent on treemap drill-down. To customize the header for treemap drill-down, follow the given steps:

**Step 1**:

<!-- markdownlint-disable MD031 -->
<!-- markdownlint-disable MD010 -->
Initialize the treemap and enable the drill-down option.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { TreeMap, IDrillEndEventArgs, ILoadEventArgs } from '@syncfusion/ej2-angular-treemap';
import { DrillDown } from './datasource';

@Component({
  selector: 'app-container',
  template: '<ejs-treemap id="container" #treemap style="display:block;" [dataSource]="dataSource" [weightValuePath]="weightValuePath"[leafItemSettings]="leafItemSettings" [palette]="palette" format="n" useGroupingSeparator="true" enableDrillDown="true"><e-levels><e-level groupPath="Continent" fill="#336699" [border]="border"> </e-level><e-level groupPath="States" fill="#336699" [border]="border"> </e-level><e-level groupPath="Region" showHeader="false" fill="#336699" [border]="border"></e-level></e-levels></ejs-treemap>',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public palette: string[] = ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'];
  public dataSource: object[] = DrillDown;
  public weightValuePath: string = 'Population';
  public leafItemSettings: object = {
    labelPath: 'Name',
    showLabels: false,
    labelStyle: { size: '0px' },
    border: { color: 'black', width: 0.5 }
  };
  border: object = {
    color: 'black',
    width: 0.5
  };
};
```

**Step 2**:

Show the population of a particular continent in the treemap `loaded` event. In this event, you can get the header element.

```typescript
    public loaded = (args: ILoadEventArgs) => {
    let header: Element = document.getElementById('header');
    let population: number = 0;
    for (let i: number = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
      population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
    }
    header.innerHTML = 'Continent - Population : ' + population
  }
```

**Step 3**:

Customize the population for drilled countries or states in the header element when drill-down the treemap. The `drillEnd` event will be triggered when treemap is drilled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/how-to/header-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/how-to/header-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/how-to/header-template-cs1" %}