---
layout: post
title: WebMCP Supported Angular Components | Syncfusion
description: Learn about all Syncfusion Angular components with native WebMCP support, their available tools, use cases, and live demo samples.
control: WebMCP
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# WebMCP Supported Syncfusion® Angular Components

WebMCP-enabled Syncfusion® Angular components expose component-specific tools that allow AI agents to interact with UI components through natural language. These tools provide direct access to component APIs for reading data, performing actions, and automating workflows.
 
This page lists the supported WebMCP tools available in each Syncfusion® Angular component.

## DataGrid

The Syncfusion® DataGrid component exposes **27 tools**, giving AI agents full programmatic control over grid data manipulation, selection, filtering, sorting, editing, and layout management.

| Tool Name | Description |
|-----------|--------------|
| getSelectedRecords | Returns the selected Grid records |
| getSelectedRowIndexes | Returns the selected row indexes from the Grid |
| navigateToPage | Navigates the Grid to a specific page |
| sortByColumn | Sorts the Grid by a column |
| clearSorting | Clears sorting from the Grid |
| filterByColumn | Applies a filter to a Grid column |
| clearFiltering | Clears filtering from the Grid |
| setRowData | Sets row data by key |
| setCellValue | Updates a single Grid cell value |
| saveBulkChanges | Persists a set of edited Grid rows |
| changeDataSource | Replaces or updates the Grid data source |
| getCurrentViewRecords | Returns the current visible Grid records |
| getFilteredRecords | Returns records that match current Grid filters |
| selection | Performs common Grid selection operations (selectRows, selectRow, selectCells) |
| selectRowByRange | Selects row(s) within a range |
| clearSelection | Clears all Grid selection |
| exports | Exports Grid data to a file format (excel, csv, pdf) |
| crudLifecycle | Performs common CRUD or edit lifecycle operations (startEdit, endEdit, closeEdit, addRecord, deleteRecord) |
| layoutContent | Controls Grid layout and content utilities (refresh, refreshColumns, showSpinner, hideSpinner) |
| columnVisibility | Shows or hides Grid columns and opens the column chooser |
| selectionRangeHelpers | Provides selection range helpers and selection clearing (clearCellSelection, clearRowSelection) |
| refreshAndSizing | Refreshes Grid content and applies sizing operations (autoFitColumns, refresh, refreshHeader) |
| reorderData | Reorders Grid columns or rows (reorderColumns, reorderColumnByIndex, reorderRows) |
| groupingAndPinning | Groups or ungroups data, handles detail rows, and pins rows (groupColumn, ungroupColumn, clearGrouping, groupExpandAll, groupCollapseAll, pinRows, unpinRows) |
| batchChanges | Reads or applies Grid batch changes (getBatchChanges, batchSave, saveBatchChanges) |
| configurationHelpers | Exposes configuration and helper getters for the Grid (getColumns, getColumnByField, getColumnByUid, getPrimaryKeyFieldNames, getColumnFieldNames, getVisibleColumns) |
| toolbarClipboardUtilities | Enables toolbar items and supports copy or print utilities |

## Diagram

The Syncfusion® Diagram component exposes **19 tools**, giving AI agents full programmatic control over diagram creation, manipulation, and management.

| Tool Name | Description |
|-----------|-------------|
| createDiagramNode | Creates a standard Basic or Flowchart node |
| createSpecializedDiagramNode | Creates specialized nodes (BPMN, ER, UML, swimlane) |
| createDiagramConnector | Creates a connector between two nodes with routing and styling |
| createSpecializedRelationship | Creates ER and UML relationship connectors with cardinality |
| manageNodeSelection | Manages node/connector selection with single, multi, and select-all modes |
| manageInteractionMode | Enables or disables diagram interaction, selection, dragging, and deletion |
| enableEditingMode | Enables or disables diagram editing and interaction |
| arrangeAndAlignObjects | Aligns, distributes, and sizes selected objects uniformly |
| arrangeZOrder | Controls stacking order (z-order) of objects |
| navigateAndZoomDiagram | Controls viewport navigation, zoom, pan, and fit-to-view operations |
| manageGroupsAndHierarchies | Creates, modifies, and removes groups and hierarchical relationships |
| applyLayoutToNodes | Applies named layouts (Hierarchical, Radial, MindMap, etc.) |
| manageLayers | Creates, removes, and manages diagram layers |
| manageAnnotationsAndLabels | Adds, removes, and modifies annotations and labels on objects |
| managePorts | Adds and removes ports (connection points) on nodes |
| deleteFromDiagram | Removes nodes, connectors, or all objects with dependent cleanup |
| manageUndoRedo | Controls undo/redo history with atomic transactions |
| manageClipboardOperations | Manages copy, cut, and paste operations for diagram objects |
| exportAndImportDiagrams | Exports diagram data (JSON, Visio, Image, Mermaid) and imports from sources |

