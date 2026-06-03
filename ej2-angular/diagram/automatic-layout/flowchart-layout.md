---
layout: post
title: Flowchart layout in Angular Diagram component | Syncfusion®
description: Learn here all about Flowchart layout in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Flowchart layout 
documentation: ug
domainurl: ##DomainURL##
---

# Flowchart layout in Angular Diagram control

The flowchart layout provides a visual representation of processes, workflows, systems, or algorithms in a diagrammatic format. It uses various symbols to depict different actions, with arrows connecting these symbols to indicate the flow or direction of the process. Flowcharts are powerful tools for illustrating step-by-step sequences, making complex processes easier to understand and communicate.

## Common flowchart symbols

Different flowchart symbols have specific meanings used to represent various states and actions in flowcharts. The following table describes the most common flowchart symbols used when creating flowcharts.

|Symbol|Shape name|Description|
|---|---|---|
|![Terminator Symbol for flowchart start and end points](../images/flowchart-images/FlowShapes_Terminator.png)|Terminator|Indicates the beginning and ending of the process.|
|![Data Symbol for input and output operations](../images/flowchart-images/FlowShapes_Data.png)|Data|Indicates data input or output for a process.|
|![Process Symbol for operations and data manipulation](../images/flowchart-images/FlowShapes_Process.png)|Process|Represents an operation or set of operations and data manipulations.|
|![Decision Symbol for branching points in flowchart](../images/flowchart-images/FlowShapes_Decision.png)|Decision|Shows a branching point where a decision is made to choose one of two paths.|
|![Document Symbol for single documents in process](../images/flowchart-images/FlowShapes_Document.png)|Document|Represents a single document or report in the process.|
|![PreDefined Process Symbol for defined task sequences](../images/flowchart-images/FlowShapes_PreDefinedProcess.png)|PreDefinedProcess|Represents a sequence of actions that combine to perform a specific task defined elsewhere.|
|![Stored Data Symbol for data storage steps](../images/flowchart-images/FlowShapes_StoredData.png)|StoredData|Represents a step where data is stored within a process.|
|![Internal Storage Symbol for internal data storage](../images/flowchart-images/internalStorage.png)|InternalStorage|Represents internal storage operations.|
|![Direct Data Symbol for searchable data collections](../images/flowchart-images/FlowShapes_DirectData.png)|DirectData|Represents a collection of information that allows searching, sorting, and filtering.|
|![Sequential Data Symbol for sequential data access](../images/flowchart-images/sequentialData.png)|SequentialData|Represents data that must be accessed sequentially.|
|![Sort Symbol for organizing data sequentially](../images/flowchart-images/sort.png)|Sort|Represents a step that organizes items in a list sequentially.|
|![Paper Tape Symbol for data storage process](../images/flowchart-images/paperTap.png)|PaperTap|Represents a step where data is stored within a process.|
|![Manual Input Symbol for manual data entry](../images/flowchart-images/FlowShapes_ManualInput.png)|ManualInput|Represents the manual input of data into a field or step in a process.|
|![Manual Operation Symbol for manual process steps](../images/flowchart-images/FlowShapes_ManualOperation.png)|ManualOperation|Represents an operation in a process that must be performed manually, not automatically.|
|![Preparation Symbol for setup and initialization](../images/flowchart-images/FlowShapes_Preparation.png)|Preparation|Represents a setup or initialization process before another step in the process.|
|![Off Page Reference Symbol for cross-page connections](../images/flowchart-images/FlowShapes_OffPageReference.png)|OffPageReference|Represents a labeled connector used to link two flowcharts on different pages.|
|![Multi Document Symbol for multiple documents](../images/flowchart-images/FlowShapes_MultiDocument.png)|MultiDocument|Represents multiple documents or reports in the process.|
|![Card Symbol for data card operations](../images/flowchart-images/card.png)|Card|Represents a data card or punched card used for data entry or storage.|
|![Summing Junction Symbol for logical AND operations](../images/flowchart-images/summingJunction.png)|SummingJunction|Represents the logical AND operation, merging multiple inputs into a single output.|
|![Or Symbol for logical OR operations](../images/flowchart-images/or.png)|Or|Represents the logical OR operation.|
|![Merge Symbol for combining processes](../images/flowchart-images/merge.png)|Merge|Represents a step where two or more sub-lists or sub-processes become one.|
|![Extract Symbol for data retrieval operations](../images/flowchart-images/extract.png)|Extract|Represents retrieving or obtaining data from a source for further processing or analysis.|
|![Delay Symbol for process delays](../images/flowchart-images/delay.png)|Delay|Represents a period of delay in a process.|
|![Collate Symbol for data gathering operations](../images/flowchart-images/collate.png)|Collate|Represents the process of gathering and arranging data or documents from multiple sources into a structured format.|
|![Annotation Symbol for additional information](../images/flowchart-images/annotation.png)|Annotation|Represents additional information or clarifications about a process or decision point in the flowchart.|
|![Annotation2 Symbol for comments and notes](../images/flowchart-images/annotation2.png)|Annotation2|Represents additional information or comments about a process in the flowchart.|
|![Sequential Access Storage Symbol for sequential storage](../images/flowchart-images/sequentialAccess.png)|SequentialAccessStorage|Represents information that is stored in a sequence.|
|![Display Symbol for output presentation](../images/flowchart-images/display.png)|Display|Represents information, data, or output being shown on a screen or printed for user review.|
|![Loop Limit Symbol for loop constraints](../images/flowchart-images/looplimit.png)|LoopLimit|Represents the maximum number of times a particular process or operation can be repeated within a loop.|
|![Connector Symbol for flow direction](../images/flowchart-images/FlowShapes_Connector.png)|Connector|Represents the direction of flow from one step to another. This connector is created automatically based on the relationship between parent and child nodes.|

