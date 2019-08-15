import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {TaskComponent} from './shared/components/task/task.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'task', component: TaskComponent},
  
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**', redirectTo: 'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
