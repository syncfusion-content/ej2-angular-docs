---
layout: post
title: Commands in Angular Diagram component | Syncfusion®
description: Learn here all about Commands in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Commands 
documentation: ug
domainurl: ##DomainURL##
---

# Commands in Angular Diagram component

<!-- markdownlint-disable MD010 -->

The commands in diagram control are used to perform various interactions within the diagram when called. Several commands are available in the diagram, as follows:

* Alignment commands
* Distribute commands
* Sizing commands
* Clipboard commands
* Grouping commands
* Z-order commands
* Zoom commands
* Nudge commands
* FitToPage commands
* Undo/Redo commands

## Align commands

The alignment command enables you to align selected or defined objects, such as nodes and connectors, with respect to the selection boundary or the first selected object. The [`align`](https://ej2.syncfusion.com/angular/documentation/api/diagram#align) method parameters are explained below..

### Alignment Options

The [`Alignment Options`](https://ej2.syncfusion.com/angular/documentation/api/diagram/alignmentOptions/) defines the alignment position of objects to be aligned.

|Alignment|Description|
|----|----|
|Left| Aligns all the selected objects at the left of the selection boundary|
|Right| Aligns all the selected objects at the right of the selection boundary|
|Center| Aligns all the selected objects at the center of the selection boundary|
|Top| Aligns all the selected objects at the top of the selection boundary|
|Bottom| Aligns all the selected objects at the bottom of the selection boundary|
|Middle| Aligns all the selected objects at the middle of the selection boundary|

<!-- markdownlint-disable MD033 -->

### Objects 

Defines the objects to be aligned. This is an optional parameter. By default, all the nodes and connectors in the selected region of the diagram gets aligned.

### Alignment Mode

[`Alignment Mode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/alignmentMode/) defines the specific mode, with respect to which the objects to be aligned. This is an optional parameter. The default alignment mode is `Object`. The accepted values of the argument "alignment mode" are as follows.

The below table shows the alignment as `Left` for different alignment modes.

|Nodes before alignment|Alignment mode|Description|Output image|
|----|----|----|----|
|![Align original](images/alignOrginal.png)|Object (Default)|Aligns the objects based on the bounds of first object in the selected list.|![Align Object](images/alignObject.png)|
|![Align original](images/alignOrginal.png)|Selector|Aligns the objects based on the selection boundary.|![Align Selector](images/alignSelector.png)|


The following code example illustrates how to align all the selected objects at the left side of the selection boundary.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/alignMode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/alignMode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/alignMode-cs1" %}

![Align Sample](images/Commands_img1.png)

## Distribute commands

The [`Distribute`](https://ej2.syncfusion.com/angular/documentation/api/diagram#distribute) method enable you to place the selected objects on the page at equal intervals from each other. The selected objects are equally spaced within the selection boundary. The [`Distribute`](https://ej2.syncfusion.com/angular/documentation/api/diagram#distribute) method parameters are explained below.

### Distribute options

The factors for distributing shapes using  [`DistributeOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/distributeOptions#DistributeOptions) are listed as follows:

|Distribute option| Description|
|----|----|
| RightToLeft | Distributes the objects based on the distance between the right and left sides of the adjacent objects. |
| Left | Distributes the objects based on the distance between the left sides of the adjacent objects. |
| Right | Distributes the objects based on the distance between the right sides of the adjacent objects. |
| Center | Distributes the objects based on the distance between the center of the adjacent objects. |
| BottomToTop | Distributes the objects based on the distance between the bottom and top sides of the adjacent objects. |
| Top | Distributes the objects based on the distance between the top sides of the adjacent objects. |
| Bottom | Distributes the objects based on the distance between the bottom sides of the adjacent objects. |
| Middle | Distributes the objects based on the distance between the vertical center of the adjacent objects. |

### Objects 

Defines the objects to be distributed. This is an optional parameter. By default, all the nodes and connectors in the selected region of the diagram gets distributed.

The following code example illustrates how the nodes are distributed using the `RightToLeft` option.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/distribute-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/distribute-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/distribute-cs1" %}


![Distribute Sample](images/Commands_img2.png)

## Sizing commands

The [`sameSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#sameSize) command enables you to size all selected nodes to match the size of the first selected object or the first node in the objects collection you provide as the second parameter. The parameters for the [`sameSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sameSize) method are explained below.

### Sizing options

[`SizingOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/sizingOptions) include:

|Sizing options|Description|
|----|----|
| Width | Adjusts the width of all objects to match the width of the first node in the objects collection. |
| Height | Adjusts the height of all objects to match the height of the first node in the objects collection. |
| Size | Adjusts both the width and height of all objects to match the size of the first node in the objects collection. |

### Objects

This optional parameter defines which objects should be scaled. By default, all nodes and connectors within the selected region of the diagram are scaled.

The following code example illustrates how to execute the size commands.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/sizing-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/sizing-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/sizing-cs1" %}

![Sizing Sample](images/Commands_img3.png)

## Clipboard commands

Clipboard commands are used to cut, copy, or paste selected elements in the diagram using the[`cut`](https://ej2.syncfusion.com/angular/documentation/api/diagram#cut), [`copy`](https://ej2.syncfusion.com/angular/documentation/api/diagram#copy), [`paste`](https://ej2.syncfusion.com/angular/documentation/api/diagram#paste) methods. You can also use keyboard shortcuts for these actions. For detailed information on using these methods refer the below table.

| Command (Shortcut key) | Description |
|---------|-------------|
| `Cut` (CTRL+X)  | Removes the selected elements from the diagram and places them onto the diagram’s clipboard. This operation is performed using the [`cut`](https://ej2.syncfusion.com/angular/documentation/api/diagram#cut) method. |
| `Copy`(CTRL+C)  | Duplicates the selected elements and places them onto the diagram’s clipboard without removing them from their original location. Use the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/diagram#copy) method for this operation. |
| `Paste`(CTRL+V) | Inserts the elements stored on the diagram’s clipboard (nodes and connectors) into the diagram. This can be done using the [`paste`](https://ej2.syncfusion.com/angular/documentation/api/diagram#paste) method. |

The [`paste`](https://ej2.syncfusion.com/angular/documentation/api/diagram#paste) method optionally accepts a collection of nodes or connectors to be added to the diagram.

The following code illustrates how to execute the clipboard commands.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/clipboard-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/clipboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/clipboard-cs1" %}

## Grouping commands

Grouping Commands are used to group or ungroup selected elements in the diagram. Grouping commands help in managing and organizing multiple elements by combining them into a single group or separating them into individual elements. You can also use keyboard shortcuts for these actions. The following table provides more details on these commands:

| Commands (Shortcut key) | Description|
|----|----|
| [`Group`](https://ej2.syncfusion.com/angular/documentation/api/diagram#group) (CTRL+G) | Combines the selected nodes and connectors into a single group, allowing you to move, resize, or apply other operations to all grouped elements as a unit. |
| [`Ungroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram#ungroup) (CTRL+Shift+U) | Splits a previously grouped set of nodes and connectors into individual elements, enabling you to modify or manipulate them separately.            |

The following code examples demonstrate how to use the grouping commands in diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/grouping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/grouping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/grouping-cs1" %}


## Rotate commands

The [`rotate`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#rotate) commands in the diagram allow users to rotate selected elements by specified angles. These commands are useful for adjusting the rotate angle of nodes or shapes within the diagram.

| Parameter | Type | Description |
|----------|-------|-------------|
| obj | NodeModel / ConnectorModel/ SelectorModel | The objects to be rotated. |
| angle | number | The angle by which the objects should be rotated (in degrees). |
| pivot (optional)   | PointModel| The reference point with respect to which the objects will be rotated. |
| rotateUsingHandle (optional) | boolean | Whether to rotate using the handle. |

You can also use CTRL+R to rotate clockwise and CTRL+L to rotate anti-clockwise. The following example shows how to rotate nodes in clockwise and anti-clockwise direction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/rotate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/rotate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/rotate-cs1" %}

## Z-Order command

**Z-Order commands** enable you to visually arrange the selected objects such as nodes and connectors, on the diagram page.

### BringToFront command

The [`bringToFront`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringToFront) command visually brings the selected element to front over all the other overlapped elements. The following code illustrates how to execute the `bringToFront` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/bringtofront-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/bringtofront-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/bringtofront-cs1" %}

### send To back command

The [`sendToBack`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sendToBack) command visually moves the selected element behind all the other overlapped elements. The following code illustrates how to execute the `sendToBack` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/sendtoback-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/sendtoback-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/sendtoback-cs1" %}

### Move Forward command

The [`moveForward`](https://ej2.syncfusion.com/angular/documentation/api/diagram#moveForward) command visually moves the selected element over the nearest overlapping element. The following code illustrates how to execute the `moveForward` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/moveforward-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/moveforward-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/moveforward-cs1" %}

### send Backward command

The [`sendBackward`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sendBackward) command visually moves the selected element behind the underlying element. The following code illustrates how to execute the `sendBackward` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/sendbackward-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/sendbackward-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/sendbackward-cs1" %}

The Z-order commands can also be performed using keyboard shortcuts. For more information, refer to the [`keyboard commands`](./interaction/#keyboard).

## Zoom

The [`zoom`](https://ej2.syncfusion.com/angular/documentation/api/diagram#zoom) command is used to zoom-in and zoom-out the diagram view.

The following code illustrates how to zoom-in/zoom out the diagram.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" (created)='created($event)'>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public created(args: Object): void {
        // Sets the zoomFactor
        //Defines the focusPoint to zoom the Diagram with respect to any point
        //When you do not set focus point, zooming is performed with reference to the center of current Diagram view.
        this.diagram.zoom(1.2, {
            x: 100,
            y: 100
        });
    }
}
```

For more information about zoom refer to the [zoom](././scroll-settings/#update-zoom-at-runtime)

## Nudge command

The [`nudge`](https://ej2.syncfusion.com/angular/documentation/api/diagram#nudge) commands move the selected elements towards up, down, left, or right by 1 pixel. The parameters of [`nudge`](https://ej2.syncfusion.com/angular/documentation/api/diagram#nudge) method is explained below.

| Parameter    | Type           | Description                                                      |
|--------------|-----------|-----------|
| direction    |[`NudgeDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nudgeDirection/) | Defines the direction in which the objects should be moved.      |
| x (optional) | number         | The horizontal distance by which the selected objects should be moved. |
| y (optional) | number         | The vertical distance by which the selected objects should be moved.   |
| type (optional) | string      | A string that defines the type of nudge action.                           |

The accepted values for the "direction" argument are as follows:

* Up: Moves the selected elements up by the specified delta value.
* Down: Moves the selected elements down by the specified delta value.
* Left: Moves the selected elements left by the specified delta value.
* Right: Moves the selected elements right by the specified delta value.

The following code illustrates how to execute nudge command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/nudge-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/nudge-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/nudge-cs1" %}

### Nudge by using arrow keys

The arrow keys can be used to move the selected elements up, down, left, or right by 1 pixel.

![Nudge Command](images/Commands_img4.png)

Nudge commands are particularly useful for accurate placement of elements.

N> The position change event will not trigger when using keyboard keys to move a node or connector.

## BringIntoView

The [`bringIntoView`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringIntoView) command brings the specified rectangular region into the viewport of the diagram, ensuring that it is visible within the current view.

The [`bringIntoView`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#bringintoview) method takes a single parameter, an object that defines the rectangular region to bring into view. This object should include properties such as x, y, width, and height to specify the exact region to be made visible.

The following code illustrates how to execute the `bringIntoView` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/bringIntoView-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/bringIntoView-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/bringIntoView-cs1" %}

## BringToCenter

The [`bringToCenter`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringToCenter) command brings the specified rectangular region of the diagram content within the viewport.

 The [`bringToCenter`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringToCenter) method takes a single parameter, an object that defines the rectangular region to be centered. This object should include properties such as x, y, width, and height to specify the exact region to be brought to the center.

The following code illustrates how to execute the `bringToCenter` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/bringToCenter-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/bringToCenter-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/bringToCenter-cs1" %}

## FitToPage

The [`fitToPage`](https://ej2.syncfusion.com/angular/documentation/api/diagram#fitToPage) command helps to fit the diagram content into the view with respect to either width, height, or the entire content. The fitToPage method takes one parameter, [`fitOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions/), which specifies the options for fitting the diagram to the page.

### FitOptions

The [`mode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/fitModes#modes) parameter defines whether the diagram has to be horizontally/vertically fit into the viewport with respect to width, height, or entire bounds of the diagram.

The [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramRegions#region) parameter defines the region that has to be drawn as an image.

The [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions#margin) parameter defines the region/bounds of the diagram content that is to be fit into the view.

The [`canZoomIn`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions#canZoomIn) parameter enables/disables zooming to fit the smaller content into a larger viewport.

The [`canZoomOut`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions/#canzoomout) parameter enables or disables zooming out to fit larger content into a smaller viewport.

The [`customBounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions#customBounds) parameter the custom region that has to be fit into the viewport.

The following code illustrates how to execute `FitToPage` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/fitToPage-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/fitToPage-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/fitToPage-cs1" %}

## Command manager

The Diagram provides support for mapping or binding command execution to specific key gestures. It includes built-in commands and allows for the definition of custom commands through the [`CommandManager`](https://ej2.syncfusion.com/angular/documentation/api/diagram/commandManager#commandManager). Custom commands are executed when the specified key gesture is recognized.

## Custom command

To define a custom command, you need to specify the following properties:

* [`execute`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#execute): A method to be executed.
* [`canExecute`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#canexecute): A method to define whether the command can be executed at the moment.
* [`gesture`](https://ej2.syncfusion.com/angular/documentation/api/diagram/keyGestureModel#gesture): A combination of [`keys`](https://ej2.syncfusion.com/angular/documentation/api/diagram/keys#key) and [`KeyModifiers`](https://ej2.syncfusion.com/angular/documentation/api/diagram/keyModifiers#keymodifiers).
* [`parameter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#parameter): Defines any additional parameters that are required at runtime.
* [`name`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#name): Defines the name of the command.

To explore the properties of custom commands, refer to [`Commands`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#commands).

The following code example illustrates how to use the command manager to clone a node and change the fill color of a node while pressing `G` and `Shift+G` or `Alt+G`, respectively:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/customCommand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/customCommand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/customCommand-cs1" %}

### Disable/Modify the existing command

When any one of the default commands is not desired, they can be disabled. To change the functionality of a specific command, the command can be completely modified.

The following code example illustrates how to disable the default cut and delete commands using CTRL+X and Delete keys, and how to modify the copy command to clone a node using CTRL+C:


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/modify-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/modify-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/modify-cs1" %}

## Undo-redo

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is **`Ctrl+z`** and shortcut key for redo is **`Ctrl+y`**. For more information refer to the [`undo-redo`](./undo-redo)

## See Also

* [How to create the custom context menu items](../context-menu)