## Render flowchart layout with data source

To render a flowchart layout, set the [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#type) property to `Flowchart`. The following code example demonstrates how to render a flowchart layout using a data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/flowchart-cs1" %}

![Flowchart layout diagram showing automated node arrangement](../images/flowchart-images/Flowchart_Layout.png)

N> To convert a data source into a flowchart layout, inject the DataBinding module along with the FlowchartLayout module in the diagram.

## Configuring data source with appearance settings

In the flowchart layout, you can define the desired shape, style, and label for each node, as well as the decorator type for connectors, directly within the data source. Structure the data source as shown in the example below:

```javascript
var Data = [
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
        "label": ['A-B'],
        "arrowType": "Fletch",
        "stroke": "#333",
        "strokeWidth": 2
    }
]
```

### Data source field definitions

- **`name`**: Text annotation displayed on the node
- **`shape`**: Node shape type (e.g., Terminator, Process, Decision)
- **`color`**: Fill color for the node background
- **`stroke`**: Border color of the node
- **`strokeWidth`**: Border thickness in pixels
- **`label`**: Annotations for incoming connectors
- **`arrowType`**: Arrowhead type for incoming connectors (e.g., Diamond, Fletch)

This structure enables comprehensive customization of the flowchart's visual elements based on the provided data source.

## Render flowchart layout with nodes and connectors

The following example demonstrates how to render a flowchart layout using predefined nodes and connectors. Define the [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel) and [`connectors`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectormodel) collections and assign them to the diagram. Set the [`layoutType`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#type) to `Flowchart` to enable automatic arrangement.

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

Customize the flow direction of the flowchart using the [`orientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/layout#orientation) property of the layout class. The flowchart can flow either vertically from top to bottom or horizontally from left to right. The default orientation is `TopToBottom`.

### Top to bottom orientation

This orientation arranges elements vertically, flowing from top to bottom. It is commonly used in flowcharts to represent the sequential progression of steps or actions in a process.

```typescript
// Initialize the diagram
<ejs-diagram #diagram id="diagram" width="100%" height="600px" [layout]="layout"> </ejs-diagram>

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public layout?: LayoutModel;
  ngOnInit(): void {
    this.layout = {
        // Sets layout type
        type: 'Flowchart',
        // Sets the orientation of the layout
        orientation: 'TopToBottom'
    };
  }
}
```

![Flowchart layout with top to bottom orientation](../images/flowchart-images/Flowchart_Layout.png)

### Left to right orientation

This orientation arranges elements horizontally, flowing from left to right. It is typically used to represent processes or workflows that move sequentially across the page, emphasizing a linear progression of steps or actions.

```typescript
// Initialize the diagram
<ejs-diagram #diagram id="diagram" width="100%" height="600px" [layout]="layout"> </ejs-diagram>

export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public layout?: LayoutModel;
  ngOnInit(): void {
    this.layout = {
        // Sets layout type
        type: 'Flowchart',
        // Sets the orientation of the layout
        orientation: 'LeftToRight'
    };
  }
}
```

![Flowchart layout with left to right orientation](../images/flowchart-images/Flowchart_LeftToRight.png)

## Customize decision output directions

The decision symbol in a flowchart represents a question or condition that leads to different paths based on a binary outcome (Yes/No, True/False). Customize the output direction of these paths using the [`yesBranchDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram/branchDirection) and [`noBranchDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram/branchDirection) properties of the [`flowchartLayoutSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel) class.

