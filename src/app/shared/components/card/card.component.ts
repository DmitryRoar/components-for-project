import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {ICardInfo} from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() card: ICardInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
