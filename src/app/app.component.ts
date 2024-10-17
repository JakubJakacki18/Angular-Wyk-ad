import { Component } from '@angular/core';
import { Task } from './Task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';
  zadania: Array<Task>;
  categories: string[] = [];

  constructor(private taskService: TasksService) {
    this.zadania = taskService.getTasks();
    this.zadania.forEach(el => {
      if (!this.categories.includes(el.$category)) {
        this.categories.push(el.$category);
      }
    });
  }

  addTask(task: Task) {
    console.log(task.$name, task.$category);
    this.zadania.push(new Task(task.$name, false, task.$category));
  }

}
