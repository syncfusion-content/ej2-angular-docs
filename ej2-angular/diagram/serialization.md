---
layout: post
title: Serialization in Angular Diagram component | Syncfusion
description: Learn here all about Serialization in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Serialization 
documentation: ug
domainurl: ##DomainURL##
---

# Serialization in Angular Diagram component

**Serialization** is the process of converting the state of the diagram into a format that can be saved and later restored. This ensures that the diagram's current state, including its nodes, connectors, and configurations, can be persisted across sessions.

Serialization involves saving the diagram's state as a JSON string, which can then be stored in a database, file, or other storage medium. When needed, the serialized string can be deserialized to recreate the diagram in its previous state.

To save and load the diagram in Angular, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=Cz_9NHZAFaY" %}

## Save

The diagram method [`saveDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#savediagram), helps to serialize the diagram as a string. This method captures the entire diagram's configuration and content, converting it into a string representation.

The following code illustrates how to save the diagram:

```typescript
//returns serialized string of the Diagram
saveData = this.diagram.saveDiagram();

```

This JSON string can be stored in local storage for future use. The following code illustrates how to save the serialized string into local storage and how to retrieve it:

```typescript
//Saves the string in to local storage
localStorage.setItem('fileName', saveData);

// Retrieve the saved string from local storage
saveData = localStorage.getItem('fileName');

```

The diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to the [`Print`](./print) and [`Export`](./export) section.

## Load

The diagram can be loaded from serialized string data using the [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaddiagram) method. The saved string should be passed as the parameter of the loadDiagram method. The following code illustrates how to load the diagram from serialized string data:

```typescript

/*
 * Loads the diagram from saved JSON data.
 * parameter 1 - The string representing the diagram model JSON to be loaded.
 * parameter 2 - Whether it is ej1 data or not (optional)
 */
this.diagram.loadDiagram(saveData);

```

>Note: Before loading a new diagram, existing diagram is cleared.

## Loaded Event

The [`loaded`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaded) event triggers when all diagram elements are loaded using [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaddiagram) method. You can use this event to customize diagram elements during the loading process.

```typescript

<ejs-diagram #diagram id="diagram" width="100%" height="700px" (loaded)="loaded()" >
</ejs-diagram>
export class AppComponent {
  public loaded(args:ILoadedEventArgs): void {
      //You can use this event to customize diagram elements during the loading process
  }
}

```

The event has two arguments such as name, diagram

**name**

Type: String

Description: Returns the event name.

**diagram**

Type: Diagram

Description: Returns the diagram model properties.

Users can perform customizations or modifications to the diagram elements once the loading process is complete.

## Prevent default values

The [`preventDefaults`](https://ej2.syncfusion.com/angular/documentation/api/diagram/serializationSettingsModel/#preventdefaults) property of [`serializationSettings`](https://ej2.syncfusion.com/angular/documentation/api/diagram/serializationSettingsModel/) is used to simplify the saved JSON object by excluding default properties that are inherent to the diagram. This helps reduce the size of the serialized data and improves efficiency when saving and loading diagrams.

By enabling preventDefaults, only properties that you set in diagram are included in the serialized JSON object. This optimization is useful for scenarios where minimizing data size is crucial, such as in applications with large diagrams or when optimizing network transfers.

The following code illustrates how to enable the preventDefaults property to simplify the JSON object:


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


## Save and load diagram using uploader control

The JSON files can be uploaded using the uploader component, where they are parsed to extract the JSON data they contain. To achieve this, configure the uploader component with the saveUrl property to receive uploaded files and store them on the server. Similarly, use the removeUrl property to handle file removal operations on the server.

When a JSON file is uploaded, it undergoes parsing to extract its JSON data. This data is then loaded into the diagram using the [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaddiagram) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/serialisation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/serialisation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/serialisation-cs1" %}


## Importing and Exporting Mind Map and Flowchart Diagrams using Mermaid Syntax

The [`Diagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/) supports saving diagrams in Mermaid syntax format. Mermaid is a Markdown-inspired syntax that automatically generates diagrams. With this functionality, you can easily create mind maps and flowcharts from Mermaid syntax data, simplifying the visualization of complex ideas and processes without manual drawing. Additionally, you can export your mind maps and flowcharts to Mermaid syntax, allowing for easy sharing, editing, and use across different platforms.

### Save diagram as Mermaid syntax

 The [`saveDiagramAsMermaid`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#savediagramasmermaid) method serializes the diagram into a Mermaid-compatible string format. This method is specifically designed for diagrams that utilize Flowchart and Mind map layouts. The following code illustrates how to save the diagram in Mermaid string format.

 ```typescript
//returns the serialized Mermaid string of the Diagram
data = this.diagram.saveDiagramAsMermaid();

```

### Load diagram from Mermaid syntax

You can load a [diagram](https://ej2.syncfusion.com/angular/documentation/api/diagram/) from the serialized Mermaid syntax data using the [`loadDiagramFromMermaid`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#loaddiagramfrommermaid) method. The following code illustrates how to load a diagram from a Mermaid string data.

#### Load flowchart layout

The following example shows how to load flowchart diagram from mermaid syntax.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/serialisation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/serialisation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/serialisation-cs2" %}

#### Load mindmap layout

The following example shows how to load mind map diagram from mermaid syntax.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/serialisation-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/serialisation-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/serialisation-cs3" %}


>Note: Mermaid syntax data serialization and deserialization are only supported for Flowchart and Mind map layouts. Please ensure that your diagram uses one of these layouts to successfully load the data.