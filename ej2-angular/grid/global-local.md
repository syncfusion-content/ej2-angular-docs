---
layout: post
title: Global local in Angular Grid component | Syncfusion
description: Learn here all about Global local in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Global local 
documentation: ug
domainurl: ##DomainURL##
---

# Global local in Angular Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides a feature known as Globalization (global and local), which makes the application more accessible and useful for individuals from different regions and language backgrounds. You have the ability to view data in your preferred language and format, resulting in an enhanced overall experience.

## Localization

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides a built-in [Localization](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization) library, enabling you to customize the text used in the grid to suit different languages or cultural preferences. With this library, you can change static text on various elements, such as **group drop area text** and **pager information text**, to different cultures, such as **Arabic**, **Deutsch**, **French**, and more.

This can be achieved by defining the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) property and translation object.

The following list of properties and its values are used in the grid.

**Data Rendering**

Locale key words |Text | Example 
-----|-----|-----
EmptyRecord | No records to display | ![Locale empty record](images/locale-empty-record.png)
EmptyDataSourceError | DataSource must not be empty at initial load since columns are generated from dataSource in AutoGenerate Column Grid

**Columns**

Locale key words |Text | Example 
-----|-----|-----
True | true | ![Locale true](images/locale-true.png)
False | false | ![Locale false](images/locale-false.png)
ColumnHeader | column header  | ![Locale column header](images/locale-column-header.png)
TemplateCell | is template cell | ![Locale template cell](images/locale-templatecell.png)
ClipBoard | clipboard | ![Locale clipboard](images/locale-clipboard.png)
CheckBoxLabel | checkbox | ![Locale checkbox label](images/locale-checkbox-label.png)

**ColumnChooser**

Locale key words |Text | Example 
-----|-----|-----
Columnchooser | Columns | ![Locale columnchooser](images/locale-column-chooser.png)
ChooseColumns | Choose Column | ![Locale choose columns](images/locale-choose-columns.png)
ColumnChooserDialogARIA | Column chooser | ![Locale columnchooser dialog ARIA](images/locale-columnchooser-dialog-ARIA.png)

**Editing**

Locale key words |Text | Example 
-----|-----|-----
Add | Add | ![Locale add](images/locale-add.png)
Edit| Edit | ![Locale edit](images/locale-edit.png)
Cancel| Cancel | ![Locale cancel](images/locale-cancel.png)
Update| Update | ![Locale update](images/locale-update.png)
Delete | Delete | ![Locale delete](images/locale-delete.png)
Save | Save | ![Locale save](images/locale-save.png)
EditOperationAlert | No records selected for edit operation | ![Locale edit operation alert](images/locale-edit-operation-alert.png)
DeleteOperationAlert | No records selected for delete operation | ![Locale delete operation alert](images/locale-delete-operation-alert.png)
SaveButton | Save | ![Locale save button](images/locale-save-button.png)
OKButton | OK | ![Locale ok button](images/locale-ok-button.png)
CancelButton | Cancel | ![Locale cancel button](images/locale-cancel-button.png)
EditFormTitle | Details of | ![Locale edit form title](images/locale-edit-form-title.png)
AddFormTitle | Add New Record | ![Locale add form title](images/locale-add-form-title.png)
BatchSaveConfirm | Are you sure you want to save changes? | ![Locale batch save confirm](images/locale-batch-save-confirm.png)
BatchSaveLostChanges | Unsaved changes will be lost. Are you sure you want to continue? | ![Locale batch save lost changes](images/locale-batch-save-lost-changes.png)
ConfirmDelete | Are you sure you want to Delete Record? | ![Locale confirm delete](images/locale-confirm-delete.png)
CancelEdit | Are you sure you want to Cancel the changes? | ![Locale cancel edit](images/locale-cancel-edit.png)
DialogEditARIA | Edit dialog | 
CommandColumnAria | is Command column column header  | ![Locale command column aria](images/locale-command-column-aria.png)
DialogEdit | Dialog edit | ![Locale dialog edit](images/locale-dialog-edit.png)

**Grouping**

