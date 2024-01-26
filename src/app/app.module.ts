import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QualityRuleComponent} from './quality-rule/quality-rule.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzAlertModule} from "ng-zorro-antd/alert";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    QualityRuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputNumberModule,
    NzInputModule,
    NzButtonModule,
    NzAlertModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
