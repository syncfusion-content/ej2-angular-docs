import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule, ClickEventArgs } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './app.component.html'
})

export class AppComponent { 
    
  public initialCount: number = 0;
  public repeatCount: number = 0;

  public repeatDelay: number = 400;
  public repeatInterval: number = 100;
  public disabled: boolean = false;

  public onClicked(args: ClickEventArgs): void {
    if (args) {
      this.repeatCount++;
    } else {
      this.initialCount++;
    }
  }

  public onDelayChange(event: Event): void {
    const value: number = parseInt((event.target as HTMLInputElement).value, 10);
    if (!isNaN(value) && value >= 0) {
      this.repeatDelay = value;
    }
  }

  public onIntervalChange(event: Event): void {
    const value: number = parseInt((event.target as HTMLInputElement).value, 10);
    if (!isNaN(value) && value >= 0) {
      this.repeatInterval = value;
    }
  }

  public onDisabledChange(event: Event): void {
    this.disabled = (event.target as HTMLInputElement).checked;
  }

  public resetCounters(): void {
    this.initialCount = 0;
    this.repeatCount = 0;
  }
}


