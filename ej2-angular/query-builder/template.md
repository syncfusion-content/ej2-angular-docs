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

Templates allows users to define customized header and own user interface for columns.

## Header Template

Header Template allows to define your own user interface for Header, which includes creating or deleting rules and groups and to customize the AND/OR condition and NOT condition options. To implement header template you can create the user interface using `ngTemplate` and  assign the values when requestType is header-template-create in `actionBegin` event.

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

Template allows you to define your own input widgets for columns. To implement [`template`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsModel/#template), you can define the following functions

* `create`: Creates the custom component.
* `write`: Wire events for the custom component.
* `Destroy`:  Destroy the custom component.

In the following sample, dropdown is used as the custom component in the PaymentMode column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs11" %}

### Using Template

The value template for a particular column can be specified using the content of the NgTemplate. The `#template` template variable identifies the NgTemplate content as the corresponding column.

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
