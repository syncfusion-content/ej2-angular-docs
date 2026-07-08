---
layout: post
title: Tab component in Rich text editor component | Syncfusion
description: Learn about tab integration in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: tab
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Tab component into the Angular Rich Text Editor

The integration of Tab component with Rich Text Editor component offers versatile functionality for content management scenarios. Users can leverage this combination for multi-document editing where different tabs contain separate RTE instances, allowing simultaneous work on multiple content pieces without context switching.

## Prerequisites
Before proceeding, complete the base Rich Text Editor setup described in the Getting Started guide. The guide covers angular CLI setup, package installation, CSS imports, module injection, and basic editor markup: [Getting Started with angular Rich Text Editor](getting-started.md).

## Key features

- Provides organized content display – Tabs group different sections of the editor (e.g., formatting options, media insertion, code view) neatly, reducing clutter.
- Provides scalability – New features or plugins can be added as separate tabs without disrupting the existing editor layout.
- Offers consistency across UI – Tabs establish a familiar navigation pattern, aligning with modern UI/UX practices and making the editor intuitive.

## Setup the Tab Component

Install the Tabs package if not present:

```bash
npm install @syncfusion/ej2-angular-navigations
```

## Configure Tab component for the Rich Text Editor

Step 1: Import packages and providers
Import TabModule together with RichTextEditorModule and provide the editor services in the component:

``` typescript
import { TabModule } from '@syncfusion/ej2-angular-navigations'
```


Step 2: Configure Tabs and RTE

``` html
<ejs-tab>
  <e-tabitems>
    <e-tabitem>
      <ng-template #headerText>
        <div> RichTextEditor Tab 1 </div>
      </ng-template>
      <ng-template #content>
        <ejs-richtexteditor></ejs-richtexteditor>
      </ng-template>
    </e-tabitem>
    <e-tabitem>
      <ng-template #headerText>
        <div> RichTextEditor Tab 2 </div>
      </ng-template>
      <ng-template #content>
        <ejs-richtexteditor></ejs-richtexteditor>
      </ng-template>
    </e-tabitem>
  </e-tabitems>
</ejs-tab>
```
> Note: It is recommended to use ng-template inside the tab component for smooth rendering of the rich text editor.

## Example for tab integration

Below is the example integration of tab with the Angular Rich Text Editor.

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/tab-integration/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/tab-integration/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor/tab-integration/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/tab-integration" %}

## Additional resources

- GitHub Repository: [Angular Rich Text Editor with Tab Component](https://github.com/SyncfusionExamples/angular-richtexteditor-tab-integration)
- Syncfusion Tab getting started: https://ej2.syncfusion.com/angular/documentation/tab/getting-started
- Syncfusion Tab API: https://ej2.syncfusion.com/angular/documentation/tab/mention/  
- Syncfusion Rich Text Editor API: https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/