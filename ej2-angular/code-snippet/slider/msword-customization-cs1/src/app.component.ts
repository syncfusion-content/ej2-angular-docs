


import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
        <div id="text">
            <label for="slider">Slider</label>
            <br/> <br/> <br/>
            <div class="middle">
                <div class="first">
                    <ejs-slider id='slider' width="300" [customValues]='customvalues'  [showButtons]=true [(ngModel)]="slidervalue" name="slider" required #slider="ngModel" [ticks]='ticks' (change)="change($event)" (renderedTicks)='renderedTicks($event)'>
                    </ejs-slider>
                </div>
                <div class="second">
                    <span for="slider">{{value}}</span>
                </div>
            </div>
        </div>
    </div>`,
    styleUrls : ["./app.component.css"]
})

export class AppComponent {
   public slidervalue = 3;
   public customvalues = [10, 20, 30, 100, 250, 400, 500];

   public ticks = {
    placement: 'After',
  };

  public value = this.customvalues[this.slidervalue];

  public change(args: any) {
    this.value = this.customvalues[args.value];
  }

  public renderedTicks(event: any) {
    event.tickElements.forEach((element: any) => {
      if (element.title !== '10' && element.title !== '100' && element.title !== '500') {
        element.classList.add('e-display-none');
      }
    })
  }
}

