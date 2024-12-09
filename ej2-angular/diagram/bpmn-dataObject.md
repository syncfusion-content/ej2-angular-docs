---
layout: post
title: Bpmn DataObject in Angular Diagram component | Syncfusion®
description: Learn here all about Bpmn shapes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Bpmn DataObject 
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Data object in Angular Diagram control

## Data Object

A data object represents information flowing through the process, such as data placed into the process, data resulting from the process, data that needs to be collected, or data that must be stored. To define a [`data object`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnDataObject), set the shape as **DataObject** and the [`type`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/bpmnDataObject/#type) property defines whether data is an input or an output. You can create multiple instances of data object with the collection property of data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/data-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/data-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/data-cs1" %}

The following table contains various representation of BPMN data object.

| Data object type | Image |
| -------- | -------- |
| Collection Data Object | ![Collection Data BPMN Shape](images/Dataobject.png) |
| Data Input | ![DataInputBPMNShape](images/DataInput.png) |
| Data Output | ![DataOutputBPMNShape](images/DataOutput.png) |