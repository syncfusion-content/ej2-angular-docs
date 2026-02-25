---
layout: post
title: Import export in Angular Query builder component | Syncfusion
description: Learn here all about Import export in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Import export 
documentation: ug
domainurl: ##DomainURL##
---

# Importing and Exporting in Angular Query builder component

Import predefined query conditions and export constructed rules in multiple formats: JSON, SQL, and MongoDB. This streamlines query management and enables seamless integration with external systems and saved configurations.

## Importing

Import predefined conditions into the Query Builder for viewing or editing. Supported formats include JSON, SQL (Inline, Parameter, and Named Parameter), and MongoDB queries. Importing accelerates setup by allowing you to load pre-configured rules from external sources or saved states.

### Importing from JSON Object

Import conditions stored in JSON format for standardized data exchange and compatibility. JSON import simplifies the process of loading predefined query configurations.

#### Initial rendering

Initialize the Query Builder with predefined conditions by setting the [`rule`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#rule) property with a structured JSON object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs8" %}

#### Runtime updates

Update Query Builder conditions after rendering using the [`setRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#setrules) method with a structured JSON object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs9" %}

### Importing from SQL Query

Import SQL queries into the Query Builder for direct integration and conversion to Query Builder rules. SQL import supports three types: Inline SQL, Parameter SQL, and Named Parameter SQL, enhancing workflow efficiency and data accuracy.

#### Importing from Inline SQL Query

Convert Inline SQL queries directly into Query Builder rules using the [`setRulesFromSql`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#setrulesfromsql) method. This approach streamlines SQL-to-query-builder conversion for analysis and further processing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs10" %}

#### Importing from Parameter SQL Query

Importing from Parameter SQL involves integrating SQL queries with parameters directly into the Query Builder. This method allows users to input SQL statements containing parameters, which can be dynamically filled in during execution. It streamlines the process by enabling flexible and customizable querying within the application. Conditions can be set from Parameter SQL queries using the [`setParameterizedSql`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#setparameterizedsql) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs12" %}

#### Importing from Named Parameter SQL Query

Importing from Named Parameter SQL involves integrating SQL queries with named parameters directly into the Query Builder. This method enables users to input SQL statements containing named parameters, providing flexibility and customization during execution. It streamlines the process by allowing dynamic parameter assignment within the application's query environment. Conditions can be set from Named Parameter SQL queries using the [`setParameterizedNamedSql`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#setparameterizednamedsql) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs13" %}

### Importing from MongoDB Query

Importing from MongoDB Query involves integrating MongoDB queries directly into the Query Builder. This enables users to input MongoDB query statements directly into the application, allowing for seamless integration and manipulation of MongoDB data within the Query Builder environment. It streamlines the process by facilitating direct access to MongoDB data for analysis, filtering, and further processing within the application. Conditions can be set from Named Parameter SQL queries using the [`setMongoQuery`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#setmongoquery) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/filtering-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/filtering-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/filtering-cs14" %}

## Exporting

Exporting from the Query Builder allows users to preserve or store the created conditions. The defined conditions can be exported using various methods, including:

### Exporting to JSON Object

You can extract the established conditions in the Query Builder and convert them into a structured JSON object format using the [`getRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#getrules) method. This process enables users to save or transfer the conditions for further use or analysis in other applications or systems that support JSON data.

### Exporting to SQL Query

Exporting to SQL involves converting the defined conditions within the Query Builder into SQL queries. This functionality allows users to generate SQL code representing the conditions set in the Query Builder, which can then be executed directly on a SQL database or used for further analysis and processing. SQL exporting supports various types, including Inline SQL, Parameter SQL, and Named Parameter SQL.

#### Exporting to Inline SQL Query

Exporting to Inline SQL Query entails embedding the defined conditions from the Query Builder directly into SQL statements within the exported code. This method ensures that the conditions are seamlessly integrated into the SQL query syntax, enabling straightforward execution or further processing within SQL database systems. This can be achieved using the [`getSqlFromRules`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#getsqlfromrules) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/export-cs1" %}

#### Exporting to Parameter SQL Query

Exporting to Parameter SQL involves incorporating the defined conditions from the Query Builder into SQL queries with parameters. This method allows for dynamic value assignment during execution, enhancing flexibility and adaptability in query processing within SQL database. This can be accomplished using the [`getParameterizedSql`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#getparameterizedsql) method for exporting to Parameter SQL query.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/export-cs2" %}

#### Exporting to Named Parameter SQL Query

Exporting to Named Parameter SQL entails integrating the defined conditions from the Query Builder into SQL queries with named parameters. This method offers enhanced readability and flexibility during execution by using named placeholders for parameter values. Named Parameter SQL facilitates easier maintenance and modification of queries, making it convenient for dynamic parameter assignment within SQL database. This can be accomplished using the method [`getParameterizedNamedSql`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#getparameterizednamedsql) for exporting to Named Parameter SQL query.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/export-cs3" %}

### Exporting to MongoDB Query

Exporting to MongoDB Query involves converting the defined conditions within the Query Builder into MongoDB query syntax. This process allows users to generate MongoDB queries representing the conditions set in the Query Builder, which can then be executed directly on a MongoDB database or used for further analysis and processing. This can be accomplished using the [`getMongoQuery`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#getmongoquery) method for exporting to MongoDB query.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/export-cs4" %}
