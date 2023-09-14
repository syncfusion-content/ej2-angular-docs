---
layout: post
title: Redis cache in Angular Pdfviewer component | Syncfusion
description: Learn here all about Redis cache in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Redis cache
documentation: ug
domainurl: ##DomainURL##
---

# Configure Redis Cache

Redis is an open-source, in-memory data structure store that is often used as a cache, message broker, and database. `Redis cache` is a key-value data store that stores data in memory, which makes it very fast and efficient. The data can be stored and retrieved quickly without the need for disk access, which makes Redis cache ideal for applications that require fast access to data.

Redis can be used to improve the performance of the PDF Viewer by caching frequently accessed PDF documents and reducing the number of requests to the server. Redis is an in-memory cache, so data stored in Redis should be considered temporary. In case of cache eviction or server restart, the data will be lost, and you would need to fetch it again from the primary data source.

## To configure Redis, you will need to follow these steps

**Step 1**:Create Redis cache refer to this [link](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache)

**Step 2:**  Create a PDFViewer web service application for that use the below link for reference.

[Refer to this link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above)

or you can get the sample web service from GitHub [link](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices).

**Step 3:**  Install Redis Cache package

You need to install the `StackExchange.Redis package` and `Microsoft.Extensions.Caching.Redis`using the NuGet Package Manager 

**Step 4:**  Configure Redis Cache

In the ConfigureServices method of the `Startup class`, you need to add the Redis Cache service using the `AddDistributedRedisCache()`

method. You also need to provide the Redis Cache connection string.

```cs

public void ConfigureServices(IServiceCollection services)
{
    // Add Redis Cache
    services.AddDistributedRedisCache(options =>
    {
        options.Configuration = redisCacheConnectionString;
    });
}

```

**Step 5:** Use the Redis cache in the PDF Viewer controller action:

To use Redis Cache in PDF Viewer, you can implement the IDistributedCache interface and use the Redis Cache service to store and 
retrieve

the PDF document bytes.

```cs
    private readonly IHostingEnvironment _hostingEnvironment;
    public IMemoryCache _cache;
    private IDistributedCache _dCache;
    private IConfiguration _configuration;
    private int _slidingTime = 0;
    string path;
    public PdfViewerController(IMemoryCache memoryCache, IHostingEnvironment hostingEnvironment, IDistributedCache cache, IConfiguration configuration)
    {
        _cache = memoryCache;
        _dCache = cache;
        _hostingEnvironment = hostingEnvironment;
        _configuration = configuration;
        path = _configuration["DOCUMENT_PATH"];
        //check the document path environment variable value and assign default data folder
        //if it is null.
        path = string.IsNullOrEmpty(path) ? Path.Combine(_hostingEnvironment.ContentRootPath, "Data") : Path.Combine(_hostingEnvironment.ContentRootPath, path);
    }       
```

Once Redis is configured, the Syncfusion PDF Viewer application will automatically use Redis cache for improved performance and scalability.