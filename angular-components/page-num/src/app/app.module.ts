import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { PageNumComponent } from './pageNum.component';

@NgModule({
  declarations: [
    PageNumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [PageNumComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const el = createCustomElement(PageNumComponent, {injector});
    customElements.define('page-number', el);
  }
  ngDoBootstrap() {}
}
