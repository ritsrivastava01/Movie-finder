import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { ReadMoreComponent } from './read-more/read-more.component';
import { MovieRowInfoComponent } from './movie-row-info/movie-row-info.component';

@NgModule({
  declarations: [
     HeaderComponent,
     ReadMoreComponent,
     MovieRowInfoComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    MovieRowInfoComponent
  ]
})
export class SharedModule { }
