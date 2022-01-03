import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import localeRu from '@angular/common/locales/ru';


import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {FormComponent} from './form/form.component';
import {AnotherCardComponent} from './another-card/another-card.component';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeRu, 'ru')

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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
