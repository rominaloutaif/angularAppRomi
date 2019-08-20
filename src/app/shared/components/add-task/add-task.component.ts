import { Component, OnInit, TemplateRef, Output } from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Task} from '../../interfaces/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public modalRef: BsModalRef;
  public newTaskForm: FormGroup;
  //@Output() newTask = new EventEmitter<task>();

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    //this.buildForm();
  }

  public openAddModal(template: TemplateRef<any>):void{
    this.modalRef=this.modalService.show(template);
  }
}
