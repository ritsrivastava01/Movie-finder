import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { FeaturedMovieLayoutComponent } from './featured-movie-layout/featured-movie-layout.component';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../share/shared.module';

@NgModule({
  declarations: [
    FeatureComponent,
    FeaturedMovieLayoutComponent],

    imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule,
    TranslateModule,
  ]
})
export class FeaturedModule { }
