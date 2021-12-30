import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {FormComponent} from './form/form.component';
import {AnotherCardComponent} from './another-card/another-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    AnotherCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
