import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { NotAvilableComponent } from './components/not-avilable/not-avilable.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'child', component: ChildComponent },
  { path: 'child2', component: Child2Component },
  { path: 'add', component: AddComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: UserDetailsComponent },
  {path: 'home/:id/edit',component:EditComponent},
  {path:'serach',component:SearchComponent},{
path:'reactiveForm',component:ReactiveComponent
  },
  {path:'**', component:NotAvilableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routings = [
  Child2Component,
  ChildComponent,
  AddComponent,
  HomeComponent,
  EditComponent,
  UserDetailsComponent,
  SearchComponent,
];
