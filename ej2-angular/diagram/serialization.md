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

**Serialization** is the process of saving and loading for state persistence of the diagram.

To save and load the diagram in Angular, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=Cz_9NHZAFaY" %}

## Save

The diagram is serialized as string while saving. The client-side method, [`saveDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram#saveDiagram) helps to serialize the diagram as a string. The following code illustrates how to save the diagram.

```typescript
//returns serialized string of the Diagram
saveData = this.diagram.saveDiagram();

```

This string can be converted to JSON data and stored for future use. The following snippet illustrates how to save the serialized string into local storage.

```typescript
//Saves the string in to local storage
localStorage.setItem('fileName', saveData);
saveData = localStorage.getItem('fileName');

```

Diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to `Print and Export`.

## Load

Diagram is loaded from the serialized string data by client-side method, [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram#loadDiagram).

The following code illustrates how to load the diagram from serialized string data.

```typescript

//Loads the Diagram from saved json data
this.diagram.loadDiagram(saveData);

```

>Note: Before loading a new diagram, existing diagram is cleared.

## Loaded Event

The [`loaded`](https://ej2.syncfusion.com/angular/documentation/api/diagram#loaded) event triggers when all diagram elements are loaded using [`loadDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram#loadDiagram) method. You can use this event to customize diagram elements during the loading process.

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

The diagram provides supports to simplifying the saved JSON object without adding the default properties that are presented in the diagram.

The following code illustrates how to simplify the JSON object.

```typescript
let diagram: Diagram = new Diagram({
 serializationSettings: { preventDefaults: true },
});

```