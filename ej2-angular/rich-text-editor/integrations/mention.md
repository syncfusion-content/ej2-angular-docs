---
layout: post
title: Mention in Angular Rich Text Editor component | Syncfusion
description: Learn how to integrate and customize the Mention in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Mentions
documentation: ug
domainurl: ##DomainURL##
---


# Integrate Mention component into the Angular Rich Text Editor

The Mention component enables tagging within the Rich Text Editor by linking its suggestion list to the editor’s editable area. It leverages the Syncfusion Mention component to offer inline suggestions and insert the chosen tags.

## Prerequisites

Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers Angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with Angular Rich Text Editor](../getting-started.md).

## Key features

- Provides inline mention suggestions directly inside editable area.
- Supports both local arrays and remote data sources for loading mention suggestions.
- Allows customizing the popup appearance using item templates and display templates.
- Offers flexible configuration options such as minLength, suggestionCount, and allowSpaces to control search behavior and suggestion filtering.

## Set up the Mention component

Install the Syncfusion Mention package using the following command:

```bash
npm install @syncfusion/ej2-angular-dropdowns
```
## Configure Mention Component for the Rich Text Editor

Follow the steps below to set up the Mention component inside the Syncfusion Angular Rich Text Editor.

### Step 1: Configure Mention Target
Link the Mention component to the Rich Text Editor’s editable area by setting the target property.
The Rich Text Editor automatically appends `_rte-edit-view` to its editable element ID.
This ensures that the Mention popup appears at the correct cursor position inside the editor.

```html
<ejs-mention target="#YourRTEID_rte-edit-view"></ejs-mention>
```
### Step 2: Configure Data Source

Provide the list of items that should appear in the suggestion popup.

```typescript
public userData = [
  { id: 1, name: 'Andrew Fuller' },
  { id: 2, name: 'Anne Dodsworth' }
];
```
Bind the data source to the Mention component:
```html
<ejs-mention [dataSource]="userData"></ejs-mention>
```

### Step 3: Configure Fields

Map your data model fields to define how items are displayed and what value is inserted into the editor content.

```typescript
public fields = { text: 'name', value: 'id' };
```

```html
<ejs-mention [fields]="fields"></ejs-mention>
```

### Step 4: Configure Item Template

Use the itemTemplate to customize how each suggestion item is displayed in the Mention popup. This allows you to show additional details such as avatar initials, name, and email in a structured layout.

```html
<ejs-mention #editorMention>
    <ng-template #itemTemplate let-data>
        <div class="editor-mention-item-template">
            <div class="em-header">
                <div class="em-avatar" [ngStyle]="{ 'background-color': data.bgColor, 'color': data.color}">
                    <div class="em-initial">{{data.initial}}</div>
                </div>
            </div>
            <div class="em-content">
                <div class="em-name">{{data.name}}</div>
                <div class="em-email">{{data.email}}</div>
            </div>
        </div>
    </ng-template>
</ejs-mention>
```

### Step 5: Configure Display Template
Use displayTemplate to customize how the selected mention appears when inserted into the Rich Text Editor content.

```html
<ng-template #displayTemplate let-data>
    <a href=mailto:{{data.email}} title={{data.email}}>&#64;{{data.name}}</a>
</ng-template>
```
### Step 6: Configure suffixText
It is suggested to use the suffixText property to add a space after the inserted mention, which helps maintain a smooth typing flow in the Rich Text Editor.

```html
<ejs-mention suffixText="&nbsp;"></ejs-mention>
```

### Example: Integrate with syncfusion Rich Text Editor (app.ts)

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor/Integrations/mention-integration/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/Integrations/mention-integration/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="app.css" %}
{% include code-snippet/rich-text-editor/Integrations/mention-integration/src/app.css %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor/Integrations/mention-integration/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/Integrations/mention-integration" %}

## Using remote data with Mention in Rich Text Editor

You can bind Mention to a remote data source so suggestions are fetched from your server as the user types. Use Syncfusion's DataManager + Query (with a suitable adaptor such as WebApiAdaptor) as the Mention dataSource.

### Install the DataManager package used for remote data operations:

Install the Syncfusion Data package required for remote data binding:

```bash
npm install @syncfusion/ej2-data
```
Then import the required classes in your component:

```typescript
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
```
### Example: Integrate remote data with syncfusion Rich Text Editor (app.ts)

> Note: When using DataManager with WebApiAdaptor, the server must return a JSON object containing:
result – an array of data items (paged or filtered)
count – the total number of records before paging

#### Example response returned from the backend:

```json
{
  "result": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
  ],
  "count": 25
}
```
This structure is required because WebApiAdaptor expects the data array in result and the total record count in count to properly handle paging, searching, and filtering.
#### Backend payload reference

```typescript

var payload = new
{
    result = filtered.Skip(Math.Max(skip, 0)).Take(Math.Max(top, 0)),
    count = filtered.Count
};
return Ok(payload);
```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/rich-text-editor/Integrations/mention-remote-data/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/Integrations/mention-remote-data/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor/Integrations/mention-remote-data/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/Integrations/mention-remote-data" %}

## Additional resources

- GitHub Repository: [Angular Rich Text Editor integrations samples](https://github.com/SyncfusionExamples/angular-richtexteditor-mention/tree/master)
- Syncfusion Mention getting started: https://ej2.syncfusion.com/angular/documentation/mention/getting-started/  
- Syncfusion Mention API: https://ej2.syncfusion.com/angular/documentation/api/mention/  
- Syncfusion Rich Text Editor API: https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/