Locale key words |Text | Example 
-----|-----|-----
GroupDropArea | Drag a column header here to group its column | ![Locale group drop area](images/locale-group-drop-area.png)
UnGroup | Click here to ungroup | ![Locale un group](images/locale-un-group.png)
GroupDisable | Grouping is disabled for this column | ![Locale group disable](images/locale-group-disable.png)
Item | item | ![Locale Item](images/locale-item.png)
Items | items | ![Locale Items](images/locale-items.png)
UnGroupButton | Click here to ungroup |
GroupDescription | Press Ctrl space to group | ![Locale group description](images/locale-group-description.png)
GroupButton | Group button | ![Locale group button](images/locale-group-button.png)
UnGroupAria | ungroup button | ![Locale ungroup aria](images/locale-ungroup-aria.png)
GroupSeperator | Separator for the grouped columns | ![Locale group seperator](images/locale-group-seperator.png)
UnGroupIcon | ungroup the grouped column  | ![Locale ungroup icon](images/locale-ungroup-icon.png)
GroupedSortIcon | sort the grouped column  | ![Locale grouped sort icon](images/locale-grouped-sort-icon.png)
GroupedDrag | Drag the grouped column | ![Locale grouped drag](images/locale-grouped-drag.png)
GroupCaption | is groupcaption cell | ![Locale group caption](images/locale-group-caption.png)
Expanded | Expanded | ![Locale expanded](images/locale-expanded.png)
Collapsed | Collapsed | ![Locale collapsed](images/locale-collapsed.png)

**Filtering**

Locale key words |Text | Example 
-----|-----|-----
InvalidFilterMessage | Invalid Filter Data
FilterbarTitle | \s filter bar cell | ![Locale filterbar title](images/locale-filterbar-title.png)
Matchs | No Matches Found | ![Locale matchs](images/locale-matchs.png)
FilterButton | Filter | ![Locale filter button](images/locale-filter-button.png)
ClearButton | Clear | ![Locale clear button](images/locale-clear-button.png)
StartsWith | Starts With | ![Locale starts with](images/locale-starts-with.png)
EndsWith | Ends With | ![Locale ends with](images/locale-ends-with.png)
Contains | Contains | ![Locale contains](images/locale-contains.png)
Equal | Equal | ![Locale equal](images/locale-equal.png)
NotEqual | Not Equal | ![Locale not equal](images/locale-not-equal.png)
LessThan | Less Than | ![Locale less than](images/locale-less-than.png)
LessThanOrEqual | Less Than Or Equal | ![Locale less than or equal](images/locale-less-than-or-equal.png)
GreaterThan | Greater Than | ![Locale greater than](images/locale-greater-than.png)
GreaterThanOrEqual | Greater Than Or Equal | ![Locale greater than or equal](images/locale-greater-than-or-equal.png)
ChooseDate | Choose a Date | ![Locale choose date](images/locale-choose-date.png)
EnterValue | Enter the value | ![Locale enter value](images/locale-enter-value.png)
SelectAll | Select All | ![Locale select all](images/locale-select-all.png)
Blanks | Blanks | ![Locale blanks](images/locale-blanks.png)
FilterTrue | True | ![Locale filter true](images/locale-filter-true.png)
FilterFalse | False | ![Locale filter false](images/locale-filter-false.png)
NoResult | No Matches Found | ![Locale no result](images/locale-no-result.png)
ClearFilter | Clear Filter | ![Locale clear filter](images/locale-clear-filter.png)
NumberFilter | Number Filters | ![Locale number filter](images/locale-number-filter.png)
TextFilter | Text Filters | ![Locale text filter](images/locale-text-filter.png)
DateFilter | Date Filters | ![Locale date filter](images/locale-date-filter.png)
DateTimeFilter | DateTime Filters | ![Locale date time filter](images/locale-date-time-filter.png)
MatchCase | Match Case | ![Locale match case](images/locale-match-case.png)
Between | Between | ![Locale between](images/locale-between.png)
CustomFilter | Custom Filter | ![Locale custom filter](images/locale-custom-filter.png)
CustomFilterPlaceHolder | Enter the value | ![Locale custom filter placeholder](images/locale-custom-filter-placeholder.png)
CustomFilterDatePlaceHolder | Choose a date | ![Locale custom filter date placeholder](images/locale-custom-filter-date-placeholder.png)
AND | AND | ![Locale AND](images/locale-AND.png)
OR | OR | ![Locale OR](images/locale-OR.png)
ShowRowsWhere | Show rows where: | ![Locale show rows where](images/locale-show-rows-where.png)
NotStartsWith | Does Not Start With | ![Locale not starts with](images/locale-not-starts-with.png)
Like | Like | ![Locale like](images/locale-like.png)
NotEndsWith | Does Not End With | ![Locale not ends with](images/locale-not-ends-with.png)
NotContains | Does Not Contain | ![Locale not contains](images/locale-not-contains.png)
IsNull | Null | ![Locale is null](images/locale-is-null.png)
NotNull | Not Null | ![Locale not null](images/locale-not-null.png)
IsEmpty | Empty | ![Locale is empty](images/locale-is-empty.png)
IsNotEmpty | Not Empty | ![Locale is not empty](images/locale-is-not-empty.png)
AddCurrentSelection | Add current selection to filter | ![Locale add current selection](images/locale-add-current-selection.png)
FilterMenuDialogARIA | Filter menu dialog | ![Locale filter menu dialog ARIA](images/locale-filter-menu-dialog-ARIA.png)
ExcelFilterDialogARIA | Excel filter dialog | ![Locale excel menu dialog ARIA](images/locale-excel-menu-dialog-ARIA.png)
CustomFilterDialogARIA | Custom filter dialog | ![Locale Custom filter dialog ARIA](images/locale-custom-filter-dialog-ARIA.png)
SortAtoZ | Sort A to Z | ![Locale sort AtoZ](images/locale-sortAtoZ.png)
SortZtoA | Sort Z to A | ![Locale sort ZtoA](images/locale-sortZtoA.png)
SortByOldest | Sort by Oldest | ![Locale sort by oldest](images/locale-sort-by-oldest.png)
SortByNewest | Sort by Newest | ![Locale sort by newest](images/locale-sort-by-newest.png)
SortSmallestToLargest | Sort Smallest to Largest | ![Locale sort smallest to largest](images/locale-sort-smallest-to-largest.png)
SortLargestToSmallest | Sort Largest to Smallest | ![Locale sort largest to smallest](images/locale-sort-largest-to-smallest.png)
FilterDescription | Press Alt Down to open filter Menu | ![Locale filter description](images/locale-filter-description.png)

