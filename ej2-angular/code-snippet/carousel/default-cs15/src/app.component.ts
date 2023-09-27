

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render Carousel. -->
    <div class="control-container">
      <ejs-carousel [dataSource]="productItems">
        <ng-template #itemTemplate let-data>
          <div class="slide-content">{{ data.Title }}</div>
          <figure class="img-container">
            <img [src]="getImage(data.imageName)" alt="{{data.Name}}" style="height:100%;width:100%;" />
            <figcaption class="img-caption">{{data.Name}}</figcaption>
          </figure>
        </ng-template>
      </ejs-carousel>
    </div>`,
})
export class AppComponent {
  public productItems: Record<string, string | number>[] = [
    { ID: 1, Name: "Cardinal", imageName: 'cardinal' },
    { ID: 2, Name: "Kingfisher", imageName: 'hunei' },
    { ID: 3, Name: "Keel-billed-toucan", imageName: 'costa-rica' },
    { ID: 4, Name: "Yellow-warbler", imageName: 'kaohsiung' },
    { ID: 5, Name: "Bee-eater", imageName: 'bee-eater' }
  ];

  public getImage(bird: string): string {
    return `https://ej2.syncfusion.com/products/images/carousel/${bird}.png`;
  }
}


