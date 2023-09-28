

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render Carousel. -->
    <ejs-carousel>
      <ng-template #indicatorsTemplate let-data>
        <div class="indicator" indicator-index="data.index">
          <div class="preview-content">{{ getContent(data.index) }}</div>
        </div>
      </ng-template>
      <e-carousel-items>
        <e-carousel-item>
          <ng-template #template>
            <div class="slide-content">Slide 1</div>
          </ng-template>
        </e-carousel-item>
        <e-carousel-item>
          <ng-template #template>
            <div class="slide-content">Slide 2</div>
          </ng-template>
        </e-carousel-item>
        <e-carousel-item>
          <ng-template #template>
            <div class="slide-content">Slide 3</div>
          </ng-template>
        </e-carousel-item>
        <e-carousel-item>
          <ng-template #template>
            <div class="slide-content">Slide 4</div>
          </ng-template>
        </e-carousel-item>
        <e-carousel-item>
          <ng-template #template>
            <div class="slide-content">Slide 5</div>
          </ng-template>
        </e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>`,
})
export class AppComponent {
  public getContent(index: number): string {
    const slides: string[] = [
      "Slide 1",
      "Slide 2",
      "Slide 3",
      "Slide 4",
      "Slide 5",
    ];
    return slides[index];
  }
}


