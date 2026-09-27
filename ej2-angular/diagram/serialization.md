---
layout: post
title: Serialization in Angular Diagram | Syncfusion®
description: Save the Angular Diagram to a JSON string and load it back later to persist user-created diagrams, implement undo/redo, or transfer diagrams between sessions.
platform: ej2-angular
control: Serialization 
documentation: ug
domainurl: ##DomainURL##
---

# Serialization in Angular Diagram

**Serialization** is the process of converting the diagram's current state into a storage format that can be saved and later restored. This feature ensures that all diagram elements, including nodes, connectors, and their configurations, persist across application sessions.

The serialization process converts the diagram into a JSON string format, which can be stored in databases, files, or other storage systems. When needed, this serialized data can be deserialized to recreate the diagram exactly as it was previously configured.

Use serialization when you need to:
- Save user-created diagrams for future editing
- Implement undo/redo functionality
- Create diagram templates
- Transfer diagrams between different sessions or users

To save and load the diagram in Angular, refer to the following video link.

{% youtube "youtube:https://www.youtube.com/watch?v=Cz_9NHZAFaY" %}

## Saving Diagrams

### Basic Save Operation

The [`saveDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram#savediagram) method serializes the entire diagram configuration into a JSON string. This method captures all diagram elements, their properties, and the current state.

```
export class AppComponent {
  @ViewChild('diagram', { static: true }) diagram: DiagramComponent;
  public saveData: string;
  saveDiagram(): void { 
    // Returns the serialized string of the Diagram 
    this.saveData = this.diagram.saveDiagram();
  }
}
```

The serialized JSON string can be stored in various storage systems. The following example demonstrates local storage implementation:

```
// Saves the string into local storage
localStorage.setItem('fileName', this.saveData);

// Retrieve the saved string from local storage
this.saveData = localStorage.getItem('fileName') ?? '';

```

### Alternative Save Formats

The diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to the [`Print`](./print) and [`Export`](./export) sections.

## Loading Diagrams

### Basic Load Operation

The [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram#loaddiagram) method recreates the diagram from serialized JSON data. This method accepts the previously saved JSON string as a parameter.

```
export class AppComponent {
  @ViewChild('diagram', { static: true }) diagram: DiagramComponent;
  
  loadDiagram(): void {
    const savedData: string = localStorage.getItem('diagramData');
    
    if (savedData) {
      /*
       * Loads the diagram from saved JSON data.
       * parameter 1 - The string representing the diagram model JSON to be loaded.
       * parameter 2 - Whether it is ej1 data or not (optional)
       */
      this.diagram.loadDiagram(savedData);
      console.log('Diagram loaded successfully');
    } else {
      console.warn('No saved diagram data found');
    }
  }
}
```

N> Before loading a new diagram, the existing diagram content is automatically cleared.

### Handling Load Completion

The [`loaded`](https://ej2.syncfusion.com/angular/documentation/api/diagram#loaded) event triggers when all diagram elements finish loading through the [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram#loaddiagram) method. Use this event to perform post-load customizations or validations.

```
import { ILoadedEventArgs } from '@syncfusion/ej2-angular-diagrams';

<ejs-diagram #diagram id="diagram" width="100%" height="700px" (loaded)="loaded($event)" >
</ejs-diagram>
export class AppComponent {
  public loaded(args: ILoadedEventArgs): void {
      // You can use this event to customize diagram elements during the loading process
  }
}

```

The loaded event provides the following arguments:

| Argument | Type | Description |
| --- | --- | --- |
| name | String | Returns the event name |
| diagram | Diagram | Returns the complete diagram model with all properties |

## Optimizing Serialized Data

### Preventing Default Values

The [`preventDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/serializationSettingsModel#preventdefaults) property within [`serializationSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/serializationSettingsModel) reduces the size of serialized data by excluding default properties. This optimization improves performance when handling large diagrams or frequent save operations.

When enabled, only explicitly set properties are included in the JSON output, significantly reducing file size and improving load times.


```
import { SerializationSettingsModel } from '@syncfusion/ej2-angular-diagrams';

<ejs-diagram #diagram id="diagram" width="100%" height="700px" [serializationSettings]="serializationSettings" >
</ejs-diagram>
export class AppComponent {
  public serializationSettings: SerializationSettingsModel = { preventDefaults: true };
}
```

## Detect Unsaved Changes

The [`isModified`](https://ej2.syncfusion.com/angular/documentation/api/diagram#ismodified) property indicates whether the diagram has unsaved changes. It becomes **true** when the diagram is changed, such as when nodes, connectors, or diagram properties are updated, or when undo and redo actions are performed.

This property can be used to show save indicators or to display a warning before unsaved changes are discarded.


```
// Check whether the diagram has unsaved changes.
if (this.diagram.isModified) {
    const confirmed = confirm('You have unsaved changes. Discard them?');
    if (!confirmed) return;
}
// Replace the route path below with your application's target route.
this.router.navigate(['/home']);
```

N> This example is illustrative. Replace `['/home']` with the route path your application navigates to before discarding changes.

## File-Based Save and Load Operations

### Using Uploader Component

JSON files can be uploaded and processed using the uploader component. Configure the uploader with the appropriate server endpoints to handle file operations. Then parse the uploaded JSON data to load the diagrams.

The uploader requires:
- `saveUrl` property for receiving and storing uploaded files
- `removeUrl` property for handling file deletion operations
- File parsing logic to extract JSON data from uploaded files

A typical parsing step is wired to the Uploader's `success` event. The raw `File` is read with a `FileReader` and the resulting JSON string is passed to `loadDiagram`:

```
onUploadSuccess(args: { file: FileInfo }) {
  // rawFile is the underlying File object provided by the Uploader component
  const file: File = args.file.rawFile as File;
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = this.loadDiagram.bind(this);
}

loadDiagram(event: ProgressEvent<FileReader>) {
  const jsonString = event.target?.result as string;
  this.diagram.loadDiagram(jsonString);
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/serialisation/serialisation-cs1" %}

## Mermaid Syntax Integration

### Overview

The [`Diagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram) component supports importing and exporting diagrams using Mermaid syntax. Mermaid is a markdown-inspired syntax for creating diagrams programmatically, enabling easy diagram creation and sharing across different platforms.

This functionality supports:
- Mind maps
- Flowcharts  
- UML sequence diagrams

### Saving Diagrams as Mermaid Syntax

The [`saveDiagramAsMermaid`](https://ej2.syncfusion.com/angular/documentation/api/diagram#savediagramasmermaid) method converts compatible diagrams into Mermaid syntax format. This method works specifically with Flowchart and Mind map layouts. Call `saveDiagramAsMermaid()` after building a Flowchart or Mind map diagram to obtain the Mermaid string.

```
// Returns the serialized Mermaid string of the Diagram
data = this.diagram.saveDiagramAsMermaid();
```

### Loading Diagrams from Mermaid Syntax

The [`loadDiagramFromMermaid`](https://ej2.syncfusion.com/angular/documentation/api/diagram#loaddiagramfrommermaid) method creates diagrams from Mermaid syntax data, automatically generating the appropriate layout and styling.

```
this.diagram.loadDiagramFromMermaid(mermaidString);
```

#### Loading Flowchart Layout

The following example demonstrates loading a flowchart diagram from Mermaid syntax, where nodes and connectors are arranged automatically based on the Mermaid flow statements:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/serialisation/serialisation-cs2" %}

#### Loading Mind Map Layout

The following example demonstrates loading a mind map diagram from Mermaid syntax, generating a radially arranged hierarchy of nodes from the Mermaid mind-map statements:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/serialisation/serialisation-cs3" %}

#### Loading UML Sequence Diagram

The following example demonstrates loading a UML Sequence diagram from Mermaid syntax, rendering participants and messages as sequence lanes and arrows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/serialisation/serialisation-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/serialisation/serialisation-cs4" %}

N> Mermaid syntax-based serialization and deserialization supports only Flowchart layout, Mind map layout, and UML Sequence Diagram. Ensure that your Mermaid data aligns with one of these supported layouts for successful diagram loading.