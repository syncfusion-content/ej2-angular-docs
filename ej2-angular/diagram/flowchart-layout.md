---
layout: post
title: Flowchart layout in Angular Diagram component | Syncfusion
description: Learn here all about Flowchart layout in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Flowchart layout 
documentation: ug
domainurl: ##DomainURL##
---
# Flowchart layout in Angular Diagram control

The flowchart layout provides a visual representation of processes, workflows, systems, or algorithms in a diagrammatic format. It uses various symbols to depict different actions, with arrows connecting these symbols to indicate the flow or direction of the process. Flowcharts are essential tools for illustrating step-by-step sequences, making complex processes easier to understand and communicate.

## Common flowchart symbols

Different flowchart symbols have different meanings that are used to represent different states in flowchart. The following table describes the most common flowchart symbols that are used in creating flowchart.

|Symbol|Shape name|Description|
|---|---|---|
|![Ej2 Diagram displays Terminator Symbol](./images/flowchart-images/FlowShapes_Terminator.png)|Terminator|Indicates the beginning and ending of the process.|
|![Ej2 Diagram displays Data Symbol](./images/flowchart-images/FlowShapes_Data.png)|Data|Indicates data input or output for a process.|
|![Ej2 Diagram displays Process Symbol](./images/flowchart-images/FlowShapes_Process.png)|Process|Represents an operation or set of operations and data manipulations.|
|![Ej2 Diagram displays Decision Symbol](./images/flowchart-images/FlowShapes_Decision.png)|Decision|Shows a branching point where the decision is made to choose one of the two paths|
|![Ej2 Diagram displays Document Symbol](./images/flowchart-images/FlowShapes_Document.png)|Document|Represents a single document or report in the process.|
|![Ej2 Diagram displays SubProcess Symbol](./images/flowchart-images/FlowShapes_PreDefinedProcess.png)|PreDefinedProcess|Represents a sequence of actions that combine to perform a specific task that is defined elsewhere.|
|![Ej2 Diagram displays Stored data Symbol](./images/flowchart-images/FlowShapes_StoredData.png)|StoredData|Represents a step where data get stored within a process.|
|![Ej2 Diagram displays internal storage Symbol](./images/flowchart-images/internalStorage.png)|InternalStorage|Represents the internal storage|
|![Ej2 Diagram displays DirectData Symbol](./images/flowchart-images/FlowShapes_DirectData.png)|DirectData|Represents a collection of information that allows searching, sorting, and filtering.|
|![Ej2 Diagram displays SequentialData Symbol](./images/flowchart-images/sequentialData.png)|SequentialData|Represents the data that must be accessed sequentially|
|![Ej2 Diagram displays SequentialData Symbol](./images/flowchart-images/sort.png)|Sort|Represents a step that organizes items list sequentially|
|![Blazor Diagrma displays StoredData Symbol](./images/flowchart-images/paperTap.png)|PaperTap|Represents a step where data get stored within a process.|
|![Ej2 Diagram displays ManualInput Symbol](./images/flowchart-images/FlowShapes_ManualInput.png)|ManualInput|Represents the manual input of data into a field or step in a process.|
|![Ej2 Diagram displays ManualOperation Symbol](./images/flowchart-images/FlowShapes_ManualOperation.png)|ManualOperation|Represents an operation in a process that must be done manually, not automatically.|
|![Ej2 Diagram displays Preparation Symbol](./images/flowchart-images/FlowShapes_Preparation.png)|Preparation|Represents a setup or initialization process to another step in the process.|
|![Ej2 Diagram displays OffPageReference Symbol](./images/flowchart-images/FlowShapes_OffPageReference.png)|OffPageReference|Represents a labeled connector used to link two flowcharts on different pages.|
|![Ej2 Diagram displays MultiDocument Symbol](./images/flowchart-images/FlowShapes_MultiDocument.png)|MultiDocument|Represents multiple documents or reports in the process.|
|![Ej2 Diagram displays card Symbol](./images/flowchart-images/card.png)|Card|Represents a data card or punched card used for data entry or storage |
|![Ej2 Diagram displays SummingJunction Symbol](./images/flowchart-images/summingJunction.png)|SummingJunction|Represents the logical AND (merge multiple inputs into a single output). |
|![Ej2 Diagram displays Or Symbol](./images/flowchart-images/or.png)|Or|Represents the logical OR|
|![Ej2 Diagram displays Merge Symbol](./images/flowchart-images/merge.png)|Merge|Represents a step where two or more sub-lists or sub-processes become one.|
|![Ej2 Diagram displays Extract Symbol](./images/flowchart-images/extract.png)|Extract|Represents retrieving or obtaining data from a source for further processing or analysis in a flowchart.|
|![Ej2 Diagram displays delay Symbol](./images/flowchart-images/delay.png)|Delay|Represents the period of delay in a process|
|![Ej2 Diagram displays Collate Symbol](./images/flowchart-images/collate.png)|Collate|Represents the process of gathering and arranging data or documents from multiple sources into a structured format.|
|![Ej2 Diagram displays Annotation Symbol](./images/flowchart-images/annotation.png)|Annotation|Represents additional information, clarifications, about a process or decision point in the flowchart.|
|![Ej2 Diagram displays Annotation2 Symbol](./images/flowchart-images/annotation2.png)|Annotation2|Represents additional information, or comments about a process in the flowchart.|
|![Ej2 Diagram displays Sequential access storage Symbol](./images/flowchart-images/sequentialAccess.png)|SequentialAccessStorage|Represents information that is stored in a sequence.|
|![Ej2 Diagram displays Display Symbol](./images/flowchart-images/display.png)|Display|Represents that the information, data, or output is being shown on a screen or printed for the user’s review.|
|![Ej2 Diagram displays Loop limit Symbol](./images/flowchart-images/looplimit.png)|LoopLimit|Represents a maximum number of times a particular process or operation can be repeated within a loop.|
|![Ej2 Diagram displays Connector Symbol](./images/flowchart-images/FlowShapes_Connector.png)|Connector|Represents a direction of flow from one step to another. It will get created automatically based on the relationship between the parent and child.|

