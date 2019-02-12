import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {AnimateHomeComponent} from './animate/components/animate-home/animate-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animation: {page: 'rootPage'}}
  },
  {
    path: 'animate',
    component: AnimateHomeComponent,
    data: {animation: {page: 'animatePage'}}

  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesModule',
    data: {animation: {page: 'messagePage'}}

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
