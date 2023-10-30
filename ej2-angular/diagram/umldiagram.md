---
layout: post
title: Umldiagram in Angular Diagram Component | Syncfusion
description: Learn here all about umldiagram support in Syncfusion Essential Angular Diagram component, it's elements and more.
platform: ej2-angular
control: Umldiagram 
documentation: ug
domainurl: ##DomainURL##
---

# Umldiagram in Angular Diagram Component

## Uml Class Diagram Shapes

Class diagram is used to represent the static view of an application. The class diagrams are widely used in the modelling of object oriented systems because they are the only UML diagrams which can be mapped directly with object-oriented languages.
Diagram supports to generate the class diagram shapes from business logic.

The UML class diagram shapes are explained as follows.

## Class

* A class describes a set of objects that shares the same specifications of features, constraints, and semantics. To define a class object, you should define the classifier as [`class`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassifierShapeModel/#class).

* Also, define the [`name`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassModel/#name), [`attributes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassModel/#attributes), and [`methods`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassModel/#methods) of the class using the class property of node.

* The attribute’s [`name`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassAttributeModel/#name), [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassAttributeModel/#type), and [`scope`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassAttributeModel/#scope) properties allow you to define the name, data type, and visibility of the attribute.

* The method’s [`name`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassMethodModel/#name), [`parameters`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassMethodModel/#parameters), [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassMethodModel/#type), and [`scope`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassMethodModel/#scope) properties allow you to define the name, parameter, return type, and visibility of the methods.

* The method parameters object properties allow you to define the name and type of the parameter.

* The following code example illustrates how to create a class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/class-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/class-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/class-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/class-cs1" %}

## Interface

* An Interface is a kind of classifier that represents a declaration of a set of coherent public features and obligations. To create an interface, define the classifier property as [`interface`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassifierShapeModel/#interface).

* Also, define the [`name`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlInterfaceModel/#name), [`attributes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlInterfaceModel/#attributes), and [`methods`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlInterfaceModel/#methods) of the interface using the interface property of the node.

* The attribute’s name, type, and scope properties allow you to define the name, data type, and visibility of the attribute.

* The method’s name, parameter, type, and scope properties allow you to define the name, parameter, return type, and visibility of the methods.

* The method parameter object properties of name and type allows you to define the name and type of the parameter.

* The following code example illustrates how to create an interface.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/interface-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/interface-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/interface-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/interface-cs1" %}

## Enumeration

* To define an enumeration, define the classifier property of node as [`enumeration`](https://ej2.syncfusion.com/angular/documentation/api/diagram/umlClassifierShapeModel/#enumeration). Also, define the name and members of the enumeration using the enumeration property of the node.

* You can set a name for the enumeration members collection using the name property of members collection.

* The following code example illustrates how to create an enumeration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/enumeration-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/enumeration-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/enumeration-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/enumeration-cs1" %}

## Connector shapes

* The connector shape property defines the role or meaning of the connector.

* The different types of connector shapes are BPMN, UmlClassifier, and UmlActivity and can render these shapes by setting the connector shape type property.

* The type of flow shapes in a BPMN process are sequence, association, and message.

## Relationships

* A relationship is a general term covering the specific types of logical connections found on class diagrams.

* The list of relationships are demonstrated as follows.

| Shape       | Image                                |
| ----------- | ------------------------------------ |
| Association | ![Association](images/Association.png) |
| Aggregation | ![Aggregation](images/Aggregation.png)  |
| Composition | ![Composition](images/Composition.png) |
| Inheritance | ![Inheritance](images/Inheritance.png)   |
| Dependency  | ![Dependency](images/Dependency.png) |

## Association

Association is basically a set of links that connects elements of an UML model. The type of association are as follows.

1. Directional
2. BiDirectional

The association property allows you to define the type of association. The default value of association is “Directional”. The following code example illustrates how to create an association.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/association-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/association-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/association-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/association-cs1" %}

## Aggregation

Aggregation is a binary association between a property and one or more composite objects which group together a set of instances.

Aggregation is decorated with a hollow diamond. To create an aggregation shape, define the relationship as “aggregation”.

The following code example illustrates how to create an aggregation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/aggregation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/aggregation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/aggregation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/aggregation-cs1" %}

## Composition

Composition is a “strong” form of “aggregation”. Composition is decorated with a black diamond. To create a composition shape, define the relationship property of connector as “composition”.

The following code example illustrates how to create a composition.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/composition-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/composition-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/composition-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/composition-cs1" %}

## Dependency

Dependency is a directed relationship, which is used to show that some UML elements needs or depends on other model elements for specifications. Dependency is shown as dashed line with opened arrow. To create a dependency, define the relationship property of connector as “dependency”.

The following code example illustrates how to create an dependency.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/dependency-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/dependency-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/dependency-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/dependency-cs1" %}

## Inheritance

Inheritance is also called as “generalization”. Inheritance is a binary taxonomic directed relationship between a more general classifier (super class) and a more specific classifier (subclass). Inheritance is shown as a line with hollow triangle.

To create an inheritance, define the relationship as “inheritance”.

The following code example illustrates how to create an inheritance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/inheritance-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/inheritance-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/inheritance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/inheritance-cs1" %}

## Multiplicity

Multiplicity is a definition of an inclusive interval of non-negative integers to specify the allowable number of instances of described element. The type of multiplicity are as follows.

* OneToOne
* ManyToOne
* OneToMany
* ManyToMany

1.By default the multiplicity will be considered as “OneToOne”.

2.The multiplicity property in UML allows you to specify large number of elements or some collection of elements.

3.The shape multiplicity’s source property is used to set the source label to connector and the target property is used to set the target label to connector.

4.To set an optionality or cardinality for the connector source label, use optional property.

5.The [`lowerBounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/multiplicityLabelModel/#lowerBounds) and [`upperBounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/multiplicityLabelModel/#upperBounds) could be natural constants or constant expressions evaluated to natural (non negative) number. Upper bound could be also specified as asterisk ‘\*’ which denotes unlimited number of elements. Upper bound should be greater than or equal to the lower bound.

The following code example illustrates how to customize the multiplicity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/multiplicity-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/multiplicity-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/multiplicity-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/multiplicity-cs1" %}

## UmlActivity diagram

Activity diagram is basically a flowchart to represent the flow from one activity to another. The activity can be described as an operation of the system.

The purpose of an activity diagram can be described as follows.

* Draw the activity flow of a system.
* Describe the sequence from one activity to another.
* Describe the parallel, branched, and concurrent flow of the system.

To create a UmlActivity, define type as "UmlActivity" and the list of built-in shapes as demonstrated as follows and it should be set in the "shape" property.

| Shape          | Image                                    |
| -------------- | ---------------------------------------- |
| Action         | ![Action](images/Action.png)          |
| Decision       | ![Decision](images/Decision.png)         |
| MergeNode      | ![MergeNode](images/MergeNode.png)       |
| InitialNode    | ![InitialNode](images/InitialNode.png)       |
| FinalNode      | ![FinalNode](images/FinalNode.png)      |
| ForkNode       | ![ForkNode](images/ForkNode.png)       |
| JoinNode       | ![JoinNode](images/JoinNode.png)       |
| TimeEvent      | ![TimeEvent](images/TimeEvent.png)      |
| AcceptingEvent | ![AcceptingEvent](images/AcceptingEvent.png) |
| SendSignal     | ![SendSignal](images/SendSignal.png)     |
| ReceiveSignal  | ![ReceiveSignal](images/ReceiveSignal.png)  |
| StructuredNode | ![StructuredNode](images/StructuredNode.png) |
| Note           | ![Note](images/Note.png)           |

The following code illustrates how to create a UmlActivity shapes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/UmlActivity-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/UmlActivity-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/UmlActivity-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/UmlActivity-cs1" %}

### UmlActivity connector

To create an UmlActivity connector, define the type as "UmlActivity" and flow as either "Exception" or "Control" or "Object".

The following code illustrates how to create a UmlActivity connector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/umldiagramshapes/UmlActivityConnector-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/diagram/umldiagramshapes/UmlActivityConnector-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/umldiagramshapes/UmlActivityConnector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/umldiagramshapes/UmlActivityConnector-cs1" %}

### Editing

You can edit the name, attributes, and methods of the class diagram shapes just double clicking, similar to editing a node annotation.

The following image illustrates how the text editor looks in an edit mode.

![Editing Class Diagram](images/ClassEdit.png)