---
layout: post
title: Labels in Angular Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Labels 
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Angular Diagram Component

[`Annotation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel) is a block of text that can be displayed over a node or connector. Annotations are used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node or connector.

<!-- markdownlint-disable MD033 -->

## Create annotations

An annotation can be added to a node or connector by defining the annotation object and adding it to the annotations collection of the node or connector. The [`content`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel#content) property of the annotation defines the text to be displayed. The following code illustrates how to create an annotation.

To create and add annotations to Nodes and Connectors using the Angular Diagram, refer to the below video link.

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

N> When setting an annotation's ID, ensure that it does not contain white spaces, does not start with numbers or special characters, and does not include special characters like underscores (_) or spaces.

## Add annotations at runtime

Annotations can be added at runtime by using the client-side method [`addLabels`](https://ej2.syncfusion.com/angular/documentation/api/diagram#addlabels). The following code illustrates how to add an annotation to a node.

The annotation's [`id`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel#id) property is used to define the name of the annotation and is further used to find the annotation at runtime and perform any customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/run-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/run-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/run-cs1" %}

## Update annotations at runtime

Annotations can be updated directly by accessing the annotation from the node's annotations collection property and modifying any annotation properties at runtime. To reflect the changes immediately, call the `dataBind` method.

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

## Remove annotations

A collection of annotations can be removed from the node by using the diagram method [`removeLabels`](https://ej2.syncfusion.com/angular/documentation/api/diagram#removelabels). The following code illustrates how to remove an annotation from a node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/remove-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/remove-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/remove-cs1" %}