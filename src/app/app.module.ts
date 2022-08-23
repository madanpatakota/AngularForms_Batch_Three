import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { TDAComponent } from './tda/tda.component';
import { FirstamEmailDirective } from './firstam-email.directive';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';

@NgModule({
  declarations: [
    AppComponent,
    TDAComponent,
    FirstamEmailDirective,
    ReactiveApproachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
