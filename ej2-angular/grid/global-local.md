---
layout: post
title: Angular Grid - Global and Local | Syncfusion
description: Angular Grid global and local settings define component-level and app-wide configuration, localization, and scope control to ensure consistent grid behavior.
platform: ej2-angular
control: Global local 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) component provides a Globalization feature (global and local) that enhances application accessibility for people from different regions and language backgrounds. Data can be displayed in preferred languages and formats, improving the overall user experience.

## Localization

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid includes a built-in [Localization](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization) library that allows customization of text used in the grid to match different languages or cultural preferences. The library enables changing static text on various elements such as the group drop area and pager information to languages like "Arabic", "German", "French", and more.

Define the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid#locale) property and a translation object to configure localized text.

**Data Rendering**

Locale key words | Text | Example 
-----|-----|-----
`EmptyRecord` | No records to display | ![Locale empty record](images/locale-empty-record.png)
`EmptyDataSourceError` | DataSource must not be empty at initial load since columns are generated from dataSource in auto-generated columns

**Columns**

Locale key words | Text | Example 
-----|-----|-----
`True` | true | ![Grid with True value](images/locale-true.png)
`False` | false | ![Grid with False value](images/locale-false.png)
`ColumnHeader` | column header  | ![Grid column header](images/locale-column-header.png)
`TemplateCell` | is template cell | ![Grid template cell](images/locale-templatecell.png)
`ClipBoard` | clipboard | ![Grid clipboard](images/locale-clipboard.png)
`CheckBoxLabel` | checkbox | ![Grid checkbox label](images/locale-checkbox-label.png)

**ColumnChooser**

Locale key words | Text | Example 
-----|-----|-----
`Columnchooser` | Columns | ![Locale column chooser](images/locale-column-chooser.png)
`ChooseColumns` | Choose Column | ![Locale choose columns](images/locale-choose-columns.png)
`ColumnChooserDialogARIA` | Column chooser | ![Locale column chooser dialog ARIA](images/locale-columnchooser-dialog-ARIA.png)

**Editing**

Locale key words | Text | Example 
-----|-----|-----
`Add` | Add | ![Locale add](images/locale-add.png)
`Edit`| Edit | ![Locale edit](images/locale-edit.png)
`Cancel`| Cancel | ![Locale cancel](images/locale-cancel.png)
`Update`| Update | ![Locale update](images/locale-update.png)
`Delete` | Delete | ![Locale delete](images/locale-delete.png)
`Save` | Save | ![Locale save](images/locale-save.png)
`EditOperationAlert` | No records selected for edit operation | ![Locale edit operation alert](images/locale-edit-operation-alert.png)
`DeleteOperationAlert` | No records selected for delete operation | ![Locale delete operation alert](images/locale-delete-operation-alert.png)
`SaveButton` | Save | ![Locale save button](images/locale-save-button.png)
`OKButton` | OK | ![Locale ok button](images/locale-ok-button.png)
`CancelButton` | Cancel | ![Locale cancel button](images/locale-cancel-button.png)
`EditFormTitle` | Details of | ![Locale edit form title](images/locale-edit-form-title.png)
`AddFormTitle` | Add New Record | ![Locale add form title](images/locale-add-form-title.png)
`BatchSaveConfirm` | Are you sure you want to save changes? | ![Locale batch save confirm](images/locale-batch-save-confirm.png)
`BatchSaveLostChanges` | Unsaved changes will be lost. Are you sure you want to continue? | ![Locale batch save lost changes](images/locale-batch-save-lost-changes.png)
`ConfirmDelete` | Are you sure you want to Delete Record? | ![Locale confirm delete](images/locale-confirm-delete.png)
`CancelEdit` | Are you sure you want to Cancel the changes? | ![Locale cancel edit](images/locale-cancel-edit.png)
`DialogEditARIA` | Edit dialog | 
`CommandColumnAria` | Command column header  | ![Grid command column header](images/locale-command-column-aria.png)
`DialogEdit` | Dialog edit | ![Locale dialog edit](images/locale-dialog-edit.png)

**Grouping**

