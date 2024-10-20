---
layout: post
title: Labels in Angular Diagram component | Syncfusion
description: Learn here all about Labels in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Labels 
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Angular Diagram component

[`Annotation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/) is a block of text that can be displayed over a node or connector. Annotation is used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node/connector.

<!-- markdownlint-disable MD033 -->

## Create annotation

An annotation can be added to a node/connector by defining the annotation object and adding that to the annotation collection of the node/connector. The [`content`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#content-string) property of annotation defines the text to be displayed. The following code illustrates how to create a annotation.

To create and add annotation to Nodes and Connectors using the Angular Diagram, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=1J8dtTxXnVo" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/annotation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/annotation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/annotation-cs1" %}

## Add annotations at runtime

Annotations can be added at runtime by using the client-side method [`addLabels`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#addLabels). The following code illustrates how to add a annotation to a node.

The annotation's [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#id-string) property is used to define the name of the annotation and its further used to find the annotation at runtime and do any customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/run-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/run-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/run-cs1" %}

## Remove annotation

A collection of annotations can be removed from the node by using diagram method [`removeLabels`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#removeLabels). The following code illustrates how to remove a annotation to a node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/remove-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/remove-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/remove-cs1" %}

## Update annotation at runtime

You can get the annotation directly from the node’s annotations collection property and you can change any annotation properties at runtime. To reflect the changes immediately, we need to call [`dataBind`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#dataBind).

The following code example illustrates how to change the annotation properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/update-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/update-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/update-cs1" %}
