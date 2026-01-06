---
layout: post
title: Global localization in Angular TreeGrid component | Syncfusion
description: Learn about global localization in the Syncfusion Angular TreeGrid component, including localization, internationalization, and RTL support.
platform: ej2-angular
control: Global local
documentation: ug
domainurl: ##DomainURL##
---

# Global localization in Angular TreeGrid component

## Localization

The [`Localization`](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization) library allows customization of the default text content in the TreeGrid. The TreeGrid includes static text in various features, such as the toolbar, filter menus, and pager. These can be localized for different cultures (e.g., Arabic, Deutsch, French) by providing the appropriate [`locale`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#locale) value and translation object.

The following locale keywords are used in the TreeGrid:

| Locale keyword  | Text                                  |
|-----------------|---------------------------------------|
| EmptyRecord     | No records to display                  |
| True            | true                                  |
| False           | false                                 |
| ExpandAll       | Expand All                            |
| CollapseAll     | Collapse All                          |
| RowIndent       | Indent                                |
| RowOutdent      | Outdent                               |
| InvalidFilterMessage | Invalid Filter Data               |
| FilterbarTitle  | \s filter bar cell                    |
| Add             | Add                                   |
| Edit            | Edit                                  |
| Cancel          | Cancel                                |
| Update          | Update                                |
| Delete          | Delete                                |
| Print           | Print                                 |
| Pdfexport       | PDF Export                            |
| Excelexport     | Excel Export                          |
| Wordexport      | Word Export                           |
| Csvexport       | CSV Export                            |
| Search          | Search                                |
| Save            | Save                                  |
| EditOperationAlert   | No records selected for edit operation    |
| DeleteOperationAlert | No records selected for delete operation  |
| SaveButton      | Save                                  |
| OKButton        | OK                                    |
| CancelButton    | Cancel                                |
| EditFormTitle   | Details of                            |
| AddFormTitle    | Add New Record                        |
| ConfirmDelete   | Are you sure you want to Delete Record?|
| SearchColumns   | search columns                        |
| Matchs          | No Matches Found                      |
| FilterButton    | Filter                                |
| ClearButton     | Clear                                 |
| StartsWith      | Starts With                           |
| EndsWith        | Ends With                             |
| Contains        | Contains                              |
| Equal           | Equal                                 |
| NotEqual        | Not Equal                             |
| LessThan        | Less Than                             |
| LessThanOrEqual | Less Than Or Equal                    |
| GreaterThan     | Greater Than                          |
| GreaterThanOrEqual | Greater Than Or Equal              |
| ChooseDate      | Choose a Date                         |
| EnterValue      | Enter the value                       |
| autoFitAll      | Auto Fit all columns                  |
| autoFit         | Auto Fit this column                  |
| Export          | Export                                |
| FirstPage       | First Page                            |
| LastPage        | Last Page                             |
| PreviousPage    | Previous Page                         |
| NextPage        | Next Page                             |
| SortAscending   | Sort Ascending                        |
| SortDescending  | Sort Descending                       |
| EditRecord      | Edit Record                           |
| DeleteRecord    | Delete Record                         |
| Above           | Above                                 |
| Below           | Below                                 |
| AddRow          | Add Row                               |
| FilterMenu      | Filter                                |
| SelectAll       | Select All                            |
| Blanks          | Blanks                                |
| FilterTrue      | True                                  |
| FilterFalse     | False                                 |
| NoResult        | No Matches Found                      |
| ClearFilter     | Clear Filter                          |
| NumberFilter    | Number Filters                        |
| TextFilter      | Text Filters                          |
| DateFilter      | Date Filters                          |
| MatchCase       | Match Case                            |
| Between         | Between                               |
| CustomFilter    | Custom Filter                         |
| CustomFilterPlaceHolder | Enter the value               |
| CustomFilterDatePlaceHolder | Choose a date             |
| AND             | AND                                   |
| OR              | OR                                    |
| ShowRowsWhere   | Show rows where:                      |
| currentPageInfo | {0} of {1} pages                      |
| totalItemsInfo  | ({0} items)                           |
| firstPageTooltip     | Go to first page                 |
| lastPageTooltip      | Go to last page                  |
| nextPageTooltip      | Go to next page                  |
| previousPageTooltip  | Go to previous page              |
| nextPagerTooltip     | Go to next pager                 |
| previousPagerTooltip | Go to previous pager             |
| pagerDropDown        | Items per page                   |
| pagerAllDropDown     | Items                            |
| All                  | All                              |

### Loading translations

To load a translation object in an application, use the `load` function of the `L10n` class.

The following example demonstrates the TreeGrid localized to `Deutsch` culture.

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

When localizing the TreeGrid, include dependent components such as DatePicker, Form Validator, and Grid, as these also contain static text that requires translation. To localize these components:

1. **DatePicker**: Localize placeholders and button text using [DatePicker localization keys](https://ej2.syncfusion.com/angular/documentation/datepicker/globalization).

    Example keys for date picker localization:
    ```json
    "datepicker": {
        "placeholder": "Wählen Sie ein Datum",
        "today": "heute"
    }
    ```

2. **Form Validator**: Localize validation messages using [Form Validator localization keys](https://ej2.syncfusion.com/documentation/form-validator/localization).

    Example keys for form validation localization:
    ```json
    "formValidator":{
        "required": "This field is required",
        "email": "Please enter a valid email address",
        "minLength": "Please enter at least {0} characters"
    }
    ```

3. **Grid**: For TreeGrid-related keywords, use [Grid localization keys](https://ej2.syncfusion.com/angular/documentation/grid/global-local#localization).

    Example keys for grid localization:
    ```json
    "grid" :{
        "True": "true",
        "False": "false",
        "Item": "item",
        "Items": "items",
        "OKButton": "OK"
    }
    ```

Below is an example showing how to load localization keys for TreeGrid and its dependencies using the [`load`](https://ej2.syncfusion.com/documentation/api/base/l10n#load) function of the [`L10n`](https://ej2.syncfusion.com/documentation/api/base/l10n) class, and updating the `locale` property of TreeGrid with the culture name:

```typescript
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
        "grid": {
            "True": "true",
            "False": "false",
            "Item": "item",
            "Items": "items",
            "OKButton": "OK"
        }
    }
});
```

## Internationalization

The [`Internationalization`](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization) library is used to globalize numbers, dates, and time values in the TreeGrid using format strings in [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column#format).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/internationalization-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/internationalization-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/internationalization-cs2" %}

> In the above sample, the `Price` column is formatted using `NumberFormatOptions`.
> By default, the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#locale) value is `en-US`. To use another culture, update the `locale` property accordingly.

## Right to left (RTL)

RTL support allows the TreeGrid's text direction and layout to switch from left to right. This improves accessibility and the user experience for right-to-left languages (such as Arabic, Farsi, and Urdu). To enable RTL in TreeGrid, set the [`enableRtl`](https://ej2.syncfusion.com/angular/documentation/api/treegrid#enablertl) property to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/internationalization-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/internationalization-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/internationalization-cs3" %}

## See also

* [Internationalization](https://ej2.syncfusion.com/angular/documentation/common/globalization/internationalization)
* [Localization](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization)

> To discover more features, see the [Angular TreeGrid feature tour](https://www.syncfusion.com/angular-components/angular-tree-grid). Explore the [Angular TreeGrid example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/treegrid/treegrid-overview) for usage and data manipulation.
