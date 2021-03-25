import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {IFeedback} from '../../interfaces/feedback.interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent implements OnInit {
  @Input() feedbackInfo: IFeedback;

  constructor() { }

  ngOnInit(): void {
  }

}
