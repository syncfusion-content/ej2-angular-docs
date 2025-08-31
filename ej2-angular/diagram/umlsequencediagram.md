---
layout: post
title: UML Sequence Diagram in Angular Diagram component | Syncfusion®
description: Learn how to create and customize UML sequence diagrams in Syncfusion® Angular Diagram component with participants, messages, activation boxes, and fragments.
platform: ej2-angular
control: UmlSequenceDiagram 
documentation: ug
domainurl: ##DomainURL##
---

# UML Sequence Diagram in Angular Diagram Component

A UML sequence diagram is a type of interaction diagram that visualizes how objects communicate with each other over time. These diagrams show the sequence of messages exchanged between participants, making them essential for understanding system interactions, API workflows, and process flows.

The Syncfusion® Angular Diagram component provides comprehensive support for creating and visualizing UML sequence diagrams through the [UmlSequenceDiagramModel](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlSequenceDiagramModel/). This specialized model enables the creation of sequence diagrams with proper UML notation and automated layout capabilities.

## Prerequisites

Before creating UML sequence diagrams, ensure that:
- Angular development environment is set up
- Syncfusion Angular Diagram package is installed and imported
- Basic familiarity with UML sequence diagram concepts

## Key Concepts

### Lifelines
Lifelines are vertical dashed lines that represent the existence of a participant over time. Each participant has a corresponding lifeline that extends downward from the participant box.

### Sequence Flow
Messages flow horizontally between lifelines in chronological order from top to bottom, representing the temporal sequence of interactions.

## UML Sequence Diagram Elements

A sequence diagram comprises several essential elements that work together to represent system interactions. The following sections demonstrate how to define and configure these components.

### Participants

[UmlSequenceParticipantModel](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlSequenceParticipantModel/) represents the entities that participate in the interaction sequence. Participants appear as rectangular boxes at the top of the diagram, with lifelines extending vertically downward to show their existence throughout the interaction timeline.

#### Participant Types

Participants can be displayed in two forms:
- **Actors**: Human users or external systems (displayed with stick figure notation)
- **Objects**: System components, classes, or services (displayed as rectangular boxes)

#### UmlSequenceParticipantModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the participant |
| content | string | The display text for the participant |
| isActor | boolean | Specifies whether the participant is displayed as an actor (true) or an object (false) |
| showDestructionMarker | boolean | Indicates whether a destruction marker (X) is shown at the end of the lifeline |
| activationBoxes | UmlSequenceActivationBoxModel[] | A collection of activation boxes associated with the participant |

#### Creating Participants

The following code example demonstrates how to create different types of participants:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umlsequencediagram/umlsequencediagram-1" %}

### Messages

[UmlSequenceMessageModel](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlSequenceMessageModel/) represents communication between participants. Messages are displayed as arrows connecting lifelines and indicate the flow of information or requests between system components.

#### Message Types and Usage

Different message types serve specific purposes in sequence diagrams:

| Message Type | Description | When to Use | Example |
|---|---|---|---|
| Synchronous | The sender waits for a response before continuing | Method calls, API requests requiring immediate response | ![Synchronous Message](./images/umlSequenceDiagram-images/Synchronous.png) |
| Asynchronous | The sender continues without waiting for a response | Event notifications, fire-and-forget operations | ![Asynchronous Message](./images/umlSequenceDiagram-images/Asynchronous.png) |
| Reply | A response message to a previous synchronous call | Return values, acknowledgments | ![Reply Message](./images/umlSequenceDiagram-images/Reply.png) |
| Create | Creates a new participant instance during execution | Object instantiation, service initialization | ![Create Message](./images/umlSequenceDiagram-images/Create.png) |
| Delete | Terminates a participant and ends its lifeline | Object destruction, service shutdown | ![Delete Message](./images/umlSequenceDiagram-images/Delete.png) |
| Self | A message from a participant to itself | Internal processing, recursive calls | ![Self Message](./images/umlSequenceDiagram-images/Self.png) |

#### UmlSequenceMessageModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the message |
| content | string | The display text for the message |
| fromParticipantID | string \| number | ID of the participant sending the message |
| toParticipantID | string \| number | ID of the participant receiving the message |
| type | UmlSequenceMessageType | Type of the message (Synchronous, Asynchronous, Reply, Create, Delete, Self) |

#### Creating Messages

The following example shows how to create different types of messages between participants:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umlsequencediagram/umlsequencediagram-2" %}

### Activation Boxes

[UmlSequenceActivationBoxModel](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlSequenceActivationBoxModel/) represents periods when a participant is actively processing or executing operations. Activation boxes appear as thin rectangles overlaid on participant lifelines, indicating the duration of active processing between specific messages.

#### UmlSequenceActivationBoxModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the activation box |
| startMessageID | string \| number | ID of the message that initiates the activation |
| endMessageID | string \| number | ID of the message that terminates the activation |

#### Creating Activation Boxes

The following example demonstrates how to create activation boxes that span specific message sequences:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umlsequencediagram/umlsequencediagram-3" %}

### Fragments

[UmlSequenceFragmentModel](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlSequenceFragmentModel/) represents logical groupings of messages based on specific conditions or control structures. Fragments appear as rectangular enclosures that visually organize conditional logic, loops, and alternative execution paths within sequence diagrams.

#### Fragment Applications

Fragments are essential for modeling:
- Conditional logic (if-then-else statements)
- Iterative processes (loops and repetitions)
- Optional operations that may or may not execute
- Error handling and exception flows
- Parallel processing scenarios

#### Fragment Types

The [UmlSequenceFragmentType](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlSequenceFragmentType/) enum defines the following fragment types:

| Fragment Type  | Description  | Use Cases | Example  |  
|---------------|-------------|-----------|--------|  
| Optional  | Executes enclosed messages only if a specified condition is met | Feature toggles, optional validations, conditional processing | ![Optional Fragment](./images/umlSequenceDiagram-images/OptFragment.png) |  
| Alternative | Provides multiple conditional paths where only one executes based on the condition | Decision trees, error handling, branching logic | ![Alternative Fragment](./images/umlSequenceDiagram-images/AltFragment.png) |  
| Loop | Repeats the enclosed message sequence based on a loop condition | Data processing iterations, retry mechanisms, batch operations | ![Loop Fragment](./images/umlSequenceDiagram-images/LoopFragment.png) |  

#### UmlSequenceFragmentModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the fragment |
| type | UmlSequenceFragmentType | Type of the fragment (Optional, Loop, Alternative) |
| conditions | UmlSequenceFragmentConditionModel[] | Collection of conditions for the fragment |

#### UmlSequenceFragmentConditionModel Properties

| Property | Type | Description |
|---|---|---|
| content | string | Text describing the condition or parameter |
| messageIds | (string \| number)[] | Collection of message IDs included in this condition section |
| fragmentIds | string[] | Collection of nested fragments ids (for complex structures) |

#### Creating Fragments

The following example illustrates how to create fragments with different condition types:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umlsequencediagram/umlsequencediagram-4" %}

## Customization Options

### Adjusting Participant Spacing

The [spaceBetweenParticipants](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlSequenceDiagramModel/#spaceBetweenParticipants) property controls the horizontal spacing between participants in the sequence diagram. Adjust this value to accommodate longer message labels or improve diagram readability.

```ts
// Define the UML Sequence Diagram model with custom spacing
const model: UmlSequenceDiagramModel = {
  // Increase space between participants for better readability
  spaceBetweenParticipants: 300,
  participants: participants,    // collection of participants in the sequence diagram  
  messages: messages,            // collection of messages exchanged between participants  
  fragments: fragments           // collection of sequence diagram fragments (opt, alt, loop) 
}
```