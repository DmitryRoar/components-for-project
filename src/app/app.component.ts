import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';

import {MenuList, TeacherInfo} from './shared/interfaces/drawer.interface';
import {DrawerDirective} from './shared/directives/drawer.directive';
import {DrawerComponent} from './shared/components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DrawerDirective) drawerRef: DrawerDirective;

  // card
  src = 'assets/img/user-photo.png';
  lastLesson = '54:00';

  // drawer
  teacher: TeacherInfo = {
    img: 'assets/img/teacher-photo.png',
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
