import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {INotificationInfo} from '../../interfaces/notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit {
  @Input() notification: INotificationInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
