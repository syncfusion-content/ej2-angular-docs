---
layout: post
title: Template in Angular Query builder component | Syncfusion
description: Learn here all about Template in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Template 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Query builder component

Customize the Query Builder's header and column interfaces using templates. Templates enable you to replace default UI elements with custom components, providing complete control over the user experience.

## Header Template

Replace the default header with a custom interface by defining a header template. The custom header can include buttons for creating/deleting rules and groups, along with AND/OR and NOT condition controls. Implement header templates using `ngTemplate` and configure the template in the `actionBegin` event when `requestType` is `header-template-create`.

The `#headerTemplate` template variable identifies the NgTemplate content as the header.

In the following sample dropdown, splitbutton and button are used as the custom components in the header.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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

## Column Template

Define custom input widgets for specific columns using column templates. Implement the [`template`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#template) property with the following functions:

* `create`: Initialize the custom component.
* `write`: Bind events to the custom component.
* `destroy`: Clean up the custom component.

The following example demonstrates using a dropdown as a custom component in the PaymentMode column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
{% highlight ts tabtitle="app.component.ts" %}
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

## Rule Template

Rule Template allows to define your own user interface for columns. To implement [`ruleTemplate`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#ruleTemplate) you can create the user interface using `ngTemplate` and assign the values through `actionBegin` event.

The `#ruleTemplate` template variable identifies the NgTemplate content as the corresponding column.

In the following sample, dropdown and slider are used as the custom component and applied `greaterthanorequal` operator to `Age` column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
