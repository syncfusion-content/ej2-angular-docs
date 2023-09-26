


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService  } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-root',
  template: `<ejs-richtexteditor id='defaultRTE' #sample [placeholder]='placeholder'></ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class AppComponent  {
  public placeholder: String = 'Type Something';
}




