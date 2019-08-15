import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';



@NgModule({
  declarations: [HomeComponent, MyTasksComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
