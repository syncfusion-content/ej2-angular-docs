---
layout: post
title: Separate Connector in Angular Query Builder UI | Syncfusion
description: Mix AND/OR connectors between individual rules in the same parent group in the Syncfusion Angular Query Builder UI using enableSeparateConnector.
platform: ej2-angular
control: Separate connector
documentation: ug
domainurl: ##DomainURL##
---

# Separate Connector in Angular Query Builder UI

Use different connectors (AND/OR) between individual rules and groups within the same parent group. This allows for greater precision in query construction, enabling more complex filtering logic.

By default, all rules within a group share a single group-level connector. The [`enableSeparateConnector`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#enableSeparateConnector) property is `false` by default; set it to `true` to expose a per-rule connector that each rule carries between itself and its sibling rules. The following snippet shows the minimal markup required to enable separate connectors:

```html
<ejs-querybuilder width="70%" [dataSource]="data" [rule]="importRules" enableSeparateConnector="true">
    <e-columns>
      <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
      <e-column field="FirstName" label="First Name" type="string"></e-column>
    </e-columns>
</ejs-querybuilder>
```

## UI behavior

When `enableSeparateConnector` is enabled, a connector control (AND/OR) is rendered for each rule within a group, rather than a single shared connector for the whole group. A developer can set the connector for an individual rule either through the UI control or programmatically through the rule model (see below). Changing the connector triggers the `change` event with `type` set to `condition`.

## Rule model

Each rule (and group) stores its connector in its own `condition` field (e.g., `rule.condition = "and"` or `"or"`). When the Query Builder is exported with [`getRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#getrules), the `condition` value on each rule is included in the returned `RuleModel` hierarchy so the per-rule connectors are preserved. See [Import and export](./import-export) for details on serializing the rule model.

> The separate-connector feature itself does not require the `QueryLibrary` injection. The following sample injects `QueryLibrary` (`QueryBuilderComponent.Inject(QueryLibrary)`) only because it uses the `in` and `between` operators with array values.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/separate-connector-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/separate-connector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/separate-connector-cs1" %}

## See also

* [Filtering](./filtering)
* [Columns](./columns)
* [Operators](./operators)
* [Import and export](./import-export)
