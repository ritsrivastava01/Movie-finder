import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search/search.component';
import { FeatureComponent } from './featured/feature/feature.component';

// Routing in the application
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'featured', component: FeatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
