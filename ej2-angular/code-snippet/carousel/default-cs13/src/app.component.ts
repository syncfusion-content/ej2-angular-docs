

import { CarouselComponent } from "@syncfusion/ej2-angular-navigations";
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render Carousel. -->
    <div class="control-container">
      <ejs-carousel [showPlayButton]="showPlayButton" #carousel>
        <ng-template #playButtonTemplate let-data>
          <button
            ejs-button
            cssClass="e-info playBtn"
            [content]="content"
            (click)="btnClick()"
            #playButton
          ></button>
        </ng-template>
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
  @ViewChild("carousel") carousel!: CarouselComponent;
  @ViewChild("playButton") playButton!: ButtonComponent;
  public showPlayButton: Boolean = true;
  public content: string = "Pause";
  public btnClick() {
    if (this.carousel.autoPlay) {
      this.playButton.content = "Play";
      this.carousel.autoPlay = false;
    } else {
      this.playButton.content = "Pause";
      this.carousel.autoPlay = true;
    }
  }
}


