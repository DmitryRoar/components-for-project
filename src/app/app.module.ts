import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CardComponent} from './shared/components/card/card.component';
import {DrawerComponent} from './shared/components/drawer/drawer.component';

import {DrawerDirective} from './shared/directives/drawer.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DrawerComponent,
    DrawerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
