---
layout: post
title: Leaf item in Angular Treemap component | Syncfusion
description: Learn here all about Leaf item in Syncfusion Angular Treemap component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Leaf item 
documentation: ug
domainurl: ##DomainURL##
---

# Leaf item in Angular Treemap component

A leaf item defines a visualized data element and does not contain child nodes but contains parent node if the levels are specified in the TreeMap.

## Leaf label

Label is represented by item name or value. Label will be appeared by specifying the [`labelPath`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelpath) property and customize the label style using the [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelstyle) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs27/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs27/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs27" %}

<!-- markdownlint-disable MD036 -->

### Label position and format

Positioning the leaf item label using the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelposition) property and the text format can be customized by specifying data source properties name in the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelformat) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs28" %}

<!-- markdownlint-disable MD036 -->

### Label template and position

Specifies the template of leaf item label and position of the template to be customized using [`labelTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labeltemplate) and [`templatePosition`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#labelposition) properties.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='Gold'
    [leafItemSettings]='leafItemSettings' >
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [
    { Sport: "Swimming", Gold: 16, GameImage: 'Swimming.svg', ItemHeight: "180px", ItemWidth: '180px' },
    { Sport: "Athletics", Gold: 13, GameImage: 'Athletics.svg', ItemHeight: "70px", ItemWidth: '70px' },
    { Sport: "Gymnastics", Gold: 4, GameImage: 'Gymnastics.svg', ItemHeight: "80px", ItemWidth: '80px' },
    { Sport: "Cycling", Gold: 2, GameImage: 'Cycling.svg', ItemHeight: "50px", ItemWidth: '50px' },
    { Sport: "Wrestling", Gold: 2, GameImage: 'Wrestling.svg', ItemHeight: "60px", ItemWidth: '50px' },
    { Sport: "Basketball", Gold: 2, GameImage: 'Basketball.svg', ItemHeight: "50px", ItemWidth: '50px' },
    { Sport: "Boxing", Gold: 1, GameImage: 'Boxing.svg', ItemHeight: "40px", ItemWidth: '30px' },
    { Sport: "Tennis", Gold: 1, GameImage: 'Tennis.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Judo", Gold: 1, GameImage: 'Judo.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Rowing", Gold: 1, GameImage: 'Rowing.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Shooting", Gold: 1, GameImage: 'Shooting.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Triathlon", Gold: 1, GameImage: 'Triathlon.svg', ItemHeight: "40px", ItemWidth: '40px' },
    { Sport: "Water polo", Gold: 1, GameImage: 'Water polo.svg', ItemHeight: "40px", ItemWidth: '40px' }
];
   public leafItemSettings: object ={
            labelPath: 'Sport',
            fill: '#993399',
            templatePosition: 'Center',
            labelTemplate: '<div style="pointer-events: none;"><img src="src/treemap/image></img></div>'
        }
}

```

<!-- markdownlint-disable MD036 -->

## Item gap

The [`gap`](https://ej2.syncfusion.com/angular/documentation/api/treemap/leafItemSettingsModel/#gap) property is used to separate an item from another item. Each item rectangle is split into equal space with specified gap.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treemap/getting-started/treemap-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treemap/getting-started/treemap-cs29" %}