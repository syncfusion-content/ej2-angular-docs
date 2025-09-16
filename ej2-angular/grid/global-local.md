---
layout: post
title: Globalization and Localization in Angular Grid component | Syncfusion
description: Learn here all about globalization and localization in the Syncfusion Angular Grid component of Syncfusion Essential JS 2, including full support for multilingual and region-specific formats.
platform: ej2-angular
control: Global local 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization and Localization in Angular Grid Component

The Syncfusion Angular Grid component offers comprehensive globalization and localization support to enhance accessibility and usability for users from various regions and language backgrounds. These features allow data to be displayed in preferred languages and formats, creating an inclusive user experience.

## Localization

The Syncfusion Angular Grid provides a built-in [Localization](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization) library, enabling you to customize the text used in the grid to suit different languages or cultural preferences. With this library, you can change static text on various elements, such as **group drop area text** and **pager information text**, to different cultures, such as **Arabic**, **Deutsch**, **French**, and more.

Localization can be achieved by setting the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) property and providing a translation object.

Below is a list of locale keywords and their corresponding example texts as used in the Grid.

**Data Rendering**

Locale keywords | Text | Example 
-----|-----|-----
EmptyRecord | No records to display | ![Locale empty record](images/locale-empty-record.png)
EmptyDataSourceError | DataSource must not be empty at initial load since columns are generated from dataSource in auto-generated columns

**Columns**

Locale keywords | Text | Example 
-----|-----|-----
True | true | ![Grid with True value](images/locale-true.png)
False | false | ![Grid with False value](images/locale-false.png)
ColumnHeader | column header  | ![Grid column header](images/locale-column-header.png)
TemplateCell | is template cell | ![Grid template cell](images/locale-templatecell.png)
ClipBoard | clipboard | ![Grid clipboard](images/locale-clipboard.png)
CheckBoxLabel | checkbox | ![Grid checkbox label](images/locale-checkbox-label.png)

**ColumnChooser**

Locale keywords | Text | Example 
-----|-----|-----
Columnchooser | Columns | ![Locale column chooser](images/locale-column-chooser.png)
ChooseColumns | Choose Column | ![Locale choose columns](images/locale-choose-columns.png)
ColumnChooserDialogARIA | Column chooser | ![Locale column chooser dialog ARIA](images/locale-columnchooser-dialog-ARIA.png)

**Editing**

Locale keywords | Text | Example 
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
CommandColumnAria | Command column header  | ![Grid command column header](images/locale-command-column-aria.png)
DialogEdit | Dialog edit | ![Locale dialog edit](images/locale-dialog-edit.png)

**Grouping**

Locale keywords | Text | Example 
-----|-----|-----
GroupDropArea | Drag a column header here to group by that column | ![Group drop area](images/locale-group-drop-area.png)
UnGroup | Click here to ungroup | ![Locale ungroup](images/locale-un-group.png)
GroupDisable | Grouping is disabled for this column | ![Locale group disable](images/locale-group-disable.png)
Item | item | ![Locale Item](images/locale-item.png)
Items | items | ![Locale Items](images/locale-items.png)
UnGroupButton | Click here to ungroup |
GroupDescription | Press Ctrl+Space to group | ![Locale Group description](images/locale-group-description.png)
GroupButton | Group button | ![Locale Group button](images/locale-group-button.png)
UnGroupAria | Ungroup button | ![Locale Ungroup ARIA label](images/locale-ungroup-aria.png)
GroupSeperator | Separator for the grouped columns | ![Locale Group separator](images/locale-group-seperator.png)
UnGroupIcon | Ungroup the grouped column  | ![Locale Ungroup icon](images/locale-ungroup-icon.png)
GroupedSortIcon | Sort the grouped column  | ![Locale Grouped sort icon](images/locale-grouped-sort-icon.png)
GroupedDrag | Drag the grouped column | ![Locale Grouped drag icon](images/locale-grouped-drag.png)
GroupCaption | Group caption cell | ![Locale Group caption cell](images/locale-group-caption.png)
Expanded | Expanded | ![Locale Group expanded](images/locale-expanded.png)
Collapsed | Collapsed | ![Locale Group collapsed](images/locale-collapsed.png)

