import { AppComponent } from './app.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { GridAllModule, GridComponent } from '@syncfusion/ej2-angular-grids';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [
        GridAllModule
      ],
      declarations: [
        AppComponent,
        GridComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it(`Length of the record`, fakeAsync(async () => {
    fixture.detectChanges();
    tick(1000);
    expect(component.grid.currentViewData.length).toBe(8);
  }));
});
