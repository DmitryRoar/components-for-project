import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';

import {DrawerDirective} from './shared/directives/drawer.directive';
import {DrawerComponent} from './shared/components/drawer/drawer.component';

import {MenuList, TeacherInfo} from './shared/interfaces/drawer.interface';
import {IInput} from './shared/interfaces/input.interface';
import {IHomeWorkStatus} from './shared/interfaces/homework-status.interface';
import {INotificationInfo} from './shared/interfaces/notification.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DrawerDirective) drawerRef: DrawerDirective;

  // card
  img = 'assets/img/card/student-photo.png';
  lastLesson = '54:00';

  // drawer
  teacher: TeacherInfo = {
    img: 'assets/img/drawer/teacher-photo.png',
    firstName: 'Veronika',
    lastName: 'May'
  };
  drawerList: MenuList[] = [
    {path: 'notifications', title: 'Notifications settings'},
    {path: 'settings', title: 'Account settings'},
    {path: 'prices', title: 'Prices'},
    {path: 'reviews', title: 'My reviews'},
    {path: 'about', title: 'About service'},
    {path: 'contact', title: 'Contact us'}
  ];
  // select
  select = {
    value: ''
  };
  // input
  inputs: IInput[] = [
    {img: 'assets/img/input/phone.svg', label: 'Number', required: true, htmlId: 'phone'},
    {img: 'assets/img/input/geolocation.svg', label: 'Address', required: true, htmlId: 'geolocation'},
    {img: 'assets/img/input/user.svg', label: 'Name and surname', required: false, htmlId: 'user'},
    {img: 'assets/img/input/email.svg', label: 'Email', required: true, htmlId: 'phone'}
  ];
  // feedback
  feedback = {
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

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {
  }

  createDrawer(): void {
    const modalFactory = this.resolver.resolveComponentFactory(DrawerComponent);
    this.drawerRef.containerRef.clear();

    const component = this.drawerRef.containerRef.createComponent(modalFactory);
    component.instance.teacher = this.teacher;
    component.instance.lists = this.drawerList;
    component.instance.close.subscribe(() => {
      this.drawerRef.containerRef.clear();
    });
  }
}
