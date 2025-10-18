---
layout: post
title: Globalization and Localization in Angular Gantt component | Syncfusion
description: Learn here all about Globalization and Localization in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Globalization and Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Globalization and Localization in Angular Gantt component

The Angular Gantt component supports globalization to adapt project management interfaces to diverse languages, cultures, and regional preferences without code changes. Globalization encompasses localization for translating text elements like column headers and dialog titles, internationalization for formatting dates, numbers, and times in timelines and task fields, and Right-to-Left (RTL) support for languages like Arabic and Hebrew. These features ensure that task names, toolbar actions, and timeline displays align with users’ linguistic and cultural expectations, enhancing accessibility and usability in project management workflows for global users.

## Key globalization features

Globalization encompasses several critical components:

- **Localization (L10N)**: Translating text content and adapting UI elements for specific cultures and languages
- **Internationalization (I18N)**: Formatting dates, numbers, currencies, and other culture-specific data according to regional conventions
- **Right-to-Left (RTL) Support**: Adapting layout and text direction for RTL languages like Arabic, Hebrew, and Urdu

Implement globalization when targeting multilingual users, complying with regional standards, or expanding to international markets.

## Localization implementation

The [Localization](../common/localization) library allows you to localize default text content of the Gantt component. Static text elements such as column headers, dialog titles, tooltips, toolbar items, and system messages can be translated to different languages by defining the [locale](https://ej2.syncfusion.com/angular/documentation/api/gantt/#locale) value and providing translation objects.

1. **Import required libraries**:
   ```typescript
   import { L10n, setCulture } from '@syncfusion/ej2-base';
   ```

2. **Define translation objects** for your target languages with complete locale coverage

3. **Load translations** using the `L10n.load()` method before component initialization

4. **Set the locale property** on the Gantt component to match your target culture

5. **Configure culture settings** using `setCulture()` for number and date formatting

### Localization keys

The following tables organize all available locale keys by functional category:

**Core Task Properties:**

| Locale Key | Default Text |
|------------|--------------|
| `id` | ID |
| `name` | Name |
| `startDate` | Start Date |
| `endDate` | End Date |
| `duration` | Duration |
| `progress` | Progress |
| `dependency` | Dependency |
| `notes` | Notes |
| `resourceName` | Resources |
| `resourceID` | Resource ID |

**Columns**

| Locale Key | Default Text |
|------------|--------------|
| `True` | true |
| `False` | false |
| `ColumnHeader` | column header |
| `TemplateCell` | is template cell |
| `ClipBoard` | clipboard |
| `CheckBoxLabel` | checkbox |

**Filtering:**

| Locale Key | Default Text |
|------------|--------------|
| `InvalidFilterMessage` | Invalid Filter Data |
| `FilterbarTitle` | \s filter bar cell |
| `Matchs` | No Matches Found |
| `FilterButton` | Filter |
| `ClearButton` | Clear |
| `StartsWith` | Starts With |
| `EndsWith` | Ends With |
| `Contains` | Contains |
| `Equal` | Equal |
| `NotEqual` | Not Equal |
| `LessThan` | Less Than |
| `LessThanOrEqual` | Less Than Or Equal |
| `GreaterThan` | Greater Than |
| `GreaterThanOrEqual` | Greater Than Or Equal |
| `ChooseDate` | Choose a Date |
| `SelectAll` | Select All |
| `FilterTrue` | True |
| `FilterFalse` | False |
| `NoResult` | No Matches Found |
| `ClearFilter` | Clear Filter |
| `NumberFilter` | Number Filters |
| `TextFilter` | Text Filters |
| `DateFilter` | Date Filters |
| `DateTimeFilter` | DateTime Filters |
| `MatchCase` | Match Case |
| `Between` | Between |
| `CustomFilter` | Custom Filter |
| `CustomFilterPlaceHolder` | Enter the value |
| `CustomFilterDatePlaceHolder` | Choose a date |
| `AND` | AND |
| `OR` | OR |
| `NotStartsWith` | Does Not Start With |
| `NotEndsWith` | Does Not End With |
| `NotContains` | Does Not Contain |
| `IsNull` | Null |
| `NotNull` | Not Null |
| `IsEmpty` | Empty |
| `IsNotEmpty` | Not Empty |
| `FilterDescription` | Press Alt Down to open filter Menu |

**ColumnMenu:**

| Locale Key | Default Text |
|------------|--------------|
| `FilterMenu` | Filter |
| `AutoFitAll` | Autofit all columns |
| `AutoFit` | Autofit this column |
| `ColumnMenuDialogARIA` | Column menu dialog |
| `ColumnMenuDescription` | Press Alt Down to open Column Menu |

**Baseline and Planning:**

| Locale Key | Default Text |
|------------|--------------|
| `baselineStartDate` | Baseline Start Date |
| `baselineEndDate` | Baseline End Date |
| `type` | Type |
| `offset` | Offset |
| `taskMode` | Task Mode |
| `auto` | Auto |
| `manual` | Manual |

**Time Units and Measurements:**

| Locale Key | Default Text |
|------------|--------------|
| `day` | day |
| `hour` | hour |
| `minute` | minute |
| `days` | days |
| `hours` | hours |
| `minutes` | minutes |
| `unit` | Unit |
| `work` | Work |

**Dialog and Form Elements:**

| Locale Key | Default Text |
|------------|--------------|
| `addDialogTitle` | New Task |
| `editDialogTitle` | Task Information |
| `taskInformation` | Task Information |
| `generalTab` | General |
| `customTab` | Custom Columns |
| `writeNotes` | Write Notes |

**Action Buttons and Operations:**

| Locale Key | Default Text |
|------------|--------------|
| `add` | Add |
| `edit` | Edit |
| `update` | Update |
| `delete` | Delete |
| `cancel` | Cancel |
| `save` | Save |
| `saveButton` | Save |
| `okText` | OK |
| `search` | Search |

**Toolbar and Navigation:**

| Locale Key | Default Text |
|------------|--------------|
| `zoomIn` | Zoom in |
| `zoomOut` | Zoom out |
| `zoomToFit` | Zoom to fit |
| `expandAll` | Expand all |
| `collapseAll` | Collapse all |
| `nextTimeSpan` | Next timespan |
| `prevTimeSpan` | Previous timespan |

**Context Menu Operations:**

| Locale Key | Default Text |
|------------|--------------|
| `deleteTask` | Delete Task |
| `deleteDependency` | Delete Dependency |
| `convert` | Convert |
| `above` | Above |
| `below` | Below |
| `child` | Child |
| `milestone` | Milestone |
| `toTask` | To Task |
| `toMilestone` | To Milestone |
| `autoFitAll` | Auto Fit all columns |
| `autoFit` | Auto Fit this column |
| `SortAscending` | Sort Ascending |
| `SortDescending` | Sort Descending |

**Export and Data Operations:**

| Locale Key | Default Text |
|------------|--------------|
| `excelExport` | Excel export |
| `csvExport` | CSV export |
| `pdfExport` | PDF export |

**System Messages and Feedback:**

| Locale Key | Default Text |
|------------|--------------|
| `emptyRecord` | No records to display |
| `confirmDelete` | Are you sure you want to Delete Record? |
| `confirmPredecessorDelete` | Are you sure you want to remove dependency link? |
| `enterValue` | Enter the value |

**Task Relationships and Dependencies:**

| Locale Key | Default Text |
|------------|--------------|
| `taskLink` | Task Link |
| `lag` | Lag |
| `start` | Start |
| `finish` | Finish |
| `from` | From |
| `to` | To |
| `FF` | FF |
| `FS` | FS |
| `SF` | SF |
| `SS` | SS |

**Specialized Features:**

| Locale Key | Default Text |
|------------|--------------|
| `eventMarkers` | Event markers |
| `leftTaskLabel` | Left task label |
| `rightTaskLabel` | Right task label |
| `timelineCell` | Timeline cell |
| `taskType` | Task Type |
| `unassignedTask` | Unassigned Task |
| `group` | Group |

**Task Count and Status:**

| Locale Key | Default Text |
|------------|--------------|
| `task` | task |
| `tasks` | tasks |

**Schedule Mode and Planning:**

| Locale Key | Default Text |
|------------|--------------|
| `changeScheduleMode` | Change Schedule Mode |
| `subTasksStartDate` | SubTasks Start Date |
| `subTasksEndDate` | SubTasks End Date |
| `scheduleStartDate` | Schedule Start Date |
| `scheduleEndDate` | Schedule End Date |

**Advanced dependency relationship messages:**

The Gantt component includes specialized messages for dependency conflicts:

| Locale Key | Purpose |
|------------|---------|
| `taskBeforePredecessor_FS` | Finish-to-Start conflict when task moves before predecessor finishes |
| `taskAfterPredecessor_FS` | Finish-to-Start conflict when task moves away from predecessor |
| `taskBeforePredecessor_SS` | Start-to-Start conflict when task starts before predecessor |
| `taskAfterPredecessor_SS` | Start-to-Start conflict when task starts after predecessor |
| `taskBeforePredecessor_FF` | Finish-to-Finish conflict when task finishes before predecessor |
| `taskAfterPredecessor_FF` | Finish-to-Finish conflict when task finishes after predecessor |
| `taskBeforePredecessor_SF` | Start-to-Finish conflict messages |
| `taskAfterPredecessor_SF` | Start-to-Finish conflict messages |

### Loading translations for de culture

The following example demonstrates comprehensive German (Deutsch) localization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/global/locale-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/global/locale-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/global/locale-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/global/locale-cs1" %}

## Internationalization (I18N)

The [Internationalization](../common/internationalization) library globalizes number, date, and time values in the Gantt component. This ensures that dates, numbers, and currencies display according to the user's cultural preferences and regional conventions.

Internationalization affects multiple aspects of the Gantt component:

- **Date formatting**: Timeline headers, task dates, date pickers, and calendar displays
- **Number formatting**: Duration values, progress percentages, and numeric inputs
- **Time formatting**: Time-based calculations, working hours, and time displays  
- **Currency formatting**: Cost-related fields and budget calculations
- **Calendar systems**: Support for different calendar systems (Gregorian, Islamic, etc.)
- **Week numbering**: ISO week numbers, fiscal year calendars

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/global/internationalization-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/global/internationalization-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/global/internationalization-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/global/internationalization-cs1" %}

> **Note**: In the above sample, timeline headers and numeric values are formatted using `NumberFormatOptions` and `DateFormatOptions`. The [locale](https://ej2.syncfusion.com/angular/documentation/api/gantt/#locale) property defaults to **en-US**. Change this property to your desired locale for proper cultural formatting.

## Right-to-Left (RTL) support

RTL support enables the Gantt component to adapt its text direction and layout for languages that read from right to left, such as Arabic (العربية), Hebrew (עברית), and Urdu (اردو). This provides an authentic user experience for RTL language users.

RTL layout affects multiple aspects of the user interface:

- **Reading direction**: Content flows from right to left
- **UI mirroring**: Interface elements mirror horizontally
- **Icon orientation**: Directional icons need appropriate orientation
- **Data presentation**: Maintains logical data relationships while adapting visual presentation

To enable RTL support, set the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablertl) property to **true**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/global/rtl-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/global/rtl-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/global/rtl-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/global/rtl-cs1" %}

The code sets `enableRtl` to **true** and `locale` to **ar**, mirroring the Gantt interface. Test RTL layouts with native speakers to ensure usability, especially for taskbar interactions and dialog navigation. Review custom CSS for RTL compatibility and verify directional icons (e.g., arrows) render correctly.

## Troubleshooting globalization issues

1. **Missing or incomplete translations:**
**Issue**: Some UI elements display in default language despite locale configuration
**Solutions**:
- Verify all locale keys are included in translation objects
- Check that `L10n.load()` is called before component initialization
- Ensure locale property matches loaded translation keys
- Validate translation object structure and syntax

2. **Encoding and character display issues:**
**Issue**: Special characters or non-Latin scripts don't display correctly
**Solutions**:
- Verify proper UTF-8 encoding in translation files
- Check font support for target languages
- Ensure HTML document declares correct charset
- Test with appropriate fonts for target scripts

3. **Date and number formatting problems:**
**Issue**: Dates or numbers don't format according to locale
**Solutions**:
- Load appropriate CLDR data for target cultures
- Call `setCulture()` before component initialization
- Verify date format patterns match locale expectations
- Check timezone and calendar system configuration