**Searching**

Locale key words |Text | Example 
-----|-----|-----
Search | Search | ![Locale search](images/locale-search.png)
SearchColumns | search columns
Clear | Clear | ![Locale clear](images/locale-clear.png)

**Sorting**

Locale key words |Text | Example 
-----|-----|-----
Sort | Sort | ![Locale sort](images/locale-sort.png)
SortDescription | Press Enter to sort | ![Locale sort description](images/locale-sort-description.png)

**Toolbar**

Locale key words |Text | Example 
-----|-----|-----
Print | Print | ![Locale print](images/locale-print.png)
Pdfexport | PDF Export | ![Locale pdfexport](images/locale-pdfexport.png)
Excelexport | Excel Export | ![Locale excelexport](images/locale-excelexport.png)
Csvexport | CSV Export | ![Locale csvexport](images/locale-csvexport.png)

**ColumnMenu**

Locale key words |Text | Example 
-----|-----|-----
FilterMenu | Filter | ![Locale filter menu](images/locale-filter-menu.png)
AutoFitAll | Autofit all columns |
AutoFit | Autofit this column |
ColumnMenuDialogARIA | Column menu dialog | ![Locale columnmenu dialog ARIA](images/locale-columnmenu-dialog-ARIA.png)
ColumnMenuDescription | Press Alt Down to open Column Menu | ![Locale columnmenu description](images/locale-columnmenu-description.png)

**ContextMenu**

