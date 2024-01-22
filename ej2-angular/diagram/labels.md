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
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/annotation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/annotation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/annotation-cs1" %}

## Add annotations at runtime

* Annotations can be added at runtime by using the client-side method [`addLabels`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#addLabels). The following code illustrates how to add a annotation to a node.

* The annotation's [`ID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#id-string) property is used to define the name of the annotation and its further used to find the annotation at runtime and do any customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/run-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/run-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/run-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/run-cs1" %}

## Remove annotation

A collection of annotations can be removed from the node by using client-side method [`removeLabels`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#removeLabels). The following code illustrates how to remove a annotation to a node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/remove-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/remove-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/remove-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/remove-cs1" %}

## Update annotation at runtime

You can change any annotation properties at runtime and update it through the client-side method [`dataBind`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#dataBind).

The following code example illustrates how to change the annotation properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/update-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/update-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/update-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/update-cs1" %}

## Alignment

Annotation can be aligned relative to the node boundaries. It has [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#margin-marginmodel), [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/), horizontal, and vertical alignment settings. It is quite tricky when all four alignments are used together but gives more control over alignment.

## Offset

The offset property of annotation is used to align the annotations based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

Set the size for a nodes annotation by using [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#width-number) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#height-number) properties.

The following code shows the relationship between the annotation position (black color circle) and offset (fraction values).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/offset-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/offset-cs1" %}

## Horizontal and vertical alignment

The [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#horizontalAlignment-string) property of annotation is used to set how the annotation is horizontally aligned at the annotation position determined from the fraction values. The [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#verticalalignment-string) property is used to set how annotation is vertically aligned at the annotation position.

The following tables illustrates all the possible alignments visually with 'offset (0, 0)'.

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Label Alignment](images/Label1.png) |
| Center | Top | ![Center Top Label Alignment](images/Label2.png) |
| Right | Top |  ![Right Top Label Alignment](images/Label3.png) |
| Left | Center | ![Left Center Label Alignment](images/Label4.png) |
| Center | Center| ![Center Center Label Alignment](images/Label5.png) |
| Right | Center | ![Right Center Label Alignment](images/Label6.png) |
| Left | Bottom | ![Left Bottom Label Alignment](images/Label7.png) |
| Center | Bottom | ![Center Bottom Label Alignment](images/Label8.png) |
| Right |Bottom |![Right Bottom Label Alignment](images/Label9.png) |

The following codes illustrates how to align annotations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/offset-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/offset-cs2" %}

## Annotation alignment with respect to segments

The offset and alignment properties of annotation allows you to align the connector annotations with respect to the segments.

The following code example illustrates how to align connector annotations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/segment-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/segment-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/segment-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/segment-cs1" %}

## Margin

[`Margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#margin-marginmodel) is an absolute value used to add some blank space in any one of its four sides. The annotations can be displaced with the margin property.

The following code example illustrates how to align a annotation based on its `offset`, `horizontalAlignment`, `verticalAlignment`, and `margin` values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/margin-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/margin-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/margin-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/margin-cs1" %}

## Text align

The [`textAlign`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textAlign-textalign) property of annotation allows you to set how the text should be aligned (left, right, center, or justify) inside the text block. The following codes illustrate how to set textAlign for an annotation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/textalign-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/textalign-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/textalign-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/textalign-cs1" %}

## Hyperlink

Diagram provides a support to add a [`hyperlink`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#hyperLink-hyperlinkmodel) for the nodes/connectors annotation. It can also be customized.

A User can open the hyperlink in the new window, the same tab and the new tab by using the  [`hyperlinkOpenState`](https://ej2.syncfusion.com/angular/documentation/api/annotationModel/hyperlinkmodel/#hyperlinkopenstate)  property

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/hyperlink-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/hyperlink-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/hyperlink-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/hyperlink-cs1" %}

## Template Support for Annotation

Diagram provides template support for annotation. you should define a SVG/HTML content as string in the annotation's [`template`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#template-string) property.

The following code illustrates how to define a template in node's annotation. similarly, you can define it in connectors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/labeltemplate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/labeltemplate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/labeltemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/labeltemplate-cs1" %}

## Wrapping

When text overflows node boundaries, you can control it by using [`text wrapping`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textWrapping-textwrap). So, it is wrapped into multiple lines. The wrapping property of annotation defines how the text should be wrapped. The following code illustrates how to wrap a text in a node.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/wrapping-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/wrapping-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/wrapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/wrapping-cs1" %}

| Value | Description | Image |
| -------- | -------- | -------- |
| No Wrap | Text will not be wrapped. | ![Label No Wrap](images/Wrap1.png) |
| Wrap | Text-wrapping occurs, when the text overflows beyond the available node width. | ![Label Wrap](images/Wrap2.png) |
| WrapWithOverflow (Default) | Text-wrapping occurs, when the text overflows beyond the available node width. However, the text may overflow beyond the node width in the case of a very long word. | ![Label WrapWith Overflow](images/Wrap3.png) |

## Text overflow

The label’s [`TextOverflow`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textOverFlow-textoverflow) property is used control whether to display the overflowed content in node or not.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/overflow-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/overflow-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/overflow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/overflow-cs1" %}

## Appearance

* You can change the font style of the annotations with the font specific properties (fontSize, fontFamily, color). The following code illustrates how to customize the appearance of the annotation.

* The label’s [`bold`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#bold-boolean), [`italic`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#italic-boolean), and [`textDecoration`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textDecoration-textdecoration) properties are used to style the label’s text.

* The label’s [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#fill-string), [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#strokeColor-string), and [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#strokeWidth-number) properties are used to define the background color and border color of the annotation and the [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#opacity-number) property is used to define the transparency of the annotations.

* The [`visible`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#visibility-number) property of the annotation enables or disables the visibility of annotation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/appear-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/appear-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/appear-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/appear-cs1" %}

The fill, border, and opacity appearances of the text can also be customized with appearance specific properties of annotation. The following code illustrates how to customize background, opacity, and border of the annotation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/opacity-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/opacity-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/opacity-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/opacity-cs1" %}

## Interaction

Diagram allows annotation to be interacted by selecting, dragging, rotating, and resizing. Annotation interaction is disabled, by default. You can enable annotation interaction with the [`constraints`](./constraints#annotation-constraints) property of annotation. You can also curtail the services of interaction by enabling either selecting, dragging, rotating, or resizing individually with the respective constraints property of annotation. The following code illustrates how to enable annotation interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/interaction-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/interaction-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/interaction-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/interaction-cs1" %}

## Edit

Diagram provides support to edit an annotation at runtime, either programmatically or interactively. By default, annotation is in view mode. But it can be brought to edit mode in two ways;

* Programmatically, by using [`startTextEdit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#startTextEdit) method, edit the text through programmatically.

* Interactively
    1. By double-clicking the annotation.
    2. By selecting the item and pressing the F2 key.

Double-clicking any annotation will enables editing and the node enables first annotation editing. When the focus of editor is lost, the annotation for the node is updated.

When you double-click on the node/connector/diagram model, the [`doubleClick`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#doubleClick--emittypeidoubleClickeventargs) event gets triggered.

## Read-only annotations

Diagram allows to create read-only annotations. You have to set the read-only property of annotation to enable/disable the read-only [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#constraints-annotationconstraints). The following code illustrates how to enable read-only mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/read-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/read-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/read-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/read-cs1" %}

## Drag Limit

* The diagram control now supports defining the [`dragLimit`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#dragLimit) to the label while dragging from the connector and also update the position to the nearest segment offset.

* You can set the value to dragLimit [`left`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#left), [`right`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#right), [`top`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#top), and [`bottom`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/#bottom) properties which allow the dragging of connector labels to a certain limit based on the user defined values.

* By default, drag limit will be disabled for the connector. It can be enabled by setting connector constraints as drag.

* The following code illustrates how to set a dragLimit for connector annotations.

```typescript
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, AnnotationConstraints } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px">
      <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint1' [targetPoint]='targetPoint1'>
                <e-connector-annotations>
                    <e-connector-annotation content='connector' [constraints]="constraints" [dragLimit]="dragLimit">
                    </e-connector-annotation>
                </e-connector-annotations>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public constraints: AnnotationConstraints;
    public dragLimit: MarginModel;
    ngOnInit(): void {
        this.sourcePoint1 = { x: 300, y: 100 };
        this.targetPoint1 = { x: 400, y: 300 };
        //Enables drag constraints for a connector.
        this.constraints = AnnotationConstraints.Interaction | AnnotationConstraints.Drag;
        //Set drag limit for a connector annotation.
        this.dragLimit = {left:20,right:20,top:20,bottom:20};
    }
}
```

## Multiple annotations

You can add any number of annotations to a node or connector. The following code illustrates how to add multiple annotations to a node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/read-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/labels/read-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/read-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/read-cs2" %}

## Constraints

The constraints property of annotation allows you to enable/disable certain annotation behaviors. For instance, you can disable annotation editing.