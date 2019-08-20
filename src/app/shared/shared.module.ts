import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertModule} from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AddTaskComponent, TaskComponent, TasksListComponent, HeaderComponent],
  imports: [
    CommonModule,AlertModule.forRoot(), ModalModule.forRoot(),
  ],
  exports:[
    AddTaskComponent, TaskComponent, TasksListComponent, HeaderComponent,
  ]
})
export class SharedModule { }
