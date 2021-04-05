import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';

import {AppComponent} from './app.component';
import {CardComponent} from './shared/components/card/card.component';
import {MatNativeDateModule} from '@angular/material/core';
import {InputComponent} from './shared/components/input/input.component';
import {FeedbackComponent} from './shared/components/feedback/feedback.component';
import {HomeworkStatusComponent} from './shared/components/homework-status/homework-status.component';
import {NotificationComponent} from './shared/components/notification/notification.component';
import {ConfirmComponent} from './shared/components/confirm/confirm.component';
import {ModalComponent} from './shared/components/modal/modal.component';
import {SelectComponent} from './shared/components/select/select.component';
import {DatepickerComponent} from './shared/components/datepicker/datepicker.component';
import {DotComponent} from './shared/components/dot/dot.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    FeedbackComponent,
    HomeworkStatusComponent,
    NotificationComponent,
    ConfirmComponent,
    ModalComponent,
    SelectComponent,
    DatepickerComponent,
    DotComponent
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
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
