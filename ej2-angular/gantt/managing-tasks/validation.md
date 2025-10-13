---
layout: post
title: Validation in Angular Gantt component | Syncfusion
description: Learn how to validate task data in the Syncfusion Angular Gantt component using column, custom, dependency, and resource grid rules for accurate project management.
platform: ej2-angular
control: Validating Tasks
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Angular Gantt component

Validation in the Angular Gantt component ensures accurate task data by enforcing rules during adding or editing, preventing invalid entries before saving. Using the [Form Validator](https://ej2.syncfusion.com/documentation/form-validator) component, apply validation to columns in inline or dialog editing, custom rules for specific fields, or dependency and resource grids in the add/edit dialog. Requires `EditService` and valid [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) mappings (e.g., id, name) to ensure data integrity for tasks updated on September 23, 2025, or later, maintaining valid date ranges or dependency formats.

## Validate columns

Define validation rules for columns using [columns.validationRules](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#validationrules), such as `required` or `minLength`, to display error messages for invalid fields like missing task names in inline or dialog editing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/celledit-cs3" %}

## Apply custom validation

Implement custom validation for specific columns, like `TaskName`, using callback functions in [columns.validationRules](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#validationrules) to enforce unique requirements, such as ensuring task names meet specific patterns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/celledit-cs4" %}

## Validate dependency and resource grids

Set validation rules for dependency and resource grids in the add/edit dialog using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event with `requestType` set to **beforeOpenEditDialog** or **beforeOpenAddDialog**, configuring `validationRules` for fields like predecessor types or resource assignments to ensure valid entries.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/celledit-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/celledit-cs5" %}

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to add new tasks?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/adding-new-tasks)