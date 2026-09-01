---
layout: post
title: Drag and Drop in Angular Query Builder UI | Syncfusion
description: Reorder rules and groups in the Syncfusion Angular Query Builder UI by enabling allowDragAndDrop and handling dragStart, drag, and drop events.
platform: ej2-angular
control: Drag and drop
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Angular Query Builder UI

Reorder rules and groups within the Query Builder by dragging and dropping them to new positions. This intuitive approach simplifies query construction and modification.

Drag and drop is disabled by default. Enable it by setting the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#allowdraganddrop) property to `true`. The following snippet shows the minimal markup required to enable drag and drop:

```html
<ejs-querybuilder width="70%" [dataSource]="data" [rule]="importRules" allowDragAndDrop="true">
    <e-columns>
      <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
      <e-column field="FirstName" label="First Name" type="string"></e-column>
    </e-columns>
</ejs-querybuilder>
```

## Events

The Query Builder emits three events during a drag-and-drop operation. Each event argument exposes a `cancel` property that can be set to `true` to prevent the corresponding action:

| Event | Triggers | Arguments |
| --- | --- | --- |
| [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#dragstart) | When the user starts dragging a rule or group. | `dragRuleID`: id of the dragged rule.<br>`dragGroupID`: id of the group containing the dragged rule.<br>`cancel`: set to `true` to cancel the drag. |
| [`drag`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#drag) | Continuously while the user drags a rule or group. | `dragRuleID`: id of the dragged rule.<br>`dragGroupID`: id of the group containing the dragged rule.<br>`cancel`: set to `true` to cancel the drag. |
| [`drop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#drop) | When the user drops a dragged rule or group onto a target. | `dropRuleID`: id of the target rule.<br>`dropGroupID`: id of the target group.<br>`cancel`: set to `true` to cancel the drop. |

Bind the event handlers in the component template and handle the arguments in the component class:

```html
<ejs-querybuilder width="70%" [dataSource]="data" [rule]="importRules"
    allowDragAndDrop="true"
    (dragStart)="onDragStart($event)"
    (drag)="onDrag($event)"
    (drop)="onDrop($event)">
</ejs-querybuilder>
```

```typescript
public onDragStart(args: { dragRuleID: string; dragGroupID: string; cancel: boolean }): void {
    // Inspect dragRuleID / dragGroupID or cancel the drag
    // args.cancel = true;
}

public onDrag(args: { dragRuleID: string; dragGroupID: string; cancel: boolean }): void {
    // Inspect the in-progress drag or cancel it
    // args.cancel = true;
}

public onDrop(args: { dropRuleID: string; dropGroupID: string; cancel: boolean }): void {
    // Inspect dropRuleID / dropGroupID or cancel the drop
    // args.cancel = true;
}
```

The `dragRuleID`, `dragGroupID`, `dropRuleID`, and `dropGroupID` values are the element ids the Query Builder generates for each rule and group (for example, `querybuilder_group0` and `querybuilder_group0_rule0`). Use these ids to identify the source and target of a drag-and-drop operation in your handler logic.

> A group cannot be dropped into its own descendant group. Rules and groups can be reordered within the same group or moved between sibling groups, but they cannot be dropped at the root level outside the top-level group.

## Sample

The following sample demonstrates drag and drop with rules and groups. The sample injects `QueryLibrary` (via `QueryBuilderComponent.Inject(QueryLibrary)`) and uses array values for the `in` operator (`value: ['Davolio', 'Buchanan']`) and the `between` operator (`value: ["22/11/2023", "30/11/2023"]`); ensure the `QueryLibrary` injection is included when reproducing the sample in your own application.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/drag-and-drop-cs1" %}

## See also

* [Filtering](./filtering)
* [Clone group/rule](./clone-group-rule)
* [Lock group/rule](./lock-group-rule)
