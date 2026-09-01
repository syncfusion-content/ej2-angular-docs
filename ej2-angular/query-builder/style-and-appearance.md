---
layout: post
title: Style and Appearance in Angular Query Builder UI | Syncfusion
description: Override the Syncfusion Angular Query Builder UI CSS classes for headers, rule containers, buttons, and joining lines, or build a custom theme.
platform: ej2-angular
control: Style and appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Query Builder UI

Customize the Query Builder's appearance by overriding default CSS classes or creating a custom theme.

## CSS class overrides

The following table lists the primary CSS classes and their purposes. Override these classes in your component's `styles`/`styleUrls` array or in a global stylesheet such as `styles.css`.

| CSS Class | Purpose of Class |
| --------- | ---------------- |
| `.e-query-builder` | To customize the Query Builder root container. |
| `.e-group-container` | To customize the Query Builder group container. |
| `.e-group-header .e-btn` | To customize all buttons in the group header (condition AND/OR, NOT, delete-group, add buttons). |
| `.e-group-body .e-rule-container` | To customize the Query Builder rule container. |
| `.e-group-container .e-group-header .e-dropdown-btn` | To customize the Query Builder Add group/condition dropdown button (the split-button variant; the standard add button uses `.e-btn`). |
| `.e-query-builder .e-group-header .e-deletegroup` | To customize the Query Builder Delete group button. |
| `.e-query-builder .e-rule-field .e-rule-value-delete .e-rule-delete` | To customize the Query Builder Delete condition button. |
| `.e-query-builder .e-rule-list > ::after, .e-query-builder .e-rule-list > ::before` | To customize the Query Builder group joining line. |
| `.e-query-builder .e-rule-container.e-joined-rule` | To customize the Query Builder condition joining line. |
| `.e-filter-input, .e-rule-value` | To customize the field, operator, and value drop-down/pop-up editors. |

> The joining-line selectors (`.e-rule-list > ::after`, `.e-rule-list > ::before`, and `.e-rule-container.e-joined-rule`) target decorative pseudo-elements; the `width`, `border-color`, and `background` CSS properties are commonly overridden to restyle these lines.

The following CSS snippet demonstrates overriding the group joining line color and the rule container border by placing the rules in the component's `styles` array:

```typescript
@Component({
    selector: 'app-root',
    template: `<ejs-querybuilder cssClass="custom-qb" width="70%" [dataSource]="data">
                 <e-columns>
                   <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                 </e-columns>
               </ejs-querybuilder>`,
    styles: [`
        .custom-qb .e-group-body .e-rule-container {
            border: 1px solid #e3165b;
        }
        .custom-qb .e-rule-list > ::after,
        .custom-qb .e-rule-list > ::before {
            border-color: #e3165b;
        }
    `]
})
export class AppComponent {}
```

For component-level styling that applies only to a specific Query Builder, set the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#cssclass) property and scope your CSS rules to the custom class (as shown above with `custom-qb`).

## Custom theme

For advanced customization across the whole component, use the [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material) to create and download custom themes. Alternatively, theme packages are available through npm; see [Getting started](./getting-started) for installing a package such as `@syncfusion/ej2-material3-theme` and importing the Query Builder theme CSS. For a full list of available themes, refer to the [Themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) documentation.