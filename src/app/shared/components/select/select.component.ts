import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {ISelect} from '../../interfaces/select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  @Input() select: ISelect;

  constructor() { }

  ngOnInit(): void {
  }

}