Locale key words |Text | Example 
-----|-----|-----
Copy | Copy | ![Locale copy](images/locale-copy.png)
Group | Group by this column | ![Locale group](images/locale-group.png)
Ungroup | Ungroup by this column | ![Locale ungroup](images/locale-ungroup.png)
autoFitAll | Auto Fit all columns | ![Locale autofit all](images/locale-autofit-all.png)
autoFit | Auto Fit this column | ![Locale autofit](images/locale-autofit.png)
Export | Export | ![Locale export](images/locale-export.png)
FirstPage | First Page | ![Locale first page](images/locale-first-page.png)
LastPage | Last Page | ![Locale last page](images/locale-last-page.png)
PreviousPage | Previous Page | ![Locale previous page](images/locale-previous-page.png)
NextPage | Next Page | ![Locale next page](images/locale-next-page.png)
SortAscending | Sort Ascending | ![Locale sort ascending](images/locale-sort-ascending.png)
SortDescending | Sort Descending | ![Locale sort descending](images/locale-sort-descending.png)
EditRecord | Edit Record | ![Locale edit record](images/locale-edit-record.png)
DeleteRecord | Delete Record | ![Locale delete record](images/locale-delete-record.png)

**Pager**

Locale key words |Text | Example 
-----|-----|-----
currentPageInfo | {0} of {1} pages | ![Locale current page info](images/locale-current-page-info.png)
totalItemsInfo | ({0} items) | ![Locale total items info](images/locale-total-items-info.png)
firstPageTooltip | Go to first page | ![Locale first page tooltip](images/locale-first-page-tooltip.png)
lastPageTooltip | Go to last page | ![Locale last page tooltip](images/locale-last-page-tooltip.png)
nextPageTooltip | Go to next page | ![Locale next page tooltip](images/locale-next-page-tooltip.png)
previousPageTooltip | Go to previous page | ![Locale previous page tooltip](images/locale-previous-page-tooltip.png)
nextPagerTooltip | Go to next pager items | ![Locale next pager tooltip](images/locale-next-pager-tooltip.png)
previousPagerTooltip | Go to previous pager items | ![Locale previous pager tooltip](images/locale-previous-pager-tooltip.png)
pagerDropDown | Items per page | ![Locale pager drop down](images/locale-pager-drop-down.png)
pagerAllDropDown | Items | ![Locale pager all drop down](images/locale-pager-all-drop-down.png)
All | All | ![Locale pager all](images/locale-pager-all.png)
totalItemInfo | ({0} item) | ![Locale total item info](images/locale-pager-total-item-info.png)
Container | Pager Container | ![Locale pager container](images/locale-pager-container.png)
Information | Pager Information |
ExternalMsg | Pager external message | ![Locale pager external msg](images/locale-pager-external-msg.png)
Page | Page  |
Of |  of  | ![Locale pager of](images/locale-pager-of.png)
Pages |  Pages |

### Loading translations for de culture

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides a built-in Localization library that allows you to load translation objects for different cultures. By using the **load** function of the **L10n** class, you can customize the text content of the Grid to be displayed in different languages. 

This feature allows you to specify translation objects for specific cultures, such as **Deutsch** (German), and display the Grid's content in the desired language.

To work with **JSON** files in your application, you can enable JSON module resolution in TypeScript by adding the **resolveJsonModule** to true to your tsconfig.json file. Additionally, you can enhance module interoperation by setting **esModuleInterop** to true as shown below:

```ts
{
  compilerOptions: {
    resolveJsonModule: true,
    esModuleInterop: true,
  }
}
```

The following example demonstrates how to load a translation object for **Deutsch (de)** culture, by using the **load** function of **L10n** class from the **ej2-base** module and by defining the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) to **de-DE**.

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

### Loading translations for fr culture 

The Loading translations feature allows you to specify translation objects for different cultures, such as **Deutsch**, **Arabic**, **French** and display the Grid's content in the desired language.

To work with **JSON** files in your application, you can enable JSON module resolution in TypeScript by adding the **resolveJsonModule** to true to your tsconfig.json file. Additionally, you can enhance module interoperation by setting **esModuleInterop** to true as shown below:

```ts
{
  compilerOptions: {
    resolveJsonModule: true,
    esModuleInterop: true,
  }
}
```

The following example demonstrates how to load a translation object for **French (fr)** culture, by defining the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) to **fr-FR** and by using the **load** function of **L10n** class from the **ej2-base** module.

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

