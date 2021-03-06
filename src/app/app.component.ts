import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';

import {IInput} from './shared/interfaces/input.interface';
import {IHomeWorkStatus} from './shared/interfaces/homework-status.interface';
import {INotificationInfo} from './shared/interfaces/notification.interface';
import {IConfirm} from './shared/interfaces/confirm.interface';
import {IModal} from './shared/interfaces/modal.interface';
import {ICardInfo} from './shared/interfaces/card.interface';
import {IFeedback} from './shared/interfaces/feedback.interface';
import {ISelect} from './shared/interfaces/select.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // card
  card: ICardInfo = {
    img: 'assets/img/card/student-photo.png',
    lastLesson: '54:00',
    color: 'blue',
    subject: 'english',
    name: 'Garry Roar',
    nextLesson: {
      date: '15.09.20',
      time: '12:10'
    }
  };
  cardWOLastLesson: ICardInfo = {
    img: 'assets/img/card/student-photo.png',
    color: 'blue',
    subject: 'english',
    name: 'Garry Roar',
    nextLesson: {
      date: '15.09.20',
      time: '12:10'
    }
  };

  // select
  select: ISelect = {
    title: 'hello label!',
    options: [
      {value: 'foo'},
      {value: 'bar'},
    ]
  };
  // input
  input: IInput = {
    img: 'assets/img/input/phone.svg',
    label: 'Number',
    required: true
  };
  inputNotRequired: IInput = {
    img: 'assets/img/input/phone.svg',
    label: 'Address',
    required: false
  };
  // feedback
  feedback: IFeedback = {
    emoji: 'assets/img/emoji/great.png',
    text: 'Great Job'
  };
  // homework-status
  homeworkStatus: IHomeWorkStatus = {
    completed: true,
    date: '15.09.20'
  };
  homeWorkStatusFalse: IHomeWorkStatus = {
    completed: false
  };
  // notification
  notification: INotificationInfo = {
    text: 'Notification Info Text',
    date: '12.07.20'
  };
  // confirm
  confirm: IConfirm = {
    title: 'You want to remove 25-29 November from holiday',
    desc: 'You holiday time will be delete'
  };
  // modal
  modalSuccess: IModal = {
    img: 'assets/img/modal/modal-img.svg',
    state: 'assets/img/success.svg',
    text: 'TEXT OF SUCCESS MODAL',
    success: true
  };
  modalDanger: IModal = {
    img: 'assets/img/modal/modal-img.svg',
    state: 'assets/img/danger.svg',
    text: 'TEXT OF DANGER MODAL',
    success: false
  };
  modalWOImg: IModal = {
    state: 'assets/img/danger.svg',
    text: 'TEXT OF DANGER MODAL',
    success: false
  };

  constructor() {}
}
