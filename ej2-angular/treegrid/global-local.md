---
layout: post
title: Global local in Angular Treegrid component | Syncfusion
description: Learn here all about Global local in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Global local 
documentation: ug
domainurl: ##DomainURL##
---

# Global local in Angular Treegrid component

## Localization

The [`Localization`](../common/localization) library allows you to localize default text content of the TreeGrid. The treegrid component has static text on some features (like toolbar area text, filter menu text, pager information text, etc.) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#locale) value and translation object.

The following list of properties and its values are used in the treegrid.

Locale keywords |Text
-----|-----
EmptyRecord | No records to display
True | true
False | false
ExpandAll | Expand All
CollapseAll | Collapse All
RowIndent | Indent
RowOutdent | Outdent
InvalidFilterMessage | Invalid Filter Data
FilterbarTitle | \s filter bar cell
Add | Add
Edit| Edit
Cancel| Cancel
Update| Update
Delete | Delete
Print | Print
Pdfexport | PDF Export
Excelexport | Excel Export
Wordexport | Word Export
Csvexport | CSV Export
Search | Search
Save | Save
EditOperationAlert | No records selected for edit operation
DeleteOperationAlert | No records selected for delete operation
SaveButton | Save
OKButton | OK
CancelButton | Cancel
EditFormTitle | Details of
AddFormTitle | Add New Record
ConfirmDelete | Are you sure you want to Delete Record?
SearchColumns | search columns
Matchs | No Matches Found
FilterButton | Filter
ClearButton | Clear
StartsWith | Starts With
EndsWith | Ends With
Contains | Contains
Equal | Equal
NotEqual | Not Equal
LessThan | Less Than
LessThanOrEqual | Less Than Or Equal
GreaterThan | Greater Than
GreaterThanOrEqual | Greater Than Or Equal
ChooseDate | Choose a Date
EnterValue | Enter the value
autoFitAll | Auto Fit all columns
autoFit | Auto Fit this column
Export | Export
FirstPage | First Page
LastPage | Last Page
PreviousPage | Previous Page
NextPage | Next Page
SortAscending | Sort Ascending
SortDescending | Sort Descending
EditRecord | Edit Record
DeleteRecord | Delete Record
Above | Above
Below | Below
AddRow | Add Row
FilterMenu | Filter
SelectAll | Select All
Blanks | Blanks
FilterTrue | True
FilterFalse | False
NoResult | No Matches Found
ClearFilter | Clear Filter
NumberFilter | Number Filters
TextFilter | Text Filters
DateFilter | Date Filters
MatchCase | Match Case
Between | Between
CustomFilter | Custom Filter
CustomFilterPlaceHolder | Enter the value
CustomFilterDatePlaceHolder | Choose a date
AND | AND
OR | OR
ShowRowsWhere | Show rows where:
currentPageInfo | {0} of {1} pages
totalItemsInfo | ({0} items)
firstPageTooltip | Go to first page
lastPageTooltip | Go to last page
nextPageTooltip | Go to next page
previousPageTooltip | Go to previous page
nextPagerTooltip | Go to next pager
previousPagerTooltip | Go to previous pager
pagerDropDown | Items per page
pagerAllDropDown | Items
All | All

### Loading translations

To load translation object in an application, use `load` function of the `L10n` class.

The following example demonstrates the TreeGrid in `Deutsch` culture.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/internationalization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/internationalization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/internationalization-cs1" %}

### Localization of dependent components in TreeGrid

When localizing TreeGrid, it's important to include dependent components like DatePicker, Form Validator, and Grid, as they have their own static text that requires localization. Follow these steps to localize these components:

1. **DatePicker**: Localize placeholders, "today" text, etc., using the [DatePicker localization keys](https://ej2.syncfusion.com/angular/documentation/datepicker/globalization)

    Example localization keys for the date picker:
    ```json
   "datepicker": {
            "placeholder": "Wählen Sie ein Datum",
            "today": "heute"
        }
    ```


2. **Form Validator**: Localize validation messages (e.g., required fields, email validation) using the [Form Validator localization keys](https://ej2.syncfusion.com/documentation/form-validator/localization).

    Example keys for form validation localization:
    ```json
    "formValidator":{
        "required": "This field is required",
        "email": "Please enter a valid email address",
        "minLength": "Please enter at least {0} characters"
    }
    ```
3. **Grid Keys**: For additional TreeGrid-related keys, use the [Grid localization keys](https://ej2.syncfusion.com/angular/documentation/grid/global-local#localization).

   Example keys for grid keys localization:
    ```json
    "grid" :{
        "True": "true",
        "False": "false",
        "Item": "item",
        "Items": "items",
        "OKButton": "OK",
    }
    ```



    Below is an example JSON snippet consolidating the localization keys for dependent components used in TreeGrid using  [`load`](https://ej2.syncfusion.com/documentation/api/base/l10n/#load) function of the [`L10n`](https://ej2.syncfusion.com/documentation/api/base/l10n/) class and update the `locale` property of treegrid with the culture name used in the `load` function:

    ```json

    L10n.load({

        'de-DE': {

        "datepicker": {
                "placeholder": "Wählen Sie ein Datum",
                "today": "heute"
            },

        "formValidator":{
            "required": "This field is required",
            "email": "Please enter a valid email address",
            "minLength": "Please enter at least {0} characters"
        },

        "grid" :{
            "True": "true",
            "False": "false",
            "Item": "item",
            "Items": "items",
            "OKButton": "OK",
        }
    }
    });
    ```

## Internationalization

The [`Internationalization`](../common/internationalization/) library is used to globalize number, date, and time values in treegrid component using format strings in the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#format).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/internationalization-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/internationalization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/internationalization-cs2" %}

> * In the above sample, `Price` column is formatted by `NumberFormatOptions`.
> * By default, [`locale`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#locale) value is `en-US`. If you want to change the `en-US` culture to a different culture, you have to change  the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#locale) accordingly.

## Right to left (RTL)

RTL provides an option to switch the text direction and layout of the TreeGrid component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL Grid, set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablertl) to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/internationalization-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/internationalization-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/internationalization-cs3" %}

## See Also

* [Internationalization](../common/internationalization)
* [Localization](../common/localization)

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
