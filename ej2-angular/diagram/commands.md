---
layout: post
title: Commands in Angular Diagram component | Syncfusion
description: Learn here all about Commands in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Commands 
documentation: ug
domainurl: ##DomainURL##
---

# Commands in Angular Diagram component

<!-- markdownlint-disable MD010 -->

There are several commands available in the diagram as follows.

* Alignment commands
* Spacing commands
* Sizing commands
* Clipboard commands
* Grouping commands
* Z-order commands
* Zoom commands
* Nudge commands
* FitToPage commands
* Undo/Redo commands

## Align

Alignment commands enable you to align the selected or defined objects such as nodes and connectors with respect to the selection boundary. Refer to [`align`](https://ej2.syncfusion.com/angular/documentation/api/diagram#align) commands which shows how to use align methods in the diagram.

<!-- markdownlint-disable MD033 -->

| Parameters | Description |
|:------------| :------: |
|[`Alignment Options`](https://ej2.syncfusion.com/angular/documentation/api/diagram/alignmentOptions#AlignmentOptions) | <p align="left">Defines the specific direction, with respect to which the objects to be aligned. <br> The accepted values of the argument "alignment options" are as follows.</p> <table><tr><td> Left </td><td align="left"> Aligns all the selected objects at the left of the selection boundary. </td></tr><tr><td> Right </td><td align="left"> Aligns all the selected objects at the right of the selection boundary. </td></tr><tr><td> Center </td><td align="left"> Aligns all the selected objects at the center of the selection boundary. </td></tr><tr><td>Top </td><td align="left"> Aligns all the selected objects at the top of the selection boundary. </td></tr><tr><td> Bottom </td><td align="left"> Aligns all the selected objects at the bottom of the selection boundary. </td></tr><tr><td> Middle </td><td align="left"> Aligns all the selected objects at the middle of the selection boundary. </td></tr></table>|
| Objects | <p align="left">Defines the objects to be aligned. This is an optional parameter. By default, all the nodes and connectors in the selected region of the diagram gets aligned.</p> |
[`Alignment Mode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/alignmentMode#AlignmentMode)  | <p align="left">Defines the specific mode, with respect to which the objects to be aligned. This is an optional parameter. The default alignment mode is `Object`.<br> The accepted values of the argument "alignment mode" are as follows.</p> <table><tr><td> Object </td><td align="left"> Aligns the objects based on the first object in the selected list. </td></tr><tr><td> Selector </td><td align="left"> Aligns the objects based on the selection boundary. </td></tr></table>|

The following code example illustrates how to align all the selected objects at the left side of the selection boundary.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [width]=90>
            </e-node>
            <e-node id='node2' [offsetX]=100 [offsetY]=170 [width]=100>
            </e-node>
            <e-node id='node3' [offsetX]=100 [offsetY]=240 [width]=140>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public selArray: (NodeModel | ConnectorModel)[] = [];
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 60;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        this.selArray = [];
        this.selArray.push(this.diagram.nodes[0], this.diagram.nodes[1], this.diagram.nodes[2]);
        //Selects the nodes
        this.diagram.select(this.selArray);
        //Sets direction as left
        this.diagram.align('Left', this.diagram.selectedItems.nodes, 'Selector');
        this.diagram.dataBind();
    }
}
```

![Align Sample](images/Commands_img1.png)

## Distribute

The [`Distribute`](https://ej2.syncfusion.com/angular/documentation/api/diagram#distribute) commands enable to place the selected objects on the page at equal intervals from each other. The selected objects are equally spaced within the selection boundary.

The factor to distribute the shapes [`DistributeOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/distributeOptions#DistributeOptions) are listed as follows:

* RightToLeft: Distributes the objects based on the distance between the right and left sides of the adjacent objects.
* Left: Distributes the objects based on the distance between the left sides of the adjacent objects.
* Right: Distributes the objects based on the distance between the right sides of the adjacent objects.
* Center: Distributes the objects based on the distance between the center of the adjacent objects.
* BottomToTop: Distributes the objects based on the distance between the bottom and top sides of the adjacent objects.
* Top: Distributes the objects based on the distance between the top sides of the adjacent objects.
* Bottom: Distributes the objects based on the distance between the bottom sides of the adjacent objects.
* Middle: Distributes the objects based on the distance between the vertical center of the adjacent objects.

The following code example illustrates how to execute the space commands.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100>
            </e-node>
            <e-node id='node2' [offsetX]=100 [offsetY]=170>
            </e-node>
            <e-node id='node3' [offsetX]=100 [offsetY]=240>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public selArray: (NodeModel | ConnectorModel)[] = [];
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.width = 90;
        node.height = 60;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        this.selArray = [];
        this.selArray.push(this.diagram.nodes[0], this.diagram.nodes[1], this.diagram.nodes[2]);
        //Selects the nodes
        this.diagram.select(this.selArray);
        //Distributes space between the nodes
        this.diagram.distribute('RightToLeft', this.diagram.selectedItems.nodes);
    }
}
```

![Distribute Sample](images/Commands_img2.png)

## Sizing

Sizing [`sameSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sameSize) commands enable to equally size the selected nodes with respect to the first selected object.

[`SizingOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/sizingOptions) are as follows:

* Width: Scales the width of the selected objects.
* Height: Scales the height of the selected objects.
* Size: Scales the selected objects both vertically and horizontally.

The following code example illustrates how to execute the size commands.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults' (created)='created($event)'>
        <e-nodes>
            <e-node id='node1' [offsetX]=100 [offsetY]=100 [width]=90>
            </e-node>
            <e-node id='node2' [offsetX]=100 [offsetY]=170 [width]=100>
            </e-node>
            <e-node id='node3' [offsetX]=100 [offsetY]=240 [width]=140>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public selArray: (NodeModel | ConnectorModel)[] = [];
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.width = 90;
        node.height = 60;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
    public created(args: Object): void {
        this.selArray = [];
        this.selArray.push(this.diagram.nodes[0], this.diagram.nodes[1], this.diagram.nodes[2]);
        //Selects the nodes
        this.diagram.select(this.selArray);
        //Resizes the selected nodes with the same width
        this.diagram.sameSize('Width', this.diagram.selectedItems.nodes);
    }
}
```

![Sizing Sample](images/Commands_img3.png)

## Clipboard

Clipboard commands are used to cut, copy, or paste the selected elements. Refer to the following link which shows how to use clipboard methods in the diagram.

* Cuts the selected elements from the diagram to the diagram’s clipboard, [`cut`](https://ej2.syncfusion.com/angular/documentation/api/diagram#cut).

* Copies the selected elements from the diagram to the diagram’s clipboard, [`copy`](https://ej2.syncfusion.com/angular/documentation/api/diagram#copy).

* Pastes the diagram’s clipboard data (nodes/connectors) into the diagram, [`paste`](https://ej2.syncfusion.com/angular/documentation/api/diagram#paste).

The following code illustrates how to execute the clipboard commands.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/clipboard-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/commands/clipboard-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/clipboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/clipboard-cs1" %}

## Grouping

**Grouping commands** are used to group/ungroup the selected elements on the diagram. Refer to the following link which shows how to use grouping commands in the diagram.

[`Group`](https://ej2.syncfusion.com/angular/documentation/api/diagram#group) the selected nodes and connectors in the diagram.

[`Ungroup`](https://ej2.syncfusion.com/angular/documentation/api/diagram#ungroup) the selected nodes and connectors in the diagram.

The following code illustrates how to execute the grouping commands.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/grouping-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/commands/grouping-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/grouping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/grouping-cs1" %}

## Z-Order command

**Z-Order commands** enable you to visually arrange the selected objects such as nodes and connectors on the page.

### bringToFront command

The [`bringToFront`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringToFront) command visually brings the selected element to front over all the other overlapped elements. The following code illustrates how to execute the `bringToFront` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/bringtofront-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/commands/bringtofront-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/bringtofront-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/bringtofront-cs1" %}

### sendToBack command

The [`sendToBack`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sendToBack) command visually moves the selected element behind all the other overlapped elements. The following code illustrates how to execute the `sendToBack` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/sendtoback-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/commands/sendtoback-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/sendtoback-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/sendtoback-cs1" %}

### moveForward command

The [`moveForward`](https://ej2.syncfusion.com/angular/documentation/api/diagram#moveForward) command visually moves the selected element over the nearest overlapping element. The following code illustrates how to execute the `moveForward` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/moveforward-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/commands/moveforward-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/moveforward-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/moveforward-cs1" %}

### sendBackward command

The [`sendBackward`](https://ej2.syncfusion.com/angular/documentation/api/diagram#sendBackward) command visually moves the selected element behind the underlying element. The following code illustrates how to execute the `sendBackward` command.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/commands/sendbackward-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/commands/sendbackward-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/commands/sendbackward-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/commands/sendbackward-cs1" %}

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

## Nudge command

The [`nudge`](https://ej2.syncfusion.com/angular/documentation/api/diagram#nudge) commands move the selected elements towards up, down, left, or right by 1 pixel.

[`NudgeDirection`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nudgeDirection) nudge command moves the selected elements towards the specified direction by 1 pixel, by default.

The accepted values of the argument "direction" are as follows:

* Up: Moves the selected elements towards up by the specified delta value.
* Down: Moves the selected elements towards down by the specified delta value.
* Left: Moves the selected elements towards left by the specified delta value.
* Right: Moves the selected elements towards right by the specified delta value.

The following code illustrates how to execute nudge command.

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
        //Nudges to right
        this.diagram.nudge('Right');
    }
}
```

## Nudge by using arrow keys

The corresponding arrow keys are used to move the selected elements towards up, down, left, or right direction by 1 pixel.

![Nudge Command](images/Commands_img4.png)

Nudge commands are particularly useful for accurate placement of elements.

## BringIntoView

The [`bringIntoView`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringIntoView) command brings the specified rectangular region into the viewport of the diagram.

The following code illustrates how to execute the `bringIntoView` command.

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
    public bound: Rect
    public created(args: Object): void {
        //Brings the specified rectangular region of the Diagram content to the viewport of the page.
        this.bound= new Rect(200, 400, 500, 400);
        this.diagram.bringIntoView(this.bound);
    }
}
```

## BringToCenter

The [`bringToCenter`](https://ej2.syncfusion.com/angular/documentation/api/diagram#bringToCenter) command brings the specified rectangular region of the diagram content to the center of the viewport.

The following code illustrates how to execute the `bringToCenter` command.

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
    public bound: Rect
    public created(args: Object): void {
        //Brings the specified rectangular region of the Diagram content to the center of the viewport.
        this.bound= new Rect(200, 400, 500, 400);
        this.diagram.bringToCenter(this.bound);
    }
}
```

## FitToPage command

The [`fitToPage`](https://ej2.syncfusion.com/angular/documentation/api/diagram#fitToPage) command helps to fit the diagram content into the view with respect to either width, height, or at the whole.

The [`mode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/fitModes#modes) parameter defines whether the diagram has to be horizontally/vertically fit into the viewport with respect to width, height, or entire bounds of the diagram.

The [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/diagramRegions#region) parameter defines the region that has to be drawn as an image.

The [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions#margin) parameter defines the region/bounds of the diagram content that is to be fit into the view.

The [`canZoomIn`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions#canZoomIn) parameter enables/disables zooming to fit the smaller content into a larger viewport.

The [`customBounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iFitOptions#customBounds) parameter the custom region that has to be fit into the viewport.

The following code illustrates how to execute `FitToPage` command.

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
    public bound: Rect;
    public created(args: Object): void {
        //fit the diagram to the page with respect to mode and region
        this.diagram.fitToPage({
            mode: 'Page',
            region: 'Content',
            margin: {
                bottom: 50
            },
            canZoomIn: false
        });
    }
}
```

## Command manager

Diagram provides support to map/bind command execution with desired combination of key gestures. Diagram provides some built-in commands. [`CommandManager`](https://ej2.syncfusion.com/angular/documentation/api/diagram/commandManager#commandManager) provides support to define custom commands. The custom commands are executed, when the specified key gesture is recognized.

## Custom command

To define a custom command, specify the following properties:
* [`execute`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#execute): A method to be executed.
* [`canExecute`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#canexecute): A method to define whether the command can be executed at the moment.
* [`gesture`](https://ej2.syncfusion.com/angular/documentation/api/diagram/keyGestureModel#gesture): A combination of [`keys`](https://ej2.syncfusion.com/angular/documentation/api/diagram/keys#key) and [`KeyModifiers`](https://ej2.syncfusion.com/angular/documentation/api/diagram/keyModifiers#keymodifiers).
* [`parameter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#parameter): Defines any additional parameters that are required at runtime.
* [`name`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#name): Defines the name of the command.

To explore the properties of custom commands, refer to [`Commands`](https://ej2.syncfusion.com/angular/documentation/api/diagram/command#commands).

The following code example illustrates how to define a custom command.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [commandManager]="commandManager">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public commandManager: CommandManager;
    ngOnInit(): void {
        this.commandManager = {
            commands: [{
                name: 'customCopy',
                parameter: 'node',
                //Method to define whether the command can be executed at the current moment
                canExecute: function() {
                    //Defines that the clone command can be executed, if and only if the selection list is not empty.
                    if (diagram.selectedItems.nodes.length > 0 || diagram.selectedItems.connectors.length > 0) {
                        return true;
                    }
                    return false;
                },
                //Command handler
                execute: function() {
                    //Logic to clone the selected element
                    diagram.copy();
                    diagram.paste();
                    diagram.dataBind();
                },
                //Defines that the clone command has to be executed on the recognition of key press.
                gesture: {
                    key: Keys.G,
                    keyModifiers: KeyModifiers.Shift | KeyModifiers.Alt
                }
            }]
        },
    }
}
```

## Modify the existing command

When any one of the default commands is not desired, they can be disabled. To change the functionality of a specific command, the command can be completely modified.

The following code example illustrates how to disable a command and how to modify the built-in commands.

```typescript
@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [commandManager]="commandManager">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public commandManager: CommandManager;
    ngOnInit(): void {
        this.commandManager = {
            commands: [
                {
                    name: 'nudgeRight',
                    execute: (): void => {
                    },
                },
                {
                    name: 'nudgeUp',
                    execute: (): void => {
                    },
                },
                {
                    name: 'nudgeDown',
                    execute: (): void => {
                    },
                },
                {
                    name: 'nudgeLeft',
                    canExecute: (): boolean => {
                        if (this.diagram.selectedItems.nodes.length > 0) {
                        return true;
                        }
                        return false;
                    },
                    execute: (): void => {
                        this.diagram.nudge("Left");
                    },
                    gesture: {
                        key: Keys.Left
                    }
                }
            ]
        },
    }
}
```

## See Also

* [How to create the custom context menu items](../context-menu)