**Filtering**

Locale keywords | Text | Example 
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

Locale keywords | Text | Example 
-----|-----|-----
Search | Search | ![Locale Grid search function](images/locale-search.png)
SearchColumns | Search columns
Clear | Clear | ![Locale Clear](images/locale-clear.png)

**Sorting**

Locale keywords | Text | Example 
-----|-----|-----
Sort | Sort | ![Locale Grid sort function](images/locale-sort.png)
SortDescription | Press Enter to sort | ![Locale Sort description](images/locale-sort-description.png)

**Toolbar**

Locale keywords | Text | Example 
-----|-----|-----
Print | Print | ![Locale Toolbar print](images/locale-print.png)
Pdfexport | PDF Export | ![Locale Toolbar PDF export](images/locale-pdfexport.png)
Excelexport | Excel Export | ![Locale Toolbar Excel export]images/locale-excelexport.png)
Csvexport | CSV Export | ![Locale Toolbar CSV export](images/locale-csvexport.png)

**ColumnMenu**

Locale keywords | Text | Example 
-----|-----|-----
FilterMenu | Filter | ![Locale Column menu filter](images/locale-filter-menu.png)
AutoFitAll | Autofit all columns
AutoFit | Autofit this column
ColumnMenuDialogARIA | Column menu dialog | ![Locale Column menu dialog ARIA](images/locale-columnmenu-dialog-ARIA.png)
ColumnMenuDescription | Press Alt + Down to open Column Menu | ![Locale Column menu description](images/locale-columnmenu-description.png)

**ContextMenu**

Locale keywords | Text | Example 
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

Locale keywords | Text | Example 
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

### Loading translations for a specific culture

The built-in localization library enables loading translation objects for different cultures. Use the **load** function from the **L10n** class to customize grid text. You can specify translation objects for specific cultures, such as **German (de-DE)**, to display content in the required language.

Enable JSON module resolution in TypeScript by setting **resolveJsonModule** to `true` and **esModuleInterop** to `true` in your `tsconfig.json` file:

```ts
{
  compilerOptions: {
    resolveJsonModule: true,
    esModuleInterop: true,
  }
}
```

The following example demonstrates loading a translation object for **German (de-DE)** using the **L10n.load** function and assigning the [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) as **de-DE**.

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

### Loading translations for additional cultures

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

### Switching between localizations

The Angular Grid enables dynamic switching of localization at runtime. This is useful for applications requiring language changes based on user preferences.

**Step 1:** Import and load the necessary CLDR (Common Locale Data Repository) data for the target culture:

```ts
loadCldr(
  caGregorian,
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

**Step 3:** Use the `setCulture` method to change the locale and `setCurrencyCode` to update currency formatting.

To switch to **French (fr-FR)** culture and set the currency to **EUR**:

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

## Internationalization

The Internationalization library provides localized display for numbers, dates, and times in the Grid based on the chosen language and region. This is achieved using the [Internationalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library and format strings defined in the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property.

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

> * In the above sample, the **Freight** column is formatted using [NumberFormatOptions](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization#manipulating-numbers).
> * The default [locale](https://ej2.syncfusion.com/angular/documentation/api/grid/#locale) value is **en-US**. To use a different culture, set the `locale` property accordingly.

## Right-to-Left (RTL) Support

The Syncfusion Angular Grid supports right-to-left (RTL) layout, adjusting text direction and grid layout for languages such as Arabic, Farsi, and Urdu. Enabling the RTL property provides a more accessible experience for users of right-to-left scripts.

Enable RTL in the Grid by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablertl) property to **true**. This adjusts both the text and layout for RTL languages.

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
* [Apply Grid localization using external JSON file in Angular](https://www.syncfusion.com/forums/144844/apply-grid-localization-from-external-json-file-in-angular-grid)
```