Locale key words |Text | Example 
-----|-----|-----
`GroupDropArea` | Drag a column header here to group its column | ![Locale group drop area](images/locale-group-drop-area.png)
`UnGroup` | Click here to ungroup | ![Locale un group](images/locale-un-group.png)
`GroupDisable` | Grouping is disabled for this column | ![Locale group disable](images/locale-group-disable.png)
`Item` | item | ![Locale Item](images/locale-item.png)
`Items` | items | ![Locale Items](images/locale-items.png)
`UnGroupButton` | Click here to ungroup |
`GroupDescription` | Press Ctrl space to group | ![Locale group description](images/locale-group-description.png)
`GroupButton` | Group button | ![Locale group button](images/locale-group-button.png)
`UnGroupAria` | ungroup button | ![Locale ungroup aria](images/locale-ungroup-aria.png)
`GroupSeperator` | Separator for the grouped columns | ![Locale group seperator](images/locale-group-seperator.png)
`UnGroupIcon` | ungroup the grouped column  | ![Locale ungroup icon](images/locale-ungroup-icon.png)
`GroupedSortIcon` | sort the grouped column  | ![Locale grouped sort icon](images/locale-grouped-sort-icon.png)
`GroupedDrag` | Drag the grouped column | ![Locale grouped drag](images/locale-grouped-drag.png)
`GroupCaption` | is groupcaption cell | ![Locale group caption](images/locale-group-caption.png)
`Expanded` | Expanded | ![Locale expanded](images/locale-expanded.png)
`Collapsed` | Collapsed | ![Locale collapsed](images/locale-collapsed.png)

**Filtering**