## Render Flowchart layout with data source

To render `flowchart` layout, you need to set the [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#type) property as `Flowchart`. The following code example displays how to render flowchart layout using data source.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/flowchart-cs1" %}

![EJ2 Flowchart layout diagram](./images/flowchart-images/Flowchart_Layout.png)

>Note: If you want to convert the data source into flowchart layout, you need to inject DataBinding along with FlowchartLayout module in the diagram.


## Defining data source with appearance configuration

In the flowchart layout, you can define the desired shape, style, and label for each node, as well as the decorator type for connectors, directly within the data source. The data source should be structured as shown in the example below:

```javascript
 var Data =  [
        {
            "id": "A",
            "name": "Start",
            "shape": "Terminator",
            "color": "#90EE90",
            "parentId": null,
            "stroke": "#333",
            "strokeWidth": 2
        },
        {
            "id": "B",
            "name": "Process",
            "shape": "Process",
            "color": "#4682B4",
            "parentId": [
                "A"
            ],
            "label":['A-B'],
            "arrowType": "Fletch",
            "stroke": "#333",
            "strokeWidth": 2
        },
    ]

```


### Field Definitions
- `name`: Represents the annotation displayed on the node.
- `shape`: Defines the shape of the node (e.g., Terminator, Process).
- `color`: Specifies the fill color of the node.
- `stroke`: Defines the border color of the node.
- `strokeWidth`: Specifies the border thickness of the node.
- `label`: Adds annotations to the incomming connectors.
- `arrowType`: Determines the arrowhead type (decorator) of the incoming connector (e.g., Diamond, Fletch).

This structure allows for easy customization of the flowchart's visual elements based on the provided data source.


## Render Flowchart layout with nodes and connectors

The following example demonstrates how to render a flowchart layout using nodes and connectors. To achieve this, you need to define the [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/) and [`connectors`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectormodel/) collections and assign them to the diagram. Additionally, you need to set the [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#type) to `Flowchart`.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/flowchart-cs2" %}


## Customize flowchart layout orientation

The sequence of a node's direction can be customized by flowchart's orientation, either vertically from top to bottom or horizontally from left to right. The [orientation](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout/#orientation) property of the layout class allows you to define the flow direction for the flowchart as either `TopToBottom` or `LeftToRight`. The default orientation is `TopToBottom`.


### TopToBottom orientation

This orientation arranges elements in the layout vertically, flowing from top to bottom. It is commonly used in flowcharts to represent the sequential progression of steps or actions in a process.

```typescript

//Initialize the diagram
<ejs-diagram #diagram id="diagram" width="100%" height="600px" [layout]="layout"> </ejs-diagram>

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public layout?: LayoutModel;
  ngOnInit(): void {
    this.layout = {
        //Sets layout type
        type: 'Flowchart',
        //Sets the orientation of the layout
        orientation: 'TopToBottom'
    },
  }
};

```


![EJ2 Flowchart layout diagram](./images/flowchart-images/Flowchart_Layout.png)


### LeftToRight orientation

This orientation arranges elements in the layout horizontally, flowing from left to right. It is typically used to represent processes or workflows that move sequentially across the page, emphasizing a linear progression of steps or actions.

```typescript

//Initialize the diagram
<ejs-diagram #diagram id="diagram" width="100%" height="600px" [layout]="layout"> </ejs-diagram>

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public layout?: LayoutModel;
  ngOnInit(): void {
    this.layout = {
        //Sets layout type
        type: 'Flowchart',
        //Sets the orientation of the layout
        orientation: 'LeftToRight'
    },
  }
};

```


![EJ2 Flowchart layout diagram](./images/flowchart-images/Flowchart_LeftToRight.png)


## Customize the decision output directions

The decision symbol in a flowchart represents a question or condition that leads to different paths based on a binary outcome (Yes/No, True/False). You can customize the output direction of these paths using the [`yesBranchDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram/branchDirection/) and [`noBranchDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram/branchDirection/) properties of the [`flowchartLayoutSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel/) class.

- `LeftInFlow` - Arranges the Yes/No branch to the left of the decision symbol.
- `RightInFlow` - Arranges the Yes/No branch to the right of the decision symbol.
- `SameAsFlow` - Aligns the Yes/No branch in the same direction as the flow of the decision symbol.

The following example shows flowchart layout with `yesBranchDirection` as `SameAsFlow` and `noBranchDirection` as `LeftInFlow`.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/flowchart-cs3" %}


The following table will explain the pictorial representation of the behavior:

|YesBranchDirection| NoBranchDirection | TopToBottom | LeftToRight |
|---|---|---|---|
| Left In Flow |Right In Flow|![EJ2 Diagram displays Decision Output in Vertical](./images/flowchart-images/Flowchart_VerticalLeftAndRightBranches.png)|![EJ2 Diagram displays Decision Output in Horizontal](./images/flowchart-images/Flowchart_HorizontalLeftAndRightBranches.png)|
| Right In Flow |Left In Flow |![EJ2 Diagram displays Decision Output in Vertical](./images/flowchart-images/Flowchart_VerticalRightAndLeftBranches.png)|![EJ2 Diagram displays Decision Output in Horizontal](./images/flowchart-images/Flowchart_HorizontalRightAndLeftBranches.png) |
| Same As Flow |Right In Flow |![EJ2 Diagram displays Decision Output in Vertical](./images/flowchart-images/Flowchart_VerticalSameAndRightBranches.png)|![EJ2 Diagram displays Decision Output in Horizontal](./images/flowchart-images/Flowchart_HorizontalSameAndRightBranches.png) |
| Same As Flow |Left In Flow |![EJ2 Diagram displays Decision Output in Vertical](./images/flowchart-images/Flowchart_YesSame_NoLeft.png)|![EJ2 Diagram displays Decision Output in Horizontal](./images/flowchart-images/Flowchart_YesSame_NoLeft_LTR.png) |
| Right In Flow | Same As Flow |![EJ2 Diagram displays Decision Output in Vertical](./images/flowchart-images/Flowchart_VerticalRightAndSameBranches.png)|![EJ2 Diagram displays Decision Output in Horizontal](./images/flowchart-images/Flowchart_HorizontalRightAndSameBranches.png) |
| Left In Flow | Same As Flow |![EJ2 Diagram displays Decision Output in Vertical](./images/flowchart-images/Flowchart_YesLeft_NoSame.png)|![EJ2 Diagram displays Decision Output in Horizontal](./images/flowchart-images/Flowchart_YesLeft_NoSame_LTR.png) |
|Same As Flow |Same As Flow|![EJ2 Diagram displays Decision Output in Vertical](./images/flowchart-images/Flowchart_VerticalSameBranches.png)|![EJ2 Diagram displays Decision Output in Horizontal](./images/flowchart-images/Flowchart_HorizontalSameBranches.png)|

>Note: If both branch directions are same, **Yes** branch will be prioritized.


## Custom Yes and No branch values

The decision symbol produces two output branches: a Yes branch and a No branch. If the connector text value matches any value in the [`yesBranchValues`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel/#yesbranchvalues) property of the [`flowchartLayoutSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel/) class, it will be considered a Yes branch. Similarly, if the connector text value matches any value in the [`noBranchValues`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel/#nobranchvalues) property, it will be considered a No branch. By default, the `yesBranchValues` property contains the string values **Yes** and **True**, while the `noBranchValues` property contains **No** and **False**.

Any text can be used as the connector text to describe the flow. Additionally, custom string values can be assigned to the `yesBranchValues` and `noBranchValues` properties. To direct the flow based on a conditional decision (if/else), the connector text must match a value in either the `yesBranchValues` or `noBranchValues` properties.

The following example shows how to set custom text to the yes branch and no branch values.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/flowchart-cs4" %}

![EJ2 Flowchart layout diagram](./images/flowchart-images/Flowchart_CustomYesOrNoBranches.png)