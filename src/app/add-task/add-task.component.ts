import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  newTask: Task = new Task('', false, '');
  obj = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  dzis = new Date();

  constructor() { }

  ngOnInit() {
  }

  addNewTask() {
    console.log(this.newTask);
    this.addTask.emit(this.newTask);
    this.newTask.$name = '';
    this.newTask.$category = '';
  }

}
