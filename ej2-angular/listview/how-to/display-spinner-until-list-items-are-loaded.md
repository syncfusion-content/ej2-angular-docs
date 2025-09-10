---
layout: post
title: Show spinner until items load in Angular ListView | Syncfusion
description: Learn here all about Display spinner until list items are loaded in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Display loading spinner in Angular ListView component

When fetching data from remote sources using the ListView component, there might be a delay in loading the data. During this time, you can enhance the user experience by displaying the EJ2 [Spinner](https://ej2.syncfusion.com/angular/documentation/spinner) component. This guide demonstrates how to implement a loading spinner with the ListView component.

Refer to the following code sample to render the spinner component.

```typescript
createSpinner({
    target: this.spinnerEle.nativeElement
});
showSpinner(this.spinnerEle.nativeElement);
```

Refer to the following code sample to render the ListView component.

```typescript
let listviewInstance: ListView = new ListView({
    //Bind the DataManager instance to the dataSource property
    dataSource= new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    }),

    //Bind the Query instance to the query property
    query= new Query().from('Products').select('ProductID,ProductName').take(10),

    //Map the appropriate columns to the fields property
    fields= { id: 'ProductID', text: 'ProductName' },

});

//Render the initialized ListView
listviewInstance.appendTo("#element");
```

Here, the data is fetched from `Northwind` Service URL; it takes a few seconds to load the data. To enhance the UI, the spinner component has been rendered initially. After the data is loaded from remote URL, the spinner component will be hidden in ListView [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/list-view/#actioncomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/listview/getting-started-cs5/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/getting-started-cs5" %}