The Synfusion Angular Grid allows you to switch the localization from one culture to another culture. This will be useful when you want to change the localization based on your requirements. 

To switch to a different localization, follow these steps:

**Step 1:** Import and load the required CLDR (Common Locale Data Repository) data for the desired culture using the loadCldr function.

```ts
loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames,
    numberingSystems
);
```
**Step 2:** To import **json** files in your application, you can enable JSON module resolution in TypeScript by adding the **resolveJsonModule** to true to your tsconfig.json file. Additionally, you can enhance module interoperation by setting **esModuleInterop** to true as shown below:

```ts
{
  compilerOptions: {
    resolveJsonModule: true,
    esModuleInterop: true,
  }
}
```

**Step 3:** To change the default culture and the currency code, you can use the methods `setCulture` for setting the locale and `setCurrencyCode` for setting the currency code.

To switch to the **French** culture and set the currency code as **EUR**, you can use the `setCulture` method and the `setCurrencyCode` method of the Grid on external button click. This is demonstrated below: 

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

The Syncfusion Angular Grid allows configuring different [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) settings for multiple Grids displayed on the same page. By using the **load** function of the **L10n** class, you can customize the text content of the Grid to be displayed in different languages.

In this setup, each Grid can display text in a different language based on its assigned `locale`. The `load` function is used to define translations for specific languages, ensuring that each Grid correctly applies the localized text for headers, toolbar items, and action buttons.

For example, when the first Grid is set to use the **fr-FR** locale, it applies the French translations loaded via **L10n.load**. The second Grid, set to **en-US**, retains the default English text. This demonstrates how localization can be customized per Grid without affecting other components on the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/localization-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="locale.json" %}
{% include code-snippet/grid/localization-cs7/src/locale.json %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/localization-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample page.domainurl/samples/grid/localization-cs7 %} 

## Internationalization

The Internationalization library in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid provides a localized display of number, date, and time values in the Grid component based on the preferred language and region.

[Internationalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library allows you to globalize number, date, and time values using format strings defined in the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property.

To work with **JSON** files in your application, you can enable JSON module resolution in TypeScript by adding the **resolveJsonModule** to true to your tsconfig.json file. Additionally, you can enhance module interoperation by setting esModuleInterop to true as shown below:

```ts
{
  compilerOptions: {
    resolveJsonModule: true,
    esModuleInterop: true,
  }
}
```

You need to load the culture format files corresponding to the desired locale in **ngOnInit** function. This ensures that the Grid component uses the correct format strings for number, date, and time values based on the selected culture. This can be demonstrated in the below example,

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

> * In the above sample, **Freight** column is formatted using the [NumberFormatOptions](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#manipulating-numbers).
> * By default, [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) value is **en-US**. If you wish to change the culture to something other than **en-US**, you can simply set the `locale` property accordingly.

## Right to Left - RTL

The Right to Left (RTL) feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allows you to switch the text direction and layout from left-to-right to right-to-left. This feature is especially beneficial for interacting with the grid in languages that are written and read from right to left, such as **Arabic**, **Farsi,** **Urdu**, and others. Enabling RTL significantly improves the experience and accessibility for such languages.

To enable RTL in the Grid, you need to set the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablertl) property to **true**. By setting `enableRtl`, the grid component's text direction and layout will be adjusted to support right-to-left languages.

To work with **JSON** files in your application, you can enable JSON module resolution in TypeScript by adding the **resolveJsonModule** to true to your tsconfig.json file. Additionally, you can enhance module interoperation by setting **esModuleInterop** to true as shown below:

```ts
{
  compilerOptions: {
    resolveJsonModule: true,
    esModuleInterop: true,
  }
}
```

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/angular/documentation/switch/getting-started) component is added to enable or diable the Right to Left (RTL) feature for the **Arabic (ar-AE)** locale. When the switch is toggled, the [change](https://ej2.syncfusion.com/angular/documentation/api/switch/#change) event is triggered and the `enableRtl` property of the grid is updated accordingly. 

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
* [Localization](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization/)
* [Animate the Grid selected row in Angular Grid](https://www.syncfusion.com/forums/144844/apply-grid-localization-from-external-json-file-in-angular-grid)
