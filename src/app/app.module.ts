import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';

import {DrawerDirective} from './shared/directives/drawer.directive';

import {AppComponent} from './app.component';
import {CardComponent} from './shared/components/card/card.component';
import {DrawerComponent} from './shared/components/drawer/drawer.component';
import {MatNativeDateModule} from '@angular/material/core';
import {InputsComponent} from './shared/components/inputs/inputs.component';
import {FeedbackComponent} from './shared/components/feedback/feedback.component';
import { HomeworkStatusComponent } from './shared/components/homework-status/homework-status.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DrawerComponent,
    DrawerDirective,
    InputsComponent,
    FeedbackComponent,
    HomeworkStatusComponent,
    NotificationComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
