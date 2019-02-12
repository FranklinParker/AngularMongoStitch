import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {AnimateHomeComponent} from './animate/components/animate-home/animate-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'animate',
    component: AnimateHomeComponent
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
