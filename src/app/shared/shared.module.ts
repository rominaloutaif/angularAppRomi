import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [AddTaskComponent, TaskComponent, TasksListComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AddTaskComponent, TaskComponent, TasksListComponent, HeaderComponent,
  ]
})
export class SharedModule { }
