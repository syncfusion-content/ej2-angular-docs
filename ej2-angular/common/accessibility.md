---
layout: post
title: Accessibility in Angular component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Syncfusion Angular Components

## Accessibility overview

Accessibility in software components involves designing user interfaces that are usable by everyone, including individuals with disabilities. This encompasses elements like ensuring high-contrast text, providing alternative text for images, and ensuring controls are operable via keyboard or assistive technologies.

## Accessibility standards

A component is considered accessible when it complies with specific standards designed to enhance accessibility.

Syncfusion Angular components meet the following accessibility standards:

- **[ADA](https://www.ada.gov/)**: A law ensuring equal access and opportunities for people with disabilities compared to those without disabilities.

- **[WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/)**: These Web Content Accessibility Guidelines provide standards by the World Wide Web Consortium (W3C) to ensure web content is accessible to people with disabilities. WCAG 2.2 establishes a framework of accessibility principles and success criteria classified into three levels: A, AA, and AAA.

- **[Section 508](https://www.section508.gov/)**: Guidelines that ensure electronic and information technology are accessible to people with disabilities, primarily for federal agencies in the United States, based on WCAG.

* [WAI-ARIA](https://www.w3.org/WAI/ARIA/) - WAI-ARIA stands for "Web Accessibility Initiative - Accessible Rich Internet Applications." It is a set of technical specifications and guidelines developed by the World Wide Web Consortium (W3C) as part of the Web Accessibility Initiative (WAI). WAI-ARIA is designed to enhance the accessibility of dynamic web content, particularly web applications and rich internet applications (RIAs), for people with disabilities. WAI-ARIA provides a set of roles, states, and properties that can be added to HTML elements to provide additional context and information about the purpose and behavior of those elements. This can help assistive technologies better understand and interpret web content and interact with web applications.

* [Keyboard navigation](https://www.w3.org/TR/WCAG22/#keyboard-accessible) - It refers to the ability to use a keyboard to interact with and navigate through a user interface. It is an important aspect of web accessibility, as it allows people who cannot use a mouse or other pointing device to access and use web content and applications.

Syncfusion Angular components adhere to these established standards.

## Accessibility compliance

The accessibility support provided by Syncfusion Angular components is based on a collection of methodologies for adhering to and applying [recognized standards and technical specifications](#accessibility-standards) to ensure an intuitive experience for people with disabilities.

There are several methodologies of accessibility validation that can be performed on the Syncfusion Angular components, such as:

* The [WAI-ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) are followed by the Syncfusion Angular components to enable appreciable accessibility.

* Each Angular component is subjected to manual testing with a screen reader and also automated test cases to ensure the component's required attributes. Tools such as aXe, Lighthouse, and Accessibility Scanner are employed to ensure comprehensive coverage and compliance.

* Attributes are allocated and updated correctly during interaction as well. Each component has been assigned a distinct `Role` attribute and its own set of ARIA attributes defined by the [WCAG 2.2](https://www.w3.org/TR/WCAG22/) specification.

In addition to the methodologies mentioned above, Syncfusion Angular components are constructed to support the following accessibility aspects.

### Screen reader support

A screen reader allows people who are blind or visually impaired to use a computer by reading aloud the text that is displayed on the screen. Syncfusion Angular components followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/) standards to work properly in the screen readers such as [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) for Windows and [Embedded VoiceOver](https://support.apple.com/en-in/guide/voiceover/vo2706/mac) for MAC, along with JAWS and NVDA, among others.

### Right-To-Left support

Right-to-Left (RTL) support allows applications to cater to languages written from right to left, enhancing usability for Arabic, Hebrew, etc. Refer to the [Right-to-Left documentation](https://ej2.syncfusion.com/angular/documentation/common/right-to-left) for more details.

### Color contrast

Syncfusion Angular components come with [predefined themes](https://ej2.syncfusion.com/angular/documentation/appearance/overview) that ensure satisfactory color contrast. Developers can customize these themes for improved contrast.

### Mobile device support

Syncfusion Angular components are more user-friendly and accessible to individuals using mobile devices, including those with disabilities. These are designed to be responsive, adaptable to various screen sizes and orientations, and touch-friendly.

### Keyboard navigation support

Syncfusion Angular components support keyboard navigation, allowing users who rely on alternate methods to effortlessly navigate and interact with the component.

## Ensuring accessibility

Ensuring the accessibility of Syncfusion Angular components is crucial for making the product inclusive and user-friendly for individuals with disabilities. This process involves various types of accessibility testing, including:

* **Automated testing**: The Syncfusion Angular component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools. These tools provide in-depth analysis and reporting of accessibility compliance.

* **Manual testing**: This type of testing involves manually evaluating the Syncfusion Angular components. During manual accessibility testing, testers will ensure accessibility using the screen readers such as [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) for Windows and [Embedded VoiceOver](https://support.apple.com/en-in/guide/voiceover/vo2706/mac) for MAC.

Syncfusion Angular components will keep improving when there is anything required. It also involves client feedback to make the component more accessible, incorporating suggestions and real-world observations.

## Accessibility support for specific components

Consult the component-specific documents below for detailed information about how Syncfusion Angular components ensure compliance with accessibility standards, encompassing Section 508, WAI-ARIA, WCAG 2.2, keyboard navigation, and more.

<style>
#table
{
border:0 !important;
line-height: 2!important;
}

tr
{
border:0 !important;
}

td
{
border:0 !important;
vertical-align: top;
}

.controlanchorlink
{
text-decoration: none !important;
font-size: 14px !important;
text-align: left !important;
padding: 5px 0px;
letter-spacing: 1px;
}
.controlcategory
{
font-size: 14px !important;
text-align: left !important;
font-weight: bold !important;
letter-spacing: 0.7px;
}
}
</style>

<table id="table" style="border: 0px;">
<tbody>
<colgroup>
<col style="width: 25%">
<col style="width: 25%">
<col style="width: 25%">
<col style="width: 25%">
</colgroup>
</tbody>
<tr>
    <td>
        <div><p class="controlcategory">GRIDS</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/grid/accessibility">DataGrid</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/pivotview/accessibility">Pivot Table</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/treegrid/accessibility">Tree Grid</a></div>
         <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/spreadsheet/accessibility">Spreadsheet</a></div>
        <div><p class="controlcategory">FILE VIEWERS & EDITORS</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/inplace-editor/accessibility">In-place Editor</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/pdfviewer/accessibility">PDF Viewer</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility">RichTextEditor</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/document-editor/accessibility">Word Processor</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/image-editor/accessibility">Image Editor</a></div>
        <div><p class="controlcategory">LAYOUT</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/dialog/accessibility">Dialog</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/listview/accessibility">ListView</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/tooltip/accessibility">Tooltip</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/splitter/accessibility">Splitter</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/dashboard-layout/accessibility">Dashboard Layout</a></div>
    </td>
    <td>
        <div><p class="controlcategory">DATA VISUALIZATION</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/accumulation-chart/accessibility">Accumulation Chart</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/chart/accessibility">Charts</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/3d-chart/accessibility">3D Chart</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/stock-chart/accessibility">Stock Chart</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/circular-gauge/accessibility">Circular Gauge</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/diagram/accessibility">Diagram</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/heatmap-chart/accessibility">HeatMap Chart</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/linear-gauge/accessibility">Linear Gauge</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/maps/accessibility">Maps</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/range-navigator/accessibility">Range Selector</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/smithchart/accessibility">Smith Chart</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/sparkline/accessibility">Sparkline Charts</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/treemap/accessibility">TreeMap</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/bullet-chart/accessibility">Bullet Chart</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/kanban/accessibility">Kanban</a></div>
        <div><p class="controlcategory">BUTTONS</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/button/accessibility">Button</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/button-group/accessibility">Button Group</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/drop-down-button/accessibility">Dropdown Menu</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/progress-button/accessibility">Progress Button</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/split-button/accessibility">Split Button</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/chips/accessibility">Chips</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/floating-action-button/accessibility">FAB</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/speed-dial/accessibility">Speed Dial</a></div>
    </td>
    <td>
        <div><p class="controlcategory">CALENDARS</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/schedule/accessibility">Scheduler</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/calendar/accessibility">Calendar</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/datepicker/accessibility">DatePicker</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/daterangepicker/accessibility">DateRangePicker</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/datetimepicker/accessibility">DateTime Picker</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/timepicker/accessibility">TimePicker</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/gantt/accessibility">Gantt Chart</a></div>
        <div><p class="controlcategory">INPUTS</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/textbox/accessibility">TextBox</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/maskedtextbox/accessibility">Input Mask</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/maskedtextbox/accessibility">Masked TextBox</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/numerictextbox/accessibility">Numeric TextBox</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/radio-button/accessibility">Radio Button</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/check-box/accessibility">CheckBox</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/color-picker/accessibility">Color Picker</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/uploader/accessibility">File Upload</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/range-slider/accessibility">Range Slider</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/switch/accessibility">Toggle Switch Button</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/signature/accessibility">Signature</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/rating/accessibility">Rating</a></div>
        <div><p class="controlcategory">FORMS</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/query-builder/accessibility">Query Builder</a></div>
    </td>
    <td>
        <div><p class="controlcategory">DROPDOWNS</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/auto-complete/accessibility">AutoComplete</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/combo-box/accessibility">ComboBox</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/drop-down-list/accessibility">Dropdown List</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/drop-down-tree/accessibility">DropDown Tree</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/multi-select/accessibility">Multiselect DropDown</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/mention/accessibility">Mention</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/list-box/accessibility">ListBox</a></div>
        <div><p class="controlcategory">NAVIGATION</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/accordion/accessibility">Accordion</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/appbar/accessibility">AppBar</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/breadcrumb/accessibility">Breadcrumb</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/carousel/accessibility">Carousel</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/context-menu/accessibility">Context Menu</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/menu/accessibility">Menu Bar</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/sidebar/accessibility">Sidebar</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/tab/accessibility">Tabs</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/toolbar/accessibility">Toolbar</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/ribbon/accessibility">Ribbon</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/treeview/accessibility">TreeView</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/file-manager/accessibility">File Manager</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/pager/accessibility">Pager</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/stepper/accessibility">Stepper</a></div>
        <div><p class="controlcategory">NOTIFICATION</p></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/message/accessibility">Message</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/toast/accessibility">Toast</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/progress-bar/accessibility">Progress Bar</a></div>
        <div class="controlanchorlink"><a target="_self" href="https://ej2.syncfusion.com/angular/documentation/skeleton/accessibility">Skeleton</a></div>
    </td>
</tr>
</table>