Locale key words |Text | Example 
-----|-----|-----
`InvalidFilterMessage` | Invalid Filter Data
`FilterbarTitle` | Filter bar cell | ![Locale filterbar title](images/locale-filterbar-title.png)
`Matchs` | No Matches Found | ![Locale matchs](images/locale-matchs.png)
`FilterButton` | Filter | ![Locale filter button](images/locale-filter-button.png)
`ClearButton` | Clear | ![Locale clear button](images/locale-clear-button.png)
`StartsWith` | Starts With | ![Locale starts with](images/locale-starts-with.png)
`EndsWith` | Ends With | ![Locale ends with](images/locale-ends-with.png)
`Contains` | Contains | ![Locale contains](images/locale-contains.png)
`Equal` | Equal | ![Locale equal](images/locale-equal.png)
`NotEqual` | Not Equal | ![Locale not equal](images/locale-not-equal.png)
`LessThan` | Less Than | ![Locale less than](images/locale-less-than.png)
`LessThanOrEqual` | Less Than Or Equal | ![Locale less than or equal](images/locale-less-than-or-equal.png)
`GreaterThan` | Greater Than | ![Locale greater than](images/locale-greater-than.png)
`GreaterThanOrEqual` | Greater Than Or Equal | ![Locale greater than or equal](images/locale-greater-than-or-equal.png)
`ChooseDate` | Choose a Date | ![Locale choose date](images/locale-choose-date.png)
`EnterValue` | Enter the value | ![Locale enter value](images/locale-enter-value.png)
`SelectAll` | Select All | ![Locale select all](images/locale-select-all.png)
`Blanks` | Blanks | ![Locale blanks](images/locale-blanks.png)
`FilterTrue` | True | ![Locale filter true](images/locale-filter-true.png)
`FilterFalse` | False | ![Locale filter false](images/locale-filter-false.png)
`NoResult` | No Matches Found | ![Locale no result](images/locale-no-result.png)
`ClearFilter` | Clear Filter | ![Locale clear filter](images/locale-clear-filter.png)
`NumberFilter` | Number Filters | ![Locale number filter](images/locale-number-filter.png)
`TextFilter` | Text Filters | ![Locale text filter](images/locale-text-filter.png)
`DateFilter` | Date Filters | ![Locale date filter](images/locale-date-filter.png)
`DateTimeFilter` | DateTime Filters | ![Locale date time filter](images/locale-date-time-filter.png)
`MatchCase` | Match Case | ![Locale match case](images/locale-match-case.png)
`Between` | Between | ![Locale between](images/locale-between.png)
`CustomFilter` | Custom Filter | ![Locale custom filter](images/locale-custom-filter.png)
`CustomFilterPlaceHolder` | Enter the value | ![Locale custom filter placeholder](images/locale-custom-filter-placeholder.png)
`CustomFilterDatePlaceHolder` | Choose a date | ![Locale custom filter date placeholder](images/locale-custom-filter-date-placeholder.png)
`AND` | AND | ![Locale AND](images/locale-AND.png)
`OR` | OR | ![Locale OR](images/locale-OR.png)
`ShowRowsWhere` | Show rows where: | ![Locale show rows where](images/locale-show-rows-where.png)
`NotStartsWith` | Does Not Start With | ![Locale not starts with](images/locale-not-starts-with.png)
`Like` | Like | ![Locale like](images/locale-like.png)
`NotEndsWith` | Does Not End With | ![Locale not ends with](images/locale-not-ends-with.png)
`NotContains` | Does Not Contain | ![Locale not contains](images/locale-not-contains.png)
`IsNull` | Null | ![Locale is null](images/locale-is-null.png)
`NotNull` | Not Null | ![Locale not null](images/locale-not-null.png)
`IsEmpty` | Empty | ![Locale is empty](images/locale-is-empty.png)
`IsNotEmpty` | Not Empty | ![Locale is not empty](images/locale-is-not-empty.png)
`AddCurrentSelection` | Add current selection to filter | ![Locale add current selection](images/locale-add-current-selection.png)
`FilterMenuDialogARIA` | Filter menu dialog | ![Locale filter menu dialog ARIA](images/locale-filter-menu-dialog-ARIA.png)
`ExcelFilterDialogARIA` | Excel filter dialog | ![Locale excel menu dialog ARIA](images/locale-excel-menu-dialog-ARIA.png)
`CustomFilterDialogARIA` | Custom filter dialog | ![Locale Custom filter dialog ARIA](images/locale-custom-filter-dialog-ARIA.png)
`SortAtoZ` | Sort A to Z | ![Locale sort AtoZ](images/locale-sortAtoZ.png)
`SortZtoA` | Sort Z to A | ![Locale sort ZtoA](images/locale-sortZtoA.png)
`SortByOldest` | Sort by Oldest | ![Locale sort by oldest](images/locale-sort-by-oldest.png)
`SortByNewest` | Sort by Newest | ![Locale sort by newest](images/locale-sort-by-newest.png)
`SortSmallestToLargest` | Sort Smallest to Largest | ![Locale sort smallest to largest](images/locale-sort-smallest-to-largest.png)
`SortLargestToSmallest` | Sort Largest to Smallest | ![Locale sort largest to smallest](images/locale-sort-largest-to-smallest.png)
`FilterDescription` | Press Alt Down to open filter Menu | ![Locale filter description](images/locale-filter-description.png)

**Searching**

Locale key words |Text | Example 
-----|-----|-----
`Search` | Search | ![Locale search](images/locale-search.png)
`SearchColumns` | search columns
`Clear` | Clear | ![Locale clear](images/locale-clear.png)

**Sorting**

Locale key words |Text | Example 
-----|-----|-----
`Sort` | Sort | ![Locale sort](images/locale-sort.png)
`SortDescription` | Press Enter to sort | ![Locale sort description](images/locale-sort-description.png)

**Toolbar**

Locale key words |Text | Example 
-----|-----|-----
`Print` | Print | ![Locale print](images/locale-print.png)
`Pdfexport` | PDF Export | ![Locale pdfexport](images/locale-pdfexport.png)
`Excelexport` | Excel Export | ![Locale excelexport](images/locale-excelexport.png)
`Csvexport` | CSV Export | ![Locale csvexport](images/locale-csvexport.png)

**ColumnMenu**