### Branch direction options

- **`LeftInFlow`** - Arranges the Yes/No branch to the left of the decision symbol
- **`RightInFlow`** - Arranges the Yes/No branch to the right of the decision symbol  
- **`SameAsFlow`** - Aligns the Yes/No branch in the same direction as the flow of the decision symbol

The following example shows a flowchart layout with `yesBranchDirection` set to `SameAsFlow` and `noBranchDirection` set to `LeftInFlow`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/flowchart-cs3" %}

### Decision branch behavior reference

The following table illustrates the visual behavior of different branch direction combinations:

|YesBranchDirection| NoBranchDirection | TopToBottom | LeftToRight |
|---|---|---|---|
| Left In Flow |Right In Flow|![Decision output with left yes and right no branches in vertical layout](../images/flowchart-images/Flowchart_VerticalLeftAndRightBranches.png)|![Decision output with left yes and right no branches in horizontal layout](../images/flowchart-images/Flowchart_HorizontalLeftAndRightBranches.png)|
| Right In Flow |Left In Flow |![Decision output with right yes and left no branches in vertical layout](../images/flowchart-images/Flowchart_VerticalRightAndLeftBranches.png)|![Decision output with right yes and left no branches in horizontal layout](../images/flowchart-images/Flowchart_HorizontalRightAndLeftBranches.png) |
| Same As Flow |Right In Flow |![Decision output with same flow yes and right no branches in vertical layout](../images/flowchart-images/Flowchart_VerticalSameAndRightBranches.png)|![Decision output with same flow yes and right no branches in horizontal layout](../images/flowchart-images/Flowchart_HorizontalSameAndRightBranches.png) |
| Same As Flow |Left In Flow |![Decision output with same flow yes and left no branches in vertical layout](../images/flowchart-images/Flowchart_YesSame_NoLeft.png)|![Decision output with same flow yes and left no branches in horizontal layout](../images/flowchart-images/Flowchart_YesSame_NoLeft_LTR.png) |
| Right In Flow | Same As Flow |![Decision output with right yes and same flow no branches in vertical layout](../images/flowchart-images/Flowchart_VerticalRightAndSameBranches.png)|![Decision output with right yes and same flow no branches in horizontal layout](../images/flowchart-images/Flowchart_HorizontalRightAndSameBranches.png) |
| Left In Flow | Same As Flow |![Decision output with left yes and same flow no branches in vertical layout](../images/flowchart-images/Flowchart_YesLeft_NoSame.png)|![Decision output with left yes and same flow no branches in horizontal layout](../images/flowchart-images/Flowchart_YesLeft_NoSame_LTR.png) |
|Same As Flow |Same As Flow|![Decision output with both branches in same flow direction in vertical layout](../images/flowchart-images/Flowchart_VerticalSameBranches.png)|![Decision output with both branches in same flow direction in horizontal layout](../images/flowchart-images/Flowchart_HorizontalSameBranches.png)|

N> When both branch directions are set to the same value, the Yes branch takes priority in positioning.

## Custom Yes and No branch values

The decision symbol produces two output branches: a Yes branch and a No branch. Configure custom text values to determine branch classification using the [`yesBranchValues`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel#yesbranchvalues) and [`noBranchValues`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel#nobranchvalues) properties of the [`flowchartLayoutSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/flowchartLayoutSettingsModel) class.

### Default branch values

By default:
- **`yesBranchValues`** contains: **"Yes"** and **"True"**
- **`noBranchValues`** contains: **"No"** and **"False"**

### Custom branch classification

When a connector's text value matches any value in the `yesBranchValues` array, it is classified as a Yes branch. Similarly, when the connector text matches any value in the `noBranchValues` array, it is classified as a No branch. This enables flexible decision flow control using custom terminology appropriate for your specific use case.

The following example demonstrates how to set custom text values for yes and no branches.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/automaticlayout/flowchart-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/automaticlayout/flowchart-cs4" %}

![Flowchart layout with custom yes and no branch values](../images/flowchart-images/Flowchart_CustomYesOrNoBranches.png)