## File Manager

The Syncfusion® File Manager component exposes **7 tools** that enable AI agents to browse files, manage file operations, control the user interface, perform navigation, and automate common file management workflows. Explore the Syncfusion® Angular File Manager component with WebMCP integration through this [demo](https://demos.syncfusion.com/file-manager-sdk/web-mcp/index.html).

| Tool Name | Description |
|---|---|
| getSelectedFiles | Returns the list of currently selected files and folders, including metadata such as name, ID, type, size, and modification details |
| manageFileSystemItems | Creates folders, renames files or folders, and deletes one or more file system items |
| manageFileUploadAndDownload | Opens the upload workflow or downloads one or more selected files |
| navigateAndOpenFiles | Navigates backward, opens files or folders, and refreshes the current file view |
| searchAndFilterFiles | Applies filters to files and folders based on specified criteria |
| manageUserInterface | Enables or disables menu and toolbar items, closes dialogs, and refreshes the layout |
| manageSelection | Selects all items or clears the current selection |

## Gantt Chart

The Syncfusion® Gantt component exposes 38 tools, giving AI agents full programmatic control over tasks, scheduling, hierarchy, view/layout, undo/redo history, and exports.

| Tool Name | Description |
|---|---|
| getProjectTasks | Returns the current project task set from the Gantt after the latest view state is applied. |
| getTaskDetails | Retrieves scheduling/geometry details and derived flags for a specific task. |
| manageHierarchy | Controls hierarchy expansion/collapse state to prepare deterministic task extraction and reporting. |
| getCriticalTasks | Returns tasks flagged as critical when critical path is enabled. |
| createTask | Creates one or more new tasks (optionally positioned within the hierarchy). |
| updateTask | Applies updates to a specific task record based on a record payload. |
| deleteTask | Deletes one or more tasks by id/index/record selection. |
| splitTask | Splits a task into multiple segments at one or more split dates. |
| manageTaskDependencies | Adds, updates, or removes predecessor dependencies for a task. |
| updateProjectDates | Updates project start/end dates and applies timeline rounding rules. |
| getVisibleTasksHierarchy | Computes the visible/expanded task set for a hierarchy without requiring UI navigation. |
| undo | Rolls back the most recent change made through the component. |
| redo | Reapplies the most recently undone change. |
| excelExport | Exports the current Gantt content to an Excel-compatible output. |
| pdfExport | Exports the current Gantt content to a PDF output. |
| csvExport | Exports the current Gantt data to a CSV-compatible output. |
| searchTasks | Searches for tasks based on a keyword across all task fields. |
| filterTasks | Filters tasks based on specified field criteria. |
| sortTasks | Sorts tasks based on specified field and direction. |
| indentTask | Indents a task to make it a child of the task above it. |
| outdentTask | Outdent a task to make it a sibling of its parent task. |
| getTaskById | Retrieves a specific task by its unique identifier. |
| reorderColumns | Reorders columns in the Gantt grid view. |
| zoomTimeline | Adjusts the timeline zoom level to focus on different time periods. |
| convertToMilestone | Converts a task to a milestone by removing its duration. |
| mergeTask | Merges task segments into a single continuous task. |
| reorderRows | Reorders rows in the Gantt grid by moving tasks to different positions. |
| getRecordByID | Retrieves a specific record by its unique identifier. |
| getGanttColumns | Retrieves the current column configuration of the Gantt chart. |
| getGridColumns | Retrieves the current column configuration of the TreeGrid portion. |
| clearFiltering | Clears all applied filters from the Gantt chart. |
| clearSorting | Clears all applied sorting from the Gantt chart. |
| getUndoActions | Retrieves the list of actions available for undo operations. |
| getRedoActions | Retrieves the list of actions available for redo operations. |
| clearUndoCollection | Clears the entire undo collection, removing all undo capabilities. |
| clearRedoCollection | Clears the entire redo collection, removing all redo capabilities. |
| scrollToTask | Scrolls the view to bring a specific task into view. |
| scrollToDate | Scrolls the timeline view to bring a specific date into view. |

## Chart

The Syncfusion® Chart component exposes **37 tools** that enable AI agents to inspect chart metadata, query and modify series data, update chart configurations, and interact with visual elements. Explore the Syncfusion® Angular Spreadsheet component with WebMCP integration through this [demo](https://demos.syncfusion.com/chart-sdk/webmcp/index.html).

| Tool Name | Description |
|---|---|
| addChartAnnotation | Adds one or more annotations to the Chart. |
| addChartAxis | Adds secondary axes to the Chart. |
| addChartSeries | Adds one or more series to the Chart. |
| animateChart | Starts Chart animation with an optional duration in milliseconds (defaults to 1000 ms). |
| appendChartData | Adds data records to a Chart series and optionally limits the number of retained records. |
| clearChartSelection | Clears all Chart selections. |
| clearChartSeries | Removes all series from the Chart. |
| configureChartZoom | Updates Chart zoom settings. |
| exportChart | Exports the Chart to a file format. **Supported formats:** `PNG`, `JPEG`, `SVG`, `PDF`, `XLSX`, `CSV`. |
| getChartAnnotations | Returns all Chart annotations. |
| getChartAxes | Returns Chart axis information. |
| getChartIndicators | Returns configured Chart indicators. |
| getChartLegend | Returns Chart legend information. |
| getChartPoint | Returns information about a specific Chart point. |
| getChartStriplines | Returns Chart stripline information. |
| getSelectedChartData | Returns the currently selected Chart data points. |
| getSeriesData | Returns data points from a Chart series. |
| hideChartCrosshair | Hides the Chart crosshair. |
| hideChartTooltip | Hides the Chart tooltip. |
| inspectChart | Returns the current Chart configuration and series information. |
| printChart | Prints the Chart. |
| removeChartAnnotation | Removes a Chart annotation. |
| removeChartAxis | Removes a secondary Chart axis. |
| removeChartPoints | Removes data points from a Chart series. |
| removeChartSeries | Removes a series from the Chart. |
| resetChartZoom | Resets Chart zoom settings. |
| selectChartPoints | Selects Chart data points. |
| showChartCrosshair | Displays the Chart crosshair. |
| showChartTooltip | Displays the Chart tooltip. |
| toggleChartSeriesVisibility | Shows or hides a Chart series. |
| updateChartAnnotation | Updates an existing Chart annotation. |
| updateChartAxis | Updates Chart axis properties. |
| updateChartDataSource | Updates the Chart data source or series data source. |
| updateChartPoint | Updates a data point in a Chart series. |
| updateChartProperties | Updates supported Chart properties. |
| updateChartSeries | Updates properties of an existing Chart series. |
| updateChartTitle | Updates the Chart title and subtitle. |

### Example prompts

Clear and specific prompts help the AI select and execute the appropriate Chart tools.

> "Show the current chart configuration, including the series names, series types, axis settings, and zoom state."

> "Add a line series named 'Revenue' with the provided data, and then update the chart title to 'Sales Trends 2024'."

> "Update the primary Y-axis range from 0 to 1000 with an interval of 100."

> "Hide the 'Expenses' series and show only the currently visible series."

> "Add an annotation labeled 'Peak Sales' to the point with the highest value in the Revenue series."

For best results, specify relevant series names or indices, axis names, annotation IDs, and point indices or X values.

## DOCX Editor

The Syncfusion® DOCX Editor component exposes **27 tools** that enable AI agents to manage document content, formatting, navigation, protection, and export. Explore the Syncfusion® Angular DOCX Editor component with WebMCP integration through this [demo](https://demos.syncfusion.com/docx-editor-sdk/webmcp/index.html).

| Tool Name | Description |
|---|---|
| saveDocument | Saves or exports the current document in DOCX, DOTX, TXT, or SFDT format. |
| getDocumentBookmarks | Returns all bookmark names available in the current document. |
| configureDocumentEditorSettings | Configures editor appearance and behavior settings such as ruler, bookmarks, navigation pane, and fonts. |
| find | Finds the next occurrence of specified text in the document. |
| findAll | Finds all occurrences of specified text throughout the document. |
| replaceAll | Replaces all occurrences of specified text with new content. |
| insertText | Inserts plain text at the current cursor or selection position. |
| paste | Pastes formatted SFDT content while preserving document structure and formatting. |
| insertBookmark | Creates a bookmark at the current cursor position for navigation. |
| selectBookmark | Navigates to and selects an existing bookmark. |
| select | Selects content between specified document positions or coordinates. |
| print | Opens the print dialog for the current document. |
| enforceProtection | Protects the document and restricts editing with a password. |
| stopProtection | Removes document protection and restores editing access. |
| insertField | Inserts dynamic fields such as merge fields or page numbers. |
| goToPage | Navigates to a specified page in the document. |
| selectAll | Selects all content in the document. |
| selectCurrentWord | Selects the word at the current cursor position. |
| selectParagraph | Selects the current paragraph. |
| pageCount | Returns the total number of pages in the document. |
| getSelectionText | Retrieves the plain text content of the current selection. |
| getSelectionSfdt | Retrieves the selected content as formatted SFDT. |
| insertEditingRegion | Creates an editable region for specific users in a protected document. |
| formatCharacter | Applies character formatting such as font, size, color, bold, italic, and highlighting. |
| formatParagraph | Applies paragraph formatting such as alignment, indentation, and spacing. |
| insertImage | Inserts an image with optional sizing and alternate text. |
| insertHyperlink | Inserts a hyperlink with optional display text and screen tip. |

### Example prompts

The effectiveness of WebMCP tools depends on the quality of the prompt provided to the AI assistant. Clear and specific instructions help the AI choose the appropriate tool and produce accurate results. Here are some example prompts for the DOCX Editor component:

> "Go to page 5, select the current paragraph, and make the text bold."

## RichTextEditor

The Syncfusion® Rich Text Editor component exposes **20 tools**, giving AI agents programmatic control over content, selection, formatting, block structure, links, tables, images, lists, dialogs, and editing actions. Explore the Syncfusion® Angular Rich Text Editor component with WebMCP integration through this [demo](https://demos.syncfusion.com/rich-text-editor-sdk/webmcp/index.html).

| Tool Name | Description |
|---|---|
| getContent | Reads the complete HTML content currently inside the Rich Text Editor. |
| getSelectedHtml | Reads the HTML content of the current selection. |
| selectAllContent | Selects all content inside the Rich Text Editor for full-document operations. |
| showDialog | Opens a built-in dialog for inserting or editing links, images, audio, video, or tables. |
| closeDialog | Closes a currently open built-in insertion or editing dialog. |
| insertContent | Inserts plain text or basic HTML at the cursor position, replacing the current selection if present. |
| formatSelectedContent | Applies inline formatting such as bold, italic, underline, strike-through, superscript, subscript, uppercase, lowercase, font color, background color, font name, or font size. |
| setBlockType | Changes the selected content or current line to a paragraph, heading, block quote, or plain preformatted block. |
| setTextAlignment | Applies left, center, right, or justified alignment to the selected content. |
| insertLink | Inserts a hyperlink at the cursor position or converts the selected text into a hyperlink. |
| insertTable | Inserts a table with the specified number of rows, columns, and optional width configuration. |
| insertImage | Inserts an image using a URL with optional alternative text, dimensions, and CSS classes. |
| undoLastAction | Reverts the most recent change made in the editor. |
| redoLastAction | Re-applies the most recent action that was undone. |
| clearFormatting | Removes inline formatting from the selected content and resets it to the default style. |
| printContent | Opens the browser print dialog for the Rich Text Editor content. |
| setCodeBlock | Inserts a syntax-highlighted code block for the specified programming language. |
| applyNumberedListFormat | Applies or removes numbered-list formatting using styles such as decimal, Roman numerals, or alphabetic numbering. |
| applyBulletedListFormat | Applies or removes bulleted-list formatting using disc, circle, or square bullet styles. |
| insertBR | Inserts a soft line break at the current cursor position without creating a new paragraph. |

### Example prompts

The effectiveness of WebMCP tools depends on the quality of the prompt provided to the AI assistant. Clear and specific instructions help the AI choose the appropriate tool and produce accurate results. Here are some example prompts for the Rich Text Editor component:

> "Read the complete content and summarize the document."

> "Convert the selected text into a level-two heading, center-align it, and make it bold."

> "Insert a three-column table with five rows at the current cursor position."

> "Add a hyperlink to the selected text using `https://www.syncfusion.com`."

> "Remove all inline formatting from the selected content."

## PDF Viewer

The Syncfusion® PDF Viewer component exposes **23 tools** that enable AI agents to navigate pages, search and extract text, inspect page metadata, manage form fields, inspect bookmarks, handle annotations, manage redactions, adjust viewing/zoom, print, download, and automate PDF document workflows. Explore the Syncfusion® Angular PDF Viewer component with WebMCP integration through this [demo](https://demos.syncfusion.com/pdf-viewer-sdk/webmcp/index.html).

| Tool Name | Description |
|---|---|
| navigateToPage | Navigates the PDF viewer to a specific page or steps next, previous, first, or last |
| searchAndNavigate | Finds text occurrences in the loaded document and jumps to the first match with bounding boxes |
| extractTextContent | Extracts text content from a single page or a specified page range for analysis |
| getPageMetadata | Retrieves structural metadata such as width, height, rotation, and total pages for a page |
| retrieveFormFields | Lists interactive form fields along with their properties, values, and required states |
| getBookmarksAndNavigate | Retrieves the bookmark hierarchy or navigates to a specific bookmark destination |
| addAnnotation | Adds a new annotation (text markup, shape, measurement, free text, stamp, ink, or sticky note) to a page |
| editAnnotation | Updates attributes, styling, content, or position of an existing annotation |
| retrieveAnnotations | Retrieves all annotations currently present in the PDF document along with the total count |
| deleteAnnotation | Removes one or more annotations from the document by their identifiers |
| addFormField | Inserts a new interactive form field (text box, checkbox, radio button, dropdown, signature, etc.) on a page |
| editFormField | Modifies the value, state, bounds, or properties of an existing form field |
| resetFormField | Resets form fields to their default values or clears them completely |
| deleteFormField | Permanently removes one or more form fields from the document |
| extractPages | Extracts specified pages from the document and loads them into a new PDF document |
| zoomAndView | Adjusts the zoom level using absolute values, increments/decrements, or fit modes (fitPage, fitWidth, fitHeight) |
| downloadDocument | Downloads the current PDF document to the client system |
| printDocument | Opens the print dialog to print the current PDF document |
| undoRedoActions | Steps backward (undo) or forward (redo) through the viewer edit history |
| addRedaction | Marks single regions, full pages, or search text results for redaction preview |
| updateRedaction | Modifies visual styles, fill color, font, or overlay text of a pending redaction marker |
| applyRedaction | Permanently burns all pending redactions into the PDF document |
| copyText | Copies the currently selected text in the PDF viewer to the system clipboard |

## Pivot Table

The Syncfusion® Pivot Table component exposes **23 tools**, giving AI agents full programmatic control over pivot data manipulation, analysis, formatting, and visualization. Explore the Syncfusion® Angular Pivot Table component with WebMCP integration through this [demo](https://demos.syncfusion.com/grid-sdk/pivot-table/webmcp/index.html).

| Tool Name | Description |
|-----------|--------------|
| setDataSource | Loads a new dataset (JSON, CSV, or URL) into the pivot table |
| addFieldToAxis | Adds a field to a specific axis (rows, columns, values, or filters) |
| removeFieldFromAxis | Removes a field from a specific axis |
| moveFieldBetweenAxes | Moves a field from one axis to another |
| applyFiltering | Applies member, label, date, number, or value filters to fields |
| applySorting | Sorts data by specific fields in ascending or descending order |
| applyValueSorting | Sorts data based on value measures rather than field names |
| clearAllFilters | Removes all applied filters to restore the complete dataset |
| applyConditionalFormatting | Applies visual formatting rules to highlight cells based on values |
| manageCalculatedField | Creates, updates, or deletes a calculated field using formulas |
| clearSorting | Clears all applied sorting to restore default ordering |
| clearConditionalFormatting | Removes all applied conditional formatting rules |
| clearNumberFormatting | Removes all applied number formatting |
| exportToExcel | Exports pivot table data to an Excel file |
| exportToPDF | Exports the pivot table to a PDF document |
| exportToCSV | Exports pivot table data to a CSV file |
| drillDownField | Expands a specific hierarchical field to reveal more detailed data |
| drillUpField | Collapses a specific hierarchical field to reveal summarized data |
| expandAllHeaders | Expands all hierarchical fields at once |
| collapseAllHeaders | Collapses all hierarchical fields at once |
| setChartType | Changes the visualization type of the pivot chart |
| toggleViewMode | Switches between table view, chart view, or both |
| applyNumberFormat | Applies number formatting (currency, percentage, grouping, etc.) to fields |

## Scheduler

The Syncfusion® Scheduler component exposes 5 tools, giving AI agents full programmatic control over events, view switching, and date navigation.

| Tool Name | Description |
| --- | --- |
| createEvent | Creates a new Scheduler event |
| updateEvent | Updates an existing Scheduler event. The event is identified using Subject and can be further narrowed down using StartTime and EndTime |
| deleteEvent | Deletes an existing Scheduler event. The event can be identified using Subject alone, or along with StartTime or EndTime |
| changeView | Changes the current Scheduler view |
| navigateDate | Navigates the Scheduler to a specific date |

## Spreadsheet

The Syncfusion® Spreadsheet component exposes **28 tools** across six categories, giving AI agents full programmatic control over data, formatting, structure, and visualizations. Explore the Syncfusion® Angular Spreadsheet component with WebMCP integration through this [demo](https://demos.syncfusion.com/spreadsheet-editor-sdk/webmcp/index.html).

| Tool Name | Description |
|---|---|
| getCellData | Returns the value, formula, display text, and optional format of a single cell |
| getRangeData | Returns cell values, formulas, and display text for a cell ranges (capped at 200 rows) |
| getSheetInfo | Returns structural metadata of a sheet — row count, column count, used range, and optional cell data |
| sheetList | Returns the ordered list of all sheet names in the workbook |
| evaluateFormula | Computes a formula expression and returns its result without writing to any cell |
| find | Searches a sheet or range for a value and returns all matching cell addresses |
| editCell | Writes a value or formula into a single cell |
| insertRowsColumns | Inserts one or more blank rows or columns at a specified position |
| deleteRowsColumns | Deletes one or more rows or columns at a specified position |
| insertSheet | Inserts one or more new blank sheets into the workbook at a given position |
| cut | Cuts a range to the internal clipboard, ready for paste |
| copy | Copies a range to the internal clipboard without removing source data |
| paste | Pastes the current clipboard content into the specified destination range |
| autofill | Extends a data pattern or series from a source range into an adjacent target range |
| findReplace | Finds all occurrences of a value in the active sheet and replaces them with a new value |
| formatCells | Applies visual formatting (bold, italic, font, color, background) to a range without changing values |
| setNumberFormat | Applies a named number format (Currency, Percentage, Date, etc.) to a range |
| addConditionalFormat | Adds a rule-based conditional formatting highlight that updates dynamically as values change |
| mergeCells | Merges a group of cells into one spanning cell |
| toggleWrap | Enables or disables text wrapping within cells of a range |
| sortRange | Reorders the rows of a range by the values in a specified column |
| filterRange | Applies a column filter to show only rows matching a condition, or clears an existing filter |
| addDataValidation | Attaches an input validation rule to a range to restrict what values can be entered |
| freezePanes | Freezes or unfreezes rows, columns, or both so they remain visible while scrolling |
| insertChart | Creates and inserts a chart bound to a data range into the active sheet |
| insertHyperlink | Inserts a clickable hyperlink into a cell with a display label |
| save | Opens the export dialog so the user can save the workbook in a chosen format (xlsx, csv, pdf, etc.) |
| undo | Reverses the last action performed on the spreadsheet |

### Example prompts

The effectiveness of WebMCP tools depends on the quality of the prompt provided to the AI assistant. Clear and specific instructions help the AI choose the appropriate tool and produce accurate results. Here are some example prompts for the Spreadsheet component:

> "Highlight all values in column B greater than 500 with a red background and white font."

> "Sort by sales amount, filter for items above $1000, highlight the top 10%, and insert a chart."

For best results, include specific column names, cell ranges, and conditions in your prompt.
