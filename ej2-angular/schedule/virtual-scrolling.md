---
layout: post
title: Virtual scrolling in Angular Schedule component | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in Angular Schedule component

Virtual scrolling support in the Scheduler component enhances performance when working with a substantial number of resources and events. This feature allows large sets of resources and events to load dynamically in the timeline views as users scroll, resulting in a seamless user experience. Enable virtual scrolling by setting the [`allowVirtualScrolling`](https://helpej2.syncfusion.com/angular/documentation/api/schedule/views/#allowvirtualscrolling) property to `true` within the specific timeline view settings. In the Agenda view, enable the same property in the agenda view configuration to allow virtual loading of events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs88/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs88/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs88" %}

![Displaying Virtual Scrolling in Schedule](images/schedule-virtualscrolling.gif)

> Currently, virtual loading of resources and events is supported only in the `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth`, and `TimelineYear` views with vertical orientation. Future updates will extend virtual loading support to additional applicable Scheduler views.

## Enabling lazy loading for appointments

The lazy loading feature provides an efficient approach for loading appointment data into the Scheduler on-demand. This allows large volumes of appointments to be loaded without performance issues.

By default, the Scheduler retrieves all relevant appointments within the current date range from the server. When lazy loading is enabled, the Scheduler sends queries to the server to retrieve appointments only for resources currently displayed as a result of scroll actions. These queries include the resource IDs and the current date range as a comma-separated string. On the server, these resource IDs are parsed to filter and serve only the necessary appointments for rendering in the Scheduler.

With this feature enabled, the Scheduler fetches events from remote services solely for the appointments currently visible in the viewport, optimizing data retrieval. Additional appointment data is fetched from the server on-demand as new resources enter the viewport during scrolling.

Enable this feature by setting the [`enableLazyLoading`](https://ej2.syncfusion.com/angular/documentation/api/schedule/viewsModel/#enablelazyloading) property to `true` in the appropriate view settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs98/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs98/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs98" %}

The following server-side controller code demonstrates how to retrieve appointment data based on resource IDs received as query parameters:

```c#
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.OData.Query;

namespace LazyLoadingServices.Controllers
{
    public class VirtualEventDataController : Controller
    {
        private readonly EventsContext dbContext;

        [HttpGet]
        [EnableQuery]
        [Route("api/VirtualEventData")]
        public IActionResult GetData([FromQuery] Params param)
        {
            IQueryable<EventData> query = dbContext.Events;
            // Filter the appointment data based on the ResourceId query params.
            if (!string.IsNullOrEmpty(param.ResourceId))
            {
                string[] resourceId = param.ResourceId.Split(',');
                query = query.Where(data => resourceId.Contains(data.ResourceId.ToString()));
            }
            return Ok(query.ToList());
        }
    }
    public class Params
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string ResourceId { get; set; }
    }
}
```

**Note:**  
* The property will be effective, when large number of resources and appointments bound to the Scheduler.
* This property is applicable only when [resource grouping](https://ej2.syncfusion.com/angular/documentation/api/schedule/group/#resources) is enabled in Scheduler.

## See Also

* [Virtual scrolling in Agenda view](./views#agenda-view)

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
