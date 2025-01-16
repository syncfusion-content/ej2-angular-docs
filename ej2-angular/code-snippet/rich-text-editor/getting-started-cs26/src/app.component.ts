import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Component } from '@angular/core';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [RichTextEditorAllModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools' [backgroundColor]='bgColor' [fontColor] ='fontColor'>
              </ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})
export class AppComponent {
  public tools: object = {
    items: ['FontColor', 'BackgroundColor'],
  };
  public bgColor = {
    modeSwitcher: true,
  };
  public fontColor = {
    modeSwitcher: true,
  };
}