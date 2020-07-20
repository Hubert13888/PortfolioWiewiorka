import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab21Component } from './tab21/tab21.component';
import { Tab22Component } from './tab22/tab22.component';
import { Tab23Component } from './tab23/tab23.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab4Component } from './tab4/tab4.component';
import { Tab31Component } from './tab31/tab31.component';

const routes: Routes = [
  {path: '', component: Tab1Component},
  {path: 'projects', component: Tab2Component},
  {path: 'projects/small', component: Tab21Component},
  {path: 'projects/medium', component: Tab22Component},
  {path: 'projects/large', component: Tab23Component},
  {path: 'skills', component: Tab3Component},
  {path: 'skills/:item', component: Tab31Component},
  {path: 'experience', component: Tab4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  Tab1Component,
  Tab2Component,
  Tab3Component,
  Tab4Component,
  Tab21Component,
  Tab22Component,
  Tab23Component
]