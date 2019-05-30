import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage } from 'src/app/core/language.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  selectedLanguage = 'English';
  languages: Array<ILanguage> = [];

  constructor(private translateService: TranslateService, private router: Router) { }

  /**
   * Set the language option as 'English' and 'Dutch'
   */
  ngOnInit() {
    this.languages.push(<ILanguage>{ name: 'English', code: 'en' });
    this.languages.push(<ILanguage>{ name: 'Dutch', code: 'nl' });
  }

  /**
   * language change handler
   * @param  {ILanguage} item
   */
  changeLanguage = (item: ILanguage) => {
    this.selectedLanguage = item.name;
    this.translateService.use(item.code);
  }

  /**
   * Navigate between 'Search' and 'Featured'
   * @param  {string} pageName
   */
  loadPage = (pageName: string) => {
    this.router.navigate([pageName]);
  }

}