Locale key words |Text | Example 
-----|-----|-----
`FilterMenu` | Filter | ![Locale filter menu](images/locale-filter-menu.png)
`AutoFitAll` | Autofit all columns |
`AutoFit` | Autofit this column |
`ColumnMenuDialogARIA` | Column menu dialog | ![Locale columnmenu dialog ARIA](images/locale-columnmenu-dialog-ARIA.png)
`ColumnMenuDescription` | Press Alt Down to open Column Menu | ![Locale columnmenu description](images/locale-columnmenu-description.png)

**ContextMenu**

Locale key words |Text | Example 
-----|-----|-----
`Copy` | Copy | ![Locale copy](images/locale-copy.png)
`Group` | Group by this column | ![Locale group](images/locale-group.png)
`Ungroup` | Ungroup by this column | ![Locale ungroup](images/locale-ungroup.png)
`autoFitAll` | Auto Fit all columns | ![Locale autofit all](images/locale-autofit-all.png)
`autoFit` | Auto Fit this column | ![Locale autofit](images/locale-autofit.png)
`Export` | Export | ![Locale export](images/locale-export.png)
`FirstPage` | First Page | ![Locale first page](images/locale-first-page.png)
`LastPage` | Last Page | ![Locale last page](images/locale-last-page.png)
`PreviousPage` | Previous Page | ![Locale previous page](images/locale-previous-page.png)
`NextPage` | Next Page | ![Locale next page](images/locale-next-page.png)
`SortAscending` | Sort Ascending | ![Locale sort ascending](images/locale-sort-ascending.png)
`SortDescending` | Sort Descending | ![Locale sort descending](images/locale-sort-descending.png)
`EditRecord` | Edit Record | ![Locale edit record](images/locale-edit-record.png)
`DeleteRecord` | Delete Record | ![Locale delete record](images/locale-delete-record.png)

**Pager**

Locale key words |Text | Example 
-----|-----|-----
`currentPageInfo` | {0} of {1} pages | ![Locale current page info](images/locale-current-page-info.png)
`totalItemsInfo` | ({0} items) | ![Locale total items info](images/locale-total-items-info.png)
`firstPageTooltip` | Go to first page | ![Locale first page tooltip](images/locale-first-page-tooltip.png)
`lastPageTooltip` | Go to last page | ![Locale last page tooltip](images/locale-last-page-tooltip.png)
`nextPageTooltip` | Go to next page | ![Locale next page tooltip](images/locale-next-page-tooltip.png)
`previousPageTooltip` | Go to previous page | ![Locale previous page tooltip](images/locale-previous-page-tooltip.png)
`nextPagerTooltip` | Go to next pager items | ![Locale next pager tooltip](images/locale-next-pager-tooltip.png)
`previousPagerTooltip` | Go to previous pager items | ![Locale previous pager tooltip](images/locale-previous-pager-tooltip.png)
`pagerDropDown` | Items per page | ![Locale pager drop down](images/locale-pager-drop-down.png)
`pagerAllDropDown` | Items | ![Locale pager all drop down](images/locale-pager-all-drop-down.png)
`All` | All | ![Locale pager all](images/locale-pager-all.png)
`totalItemInfo` | ({0} item) | ![Locale total item info](images/locale-pager-total-item-info.png)
`Container` | Pager Container | ![Locale pager container](images/locale-pager-container.png)
`Information` | Pager Information |
`ExternalMsg` | Pager external message | ![Locale pager external msg](images/locale-pager-external-msg.png)
`Page` | Page  |
`Of `|  of  | ![Locale pager of](images/locale-pager-of.png)
`Pages` |  Pages |

### Loading translations for de culture

The built-in localization library supports loading translation objects for different cultures. Using the `L10n.load` function customizes the Grid's text content for different languages.

This enables specifying translation objects for specific cultures, such as "German (de)", allowing the Grid’s content to be displayed in the selected language.

**TypeScript settings for loading CLDR JSON files**

Follow the steps below to enable proper loading of CLDR JSON files(used for internationalization) in TypeScript:

1. Open **tsconfig.json** file.
2. Inside `compilerOptions` set both `resolveJsonModule` and `esModuleInterop` to `true`.

```ts
{
  compilerOptions: {
    resolveJsonModule: true,
    esModuleInterop: true,
  }
}
```

