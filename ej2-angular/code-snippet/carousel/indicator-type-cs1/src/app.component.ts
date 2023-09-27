import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render Carousel. -->
    <div class="control-container">
      <ejs-carousel [autoPlay]="false" indicatorsType = "Dynamic">
        <e-carousel-items>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Cardinal</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Kingfisher</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Keel-billed-toucan</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Yellow-warbler</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Bee-eater</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
        </e-carousel-items>
      </ejs-carousel>
    </div>`,
})
export class AppComponent {
  
}


