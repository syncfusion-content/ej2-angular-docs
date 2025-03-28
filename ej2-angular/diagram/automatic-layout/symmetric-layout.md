---
layout: post
title: Symmetric layout in Angular Diagram component | Syncfusion®
description: Learn here all about Symmetric layout in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Symmetric layout 
documentation: ug
domainurl: ##DomainURL##
---

# Symmetric layout in Angular Diagram control

The symmetric layout has been formed using nodes position by closer together or pushing them further apart. This is repeated iteratively until the system comes to an equilibrium state.


## Symmetric layout

The layout’s [`springLength`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#springlength) defined as how long edges should be, ideally. This will be the resting length for the springs. Edge attraction and vertex repulsion forces to be defined by using layout’s [`springFactor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#springfactor), the more sibling nodes repel each other. The relative positions do not change any more from one iteration to the next. The number of iterations can be specified by using layout’s [`maxIteration`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#maxiteration).

The following code illustrates how to arrange the nodes in a radial tree structure.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/symmetric-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/symmetric-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/symmetric-cs1" %}

N> If you want to use symmetric layout in diagram, you need to inject SymmetricLayout in the diagram.

![Symmetric layout](../images/symmetric.png)