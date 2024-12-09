---
layout: post
title: Layout events in Angular Diagram component | Syncfusion®
description: Learn here all about Layout events in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Layout events
documentation: ug
domainurl: ##DomainURL##
---

# Layout events in Angular Diagram control

## DataLoaded event

The [`dataLoaded`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idataloadedeventargs/) event is triggered after the diagram is populated from the external data source.

The following code example explains the data loaded event in the diagram.

```typescript

<ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]="nodes" [connectors]="connectors"
  [layout]="layout" (dataLoaded)="dataLoaded($event)" > </ejs-diagram>

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;

  // Handle animation state changes
  public dataLoaded(args: IDataLoadedEventArgs) {
      //we can get diagram instance in args.
      console.log(args);

      //customize
  }

```

## ExpandStateChange event

The [`expandStateChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExpandStateChangeEventArgs/) will be triggered when the state of the expand and collapse icon change for a node.

The following code example explains the `expandStateChange` event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layoutEvent-cs1" %}

## Animation complete event

The [`animationComplete`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#animationcomplete) event is triggered after the animation of the diagram elements is completed. The following example demonstrates how to handle the animation complete event and customize based on the expand state of the root node.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/layoutEvent-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/layoutEvent-cs2" %}
