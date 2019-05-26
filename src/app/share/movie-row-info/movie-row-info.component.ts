import { Component, OnInit, Input } from '@angular/core';
import { IRating } from '../../core/rating.interface';

@Component({
  selector: 'app-movie-row-info',
  templateUrl: './movie-row-info.component.html',
  styleUrls: ['./movie-row-info.component.scss']
})
export class MovieRowInfoComponent implements OnInit {

  @Input() headerText: string;
  @Input() value: string | Array<IRating>;
  @Input() ShowAsList = false;
  @Input() flexDirection = 'row';
  @Input() showReadMore = false;
  @Input() textCountLimit = 0;

  arrList: Array<string> = [];

  constructor() { }

  /**
   * USed to generate the list if required
   */
  ngOnInit() {
    if (this.value instanceof Array) {
      this.arrList = this.value.map((x: IRating) => x.Source + ' ' + x.Value);
      this.value = this.arrList.join(',');
    }
    if (this.ShowAsList) {
      this.arrList = this.value.toString().split(',');
    }
  }

}
