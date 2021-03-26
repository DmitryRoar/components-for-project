import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {IInput} from '../../interfaces/input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsComponent implements OnInit {
  @Input() input: IInput;

  constructor() { }

  ngOnInit(): void {
  }

}
