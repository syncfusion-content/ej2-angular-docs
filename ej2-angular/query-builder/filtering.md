---
layout: post
title: Filtering in Angular Query Builder UI | Syncfusion
description: Create and delete rules and groups in the Syncfusion Angular Query Builder UI using addRules, addGroups, deleteRules, and deleteGroups.
platform: ej2-angular
control: Filtering 
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Angular Query Builder UI

Create dynamic filtering conditions and groups in the Query Builder through the UI or programmatically. Use the [`showButtons`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#showbuttons) property to control the visibility of the built-in action buttons. The available keys are `ruleDelete` (delete a rule), `groupInsert` (add a group), `groupDelete` (delete a group), and the clone-related keys (`cloneGroup`, `cloneRule`) documented in [Clone group/rule](./clone-group-rule).

Filtering conditions are built from a column [`field`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/columnsmodel#field), an operator, and a value. The available operators (such as `equal`, `notequal`, `contains`, and `between`) and the columns that define the filterable fields are documented in [Columns](./columns).

## Creating and deleting conditions and groups

Add or remove conditions and groups using the following methods:

* Use [`addRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#addrules) to add individual conditions.
* Use [`deleteRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#deleterules) to remove individual conditions.
* Use [`addGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#addgroups) to add groups.
* Use [`deleteGroups`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#deletegroups) to remove groups.

### Method parameters

| Method | Parameters | Description |
| --- | --- | --- |
| `addRules` | `rules: RuleModel[]`, `groupId: string` | Adds the given rules to the group identified by `groupId`. |
| `deleteRules` | `ruleIds: string[]` | Removes the rules whose ids match the values in `ruleIds`. |
| `addGroups` | `groups: RuleModel[]`, `groupId: string` | Adds the given groups to the group identified by `groupId`. |
| `deleteGroups` | `groupIds: string[]` | Removes the groups whose ids match the values in `groupIds`. |

The `groupId` and the rule/group ids passed to these methods (for example, `'group0'` and `'group1'`) are the element ids the Query Builder generates for each group and rule (prefixed with the component id, for example, `querybuilder_group0`). You can obtain them at runtime from the `id` attribute of the corresponding group or rule element in the DOM.

The following snippets show how to call each method:

```typescript
// Add a rule to the first group
this.qryBldrObj!.addRules([{'label': 'City', 'field': 'City', 'type': 'string', 'operator': 'equal', 'value': 'US'}], 'group0');

// Delete a rule by id
this.qryBldrObj!.deleteRules(['querybuilder_group0_rule0']);

// Add a group to the first group
this.qryBldrObj!.addGroups([{'condition': 'and', 'rules': [{'label': 'First Name', 'field': 'FirstName', 'type': 'string', 'operator': 'startswith', 'value': 'v'}]}], 'group0');

// Delete a group by id
this.qryBldrObj!.deleteGroups(['group1']);
```

The following sample demonstrates programmatic creation and deletion of conditions and groups. The built-in **Delete Rule**, **Add Group**, and **Delete Group** buttons are shown through `showButtons: { ruleDelete: true, groupInsert: true, groupDelete: true }`, while the three external buttons invoke the `addRules`, `addGroups`, and `deleteGroups` methods programmatically.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs6" %}

## See also

* [Columns](./columns)
* [Operators](./operators)
* [Data binding](./data-binding)
* [Clone group/rule](./clone-group-rule)
