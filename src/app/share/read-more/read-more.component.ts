import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnChanges {
  @Input() textCountLimit: number;
  @Input() plotText: string;

  fullTextShown = false;
  displayText: string;
  btnTxt = 'Read More';
  showReadMore = true;

  constructor() { }

  /**
   * used to trim the text based on textCount
   * @param  {SimpleChanges} changes
   * @returns void
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.showReadMore = this.plotText.length > this.textCountLimit ? true : false;
    this.trimText();
  }

  /**
   * Used to trim the text and enable/disable the 'Read more' button
   */
  trimText = () => {
    if (!this.fullTextShown) {
      this.displayText = this.plotText.length > this.textCountLimit ? this.plotText.substring(0, 200) + '...' : this.plotText;

    } else {
      this.displayText = this.plotText;
      this.btnTxt = 'Read Less';

    }
  }

  /**
   * Click handler for 'read more/read less' button
   */
  readMoreClicked = () => {
    this.fullTextShown = !this.fullTextShown;
    this.trimText();
  }

}