The following example demonstrates loading a translation object for "German (de)" by using `L10n.load` from the `ej2-base` module and setting the `locale` to "de-DE".


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/localization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="locale.json" %}
{% include code-snippet/grid/localization-cs1/src/locale.json %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample page.domainurl/samples/grid/localization-cs1 %}

### Loading translations for fr cultures

Translation loading enables specifying translation objects for different cultures such as "German", "Arabic", and "French" so the grid displays content in the chosen language.

Please verify that JSON module support is enabled in **tsconfig.json** as mentioned earlier in this [guide](#loading-translations-for-de-culture).

The following example demonstrates loading a translation object for "French (fr)" by setting the `locale` to "fr-FR" and using `L10n.load` from the `ej2-base` module.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/localization-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="locale.json" %}
{% include code-snippet/grid/localization-cs5/src/locale.json %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/localization-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample page.domainurl/samples/grid/localization-cs5 %}

### Switch the different localization

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid supports switching localization between cultures, allowing dynamic changes based on application requirements.

Switching localization requires the following steps:

**Step 1:** Import and load the required CLDR (Common Locale Data Repository) data for the desired culture using the `loadCldr` function.

```ts
loadCldr(
  caGregorian,
  currencies,
  numbers,
  timeZoneNames,
  numberingSystems
);
```
**Step 2:** Please verify that JSON module support is enabled in **tsconfig.json** as mentioned earlier in this [guide](#loading-translations-for-de-culture).

**Step 3:** Change the default culture and currency code using the `setCulture` and `setCurrencyCode` methods.

An example demonstrates switching to the "French" culture and setting the currency code to "EUR" via external button clicks. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/localization-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="locale.json" %}
{% include code-snippet/grid/localization-cs6/src/locale.json %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/localization-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample page.domainurl/samples/grid/localization-cs6 %}

### Set different locale text for two Grids in same page

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid allows configuring different [locale](https://ej2.syncfusion.com/angular/documentation/api/grid#locale) settings for multiple Grids displayed on the same page. By using the `L10n.load` function to define translations for specific languages so each Grid applies the appropriate localized text for headers, toolbar items, and action buttons.

For example, one Grid can use the "fr-FR" locale to display "French" text, while another Grid uses "en-US" and keeps the default "English" text. This shows that each Grid can have its own localization without affecting the others

## Internationalization

The [Internationalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library provides localized formatting for number, date, and time values in the Grid based on language and region.

`Internationalization` enables globalization of number, date, and time values using format strings defined in the [format](https://ej2.syncfusion.com/angular/documentation/api/grid/column#format) property.

This ensures that the Grid component uses the correct format strings for number, date, and time values based on the selected culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/localization-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="locale.json" %}
{% include code-snippet/grid/localization-cs2/src/locale.json %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/localization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample page.domainurl/samples/grid/localization-cs2 %}

> * In the above sample, the "Freight" column is formatted using [NumberFormatOptions](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#manipulating-numbers).
> * By default, the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid#locale) value is "en-US". Change the `locale` property to use a different culture.

## Right-to-Left - RTL

The Right-to-Left (RTL) feature switches text direction and layout from left-to-right to right-to-left. This feature is especially beneficial for interacting with the grid in languages that are written and read from right to left, such as "Arabic", "Farsi", "Urdu", and others. Enabling RTL significantly improves the experience and accessibility for such languages.

Enable RTL by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/grid#enablertl) property to `true`. This adjusts the Grid's text direction and layout for right-to-left languages.

Please verify that JSON module support is enabled in **tsconfig.json** as mentioned earlier in this [guide](#loading-translations-for-de-culture).

The example below adds an [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) to enable or disable RTL for the "Arabic (ar-AE)" locale. When toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/index-default#change) event updates the grid's `enableRtl` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="locale.json" %}
{% include code-snippet/grid/paging1-cs1/src/locale.json %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample page.domainurl/samples/grid/paging1-cs1 %}

## See Also

* [Internationalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization)
* [Localization](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization)
* [Apply Grid localization using external JSON file in Angular](https://www.syncfusion.com/forums/144844/apply-grid-localization-from-external-json-file-in-angular-grid)

