---
layout: post
title: Task Constraints in Angular Gantt | Syncfusion
description: Learn how to configure task constraints in the Syncfusion Angular Gantt component to enforce scheduling rules, manage dependencies, and meet deadlines.
platform: ej2-angular
control: Task Constraints
documentation: ug
domainurl: ##DomainURL##
---

# Task Constraints in Angular Gantt

Task constraints in the Angular Gantt component define scheduling rules that control when tasks start or finish, ensuring logical sequences, fixed deadlines, and optimized resource allocation. Constraints affect taskbar positioning, dependency scheduling, and critical path calculations, making schedules realistic by accounting for limitations like material delays or compliance dates. They integrate with `taskMode` (e.g., `Auto` for automatic scheduling, `Manual` for fixed dates).

## Benefits of task constraints

Task constraints enhance project planning with the following advantages:
- Enforce logical task sequences, ensuring dependencies are respected (e.g., taskbars align with predecessors).
- Anchor tasks to fixed milestone dates, such as product launches or audits.
- Prevent resource conflicts by spacing tasks that share teams or equipment.
- Support "what-if" scenario testing by adjusting constraints to explore timeline impacts.
- Meet compliance deadlines, ensuring taskbars reflect regulatory requirements.
- Improve accuracy by incorporating real-world constraints like material availability.

## Understand task constraint types

The [`constraintType`]((https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFieldsModel/#constrainttype)) property accepts one of eight numeric values from the [`ConstraintType`](https://ej2.syncfusion.com/angular/documentation/api/gantt/constraintType/) enum, each defining a specific scheduling rule. These can be specified using the corresponding numeric value (e.g., `0`). The enum values are typically set in the `taskFields.constraintType` mapping or directly in the data source. Below is a table summarizing the constraint types, their descriptions, example use cases, and their corresponding numeric enum values:

| Constraint Type | Numeric Enum Value | Description | Example Use Case |
|-----------------|--------------------|-------------|------------------|
| As Soon As Possible (ASAP) | `0` | Starts the task as soon as dependencies are met. Default for auto-scheduled tasks. | Begin coding once requirements are finalized. |
| As Late As Possible (ALAP) | `1` | Delays the task until the latest possible start without delaying successors. | Finalize documentation just before release. |
| Must Start On (MSO) | `2` | Requires the task to start on a specific date. | Start integration on July 1 per contract. |
| Must Finish On (MFO) | `3` | Requires the task to finish on a specific date. | Submit reports by March 31 for compliance. |
| Start No Earlier Than (SNET) | `4` | Prevents the task from starting before a date. | Delay marketing until regulatory approval on August 15. |
| Start No Later Than (SNLT) | `5` | Requires the task to start on or before a date. | Begin reviews by September 1 for reporting. |
| Finish No Earlier Than (FNET) | `6` | Prevents the task from finishing before a date. | Delay training completion until onboarding finishes. |
| Finish No Later Than (FNLT) | `7` | Requires the task to finish on or before a date. | Complete QA by July 25 for release. |

## Configure task constraints

Configure task constraints using the [`taskFields.constraintType`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFieldsModel/#constrainttype) and [`taskFields.constraintDate`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFieldsModel/#constraintdate) properties to map constraint types and dates. Use [`ConstraintType`](https://ej2.syncfusion.com/angular/documentation/api/gantt/constraintType/) enum values for clarity.

**Define taskFields mappings**

Map the following fields in `taskFields`:
- `id`: Task identifier.
- `name`: Task name.
- `startDate`: Task start date.
- `endDate`: Task end date.
- `constraintType`: Constraint type (e.g., `constraintType: 2` (MustStartOn)).
- `constraintDate`: Date for the constraint.

**Provide constraint data**

Include `constraintType` and `constraintDate` in your data source. For example:

```json
{
  "taskId": 1,
  "taskName": "Design Approval",
  "startDate": new Date("2025-07-01"),
  "endDate": new Date("2025-07-02"),
  "constraintType": 2,
  "constraintDate": new Date("2025-07-01")
}
```

The following example applies a `MustStartOn` constraint:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/task-scheduling/task-constraints-cs1" %}

This code sets a task to start on July 1, 2025, with the taskbar reflecting the constraint.

## Handle constraint violations

Constraint violations occur when scheduling changes (e.g., dragging taskbars) conflict with strict constraints (`MustStartOn`, `MustFinishOn`, `StartNoLaterThan`, `FinishNoLaterThan`). By default, a validation popup alerts users. Use the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event with `requestType: 'validateTaskViolation'` to manage violations programmatically, setting `args.validateMode` flags to control behavior:

- `respectMustStartOn`: Silently rejects `MustStartOn` violations.
- `respectMustFinishOn`: Silently rejects `MustFinishOn` violations.
- `respectStartNoLaterThan`: Silently rejects `StartNoLaterThan` violations.
- `respectFinishNoLaterThan`: Silently rejects `FinishNoLaterThan` violations.

Setting a flag to `true` cancels updates without a popup; `false` (default) shows the popup. Use `args.cancel` in `taskbarEditing` for pre-edit validation.

```typescript
actionBegin(args: any): void {
  if (args.requestType === 'validateTaskViolation') {
    args.validateMode = {
      respectMustStartOn: true,
      respectMustFinishOn: true,
      respectStartNoLaterThan: true,
      respectFinishNoLaterThan: true
    };
  }
}
```
The following example disables the `MustStartOn` violation popup:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/task-scheduling/task-constraints-cs2" %}

## See also
- [How to configure task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to customize taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)
- [How to enable baseline rendering?](https://ej2.syncfusion.com/angular/documentation/gantt/baseline)