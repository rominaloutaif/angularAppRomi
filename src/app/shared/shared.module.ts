import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { HeaderComponent } from './components/header/header.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

import { AlertModule} from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [
    AddTaskComponent, 
    TaskComponent, 
    TasksListComponent, 
    HeaderComponent],
  
  imports: [
    CommonModule,
    AlertModule.forRoot(), 
    ModalModule.forRoot(), 
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  exports:[
    AddTaskComponent, TaskComponent, TasksListComponent, HeaderComponent,
  ]
})
export class SharedModule { }
