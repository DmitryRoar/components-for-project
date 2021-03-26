import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {IInput} from '../../interfaces/input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  @Input() input: IInput;

  constructor() { }

  ngOnInit(): void {
  }

}
