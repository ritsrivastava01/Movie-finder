import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MovieLayoutComponent } from './movie-layout/movie-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../share/shared.module';
import {
         MatInputModule,
         MatFormFieldModule,
         MatSelectModule,
         MatButtonModule,
         MatIconModule,
         MatCardModule,
         MatSnackBarModule,
        } from '@angular/material';

@NgModule({
  declarations: [
    SearchComponent,
    MovieLayoutComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    SharedModule,
    MatCardModule,
    MatSnackBarModule,
  ]
})
export class SearchModule { }
