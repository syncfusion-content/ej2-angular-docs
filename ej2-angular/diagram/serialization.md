---
layout: post
title: Save and Load Diagrams in Angular Diagram component | Syncfusion®
description: Learn here all about Serialization in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Serialization 
documentation: ug
domainurl: ##DomainURL##
---

# Save and Load Diagrams in Angular Diagram Component

**Serialization** is the process of converting the diagram's current state into a storage format that can be saved and later restored. This feature ensures that all diagram elements, including nodes, connectors, and their configurations, persist across application sessions.

The serialization process converts the diagram into a JSON string format, which can be stored in databases, files, or other storage systems. When needed, this serialized data can be deserialized to recreate the diagram exactly as it was previously configured.

Use serialization when you need to:
- Save user-created diagrams for future editing
- Implement undo/redo functionality
- Create diagram templates
- Transfer diagrams between different sessions or users

To save and load the diagram in Angular, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=Cz_9NHZAFaY" %}

## Saving Diagrams

### Basic Save Operation

The [`saveDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#savediagram) method serializes the entire diagram configuration into a JSON string. This method captures all diagram elements, their properties, and the current state.

```typescript
//returns serialized string of the Diagram
saveData = this.diagram.saveDiagram();

```

The serialized JSON string can be stored in various storage systems. The following example demonstrates local storage implementation:

```typescript
//Saves the string in to local storage
localStorage.setItem('fileName', saveData);

// Retrieve the saved string from local storage
saveData = localStorage.getItem('fileName');

```

### Alternative Save Formats

The diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to the [`Print`](./print) and [`Export`](./export) sections.

## Loading Diagrams

### Basic Load Operation

The [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaddiagram) method recreates the diagram from serialized JSON data. This method accepts the previously saved JSON string as a parameter.

```typescript
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

The [`loaded`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaded) event triggers when all diagram elements finish loading through the [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaddiagram) method. Use this event to perform post-load customizations or validations.

```typescript

<ejs-diagram #diagram id="diagram" width="100%" height="700px" (loaded)="loaded()" >
</ejs-diagram>
export class AppComponent {
  public loaded(args:ILoadedEventArgs): void {
      //You can use this event to customize diagram elements during the loading process
  }
}

```

The loaded event provides the following arguments:

**name**
- Type: String
- Description: Returns the event name

**diagram**
- Type: Diagram
- Description: Returns the complete diagram model with all properties

## Optimizing Serialized Data

### Preventing Default Values

The [`preventDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/serializationSettingsModel/#preventdefaults) property within [`serializationSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/serializationSettingsModel/) reduces the size of serialized data by excluding default properties. This optimization improves performance when handling large diagrams or frequent save operations.

When enabled, only explicitly set properties are included in the JSON output, significantly reducing file size and improving load times.


```typescript

<ejs-diagram #diagram id="diagram" width="100%" height="700px" (serializationSettings)="serializationSettings" >
</ejs-diagram>
export class AppComponent {
  public serializationSettings: SerializationSettingsModel = {};
  
  ngOnInit() {
    this.serializationSettings = { preventDefaults: true };
  }
}

```


## File-Based Save and Load Operations

### Using Uploader Component

JSON files can be uploaded and processed using the uploader component. Configure the uploader with appropriate server endpoints to handle file operations, then parse the uploaded JSON data to load diagrams.

The uploader requires:
- `saveUrl` property for receiving and storing uploaded files
- `removeUrl` property for handling file deletion operations
- File parsing logic to extract JSON data from uploaded files

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

The [`Diagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/) component supports importing and exporting diagrams using Mermaid syntax. Mermaid is a markdown-inspired syntax for creating diagrams programmatically, enabling easy diagram creation and sharing across different platforms.

This functionality supports:
- Mind maps
- Flowcharts  
- UML sequence diagrams

### Saving Diagrams as Mermaid Syntax

The [`saveDiagramAsMermaid`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#savediagramasmermaid) method converts compatible diagrams into Mermaid syntax format. This method works specifically with Flowchart and Mind map layouts.

 ```typescript
//returns the serialized Mermaid string of the Diagram
data = this.diagram.saveDiagramAsMermaid();

```

### Loading Diagrams from Mermaid Syntax

The [`loadDiagramFromMermaid`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaddiagramfrommermaid) method creates diagrams from Mermaid syntax data, automatically generating the appropriate layout and styling.

#### Loading Flowchart Layout

The following example demonstrates loading a flowchart diagram from Mermaid syntax:

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

The following example demonstrates loading a mind map diagram from Mermaid syntax:

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

The following example demonstrates loading a UML Sequence diagram from Mermaid syntax:

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