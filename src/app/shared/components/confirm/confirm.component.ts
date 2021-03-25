import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {IConfirm} from '../../interfaces/confirm.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent implements OnInit {
  @Input() confirm: IConfirm;

  constructor() { }

  ngOnInit(): void {
  }

}
