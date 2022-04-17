import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './hero.component';
import { HobbiesComponent } from './hobbies.component';
import { PowersComponent } from './powers.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, HeroComponent, HobbiesComponent, PowersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
