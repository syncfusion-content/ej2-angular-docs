---
layout: post
title: Scheduler interactions in Angular Schedule | Syncfusion
description: Learn about various interactions in the Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Schedule
documentation: ug
domainurl: ##DomainURL##
---

# Scheduler interactions in Angular Schedule component

The following table outlines common Scheduler actions, detailing how each action is performed using mouse and touch interactions.

|   Actions   | Mouse interaction | Touch interaction |
|-------------|-------------------|-------------------|
| Single click or tap on cells |  Single click on a cell to select a cell. | A single tap on a cell will display a `+` icon on the cell. Tapping on it again will open the new event editor window. |
| Multiple cell selection | Single click on a cell and drag the selection to other cells to enable multiple cell selection. |  No multiple cell selection is allowed using touch gestures. |
| Event selection | Single click on an event to select it. | Tap holding on events, select an event and opens a small popup at the top holding the options to edit or delete. The popup also displays the selected event's subject. |
| Multiple event selection and deletion | Pressing `Ctrl` key and altogether single clicking on multiple events one after the other will enable multiple event selection. Pressing `Delete` key after event selection will delete all the selected events. |  Tap hold an event to select it, which opens a small popup at the top holding the options to edit or delete. As a continuation of this action, keep on single tapping on other events, to enable multiple event selection. Also, the popup displayed at the top remains in opened state, showing the count of the number of selected events. Pressing `Delete` option from the popup will delete all the selected events. |
| Date navigation | Clicking on the previous or next date navigation icons in the header bar allows you to navigate between dates. |  Swiping the scheduler view port to the left or right will allow you to navigate between the dates on touch devices. NOTE: Swiping does not work when horizontal scroller present in the Scheduler. You can also make use of the previous and next navigation icons at the header bar to navigate. |
| View navigation | Click on an event and try moving it over the Scheduler to enable drag and drop action. |  The view options are available within the popup options at the top right extreme end of the header bar and you can choose the view from it. |
| Drag and drop | Click on an event and try moving it over the Scheduler to enable drag and drop action. |  Tap hold the event and try moving it over the Scheduler to enable drag and drop action. |
| Event resizing | Hover the mouse across the extremities or edges of the Scheduler events and when the mouse pointer changes into resize handler, now click and start resizing an event to the desired time range. |  Touch the event extremities and start resizing the events directly. |
| Tooltip | Hover the mouse pointer over the events or resource header and the tooltip will be displayed. |  Tap holding the events will open the tooltip on events. |
| Open editor window  | Double click on cells or events to open the editor window. |  Double click on cells or events to open the editor window. Single tap on cells, which displays a `+` icon on the cell. Now, tap on it again to open the new event editor window. To open the editor on events, single tap on it and then click on the edit icon to open the editor window in `Edit` mode. |
| Open quick info popup | Single clicking on a cell will open a quick popup prompting for new event creation. Single clicking on an event will open a popup displaying event information along with the option to edit and delete it. |  No quick info popup is available while single tapping on cells. Single tapping on events, opens the popup showing event information. |

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
