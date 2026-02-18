---
layout: post
title: Editor Value in Angular Rich Text Editor component | Syncfusion
description: Learn how to manage editor content in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Editor value
documentation: ug
domainurl: ##DomainURL##
---

# Editor Value in Angular Rich Text Editor Component

The Angular Rich Text Editor allows flexible management of content through properties and methods for setting placeholders, retrieving values, and enabling two-way binding. This section explains how to configure and access the editor's content effectively.

## Set placeholder text

The [placeholder](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#placeholder) property specifies text displayed when the editor's content area is empty.

You can customize the placeholder's appearance by targeting the `e-rte-placeholder` class in your CSS. This allows you to modify properties such as font family, color, and other styles.

```typescript

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs18" %}

## Get and set value

**Setting Values**

Set initial content in the Rich Text Editor using one of these approaches:

* The [value](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#value) property directly sets the editor's content as a string.

* The `ng-template` as the [valuetemplate](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#valuetemplate) property allows you to customize the content of the Rich Text Editor.

**Retrieving Values**

To get the content from the Rich Text Editor, use the following approaches:

* Using the [value](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#value) property: This returns the current content of the editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/editor-value-cs1" %}

* Using the [change](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#change) event: The `change` event is triggered when the Rich Text Editor loses focus and its content has been modified. This event allows you to capture and handle content changes dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/editor-value-cs3" %}

## Two-way binding value

Two-way binding allows you to synchronize data between the component and the view. In the context of the Rich Text Editor, it enables you to keep the editor's content in sync with a property in your component.

To implement two-way binding with the Rich Text Editor, you can use the `[(value)]` directive. This allows you to bind the editor's value to a property in your component, ensuring that changes in either the component or the editor are reflected in both places.

Here's an example of how to implement two-way binding with the Rich Text Editor:

```typescript
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: 'app-root',
    template: `
        <h3>Editor 1</h3>
        <ejs-richtexteditor id="editor1" [(value)]="editorContent"></ejs-richtexteditor>
        <h3>Editor 2</h3>
        <ejs-richtexteditor id="editor2" [(value)]="editorContent"></ejs-richtexteditor>
    `,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
    public editorContent: string = 'Initial content';

    ngOnInit() {
        // You can update the content programmatically
        setTimeout(() => {
            this.editorContent = 'Updated content after 1 seconds';
        }, 1000);
    }
}
```
With this setup, any changes made in the Rich Text Editor will update the `editorContent` property, and any programmatic changes to `editorContent` will update the editor's content. This two-way binding ensures that your component always has the most up-to-date content from the editor, and vice versa.

## Auto save

The auto-save option in the Rich Text Editor allows the content to be automatically saved during idle periods after you have typed. Once this option is enabled, the editor will save the content based on the [saveInterval](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#saveinterval) property's value, which is specified in milliseconds.

The change event will be triggered if the content has been modified since the last saved state, ensuring consistent tracking of changes without manual intervention.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/editor-value-cs2" %}

## Programmatic content access

You can use the [getHtml](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#gethtml) public method to retrieve the Rich Text Editor content.

```typescript

  let editorValue: string = this.editorObj.getHtml();

```

To fetch the Rich Text Editor's text content, use [getText](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#gettext) method.

```typescript

  let editorValue: string = this.editorObj.getText();

```
## Encoded editor value

The [enableHtmlEncode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enablehtmlencode) property in the Rich Text Editor specifies whether the source code is displayed in an encoded format. Additionally, the [value](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#value) property also returns the content in an encoded format. This feature is particularly useful when you want to ensure that HTML content is displayed safely without being interpreted by the browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/editor-value-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/editor-value-cs4" %}

## Styling editor content

By default, the content styles of the Rich Text Editor are not included when retrieving the HTML value from the editor. This can result in the styles not being applied when using the HTML content outside of the editor. To ensure that the styles are correctly applied, you can copy and use the following styles directly in your application: These styles are used in the UI elements of the Rich Text Editor.

> Make sure to add a CSS class ‘e-rte-content’ to the content container.

```css

.e-rte-content p {
  margin: 0 0 10px;
  margin-bottom: 10px;
}

.e-rte-content li {
  margin-bottom: 10px;
}

.e-rte-content h1 {
  font-size: 2.17em;
  font-weight: 400;
  line-height: 1;
  margin: 10px 0;
}

