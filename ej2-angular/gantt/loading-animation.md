---
layout: post
title: Loading Animation in Angular Gantt Chart Component | Syncfusion
description: Learn how to configure loading indicators in the Syncfusion Angular Gantt Chart component for visual feedback during data processing and user interactions.
platform: ej2-angular
control: Loading animation
documentation: ug
domainurl: ##DomainURL##
---

# Loading Animation in Angular Gantt Chart Component

The Angular Gantt Chart component displays loading indicators to provide visual feedback during data processing operations like sorting, filtering, scrolling, or data binding, enhancing user experience by signaling active processes. Configured via the [loadingIndicator.indicatorType](https://ej2.syncfusion.com/angular/documentation/api/gantt/loadingIndicator#indicatortype) property, indicators support two types: **Spinner**, a rotating circular animation for quick operations, and **Shimmer**, an animated placeholder for data-intensive tasks like virtual scrolling with large datasets. Indicators appear automatically during initial data binding, data updates, filtering, sorting, scrolling, and expand/collapse actions, ensuring users perceive system activity. The Spinner is lightweight and ideal for simple updates, while Shimmer previews content layout for complex operations but may be resource-intensive for small datasets. Indicators support accessibility with ARIA labels and adapt to responsive designs for consistent visibility.

## Configure loading indicators

Loading indicators are configured using the [loadingIndicator](https://ej2.syncfusion.com/angular/documentation/api/gantt/loadingIndicator/) property, with `indicatorType` set to **Spinner** (default) or **Shimmer**. Changes to `indicatorType` require component re-initialization for reflection.

The following example configures a Shimmer indicator:

```typescript
export class AppComponent {
    public loadingIndicator: object = {
        indicatorType: 'Shimmer'
    };

    public data: object[] = [
        // Large dataset for demonstration.
    ];
}
```

This code sets a Shimmer indicator for operations like virtual scrolling, providing a modern loading experience. Use Spinner for quick operations to minimize resource usage.

The following example shows indicator usage:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/loading-animation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/loading-animation-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/loading-animation-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/loading-animation-cs1" %}

## Control loading indicators manually

For custom scenarios, such as asynchronous data processing, manually control indicators using the [showSpinner](https://ej2.syncfusion.com/angular/documentation/api/gantt#showspinner) and [hideSpinner](https://ej2.syncfusion.com/angular/documentation/api/gantt#hidespinner) methods. Ensure proper `ViewChild` initialization to reference the Gantt Chart component.

The following example demonstrates manual control:


```typescript
export class AppComponent {
    @ViewChild('gantt', { static: true })
    public ganttInstance: GanttComponent;

    showCustomLoading() {
        // Display loading indicator manually.
        this.ganttInstance.showSpinner();
        
        // Perform custom operation
        this.performCustomDataOperation().then(() => {
          // Hiding loading indicator manually.
            this.ganttInstance.hideSpinner();
        });
    }

    async performCustomDataOperation(): Promise<void> {
        // Simulate data processing.
        return new Promise(resolve => {
            setTimeout(() => {
                // Custom data manipulation.
                this.updateProjectData();
                resolve();
            }, 2000);
        });
    }
}
```

This code displays a loading indicator during a simulated 2-second data operation, ensuring clear feedback. Use manual control only for specific business logic to avoid overriding automatic behavior.

## See also
- [How to configure virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/virtual-scroll)
- [How to manage data filtering?](https://ej2.syncfusion.com/angular/documentation/gantt/filtering)
- [How to enable sorting?](https://ej2.syncfusion.com/angular/documentation/gantt/sorting)