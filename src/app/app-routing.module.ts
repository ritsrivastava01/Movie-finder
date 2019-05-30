import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search/search.component';

// Routing in the application
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'featured', loadChildren: './featured/featured.module#FeaturedModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
