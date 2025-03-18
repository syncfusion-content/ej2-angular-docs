---
layout: post
title: Label Events in Angular Diagram component | Syncfusion®
description: Learn here all about Label in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Label Events
documentation: ug
domainurl: ##DomainURL##
---

# Annotation events.

There are some events which will trigger while interacting with annotation.
* KeyDown.
* KeyUp.
* DoubleClick.
* TextEdit.

## KeyDown event

The [`keyDown`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iKeyEventArgs/) event is triggered whenever any key is pressed. The following example shows how to capture the keyDown event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/keyDown-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/keyDown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/keyDown-cs1" %}

## KeyUp event

The [`keyUp`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iKeyEventArgs/) event is triggered whenever we press and release any key. The following example shows how to capture the keyUp event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/keyUp-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/keyUp-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/keyUp-cs1" %}

## Double click event

The [`doubleClick`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iDoubleClickEventArgs/) event is triggered when you double-click on a node, connector, or the diagram surface. Double-clicking on a diagram element activates the annotation editing mode. The following code example shows how to capture the [`doubleClick`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iDoubleClickEventArgs/) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/doubleClick-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/doubleClick-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/doubleClick-cs1" %}

## TextEdit event

The [`textEdit`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iTextEditEventArgs/) event triggers when you finish editing the annotation text and the focus is removed from the annotation text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/textEdit-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/textEdit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/textEdit-cs1" %}

You can prevent adding new text to the annotation by setting the `cancel` property of [`textEdit`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/iTextEditEventArgs/) to true.

``` javascript
public textEdit(args: ITextEditEventArgs): void {
    // Prevents any new content from being added to the annotation
    args.cancel = true;
}

```

## Selection change event

The [`selectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#selectionchange) event is triggered when an annotation of a node or connector is selected in the diagram.

You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iselectionchangeeventargs/) to true, as shown in the code snippet below.

```ts
    public selectionChange = function (args: ISelectionChangeEventArgs): void {
        if (args.state === 'Changing') {
            //Prevents selection
            args.cancel = true;
        };
    };
```