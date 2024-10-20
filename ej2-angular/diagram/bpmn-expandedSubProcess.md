---
layout: post
title: Bpmn Expanded subProcess in Angular Diagram component | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bpmn Expanded subProcess 
documentation: ug
domainurl: ##DomainURL##
---


## Expanded SubProcess
An expanded subProcess can contain certain child processess within it.

### Create BPMN Expanded subProcess

To create expanded subProcess, set shape as [`activity`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/bpmnActivityModel/)  and [`collapsed`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcessModel/#collapsed) as false. Enable [`AllowDrop`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/nodeConstraints/) constraint for node to allow child to drop inside the expanded subProcess.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/expanded-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/expanded-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/expanded-cs1" %}

### Add BPMN nodes into ExpandedSubProcess

[`Processes`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/bpmnSubProcessModel/#processes) is an array collection that defines the children values for BPMN subprocess.

Please refer the following code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/expandedSub-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/expandedSub-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/expandedSub-cs1" %}

### Add BPMN nodes into ExpandedSubProcess at runtime

Drag and drop the BPMN nodes to the BPMN ExpandedSubProcess.
While resizing or dragging the child element, if the child element bounds are within the ExpandedSubProcess bounds, the ExpandedSubProcess size will be updated along with that.

The following image shows how to add BPMNNode into the BPMN ExpandedSubProcess at runtime.

![Expanded subProcess BPMN Shape](images/expanded-Gif.gif)

#### Add/remove Process Programmatically

The process for the expanded sub-process can be added at runtime using the [`addProcess`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#addprocess) method and removed at runtime using the [`removeProcess`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#removeprocess) method. The following example shows how to add and remove a process at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/bpmnShapes/addRemove-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/bpmnShapes/addRemove-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/bpmnShapes/addRemove-cs1" %}