.e-rte-content h2 {
  font-size: 1.74em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h3 {
  font-size: 1.31em;
  font-weight: 400;
  margin: 10px 0;
}

.e-rte-content h4 {
  font-size: 1em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h5 {
  font-size: 00.8em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content h6 {
  font-size: 00.65em;
  font-weight: 400;
  margin: 0;
}

.e-rte-content blockquote {
  margin: 10px 0;
  margin-left: 0;
  padding-left: 5px;
}

.e-rte-content pre {
  background-color: inherit;
  border: 0;
  border-radius: 0;
  color: #333;
  font-size: inherit;
  line-height: inherit;
  margin: 0 0 10px;
  overflow: visible;
  padding: 0;
  white-space: pre-wrap;
  word-break: inherit;
  word-wrap: break-word;
}

.e-rte-content strong, .e-rte-content b {
  font-weight: 700;
}

.e-rte-content a {
  text-decoration: none;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

.e-rte-content a:hover {
  text-decoration: underline;
}

.e-rte-content h3 + h4,
.e-rte-content h4 + h5,
.e-rte-content h5 + h6 {
  margin-top: 00.6em;
}

.e-rte-content .e-rte-image.e-imgbreak {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image {
  border: 0;
  cursor: pointer;
  display: block;
  float: none;
  margin: auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imginline {
  display: inline-block;
  float: none;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  vertical-align: bottom;
}

.e-rte-content .e-rte-image.e-imgcenter {
  cursor: pointer;
  display: block;
  float: none;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-image.e-imgleft {
  float: left;
  margin: 0 5px 0 0;
  text-align: left;
}

.e-rte-content .e-rte-image.e-imgright {
  float: right;
  margin: 0 0 0 5px;
  text-align: right;
}

.e-rte-content .e-rte-img-caption {
  display: inline-block;
  margin: 5px auto;
  max-width: 100%;
  position: relative;
}

.e-rte-content .e-rte-img-caption.e-caption-inline {
  display: inline-block;
  margin: 5px auto;
  margin-left: 5px;
  margin-right: 5px;
  max-width: calc(100% - (2 * 5px));
  position: relative;
  text-align: center;
  vertical-align: bottom;
}

.e-rte-content .e-rte-img-caption.e-imgcenter {
  display: block;
}

.e-rte-content .e-rte-img-caption .e-rte-image.e-imgright,
.e-rte-content .e-rte-img-caption .e-rte-image.e-imgleft {
  float: none;
  margin: 0;
}

.e-rte-content .e-rte-table {
  border-collapse: collapse;
  empty-cells: show;
}

.e-rte-content .e-rte-table td,
.e-rte-content .e-rte-table th {
  border: 1px solid #bdbdbd;
  height: 20px;
  min-width: 20px;
  padding: 2px 5px;
  vertical-align: middle;
}

.e-rte-content .e-rte-table.e-dashed-border td,
.e-rte-content .e-rte-table.e-dashed-border th {
  border-style: dashed;
}

.e-rte-content .e-rte-img-caption .e-img-inner {
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  font-weight: initial;
  margin: auto;
  opacity: .9;
  position: relative;
  text-align: center;
  width: 100%;
}

.e-rte-content .e-rte-img-caption .e-img-wrap {
  display: inline-block;
  margin: auto;
  padding: 0;
  width: 100%;
}

.e-rte-content blockquote {
  border-left: solid 2px #333;
}

.e-rte-content a {
  color: #2e2ef1;
}

.e-rte-content .e-rte-table th {
  background-color: #e0e0e0;
}

```

## Character count

The Character Count feature in the Rich Text Editor allows you to track and display the number of characters entered in the editor. This feature is particularly useful when you need to limit the content length or provide visual feedback to users about their input.

### How to enable character count

To enable the character count feature, set the [showCharCount](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#showcharcount) property to `true` (default: `false`) to display the character count in the bottom-right corner of the editor.

>To use quick `Character Count` feature, configure `CountService` in the provider section.

### Understanding character count color indicators

The character count color changes based on the content length relative to the [maxLength](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#maxlength) property:

| Status | Description |
|---------|----------------|
| Normal | Black until 70% of `maxLength` is reached. |
| Warning | Orange when 70% of `maxLength` is reached, indicating the limit is approaching. |
| Error | Red when 90% of `maxLength` is reached, signaling the limit is nearly reached. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs19/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs19" %}

### Setting maximum character limit

You can restrict the number of characters entered in the editor by setting the  [maxLength](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#maxlength) property to a specific numeric value. When set, the maximum allowable character count is displayed alongside the current count at the bottom right of the editor.

If `maxLength` is not set, there is no limit to the character count in the editor.

### Retrieving character count programmatically

You can programmatically get the current character count in the editor using the [getCharCount](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#getcharcount) public method.

```typescript

  let editorCount: number = this.editor.getCharCount();

```

## Source code editing

The Rich Text Editor enables you to directly edit HTML code through the `Source View` in the text area. Any changes you make in Source view are immediately reflected in the editor's content, giving you greater flexibility and control over your work.
The source code is presented with enhanced formatting and consistent indentation for both block-level and inline HTML elements, resulting in a cleaner, more readable, and user-friendly editing experience.

>While the visual alignment of the source code is improved, the editor's underlying value remains unchanged.

### Configuring source code tool in the toolbar

You can add the `SourceCode` tool in the Rich Text Editor using the [toolbarSettings.items](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarSettings/#items) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/code-view-support-cs1" %}

>This functionality can also be enabled through the use of the [CodeMirror](https://codemirror.net/) plugin. It helps to highlight the HTML content and ensures that any modifications in the code view are instantly reflected in the preview mode.

The Rich Text Editor provides the [`showSourceCode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#showsourcecode) method, which allows you to toggle programmatically between the code view and the formatted text view. When invoked, this method switches the editor’s view to the opposite state.

## See also

* [Customizing the placeholder in Styles](./style#customizing-placeholder-text)
* [Implementing Prevention of cross-site scripting (XSS)](./xhtml-validation#cross-site-scripting-xss)
* [Integrating Code-Mirror for Enhanced Syntax Highlighting](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/third-party-integration#codemirror-integration)