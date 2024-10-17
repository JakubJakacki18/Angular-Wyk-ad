import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-print-tasks',
  templateUrl: './print-tasks.component.html',
  styleUrls: ['./print-tasks.component.css']
})
export class PrintTasksComponent implements OnInit {
@Input() zadania: Task[];
@Input() category: string;
  constructor() { }

  ngOnInit() {
  }

}
