---
layout: post
title: Annotation in Angular Maps component | Syncfusion
description: Learn here all about Annotation in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Annotation 
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in Angular Maps component

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

Initialize the Maps component with annotation option, text content or ID of an HTML element or an HTML string can be specified to render a new element that needs to be displayed in the Maps by using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#content) property. To specify the content position with [`x`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#x) and [`y`](https://ej2.syncfusion.com/angular/documentation/api/maps/annotationModel/#y) properties as mentioned in the following example.

[`app.module.ts`]

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { AnnotationsService } from '@syncfusion/ej2-angular-maps';


@NgModule({
  imports:      [ BrowserModule,MapsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AnnotationsService]
})
export class AppModule { }
```

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs41/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs41/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs41/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs41" %}