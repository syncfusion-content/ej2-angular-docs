---
layout: post
title: Interaction in Angular Diagram component | Syncfusion
description: Learn here all about Interaction in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Interaction 
documentation: ug
domainurl: ##DomainURL##
---

# Interaction in Angular Diagram component

## Selection

Selector provides a visual representation of selected elements. It behaves like a container and allows to update the size, position, and rotation angle of the selected elements through interaction and by using program. Single or multiple elements can be selected at a time.

## Single selection

An element can be selected by clicking that element. During single click, all previously selected items are cleared. The following image shows how the selected elements are visually represented.

![Single Selection](images/single-select.gif)

* While selecting the diagram elements, the following events can be used to do your customization.
* When selecting/unselecting the diagram elements, the [`selectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#selectionChange--emittypeiselectionchangeeventargs) event gets triggered.

## Selecting a group

When a child element of any group is clicked, its contained group is selected instead of the child element. With consecutive clicks on the selected element, selection is changed from top to bottom in the hierarchy of parent group to its children.

## Multiple selection

Multiple elements can be selected with the following ways:

* **Ctrl+Click** - During single click, any existing item in the selection list be cleared, and only the item clicked recently is there in the selection list. To avoid cleaning the old selected item, Ctrl key must be on hold when clicking.
* **Selection rectangle/rubber band selection** - Clicking and dragging the diagram area allows to create a rectangular region. The elements that are covered under the rectangular region are selected at the end.

![Multiple Rubberband Selection](images/multiselect_Highlight.gif)

## Select/Unselect elements using program

The client-side methods [`select`](https://ej2.syncfusion.com/angular/documentation/api/diagram#select) and [`clearSelection`](https://ej2.syncfusion.com/angular/documentation/api/diagram#clearselection) help to select or clear the selection of the elements at runtime. The following code example illustrates how to select or clear the selection of an item using program.

Get the current selected items from the [`nodes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#nodes-nodemodel[]) and [`connectors`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#connectors-connectormodel[]) collection of the [`selectedItems`](https://ej2.syncfusion.com/angular/documentation/api/diagram#selectAll#selecteditems-selectormodel) property of the diagram model.

## Select entire elements in diagram programmatically

The client-side method [`selectAll`](https://ej2.syncfusion.com/angular/documentation/api/diagram#selectAll) used to select all the elements such as nodes/connectors in the diagram. Refer to the following link which shows how to use [`selectAll`](https://ej2.syncfusion.com/angular/documentation/api/diagram#selectAll) method on the diagram.

## Drag

* An object can be dragged by clicking and dragging it. When multiple elements are selected, dragging any one of the selected elements move every selected element.
* When you drag the elements in the diagram, the [`positionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#positionChange--emittypeidraggingeventargs) event gets triggered and to do customization in this event.

![Drag](images/drag.gif)

## Resize

* Selector is surrounded by eight thumbs. When dragging these thumbs, selected items can be resized.
* When one corner of the selector is dragged, opposite corner is in a static position.
* When a node is resized, the [`sizeChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sizeChange--emittypeisizechangeeventargs) event gets triggered.

![Resize](images/resize.gif)

>Note: While dragging and resizing, the objects are snapped towards the nearest objects to make better alignments. For better alignments, refer to `Snapping`.

## Rotate

* A rotate handler is placed above the selector. Clicking and dragging the handler in a circular direction lead to rotate the node.
* The node is rotated with reference to the static pivot point.
* Pivot thumb (thumb at the middle of the node) appears while rotating the node to represent the static point.

![rotate](images/rotate.gif)

## Connection editing

* Each segment of a selected connector is editable with some specific handles/thumbs.

>Note: For connector editing, you have to inject the [`ConnectorEditing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorEditing) module.

## End point handles

Source and target points of the selected connectors are represented with two handles. Clicking and dragging those handles help you to adjust the source and target points.

![Drag End Point Handles](images/connector-end-point.gif)

* If you drag the connector end points, then the following events can be used to do your customization.
* When the connector source point is changed, the [`sourcePointChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sourcePointChange--emittypeiendchangeeventargs) event gets triggered.
* When the connector target point is changed, the [`targetPointChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#targetPointChange--emittypeiendchangeeventargs) event gets triggered.
* When you connect connector with ports/node or disconnect from it, the [`connectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#connectionChange--emittypeiconnectionchangeeventargs) event gets triggered.

## Straight segment editing

* End point of each straight segment is represented by a thumb that enables to edit the segment.
* Any number of new segments can be inserted into a straight line by clicking, when Shift and Ctrl keys are pressed (Ctrl+Shift+Click).

![Straight Segment Editing Addition](images/straight-segment-add.gif)

* Straight segments can be removed by clicking the segment end point, when Ctrl and Shift keys are pressed (Ctrl+Shift+Click).

![straight-segment-remove-gif](images/straight-segment-remove.gif)

## Orthogonal thumbs

* Orthogonal thumbs allow you to adjust the length of adjacent segments by clicking and dragging it.
* When necessary, some segments are added or removed automatically, when dragging the segment. This is to maintain proper routing of orthogonality between segments.
* The orthogonal segment thumbs can be edited, by injecting the [`ConnectorEditing`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorEditing) module. The connector constraints has to be set as DragSegmentThumb. The following code example illustrates how to edit an orthogonal segment.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/interaction/connectoredit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/interaction/connectoredit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/interaction/connectoredit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/interaction/connectoredit-cs1" %}

![orthogonal Segment Edit](images/orthogonal-segment-edit.gif)

## Bezier thumbs

Bezier segments are annotated with two thumbs to represent the control points. Control points of the curve can be configured by clicking and dragging the control thumbs.

![Bezier Segement Thumb](images/bezier-segement-thumb.gif)

## Drag and drop nodes over other elements

Diagram provides support to drop a node/connector over another node/connector. The [`drop`](https://ej2.syncfusion.com/angular/documentation/api/diagram#drop--emittypeidropeventargs) event is raised to notify that an element is dropped over another one and it is disabled, by default. It can enabled with the constraints property.

## User handles

* User handles are used to add some frequently used commands around the selector. To create user handles, define and add them to the [`userHandles`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#userHandles-userhandlemodel[]) collection of the [`selectedItems`](https://ej2.syncfusion.com/angular/documentation/api/diagram#selectAll#selecteditems-selectormodel) property.
* The name property of user handle is used to define the name of the user handle and its further used to find the user handle at runtime and do any customization.

## Alignment

User handles can be aligned relative to the node boundaries. It has [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#margin-marginmodel), [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#offset-number), [`side`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#side-side), [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#horizontalalignment-horizontalalignment), and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#verticalalignment-verticalalignment) settings. It is quite tricky when all four alignments are used together but gives more control over alignment.

## Offset

The [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#offset-number) property of [`userHandles`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to align the user handle based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

## Side

The [`side`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#side-side) property of [`userHandles`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to align the user handle by using the [`Top`](https://ej2.syncfusion.com/angular/documentation/api/diagram/side#top), [`Bottom`](https://ej2.syncfusion.com/angular/documentation/api/diagram/side#bottom), [`Left`](https://ej2.syncfusion.com/angular/documentation/api/diagram/side#left), and [`Right`](https://ej2.syncfusion.com/angular/documentation/api/diagram/side#right) options.

## Horizontal and vertical alignments

The [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#horizontalalignment-horizontalalignment) property of [`userHandles`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#userHandles-userhandlemodel[]) is used to set how the user handle is horizontally aligned at the position based on the [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#offset-number). The [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#verticalalignment-verticalalignment) property is used to set how user handle is vertically aligned at the position.

## Margin

Margin is an absolute value used to add some blank space in any one of its four sides. The [`userHandles`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#userHandles-userhandlemodel[]) can be displaced with the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#margin-marginmodel) property.

## Notification for the mouse button clicked

The diagram component notifies the mouse button clicked. For example, whenever the right mouse button is clicked, the clicked button is notified as right. The mouse click is notified with,

| Notification | Description |
|----------------|--------------|
| Left | When the left mouse button is clicked, left is notified  |
| Middle | When the mouse wheel is clicked, middle is notified |
| Right | When the right mouse button is clicked, right is notified |

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px" (click)="click($event)"></ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    ngOnInit(): void {
    }
    public click(args: IClickEventArgs): void {
    // Obtains the mouse button clicked
     var button = args.button
  }
}
```

## Appearance

The appearance of the user handle can be customized by using the [`size`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#size-number), [`borderColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#bordercolor-string), [`backgroundColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#backgroundcolor-string), [`visible`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#visible-boolean), [`pathData`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#pathdata-string), and [`pathColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/userHandle#pathcolor-string) properties of the [`userHandles`](https://ej2.syncfusion.com/angular/documentation/api/diagram/selectorModel#userHandles-userhandlemodel[]).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/interaction/userhandle-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/interaction/userhandle-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/interaction/userhandle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/interaction/userhandle-cs1" %}

## Zoom pan

* When a large diagram is loaded, only certain portion of the diagram is visible. The remaining portions are clipped. Clipped portions can be explored by scrolling the scrollbars or panning the diagram.
* Diagram can be zoomed in or out by using Ctrl + mouse wheel.
* When the diagram is zoomed or panned, the [`scrollChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#scrollChange--emittypeiscrollchangeeventargs) event gets triggered.

![Zoom Pan](images/Zoom-pan.gif)

## Zoom pan status

Diagram provides the support to notify the pan status of the zoom pan tool. When ever the diagram is panning the [`scrollChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#scrollChange--emittypeiscrollchangeeventargs) event is triggered and hence the pan status can be obtained. The pan status is notified with Start, Progress, and Completed.

|  Pan Status  | Description|
|--------------|---------|
| Start | When the mouse is clicked and dragged the status is notified as start.|
| Progress | When the mouse is in motion the status is notified as progress.|
| Completed | When panning is stopped the status is notified with completed.|

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults" (created)='created($event)'
    (scrollChange)='scrollChange($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public panStatus: string
    public scrollChange(args: IScrollChangeEventArgs) {
    // Obtains the zoom pan status
    this.panStatus = args.panState;
    }
    public created(args: Object): void {
        //Sets the Zoom pan tool
        this.diagram.tool = DiagramTools.ZoomPan;
        this.diagram.dataBind();
    }
}
```

## Keyboard

Diagram provides support to interact with the elements with key gestures. By default, some in-built commands are bound with a relevant set of key combinations.

The following table illustrates those commands with the associated key values.

| Shortcut Key | Command | Description|
|--------------|---------|------------|
| Ctrl + A | `selectAll` | Select all nodes/connectors in the diagram.|
| Ctrl + C | copy | Copy the diagram selected elements.|
| Ctrl + V | paste | Pastes the copied elements.|
| Ctrl + X | cut | Cuts the selected elements.|
| Ctrl + Z | undo | Reverses the last editing action performed on the diagram.|
| Ctrl + Y | redo | Restores the last editing action when no other actions have occurred since the last undo on the diagram.|
| Delete | delete | Deletes the selected elements.|
| Ctrl/Shift + Click on object |  | Multiple selection (Selector binds all selected nodes/connectors).|
| Up Arrow | nudge(“up”) | `nudgeUp`: Moves the selected elements towards up by one pixel.|
| Down Arrow | nudge(“down”) | `nudgeDown`: Moves the selected elements towards down by one pixel.|
| Left Arrow | nudge(“left”) | `nudgeLeft`: Moves the selected elements towards left by one pixel.|
| Right Arrow | nudge(“right”) | `nudgeRight`: Moves the selected elements towards right by one pixel.|
| Ctrl + MouseWheel | zoom | Zoom (Zoom in/Zoom out the diagram).|
| F2 | `startLabelEditing` | Starts to edit the label of selected element.|
| Esc | `endLabelEditing` | Sets the label mode as view and stops editing.|
| Tab | Tab to Focus | Select the diagram element based on the rendering order when using the "Tab" key.|
| Shift + Tab | Go to Previous Object | This command is employed to shift the selection to the preceding object based on the z-order.|
| Control + B | Bold | Toggle bold formatting for the selected text.|
| Control + I | Italic | Toggle italic formatting for the selected text.|
| Control + U | Underline | Toggle underline formatting for the selected text.|
| Control + D | Duplicate | Duplicate a selected shape.|
| Control + G | Group | Group together multiple selected shapes, allowing them to be treated as a single shape.|
| Control + Shift + U | UnGroup | Ungroup shapes within a previously grouped selection.|
| Control + R | Rotate clockwise | Rotate the selected nodes in clockwise.|
| Control + L | Rotate anti-clockwise | Rotate the selected nodes in counterclockwise.|
| Control + H | Flip Horizontal | Flip the selected elements horizontally.|
| Control + J | Flip Vertical | Flip the selected elements vertically.|
| Control + 1 | Pointer tool | Activate the pointer tool.|
| Control + 2 | Text tool | Activate the text  tool.|
| Control + 3 | Connector tool | Activate the connector tool.|
| Control + 5 | Freeform  tool | Activate the freeform tool.|
| Control + 6 | Line tool | Activate the polyline tool.|
| Control + + | Zoom In | Zoom in the diagram.|
| Control + - | Zoom Out | Zoom out the diagram.|
| Shift + Up Arrow | Up | Moves the selected elements towards up by 5 pixel.|
| Shift + Down Arrow | Down | Moves the selected elements towards down by 5 pixel.|
| Shift + Left Arrow | Left | Moves the selected elements towards left by 5 pixel.|
| Shift + Right Arrow | Right | Moves the selected elements towards right by 5 pixel.|
| Control + Shift + L | Align Text Left | Align the selected text to the left.|
| Control + Shift + C | Center Text Horizontally | Center the selected text horizontally.|
| Control + Shift + R | Align Text Right | Align the selected text to the right.|
| Control + Shift + J | Justify Text Horizontally | Justify the selected text, aligning it to both the left and right margins.|
| Control + Shift + E | Top-align Text Vertically | Align the selected text to the top vertically.|
| Control + Shift + M | Center Text Vertically | Center the selected text vertically.|
| Control + Shift + V | Bottom-align Text Vertically | Align the selected text to the bottom vertically.|
| Control + Shift + B | Send To Back | Send the selected shape backward in the stacking order, making it appear behind other shapes.|
| Control + Shift + F | Bring To Front | Bring the selected shape forward in the stacking order, making it appear in front of other shapes.|
| Control + [ | Send Backward | Move the selected shape one step backward in the layer order. |
| Control + ] | Bring Forward | Move the selected shape one step forward in the layer order.|

## See Also

* [How to create diagram nodes using drawing tools](./tools#shapes)
* [How to create diagram connectors using drawing tools](./tools#connectors )
* [How to disable the diagram interaction](./tools)
* [How to control the diagram history](./undo-redo)
* [How to create overview control to the diagram](./overview)
