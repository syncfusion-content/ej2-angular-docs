---
layout: post
title: Configure Custom Fields in Angular Gantt Chart Component | Syncfusion
description: Learn how to configure custom fields in the Syncfusion Angular Gantt Chart component’s add/edit dialogs for enhanced task data management.
platform: ej2-angular
control: Custom fields
documentation: ug
domainurl: ##DomainURL##
---

# Configure custom fields in Angular Gantt Chart Component

The Angular Gantt Chart component allows you to enhance task data management by adding custom fields to the add/edit dialogs, seamlessly integrating them into the General tab using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/gantt#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/gantt#actioncomplete) events. For example, adding a priority dropdown to the General tab enables users to assign task priorities during creation or editing. Inject `EditService` and enable `editSettings.allowAdding` and `editSettings.allowEditing` to support dialog modifications. Configure valid [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#taskfields) mappings or custom data properties (e.g., priority) to persist custom field values in the data source. Use `actionBegin` to define custom field properties (e.g., textbox, dropdown) before the dialog opens, and `actionComplete` to handle field data after user input. This feature supports various field types, such as dropdowns or numerics, and integrates with task scheduling, dependencies, and critical path, ensuring custom fields align with project workflows. Ensure the dialog module is configured to render custom fields accurately, enhancing flexibility in task management.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/customfield-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/customfield-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/how-to/customfield-cs1" %}

## See also

- [How to configure add/edit dialogs?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/managing-tasks#customize-control-in-addedit-dialog)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)
