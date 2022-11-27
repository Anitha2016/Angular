import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() taskList ;
  newTask:any;
  constructor(){}
  ngOnInit(): void {
    
  }
addTodo(){
  this.taskList.unshift(this.newTask);
  localStorage.setItem('my_tasks', JSON.stringify( this.taskList))
  this.newTask='';
}
}
