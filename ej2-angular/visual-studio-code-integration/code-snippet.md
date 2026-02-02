---
layout: post
title: Code snippet in Angular Visual Studio Code integration | Syncfusion
description: Learn here all about Code snippet in Syncfusion Angular Visual studio code integration component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Code snippet 
documentation: ug
domainurl: ##DomainURL##
---

# Add Syncfusion® Angular component using code snippets

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular code snippet utility for Visual Studio Code provides snippets for adding a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with various features in the HTML code editor file of the Angular Application.

   > The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular code snippet is available from Essential Studio<sup style="font-size:70%">&reg;</sup> 2021 Vol 3 (`v19.3.0.43`).

## Add a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component

Follow these steps to use the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular code snippet utility in your Angular application:

1. Open Visual Studio Code and load an existing Angular application or create a new one.

2. Open the HTML file that you need and place the cursor in required place where you want to add Syncfusion<sup style="font-size:70%">&reg;</sup> component.

3. You can find the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component with the various features by typing the **ejs** word in the format shown below.

    ```bash
    ejs-<Syncfusion component name>-<Syncfusion component feature>

    For example: ejs-grid-grouping
    ```

4. Select the Syncfusion<sup style="font-size:70%">&reg;</sup> component from the suggestion list and press **Enter** or **Tab**. The component code will be inserted into the HTML file.

    ![Code Snippet](images/codesnippet.gif)

5. After the code snippet is added, use the **Tab** key to navigate through editable fields and provide the required values to render the component with data. A Syncfusion<sup style="font-size:70%">&reg;</sup> help link is included at the top of the snippet for more details about the component features.

    ![Help](images/Help.png)

## Configure the Angular application with Syncfusion

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular snippet only add the code snippet alone in the html file. You need to configure the Angular application with Syncfusion<sup style="font-size:70%">&reg;</sup> by adding the required Syncfusion<sup style="font-size:70%">&reg;</sup> Angular NPM, component modules, and themes by manually. To configure, refer the steps below:

1. Open the Angular **package.json** file and manually add the necessary Syncfusion<sup style="font-size:70%">&reg;</sup> Angular npm package(s). Then, navigate to the project directory in the command prompt and run `npm install` to restore the Syncfusion<sup style="font-size:70%">&reg;</sup> packages.
run:

    ```bash
    npm install
    ```

    to install the Syncfusion® packages.
    ![NPM Package](images/NPM.png)

2. Update your Angular module file by importing and adding the relevant Syncfusion<sup style="font-size:70%">&reg;</sup> Angular component modules to your application module.

    ![Module](images/Module.png)

3. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular [theme](https://ej2.syncfusion.com/documentation/appearance/theme) entry in the **style.css** file.

![Themes](images/Themes-Snippet.png)

## Available code snippets

### Accordion

| Snippet | Action |
|---|---|
| `ejs-accordion` | Insert the snippet for Accordion - a vertically collapsible content panel that displays one or more panels at a time within the available space. |
| `ejs-accordion-expandmode` | Insert the snippet for Accordion with ExpandMode - supports Single and Multiple expand modes while expanding or collapsing the item. |

### AccumulationChart

| Snippet | Action |
|---|---|
| `ejs-accumulation-chart` | Insert the snippet for Accumulation Chart - supports four types like Pie, Doughnut, Pyramid and Funnel. |
| `ejs-accumulation-chart-type-doughnut` | Insert the snippet for Accumulation Chart with Doughnut type by providing inner radius to the pie series. |
| `ejs-accumulation-chart-type-pyramid` | Insert the snippet for Accumulation Chart with Pyramid type to represent hierarchies in a pyramid-like structure. |
| `ejs-accumulation-chart-type-funnel` | Insert the snippet for Accumulation Chart with Funnel type to show various stages in a process. |
| `ejs-accumulation-chart-data-label` | Insert the snippet for Accumulation Chart with Data Label to provide information about the data points. |
| `ejs-accumulation-chart-legend` | Insert the snippet for Accumulation Chart with Legend to provide information and toggle visibility of data points. |
| `ejs-accumulation-chart-tooltip` | Insert the snippet for Accumulation Chart with Tooltip to display details when mouse is moved over the point. |

### AIAssistView

| Snippet | Action |
|---|---|
| `ejs-aiassistview` | Insert the snippet for AIAssistView - integrates advanced AI-driven assistance features for user interaction with suggestions. |

### AutoComplete

| Snippet | Action |
|---|---|
| `ejs-autocomplete` | Insert the snippet for AutoComplete - a textbox component that provides a list of suggestions as the user types with data binding, filtering, and grouping features. |
| `ejs-autocomplete-grouping` | Insert the snippet for AutoComplete with Grouping - groups suggestions based on logically grouped categories with individual headers. |

### BarcodeGenerator

| Snippet | Action |
|---|---|
| `ejs-barcode-generator` | Insert the snippet for Barcode Generator - generates bar code based on the given string. |
| `ejs-barcode-generator-qr` | Insert the snippet for QR Code Generator - a two-dimensional barcode consisting of a grid of dark and light dots forming a square. |
| `ejs-barcode-generator-data-matrix` | Insert the snippet for Data Matrix Generator - a two-dimensional barcode forming square or rectangular symbol for printed media. |

### BlockEditor

| Snippet | Action |
|---|---|
| `ejs-blockeditor` | Insert the snippet for Block Editor - a dynamic content editing interface for creating rich text content using a block-based approach. |

### Breadcrumb

| Snippet | Action |
|---|---|
| `ejs-breadcrumb` | Insert the snippet for Breadcrumb - a graphical user interface that identifies the current location within a hierarchical structure of websites. |

### BulletChart

| Snippet | Action |
|---|---|
| `ejs-bullet-chart` | Insert the snippet for Bullet Chart - displays one or more measures and compares them with a target value in performance ranges. |
| `ejs-bullet-chart-range` | Insert the snippet for Bullet Chart with Range - measures performance against qualitative states with color-coded ranges. |
| `ejs-bullet-chart-tooltip` | Insert the snippet for Bullet Chart with Tooltip - displays details about measures on hover. |

### Button

| Snippet | Action |
|---|---|
| `ejs-button` | Insert the snippet for Button - a graphical user interface element that triggers an event on click action. |
| `ejs-button-icons` | Insert the snippet for Button with Icons - provides visual representation with icon support. |
| `ejs-button-primary` | Insert the snippet for Primary Button - denotes the button as a primary action button. |

### Calendar

| Snippet | Action |
|---|---|
| `ejs-calendar` | Insert the snippet for Calendar - displays dates and days with month, year, and decade views for date navigation. |
| `ejs-calendar-month-picker` | Insert the snippet for Calendar Month Picker - allows selection of only month or year as a value. |
| `ejs-calendar-range` | Insert the snippet for Calendar with Range - restricts date selection within specified minimum and maximum dates. |
| `ejs-calendar-multi-selection` | Insert the snippet for Calendar with Multi Selection - allows users to select single or multiple date values. |
| `ejs-calendar-week-number` | Insert the snippet for Calendar with Week Number - displays the week number of selected date. |

### Chart3D

| Snippet | Action |
|---|---|
| `ejs-chart3d` | Insert the snippet for 3D Chart - a graphical representation of data in three dimensions to showcase relationships and trends among variables with depth visualization. |

### Charts

| Snippet | Action |
|---|---|
| `ejs-chart` | Insert the snippet for Chart - supports 30+ chart types from line to financial chart for data visualization. |
| `ejs-chart-marker` | Insert the snippet for Chart with Marker - represents each data point as a symbol with different shapes like Rectangle, Circle, Diamond. |
| `ejs-chart-data-label` | Insert the snippet for Chart with Data Label - provides information about the data points in the series. |
| `ejs-chart-tooltip` | Insert the snippet for Chart with Tooltip - displays details about points when mouse is moved over them. |
| `ejs-chart-legend` | Insert the snippet for Chart with Legend - provides information about each series with visibility toggle. |
| `ejs-chart-datetime-axis` | Insert the snippet for Chart with DateTime Axis - displays date-time values as axis labels in specified format. |
| `ejs-chart-selection` | Insert the snippet for Chart with Selection - allows users to select particular data point or cluster of points. |
| `ejs-chart-crosshair` | Insert the snippet for Chart with Crosshair - allows users to inspect data points on mouse move. |
| `ejs-chart-zooming` | Insert the snippet for Chart with Zooming - visualizes data points in any region by zooming in. |

### ChatUI

| Snippet | Action |
|---|---|
| `ejs-chatui` | Insert the snippet for Chat UI - provides a modern layout for displaying conversations with message display, input fields, user presence and typing indicators. |

### CheckBox

| Snippet | Action |
|---|---|
| `ejs-checkbox` | Insert the snippet for CheckBox - allows selection of one or more options with checked, unchecked, and indeterminate states. |

### Chips

| Snippet | Action |
|---|---|
| `ejs-chips` | Insert the snippet for Chips - provides small blocks of text information with support for avatars, images, letters, and close icons. |
| `ejs-chips-selection` | Insert the snippet for Chips with Selection - allows selection of multiple chips from the set. |
| `ejs-chips-delete` | Insert the snippet for Chips with Delete - allows deletion of chips using the enableDelete property. |

### CircularChart3D

| Snippet | Action |
|---|---|
| `ejs-circular-chart3d` | Insert the snippet for 3D Circular Chart - a visual representation of data as slices of a three-dimensional circle with proportional sizing. |

### CircularGauge

| Snippet | Action |
|---|---|
| `ejs-circular-gauge` | Insert the snippet for Circular Gauge - visualizes numeric values on a circular scale with features like multiple axes and rounded corners. |
| `ejs-circular-gauge-axis` | Insert the snippet for Circular Gauge with Axis - displays gauge with customizable axes including lines, ticks, labels, ranges, pointers, and annotations. |
| `ejs-circular-gauge-ranges` | Insert the snippet for Circular Gauge with Ranges - groups axis values using multiple ranges. |
| `ejs-circular-gauge-pointers` | Insert the snippet for Circular Gauge with Pointers - indicates values on axis with Needle, Range bar, or Marker pointer types. |
| `ejs-circular-gauge-annotations` | Insert the snippet for Circular Gauge with Annotations - marks specific areas with text, HTML elements, or images. |
| `ejs-circular-gauge-legend` | Insert the snippet for Circular Gauge with Legend - provides additional information about ranges with dockable positioning. |
| `ejs-circular-gauge-tooltip` | Insert the snippet for Circular Gauge with Tooltip - displays pointer, annotation, and range details on hover. |

### ColorPicker

| Snippet | Action |
|---|---|
| `ejs-color-picker` | Insert the snippet for Color Picker - select and adjust color values with support for RGB, HSV, and Hex codes. |
| `ejs-color-picker-inline` | Insert the snippet for Color Picker Inline - renders container alone for direct access. |
| `ejs-color-picker-mode` | Insert the snippet for Color Picker with Mode - specifies rendering mode as palette or picker. |
| `ejs-color-picker-nocolor` | Insert the snippet for Color Picker with NoColor - shows empty value when no color is selected. |

### ComboBox

| Snippet | Action |
|---|---|
| `ejs-combobox` | Insert the snippet for ComboBox - a drop-down list with editable option featuring data binding, filtering, grouping, and cascading. |
| `ejs-combobox-grouping` | Insert the snippet for ComboBox with Grouping - groups pop-up list items with corresponding categories for easy selection. |
| `ejs-combobox-filtering` | Insert the snippet for ComboBox with Filtering - provides built-in filtering support with rich configurations. |
| `ejs-combobox-autofill` | Insert the snippet for ComboBox with Autofill - automatically fills matching options while user types. |

### ContextMenu

| Snippet | Action |
|---|---|
| `ejs-context-menu` | Insert the snippet for Context Menu - a graphical user interface that appears on right click/touch hold operation. |
| `ejs-context-menu-showitemonclick` | Insert the snippet for Context Menu with ShowItemOnClick - opens sub menu only on click. |

### DashboardLayout

| Snippet | Action |
|---|---|
| `ejs-dashboard-layout` | Insert the snippet for Dashboard Layout - a grid structured component split into equal size cells with auto-calculated width. |
| `ejs-dashboard-layout-resize` | Insert the snippet for Dashboard Layout with Resizing - allows dynamic panel resizing through UI interactions. |
| `ejs-dashboard-layout-floating` | Insert the snippet for Dashboard Layout with Floating - panels float upwards automatically to occupy empty cells. |
| `ejs-dashboard-layout-draganddrop` | Insert the snippet for Dashboard Layout with Drag and Drop - allows dragging and reordering panels within layout. |

### DataGrid

| Snippet | Action |
|---|---|
| `ejs-grid` | Insert the snippet for DataGrid - displays and manipulates tabular data with editing, filtering, sorting, and export features. |
| `ejs-grid-editing` | Insert the snippet for DataGrid with Editing - allows dynamic insert, delete, and update of records. |
| `ejs-grid-grouping` | Insert the snippet for DataGrid with Grouping - organizes records into hierarchical structure by dragging columns. |
| `ejs-grid-filtering` | Insert the snippet for DataGrid with Filtering - filters data across all columns. |
| `ejs-grid-sorting` | Insert the snippet for DataGrid with Sorting - sorts columns in ascending or descending order. |
| `ejs-grid-paging` | Insert the snippet for DataGrid with Paging - displays data in page segments. |
| `ejs-grid-searching` | Insert the snippet for DataGrid with Searching - integrates search text box in toolbar. |
| `ejs-grid-clipboard` | Insert the snippet for DataGrid with Clipboard - copies selected rows or cells data to clipboard. |
| `ejs-grid-context-menu` | Insert the snippet for DataGrid with Context Menu - shows context menu on right click with default or custom items. |
| `ejs-grid-frozen` | Insert the snippet for DataGrid with Frozen - makes rows and columns always visible while scrolling. |
| `ejs-grid-reordering` | Insert the snippet for DataGrid with Reordering - reorders columns by drag and drop. |
| `ejs-grid-resizing` | Insert the snippet for DataGrid with Resizing - resizes column width by dragging at column header edge. |
| `ejs-grid-column-chooser` | Insert the snippet for DataGrid with Column Chooser - shows or hides columns dynamically. |
| `ejs-grid-column-menu` | Insert the snippet for DataGrid with Column Menu - integrates sorting, grouping, filtering, and autofit features. |
| `ejs-grid-draganddrop` | Insert the snippet for DataGrid with Drag and Drop - drags and drops grid rows using drag icon. |
| `ejs-grid-virtual-scrolling` | Insert the snippet for DataGrid with Virtual Scrolling - loads large amounts of data by rendering only visible viewport. |
| `ejs-grid-infinite-scrolling` | Insert the snippet for DataGrid with Infinite Scrolling - loads data when scrollbar reaches end using lazy loading. |
| `ejs-grid-hierarchical-binding` | Insert the snippet for DataGrid with Hierarchical Binding - displays data in hierarchical structure with parent-child relations. |
| `ejs-grid-aggregation` | Insert the snippet for DataGrid with Aggregation - displays aggregate values in footer, group footer, and group caption. |

### DatePicker

| Snippet | Action |
|---|---|
| `ejs-datepicker` | Insert the snippet for DatePicker - a lightweight component to enter or select date with month, year, and decade views. |
| `ejs-datepicker-month-picker` | Insert the snippet for DatePicker Month Picker - selects only month or year as value from pop-up calendar. |
| `ejs-datepicker-range` | Insert the snippet for DatePicker with Range - restricts date selection within specified minimum and maximum dates. |
| `ejs-datepicker-format` | Insert the snippet for DatePicker with Format - changes default date format in text box for better readability. |

### DateRangePicker

| Snippet | Action |
|---|---|
| `ejs-daterangepicker` | Insert the snippet for DateRangePicker - allows selection of start and end date values as a range from calendar pop-up. |
| `ejs-daterangepicker-first-day-of-week` | Insert the snippet for DateRangePicker with First Day of Week - changes the first day of week in every month. |
| `ejs-daterangepicker-daterange` | Insert the snippet for DateRangePicker with Date Range - restricts value selection within specific date range using min and max properties. |
| `ejs-daterangepicker-dayspan` | Insert the snippet for DateRangePicker with Day Span - limits selection to specific minimum and maximum number of days. |
| `ejs-daterangepicker-presets` | Insert the snippet for DateRangePicker with Presets - defines preset ranges like last 30 days or last week for quick selection. |

### DateTimePicker

| Snippet | Action |
|---|---|
| `ejs-datetime-picker` | Insert the snippet for DateTime Picker - allows entry or selection of date and time values from pop-up calendar and time list. |
| `ejs-datetime-picker-datetime-range` | Insert the snippet for DateTime Picker with DateTime Range - restricts date and time selection within specified minimum and maximum values. |

### Diagram

| Snippet | Action |
|---|---|
| `ejs-diagram` | Insert the snippet for Diagram - visualizes data, ideas, and business structure using nodes and connectors to represent relationships. |
| `ejs-diagram-node` | Insert the snippet for Diagram with Node - adds graphical objects to represent geometrical information, process flow, or business procedures. |
| `ejs-diagram-connector` | Insert the snippet for Diagram with Connector - creates links between two points, nodes, or ports to represent relationships. |
| `ejs-diagram-layout` | Insert the snippet for Diagram with Layout - auto-arranges nodes with hierarchical, organizational, mind map, radial, or symmetric layouts. |
| `ejs-diagram-symbol-palette` | Insert the snippet for Diagram with Symbol Palette - displays collection of nodes and connectors for drag and drop into diagram. |
| `ejs-diagram-overview` | Insert the snippet for Diagram with Overview - shows preview of entire diagram for easy navigation, pan, or zoom. |

### Dialog

| Snippet | Action |
|---|---|
| `ejs-dialog` | Insert the snippet for Dialog - displays information and gets input from user. |
| `ejs-dialog-modal` | Insert the snippet for Dialog with Modal - creates modal dialog that restricts interaction with background content. |
| `ejs-dialog-drag` | Insert the snippet for Dialog with Drag - allows repositioning dialog by dragging in page or particular target. |
| `ejs-dialog-resize` | Insert the snippet for Dialog with Resize - allows dynamic adjustment of dialog width and height. |
| `ejs-dialog-position` | Insert the snippet for Dialog with Position - positions dialog with custom or built-in values based on page or target. |

### DropDownList

| Snippet | Action |
|---|---|
| `ejs-dropdown-list` | Insert the snippet for DropDown List - a replacement of HTML select tags allowing single value selection from predefined list with data binding and filtering. |
| `ejs-dropdown-list-grouping` | Insert the snippet for DropDown List with Grouping - groups pop-up list items with corresponding categories for easy selection. |
| `ejs-dropdown-list-filtering` | Insert the snippet for DropDown List with Filtering - enables search input box in drop-down pop-up list for filtering. |

### DropDownMenu

| Snippet | Action |
|---|---|
| `ejs-dropdown-menu` | Insert the snippet for DropDown Menu - toggles contextual overlays for displaying list of action items with text and images. |
| `ejs-dropdown-menu-icons` | Insert the snippet for DropDown Menu with Icons - provides visual representation with icon support. |

### DropDownTree

| Snippet | Action |
|---|---|
| `ejs-dropdown-tree` | Insert the snippet for DropDown Tree - a textbox component for selecting single or multiple values from hierarchical tree-like data. |
| `ejs-dropdown-tree-checkbox` | Insert the snippet for DropDown Tree with Checkbox - enables multi-item selection with dependent parent-child checkboxes and Select All option. |
| `ejs-dropdown-tree-filtering` | Insert the snippet for DropDown Tree with Filtering - filters data source when characters are typed in search box. |
| `ejs-dropdown-tree-multiple-selection` | Insert the snippet for DropDown Tree with Multiple Selection - allows selection of more than one item in pop-up. |

### FileManager

| Snippet | Action |
|---|---|
| `ejs-file-manager` | Insert the snippet for File Manager - a graphical user interface component for managing file system with common file operations and folder navigation. |
| `ejs-file-manager-draganddrop` | Insert the snippet for File Manager with Drag and Drop - allows moving files and folders by dragging and dropping. |
| `ejs-file-manager-view` | Insert the snippet for File Manager with View - displays files and folders in large icons view or details view. |

### FileUpload

| Snippet | Action |
|---|---|
| `ejs-file-upload` | Insert the snippet for File Upload - uploads one or multiple files with features like multiple selection, progress bars, auto-uploading, and drag and drop. |
| `ejs-file-upload-chunk` | Insert the snippet for File Upload with Chunk - manages large file uploads efficiently by slicing into small chunks for sequential upload. |

### FloatingActionButton

| Snippet | Action |
|---|---|
| `ejs-fab` | Insert the snippet for Floating Action Button - performs primary action and can be positioned relative to page or target container. |

### Gantt Chart

| Snippet | Action |
|---|---|
| `ejs-gantt-chart` | Insert the snippet for Gantt Chart - displays and manages tasks with timeline details. |
| `ejs-gantt-chart-data-binding` | Insert the snippet for Gantt Chart with Data Binding - supports local and remote data binding (hierarchical or self-referential). |
| `ejs-gantt-chart-task-scheduling` | Insert the snippet for Gantt Chart Task Scheduling - schedule tasks in auto or manual mode. |
| `ejs-gantt-chart-virtual-scrolling` | Insert the snippet for Gantt Chart Virtual Scrolling - load large data efficiently without performance degradation. |
| `ejs-gantt-chart-virtual-resource-view` | Insert the snippet for Gantt Chart Resource View - visualize tasks assigned to each resource hierarchically. |
| `ejs-gantt-chart-sorting` | Insert the snippet for Gantt Chart Sorting - sort columns in ascending or descending order. |
| `ejs-gantt-chart-columns` | Insert the snippet for Gantt Chart Columns - define columns with support for sorting, filtering, and searching. |
| `ejs-gantt-chart-filtering` | Insert the snippet for Gantt Chart Filtering - filter data using menu filtering and toolbar search. |
| `ejs-gantt-chart-selection` | Insert the snippet for Gantt Chart Selection - select single or multiple cells/rows. |
| `ejs-gantt-chart-baseline` | Insert the snippet for Gantt Chart Baseline - view deviation between planned and actual task dates. |
| `ejs-gantt-chart-holidays` | Insert the snippet for Gantt Chart Holidays - display non-working days in a project. |
| `ejs-gantt-chart-resource-allocation` | Insert the snippet for Gantt Chart Resource Allocation - allocate resources like staff, equipment, or materials to tasks. |
| `ejs-gantt-chart-event-markers` | Insert the snippet for Gantt Chart Event Markers - highlight important events in a project. |
| `ejs-gantt-chart-editing` | Insert the snippet for Gantt Chart Editing - add, update, and delete tasks with toolbar options. |
| `ejs-gantt-chart-drag-and-drop` | Insert the snippet for Gantt Chart Drag and Drop - re-arrange rows dynamically using drag and drop. |
| `ejs-gantt-chart-context-menu` | Insert the snippet for Gantt Chart Context Menu - perform quick actions via right-click context menu with built-in and custom items. |
| `ejs-gantt-chart-timeline` | Insert the snippet for Gantt Chart Timeline - supports timeline views such as year, month, week, day, and hour. |
| `ejs-gantt-chart-unscheduled-tasks` | Insert the snippet for Gantt Chart Unscheduled Tasks - manage tasks without initial dates or duration, scheduling them later as needed. |

### Heatmap Chart

| Snippet | Action |
|---|---|
| `ejs-heatmap-chart` | Insert the snippet for Heatmap Chart - graphical representation of two-dimensional data with gradient or solid color variations. |
| `ejs-heatmap-chart-opposed-position` | Insert the snippet for Heatmap Chart Opposed Position - place axis labels in the opposite position of their default. |
| `ejs-heatmap-chart-inversed` | Insert the snippet for Heatmap Chart Inversed - invert the axis origin so labels are placed in reversed order. |
| `ejs-heatmap-chart-axis-type` | Insert the snippet for Heatmap Chart Axis Type - define the data type of axis labels (e.g., numeric). |
| `ejs-heatmap-chart-legend` | Insert the snippet for Heatmap Chart Legend - display and customize legend information for heatmap cells. |
| `ejs-heatmap-chart-palette` | Insert the snippet for Heatmap Chart Palette - define color ranges and gradient types for heatmap cells. |

### Image Editor

| Snippet | Action |
|---|---|
| `ejs-imageeditor` | Insert the snippet for Image Editor - load and modify images with cropping, rotating, resizing, filters, text, shapes, and freehand drawing. |

### In-place Editor

| Snippet | Action |
|---|---|
| `ejs-in-place-editor-type-textbox` | Insert the snippet for In-place Editor TextBox - edit values inline using a TextBox. |
| `ejs-in-place-editor-type-masked-textbox` | Insert the snippet for In-place Editor Masked TextBox - edit values inline with input masking. |
| `ejs-in-place-editor-type-numeric-textbox` | Insert the snippet for In-place Editor Numeric TextBox - edit numeric values inline with formatting. |
| `ejs-in-place-editor-type-dropdown-list` | Insert the snippet for In-place Editor Dropdown List - edit values inline using a dropdown list. |
| `ejs-in-place-editor-type-multiselect` | Insert the snippet for In-place Editor MultiSelect - edit values inline with multiple selection options. |
| `ejs-in-place-editor-type-combobox` | Insert the snippet for In-place Editor ComboBox - edit values inline with a combo box. |
| `ejs-in-place-editor-type-autocomplete` | Insert the snippet for In-place Editor AutoComplete - edit values inline with autocomplete suggestions. |
| `ejs-in-place-editor-type-timepicker` | Insert the snippet for In-place Editor TimePicker - edit values inline using a time picker. |
| `ejs-in-place-editor-type-datepicker` | Insert the snippet for In-place Editor DatePicker - edit values inline using a date picker. |
| `ejs-in-place-editor-type-datetime-picker` | Insert the snippet for In-place Editor DateTime Picker - edit values inline using a date-time picker. |
| `ejs-in-place-editor-type-daterangepicker` | Insert the snippet for In-place Editor DateRangePicker - edit values inline using a date range picker. |
| `ejs-in-place-editor-type-slider` | Insert the snippet for In-place Editor Slider - edit values inline using a slider control. |
| `ejs-in-place-editor-type-color-picker` | Insert the snippet for In-place Editor Color Picker - edit values inline using a color picker. |
| `ejs-in-place-editor-type-rich-text-editor` | Insert the snippet for In-place Editor Rich Text Editor - edit values inline using a rich text editor. |
| `ejs-in-place-editor-popup` | Insert the snippet for In-place Editor Popup - edit values using a popup editor mode. |

### Kanban

| Snippet | Action |
|---|---|
| `ejs-kanban` | Insert the snippet for Kanban - visually depicts work at various stages of a process using columns, cards, and swimlanes. |
| `ejs-kanban-swimlane` | Insert the snippet for Kanban Swimlane - group cards horizontally to bring transparency to workflow processes. |
| `ejs-kanban-toggle-column` | Insert the snippet for Kanban Toggle Column - enable toggling of columns to show or hide them. |
| `ejs-kanban-validation` | Insert the snippet for Kanban Validation - apply validation rules such as minimum and maximum card counts per column. |
| `ejs-kanban-stacked-header` | Insert the snippet for Kanban Stacked Header - display multiple headers aligned in a stacked manner above columns. |

### Linear Gauge

| Snippet | Action |
|---|---|
| `ejs-linear-gauge` | Insert the snippet for Linear Gauge - visualize numeric values in a linear scale with multiple axes and orientations. |
| `ejs-linear-gauge-ranges` | Insert the snippet for Linear Gauge Ranges - group axis values into ranges with customizable colors and widths. |
| `ejs-linear-gauge-axis` | Insert the snippet for Linear Gauge Axis - define axes with labels, ticks, ranges, and pointers. |
| `ejs-linear-gauge-pointers` | Insert the snippet for Linear Gauge Pointers - indicate values on an axis using marker or bar pointers. |
| `ejs-linear-gauge-annotations` | Insert the snippet for Linear Gauge Annotations - mark specific areas with text, HTML, or images. |
| `ejs-linear-gauge-tooltip` | Insert the snippet for Linear Gauge Tooltip - display pointer details through tooltips on hover. |
| `ejs-linear-gauge-container` | Insert the snippet for Linear Gauge Container - customize the container shape (rectangle, rounded rectangle, thermometer). |

### ListBox

| Snippet | Action |
|---|---|
| `ejs-listbox` | Insert the snippet for ListBox - display a list of items with support for selection, sorting, grouping, reordering, and drag-and-drop. |
| `ejs-listbox-dual` | Insert the snippet for ListBox Dual - move items between two list boxes using toolbar buttons. |
| `ejs-listbox-draganddrop` | Insert the snippet for ListBox Drag and Drop - drag and drop items within the same list box or between list boxes. |
| `ejs-listbox-checkbox-selection` | Insert the snippet for ListBox Checkbox Selection - select multiple items using checkboxes with optional "Select All". |
| `ejs-listbox-template` | Insert the snippet for ListBox Template - customize list items using templates for tailored display. |

### ListView

| Snippet | Action |
|---|---|
| `ejs-listview` | Insert the snippet for ListView - load data from local or remote sources using array or DataManager. |
| `ejs-listview-checkbox` | Insert the snippet for ListView CheckBox - enable multiple item selection using checkboxes. |
| `ejs-listview-virtualization` | Insert the snippet for ListView Virtualization - improve performance by loading only viewable items in the viewport. |

### Maps

| Snippet | Action |
|---|---|
| `ejs-maps` | Insert the snippet for Maps - render maps from GeoJSON or providers with features like markers, labels, bubbles, legends, tooltips, zooming, and drill down. |
| `ejs-maps-selection` | Insert the snippet for Maps Selection - enable selection and highlighting of shapes, bubbles, and markers. |
| `ejs-maps-legend` | Insert the snippet for Maps Legend - display legends to interpret map data with customizable positions. |
| `ejs-maps-zooming` | Insert the snippet for Maps Zooming - zoom and pan maps with toolbar options and gestures. |
| `ejs-maps-data-label` | Insert the snippet for Maps Data Label - display shape names with labels, supporting trimming and overlap handling. |
| `ejs-maps-color-mapping` | Insert the snippet for Maps Color Mapping - categorize shapes by customizing colors using range, equal, or desaturation mapping. |
| `ejs-maps-bubble` | Insert the snippet for Maps Bubble - visualize data with bubbles of varying sizes and colors based on values. |
| `ejs-maps-marker` | Insert the snippet for Maps Marker - denote places with symbols or pins at specific latitude and longitude. |
| `ejs-maps-marker-template` | Insert the snippet for Maps Marker Template - use custom HTML elements as markers in the map. |
| `ejs-maps-marker-clustering` | Insert the snippet for Maps Marker Clustering - cluster overlapping markers and display counts. |
| `ejs-maps-navigation-line` | Insert the snippet for Maps Navigation Line - show flight or ship routes with connector lines, straight or curved. |
| `ejs-maps-tooltip` | Insert the snippet for Maps Tooltip - display details about shapes, markers, or bubbles on hover. |
| `ejs-maps-osm` | Insert the snippet for Maps OSM - render maps using OpenStreetMap for collaborative geographic data. |

### Input Mask

| Snippet | Action |
|---|---|
| `ejs-input-mask` | Insert the snippet for Input Mask - collect user input in standard formats like phone numbers, dates, or credit cards. |
| `ejs-input-mask-custom-mask` | Insert the snippet for Input Mask Custom Mask - define custom mask elements with rules for specialized input formats. |

### Mention

| Snippet | Action |
|---|---|
| `ejs-mention` | Insert the snippet for Mention - autocomplete-like control to populate mentions or hashtag, used for tagging users or groups with features like data binding, grouping, and UI customization. |

### Menu

| Snippet | Action |
|---|---|
| `ejs-menu` | Insert the snippet for Menu - create navigation headers for your application. |
| `ejs-menu-template` | Insert the snippet for Menu Template - customize menu items using templates. |
| `ejs-menu-showitemonclick` | Insert the snippet for Menu ShowItemOnClick - open submenus only on click. |
| `ejs-menu-orientation` | Insert the snippet for Menu Orientation - display menu items in vertical or horizontal orientation. |
| `ejs-menu-hamburger` | Insert the snippet for Menu Hamburger - enable hamburger mode for easier viewing on mobile devices. |

### Message

| Snippet | Action |
|---|---|
| `ejs-message` | Insert the snippet for Message - display messages with icons and colors to denote importance and context. |
| `ejs-message-severity` | Insert the snippet for Message Severity - show messages with five severity types using distinctive icons and colors. |
| `ejs-message-variant` | Insert the snippet for Message Variant - apply predefined appearance variants to messages for different display styles. |

### MultiColumn ComboBox

| Snippet | Action |
|---|---|
| `ejs-multicolumncombobox` | Insert the snippet for MultiColumn ComboBox - display dropdown data with multiple columns for complex structures. |

### MultiSelect Dropdown

| Snippet | Action |
|---|---|
| `ejs-multiselect-dropdown` | Insert the snippet for MultiSelect Dropdown - select multiple values from a list with features like data binding, filtering, grouping, tagging, and checkbox mode. |
| `ejs-multiselect-dropdown-filtering` | Insert the snippet for MultiSelect Dropdown Filtering - enable built-in filtering with rich configurations for easier selection. |
| `ejs-multiselect-dropdown-checkBox` | Insert the snippet for MultiSelect Dropdown CheckBox - select multiple values using checkboxes with support for "Select All". |
| `ejs-multiselect-dropdown-grouping` | Insert the snippet for MultiSelect Dropdown Grouping - group popup list items by category for better organization and user experience. |

### Numeric TextBox

| Snippet | Action |
|---|---|
| `ejs-numeric-textbox` | Insert the snippet for Numeric TextBox - replace HTML number input with features like formatting, precision control, and spin buttons. |
| `ejs-numeric-textbox-custom-format` | Insert the snippet for Numeric TextBox Custom Format - apply custom formats with prefixes or suffixes such as units, percentages, or currency. |
| `ejs-numeric-textbox-restric-decimal` | Insert the snippet for Numeric TextBox Restrict Decimal - control precision and limit decimal places while typing. |

### OTP Input

| Snippet | Action |
|---|---|
| `ejs-otpinput` | Insert the snippet for OTP Input - allow users to enter temporary one-time passwords received via SMS or authenticator apps for identity verification. |

### Pivot Table

| Snippet | Action |
|---|---|
| `ejs-pivot-table` | Insert the snippet for Pivot Table - organize and summarize business data in cross-table or chart format with features like filtering, sorting, exporting, and calculated fields. |
| `ejs-pivot-table-grouping-bar` | Insert the snippet for Pivot Table Grouping Bar - drag and drop fields between axes (columns, rows, values, filters) at runtime. |
| `ejs-pivot-table-calculated-field` | Insert the snippet for Pivot Table Calculated Field - create new fields using formulas or arithmetic operators, added via Field List UI. |
| `ejs-pivot-table-value-sorting` | Insert the snippet for Pivot Table Value Sorting - sort column values in ascending or descending order by clicking headers. |
| `ejs-pivot-table-pivot-chart` | Insert the snippet for Pivot Table Pivot Chart - visualize pivot data in chart format with support for multiple chart types and interactions. |
| `ejs-pivot-table-virtual-scrolling` | Insert the snippet for Pivot Table Virtual Scrolling - load large datasets efficiently by rendering only visible rows and columns. |
| `ejs-pivot-table-editing` | Insert the snippet for Pivot Table Editing - enable CRUD operations on aggregated cells with support for inline, dialog, batch, and column editing. |

### Progress Bar

| Snippet | Action |
|---|---|
| `ejs-progress-bar` | Insert the snippet for Progress Bar - visualize task progress with customizable visuals in linear form. |
| `ejs-progress-bar-circular` | Insert the snippet for Progress Bar Circular - display progress in a circular shape. |
| `ejs-progress-bar-segment` | Insert the snippet for Progress Bar Segment - divide progress into multiple segments to represent sequential tasks. |

### Progress Button

| Snippet | Action |
|---|---|
| `ejs-progress-button` | Insert the snippet for Progress Button - visualize the progression of an operation with background indication. |
| `ejs-progress-button-primary` | Insert the snippet for Progress Button Primary - denote the primary action in a button. |
| `ejs-progress-button-icons` | Insert the snippet for Progress Button Icons - add icons for visual representation in the button. |
| `ejs-progress-button-progress` | Insert the snippet for Progress Button Progress - show background filler UI to indicate progress. |

### Query Builder

| Snippet | Action |
|---|---|
| `ejs-query-builder` | Insert the snippet for Query Builder - create or edit conditions to filter large amounts of data. |
| `ejs-query-builder-model-binding` | Insert the snippet for Query Builder Model Binding - bind properties for field, operator, and value columns using model binding. |
| `ejs-query-builder-columns` | Insert the snippet for Query Builder Columns - define column operations for creating/deleting conditions and groups. |

### Radio Button

| Snippet | Action |
|---|---|
| `ejs-radio-button` | Insert the snippet for Radio Button - create a UI element that allows selecting one option from multiple choices, with checked and unchecked states. |

### Range Navigator

| Snippet | Action |
|---|---|
| `ejs-range-navigator` | Insert the snippet for Range Navigator - select a small range from a larger dataset, commonly used in financial dashboards. |
| `ejs-range-navigator-rtl` | Insert the snippet for Range Navigator RTL - enable right-to-left rendering for improved accessibility in RTL languages. |
| `ejs-range-navigator-lightweight` | Insert the snippet for Range Navigator LightWeight - skip the chart and show only the range selector, optimized for mobile devices. |
| `ejs-range-navigator-tooltip` | Insert the snippet for Range Navigator Tooltip - display tooltips with start and end values of the selected range. |

### Rating

| Snippet | Action |
|---|---|
| `ejs-rating` | Insert the snippet for Rating - allow users to rate products and share feedback with support for precision, tooltips, customization, and themes. |

### Ribbon

| Snippet | Action |
|---|---|
| `ejs-ribbon` | Insert the snippet for Ribbon - organize application tools in a single UI similar to Microsoft Office, with dynamic resizing and multiple layouts. |
| `ejs-ribbon-contextual-tab` | Insert the snippet for Ribbon Contextual Tabs - add dynamic tabs that appear only when specific actions are performed. |
| `ejs-ribbon-keytip` | Insert the snippet for Ribbon Key Tip - enable keyboard shortcuts to navigate and interact with ribbon items. |
| `ejs-ribbon-gallery` | Insert the snippet for Ribbon Gallery - integrate and utilize a gallery within the ribbon for enhanced UI. |

### Rich Text Editor

| Snippet | Action |
|---|---|
| `ejs-rich-text-editor` | Insert the snippet for Rich Text Editor - edit and format HTML or Markdown content. |
| `ejs-rich-text-editor-inline` | Insert the snippet for Rich Text Editor Inline - enable inline editing that appears on selection or focus. |
| `ejs-rich-text-editor-paste-from-word` | Insert the snippet for Rich Text Editor Paste from Word - paste content from MS Word, Excel, or Outlook with cleanup options. |
| `ejs-rich-text-editor-resize` | Insert the snippet for Rich Text Editor Resize - enable resizable editor to minimize or maximize the component. |
| `ejs-rich-text-editor-multi-row-toolbar` | Insert the snippet for Rich Text Editor Multi Row Toolbar - display all toolbar items across multiple rows. |
| `ejs-rich-text-editor-expand-toolbar` | Insert the snippet for Rich Text Editor Expand Toolbar - hide overflowing toolbar items in the next row. |
| `ejs-rich-text-editor-floating-toolbar` | Insert the snippet for Rich Text Editor Floating Toolbar - enable floating toolbar items. |
| `ejs-rich-text-editor-markdown` | Insert the snippet for Rich Text Editor Markdown - use the editor in Markdown mode with formatting support. |
| `ejs-rich-text-editor-iframe` | Insert the snippet for Rich Text Editor Iframe - render the editor using an iframe for HTML content editing. |
| `ejs-rich-text-editor-character-count` | Insert the snippet for Rich Text Editor Character Count - show character count and enforce maximum length. |
| `ejs-rich-text-editor-file-manager` | Insert the snippet for Rich Text Editor File Manager - insert images into content using FileManager integration. |

### Scheduler

| Snippet | Action |
|---|---|
| `ejs-scheduler` | Insert the snippet for Scheduler - display a list of events scheduled against specific dates and times. |
| `ejs-scheduler-event-settings` | Insert the snippet for Scheduler Event Settings - bind events to local or remote data sources with field mapping. |
| `ejs-scheduler-views` | Insert the snippet for Scheduler Views - choose among 12 different view modes (day, week, month, timeline, agenda, etc.). |
| `ejs-scheduler-resources` | Insert the snippet for Scheduler Resources - share scheduler among multiple resources with expandable groups or hierarchy. |
| `ejs-scheduler-timescale` | Insert the snippet for Scheduler Timescale - customize grid lines with different duration, count, and templates. |
| `ejs-scheduler-readonly` | Insert the snippet for Scheduler ReadOnly - render events in read-only mode, preventing CRUD operations. |

### Sidebar

| Snippet | Action |
|---|---|
| `ejs-sidebar` | Insert the snippet for Sidebar - create an expandable and collapsible side container for primary or secondary content. |
| `ejs-sidebar-type` | Insert the snippet for Sidebar Type - configure expansion types such as Auto, Over, Push, and Slide. |
| `ejs-sidebar-position` | Insert the snippet for Sidebar Position - place the sidebar on the left or right side of the main content. |
| `ejs-sidebar-backdrop` | Insert the snippet for Sidebar Backdrop - apply overlay options to the main content when the sidebar is open. |

### Signature

| Snippet | Action |
|---|---|
| `ejs-signature` | Insert the snippet for Signature - provide a UI to draw signatures or text with support for background color, stroke color, and background images. |

### Skeleton

| Snippet | Action |
|---|---|
| `ejs-skeleton` | Insert the snippet for Skeleton - display a shimmer placeholder simulating page content while actual content is loading. |

### Slider

| Snippet | Action |
|---|---|
| `ejs-slider` | Insert the snippet for Slider - render a basic HTML5 slider based on a given value. |
| `ejs-slider-range` | Insert the snippet for Slider Range - select a single value or a range between min and max. |
| `ejs-slider-orientation` | Insert the snippet for Slider Orientation - display the slider horizontally or vertically. |
| `ejs-slider-ticks` | Insert the snippet for Slider Ticks - show major and minor ticks to identify current values. |
| `ejs-slider-tooltip` | Insert the snippet for Slider Tooltip - display current value in a tooltip with customizable placement. |

### Smith Chart

| Snippet | Action |
|---|---|
| `ejs-smith-chart` | Insert the snippet for Smith Chart - visualize transmission line parameters in high-frequency circuit applications. |
| `ejs-smith-chart-animation` | Insert the snippet for Smith Chart Animation - animate the series while rendering. |
| `ejs-smith-chart-tooltip` | Insert the snippet for Smith Chart Tooltip - show a pop-up with additional information when hovering over data points. |
| `ejs-smith-chart-legend` | Insert the snippet for Smith Chart Legend - display a legend to identify series, docked around the plot area. |

### Sparkline Charts

| Snippet | Action |
|---|---|
| `ejs-sparkline-charts-type-line` | Insert the snippet for Sparkline Line Chart - represent patterns and trends in data over time. |
| `ejs-sparkline-charts-type-column` | Insert the snippet for Sparkline Column Chart - show different values using vertical bars. |
| `ejs-sparkline-charts-type-pie` | Insert the snippet for Sparkline Pie Chart - illustrate numeric proportions with circular slices. |
| `ejs-sparkline-charts-type-winloss` | Insert the snippet for Sparkline WinLoss Chart - visualize positive, negative, or zero values for win/loss scenarios. |
| `ejs-sparkline-charts-type-area` | Insert the snippet for Sparkline Area Chart - highlight magnitude of trends with filled area under the line. |

### SpeechToText

| Snippet | Action |
|---|---|
| `ejs-speechtotext` | Insert the snippet for SpeechToText - enable real-time voice input using the SpeechRecognition API with multi-language support, interim results, and customizable UI. |

### Speed Dial

| Snippet | Action |
|---|---|
| `ejs-speeddial` | Insert the snippet for Speed Dial - create a floating action button that expands into related menu items or custom popup content. |

### Split Button

| Snippet | Action |
|---|---|
| `ejs-split-button` | Insert the snippet for Split Button - create a primary button for default action and a secondary button for contextual overlays. |
| `ejs-split-button-icons` | Insert the snippet for Split Button Icons - add icons to the split button for visual representation. |

### Splitter

| Snippet | Action |
|---|---|
| `ejs-splitter` | Insert the snippet for Splitter - align panes in horizontal orientation. |
| `ejs-splitter-vertical` | Insert the snippet for Splitter Vertical - align panes in vertical orientation. |
| `ejs-splitter-nested` | Insert the snippet for Splitter Nested - nest another splitter with different orientation to build complex layouts. |

### Stepper

| Snippet | Action |
|---|---|
| `ejs-stepper` | Insert the snippet for Stepper - guide users through a multi-step process or workflow with clear progress indication. |

### Stock Chart

| Snippet | Action |
|---|---|
| `ejs-stock-chart` | Insert the snippet for Stock Chart - track and visualize company stock prices over time using charting and range tools. |
| `ejs-stock-chart-range-selector` | Insert the snippet for Stock Chart Range Selector - select a set of data with a specified range using the selector. |
| `ejs-stock-chart-period-selector` | Insert the snippet for Stock Chart Period Selector - choose ranges with specified periods using the period selector. |

### Switch

| Snippet | Action |
|---|---|
| `ejs-switch` | Insert the snippet for Switch - create a toggle UI element to switch between checked and unchecked states. |

### Tabs

| Snippet | Action |
|---|---|
| `ejs-tabs` | Insert the snippet for Tabs - display multiple content panels in a specific space, one at a time. |
| `ejs-tabs-overflow` | Insert the snippet for Tabs Overflow - handle excess tab items with scrollable, popup, or multirow modes. |
| `ejs-tabs-orientation` | Insert the snippet for Tabs Orientation - align tab headers at the top, bottom, left, or right. |
| `ejs-tabs-draganddrop` | Insert the snippet for Tabs Drag and Drop - reorder tab items by dragging and dropping them. |

### TextArea

| Snippet | Action |
|---|---|
| `ejs-textarea` | Insert the snippet for TextArea - handle multiple lines of text with support for placeholders. |
| `ejs-textarea-float-label` | Insert the snippet for TextArea Float Label - enable floating labels for addresses, descriptions, comments, or feedback. |
| `ejs-textarea-resize` | Insert the snippet for TextArea Resize - allow resizing vertically or horizontally using the grip handle. |

### TextBox

| Snippet | Action |
|---|---|
| `ejs-textbox` | Insert the snippet for TextBox - provide a floating label with minimal configuration, supporting HTML5/CSS features. |
| `ejs-textbox-multiline` | Insert the snippet for TextBox Multiline - handle multiple lines of text with floating labels for addresses, descriptions, comments, or feedback. |

### Timeline

| Snippet | Action |
|---|---|
| `ejs-timeline` | Insert the snippet for Timeline - present a series of events or activities in chronological order to track progression. |

### TimePicker

| Snippet | Action |
|---|---|
| `ejs-timepicker` | Insert the snippet for TimePicker - allow users to select or enter a time value via a pop-up list or text box. |
| `ejs-timepicker-timerange` | Insert the snippet for TimePicker Time Range - define custom time ranges with min and max values, supporting culture-specific formats. |

### Toast

| Snippet | Action |
|---|---|
| `ejs-toast` | Insert the snippet for Toast - display a small non-blocking popup to notify information about a process. |
| `ejs-toast-progress-bar` | Insert the snippet for Toast Progress Bar - show a progress bar to indicate toast duration. |
| `ejs-toast-newest-on-top` | Insert the snippet for Toast Newest on Top - append newly created toasts above existing ones. |
| `ejs-toast-close-button` | Insert the snippet for Toast Close Button - allow closing the toast before it expires. |
| `ejs-toast-position` | Insert the snippet for Toast Position - customize toast position (e.g., bottom-right). |
| `ejs-toast-timeout` | Insert the snippet for Toast TimeOut - prevent auto-hide by setting timeout to 0. |

### Toolbar

| Snippet | Action |
|---|---|
| `ejs-toolbar` | Insert the snippet for Toolbar - group command buttons in a single line with horizontal scrolling. |
| `ejs-toolbar-overflowmode` | Insert the snippet for Toolbar OverflowMode - handle excess toolbar items with modes like Scrollable, Popup, Extended, or MultiRow. |

### Tooltip

| Snippet | Action |
|---|---|
| `ejs-tooltip` | Insert the snippet for Tooltip - show information or messages when hovering, clicking, focusing, or touching a target element. |
| `ejs-tooltip-position` | Insert the snippet for Tooltip Position - configure tooltip placement around the target (top, bottom, left, right, etc.). |
| `ejs-tooltip-template` | Insert the snippet for Tooltip Template - load tooltip content using inline HTML, images, iframes, videos, or maps. |
| `ejs-tooltip-opening-mode` | Insert the snippet for Tooltip Opening Mode - customize tooltip show/hide behavior with auto, hover, click, focus, or custom modes. |

### Tree Grid

| Snippet | Action |
|---|---|
| `ejs-treegrid-self-reference-data-binding` | Insert the snippet for Tree Grid Self Reference Data Binding - bind self-referential flat data using parent IDs. |
| `ejs-treegrid-hierarchical-data-binding` | Insert the snippet for Tree Grid Hierarchical Data Binding - bind hierarchical data using childMapping property. |
| `ejs-treegrid-editing` | Insert the snippet for Tree Grid Editing - dynamically insert, delete, and update records with toolbar actions. |
| `ejs-treegrid-filtering` | Insert the snippet for Tree Grid Filtering - enable filtering across all columns with menu and toolbar options. |
| `ejs-treegrid-sorting` | Insert the snippet for Tree Grid Sorting - sort columns in ascending or descending order. |

### TreeMap

| Snippet | Action |
|---|---|
| `ejs-treemap-selection` | Insert the snippet for TreeMap Selection - enable selection of leaf items with customizable color and border. |
| `ejs-treemap-highlight` | Insert the snippet for TreeMap Highlight - highlight leaf items on mouseover with customizable styles. |
| `ejs-treemap-tooltip` | Insert the snippet for TreeMap Tooltip - display underlying data in a tooltip with format and template support. |
| `ejs-treemap-legend-default` | Insert the snippet for TreeMap Legend Default - add a legend with colors, shapes, or identifiers docked around the treemap. |
| `ejs-treemap-legend-interactive` | Insert the snippet for TreeMap Legend Interactive - render interactive legends with arrows on mouseover. |
| `ejs-treemap-layout-squarified` | Insert the snippet for TreeMap Layout Squarified - render treemap items in squarified layout based on weight values. |
| `ejs-treemap-sliceanddice-vertical` | Insert the snippet for TreeMap SliceAndDice Vertical - render treemap items vertically. |
| `ejs-treemap-sliceanddice-horizontal` | Insert the snippet for TreeMap SliceAndDice Horizontal - render treemap items horizontally. |
| `ejs-treemap-sliceanddice-auto` | Insert the snippet for TreeMap SliceAndDice Auto - render treemap items horizontally or vertically based on size. |

### TreeView

| Snippet | Action |
|---|---|
| `ejs-treeview` | Insert the snippet for TreeView - represent hierarchical data in a tree structure with advanced features. |
| `ejs-treeview-checkbox` | Insert the snippet for TreeView CheckBox - enable built-in checkbox support with tri-state mode for parent nodes. |
| `ejs-treeview-draganddrop` | Insert the snippet for TreeView Drag and Drop - allow users to rearrange nodes via drag and drop. |
| `ejs-treeview-multiple-selection` | Insert the snippet for TreeView Multiple Selection - select multiple nodes simultaneously. |
| `ejs-treeview-template` | Insert the snippet for TreeView Template - customize tree nodes with templates including images or custom structures. |
