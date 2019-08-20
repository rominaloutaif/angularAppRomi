import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { AddTaskComponent } from './shared/components/add-task/add-task.component';
import { TaskComponent } from './shared/components/task/task.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },

{   path:'my-tasks',
    component: MyTasksComponent,
  },

  {   path:'add-task',
    component: AddTaskComponent,
  },
  
{ path:'',
  component: AddTaskComponent,
},


{ path:'**',
  component: AddTaskComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
