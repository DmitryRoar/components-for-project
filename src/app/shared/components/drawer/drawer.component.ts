import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {MenuList, TeacherInfo} from '../../interfaces/drawer.interface';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerComponent implements OnInit {
  @Input() teacher: TeacherInfo;
  @Input() lists: MenuList[];

  @Output() close = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit();
  }
}
