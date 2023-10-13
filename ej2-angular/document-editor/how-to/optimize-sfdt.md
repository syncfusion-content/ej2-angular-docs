---
layout: post
title: Optimize the SFDT file in Angular Document editor component | Syncfusion
description: Learn here all about optimize the SFDT file in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
control: Optimize the SFDT file
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# How to optimize the SFDT file

Starting from version v21.1.x, the SFDT file generated in Word Processor component is optimized by default to reduce the file size. All static keys are minified, and the final JSON string is compressed. This helps reduce the SFDT file size relative to a DOCX file and provides the following benefits,
* File transfer between client and server through the internet gets faster.
* The new optimized SFDT files require less storage space than the old SFDT files.
Hence, the optimized SFDT file can't be directly manipulated as JSON string.

> This feature comes with a public API to switch between the old and new optimized SFDT format, allowing backward compatibility.

As a backward compatibility to create older format SFDT files, refer the following code changes,

<table>
<tr>
<td>Client/Server</td><td>Old Code</td><td>New Code from v21.1.x</td>
</tr>
<tr>
<td>Client-side</td>
<td>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    template: `<ejs-documenteditorcontainer></ejs-documenteditorcontainer>`
})
{% endhighlight %}
{% endtabs %}
</td>
<td>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" hl_lines="2 6" %}
@Component({
    template: `<ejs-documenteditorcontainer [documentEditorSettings]="settings"></ejs-documenteditorcontainer>`
})
export class AppComponent {
  public settings: DocumentEditorSettingsModel = {
    optimizeSfdt: false
  };
}
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>
{% tabs %} 
{% highlight c# tabtitle="Import"%}
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
{% endhighlight %}
{% endtabs %}
</td>
<td>
{% tabs %} 
{% highlight c# tabtitle="Import" hl_lines="2" %}
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
sfdtDocument.OptimizeSfdt = false;
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side Java</td>
<td>
{% tabs %} 
{% highlight JAVA tabtitle="Import" %}
String sfdtDocument = WordProcessorHelper.load(stream, formatType);
{% endhighlight %}
{% endtabs %}
</td>
<td>
{% tabs %} 
{% highlight JAVA tabtitle="Import" %}
String sfdtDocument = WordProcessorHelper.load(stream, formatType, false);
{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

To convert from older format SFDT from a new optimized SFDT file, refer the following code example,

<table>
<tr>
<td>Client/Server</td><td>Code example</td>
</tr>
<tr>
<td>Client-side</td>
<td>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" hl_lines="2 6" %}
@Component({
    template: `<ejs-documenteditorcontainer [documentEditorSettings]="settings"></ejs-documenteditorcontainer>`
})
export class AppComponent {
  public settings: DocumentEditorSettingsModel = {
    optimizeSfdt: false
  };
}
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>
{% tabs %} 
{% highlight c# tabtitle="Import" hl_lines="3" %}
using(Syncfusion.DocIO.DLS.WordDocument docIODocument = WordDocument.Save(optimizedSfdt)) {
  sfdtDocument = WordDocument.Load(docIODocument);
  sfdtDocument.OptimizeSfdt = false;
  string oldSfdt = JsonSerializer.Serialize(sfdtDocument);
}
{% endhighlight %}
{% endtabs %}
</td>
</tr>
<tr>
<td>Server-side Java</td>
<td>
{% tabs %} 
{% highlight c# tabtitle="Import" hl_lines="2" %}
WordDocument docIODocument = WordProcessorHelper.save(optimizedSfdt);
String oldSfdt = WordProcessorHelper.load(docIODocument, false);
{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>