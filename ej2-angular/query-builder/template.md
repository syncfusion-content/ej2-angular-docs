---
layout: post
title: Template in Angular Query Builder UI | Syncfusion
description: Customize the Syncfusion Angular Query Builder UI with header, column, and rule templates using ngTemplate, create, write, and destroy callbacks.
platform: ej2-angular
control: Template
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Query Builder UI

Customize the Query Builder's header and column interfaces using templates. Templates enable you to replace default UI elements with custom components, providing complete control over the user experience.

## Header template

Replace the default header with a custom interface by defining a header template. The custom header can include buttons for creating/deleting rules and groups, along with AND/OR and NOT condition controls. Implement header templates using `ngTemplate` and configure the template in the `actionBegin` event when `requestType` is `header-template-create`.

The `#headerTemplate` template variable identifies the NgTemplate content as the header. The template context (`let-data`) exposes the following fields:

| Field | Description |
| --- | --- |
| `ruleID` | The id of the group the header belongs to. |
| `condition` | The current group connector (`and` or `or`). |
| `notCondition` | The current NOT state of the group (`undefined` when NOT is not enabled, otherwise a boolean). |

Wire the `actionBegin` event in the component template and handle the `header-template-create` request type in the component class:

```html
<ejs-querybuilder #querybuilder [dataSource]="data" [rule]="importRules"
    enableNotCondition="true" (actionBegin)="actionBegin($event)">
    ...
</ejs-querybuilder>
```

```typescript
public actionBegin(args: ActionEventArgs): void {
    if (args.requestType === 'header-template-create') {
        // Read or modify args.rule / args.groupID to configure the header
    }
}
```

In the following sample, dropdown, splitbutton, and button are used as the custom components in the header.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/header-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/header-template-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template-driven.html" %}
{% raw %}
<ejs-querybuilder id="querybuilder" #querybuilder width="100%" [rule] = "importRules" enableNotCondition = true>
    <e-columns>
        <e-column field="EmployeeID" label="EmployeeID" type="number"></e-column>
        <e-column field="FirstName" label="FirstName" type="string"></e-column>
        <e-column field="LastName" label="LastName" type="string"></e-column>
        <e-column field="Age" label="Age" type="number"></e-column>
        <e-column field="City" label="City" type="string"></e-column>
        <e-column field="Country" label="Country" type="string"></e-column>
    </e-columns>
    <ng-template #headerTemplate let-data>
        <div class = "e-groupheader">
        <button *ngIf="data.notCondition !== undefined" class='e-cb-wrapper'>
        <ejs-checkbox id ="{{data.ruleID}}_notOption" label='not' [checked]='data.notCondition' (change)="onChange($event)">
        </ejs-checkbox> </button>
        <ejs-dropdownlist id ="{{data.ruleID}}_cndtn" [dataSource]='ds' [value]='data.condition' [fields]='fields' cssClass="e-custom-group-btn" (change)="conditionChange($event)">
        </ejs-dropdownlist>
        <button  ejs-dropdownbutton id="{{data.ruleID}}_addbtn" [items]='ddbitems' cssClass= "e-round e-small e-caret-hide e-addrulegroup e-add-btn" iconCss="e-icons e-add-icon" (select)="onSelect($event)"></button>
        <button  ejs-button *ngIf ="data.ruleID !== 'querybuilder_group0'" id= '{{data.ruleID}}_dltbtn' class= "e-btn e-delete-btn e-lib e-small e-round e-icon-btn" (click)="onClick($event)">
            <span class = 'e-btn-icon e-icons e-delete-icon'></span>
        </button>
        </div>
    </ng-template>
</ejs-querybuilder>
{% endraw %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/header-template-cs1" %}

## Column template

Define custom input widgets for specific columns using column templates. Implement the [`template`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/index-default#template) property on a column, passing a [`TemplateColumn`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/templateColumn) object with the following functions:

### Using callbacks

The `create`, `write`, and `destroy` callbacks have the following signatures:

| Callback | Arguments | Description |
| --- | --- | --- |
| `create` | none | Creates and returns the HTML element used as the custom editor. |
| `write` | `{ elements, values, operator }` | Initializes the custom editor inside `args.elements`, binding `args.values` (a single value or array, depending on `args.operator`). |
| `destroy` | `{ elementId }` | Tears down the custom editor instance created for `args.elementId`. |

```typescript
public paymentTemplate: TemplateColumn = {
    create: () => {
        return createElement('input', { attrs: { 'type': 'text' } });
    },
    write: (args: { elements: Element, values: string[] | string, operator: string }) => {
        // Initialize the custom editor and bind it to args.elements
    },
    destroy: (args: { elementId: string }) => {
        // Destroy the custom editor for args.elementId
    }
};
```

The following example demonstrates using a dropdown as a custom component in the PaymentMode column.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs11" %}

### Using NgTemplate

Define column value templates using NgTemplate. The template variable (e.g., `#template`) identifies the NgTemplate content for the corresponding column.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/query-builder/template-cs1/src/template-driven.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/template-cs1" %}

## Rule template

Rule template allows you to define your own user interface for the entire rule row. To implement [`ruleTemplate`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/index-default#ruletemplate) you can create the user interface using `ngTemplate` and assign the values through the `actionBegin` event when `requestType` is `template-initialize`.

The `#ruleTemplate` template variable identifies the NgTemplate content as the corresponding rule. The template context (`let-data`) exposes the following fields:

| Field | Description |
| --- | --- |
| `ruleID` | The id of the rule. |
| `field` | The field name of the rule. |
| `operator` | The operator of the rule. |
| `value` | The value of the rule. |

Within the template, call `qryBldrObj.notifyChange(value, element, 'field' | 'value')` to push field/value changes back to the Query Builder, and use `qryBldrObj.getRule(element)` or `qryBldrObj.getDataManagerQuery({ condition, rules })` to read the rule or build a filtered DataManager query.

In the following sample, dropdown and slider are used as the custom components and the `greaterthanorequal` operator is applied to the Age column.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/rule-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/rule-template-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="template-driven.html" %}
{% include code-snippet/query-builder/rule-template-cs1/src/template-driven.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/rule-template-cs1" %}

## See also

* [Model binding](./model-binding)
* [Columns](./columns)
* [Filtering](./filtering)
* [Style and appearance](./style-and-appearance)
