import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {IHomeWorkStatus} from '../../interfaces/homework-status.interface';

@Component({
  selector: 'app-homework-status',
  templateUrl: './homework-status.component.html',
  styleUrls: ['./homework-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeworkStatusComponent implements OnInit {
  @Input('homeworkStatus') status: IHomeWorkStatus;

  constructor() {
  }

  ngOnInit(): void {
  }

}
