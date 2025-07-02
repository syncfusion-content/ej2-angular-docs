---
layout: post
title: Task Constraints in Angular Gantt Component | Syncfusion 
description: Learn how to implement and manage task constraints in the Syncfusion Angular Gantt component to enforce scheduling rules and dependencies.
platform: ej2-angular
control: Task Constraints 
documentation: ug
domainurl: ##DomainURL##
---

# Task constraints in Angular Gantt component

Task constraints define rules that control when a task is allowed to start or finish in the project timeline. They help ensure that tasks follow a logical sequence, align with fixed deadlines, and make efficient use of resources. Constraints also support planning for real-world limitations like material delays, team availability, or mandatory compliance dates—making your schedule more realistic and reliable.

---

## Benefits of using task constraints

Task constraints help guide the schedule of each task by applying real-world rules. They serve critical planning purposes and offer the following benefits:

- **Enforce Task Logic**: Ensure tasks follow a defined sequence, especially when one cannot begin until another ends.
- **Align with Milestones**: Anchor key tasks to fixed dates such as launches, reviews, or audits.
- **Avoid Resource Conflicts**: Prevent tasks from overlapping when they rely on the same resources or teams.
- **Support Scenario Planning**: Modify constraints to test "what-if" situations and explore how delays or accelerations affect the timeline.
- **Meet Business and Compliance Deadlines**: Guarantee that mandatory deadlines are met and ensure the schedule supports regulatory timelines.
- **Improve Planning Accuracy**: Account for real-world limitations like material availability or stakeholder input windows.

---

## Understanding task constraint types

| Constraint Type               | Description                                                                 | Example Use Case                                                                 |
|------------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **As Soon As Possible (ASAP)** | Starts the task immediately once its dependencies are cleared.              | Begin development as soon as design is approved.                                |
| **As Late As Possible (ALAP)** | Delays the task until the last possible moment without affecting successors. | Apply polish to UI just before release to use the latest assets.                |
| **Must Start On (MSO)**        | Requires the task to begin on a fixed, non-negotiable date.                 | Partner company begins integration on July 1st per contract.                    |
| **Must Finish On (MFO)**       | Requires the task to end on a fixed date, regardless of its dependencies.   | Submit compliance documentation by March 31 due to government regulations.      |
| **Start No Earlier Than (SNET)** | Prevents a task from starting before a certain date.                        | A campaign cannot begin until regulatory approval on August 15.                |
| **Start No Later Than (SNLT)**  | Requires a task to start on or before a given date.                         | Financial reviews must begin by September 1 to meet reporting cycles.          |
| **Finish No Earlier Than (FNET)** | Ensures the task does not finish before a certain date.                    | Training can’t end before all participants have completed onboarding.           |
| **Finish No Later Than (FNLT)**  | Ensures task completion on or before a specific date.                      | QA testing must be done by July 25 to meet release deadlines.                  |

---

## Configuration and implementation

To enable and manage task constraints in the Gantt component, you need to configure specific fields under the `taskFields` mapping. These fields tell the Gantt component which type of constraint to apply and the relevant date to enforce it.

### Step 1: Define taskFields mappings

In your Gantt component configuration, map the following fields:

```ts
taskFields: {
  id: 'taskId',
  name: 'taskName',
  startDate: 'startDate',
  endDate: 'endDate',
  constraintType: 'constraintType', // Specifies the type of constraint (e.g., 2 (MustStartOn))
  constraintDate: 'constraintDate' // Specifies the relevant date for the constraint
}
```

These mappings ensure that each task can interpret and apply its constraints correctly based on your data source.

### Step 2: Provide constraint data

In your project data source, ensure that each task includes values for the [`constraintType`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFieldsModel/#constrainttype) and [`constraintDate`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFieldsModel/#constraintdate) fields if constraints need to be applied.

#### Example data format:

```ts
{
  "taskId": 1,
  "taskName": "Design Approval",
  "startDate": new Date(2025-07-01),
  "endDate": new Date(2025-07-02),
  "constraintType": 2,
  "constraintDate": new Date(2025-07-01)
}
```

This task is constrained to must start on July 1, 2025.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/task-scheduling/task-constraints-cs1" %}

### Managing scheduling conflicts due to constraint violations

When scheduling changes conflict with applied constraints, the Gantt component shows a violation popup to alert users. This validation applies specifically to strict constraint types:

- MustStartOn
- MustFinishOn
- StartNoLaterThan
- FinishNoLaterThan

#### Programmatic conflict management

You can intercept constraint violations using the `actionBegin` event. When the event’s `requestType` is `"validateTaskViolation"`, set specific flags in `args.validateMode` to determine how conflicts are handled.

##### Supported flags

| Flag                        | Description                                                  |
|-----------------------------|--------------------------------------------------------------|
| respectMustStartOn          | If true, silently rejects violations of MustStartOn.          |
| respectMustFinishOn         | If true, silently cancels changes violating MustFinishOn.     |
| respectStartNoLaterThan     | If true, blocks updates violating StartNoLaterThan.           |
| respectFinishNoLaterThan    | If true, blocks changes violating FinishNoLaterThan.          |

> **Defaults**: All flags default to `false`, meaning violations show a popup. Setting a flag to `true` enables silent enforcement (i.e., the user’s update is canceled without interruption).

#### Example setup

```ts
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

In the following example, we have **disabled the `MustStartOn` violation popup** by setting `respectMustStartOn` to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/task-scheduling/task-constraints-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/task-scheduling/task-constraints-cs2" %}